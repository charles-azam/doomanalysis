# Doom Analysis: context for agents

doomanalysis.com estimates, for the world, 12 regions and 199 countries, the chance of doom, collapse, decline,
stagnation, a better life and abundance by 2100, with and without superintelligence (SI). It is styled after
Artificial Analysis (artificialanalysis.ai). Charles Azam owns it and makes the calls; this file records them.
`README.md` has the commands and the layers of the code; `research/README.md` indexes everything the agents wrote.

## Why it exists

Elon Musk argues that superintelligence makes abundance very likely. Charles thinks superintelligence is very likely
but doubts that abundance follows. He reads Jean-Marc Jancovici and the Shift Project: energy and resource limits
weigh heavily (conventional oil peaked around 2008), and climate is a serious cause, not a rounding error. The site
makes that disagreement concrete and checkable, place by place. P(doom) is the headline metric; SI appears both as a
counterforce and as a risk.

## How to ship

- Contributors with write access merge into `main` on their own, without waiting for Charles: open a pull request
  and merge it, or push to `main` directly, once the checks below pass.
- Checks before merging: `npm test`, `npx tsc --noEmit`, `npm run build`, `npx wrangler deploy --dry-run`.
- `main` is what goes live: every push to `main` triggers a Cloudflare Workers Build (`npm run build`, then
  `npx wrangler deploy`) that deploys the Worker `doom` within a few minutes. Build logs are in the Cloudflare
  dashboard under Workers & Pages → doom → Deployments. Never run `wrangler deploy` by hand; the next Git build
  overwrites it.
- Never edit by hand `src/data/forecasts.ts`, past records in `src/data/history.ts`, or `src/data/generated/*.json`:
  they come from the judge import and the data pipeline.
- Show visual changes in the local preview (`npm run dev`) before shipping.

## Page rules (Charles's words in quotes)

Charles called an earlier version "AI slop" and pointed to Artificial Analysis as the standard.

- Charts first. Each chart has a title, one grey line (what is measured · Lower/Higher is better) and the chart.
  No prose between charts; explanations belong on the methodology and card pages.
- Remove every sentence that is not necessary. No version history, no "Update: …" notes ("nobody cares").
- Don't open with one big figure ("typical analysis is not starting with one figure").
- "People expect to click the charts, the legend": every legend toggles a series, highlights a key, sorts, or opens
  an explanation. Clicks go through one handler, `src/scripts/interactions.ts`, driven by data attributes.
- Every scale is explained where it is used, as a one-line row of chips that open on click
  (`src/components/DangerScale.astro`). The explanations are "very very important" but must not add text on arrival.
- A lean first view; more appears as you scroll or click. Each place keeps one colour on every chart; no emoji.
- Home page order (since 26 November): How bad, and why → How good, and why → Places → Over time →
  Humanity in 2100 → one section per cause, then Technologies and How people live.
- On SI, Charles cares about which domains and technologies it changes. Who gains by country (AI use, the five
  channels) he finds "not interesting at all"; it lives at the bottom of `/superintelligence/`.

## The model (v0.3), decided by Charles

- **Danger scale 0–5**, by the share of humanity that dies or lastingly loses decent living conditions:
  1 under 1% (COVID-19), 2 1–10% (World War II, about 3%), 3 10–50% (the Black Death in Europe), 4 over half,
  recovery possible, 5 doom (extinction or no recovery within a century).
- **Potential scale** for technologies, the mirror: the share of humanity the technology alone lifts up at least one
  outcome (1 under 1% … 4 over half; 5 makes an essential nearly free for everyone).
- **Seven root causes that add up to 100%**: climate and Earth systems, resources and energy, war (nuclear,
  biological and conventional, as one cause), civil war and state breakdown, pandemics and disease, AI takeover
  (only when AI kills), natural disasters and the unknown. Each future has one worst level and one root cause, so
  P(doom) is the sum of the causes.
- **Six outcomes per place**, against its own living standard today: abundance (at least 5× today's rich-world
  average, for 9 in 10 residents), better (a quarter above today), stagnation, decline (a quarter to a half poorer),
  collapse (more than twice as poor, or an essential lost; "France becoming Nigeria" counts), doom.
