---
title: 'Insurance claims & policyholders'
summary: 'Link claimants, policyholders, providers, and claims across systems.'
description: 'Insurance claims and policyholder matching with entity matching: link claimants, policyholders, providers, and claims across systems, at scale and inside your own infrastructure.'
order: 8
icon: '◦'
faqs:
  - question: 'How does linking claims to prior claims help detect fraud?'
    answer: 'A claimant who is not tied to prior claims is a blind spot. Linking a new claim back to earlier claims and policies surfaces the repeat patterns a flat join misses, which is the connection a trained matcher is built to catch.'
  - question: 'Can it consolidate a provider that bills under several names and tax IDs?'
    answer: 'Yes. A provider model learns when a group name with a matching tax ID is one provider, even across three names and two tax IDs, so network analysis and payment integrity stop treating one provider as several.'
  - question: 'Why treat claimants, providers, and policyholders as separate models?'
    answer: 'Each is a different matching problem with different signals. A married name at a shared address identifies a policyholder, while a tax ID identifies a provider, so MadMatcher trains a separate model per entity type instead of forcing one rule over all of them.'
---

An insurer's data is full of the same people and companies showing up again under different descriptions. One policyholder's auto and home policies sit in the system as two unrelated customers. A provider bills under three names and two tax IDs. When these records are not [linked](/glossary/record-linkage), you cannot see total exposure, and a repeat claimant slips by because no one tied the new claim to the old ones.

## Why exact joins leave exposure hidden

A plain join causes every one of these misses. A policyholder counted as two customers hides total exposure. A claimant not tied to prior claims is a hole in fraud detection. Policy and claims systems were built or bought separately, so the same person is keyed differently in each. Names pick up initials and married-name changes, and birth dates get transposed. A single similarity cutoff fuses unrelated claimants at one setting and, set tighter, leaves one person scattered across policies.

## How MadMatcher links claims and policyholders

Each of these is a different matching problem, and MadMatcher treats them that way. After [blocking](/glossary/blocking) trims the pairs, a model trained on about 600 labeled pairs from your own books learns that a married name at a shared address is one policyholder, while a group name with a matching tax ID is one provider. You did not write either rule. [Active learning](/blog/active-learning-for-entity-matching) keeps the labeling small, and tying a new claim back to prior claims is exactly the [link](/glossary/matching) a flat join misses and a trained matcher catches.

## Keeping policyholder data inside your controls

It runs inside your environment, so policyholder and health-related data stays within the controls you already have. As your books and claim volume grow, the same trained matcher [re-runs at scale](/blog/run-entity-matching-in-your-own-infrastructure) on your own cluster.

[How matching works →](/how-it-works) · [Why a trainable matcher →](/why-madmatcher) · [Talk to us →](/contact)
