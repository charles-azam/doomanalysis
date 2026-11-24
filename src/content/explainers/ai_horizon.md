---
factor: ai_horizon
title: "AI task horizon"
summary: "How long a task the best AI can finish on its own, a leading yardstick for how close superintelligence and its risks are."
sources:
  - label: "METR, Time horizons of frontier AI models (page last updated 8 Sep 2026), 2026"
    url: https://metr.org/time-horizons/
  - label: "METR, Time Horizon 1.1 benchmark results data file, 2026"
    url: https://metr.org/assets/benchmark_results_1_1.yaml
  - label: "METR, AI R&D-relevant model capabilities are improving rapidly and are getting harder to measure, 2026"
    url: https://metr.org/blog/2026-11-20-q4-2026-capability-update/
  - label: "METR, Independent Assessment of AI R&D Acceleration at Anthropic in October 2026, 2026"
    url: https://metr.org/blog/2026-11-05-anthropic-ai-rd-acceleration-assessment
  - label: "Kwa et al. (METR), Measuring AI Ability to Complete Long Tasks, 2025"
    url: https://arxiv.org/html/2503.14499v3
  - label: "International AI Safety Report 2026, section 2.2.2, 2026"
    url: https://internationalaisafetyreport.org/publication/international-ai-safety-report-2026
---

## What it is

METR, an independent AI-testing group, times how long skilled people take to finish a set of tasks, mostly software and machine-learning engineering. It then runs AI agents on the same tasks. A model's "50% time horizon" is the length of human task it completes half the time. A 17-hour horizon means the model succeeds, about half the time, at tasks that take a professional 17 hours.

## Why it matters

The horizon tracks one ability that drives both abundance and doom: working alone, for a long time, toward a goal. The [International AI Safety Report 2026](https://internationalaisafetyreport.org/publication/international-ai-safety-report-2026) says losing control of AI would require long autonomous operation that today's agents lack, but that horizons are lengthening fast. Pointed at research, the same ability could speed up science and engineering.

## Where it stands

- On METR's main chart, the best model, an early Claude Mythos Preview, scored 17.4 hours, with a 95% range of 8.5 to 55 hours ([METR data](https://metr.org/assets/benchmark_results_1_1.yaml)). METR warns that values above 16 hours are unreliable with its tasks, and the page stopped updating in September 2026 ([METR](https://metr.org/time-horizons/)).
- Since 2023 the horizon has doubled about every 129 days, or 4.2 months ([METR data](https://metr.org/assets/benchmark_results_1_1.yaml)). Over 2019–2025 it doubled about every seven months ([Kwa et al.](https://arxiv.org/html/2503.14499v3)).
- In November 2026 METR added harder tasks. On this combined set, GPT-6 Astra reached about 40 hours, with a very wide range of 13 to 2,645 hours. Doubling took about 3.6 months, and a naive extrapolation reaches 200 hours, the longest task in the set, by July 2027 ([METR, Nov 2026](https://metr.org/blog/2026-11-20-q4-2026-capability-update/)).
- Is progress speeding up? On a benchmark index, not time horizons, Anthropic's models improved about 1.9 times faster after October 2025 than from March 2024 to October 2025; across all developers, about 1.4 times ([METR](https://metr.org/blog/2026-11-05-anthropic-ai-rd-acceleration-assessment)). METR's own index shows no strong speed-up across public models ([METR, Nov 2026](https://metr.org/blog/2026-11-20-q4-2026-capability-update/)).
- Nobody publishes a value for 2100. If the trend holds, the horizon outgrows any test timed against humans well before 2030.

## The lines that matter

- **One work-week (40 hours).** AI finishes week-long projects alone. The latest central estimate sits at this line.
- **One work-month (167 hours).** METR's own milestone. Its 2025 paper put it around mid-2029, with an 80% range of mid-2028 to mid-2030, using the slower 2019–2025 trend ([Kwa et al.](https://arxiv.org/html/2503.14499v3)).
- **One work-year (about 2,000 hours).** Twelve METR work-months. An AI at this level could run a research program from start to finish, close to what superintelligence implies.

Our own judgment, not a published figure: about 97%, 88% and 60% chances of reaching these lines by 2030, and 98%, 95% and 90% by 2100. The gap is the chance that progress stalls or a catastrophe stops it.

## What superintelligence can and cannot change

This factor is the road to superintelligence, not something it acts on. Near superintelligence the yardstick breaks: METR already struggles to find people who beat the models, and worries its tests overstate real-world skill ([METR, Nov 2026](https://metr.org/blog/2026-11-20-q4-2026-capability-update/)). The tasks are also tidy and scored by computer. Models do worse on tasks that are costly to set up or that need judgment without clear feedback, so a long horizon on tests does not guarantee reliability in messy real work.
