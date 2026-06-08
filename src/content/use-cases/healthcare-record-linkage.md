---
title: 'Healthcare record linkage'
summary: 'Link patient records across systems where identifiers don’t line up, without moving the data.'
description: 'Healthcare record linkage with entity matching: connect patient records across EHRs, labs, and registries despite inconsistent identifiers, running entirely inside your own environment with no data egress.'
order: 4
icon: '✛'
faqs:
  - question: 'Can you link patients without a shared MRN?'
    answer: 'Yes. An MRN only helps when every system has it and recorded it correctly, which rarely holds across organizations. A trained matcher links patients from name and date of birth even when the MRN is missing or mistyped.'
  - question: 'How do you avoid false merges of two different patients?'
    answer: 'The matcher is a trained model with measured precision and recall, so you set the balance you need and can defend it. For a merge that is hard to undo you lean toward precision. You move an operating point rather than rewrite a rule.'
  - question: 'Does PHI ever leave our environment?'
    answer: 'No. MadMatcher runs on your own infrastructure, so protected health information never moves to an outside service, and the work stays inside the governance and audit boundary you already maintain.'
---

One patient shows up in your EHR, your lab system, your billing platform, and an immunization registry, and each one assigned a different ID. The EHR has the legal name and date of birth. The lab has whatever the order form happened to capture. Link these records and you get a full clinical picture. Link them wrong and you either split one patient's history in two or merge two people who were never the same patient, in a setting where the mistake reaches the bedside.

## Why ID joins and one threshold fail on patient data

The fields that should connect these records do not hold still, so neither an ID join nor a single cutoff is safe. People go by nicknames and by maiden or married names, so "William" and "Bill" are one patient. Birth dates pick up transposed digits. An MRN only helps when every system recorded it and recorded it correctly, which rarely holds across organizations. An exact ID join loses the patient the moment an identifier is missing or mistyped, and one similarity cutoff cannot be right for a name field and a date field at once. In a clinic, a missed match and a false merge both cause harm.

## How MadMatcher links patient records

MadMatcher learns which agreements and disagreements actually tell patients apart. [Blocking](/glossary/blocking) reduces the comparisons. [MatchFlow](/products#matchflow) then trains on about 600 labeled pairs from your own records and produces a model you can [tune for precision or recall](/blog/precision-and-recall-in-entity-matching). For a merge that is hard to undo you lean toward precision. For case-finding you lean toward recall. You move the operating point rather than rewrite a rule. Because the model is measured against held-out pairs, you know its precision and recall instead of trusting a cutoff no one checked.

## Why it runs without moving PHI

PHI never moves to an outside service, because MadMatcher [runs on your own infrastructure](/blog/run-entity-matching-in-your-own-infrastructure) and the work stays inside the governance and audit boundary you already have. The linking happens where the records already live, across your EHR, labs, billing, and registries.

[How in-infrastructure deployment works →](/why-madmatcher) · [How matching works →](/how-it-works) · [Talk to us →](/contact)
