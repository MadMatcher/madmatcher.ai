---
title: 'Financial services'
summary: 'Resolve customers, accounts, and counterparties across core banking, cards, lending, and acquired institutions.'
description: 'Financial services entity matching: resolve customers, accounts, and counterparties across core banking, cards, lending, and acquired institutions for KYC and a single customer view, at scale and inside your own infrastructure.'
order: 9
icon: '◦'
faqs:
  - question: 'How does entity matching support KYC and single-customer-view obligations?'
    answer: 'It connects records that share no common key, so one person stops reading as several. KYC and single-customer-view rules assume a depositor and a borrower can be tied to one customer, and a trained matcher makes that link from names and partial tax IDs even when the systems disagree.'
  - question: 'Can a matcher link a firm under its trading name and its registered legal entity?'
    answer: 'Yes. You run a model for business counterparties that learns when a trading name and a registered legal name are the same firm. Aggregate counterparty risk then stops double-counting that firm. Retail customers get their own model, since their records follow different conventions.'
  - question: 'Does this meet data residency requirements?'
    answer: 'It runs entirely in your own infrastructure, so customer data never leaves the controls that residency and privacy rules require. Nothing is sent to an outside service, and an acquired file can be matched in place.'
---

A bank almost never sees a customer as one person. Core banking has the deposit account they opened years ago. Lending has them again as a borrower, keyed off a loan application, and the bank you acquired last year brought a third file under a different spelling. KYC and single-customer-view rules assume those records connect, and across these systems they do not.

## Why scattered records are a regulatory risk

When the records do not connect, the problems are regulatory before they are operational. Sanctions screening that runs on fragments misses a match it should have caught. You cannot meet a single-customer-view obligation when one person reads as several, and credit exposure looks smaller than it is when a borrower's other accounts are not tied to them. A plain join cannot bridge this, and a fixed similarity cutoff cannot either. A name picks up a suffix in one place and a transliteration in another, and a tax ID that is masked in the core system is complete in the loan file.

## Resolving customers and counterparties

MadMatcher learns these patterns from your own books. [Blocking](/glossary/blocking) cuts the data down to the pairs worth comparing. A matcher trained on about 600 labeled pairs then learns that a transliterated name with a matching tax ID is one customer, and [active learning](/blog/active-learning-for-entity-matching) keeps the labeling small. You train a separate model for retail customers and another for business counterparties, since the two are keyed and written differently. A trading name and a registered legal name then resolve to one firm, so aggregate counterparty risk stops counting it twice.

## Keeping customer data inside residency controls

Customer data never leaves your controls. MadMatcher [runs in your own infrastructure](/blog/run-entity-matching-in-your-own-infrastructure), which matters under residency and privacy rules. When you acquire an institution, you match its customer file in place without shipping it anywhere.

[How matching works →](/how-it-works) · [Compare approaches →](/compare) · [Talk to us →](/contact)
