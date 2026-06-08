---
title: 'Precision and recall in entity matching: choosing your operating point'
description: 'Precision is the share of your predicted matches that are real, and recall is the share of real matches you found. Blocking is tuned for recall, and the matcher sets the balance your costs call for.'
pubDate: 2026-05-21
author: 'Dev Ahluwalia'
tags: ['entity-matching', 'fundamentals', 'matching']
---

In entity matching, precision is the share of your predicted matches that are real, and recall is the share of real matches you actually found. Every pipeline sits somewhere on the trade-off between the two. Where it should sit depends on what a wrong merge costs you and what a missed match costs you.

## What precision and recall mean for matching

Precision and recall count two different mistakes. A pair of records either refers to the same [entity](/glossary/entity-matching) or it does not, and your pipeline either calls it a match or it does not. Precision asks how many of the pairs you called matches were real. Low precision means false merges, where two different people or products collapse into one record. Recall asks how many of the real matches you caught. Low recall means missed links, where one entity stays split across rows. You cannot push both to their maximum at once. Make the matcher call more pairs matches and recall rises while precision falls. Make it stricter and the reverse happens. The question is never whether the pipeline is accurate in the abstract. It is where on that curve you want to sit, and that choice is your operating point.

## Why blocking is tuned for recall

[Blocking](/glossary/blocking) is tuned almost entirely for recall, because a pair it drops can never come back. Comparing every pair of records is quadratic, so a table with hundreds of millions of rows has far too many possible pairs for a [matcher](/glossary/matching) to score. Blocking produces a smaller set of plausible pairs and throws the rest away. Whatever it throws away is gone, and no amount of matcher tuning downstream recovers a true pair that blocking already dropped. So blocking sets the recall ceiling for the whole pipeline. That is why it aims for high recall and tolerates loose precision. It is fine for the candidate set to hold plenty of non-matches, because the matcher filters those out. Sparkly does this with top-k TF/IDF similarity, and it [outperforms eight state-of-the-art blockers (VLDB 2023)](https://www.vldb.org/pvldb/vol16/p1507-paulsen.pdf) on exactly this recall-at-scale problem. For more on how the two stages split the work, see [blocking vs. matching](/blog/blocking-vs-matching).

## Where the matcher sits on the trade-off

The matcher is where the precision and recall balance is actually set. It runs only on the candidate pairs blocking kept, so it can afford to be thorough. In MatchFlow the matcher is a machine-learning model, usually a gradient-boosted classifier (XGBoost), trained on your labeled pairs to predict whether two records are the same entity. It learns that decision from your own data rather than from a fixed similarity cutoff, so it picks up the signals that actually separate your entities, like a matching tax ID counting for more than a shared common name. Because it is trained and measured on held-out pairs, you can read its precision and recall and aim for the balance your costs call for. The one limit it cannot cross is the recall ceiling blocking already set. It only ever rules on the pairs blocking kept, so it can never recover a true match that blocking discarded.

This is why MatchFlow trains a supervised classifier instead of relying on a fixed rule. A model that learns your domain separates matches from non-matches more cleanly, which lifts the whole precision and recall curve and gives you better operating points to choose from. You still pick the point. The model makes every point better.

## How to choose your operating point

Pick the operating point by weighing the cost of a wrong merge against the cost of a missed match. The two costs are rarely equal, and in some domains both are high. [Healthcare record linkage](/use-cases/healthcare-record-linkage) is the hard case. A wrong merge can attach the wrong allergy or medication history to a chart, and a missed link scatters one patient across records and hides earlier care and known allergies. Both directions cause harm, so you set the operating point deliberately and lean by workflow rather than treat either error as free. In [compliance screening](/use-cases/compliance-screening), missing a real match to a watchlist is the expensive failure, so recall dominates and reviewers absorb the extra false positives. Other domains, like a [customer 360](/use-cases/customer-360), sit softer, and you tune by feel.

To make this concrete, hold out a labeled set and read the model's precision and recall across its operating points, with the cost of each kind of error in mind. Then choose the point where the expected cost is lowest, rather than accepting a default. Measure recall on blocking and precision and recall on matching separately, since they are different stages with different jobs.

## How active learning relates

Active learning improves the curve you are choosing on, not the choice itself. A learned matcher needs labeled pairs, and [active learning](/glossary/active-learning) gets you a good model from [about 600 labels](/blog/how-many-labels-does-a-matcher-need) by asking you to label only the pairs near the model's decision boundary. Those boundary pairs are the ones that set where precision and recall trade off, so labeling them sharpens the model right where your operating point will sit. You train on those labels, run the trained model over the full candidate set, and choose your operating point on the result.

Choosing an operating point is a judgment about your data and your costs, and it is one we make with customers regularly. [Talk to the team about your data](/contact) if you want help picking yours, or see [how the pipeline fits together](/how-it-works).
