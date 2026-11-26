# Physical constraints on abundance

This revision answers the expanded user request through the existing Astro article. Research cutoff: 1 November 2026. The accepted mathematical model and headline remain P(SI)≈67%, P(abundance|SI)≈25%, P(doom|SI)≈7%. The physical research tests required scales without falsely calibrating the conditional probabilities.

## Published structure

`PhysicalAnalysis.astro` appears immediately after event definitions and before the probability tables. Its mobile contents row links directly to all main calculations. `EnergyPhysics.astro` supplies the service-energy budget, alternative energy-route matrix, deep-well/reservoir analysis, and fusion electrical/fuel/materials/fleet balances. `ComputePhysics.astro` supplies operating-versus-announced power, memory/compute, token and silicon/capital calculations. `SpacePhysics.astro` tests SpaceX's actual orbital-compute proposal and distinguishes power beaming, local resources and independent settlement. `PlanetPhysics.astro` supplies ocean heat/carbon/buffering/mineral-removal calculations and the nine-boundary table. `TechnologyPhysics.astro` connects water, food, nutrients, materials, clinical validation, delivery and industrial replication.

The old notes retain current AI evaluation evidence, collapse/history mechanisms, uncertainty and source provenance. Redundant old physical derivations now link to visible calculations. Original anchor IDs remain valid. The Smil quotation and Jancovici framing remain.

## Sources and inference

The specialist memos are the source lineage: `energy-physics.md`, `energy-portfolio.md`, `compute-physics.md`, `planet-physics.md`, `space-abundance.md`, `earth-services.md`, `medicine-materials.md` and `industry-history.md`. New source claims have adjacent primary-source links. Company milestones are explicitly company-reported. The source ledger records that some original papers or large official reports were available only through indexed official abstracts/tables; those limits remain in their memos. No new broad web research was performed during synthesis.

The central 2050 scale is ten billion people ×2 kW final energy/person =20 TW final power, half electric =10 TW =87,600 TWh/year delivered electricity. It is an author sensitivity case, not a forecast or a definition of a decent life. All-solar, all-wind and all-fission cases are alternatives, not a proposed combined system. Existing capacity, retirement, losses and hourly/regional dispatch remain requirements for a complete energy plan.

`src/data/si-physics.ts` implements the reference-token integral. Electricity, inference allocation and population interpolate linearly; joules per token interpolate geometrically. A 3,000-TWh 2050 data-centre scenario is3.4% of the central electric budget. The endpoint is1.657million tokens/person/day and4.256billion cumulative since2025; fixed10J gives165,699/day and771million cumulative. These describe a fixed reference workload, not future SI quality or demand.

## Changes prompted by review

The independent review found no critical dimensional errors. The synthesis corrected the Liberty first-ship versus later-average clock, explicitly defines generic fusion gain/driver efficiencies and energy-confinement time, labels geothermal overburden versus fluid pressure and gross versus net output, and distinguishes radiator emitting surface from panel footprint. Uranium/phosphorus inventory ratios explicitly avoid exhaustion forecasts. Ocean270TW is historical net heat uptake, not direct human heat production.

Abundance requires the entire basket reach a common≥90% population, rather than separate groups receiving separate services. Doom concerns irreversible loss of humanity's recovery capacity; a truly independent off-Earth civilisation could matter, while an Earth-dependent outpost does not suffice. No numeric credit for settlement is introduced.

Under the fixed first-pathway ordering, control accounts for5.615percentage points of7.375%doom. This is a bookkeeping allocation, not causal attribution. Physics does not independently calibrate that judgment. Likewise, headroom in watts, area or tonnes cannot determine the probability of institutional deployment, affordable access or clinical success. The essential basket's regional2025 price/quality baseline remains unresolved.

## Validation

TypeScript checking and Astro production build pass. Generated HTML has no duplicate IDs, no missing local hash links and no probability input controls. The reference-token outputs agree with the independent review. Core visible prose is approximately7,200words; expandable supporting material is additional. Parent handles browser QA, final integration checks and the existing Cloudflare publication workflow.
