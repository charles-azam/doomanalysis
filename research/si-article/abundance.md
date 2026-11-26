# Physical abundance: research memo

Evidence cutoff: 1 November 2026. Sources retrieved in this session. All references below are primary institutions, manufacturers describing their own operations, or original research. Numerical examples labelled **calculation** are our assumptions/arithmetic, not published forecasts. No probability can be objectively fitted from this evidence alone.

## Main finding and hypothesis

**Hypothesis:** conditional on SI, the rate-limiting step for broad material abundance will shift from finding good designs toward building, validating, maintaining, and distributing them. Existing technologies already support substantial improvements; SI can improve the conversion efficiency from resources to useful services. The key empirical test is whether SI shortens the entire delivery cycle, rather than merely its digital design stage.

Do not infer that all technology available in 50–100 years is already under development. That is a deliberately conservative scenario boundary, not a historical law. AI as a field predates LeCun's 1990s neural-network successes (Dartmouth 1956; neural computation 1940s/1950s), and the presence of early precursors does not establish that the full future technology set is known.

A useful operational abundance definition: a sustained reduction in the real resource cost of a basket of essential services (reliable electricity, nutritious food, housing, mobility, effective healthcare), accompanied by broad access. GDP, tokens, patent counts, or wealth of owners alone do not establish abundance. Choose a threshold and geographic coverage before assigning a probability. Global abundance is more demanding than Western abundance.

## A compact physicist's model

For a sequential project: T = T_design + T_experiment + T_build + T_approval + T_rollout. If AI accelerates fraction f of the original duration by factor s, total speedup is S = 1/[(1−f)+f/s]. This is an illustrative Amdahl-type accounting identity, not a universal prediction: stages can overlap and SI can affect more than design.

**Calculation:** 100× faster design, when design was 20% of elapsed time, yields S=1/(0.8+0.2/100)=1.25×. If digital work was 80%, S≈4.8×. This is why a highly intelligent software engineer and a highly productive civilization are separate events.

For existing physical stock K, annual replacement Q implies turnover time τ≈K/Q. SI can change Q through automation, process simplification and better capital allocation; a faster drawing alone does not change Q. Whole-factory design, robotic assembly, predictive maintenance and supply scheduling matter because they attack this denominator. Validate through real cycle times, yields, uptime and resource intensity.

## Energy: already enormous, still a system problem

### Solar and storage

[1] **IEA PVPS, Trends in Photovoltaic Applications 2026, September 2026.** https://iea-pvps.org/trends_reports/trends-2026/

Verified: cumulative PV capacity 2.96 TW at end-2025; approximately 690 GW installed during 2025, +15% from 2024; China 415 GW (~60% of additions); EU 68 GW. BESS additions in Europe and US combined 79 GWh in 2025 versus 2.9 GWh in 2020. Module manufacturing capacity exceeds actual production and installations. These are nameplate PV watts, not average output or firm capacity.

**Calculation:** 0.69 TW × assumed 20% capacity factor × 8,760 h ≈1.2 PWh/year of eventual annual electricity from a year's new PV stock. That is 0.14 TW average output, not 0.69 TW around the clock. A 1-GW continuous load consumes 24 GWh/day; 12 hours of ideal storage requires 12 GWh, before losses and reserves. This does not solve a week-long regional renewable shortfall.

[2] **IEA, Batteries and Secure Energy Transitions, April 2024, executive summary.** https://www.iea.org/reports/batteries-and-secure-energy-transitions/executive-summary

Verified: lithium-ion prices fell from ~$1,400/kWh (2010) to <$140/kWh (2023); globally 42 GW grid battery power capacity added in 2023. Distinguish power GW from stored energy GWh. LFP avoids nickel/cobalt; not all batteries have the same mineral constraints.

SI leverage: materials screening, electrolyte and electrode optimization, degradation diagnosis, battery management, siting, operations and cell-factory yield. Limits: validation of cycle/calendar life; mines, refiners, factory throughput, weather and transmission. A cheap solar LCOE is not a cheap reliable complete electricity system.

