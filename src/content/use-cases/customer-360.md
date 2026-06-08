---
title: 'Customer 360'
summary: 'Unify duplicate and fragmented customer records across systems into one profile.'
description: 'Build a Customer 360 with entity matching: resolve duplicate and fragmented customer records across CRM, billing, and support into one profile, at scale and inside your own infrastructure.'
order: 1
icon: '◎'
faqs:
  - question: 'Why does an exact join fail to build a Customer 360?'
    answer: 'An exact join needs a shared key, and your systems rarely agree on one. Change a single character, like "Bob Smith" instead of "Robert Smith Jr.", and the join reads them as two people. The matches you wanted get dropped, and the one profile you were building never forms.'
  - question: 'How does MadMatcher know which customer fields matter most?'
    answer: 'It learns the weighting from about 600 labeled examples instead of rules you set by hand. From your own data it works out that a matching email and surname are strong evidence and a shared first name is weak. You do not have to encode any of that or keep patching it.'
  - question: 'Can I add a new source system later without starting over?'
    answer: 'Yes. The matcher you already trained takes on a new system without starting over. If the new source formats things differently, you label a small number of pairs from it, and the model extends to cover it.'
---

The same customer is in your CRM as Robert Smith Jr. and in billing as Bob Smith. Support has them under an old work email and a phone number missing the country code. None of these records link up, because the systems do not share a customer ID. So you email the same person twice, and they count as three people in your numbers. Getting them back to one customer is an [entity matching](/glossary/entity-matching) problem.

## Why exact joins and SQL fuzzy matching fall short

An exact join only works when both systems carry the same ID, and these do not. One stray character is enough to split a person in two. SQL fuzzy matching does not save you either. Set the cutoff low and it merges people who are not the same. Set it high and the duplicates stay. You end up hand-coding which differences count, and the setting that works on one system breaks on the next one you connect. The damage is quiet. You pay to reach the same person twice, and a rep on the phone has no idea the caller is one of your biggest accounts.

## How MadMatcher resolves customer records

MadMatcher learns what tells two customers apart, so you stop writing rules by hand. [Blocking](/glossary/blocking) trims the data down to the pairs worth comparing. A matcher you train on about 600 labeled examples from your own records then decides, pair by pair, whether two records are the same person. It picks up from your examples that a shared email and surname are strong evidence and that a shared first name is weak. The labeling stays small because [active learning](/blog/active-learning-for-entity-matching) only puts the unclear pairs in front of you. You end up with [deduplication](/glossary/deduplication) built from your own examples.

## Keeping regulated customer data in your perimeter

Customer data stays in your environment. MadMatcher [runs in your own infrastructure](/blog/run-entity-matching-in-your-own-infrastructure), which matters when those records are regulated. When you add a new source, you label a few pairs from it if its formatting is different, and the same matcher carries over.

[See how matching works →](/how-it-works) · [Talk to us →](/contact)
