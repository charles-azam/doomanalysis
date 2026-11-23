# P(doom) dashboard

A separate Astro site, deployed to `doom.charlesazam.com` as a Cloudflare Worker (named `doom`) with static assets. It shares this
repository's `node_modules` but has its own config, so the main site's build never touches it.

## Layers

1. **Factors** (`src/data/factors.ts`, `src/data/observations-*.ts`): measured by others, cited, scored 0–100 between
   stated anchors. Country values are generated from the research files; global values are written by hand with sources.
2. **Indices** (`src/model/score.ts`): equal-weight means of factor scores. Mechanical, not probabilities.
3. **Probabilities** (`src/model/judgment.ts`, `src/data/judgments.ts`): judged by a model from the published prompt
   (`judge/prompt.ts`), several independent runs, medians shown, every run validated for coherence.

Definitions live in `src/data/definitions.ts` and are shared by the methodology page and the judge prompt.

## Commands (from the repository root)

```bash
npm run pdoom:dev       # local server on :4321 (or pass --port)
npm run pdoom:test      # end-to-end test with mock data, plus integrity checks on the real data
npm run pdoom:prompt    # print the exact judge prompt and schema
npm run pdoom:judge -- 3 pdoom/judge/runs.json   # three judge runs through the Claude API
node --experimental-strip-types pdoom/judge/import-runs.ts <model> <method> <run.json>...   # validate and publish runs
npm run pdoom:deploy    # build and deploy with wrangler (needs `npx wrangler login` on the right account)
```

## Updating data

Change an observation, re-run the tests, regenerate the prompt, re-run the judge, import the runs, deploy. Never
edit `judgments.ts` by hand.
