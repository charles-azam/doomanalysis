# Doom Analysis (the P(doom) dashboard)

A separate Astro site, deployed to `doomanalysis.com` as a Cloudflare Worker (named `doom`) that serves the static build.
`www.doomanalysis.com` and the original `doom.charlesazam.com` redirect there (`worker/index.ts`). It shares this
repository's `node_modules` but has its own config, so the main site's build never touches it.

**Deploys go through Git.** Cloudflare Workers Builds deploys `main` to production and builds a preview for every other branch.
Ship through a pull request; never run `wrangler deploy` by hand, the next Git build would overwrite it.

## The model (v0.3)

Definitions live in `src/data/definitions.ts`, shared by the pages and the judge prompts.

- **One danger scale, 0–5**: the share of humanity that dies or lastingly loses decent living conditions (level 5 is doom).
  Technologies use the mirror image, a potential scale.
- **Seven root causes**: climate, resources, war, civil war, disease, AI takeover, natural disasters. Every future has one
  worst level and one root cause, so the causes add up and P(doom) is their sum (`src/model/forecast.ts`).
- **Six outcomes per place**, against its own living standard today: abundance (5× the rich world's average today),
  better, stagnation, decline, collapse, doom.

## Layers

1. **Cards** (`src/data/cards/<group>.ts`, listed in `src/data/cards.ts`): one metric each, today's value, a danger band,
   and the published points of its 2100 curve. Validated by `src/model/cards.ts`. Each has an explainer in
   `src/content/explainers/<id>.md` and quotes the opening of a Wikipedia article (`src/data/generated/wikipedia.json`).
2. **Country data** (`src/data/factors.ts`, `display.ts`, `generated/*.json`): measured values for every country and region,
   from the pipeline. Indices in `src/model/score.ts` are mechanical averages, not probabilities.
3. **Forecasts** (`src/data/forecasts.ts`): judge runs in three rounds, each validated before it is stored:
   - curves: the chance of each band edge no source publishes, with and without superintelligence;
   - the world (seven causes at levels 3, 4 and 5, P(SI), abundance) and the twelve regions;
   - countries, in batches (three runs for spotlight countries, one for the rest).
   Runs are averaged. `src/data/outlook.ts` turns them into what the pages show.
4. **History** (`src/data/history.ts`): every published headline, appended after each re-judging, never revised.

## Commands (from the repository root)

```bash
npm run pdoom:dev       # local server
npm run pdoom:test      # end-to-end tests with mock data, plus integrity checks on the real data
npm run pdoom:build
npm run pdoom:cards -- pdoom/src/data/cards/<file>.ts    # check one card file
npm run pdoom:wikipedia                                  # download the Wikipedia openings for every card
npm run pdoom:data -- <raw-dir>    # refresh country data (World Bank, IMF, WHO, UN, OWID, GPI, ND-GAIN, Aqueduct)
(cd pdoom/pipeline && uv run --group dev pytest)          # pipeline end-to-end test
npm run pdoom:prompt -- curves <dir>       # round 1 prompts
npm run pdoom:prompt -- world <dir>        # round 2, using the stored curves
npm run pdoom:prompt -- countries <dir>    # round 3, using the stored world
npm run pdoom:import -- [--reset|--check] <model> <method> <batch> <run.json>...
node --experimental-strip-types pdoom/judge/record-headline.ts <version> <definitions> <note>
```

The pipeline's raw dir holds the official files without an API:
- `dl_gpi/`: the GPI 2026 site script
- `dl_ndgain/ex/resources 2/`: the ND-GAIN 2026 zip contents
- `dl_aq/ex/.../*.xlsx`: the WRI Aqueduct 4.0 rankings workbook

The run downloads the other files itself and keeps them there (`dl_owid_energy/`, `dl_owid_hours/`, `dl_who_hale/`,
`dl_gallup_safety/`, `dl_people_wpp/`, `dl_ms_ai_diffusion/`, `dl_anthropic_aei/`); delete one to fetch it again. The World Bank and IMF APIs are read fresh each run.

## Updating

1. Refresh data and cards; run both test suites.
2. Judge the curves, then the world, then the countries, importing each round before printing the next prompts.
3. Record the new headline in the history.
4. Open a PR.

Never edit `forecasts.ts`, `history.ts` records or `generated/*.json` by hand.
