---
title: 'Quickstart'
description: 'Block two tables with Sparkly, then train and apply a matcher with MatchFlow, on Apache Spark.'
order: 1
---

This is a minimal end-to-end pipeline on Apache Spark: block two tables with Sparkly, then
train and apply a matcher with MatchFlow. The code mirrors the example scripts in each repo.
See [sparkly/examples](https://github.com/MadMatcher/sparkly/tree/main/examples) and
[MatchFlow/examples](https://github.com/MadMatcher/MatchFlow/tree/main/examples) for the full
runnable scripts.

> Prerequisite: install the packages first. Sparkly requires PyLucene, which is built from
> source and cannot be pip installed. Complete the [Installation](/docs/installation/) steps
> (including PyLucene) before running anything below.

Both tables need an `_id` column with unique values. Sparkly's `_id` must be a 32- or 64-bit
integer.

## 1. Block with Sparkly

Sparkly indexes one table, then searches it with the other to return the top-k candidate
pairs per record. This mirrors
[basic_example.py](https://github.com/MadMatcher/sparkly/blob/main/examples/basic_example.py).

```python
from pyspark.sql import SparkSession
from sparkly.index import LuceneIndex
from sparkly.index_config import IndexConfig
from sparkly.search import Searcher
from sparkly.utils import check_tables_manual

# number of candidates returned per record
limit = 50

spark = (
    SparkSession.builder
    .master('local[*]')
    .appName('MadMatcher Quickstart')
    .getOrCreate()
)

table_a = spark.read.parquet('table_a.parquet')   # table to index
table_b = spark.read.parquet('table_b.parquet')   # table to search with

# validate the id columns before any other Sparkly operation
check_tables_manual(table_a, '_id', table_b, '_id')

# index table A on its 'name' field, tokenized into 3-grams
config = IndexConfig(id_col='_id')
config.add_field('name', ['3gram'])

index = LuceneIndex('/tmp/example_index/', config)
index.upsert_docs(table_a)

# query spec that searches all indexed fields, then search with table B
query_spec = index.get_full_query_spec()
searcher = Searcher(index)
candidates = searcher.search(table_b, query_spec, id_col='_id', limit=limit)
```

`candidates` is a Spark DataFrame rolled up per search record: an `id2` (the table B record)
and an `id1_list` (the matching table A ids). MatchFlow consumes this `(id2, id1_list)`
format directly.

## 2. Match with MatchFlow

MatchFlow builds feature vectors, labels a sample with active learning, trains a classifier,
then applies it to the full candidate set. This mirrors
[matchflow_spark_local.py](https://github.com/MadMatcher/MatchFlow/blob/main/examples/spark-local-examples/matchflow_spark_local.py).

```python
from xgboost import XGBClassifier
from MatchFlow import (
    create_features, featurize, down_sample, create_seeds,
    label_data, train_matcher, apply_matcher,
    check_tables, check_candidates,
)
from MatchFlow import SKLearnModel, CLILabeler

# keep only the columns MatchFlow needs from the blocking output
candidates = candidates.select('id2', 'id1_list')

# validate inputs before any core MatchFlow function
check_tables(table_a, table_b)
check_candidates(candidates, table_a, table_b)

# create a candidate feature set from the table schemas and data
features = create_features(
    A=table_a,
    B=table_b,
    a_cols=['name'],
    b_cols=['name'],
)

# convert each candidate pair into a feature vector
feature_vectors = featurize(
    features=features,
    A=table_a,
    B=table_b,
    candidates=candidates,
    output_col='feature_vectors',
    fill_na=0.0,
)

# take a sample of the feature vectors for active learning
downsampled_fvs = down_sample(
    fvs=feature_vectors,
    percent=0.3,
    search_id_column='_id',
    score_column='score',
    bucket_size=1000,
)

# label by hand with the CLI labeler (a WebUILabeler is also available)
labeler = CLILabeler(a_df=table_a, b_df=table_b, id_col='_id')

seeds = create_seeds(
    fvs=downsampled_fvs,
    nseeds=50,
    labeler=labeler,
    score_column='score',
)

model = SKLearnModel(
    model=XGBClassifier,
    eval_metric='logloss', objective='binary:logistic', max_depth=6, seed=42,
    nan_fill=0.0,
)

# active learning in batch mode to label more pairs
labeled_data = label_data(
    model=model,
    mode='batch',
    labeler=labeler,
    fvs=downsampled_fvs,
    seeds=seeds,
    batch_size=10,
    max_iter=50,
)

# train the matcher, then apply it to every candidate pair
trained_model = train_matcher(
    model=model,
    labeled_data=labeled_data,
    feature_col='feature_vectors',
    label_col='label',
)

predictions = apply_matcher(
    model=trained_model,
    df=feature_vectors,
    feature_col='feature_vectors',
    prediction_col='prediction',
    confidence_col='confidence',
)
```

If you already have labeled pairs, skip active learning and use passive learning. If all
matches are known, the `GoldLabeler` can simulate labeling to measure precision and recall.
See the [Spark examples](https://github.com/MadMatcher/MatchFlow/tree/main/examples/spark-local-examples).

The matcher can use any Scikit-Learn or PySpark MLlib classifier (XGBoost above, Random
Forest, and so on).

## Next

- Run it on your own tables. MatchFlow ships a `GoldLabeler` for computing precision and
  recall against known matches.
- Use [Delex](https://github.com/MadMatcher/delex) when one blocking strategy is not enough.
- Read [how it works](/how-it-works) for the reasoning behind each step.
