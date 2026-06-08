---
title: 'Active learning for entity matching'
description: 'Active learning trains a matcher from about 600 labels instead of tens of thousands, by labeling only the pairs the model is unsure about.'
pubDate: 2026-05-27
author: 'Dev Ahluwalia'
tags: ['active-learning', 'matching']
---

A supervised matcher needs labeled examples. Labeling tens of thousands of pairs by hand is slow and expensive, and it's where a lot of matching projects stall. Active learning is how you avoid it.

## What it does

Instead of labeling a large random sample, the model picks which pairs it wants labeled. For entity matching, that means the pairs near the decision boundary, the ones it's most unsure about. A pair the model is already confident about teaches it little. An ambiguous one teaches it a lot.

Most record pairs are easy: obvious matches and obvious non-matches dominate any dataset, and labeling them is wasted effort. The ambiguous pairs are rare but informative. Active learning spends your labeling budget on those.

## In MatchFlow

MatchFlow's labeling step uses this. It can't run active learning directly on the full candidate set (often hundreds of millions of pairs), so it first takes a sample with `down_sample`, then iteratively asks you to label informative pairs with a CLI or web labeler. In practice this is about 600 labels rather than tens of thousands.

You then train a classifier (XGBoost, Random Forest, or any scikit-learn / PySpark MLlib model) on those labels and apply it to the full candidate set.

[How matching works →](/how-it-works)
