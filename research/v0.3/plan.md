# Doom Analysis v0.3 — plan

## Context

v0.2 is live on doomanalysis.com. You reviewed it on the local preview and found that it understates what worries you most:

- The headline is a fixed sentence. You want P(doom), P(doom | SI) and P(abundance) as figures you can watch move, with their history.
- Climate and resources show 0.1 to 0.2% as causes of doom, the causes don't add up to 100%, and war, civil war, disease and scarcity are missing.
- Cards don't share a scale, so they can't be compared, and some are hard to read (the Atlantic current in "Sv").
- Collapse is too narrow (France becoming Nigeria is a collapse), and abundance is too easy for rich countries.

This plan rebuilds the model around what you approved. The work happens on branch `doom-comments`, which the local preview at http://localhost:4322 already serves.

## What you decided

**One danger scale, 0 to 5**, by the share of humanity that dies or lastingly loses decent living conditions:

| Level | Name | Share of humanity | Reference |
|---|---|---|---|
| 0 | None | nobody | |
| 1 | Limited | under 1% | COVID-19 |
| 2 | Serious | 1 to 10% | Second World War, 1918 flu |
| 3 | Severe | 10 to 50% | the Black Death in Europe |
| 4 | Global catastrophe | over 50%, recovery possible | none |
| 5 | Doom | extinction, or no recovery within a century | none |

**Six outcomes for a place**, against its own living standard today:

| Outcome | Living standard in 2100 |
|---|---|
| Abundance | at least 5 times today's rich-world average, for 9 in 10 residents |
| Better | at least a quarter above today |
| Stagnation | within a quarter of today, up or down |
| Decline | a quarter to a half poorer |
| Collapse | more than twice as poor, or an essential lost |
| Doom | level 5 |

The quarter marks are mine: they close the gap between "better", "the same" and "poorer".

Also decided:
- **One probability curve per card**, drawn with and without superintelligence. No optimistic or pessimistic scenarios.
- **War is one cause**, covering nuclear, biological and conventional war.
- **Wikipedia text is copied as it is**, not rewritten.
- The work uses many sub-agents.

## Decisions I'll apply (override any of them when approving)

1. **The curve is drawn as bars in percent.** Each bar is the chance that the 2100 value falls in that range, so the vertical axis reads "chance, %". There are two series: with superintelligence and without.
2. **Where a curve comes from.**
   - It is published when a source gives a distribution: the IPCC and Climate Action Tracker for warming, the IPCC for sea level, the UN for population. Published curves don't assume superintelligence, so they are the "without" series.
   - Otherwise the judges estimate it, and the card says "judged". The "with" series is always judged.
   - Every edge of the danger band gets its own stated chance. The bars between two edges are only drawing; no figure is read off a fitted tail.
3. **Hazards that are events** (pandemics, wars, eruptions) use the size of the worst event before 2100 as their metric, for example the share of humanity killed. They get the same card as the others.
4. **The danger band** under each curve says which level each value most likely means, cliffs included. It counts the damage done through that factor alone. Each cut point carries a source, or is marked "judged".
5. **Sub-factors explain, parents count.** Sea level, humid heat, harvests, ice, permafrost and the Atlantic current sit under warming. Warming's band already includes them, so nothing is counted twice, and a sub-factor can never show more danger than its parent. The tree starts at emissions, with two branches: warming and ocean acidification.
6. **Seven root causes, adding up to 100%:**
   - climate and Earth systems
   - resources and energy
   - war
   - civil war and state breakdown
   - pandemics and disease
   - AI takeover
   - natural disasters and the unknown

   The judges answer one question: "the worst thing that happens to the world by 2100 reaches level N, and this cause started it". Each possible future then has one level and one root cause, so the shares add up to 100% with no extra assumption. The chart shows levels 3, 4 and 5.
