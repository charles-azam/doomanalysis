# Minimal conditional doom model proposal

This is a transparent elicitation model, not a statistical estimate from historical disaster frequencies. Sources support mechanisms and physical scales; the probabilities of unprecedented globally irreversible outcomes remain judgments. Do not preserve the former10% headline as a calibration target.

## 1. Use the shared scenarios; do not multiply marginal governance and timing

Parent's four joint scenario weights, conditional on SI:

| First deployed SI | Institutions | Weight P(t,g|S) |
| --- | --- | --- |
| 2035 representative | Deployment-capable | 0.42 |
| 2045 representative | Deployment-capable | 0.18 |
| 2035 representative | Fragmented | 0.16 |
| 2045 representative | Fragmented | 0.24 |

Sum=1. Early/late and institutional capacity are explicitly dependent. Same t,g must feed abundance and doom. Do not calculate separate optimistic and pessimistic mixtures for A and D.

Let D mean irreversible global doom occurring after SI arrival and by2050; d(t,g)=P(D|S,t,g). Extinction before arrival prevents SI in the stipulated human deployment process, so those worlds belong to notS. Recoverable earlier catastrophes can still affect t,g and the risk inputs. This is all-cause risk in the post-SI interval: nuclear war or climate/resource failure need not have been caused by SI to count.

A definitional subtlety: the original broad D also includes irreversible loss of recovery capacity, which does not logically imply that SI could never arise later. Therefore explicitly stipulate S as SI deployment before existential doom, or label output 'post-arrival doom'. Do not silently equate every possible all-causeD|SI-exists-by2050 with post-arrival-only risk. If retaining the broader event, add b(t,g)=P(D before arrival|S,t,g), giving d_total=b+(1-b)d_post. Only set b=0 through an explicit event definition, not convenience.

## 2. Five rows, each with a shock probability and an irreversibility conditional

Use a fixed explanation order: loss of control, war, disease, ecological breakdown, resource/infrastructure breakdown. The order is bookkeeping, not chronology or a claim that one risk matters more.

Let D_i denote doom through pathway i, and H_i the event that none of preceding pathways caused doom. Define:

q_i(t,g) = P(qualifying shock_i | S,t,g,H_i)
r_i(t,g) = P(D_i | qualifying shock_i,S,t,g,H_i)
p_i(t,g) = q_i(t,g) r_i(t,g).

Assume D_i requires its qualifying shock. Then the chain rule gives exactly:

d(t,g) = 1 - product_i[1-p_i(t,g)].

This is NOT an independence formula when q_i,r_i have the stated prefix conditioning. Overlapping causes are allocated to the first qualifying doom pathway in the fixed order. A war→crop-failure→disease cascade can fit any applicable D_i, but is counted once. Changing the bookkeeping order requires re-eliciting conditional probabilities; merely shuffling unchanged rows is invalid.

The underlying conditional judgments must reflect joint stresses. A product of five unconditioned disaster rates cannot acquire dependence merely by being labelled 'conditional'. Make H_i visible in the table caption and export. Governance accounts for one shared dependence; remaining contagion and common causes must be included in q/r judgment and uncertainty.

### Suggested user-facing factor table

Each row contains q and r, their ranges, supporting/countervailing evidence and a concrete physical hypothesis. Avoid a pretense that event severity and irreversibility are one quantity.

