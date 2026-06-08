---
title: 'Research & bibliographic data'
summary: 'Match publications, authors, and citations across bibliographic sources.'
description: 'Research and bibliographic data with entity matching: match publications, authors, and citations across bibliographic databases that share no common identifier, at scale and inside your own infrastructure.'
order: 7
icon: '◦'
faqs:
  - question: 'How do you disambiguate authors who share a name?'
    answer: 'Author disambiguation is its own trained model. "J. Smith" may be several distinct researchers, so the model learns from labeled pairs which co-authors and affiliations mean the same person, rather than collapsing everyone with a matching name into one.'
  - question: 'Can you match publications without a shared DOI?'
    answer: 'Yes. Most records share no DOI to join on, so MadMatcher works directly on titles and authors. It learns when a punctuation difference or a dropped subtitle still means the same work, instead of waiting for an identifier that usually is not there.'
  - question: 'Was MadMatcher’s blocking benchmarked on bibliographic data?'
    answer: 'Yes. Bibliographic matching is one of the settings its blocking was measured on, where it outperforms eight state-of-the-art blockers (VLDB 2023). Citation data is a hard case because titles and author renderings drift from one source to the next.'
---

This is the kind of data MadMatcher's [blocking](/glossary/blocking) was measured on, and it is a hard case for a reason. One paper turns up in several bibliographic databases and a dozen citation lists, each with a slightly different title and a different rendering of the authors. An author is "J. Smith" in one record and "John Smith" in the next, and shares a name with three other researchers. Tie all of that back to one paper and one person and you have the foundation for any literature analysis. Miss it and the counts and the citation credit come out wrong.

## Why exact joins can’t tie records together

Exact joins will not get you there, because most records share no DOI to join on, and the fields that remain drift in stubborn ways. Titles vary in punctuation and subtitle, and an author appears as initials in one record and a full name in another. A single similarity cutoff cannot cover it. The setting that works for a long, distinctive title is wrong for a short one and useless for telling two "J. Smith"s apart. The same blocking step that makes this tractable [outperforms eight state-of-the-art blockers (VLDB 2023)](/why-madmatcher) on exactly this kind of data.

## How MadMatcher matches publications and authors

MadMatcher treats the two jobs here, publication matching and author disambiguation, as the separate problems they are. Each learns from about 600 labeled pairs which differences mean the same work or the same person, and [active learning](/blog/active-learning-for-entity-matching) keeps that labeling low. It works directly on the titles and authors rather than waiting for an identifier that usually is not there.

## How it runs over large corpora

It runs on your own Spark cluster or a single machine, [over corpora in the hundreds of millions](/blog/run-entity-matching-in-your-own-infrastructure), without shipping anything out. The same trained models re-run as new sources and citation lists are added.

[Why benchmarked blocking matters →](/why-madmatcher) · [How matching works →](/how-it-works) · [Talk to us →](/contact)
