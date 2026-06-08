---
title: 'How many labels does a learned matcher need?'
description: 'A learned matcher usually needs about 600 labeled pairs, not tens of thousands, because active learning spends your labeling budget on the ambiguous pairs that teach the model the most.'
pubDate: 2026-06-04
author: 'Dev Ahluwalia'
tags: ['active-learning', 'matching', 'entity-matching']
---

A learned matcher usually needs about 600 labeled pairs, not tens of thousands, as long as you label the right pairs. That is the number we suggest planning for. Active learning is what makes it possible, because it asks you to label only the pairs the model is unsure about, so a small budget goes a long way.

## The practical answer: about 600, not tens of thousands

In practice a [supervised matcher](/glossary/matching) reaches a strong model from about 600 labeled pairs. The instinct from general machine learning is that you need a large labeled set, and if you label a random sample, that instinct is right, because matching data is heavily imbalanced. In any candidate set, obvious non-matches dominate and the easy cases are common. A random sample is almost all easy pairs the model would have gotten right anyway, so you label thousands of examples and learn very little. The fix is not more labels, it is better-chosen labels. When the labeling is targeted, about 600 pairs is enough to train a matcher that generalizes across the full candidate set, even one with [hundreds of millions of pairs](/blog/entity-resolution-at-scale-on-spark).

## Why active learning selects informative pairs

[Active learning](/glossary/active-learning) works because the informative pairs are the ones near the model's decision boundary, and it goes after them on purpose. A pair the model is already sure about teaches it almost nothing. A pair it is unsure about sits where the match and non-match cases blur together, and resolving it sharpens the boundary the most. So instead of labeling a random sample, the model picks the pairs it wants labeled, choosing the ones nearest its current decision boundary. Each label is spent where it changes the model most. Those boundary pairs are also the ones that set where [precision and recall trade off](/blog/precision-and-recall-in-entity-matching), so targeted labeling sharpens the model right where your operating point will sit.

## The labeling loop in MatchFlow

In MatchFlow the loop is sample, label, train, repeat. The candidate set after [blocking](/glossary/blocking) is far too large to run active learning over directly, so MatchFlow first takes a manageable sample of it with `down_sample`. It then surfaces the most informative pairs from that sample and asks you to label them through a CLI or a web labeler. Each round you label a small batch, the model retrains, and it picks the next batch of unclear pairs. After a few rounds you have about 600 labels and a trained classifier. That classifier is a standard scikit-learn or PySpark MLlib model, which you then apply to the full candidate set. The labeling is an afternoon at a keyboard, not a labeling contract. For the mechanics in more detail, see [active learning for entity matching](/blog/active-learning-for-entity-matching).

## Bring your own labels

If you already have labeled pairs, you can hand them straight to the matcher and skip or shorten the active-learning loop. Many teams have prior match decisions sitting in their data, like a [customer 360](/use-cases/customer-360) effort with a history of manual merges, or a [compliance](/use-cases/compliance-screening) workflow where analysts have already adjudicated cases. Those decisions are training labels. You can seed the model with them and train directly, or use active learning only to fill in coverage where your existing labels are thin.

## How this compares to other approaches

About 600 targeted labels is a different bet than the two extremes of the matching landscape. Label-hungry neural methods can be accurate, but they demand large labeled sets, which puts the labeling cost up front and stalls many projects before they start. At the other end, zero-shot prompting and fixed pretrained models ask for no labels at all, but they do not learn the signals specific to your domain, so on messy real-world data their precision and recall on your records are whatever the general model happens to give you. Active learning sits in the middle by design. A small, cheap labeling effort buys a model tuned to your data and your error costs. You get the domain fit of a supervised approach without the label-hunting bill, and a model you control rather than one you prompt and hope works.

If you want to estimate the labeling effort for your data, or you already have labels and want to put them to work, [talk to the team about your data](/contact) or see [how matching works](/how-it-works).
