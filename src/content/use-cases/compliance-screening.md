---
title: 'Compliance & watchlist screening'
summary: 'Match entities against sanctions and reference lists, tolerating name variation.'
description: 'Compliance screening with entity matching: screen customers and counterparties against sanctions and watchlists while tolerating spelling, transliteration, and alias variation, all inside your own infrastructure.'
order: 5
icon: '⊠'
faqs:
  - question: 'Does name transliteration break sanctions matching?'
    answer: 'It breaks fixed-rule matching, not a trained one. A single Arabic or Cyrillic name has many valid Latin spellings, so an edit-distance cutoff either floods analysts with false hits or skips the variant that mattered. MadMatcher learns from your screening history which transliterations and reorderings mean the same entity.'
  - question: 'Can I tune screening to favor recall over precision for high-risk lists?'
    answer: 'Yes. The matcher is a trained model with measured precision and recall, so you set the operating point your risk posture calls for and shift it per list. You lean toward recall on sanctions screening, where a miss is a breach, and toward precision on lower-risk reference lists to cut analyst load.'
  - question: 'Does screening data leave my environment?'
    answer: 'No. MadMatcher runs inside your own infrastructure, so customer and counterparty records stay within the audit and access controls you already answer to. Nothing is copied to an outside service.'
---

Screening customers and counterparties against sanctions lists is only as good as the [matching](/glossary/matching) underneath it, and the matching is hard because watchlists are almost all names, and names are the worst field to match on. One Arabic or Cyrillic name has many valid Latin spellings, and a company shows up with and without its legal suffix or under a former name. The lists themselves carry aliases, so your internal record rarely matches a list entry character for character.

## Why one edit-distance cutoff can’t screen names

A fixed similarity cutoff fails because the two ways to screen wrong pull in opposite directions and cost very different amounts. Match loosely and analysts drown in false positives, with common names flagged all day and onboarding stalled. Match strictly and a sanctioned party slips through, which is a breach with regulators attached. One edit-distance cutoff in SQL cannot serve both. It flags common names constantly and still misses the transliteration that mattered.

## How MadMatcher screens entities against watchlists

MadMatcher learns the variation instead of hard-coding it. [Blocking](/glossary/blocking) narrows your records down to plausible list candidates. A matcher trained on about 600 labeled pairs from your own screening history then decides which name differences mean the same entity, whether a difference is a transliteration or a known alias. Because the model is trained and measured, you set the precision and recall point your risk posture calls for, and you re-tune it as lists and tolerances change. It is a classifier, not a black box, so you can see which features it relies on, in plain terms, when you need to show a regulator how the screening works.

## Keeping screening data inside your controls

Screening data never leaves your perimeter. MadMatcher [runs in your own infrastructure](/blog/run-entity-matching-in-your-own-infrastructure), so customer and counterparty records stay inside the audit and recordkeeping boundary you already operate, with nothing handed to an outside service. As watchlists and internal records grow, the same trained matcher re-runs without anyone rebuilding the rules.

[How matching works →](/how-it-works) · [Why benchmarked blocking matters →](/why-madmatcher) · [Talk to us →](/contact)
