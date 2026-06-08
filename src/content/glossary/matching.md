---
term: 'Matching'
aka: ['pair classification']
definition: 'Matching is the stage of entity matching that decides, for each candidate pair produced by blocking, whether the two records refer to the same real-world entity.'
---

Matching runs only on the candidate pairs that survived [blocking](/glossary/blocking/), so it can afford to be precise. It classifies each pair as a match or not, using anything from hand-authored rules to supervised machine learning.

The key metric for matching is **precision**, alongside recall: of the pairs it labels a match, how many truly are? A learned matcher reaches high accuracy on hard, varied domains, at the cost of needing labeled examples. MadMatcher's [MatchFlow](/products#matchflow) trains a classifier such as XGBoost or Random Forest on your labels.

[Why a trainable matcher matters →](/why-madmatcher)
