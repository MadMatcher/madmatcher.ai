---
title: 'Retail & e-commerce'
summary: 'Unify customers across channels and loyalty, and products across marketplaces, suppliers, and brands.'
description: 'Retail and e-commerce entity matching: unify customers across channels and loyalty programs, and products across marketplaces, suppliers, and acquired brands, at scale and inside your own infrastructure.'
order: 11
icon: '◦'
faqs:
  - question: 'How do you link a shopper across store, web, and marketplace with no shared key?'
    answer: 'The channels share no key, so a trained matcher learns cross-channel identity from what they do hold. It ties the in-store loyalty card to the web email from matching names and phone numbers, even when a nickname and a changed email are all that distinguish them.'
  - question: 'Can you match products when the GTIN is missing across feeds?'
    answer: 'Yes. The GTIN that should anchor a product is missing as often as not, so the product model learns that a reworded, spec-heavy title and a keyword-stuffed one with matching attributes are the same item, using the GTIN as strong evidence only when it is present.'
  - question: 'Why use two separate models for customers and products?'
    answer: 'Retail data comes apart along two different seams, so MadMatcher trains one model for customers and one for products. Each has its own signals, cross-channel identity for shoppers and attribute matching for items, and a single rule cannot serve both.'
---

Retail data comes apart along two seams at once. A shopper buys in store on a loyalty card and online under a different email, and a marketplace order comes in under a name that ties back to neither, so one customer reads as three. The same physical product arrives from a supplier feed and a marketplace listing, each with its own title and attributes, so one product reads as several. Personalization and inventory both depend on pulling those back together with [entity matching](/glossary/entity-matching), and nothing joins cleanly across the feeds.

## Why neither customers nor products join cleanly

Both seams defeat a plain join and a fixed cutoff, for different reasons. On the customer side the channels share no key, just a nickname on the loyalty card and an email that changed with a new job. On the product side a supplier writes a spec-heavy title and a marketplace writes a keyword-stuffed one, and the GTIN that should anchor the item is missing as often as not. A single similarity cutoff merges distinct items at one setting and leaves duplicates at the next. The cost shows up in revenue and operations. Personalization reaches the same person more than once, and assortment analysis is wrong when an acquired brand's catalog will not merge.

## How MadMatcher unifies customers and products

MadMatcher handles both as the separate problems they are, a model for customers and a model for products, each trained on about 600 labeled pairs from your own data, with [active learning](/blog/active-learning-for-entity-matching) keeping the labeling light. The customer model learns cross-channel identity, tying the in-store card to the web email without a shared key, while the product model learns that a reworded title with a matching GTIN is one item. Add a new brand or supplier feed and the trained matcher takes it on.

## How it runs at retail scale

It all runs [inside your own environment](/blog/run-entity-matching-in-your-own-infrastructure), on Apache Spark for catalogs and customer bases that reach into the hundreds of millions of records per table, so retail data never leaves your perimeter.

[How matching works →](/how-it-works) · [Compare approaches →](/compare) · [Talk to us →](/contact)
