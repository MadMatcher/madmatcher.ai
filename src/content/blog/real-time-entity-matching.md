---
title: "Real-time entity matching from the same pipeline"
description: "MadMatcher-Pro publishes a finished batch build as a serving bundle and matches single incoming records in milliseconds, with results identical to batch."
pubDate: 2026-08-12
author: "Dev Ahluwalia"
tags: ["real-time", "madmatcher-pro"]
---

Batch matching resolves a table, or an incremental slice, as a job. For most data-integration and [deduplication](/glossary/deduplication) work that's the right shape. But some records don't arrive as a table: a new account to screen, an incoming product to place against a catalog, a claim to check as it's filed. [We wrote earlier](/blog/entity-resolution-at-scale-on-spark) that sub-second matching per request is a different system. With MadMatcher-Pro's real-time serving, it's no longer a different pipeline.

## Publish once, then serve

Serving adds exactly one step to a finished batch build. A publish call packages what the build already produced (the blocking index, the feature list, the trained matcher) into a versioned serving bundle on disk. A resident matcher then loads the bundle once and stays warm; every call after that blocks, featurizes, and predicts for one incoming record, in-process, with no Spark job on the request path.

Because serving reuses the batch artifacts and calls the same code, a served match is identical to the batch match for the same record and data. That isn't a design goal we aim at; it's asserted by a parity test that checks a served feature vector is bit-identical to the batch one.

## How fast

In the runnable demo that ships with Pro, resident TF/IDF blocking answers in roughly 0.6 ms per record, at 0.993 recall on a standard benchmark dataset. Multi-strategy blocking comes in around 0.9 ms. Semantic (embedding-based) blocking lands near 100 ms per record, and that floor is the live embedding model, not the matcher: the block itself stays sub-millisecond. End to end, a single record goes from arrival to predicted matches in milliseconds.

## Four ways to serve

Records rarely arrive one perfect request at a time, so the serving layer has a surface for each shape of traffic:

- **One record at a time.** The simplest call: a record in, its matches out.
- **Batches.** Many records in one call, sharing one featurize and predict pass.
- **Micro-batches.** Concurrent single-record calls are coalesced into small windows automatically, trading a few milliseconds of delay for much higher throughput.
- **Worker pools.** Threads over one shared matcher, or worker processes that scale near-linearly across cores.

## Connect a source to a sink

There's also an orchestration loop that drives records from a source to a sink: Parquet and CSV files, in-memory queues, or callbacks on either end. A durable variant checkpoints as it goes and resumes after a crash. There is no hosted endpoint and no vendor cloud in the path; you bring the transport (an HTTP handler or a queue consumer feeds records in), and results flow to files, a DataFrame, or your own callback. Like everything else in MadMatcher, it [runs in your infrastructure](/blog/run-entity-matching-in-your-own-infrastructure).

## Keeping the data fresh

The data a bundle serves against is fixed when the bundle is published. To fold in new records, you re-run the build and publish a new bundle version; a hot-swappable matcher picks up the new version with zero downtime, finishing in-flight requests on the old one. That's a deliberate design: the serving path stays simple and fast, and freshness is a republish away, not a per-record index update.

[MadMatcher-Pro and consulting →](/products)
