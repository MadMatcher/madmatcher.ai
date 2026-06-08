---
title: 'Why run entity matching in your own infrastructure'
description: 'Running entity matching in your own Spark or single-machine environment keeps sensitive records inside your perimeter, with no data egress and a shorter compliance review.'
pubDate: 2026-05-28
author: 'Dev Ahluwalia'
tags: ['entity-matching', 'data-residency', 'apache-spark']
---

Run entity matching in your own infrastructure when the records you are matching are sensitive. Shipping them to a vendor cloud creates a data-residency and compliance problem you then have to solve. MadMatcher runs inside your own Apache Spark cluster or on a single machine, so the data never leaves your perimeter.

## What "no data egress" actually buys you

No data egress means the records you match never cross your network boundary, and that one property removes a whole category of work. The data you feed an [entity matching](/glossary/entity-matching) pipeline is usually your most sensitive, the PII and financial records you already guard most carefully. Send a copy to a third-party service and you have created a new system that stores that data. That means a new vendor security review and a new place a breach or a subpoena can reach your customers' records. Keep the computation inside your own environment and most of that does not arise. There is no copy of the data at a vendor to review or breach, and the encryption and access controls you already run apply unchanged, because the job runs where those controls already live.

## How it helps with compliance and security review

Running matching in place makes a regulatory or security review much shorter, because the hardest questions are about where data goes, and the answer is nowhere. Rules like HIPAA and GDPR residency requirements turn on the location and movement of regulated data. When the data does not leave your boundary, the matching system inherits the compliance posture of the environment it runs in, instead of forcing a fresh assessment of an outside processor. This matters most in the domains where matching is valuable. [Healthcare record linkage](/use-cases/healthcare-record-linkage) joins patient records under HIPAA, and [compliance screening](/use-cases/compliance-screening) matches against watchlist data under rules that discourage exporting it. In-perimeter execution lets you do the matching without exporting the regulated data to do it.

## Cost and operational control

Keeping the data local also removes egress cost and the network round-trips of moving it out and back. Moving hundreds of millions of records to a vendor and back is slow, and on most clouds it is billed by the gigabyte. Doing the work next to where the data already sits means no bulk transfer and no third-party outage sitting between you and your pipeline. You also keep operational control. You choose the cluster size and the schedule, and you can run on hardware you have already paid for.

For long-running production jobs there is [MadMatcher-Pro](/products), which adds crash recovery and progress tracking so a multi-hour run survives a failure instead of restarting from scratch, all still inside your own environment.

## How it composes into your existing stack

MadMatcher is built to drop into the data platform you already run, not to replace it. The core is open source: Sparkly and Delex for [blocking](/glossary/blocking), and [MatchFlow](/products#matchflow) for [matching](/glossary/matching). It runs on [Apache Spark](/blog/entity-resolution-at-scale-on-spark) for large data and on pandas on a single machine for smaller jobs, so it sits on the same compute you use for the rest of your pipeline. It reads your tables and writes match results back as a batch job, fitting alongside your warehouse and orchestration rather than asking you to move data into a new silo. That extends to the matcher itself. MatchFlow trains a standard scikit-learn or PySpark MLlib classifier on your labeled pairs, and [active learning](/glossary/active-learning) means you reach a good model from [about 600 labels](/blog/how-many-labels-does-a-matcher-need) without exporting the data to label it. You bring the data and the labels, and the pipeline stays inside your walls.

If your records are too sensitive to ship to a vendor, that is the case MadMatcher is built for. [Talk to the team about your data](/contact), or read [how it works](/how-it-works) to see how the pieces fit your environment.