| Path | Qualifying shock (must be defined consistently) | Why risk could be higher | Why it could be lower | Physical / operational hypothesis to test |
| --- | --- | --- | --- | --- |
| Loss of control | Systems acquire durable autonomy and consequential access while defeating credible control measures | Capabilities, access, replication and oversight failure can reinforce each other | Reliable containment, limited permissions, alignment and independent evaluations may hold | Verified ability to evade realistic oversight, not a clever answer or one sandbox demonstration |
| War | A nuclear exchange or comparably destructive systemic war | Existing order10^4 arsenal, crisis opacity, compressed decision times, arms races | Crisis communication, safeguards, verification and deterrence can reduce use and escalation | Stocks, food reserves, grid recovery and escalation control determine global consequences |
| Disease | A severe globally spreading epidemic that overwhelms effective response | Scientific capability is dual-use; global interconnection and weak health systems widen exposure | Surveillance, vaccines, treatments, manufacturing and distribution can improve faster | Time from detection to validated, widely delivered protection versus spread time |
| Ecological breakdown | Coupled loss of critical food/water/ecosystem services beyond adaptation buffers | CumulativeCO2, habitat loss, nutrient/pollution pressure and synchronized shocks | Mitigation, substitution, resilient agriculture and restoration reduce vulnerability | Actual food/water delivery, redundancy and accumulated environmental stocks; boundary crossing alone is not this shock |
| Resources and infrastructure | Sustained global failure of indispensable energy/material/infrastructure services | Concentrated refining, trade disruptions and failure cascades | Substitution, inventories, diverse suppliers, repair and recycling | Supply/repair rates versus essential demand, not total exhaustion of atoms |

An additional 'other/unmodelled' row is scientifically preferable if the five categories are not claimed exhaustive. For a compact five-row version, state that these are the considered pathways and that total may omit residual risk. Do not call a partial union an exhaustive all-cause probability without such a closure assumption.

## 3. Minimal implementation with ten base probabilities plus two shared stress multipliers

A full four-cell table would need40 q/r probabilities. That is transparent but excessive for v0.3. The compact alternative is ten base inputs (q_i^0,r_i^0) in five rows, plus explicit scenario transformations. There is no free headline doom slider.

Choose q_i^0 as conditional probability of at least one qualifying shock over15years in the deployment-capable scenario; r_i^0 is conditional irreversible-doom probability, by deadline, given that shock. The baseline table is authored, source-linked and reviewable. Shared scenario stress parameters:

- m(g): multiplier on the effective shock hazard; capable1, fragmented2 as a **toy** institutional scenario.
- k(g): multiplier on irreversibility odds; capable1, fragmented2 as a **toy** containment/recovery scenario.

For exposure L=2050-t (15years or5years):

q_i(t,g) = 1 - (1-q_i^0)^[(L/15)m(g)]
r_i(t,g) = k(g)r_i^0 / [1-r_i^0+k(g)r_i^0].

The q transform is a constant effective hazard approximation within each conditional pathway and institutional scenario. It is not independence across pathways. The r transform doubles odds, not probability, and remains in[0,1]. These two effects are distinct: initiation/exposure versus failure to contain/recover. Their numerical values are scenario assumptions, not measured effects of governance.

Important temporal limitation: climate/ecological stocks and material exposure continue changing before SI arrives; shorter post-SI duration is not a sufficient physical forecast of those risks. Holding conditional effective hazards constant across2035/2045 freezes that difference. Label this as an explicit baseline hypothesis, with direct scenario overrides for ecological/resource q available in the authored data. If source-grounded evidence cannot justify stationarity, display q(t,g) separately rather than inventing a precise extrapolation. A time multiplier is useful bookkeeping, not a replacement for physics.

Similarly, holding r fixed over5/15years assumes the shock's severity/timing and time available for cascade do not materially alter that conditional. In reality they may. The table should state whether r is per qualifying shock or given one-or-more over the interval; use the latter here. Multiple episodes and subsequent cascades are included in r, not separately multiplied again.

### Arithmetic demonstration only (do not publish as author estimates without deliberate calibration)

| Path | q_i^0 over15years | r_i^0 given shock | Very broad elicitation range for q | Very broad elicitation range for r |
| --- | ---: | ---: | --- | --- |
| Loss of control | 0.20 | 0.20 | 0.02–0.60 | 0.02–0.70 |
| War | 0.10 | 0.05 | 0.01–0.30 | 0.001–0.30 |
| Disease | 0.20 | 0.01 | 0.05–0.60 | 0.0001–0.10 |
| Ecological breakdown | 0.35 | 0.002 | 0.05–0.70 | 0.00001–0.05 |
| Resource/infrastructure | 0.25 | 0.001 | 0.02–0.60 | 0.00001–0.03 |

