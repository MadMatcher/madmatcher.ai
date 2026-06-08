---
title: 'Entity matching at scale'
description: 'Why resolving hundreds of millions of records is a different problem from resolving a few thousand, and how Spark handles it.'
pubDate: 2026-06-02
author: 'Dev Ahluwalia'
tags: ['scale', 'apache-spark']
---

Resolving a few thousand records is a spreadsheet task. Resolving hundreds of millions is a different problem, because the number of possible pairs grows with the square of the number of records. A 10× bigger dataset is a 100× bigger comparison problem.

## What changes at scale

Two things stop working:

- Comparing all pairs becomes impossible, so aggressive, high-recall blocking is no longer optional. It's the only way the job exists.
- The candidate set and feature vectors outgrow one machine's memory, so the work has to be split across many.

## Where Spark fits

Sparkly does blocking on Spark: it builds a Lucene index over one table and runs top-k search distributed across a cluster, scaling to hundreds of millions of tuples per table. MatchFlow handles the matching side, including the fact that featurizing and labeling hundreds of millions of pairs isn't trivially parallel. For example, active learning runs on a constructed sample of the candidate set rather than the whole thing.

MatchFlow runs three ways: pandas on a single machine for small data, Spark on a single machine for testing, and Spark on a cluster for large data (roughly 5M+ tuples per table). You start small and move to a cluster when the data demands it.

## Batch, not real-time

This is batch matching: you resolve a table, or an incremental slice, as a job. For most data-integration and deduplication work that's the right shape. If you need sub-second matching per request, that's a different system.

[Why MadMatcher runs in your infrastructure →](/why-madmatcher)