7. **The headline is the sum of the seven causes.** Each cause page shows two numbers: what its own cards give, and the judged figure that adds knock-on effects, such as a drought that starts a war. When a card's data changes, the first number moves at once and the second at the next re-judging.
8. **Technology cards mirror hazard cards**, with a potential score from 0 to 5: the share of humanity it could move up one outcome (under 1%, 1 to 10%, 10 to 50%, over 50%, and 5 when it makes an essential near-free for everyone).
9. **Wikipedia.** A script downloads the opening section of the chosen article, word for word, with its link, revision and date. It is shown in a marked "From Wikipedia" block under the CC BY-SA 4.0 licence. Sub-agents only choose the article. No agent retypes or rewrites the text. Our own text is limited to the numbers, the order-of-magnitude calculations and the danger band.
10. **Living standard** is real household consumption per person, with today's rich-world average set to 100, so abundance is 500. Energy per person, healthy life years, floor area and free time are shown beside it as physical checks. I keep them out of the ×5 test: healthy life years cannot be multiplied by five, so blending them in would silently raise the bar.
11. **History chart.** It starts with the three values the site has really published (23 November, 24 November, and this version), with a marker where a definition changed. Each later re-judging adds a point. No back-filling.
12. **People in decent conditions.** Decent means having all five essentials. For each country I take its weakest essential as the share covered, then add up by population, and label the result an estimate. The 2100 figure comes from the six outcomes and the UN population forecast.
13. **Immigration** enters the civil-conflict card as measured pressure (inflows, the employment gap between immigrants and natives). It is not built in as a cause.
14. **All 212 places are re-judged** on the six outcomes: three runs for the world, the regions and the 37 spotlight countries, one run for the rest, as in v0.2. Runs are averaged, not medianed, so that shares still add up.

## Work plan

v0.3 is built beside v0.2, so the site keeps building and passing its tests at every step. The old model is deleted last. Each phase ends with a commit.

### A. Model (I do this first; everything else depends on it)

- `src/model/types.ts`: add the danger level, the root causes, the six outcomes, a distribution (points of "chance of being above this value", per scenario, each with its basis and source), the danger band, the factor tree (`parent`, `rootCause`, `group`), and the history record.
- `src/model/distribution.ts` (new): the chance of each level from a distribution and a band; the bars for drawing.
- `src/model/tree.ts` (new): the factor tree, replacing `globalSections` in `src/data/sections.ts`.
- `src/data/definitions.ts`: the danger scale, the six outcomes, the ×5 bar, the seven causes, "decent conditions". Collapse and abundance are rewritten.
- `src/model/judgment.ts`: the new world and place judgments, the headline as a sum, cause shares, and averaging of runs. It keeps `checkProbability`, `median` (for the superintelligence dates) and `weighted`. A run is rejected when:
  - a cause's chance rises with the level instead of falling;
  - the causes sum to more than 1;
  - a place's five outcomes other than doom don't sum to 1 (doom is taken from the world figure);
  - the judges' direct estimate of doom is far from the sum of their causes.
- `src/data/exceedance.ts` is reused: its 389 rows are already points on each curve. The research phase fixes the rows that contradict each other today (battery price, clean-energy investment) and adopts one figure where several sources disagree (pandemic, nuclear use), keeping the others as evidence.
- `tests/v3.test.ts` (new): one end-to-end test on mock cards, causes and places. It checks the computed headline, the shares, every rejection rule, that each curve only falls, and that no sub-factor exceeds its parent.

### B. Research (sub-agents in parallel, one file each)

Thirteen research agents, each followed by an independent checker that re-opens every source. Each writes one data file under `src/data/cards/` and its explainers, so no two agents touch the same file. For every card they deliver the metric, today's value, the published points of the 2100 curve, the danger band with sources, the Wikipedia article to quote, and one or two order-of-magnitude calculations.

1. **Climate core:** CO₂ (including its negligible direct effect on health), warming, humid heat, harvests, extreme weather.
2. **Ice and ocean:** sea level, ice sheets, Arctic sea ice, permafrost, the Atlantic current (with "Sv" explained), ocean heat, acidification, corals.
3. **Living world:** wildlife, planetary boundaries, soil, fish.
4. **Natural disasters:** asteroid, supervolcano, solar storm.
5. **War:** how aggressive the world is (state conflicts, battle deaths, military spending, people living in war zones), nuclear arsenals, biological weapons, great-power war.
6. **Civil war and state breakdown:** internal conflicts, polarisation, political stability, displacement, immigration pressures.
7. **Disease:** pandemics by frequency and severity up to 1918-flu scale, engineered pandemics, drug resistance.
8. **Fuels:** oil (with the 2008 conventional peak), gas, coal, uranium.
9. **Metals and minerals:** copper, lithium, nickel, cobalt, rare earths, phosphate. For each: why it matters, years of reserves, how concentrated supply is, and the chance of shortage or of being cut off.
10. **Energy technologies:** solar with storage, fission, fusion, geothermal.
11. **Other technologies:** desalination, food, medicine, robots, carbon removal, materials. For each: what superintelligence could unlock and what would still slow it down.
12. **Superintelligence:** the Artificial Analysis Progress Index trend, task horizons, and the index level that would count as superintelligence, as a range. That gives an arrival curve to set against the judges' estimate.
13. **Living standards:** the measures, the rich-world baseline, past growth, and what ×5 means in physical terms.