These values illustrate sensitivity, not empirical frequencies or a claim to calibrated judgment. Wide r uncertainty is the central knowledge gap: historical catastrophes do not measure irreversible global doom conditional on unprecedented future shocks. Even a well-evidenced shock probability cannot fill that gap.

Using the transformations above and the shared weights gives:

| Cell | d(t,g) |
| --- | ---: |
|2035, capable|4.76%|
|2045, capable|1.71%|
|2035, fragmented|14.48%|
|2045, fragmented|5.61%|

Weighted d =0.42(0.0476158583)+0.18(0.0170954934)+0.16(0.1448095900)+0.24(0.0561030435)=**5.971%**. This result deliberately does not target the old10%. It would be misleading to call6% the evidence-based answer: changing a few difficult r judgments moves it substantially. Show two significant figures at most, and publish the input rationale alongside it.

The apparent climate/resource precision is especially indefensible; use ranges or 'unresolved' until elicited. The example shows how to calculate, not what to believe.

## 4. Join to abundance without inconsistent endpoints

If a_survive(t,g)=P(A|S,t,g,notD), then:

P(A|S) = sum_(t,g) w(t,g) [1-d(t,g)] a_survive(t,g).
P(D|S) = sum_(t,g) w(t,g) d(t,g).

This guarantees A and D are exclusive and leaves room for neither. Abundance gates must explicitly be conditional on no doom; do not subtract aggregated doom twice or use an independently chosen governance distribution.

OverallP(D)=P(S)P(D|S)+[1-P(S)]P(D|notS) is valid only for the exact defined events. The notS doom conditional remains a separate missing model; do not relabel SI-world doom as overall doom. Nor is a conditional difference a causal effect without counterfactual assumptions.

## 5. Table provenance and how to use evidence

Each q/r entry should contain definition, horizon, central judgment or unresolved, plausible range, for evidence, against evidence, physical hypothesis, date and source. Source strengths can be tagged measured/modelled/provider-reported/judgment. Avoid a user-facing odds multiplier derived from a news headline with no defined likelihood model.

Relevant already-verified sources:
- Loss of control conditions, evidence and uncertainty: International AI Safety Report2026,3February2026 https://internationalaisafetyreport.org/publication/international-ai-safety-report-2026 . Capabilities + harmful propensity + enabling deployment; then-current systems not assessed at enabling loss-of-control levels. No consensus extinction percentage.
- Nuclear inventory,8June2026: https://www.sipri.org/media/press-release/2026/increasing-focus-nuclear-weapons-amid-heightened-escalation-risks-new-sipri-yearbook-out-now . ~12,187total; weapon counts do not establish the conditional chance of irreversible doom.
- Nuclear food-system scenarios: https://www.nature.com/articles/s43016-022-00573-0 . Billions of deaths in severe scenarios, not certain extinction or irreversibility.
- Pandemic mortality: WHO https://www.who.int/news/item/05-05-2022-14.9-million-excess-deaths-were-associated-with-the-covid-19-pandemic-in-2020-and-2021 . ~14.9m2020–2021 excess deaths shows severe recoverable catastrophe, not a doom event.
- Planetary processes/status: PIK21September2026 https://www.pik-potsdam.de/en/news/latest-news/planetary-health-check-2026-finds-mounting-pressures-across-earth2019s-life-support-systems . Boundaries are precautionary indicators;7/9 does not set ecological shockq or doomr.
- Supply-rate constraints: IEA16July2026 https://www.iea.org/reports/global-critical-minerals-outlook-2026/executive-summary . Projected25%copper pipeline gap2035 is a conditional scenario, not geological extinction risk.

