---
title: 'Product & catalog matching'
summary: 'Deduplicate products and match listings across suppliers and marketplaces.'
description: 'Reconcile product catalogs with entity matching: deduplicate SKUs and match listings across suppliers and marketplaces even when titles, attributes, and identifiers differ, in your own infrastructure.'
order: 3
icon: '▤'
faqs:
  - question: 'What if products have no shared UPC or GTIN?'
    answer: 'Items with no usable UPC still get resolved. A trained matcher works from titles and attributes like material and pack size, so a clean UPC becomes strong evidence when it exists but is never required. That matters because the code is missing or padded with stray zeros about as often as not.'
  - question: 'How does matching tell apart products that share most of their text?'
    answer: 'It learns which attributes decide a match. Two products can share most of their title and differ only on pack size or voltage, so the matcher is trained to weight those attributes heavily and treat word order and marketing adjectives as noise.'
  - question: 'Can it scale to a catalog of hundreds of millions of items?'
    answer: 'Yes. MadMatcher runs on your own Apache Spark cluster for large catalogs or a single machine for small ones, and handles catalogs that reach into the hundreds of millions of items per table.'
---

Two listings read "16oz Stainless Steel Water Bottle, BPA-Free" and "Water Bottle Steel 500ml." Same product, barely a word in common. The field that should identify an item is its title, and titles read like prose. The field that should anchor it is the UPC, and the UPC goes missing or shows up padded with stray zeros about as often as not.

## Why UPC joins and title fuzzy-matching backfire

Joining on UPC is out, and fuzzy-matching the titles backfires. Marketing filler inflates the similarity of unrelated items, while short, accurate listings score low. The distinctions that decide a match tend to be small. Two products share most of their text and differ only on the one attribute, a pack size or a voltage, that makes them separate SKUs. The damage is easy to miss. A duplicate SKU splits demand and breaks reorder math, and search shows the same thing three times while burying the listing the shopper wanted.

## How MadMatcher resolves product listings

MadMatcher learns those distinctions from your catalog. [Blocking](/glossary/blocking) narrows the pairs, and then you label about 600 of the pairs a person actually has to think about. The matcher picks up that material and pack size decide a match while word order and adjectives do not. [That small label set](/blog/how-many-labels-does-a-matcher-need) is enough to make a clean UPC strong evidence when it exists, while items with no usable UPC still get [resolved](/glossary/deduplication). Point it at a new supplier feed later and it carries over what it already learned.

## How it runs at catalog scale

It runs on your own Spark cluster or a single machine, [inside your own environment](/blog/run-entity-matching-in-your-own-infrastructure), on catalogs that reach into the hundreds of millions of items per table. The same trained matcher re-runs as feeds change, so the catalog stays deduplicated without a rebuild.

[How matching works →](/how-it-works) · [Why a trainable matcher →](/why-madmatcher) · [Talk to us →](/contact)
