---
term: 'Blocking'
aka: ['indexing', 'candidate generation']
definition: 'Blocking is the stage of entity matching that generates a small set of candidate record pairs likely to match, so that the matcher never has to compare every possible pair.'
---

Comparing every pair of records is a quadratic operation, infeasible beyond modest sizes. Blocking solves this by grouping or indexing records so that only plausibly-matching pairs become candidates, discarding the rest before matching runs.

The key metric for blocking is **recall**: any true match that blocking drops can never be recovered downstream, so blocking sets the ceiling on the whole pipeline's accuracy. Good blocking is high-recall while keeping the candidate set small.


MadMatcher's [Sparkly](/products#sparkly) does TF/IDF blocking and, in its VLDB 2023 paper, outperforms eight state-of-the-art blocking solutions.

[Blocking vs. matching, explained →](/blog/blocking-vs-matching/)
