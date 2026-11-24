# Doom Analysis (the P(doom) dashboard)

A separate Astro site, deployed to `doomanalysis.com` as a Cloudflare Worker (named `doom`) that serves the static build.
`www.doomanalysis.com` and the original `doom.charlesazam.com` redirect there (`worker/index.ts`). It shares this
repository's `node_modules` but has its own config, so the main site's build never touches it.

**Deploys go through Git.** Cloudflare Workers Builds deploys `main` to production and builds a preview for every other branch.
Ship through a pull request; never run `wrangler deploy` by hand, the next Git build would overwrite it.

## Layers

1. **Factors**: measured by others, cited, each with today's value, a 2100 projection where a scenario is published, the thresholds
   that push toward doom, and the chance of crossing them by 2100.
   - `src/data/factors.ts`: definitions and scoring anchors.
   - `src/data/display.ts`: units, thresholds and a one-line explanation.
   - `src/data/observations-global.ts`: hand-written global values.
   - `src/data/generated/*.json`: country and region values from the pipeline.
   - `src/data/projections.ts`, `src/data/exceedance.ts`: forecasts and crossing odds.
2. **Indices** (`src/model/score.ts`): equal-weight means of factor scores. Mechanical, not probabilities.
3. **Probabilities** (`src/model/judgment.ts`, `src/data/judgments.ts`): judged by a model from the published prompt
   (`judge/prompt.ts`) in batches.
   - The world and regions get three runs.
   - Spotlight countries get three runs, judged against the world consensus.
   - Every other country gets one run.
   - Each run is validated for coherence and the site shows medians.

Definitions live in `src/data/definitions.ts` and are shared by the methodology page and the judge prompt. Abundance means
near-free essentials: under 10% of national income, the strong form of the claim being tested. Reader explainers live in
`src/content/explainers/<factorId>.md` and render at `/learn/<factorId>/`.

## Commands (from the repository root)

```bash
npm run pdoom:dev       # local server
npm run pdoom:test      # end-to-end test with mock data, plus integrity checks on the real data
npm run pdoom:build
npm run pdoom:data -- <raw-dir>    # refresh country data (World Bank, IMF, GPI, ND-GAIN, Aqueduct)
(cd pdoom/pipeline && uv run --group dev pytest)    # pipeline end-to-end test
npm run pdoom:prompt -- world <dir>        # world + regions judge prompt
npm run pdoom:prompt -- countries <dir>    # country batch prompts, using the stored world consensus
npm run pdoom:judge -- world 3 <dir>       # or run the batches through the Claude API
node --experimental-strip-types pdoom/judge/import-runs.ts [--reset] <model> <method> <batch> <run.json>...
```

The pipeline's raw dir holds the official files without an API:
- `dl_gpi/`: the GPI 2026 site script
- `dl_ndgain/ex/resources 2/`: the ND-GAIN 2026 zip contents
- `dl_aq/ex/.../*.xlsx`: the WRI Aqueduct 4.0 rankings workbook

## Updating

1. Refresh data and run both test suites.
2. Regenerate the prompts.
3. Judge the world batch and import it with `--reset`.
4. Judge the country batches and import them.
5. Open a PR.

Never edit `judgments.ts` or `generated/*.json` by hand.
