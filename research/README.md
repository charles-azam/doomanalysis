# Research archive

Everything the agents wrote while building Doom Analysis, kept so a new contributor (or their agent) has the full context.
The site reads none of it: the live data is in `src/data/`, and the commands are in `../README.md`. Files keep the paths
they had when written (`pdoom/...`, local temp folders): the site lived in `pdoom/` of Charles's website repository until
26 November 2026.

Downloaded sources (reports, PDFs, datasets, about 1.7 GB) are not stored here. Every number on a card cites its source
URL, and the data pipeline downloads what it needs (see `../README.md`).

## v0.3 (25–26 November 2026), the current model

- `plan.md`: the plan Charles approved for v0.3, with every modelling decision and why.
- `brief.md`: the contract given to the card research agents (scales, card format, sources).
- `judge-curves-world-countries-timeline/`: prompts (`curves/`, `world/`, `countries/`, `timeline/`), the jobs given to
  the judge workflow (`country-jobs.json`), and every answer (`answers/`).
- `judge-countries-channels/`: the second country round, with the superintelligence channel readings.
- `judge-level2/`: the level 2+ round, by cause and over time.
- `spot-check.json`, `spot-comment.md`: an independent check of 30 card values against their sources (28 confirmed,
  2 unverifiable).

The card research itself was written straight into `src/data/cards/*.ts` and `src/content/explainers/` by the workflow
in `../judge/workflows/cards-research.js`.

## v0.2 (24 November 2026)

- `brief.md`: the brief given to the research agents.
- `research/`: their findings as JSON, by group (AI, climate, people, resources, society, projections).
- `judge/`: the world prompt and answers, and the country batches.
- `work_resources/`, `scripts/`, `scripts_people/`, `extract.py`, `check-country.ts`: the tables and scripts used to
  build v0.2's numbers (essentials, fiscal data, population, superintelligence timing).

## v0.1 (23 November 2026)

- `judge-prompt.md` and `judge/`: the first judge prompt and its three runs.
- `research/projections.json`: the first projections.

## The superintelligence article

`si-article/`: the research notes behind "2050: P(SI) ≈ 67%, P(abundance | SI) ≈ 25%, P(doom | SI) ≈ 7%" on
charlesazam.com/blog/superintelligence-physical-world/, the essay that came before this site (energy, compute,
robotics, planetary limits). Its code stays in the website's repository.