### Grid and minerals

[3] **IEA, Electricity Grids and Secure Energy Transitions, October 2023, executive summary.** https://www.iea.org/reports/electricity-grids-and-secure-energy-transitions/executive-summary

Verified: meeting national energy/climate goals entails adding or refurbishing more than 80 million km of grid by 2040, roughly the size of the existing global grid. This is conditional on those goals, not a forecast of actual deployment. It includes distribution, not 80 million km of high-voltage transmission.

**Calculation:** over roughly 17 years, this is O(5 million km/year), or O(10,000 km/day) globally. Designs must become copper/aluminium, transformers, substations, rights of way and crews. SI can also improve utilization of the existing grid, so the replacement burden is not immutable.

[4] **IEA, Global Critical Minerals Outlook 2026, executive summary (2026).** https://www.iea.org/reports/global-critical-minerals-outlook-2026/executive-summary

Verified: the projected 2035 copper supply deficit based on the project pipeline narrowed to 25% from around 30% in the 2025 edition. This is a project-pipeline/scenario gap, not a statement that Earth lacks copper or that a 25% shortage will inevitably occur. New projects, substitution, recycling, efficiency and demand destruction can change it. Policy/export concentration matters independently of geology.

### Fission, geothermal, fusion

[5] **IAEA, Nuclear Technology Review 2025, GOV/INF/2025/8–GC(69)/INF/4 (2025).** https://www.iaea.org/sites/default/files/gc/gov-inf-2025-8-gc69-inf-4.pdf

Verified in indexed official report: at end-2024 operational nuclear capacity was 377 GW(e) across 417 reactors; 2024 nuclear generation 2,617.5 TWh. Thus existing fission is O(10^2 GW) of dispatchable low-carbon power, not a speculative technology. Avoid comparing thermal reactor output with electric PV output.

SI leverage: design analysis, inspection, operations, scheduling, fuel optimization, modular manufacturing. Constraints include qualification, component supply, construction productivity, fuel cycle, finance, regulation and social consent. Reactor prototypes are not an installed economical fleet; standardized fission may generate abundance without waiting for fusion.

[6] **US DOE, Geothermal Electricity Generation, current official overview.** https://www.energy.gov/hgeo/geothermal/geothermal-electricity-generation

Verified: US geothermal generating capacity just over 4 GW; DOE analysis projects potential for at least 90 GW by 2050 if technical advances are realized. EGS engineers permeability; closed-loop and superhot approaches differ. This is conditional potential, not 90 GW under construction. SI leverage: subsurface inference, drilling control, reservoir management, design and maintenance. Limits: the actual geology, drilling costs, corrosion, reservoir longevity and induced seismicity.

[7] **LLNL, Achieving Fusion Ignition, official experiment history, updated through June 2026.** https://lmf.llnl.gov/science/achieving-fusion-ignition

Verified: 7 April 2025 NIF shot gave 8.6±0.45 MJ fusion yield from 2.08 MJ laser energy delivered to target, target gain 4.13. 20 June 2026 shot gave 7.9±0.4 MJ and target gain ~3.8. Target gain excludes power consumed to run lasers and facility. These are repeated scientific experiments, not electricity delivered to a grid. **Calculation:** 8.6 MJ is ~2.4 kWh thermal energy per shot. Dividing by a nanosecond makes tremendous pulse power but not tremendous annual electricity. Commercial relevance requires net plant electricity, repetition rate, durable materials, fuel breeding/handling, maintenance and competitive cost.

[8] **ITER, In a Few Lines, current schedule reflecting Baseline 2024.** https://www.iter.org/few-lines

Verified: deuterium–tritium operation scheduled for 2039. ITER tests burning plasmas, integrated reactor technologies and tritium-breeding concepts; it is an experimental device rather than a generating station. Do not apply its schedule to every private fusion approach or treat private advertised commercial dates as established.

