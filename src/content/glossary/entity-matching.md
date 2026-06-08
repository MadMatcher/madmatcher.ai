---
term: 'Entity matching'
aka: ['entity resolution', 'record linkage']
definition: 'Entity matching is the task of identifying records that refer to the same real-world entity, across or within datasets, even when those records are not identical.'
---

Entity matching answers one question. Do these two records describe the same thing? Real-world data is full of typos and missing fields, so an exact comparison fails. The same customer shows up in many forms that are not identical.

A full entity matching pipeline has two core stages: [blocking](/glossary/blocking/) to generate candidate pairs, and [matching](/glossary/matching/) to classify them. It often adds a labeling stage to train the matcher.

The terms **entity resolution** and **record linkage** mean the same thing as entity matching, with slightly different roots in different fields.

[Read the full guide →](/about/entity-matching)
