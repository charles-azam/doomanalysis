# Research brief: Doom Analysis v0.2

Doom Analysis (doom.charlesazam.com) estimates the probability of **doom** (irreversible, civilization-wide collapse), **collapse** and **abundance** by **2100**, for the world, regions and countries. Every estimate is shown with and without superintelligence (SI). Each indicator ("factor") gets a card showing:
- today's value
- the 2100 forecast
- the thresholds that push toward doom
- **the probability of crossing each threshold by 2100**

Readers also get a short explainer per factor.

Today is 2026-11-24. You are one of several research agents, each covering a group of factors.

## Definitions (fixed)
- Five essentials: energy, fresh water, food, health, security.
- **Abundance (2100):** at least 90% of residents have all five essentials, and the essentials cost under 10% of national income (public and private spending combined), averaged over 2096–2100. The country must not have collapsed along the way. This tests the claim, made by Elon Musk among others, that superintelligence makes essentials nearly free.
- **Collapse:** a majority of residents lose reliable access to at least one essential for five years or more, at any point before 2100.
- **Doom:** human extinction, or an irreversible civilization-wide collapse before 2100.

## Rules
- **Accuracy beats coverage.** Only report a number you actually saw on a page, PDF or dataset you fetched. Never fill a value from memory. If you cannot verify something, say so and leave it out, or mark it null.
- Quote at most 15 words from any source. Paraphrase everything else.
- Do not edit any file in a git repository. Write only to the output paths given below.
- Plain, concrete English for a curious general reader. Short sentences. No jargon without a one-line explanation. No hype, no doom-mongering: state what the evidence says and how sure it is.

## Deliverable 1: one explainer per factor
Write `/private/tmp/claude-501/-Users-charlesazam-github-charles-azam-github-io/e1909179-3d1a-41ed-9dbc-94826798a9d1/scratchpad/explainers/<factorId>.md`, 300–550 words, in exactly this format:

```
---
factor: <factorId>
title: <Factor name>
summary: <one sentence, at most 25 words: why this matters for doom or abundance>
sources:
  - label: <Publisher, title, year>
    url: <https://...>
---

## What it is
## Why it matters
## Where it stands
(today, the trend, and the 2100 outlook, with numbers and their sources)
## The lines that matter
(each threshold: what it is, who defines it, what crossing it does)
## What superintelligence can and cannot change
```

In the body, cite sources as markdown links. Every number in the body needs a link or must appear in `sources`.

## Deliverable 2: structured data
Write `/private/tmp/claude-501/-Users-charlesazam-github-charles-azam-github-io/e1909179-3d1a-41ed-9dbc-94826798a9d1/scratchpad/research/<group>.json`:

```json
{
  "projections": [{"factorId": "...", "entity": "WLD or ISO3", "value": 0, "low": 0, "high": 0, "year": 2100, "scenario": "...", "source": "...", "url": "https://...", "note": "..."}],
  "thresholds":  [{"factorId": "...", "value": 0, "label": "short, <= 16 chars", "severity": "limit|danger", "basis": "published|judgment", "consequence": "what crossing it does, <= 15 words", "source": "...", "url": "https://..."}],
  "exceedance":  [{"factorId": "...", "entity": "WLD", "threshold": 0, "direction": "above|below", "year": 2100, "probability": 0.0, "basis": "published|derived|judged", "source": "...", "url": "https://...", "reasoning": "one sentence"}],
  "notes": ["anything the site author must know: conflicts between sources, caveats, gaps"]
}
```

- `exceedance` is the probability that the factor crosses that threshold by 2100.
  - `published`: a source states the probability.
  - `derived`: computed from a published distribution. Say how in `reasoning`.
  - `judged`: your own estimate, with one-sentence reasoning. Use this only when nothing is published, and never present a judged number as published.
- Give exceedance for every threshold you list.
- `projections` covers the central 2100 value (or the furthest published year; say which in `scenario`). Include a likely range when published.

## Final reply
Keep it short: the files written, the 5 most important numbers, and anything you could not verify.