- **One probability curve per card**, with and without SI. No optimistic or pessimistic scenarios.
- Sub-factors explain, parents count (sea level sits under warming), so nothing is counted twice.
- Wikipedia openings are quoted word for word (CC BY-SA), never rewritten. Explainers are short, scientific, with
  order-of-magnitude calculations.
- Immigration enters the civil-war card as a measured pressure, not as a cause.
- Horizon 2100. "Our forecast" weighs the with/without cases by the world's chance of SI.

Live figures (26 November 2026): P(SI by 2100) 80%; P(doom) 4.4% (5.2% with SI, 1.0% without); P(abundance) 6.4%;
a catastrophe of level 2+ 78%, level 3+ 44%, level 4+ 14%. Climate is the largest level 2+ cause.

## How the probabilities are made

Everything not published by a source is judged by Claude (Opus) agents, one independent agent per run, each reading
only one prompt file. The rounds, in order, each imported before the next prompts are printed:

1. **curves**: the chance at each card's band edges, with and without SI;
2. **world**: the seven causes at levels 3, 4 and 5, P(SI), abundance, and the twelve regions;
3. **countries**: the six outcomes, plus five SI channel readings (−2 to +2) and a one-line reason;
4. **timeline**: cumulative chances by 2030, 2040, 2050 and 2075;
5. **level2**: level 2+ by cause and over time.

World, regions and the 37 spotlight countries get three runs, other countries one; runs are averaged.
`judge/import-forecasts.ts` rejects a run that breaks a coherence rule (causes fall as the level rises and sum to at
most 1, outcomes sum to 1, timelines only rise, and so on).

To run a round with Claude Code's Workflow tool:

1. `npm run prompt -- <round> <dir>` writes the prompt files.
2. Make a jobs list: `[{ "batch": "<batch>", "run": 1, "prompt": "<dir>/<batch>.md", "out": "<dir>/answers/<batch>-1.json" }, …]`
   (an example is `research/v0.3/judge-curves-world-countries-timeline/country-jobs.json`).
3. Run `judge/workflows/judges.js` with `args: { root: "<absolute path of this checkout>", jobs: [...] }`. Each judge
   writes its answer and checks it with `npm run --silent import -- --check judge check <batch> <file>`.
4. Import the valid answers with `npm run import -- <model> <method> <batch> <files>…`.

`judge/workflows/cards-research.js` is the workflow that researched the 76 cards (13 groups, then an independent
source check, then a calibration across cards). Every prompt and answer so far is in `research/`.

## Data

- Cards: `src/data/cards/*.ts`, each with sources and URLs. Country data: the Python pipeline in `pipeline/`
  (World Bank, IMF, WHO, UN, Our World in Data, GPI, ND-GAIN, Aqueduct, Microsoft AI diffusion, Anthropic AI Usage
  Index); three files must be downloaded by hand, see `README.md`.
- Visitors: Cloudflare Web Analytics, automatic setup, on doomanalysis.com. It may be set to exclude EU visitors;
  Charles is checking.

## Conventions

- TypeScript: strict; functions take one object and are called with named fields (`fn({ card: card })`).
- Python 3.13: full typing without `Any` (`list`, `dict`, not `List`, `Dict`), keyword arguments at every call,
  absolute imports, no logic in `__init__.py`, no `try/except` unless necessary.
- Tests: end-to-end with mock data first, then checks on the real data (`tests/`, `pipeline/tests/`), using plain
  functions with `node:test` or pytest.
- Prose on the site: plain words, short sentences, no hedging; one figure per claim, with its source.

## Open threads

- **Re-judging on a schedule**, so the headline moves over time; not set up yet.
- **Hacker News**: two plain posts ("P(doom)") got no votes. The plan is one Show HN on a weekday morning, US
  Eastern time: "Show HN: Does superintelligence lead to abundance? Forecasts for 199 countries", with a first
  comment explaining why and how.
- **Cloudflare branch previews** failed on every non-`main` branch while builds came from the website repository;
  not yet tried from this one. Verify locally either way.
- No technology reaches potential level 5; level 5 is hidden from "How good, and why".
