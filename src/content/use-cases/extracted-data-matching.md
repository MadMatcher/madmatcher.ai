---
title: 'Entity matching for extracted data'
summary: 'Resolve the duplicate, inconsistent records that document and LLM extraction pipelines produce into clean entities.'
description: 'Entity matching for extracted data: resolve the duplicate and inconsistent records that document and LLM extraction pipelines produce into clean entities, inside your own infrastructure.'
order: 2
icon: '◦'
faqs:
  - question: 'Why does LLM extraction produce duplicate records?'
    answer: 'Extraction structures text, it does not resolve identity. Two documents, or two runs of the same prompt, rarely produce identical output for one entity, so pulling the same company out of ten thousand contracts gives you ten thousand rows that nearly agree but no record of which are the same.'
  - question: 'Should I deduplicate extracted records before loading a vector store or knowledge graph?'
    answer: 'Yes. Resolving entities before they reach a vector store or knowledge graph keeps retrieval and graph traversal from working over many copies of one thing. Load unresolved extractions and your index double-counts entities and returns redundant or conflicting results.'
  - question: 'Does MadMatcher extract entities from documents too?'
    answer: 'No. MadMatcher matches records, it does not extract them. Keep your document or LLM extraction pipeline for the parsing, and use MadMatcher for the step that decides which extracted rows point to the same real-world entity.'
---

Document and LLM extraction pipelines are good at one job: turning unstructured sources into structured records. Pull a company out of a single PDF and you get a clean row. Pull the same company out of ten thousand contracts and filings and you get ten thousand rows that almost agree. Extraction structures the text. It does not decide which of those rows are the same real-world entity, and that is where the duplicates pile up. Resolving them is an [entity matching](/glossary/entity-matching) job, not an extraction one.

## Why extraction output can’t be joined clean

The output is noisy by nature, so neither a join nor a cutoff resolves it. One run calls a company "Acme Corp.", the next calls it "ACME Corporation". A clean date in one record is a free-text blob in the next, and fields go missing wherever the source was vague. Join the extracted text and you drop real matches. Pick a similarity cutoff and you either fuse distinct entities or leave the obvious duplicates apart. What you ship looks structured and still double-counts the things inside it.

## How MadMatcher resolves extracted entities

MadMatcher is the layer between extraction and your store. Once the records exist, [blocking](/glossary/blocking) narrows the pair space, and a model you train on about 600 labeled pairs decides which rows point to the same entity. It learns the signals that separate your entities instead of running a fixed rule, and [the small label set](/blog/how-many-labels-does-a-matcher-need) is usually the part people worry about. This is [deduplication](/glossary/deduplication) of your extracted output, run before it reaches a vector store or knowledge graph, so your index does not count many copies of one thing as many things.

## Where it runs, and where the boundary is

It runs [in your own infrastructure](/blog/run-entity-matching-in-your-own-infrastructure), on Apache Spark for a large corpus or a single machine for a small one, so the extracted records stay inside your perimeter. There is one boundary to be clear about. MadMatcher matches records, it does not extract them. Keep your extractor for the parsing and use MadMatcher for the resolution.

[How matching works →](/how-it-works) · [Compare approaches →](/compare) · [Talk to us →](/contact)
