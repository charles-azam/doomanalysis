---
factor: ai_progress_index
title: "AI Progress Index of the best model"
summary: "One score for the general ability of the best AI model, comparable across years; by our reading, superintelligence begins somewhere between 460 and 610."
sources:
  - label: "Artificial Analysis, Progress Index v1 methodology, October 2026"
    url: https://artificialanalysis.ai/methodology/progress-index
  - label: "Artificial Analysis, Progress Index v1 scores and example tasks, November 2026"
    url: https://artificialanalysis.ai/evaluations/artificial-analysis-progress-index
  - label: "Artificial Analysis, AI Trends: Progress Index over time, November 2026"
    url: https://artificialanalysis.ai/trends
  - label: "METR, Time Horizon 1.1 benchmark results data file, 2026"
    url: https://metr.org/assets/benchmark_results_1_1.yaml
  - label: "METR, AI R&D-relevant model capabilities are improving rapidly and are getting harder to measure, November 2026"
    url: https://metr.org/blog/2026-11-20-q4-2026-capability-update/
  - label: "Kwa et al. (METR), Measuring AI Ability to Complete Long Tasks, 2025"
    url: https://arxiv.org/html/2503.14499v3
  - label: "Epoch AI, Epoch Capabilities Index, 2026"
    url: https://epoch.ai/benchmarks/eci
  - label: "AI Futures Project, Q3.5 Timelines Update, November 2026"
    url: https://blog.aifutures.org/p/q35-timelines-update-looks-like-the
  - label: "Lifland and Jurkovic, AI 2027 Timelines Forecast, 2025"
    url: https://ai-2027.com/research/timelines-forecast
---

## Why it matters here

This score tracks how close AI is to superintelligence, which drives the risk of AI takeover. Artificial Analysis builds it with item response theory: each model gets an ability and each test question a difficulty, the score at which a model gets it right half the time. Equal gaps multiply the odds of success by equal amounts, low or high on the scale; o3-mini (high) is pinned at 220 and GPT-5.5 (xhigh) at 320 ([method](https://artificialanalysis.ai/methodology/progress-index)).

The uncertain step is where superintelligence, AI that beats the best humans at virtually every mental task, sits. No human is on the scale, and its questions are short and checkable: the hardest example question shown, of difficulty 374, is solved 19 times in 20 by a model about 60 points higher, so such questions run out near 435 ([scores](https://artificialanalysis.ai/evaluations/artificial-analysis-progress-index)). Long, open-ended work, where AI still trails ([METR](https://metr.org/blog/2026-11-20-q4-2026-capability-update/)), must be bridged through task length, with a past correlation, not a law.

## In numbers

- Pace: from GPT-3.5 Turbo's 125 in November 2022 ([scores](https://artificialanalysis.ai/evaluations/artificial-analysis-progress-index)) to Claude Fable 5.2's 359 in November 2026 ([trends](https://artificialanalysis.ai/trends)): (359 − 125) ÷ 4 ≈ 60 points a year, close to a straight line.
- Bridge: for 20 models from GPT-4 to GPT-5.4, each doubling of METR's task horizon (the task length an AI finishes half the time) came with about 23 points (correlation 0.97, our fit of [METR data](https://metr.org/assets/benchmark_results_1_1.yaml) to the scores). GPT-6 Astra and Claude Opus 5.5, near 40 hours ([METR](https://metr.org/blog/2026-11-20-q4-2026-capability-update/)), score 350 and 351; the fit says 354.
- Cross-check: Epoch's index gives about 5 points per doubling and 20 from Claude 3.5 Sonnet to GPT-5 ([Epoch](https://epoch.ai/benchmarks/eci)), 102 to 111 here: 25 to 28 per doubling.

## The lines on the card

- **460, low**: AI as good as the best human AI researchers, which the AI Futures Project puts 33 points above Anthropic's best internal model on Anthropic's index (29 points a year), with Fable 5.2 likely second-best ([AI Futures](https://blog.aifutures.org/p/q35-timelines-update-looks-like-the)). Anthropic's best gained 86 a year here since September 2025 (263 to 359): 359 + 33 × 86 ÷ 29 ≈ 457 or more.
- **535, middle**: four wins in five on work-year tasks, which needs a half-the-time horizon about five times longer, 10,000 hours ([Kwa et al.](https://arxiv.org/html/2503.14499v3)): 351 + 23 × log₂(10,000 ÷ 40) ≈ 534. It is halfway between the two bars below.
- **610, high**: one AI 2027 forecaster's bar for a superhuman coder, four wins in five on 10-work-year tasks: 351 + 23 × log₂(100,000 ÷ 40) ≈ 610. His colleague's 1.5 work-months gives 465; their ranges span 16 hours to 1,200 years ([AI 2027](https://ai-2027.com/research/timelines-forecast)).

A straight line reaches the three lines in mid-2028, late 2029 and early 2031.

## Where the 2100 odds come from

Nothing is published; the judges estimate the chance of passing each line.

## What superintelligence can and cannot change

The index measures the road to superintelligence. Past the top line, people cannot easily write and grade harder questions, so higher scores say little.