Avoid assigning one arbitrary probability to every sourced fact. A stock measure, conditional scenario, operational failure and historical frequency are different evidence types. If a number cannot yet be grounded, the useful outcome is a visible unresolved input plus a sensitivity bound, not hidden false precision.

# FINAL IMPLEMENTATION ADDENDUM — supersedes demonstration weights/time transform above

Parent's SI chain now supplies P(S2040)=0.4655 and P(S2050)=0.6664. Thus early weight givenSI=0.698529; institutions capable givenearly=.65, givenlate=.55. Use jointweights **EC.454044, EF.244485, LC.165809, LF.135662**, summing1 at displayed precision. The upstream model determines these; never add a second independent governance prior to doom.

For this first version I recommend **direct coarse scenario conditionals**, avoiding the constant-hazard transformation. Each q is the chance of the defined qualifying shock by2050 **after SI arrival**, conditional on the cell and no earlier listed doom pathway. r is the chance of existentialdoom by2050 given such a shock and the same conditions. This keeps the shorter exposure explicit without pretending environmental risks scale proportionally with years or erase earlier accumulated damage.

The following is an arithmetic demonstration, with numbers deliberately exposed for challenge, not claimed evidence calibration:

| Path | EC q | EF q | LC q | LF q | Capable r | Fragmented r |
|---|---:|---:|---:|---:|---:|---:|
| Loss of control |.20|.36|.07|.14|.20|.333333|
| War |.10|.19|.06|.13|.05|.095|
| Disease |.20|.36|.12|.24|.01|.02|
| Ecological breakdown |.35|.58|.30|.55|.002|.004|
| Resource/infrastructure failure |.25|.44|.22|.40|.001|.002|

EC=early/capable, EF=early/fragmented, LC=late/capable, LF=late/fragmented. Reusing r within institutional cases is an explicit v0.3 simplification; catastrophe timing and severity can change the conditional chance of irreversibility. Values for climate/resources decline only modestly in late cells because accumulated stocks and existing fragility persist. AI-autonomy exposure changes more with arrival. These choices are scenario hypotheses, not observed scaling factors.

No hidden parameters: readers can inspect the four q columns and the two r columns. In the visible factor table, selecting a cell displays its q,r plus the definition/for/against/physical-hypothesis fields. The authored table can be compactly expanded; don't demand readers tune40 controls. Ten conceptually distinct probabilities per cell are the minimum for five distinct shock/irreversibility separations unless severity is collapsed into the event definition.

Applying the exact conditional-chain union yields:
EC **4.7616%**; EF **14.4849%**; LC **1.8943%**; LF **6.5769%**.
Weighted P(D|S)=**6.9096%**, approximately7%, from those demonstration inputs. This is not a claim that7% is true. The controlling epistemic uncertainty is irreversible-doom conditional on dangerous autonomy; the non-AI catastrophic-shock rows have much lower (and very uncertain) irreversibility fractions. Expose that sensitivity rather than averaging away it.

Approximate shares of risk in EC by the stated explanation order: losscontrol4.00percentagepoints; war0.48pp; disease0.191pp; ecology0.0667pp; resources0.0238pp. These are **first-assigned-path contributions**, not unique causal effects. Changing order requires reconditioning.

**For every numeric q/r cell**, label provenance 'exploratory judgment; source supports mechanism, not numeric calibration'. Use the earlier broad ranges as elicitation ranges, not confidence intervals or a validated lower/upper bound. The for/against evidence table above remains applicable. No source reviewed supplies these percentages; publishing them as evidence-derived numerical estimates would be unsupported. An unresolved r should remain visibly unresolved, with a sensitivity display, rather than silently treated aszero.

Keep the all-cause closure warning: five modeled routes do not prove that other routes have zero probability. Either define them broad enough to form an exhaustive attribution scheme and say so, or label output 'doom through the five modeled pathways'. Independent asteroid or unrelated existentialhazard need not dominate by2050, but omitting them while claiming exhaustive all-cause probability remains an assumption.
