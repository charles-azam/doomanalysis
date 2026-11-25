---
factor: ai_horizon
title: "AI task horizon"
summary: "How long a task, in hours of expert work, the best AI finishes on its own half the time; it has doubled about every four months."
sources:
  - label: "International AI Safety Report 2026, Executive Summary, February 2026"
    url: https://internationalaisafetyreport.org/publication/international-ai-safety-report-2026
  - label: "METR, Task-Completion Time Horizons of Frontier AI Models (last updated 8 September 2026), 2026"
    url: https://metr.org/time-horizons/
  - label: "METR, AI R&D-relevant model capabilities are improving rapidly and are getting harder to measure, November 2026"
    url: https://metr.org/blog/2026-11-20-q4-2026-capability-update/
  - label: "METR, Time Horizon 1.1 benchmark results data file, 2026"
    url: https://metr.org/assets/benchmark_results_1_1.yaml
  - label: "Kwa et al. (METR), Measuring AI Ability to Complete Long Tasks, 2025"
    url: https://arxiv.org/html/2503.14499v3
  - label: "Lifland and Jurkovic, AI 2027 Timelines Forecast, 2025"
    url: https://ai-2027.com/research/timelines-forecast
---

## Why it matters here

To escape control, AI would need to work alone for long stretches. In February 2026 the International AI Safety Report found that today's systems cannot yet escape control, though they are getting better at autonomous work, one of the abilities it takes ([IASR 2026](https://internationalaisafetyreport.org/publication/international-ai-safety-report-2026)). METR, an independent testing group, times skilled people on tasks, mostly software, machine learning and cybersecurity, and finds the task length at which an AI agent succeeds half the time: its time horizon ([METR](https://metr.org/time-horizons/)).

## In numbers

- Today: GPT-6 Astra reaches about 40 hours on METR's harder November 2026 task set, with a 95% range of 13 to 2,645 hours; Claude Opus 5.5 reaches 39 ([METR](https://metr.org/blog/2026-11-20-q4-2026-capability-update/)).
- Doubling time: about 3.6 months on that set, with a range of 2.1 to 4.9 ([METR](https://metr.org/blog/2026-11-20-q4-2026-capability-update/)); 129 days, about 4.2 months, on the older set since 2023 ([METR data](https://metr.org/assets/benchmark_results_1_1.yaml)); about seven months over 2019–2025 ([Kwa et al.](https://arxiv.org/html/2503.14499v3)).
- A work-year of 2,000 hours ([AI 2027](https://ai-2027.com/research/timelines-forecast)) is 2,000 ÷ 40 = 50 times today's horizon, or 5.6 doublings: about 20 months at a 3.6-month doubling. Taken naively, the trend passes 200 hours, METR's longest tasks, in July 2027 ([METR](https://metr.org/blog/2026-11-20-q4-2026-capability-update/)).
- Reliability lags: the horizon at 80% success is 4 to 6 times shorter than at 50% ([Kwa et al.](https://arxiv.org/html/2503.14499v3)).

## The lines on the card

- **167 hours, one work-month**: METR's own milestone and its measure of a working month ([Kwa et al.](https://arxiv.org/html/2503.14499v3)).
- **2,000 hours, one work-year**: between the low and middle estimates for superintelligence on the Progress Index card.
- **10,000 hours**: by the 5-to-1 ratio, a work-year task done four times in five; the middle estimate there.

## Where the 2100 odds come from

Nobody publishes a 2100 value, and METR's tasks stop at 200 hours, so anything beyond is extrapolation. The judges estimate the chance of passing each line.

## What superintelligence can and cannot change

The horizon is a yardstick on the road to superintelligence, not something it acts on, and it breaks near the end. METR finds it hard to recruit people who beat the models, warns that tests may overstate real-world skill because similar environments appear in training, and sees worse judgment than human experts on judgment-heavy tasks ([METR](https://metr.org/blog/2026-11-20-q4-2026-capability-update/)).
