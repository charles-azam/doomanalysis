# Probability assessment — 1 November 2026

The final scope is a static mathematical and physical assessment, not a live notebook. The title contains the computed 2050 results: P(SI)≈67%, P(abundance|SI)≈25%, P(doom|SI)≈7%. The numbers are conditional judgments propagated through an explicit model, not empirically calibrated forecasts or user-supplied priors.

## Source of truth

- `src/data/si-assessment.ts`: all reference numerical inputs, shared scenarios, exact calculation and generated title.
- `src/components/si/ProbabilityAssessment.astro`: factor tables, formulas, physical checks and deterministic sensitivity cases.
- `src/content/blog/superintelligence-physical-world.md`: title, premise and event definitions. Its title is checked against the calculated result.
- `src/components/si/ResearchNotes.astro`: supporting scientific evidence, quantities and source ledger.
- `tests/si-assessment.test.ts`: arithmetic, first-doom event tree, coherent endpoint partition and title consistency.

There are no sliders, visitor probability inputs, local storage, JSON import/export, baseline endpoint or automatic news feed. Expandable evidence is the only article-specific interaction.

## Model conventions

SI uses the conditional chain G→X→R. The 2040/2050 cumulative forecasts determine early/late arrival weights. Conditional deployment-capable probabilities are 65% for early and 55% for late arrival, shared across both outcomes.

Each doom shock probability and irreversibility fraction is conditioned on the scenario and no preceding pathway producing doom. A residual 0.5% conditional allowance covers omitted mechanisms; it is an exposed judgment. Abundance gates are conditional on survival and all preceding service conditions. This keeps benefits and harms in the same worlds and ensures their conditional probabilities sum to at most one.

The event definitions, institutional probabilities, shock severities and irreversibility fractions remain contestable. The essential-services basket and regional 2025 baseline need further specification before the abundance target is a fully resolvable forecast. These limitations are disclosed in the article.

## Verification

Run `node --experimental-strip-types --test tests/si-assessment.test.ts`, `npx tsc --noEmit`, and `npm run build`. Inspect the rendered tables and source anchors after layout changes. Commit, open/update a PR, merge, and verify the existing Cloudflare deployment; do not deploy an unmerged build.

The research memos preserve sources and uncertainty. Earlier memos contain superseded illustrative priors or notebook proposals; the final code and article take precedence. The factor-model memos document the later mathematical design. The supplied Smil PDF and full extracted book are not redistributed.

## Expanded physics assessment

The November 2026 revision puts the physical analysis before the probability argument. `PhysicalAnalysis.astro` composes visible energy/portfolio/fusion/geothermal, compute, space, ocean/planetary-boundary, service, medical and industrial sections. `src/data/si-physics.ts` computes the reference-token table and cumulative integral from explicit knots. The central illustrative 2050 electricity budget is 87,600 TWh for ten billion people; 3,000 TWh of data centres is 3.4% of it.

Eight specialist memos (`energy-physics`, `energy-portfolio`, `compute-physics`, `planet-physics`, `space-abundance`, `earth-services`, `medicine-materials`, `industry-history`) preserve sources, assumptions and access limits. `physics-review.md` independently checks dimensions and probability interpretation. `physical-synthesis.md` maps the final prose to those notes. Reference outcome probabilities remain unchanged: the added feasibility calculations do not identify calibrated distributions for the uncertain deployment or catastrophe parameters.

The core article is approximately 7,200 words with expandable technical material excluded. The 32-minute reading estimate reflects that expanded scope. Internal anchors from the earlier article are retained. The common-90% access criterion and humanity-wide recovery criterion clarify how the existing abundance and doom events apply across services and possible off-Earth settlements.