[9] **Degrave et al., Nature 602, 414–419, 16 February 2022.** https://www.nature.com/articles/s41586-021-04301-9

Original experiment: deep reinforcement learning controlled plasma magnetic configurations on the TCV tokamak. This gives concrete evidence AI can improve a difficult physical subsystem. It does not establish that the other plant bottlenecks disappear. For a short article this single example may be sufficient to make SI's potential concrete without listing fusion company claims.

## Semiconductors: design can improve the machine that produces intelligence

[10] **ASML Annual Report 2025, released 2026.** https://investor.asml.com/annual-reports/2025 and https://ourbrand.asml.com/m/6ea363f69344ebd4/original/asml-2025-annual-report-based-on-ifrs.pdf

Verified: 48 EUV lithography systems sold in 2025; 5,100 suppliers. High-NA uses NA=0.55 versus 0.33; first EXE:5200B shipped April 2025, reported throughput 175 wafers/hour. ASML expects High-NA support for high-volume manufacturing from 2027. Numerical aperture is optics, not an actual 2-nm transistor dimension. Leading-edge chip supply relies on O(10^1–10^2) EUV tools/year and thousands of upstream suppliers, not solely better chip floorplans.

[11] **TSMC Arizona official project overview, updated to July 2026.** https://www.tsmc.com/static/abouttsmcaz/index.htm

Verified: N4 volume production began Q4 2024; second fab building structure completed 2025, N3 production targeted H2 2027; third fab broke ground April 2025 with production targeted by end of decade. Headline announced investment is now $265 billion (July 2026 expansion), replacing the March 2025 $165-billion announcement. These are multi-fab, multi-year commitments, not spending or operational capacity already delivered. A useful concrete timeline is 2020 site choice → late-2024 first volume production, O(5 years), while noting context matters.

SI leverage: architecture and chip/circuit design; compilers; low precision, sparsity and inference algorithms; process control; yield and defect diagnosis; lithography; packaging and memory co-design. Bottlenecks shift between transistor density, memory bandwidth/capacity, interconnect, packaging, power and cooling. More peak FLOPs do not imply proportionately more useful reasoning tokens. Chiplets, 3D integration and high-bandwidth memory are existing development paths, not speculative new physics. Avoid assigning an unsourced 10×/100× future multiplier to them.

## Medicine: the most important distinctions

A target is a proposed causal intervention point (often a protein). A molecule that binds it is a candidate. Exposure at the right tissue, clinically meaningful efficacy, tolerable side effects, manufacturability and accessibility are separate tests. Accurate protein structure does not imply these tests are solved.

[12] **Abramson et al., Nature 630, 493–500, 8 May 2024.** https://www.nature.com/articles/s41586-024-07487-w

Original AlphaFold 3 paper supports progress in predicting structures of biomolecular complexes including proteins, nucleic acids and small molecules. It supports improvement in molecular research tools, not a complete dynamical human simulation or clinical cure. Nature full-page open failed due to cookie redirect in this session; official indexed research abstract/body snippets available.

[13] **Xu et al., Nature Medicine 31, 2602–2610, 3 June 2025, rentosertib randomized phase-2a trial.** https://www.nature.com/articles/s41591-025-03743-2

Verified official indexed paper: AI-generated TNIK inhibitor for idiopathic pulmonary fibrosis, 71 randomized patients over 12 weeks; primary endpoint safety/tolerability, exploratory efficacy. 16/71 (22.5%) withdrew across arms. Reported encouraging lung-function signal is early evidence, not proof of survival benefit, broad applicability, or approval. Both target selection and molecule generation used AI. Parent should use the conservative claim “an AI-generated drug reached a randomized phase-2a study,” not “AI cured pulmonary fibrosis.” Full-page open encountered Nature cookie redirect, indexed official abstract and discussion available.

[14] **FDA, Step 3: Clinical Research, current official explainer.** https://www.fda.gov/patients/drug-development-process/step-3-clinical-research

