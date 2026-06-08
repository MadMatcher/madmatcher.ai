---
title: 'Travel & hospitality'
summary: 'Build one guest profile across properties, booking channels, and loyalty systems.'
description: 'Travel and hospitality entity matching: unify guest profiles across properties, booking channels (OTAs, direct, GDS), and loyalty systems, at scale and inside your own infrastructure.'
order: 12
icon: '◦'
faqs:
  - question: 'How do you match a guest when the OTA masks the email?'
    answer: 'A trained matcher learns that a masked agency email with a matching name and phone is the same guest, so the masking does not break the link. It works from the fields that survive, such as name and phone, rather than relying on an email the channel deliberately hides.'
  - question: 'Can you build one guest profile without a shared loyalty ID?'
    answer: 'Yes. The agency booking, the direct reservation, and the loyalty profile rarely share a key, so the matcher connects them from the data they do hold. A returning member who books through an agency stops checking in as a stranger.'
  - question: 'Does guest data stay within our regional privacy obligations?'
    answer: 'It runs inside your own environment, which keeps guest data within your regional privacy obligations and access controls. Nothing is copied to an outside service, and a new property or channel feed is matched in place.'
---

A guest reaches a hotel through a different door every time, and each door keeps its own record. A booking through an online travel agency comes in with a masked email and whatever name the agency stored, while a direct reservation on the brand site has the real details. Loyalty has a member record that may connect to neither. So one guest becomes several, and the single profile that loyalty and personalization assume is not there. Building it is an [entity matching](/glossary/entity-matching) problem.

## Why exact joins fail across booking channels

The channels make matching harder on purpose, which is why a plain join finds nothing and a fixed cutoff cannot cover it. The agency masks the email, and a booking flow asks for less than a loyalty signup. So an exact join has nothing to land on, and a single similarity cutoff cannot be right for a masked email and a truncated name at once. You feel the result at the front desk. A returning member books through an agency and checks in as a stranger, and lifetime value reads low because one guest is counted as several.

## How MadMatcher unifies guest profiles

MadMatcher learns the patterns instead of guessing a cutoff. [Blocking](/glossary/blocking) narrows the candidate pairs, and a model trains on about 600 labeled pairs from your own bookings. It learns that a masked agency email with a matching name and phone is the same guest, with [active learning](/blog/active-learning-for-entity-matching) keeping the labeling small. It connects the agency booking and the direct reservation to the loyalty profile [without a shared key](/glossary/record-linkage).

## Keeping guest data in your region

It runs inside your own environment, which keeps guest data within your regional privacy obligations, and a new property's history or a new channel feed reuses the same trained matcher [without moving anything outside](/blog/run-entity-matching-in-your-own-infrastructure).

[How matching works →](/how-it-works) · [Why a trainable matcher →](/why-madmatcher) · [Talk to us →](/contact)
