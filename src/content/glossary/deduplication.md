---
term: 'Deduplication'
aka: ['dedup', 'duplicate detection']
definition: 'Deduplication is entity matching applied within a single dataset, finding and resolving records that refer to the same entity so each real-world thing appears once.'
---

Deduplication is the special case of [entity matching](/glossary/entity-matching/) where you match a dataset against itself. The goal is a clean set of records where each customer or product appears exactly once, with duplicates linked or merged.

It uses the same machinery as cross-dataset matching, [blocking](/glossary/blocking/) to generate candidate pairs within the table and then [matching](/glossary/matching/) to classify them. It faces the same scaling problem, since the number of within-table pairs grows quadratically with the number of rows.

[See the Customer 360 use case →](/use-cases/customer-360/)