Verified: typical phase1 involves 20–100 people over months; phase2 several hundred over months–2 years; phase3 300–3,000 over 1–4 years. These are typical ranges, not hard minimums or a forecast for an SI-designed medicine. FDA lists ~70%, ~33%, ~25–30% progression between stages; avoid presenting their product as a current universal approval probability because datasets and therapeutic areas differ. SI can improve targets, pharmacology, trial design, recruitment, manufacturing and analysis; it cannot make a year of observed relapse/survival follow-up occur in a day without a validated surrogate/model.

**Calculation:** if an adverse effect has probability p per independent exposure, probability of observing none in n is (1−p)^n≈e^(−np). A 95% chance of observing ≥1 requires n≈3/p. For p=10^-4 that is O(30,000) exposures. This is a pedagogical lower bound for detection, not an actual clinical study design. More inference tokens do not themselves create patient-time or identify long-latency effects.

[15] **FDA, Casgevy prescribing information, updated July 2026.** https://www.fda.gov/media/174615/download

Verified: approved gene-edited autologous stem-cell therapy, first approved2023; current label age2+ for indicated sickle-cell and transfusion-dependent beta-thalassemia populations. The pathway still entails patient-specific stem-cell collection/apheresis, individualized manufacture and full myeloablative conditioning before infusion. This is an effective existing medical breakthrough with substantial delivery burdens, not evidence every genetic condition has been solved. Avoid quoting a treatment price without current first-party verification.

[16] **WHO, Malaria vaccines (RTS,S and R21), 4 February 2026.** https://www.who.int/news-room/questions-and-answers/item/q-a-on-rts-s-malaria-vaccine

Verified: recommended schedule four doses from around five months of age; both vaccines prevent around75% of episodes under seasonal administration in highly seasonal areas alongside seasonal chemoprevention. Preserve those conditions if quoting efficacy. The relevance is that proven preventions can be limited by doses, supply, health workers, funding and uptake. Discovery of another drug is not the only route to health abundance.

## Industrial operations and shipping

[17, optional short-article replacement for a longer technology list] **IEA, Energy and AI, 10 April 2025, AI for energy optimisation and innovation.** https://www.iea.org/reports/energy-and-ai/ai-for-energy-optimisation-and-innovation

Verified scenario: Widespread Adoption Case of existing AI applications could unlock175 GW additional transmission capacity on existing lines, and achieve8% light-industry energy savings by2035. These are scenario estimates assuming adoption barriers overcome, not observed global savings and not SI projections. The same analysis documents AI used by oil/gas, so smarter production need not be climate-positive. SI might do more, but the source is a useful baseline for physically grounded productivity gains.

[18, optional] **IMO, Fourth Greenhouse Gas Study2020.** https://www.imo.org/en/ourwork/environment/pages/fourth-imo-greenhouse-gas-study-2020.aspx

Verified: all shipping emitted1,056 MtCO2 in2018, ~2.89% of global anthropogenic CO2 then. **Calculation:** a hypothetical20% efficiency improvement to all that fleet would save~0.2 GtCO2/year at fixed service demand, before rebound; do not present20% as demonstrated AI performance. Hull design, weather routing, speed optimization, maintenance, yard throughput and low-carbon fuels act through different constraints. Designing ships faster does not instantly replace the fleet or supply clean fuel.

## Suggested update rules and falsifiers

Raise P(abundance|SI) when independent, repeatable field evidence shows faster whole-project delivery and falling service/resource cost: GW commissioned per year with reliability, full-system electricity cost, fab output/yield per invested dollar and joule, phase3 clinical outcomes and delivered treatments, housing built per worker-hour. Lower it if digital benchmark gains fail to change these for several years after economical SI access, or benefits remain concentrated while essentials stay scarce.

Retain three axes rather than one technology score: (1) scientific feasibility; (2) industrial/economic scale; (3) distribution and institutions. A technical advance can move(1) strongly and leave(2)/(3) almost unchanged. Conditional abundance can coexist with catastrophe risk; they are not complements unless defined as mutually exclusive terminal outcomes.
