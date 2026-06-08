---
title: 'Blocking vs. matching'
description: 'Entity matching has two steps. Blocking generates candidate pairs, matching classifies them. They optimize for different things.'
pubDate: 2026-05-20
author: 'Dev Ahluwalia'
tags: ['entity-matching', 'fundamentals']
---

Entity matching has two steps, and they solve different problems. Blocking decides which record pairs are worth comparing. Matching decides which of those pairs are real.

## Blocking

Comparing every pair of records is quadratic. A million records is half a trillion pairs, so you can't run a matcher on all of them. Blocking produces a smaller candidate set of pairs that might match, and discards the rest.

Blocking is judged on recall: of all true matches, how many made it into the candidate set? A pair that blocking drops can't be recovered later, so blocking sets the recall ceiling for the whole pipeline. Sparkly does blocking with top-k TF/IDF similarity and was benchmarked on this in the [VLDB 2023 paper](https://www.vldb.org/pvldb/vol16/p1507-paulsen.pdf).

## Matching

Matching runs only on the candidate pairs blocking kept, so it can be more expensive and precise. It classifies each pair as a match or not. It's judged on precision and recall: of the pairs it called matches, how many were real.

MatchFlow does matching with a supervised classifier trained on labeled pairs. Because it learns from your data, it adapts to the specific signals that separate matches in your domain.

## Why the split matters

If you skip blocking and lean on the matcher, the job doesn't finish: there are too many pairs. If you treat blocking as an afterthought (a couple of hand-written join keys), you silently drop true matches that don't share those keys, and no amount of matcher tuning brings them back.

Build them as two steps, and measure recall on blocking and precision on matching separately.

[How the pipeline fits together →](/how-it-works)
