---
term: 'Active learning'
aka: ['uncertainty sampling']
definition: 'Active learning is a training strategy in which the model chooses which examples it wants labeled (typically the pairs it is most uncertain about) so it reaches high accuracy from far fewer labels.'
---

In entity matching, most record pairs are obvious matches or obvious non-matches, and they teach a model very little. The informative pairs are the ambiguous ones near the decision boundary. Active learning uses this. Instead of labeling a large random sample, you label only the pairs the model is most unsure about, then retrain and repeat.

The payoff is far less labeling, about 600 pairs instead of tens of thousands, for the same accuracy. MadMatcher's [MatchFlow](/products#matchflow) uses an uncertainty-sampling labeler to build training data this way.

[Label less, match better →](/blog/active-learning-for-entity-matching/)