Sources include the IPCC, Jancovici and the Shift Project, the IEA, SIPRI, UCDP and the WHO. Jancovici's own judgments are attributed to him.

While the research runs, I build the new components on mock data (see D).

### C. Data pipeline (`pdoom/pipeline`, Python, same rules as before)

- New country measures, all checked today and responding:
  - household consumption per person (World Bank, 208 countries)
  - energy per person (Our World in Data, 228 places)
  - healthy life expectancy (WHO, 196 countries)
- Floor area per person and working hours exist for fewer countries. They are shown where measured and left blank elsewhere.
- The Wikipedia download: `wikipedia.py` reads the article list and writes `generated/wikipedia.json`.
- The pytest end-to-end test is extended with the new sources.

### D. Interface (Artificial Analysis style, light)

- **Home, top:** four moving figures (P(doom), P(doom | SI), P(abundance), P(SI)) with their change since the last run, above the history chart. Below it, the count of people in decent conditions, today and in 2100.
- **How bad, and why:** the chance of each danger level, and the seven causes as shares of 100% at the level you pick. Each cause opens its own page (`/causes/<id>/`).
- **Cards:** the new anatomy (metric, today, probability bars with and without SI, danger band, chance of each level), grouped as a tree, with sub-factors nested under their parent. Technologies and natural disasters get their own sections.
- **Card pages (`/learn/<id>/`):** the Wikipedia block, the numbers, the calculations, what each danger level looks like, sources.
- **Places:** six-colour outcome bars everywhere (country pages, picker, rankings), plus the living-standard measures.
- **Superintelligence page:** the index trend and the arrival curve.
- **Methodology:** the scale, the six outcomes, the causes question, how the headline is computed, the Wikipedia licence note. It also says that "without superintelligence" includes the futures where a catastrophe is what stopped it.
- New components: `DistributionChart`, `HazardCard`, `CauseShares`, `SixOutcomeBar`, `HistoryChart`. They replace `FactorCard.astro`, `ThresholdTrack.tsx`, `OutcomeBar.tsx` and `PairedBars.tsx`. `Highlights.tsx`, `Leaderboard.tsx` and `EntityView.astro` move to six outcomes through `src/data/site.ts`.

### E. Judges (about 24 agents)

- `judge/prompt.ts`: a new prompt version with the scale, the root-cause question, the cards and their bands.
- Three rounds, in this order:
  1. the curves that no source publishes;
  2. the world (the seven causes by level, P(SI), world abundance) and the regions;
  3. the countries, in batches.
- `judge/import-runs.ts` rejects any run that breaks the rules in A, and adds a point to `src/data/history.ts`.

### F. Quality and ship

- Delete the v0.2 model, store and components; update `pdoom/README.md`.
- Tests, types, lint and both builds.
- Browser checks at desktop and phone widths, on the local preview you already have open.
- A spot-check of 30 values against their sources, beyond the checkers' pass.
- A draft pull request with a memo: the new numbers and how they moved, what is judged and what is published, the gaps.
- **I stop there.** Merging into `main` deploys to doomanalysis.com, so it waits for your word after you've looked at the preview. Say "merge when done" if you'd rather I ship directly.

## What approving this plan authorizes

- **A large agent spend:** about 26 research and checking agents and about 24 judge agents, run as multi-agent workflows in the background.
- **Downloading** public data into the scratchpad: Wikipedia extracts, Our World in Data, WHO, World Bank, and the reports the research agents cite.
- **Commits and a draft pull request** on branch `doom-comments`. No merge, no deploy.

I won't touch the main site or the other session's files, and I won't run a manual deploy.

## Not in this plan

- **Re-judging on a schedule** (weekly or monthly), which is what will make the headline move over time. It needs a decision on where it runs, so I'll propose it once v0.3 is in.
- **The failing Cloudflare branch previews.** They need your dashboard login.

## Verification

- `npm run pdoom:test` passes, including the computed headline and every rejection rule.
- `uv run pytest` passes in `pdoom/pipeline`.
- `npx tsc --noEmit -p pdoom/tsconfig.json`, `npx eslint pdoom`, `npm run pdoom:build` and `npm run build` are clean.
- In the browser, at desktop and phone widths, with no console errors:
  - the home page: moving figures, history chart, danger levels, causes adding up to 100%
  - the warming card with its sub-cards, one resource card, one technology card, the war card
  - the Atlantic current page, with its Wikipedia block and the "Sv" explanation
  - France, Sweden and Nigeria with six outcomes
  - the superintelligence page and the methodology page
- Every Wikipedia block shows its link, revision and licence.
