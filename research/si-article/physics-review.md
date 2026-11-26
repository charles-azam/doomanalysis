# Independent physics and probability review

Review date: 1 November 2026. This is an independent arithmetic, dimensional and modeling audit of the new research memos and the existing conditional-probability implementation. Primary web sources were not reopened. Source verification therefore remains with the originating researchers; this audit tests the reported inputs, deductions and proposed interpretation. No production files or probability inputs were changed.

## Findings requiring integration changes

1. **Unify the 2050 electricity budget.** The energy memo's middle service scenario uses ten billion people, 2 kW final energy per person and half final energy as electricity: 10 TW delivered electricity, or 87,600 TWh/year. The compute memo separately used 60,000 TWh/year and 9.7 billion people. Neither is a physical error when labeled as an independent scenario, but presenting both as the central world would confuse the accounting. Use 87,600 TWh/year and ten billion people in the combined article. A 3,000 TWh data-centre allocation then consumes **3.42%**, not 5%, of that electricity. Recomputed token quantities are below.
2. **Show what drives the doom number.** Under the model's chosen first-pathway ordering, AI control contributes **5.615 percentage points of the 7.375% total**, approximately 76%. More energy/ocean detail does not calibrate that control-failure or irreversibility judgment. The article should say so visibly. The decomposition is a bookkeeping allocation under conditional inputs, not causal attribution.
3. **Retain explicit hypothetical labels on engineering cases.** The selected 1–4 kW/person budgets, future J/token improvements, geothermal recovery fraction, tritium inventories, orbital specific mass and equipment lives are assumptions. They are useful tests, but no newly researched source measures their probability distributions. Do not mechanically replace the 67/25/7 inputs with new precise numbers on the strength of a favorable resource ratio.
4. **Preserve the mathematical scope.** The physical calculations constrain necessary service capacities and routes. The essential basket's regional 2025 price/quality baseline is still incompletely specified. This prevents treating the abundance result as a fully operational, empirically calibrated forecast. The existing disclosure is necessary.
5. **Preserve joint population coverage.** Sufficient E/M/H supply capacity for 90% of people does not mean that the same 90% receives every service. U should explicitly require affordable delivery of the entire basket to a common group comprising at least 90% of humanity. Otherwise separately high service coverage could conceal a much smaller intersection.

No critical dimensional or conservation-law error was found in the checked calculations. These are feasibility and throughput exercises, not complete plant designs, dispatch models or calibrated forecasts.

## Arithmetic and interpretation checks

| Domain | Independent check | Result and condition |
|---|---|---|
| Energy accounts | 655 EJ/year divided by seconds/year; 450 EJ/year likewise | 20.8 TW primary and 14.3 TW final. The dates and accounting boundaries differ; neither should be added to electric output. |
| Solar endmember | 10 TW average / 0.20 capacity factor | 50 TW nameplate. This alone does not ensure hourly/regional reliability. In a prospective net-additions calculation, credit existing capacity and count retirements; the memo's separate new-tranche example is valid if labeled. |
| Storage | 10 TW × 12 or 168 hours | 120 or 1,680 TWh usable. This is an assumed full-load deficit, not a prediction that every portfolio needs that storage. Efficiency/reserves add requirements; complementary generation and interconnection can reduce the deficit. |
| Fission endmember | 10 TW / 0.90 availability / 1 GW | About 11,100 reactors. Over 25 years, about 440 GW/year of additions before retirements. This is an extreme portfolio construction test, not a claim that fission must supply everything. |
| Geothermal stress | 2,700 kg/m³ × 9.81 m/s² × 20,000 m | 0.530 GPa vertical overburden stress. It is not reservoir fluid pressure, differential casing pressure or proof that drilling is impossible. |
| Geothermal heat stock | 1 km³ × 2,700 kg/m³ × 800 J/kg/K × 100 K | 2.16×10¹⁷ J = 60 TWh thermal. A 100 MWe plant at 15% conversion over 30 full-power years needs 175 TWh thermal: 2.9 km³ ideally, about 15 km³ at an assumed 20% recovery. Exchange rate, circulation and locality remain separate. |
| Fusion electricity | 0.4 − 1/(Q×0.5) | At Q=10: 0.20; at Q=30: 0.333 of fusion power remains before other electrical loads. The simplified equation explicitly neglects recovered driver heat and blanket multiplication. Target/plasma gain is not net electricity. |
| Tritium burn | 17.6 MeV/reaction converted to joules; one T atom/reaction | About 56 kg T per GW fusion per full-power year, or at least 140 kg for 1 GW gross electricity at 40% conversion before internal loads. Calendar-year burn also depends on availability. |
| Tritium replication | λ=ln2/12.3; J(t)=[((b−1)B−λIop)/λ]×(1−exp(−λt)) | At B=56 kg/year, Iop=5 kg and b=1.05, another 5 kg takes 2.11 years. At b=1.01, limiting export stock is 4.94 kg, so it never reaches 5 kg under those assumptions. This is not a universal startup inventory or breeding requirement. |
| Cooling | 1.5 GW rejected / (4,180 J/kg/K × 10 K) | About 36 m³/s once-through flow for 1 GW gross electricity at 40% efficiency. It is not unavoidable freshwater consumption; towers, seawater and dry cooling change the water/cost balance. |
| Ocean heat | 1.335×10¹⁸ m³ × 1,025 kg/m³ × 4,000 J/kg/K | 5.47×10²⁴ J/K. Historical 396 ZJ over 47 years corresponds to 267 TW average and 0.072 K whole-volume equivalent. Neither is a current uptake rate or measured sea-surface warming. |
| Atmospheric carbon | 2.12 GtC/ppm × 44/12 | 7.77 GtCO₂/ppm; 100 ppm ≈777 GtCO₂. Dividing by 10 Gt/year gives 77.7 throughput-years only; emissions and carbon-cycle exchange prevent reading this as a recovery forecast. |
| Ocean alkalinity | 176.04 g CO₂ / 140.691 g pure forsterite | 1.251 t/t ideal bicarbonate-reaction ratio; at least 8 Gt pure mineral for 10 Gt CO₂ under that route's idealization. Actual uptake, air–sea equilibration and net life-cycle removal are additional tests. This is not a universal best removal chemistry. |
| Water | 10¹⁰×0.05 m³/day×365×3 kWh/m³ | 547.5 TWh/year basic domestic desalination. Raising 1 m³ by 1 km needs at least 2.73 kWh before pump/friction losses. This excludes agriculture, most industry and universal adequacy claims. |
| Food | 10¹⁰×2,500 kcal/day×4,184 J/kcal | 1.21 TW edible chemical energy; at an assumed 5% electricity-to-food conversion, 24.2 TW electric. The efficiency is a sensitivity, not a hard ceiling; open-field solar production and alternative pathways change it. |
| Recycling | Annual installations grow as exp(gt), products last L years | Retired-cohort input/current installations =exp(−gL). Five-year doubling and 15-year lives give 12.5%, at perfect recovery and fixed material intensity. It is not an observed universal recycling ceiling. |
| Orbit | 1 GW/(1,361 W/m²×0.30) | 2.45 km² of solar cells before system losses. |
| Orbital heat | 1 GW/(0.9σT⁴), ideal unobstructed cold sink | 2.419 km² radiating surface at 300 K; 1.306 km² at 350 K. Two effective emitting sides can halve geometric panel area; absorbed heat, view factors and coolant/junction temperatures must still close. |
| Orbital launch | 100 GW/year ×10 kg/kW | 1 million tonnes/year; 10,000 deliveries of 100 tonnes each, about 27/day. A specific-power target is not demonstrated whole-system mass performance. |
| Launch-only charge | (10 kg/kW×$100–1,000/kg)/(5×8,760 h) | 2.28–22.8 cents/kWh at continuous utilization, before manufacture, capital cost, operations, losses and replacement failures. This is a cost sensitivity, not a launch-price forecast. |

The compute memory/wafer/capital arithmetic also checks: 100 billion FP16 weights occupy 200 GB; three H100 peak bandwidths stream that in about 20 ms versus approximately 67 μs at combined peak arithmetic. The resulting 84 J batch-one estimate assumes full 700 W/chip draw and a factor-two facility/accelerator energy ratio; it is not a fundamental energy floor. Batch sharing and long-context memory limits must be presented together. The ten-GW reference fleet gives about 7.1 million 700 W chip-equivalents, 570 PB HBM, 160,000 initial logic wafers at assumed 70% yield, and about $43 billion/year of assumed replacement capital against $4.4 billion/year electricity. Actual future architectures and prices need separate evidence.

Medical calculations checked after that memo arrived: n/arm≈15.7/d² under the specified normal two-arm design; 95% chance to see at least one independently occurring 10⁻⁴ event requires about 29,956 exposures; 10 million annual 14-day individualized batches need about 384,000 concurrent production positions. These are descriptive statistical/throughput examples, not clinical recommendations. CaCO₃ calcination and hydrogen reduction of Fe₂O₃ give the stated approximately 0.51 t CO₂/t assumed clinker and 54 kg H₂/t Fe route-specific quantities.

The subsequently delivered industrial-history memo also passes arithmetic review. Growing five million robots at end-2025 to 100 million at end-2050 needs `(20)^(1/25)−1 =12.73%` annual discrete net growth. With a separate assumed 5% annual retirement fraction, the stated recurrence requires installations of 17.73% of the start-of-year stock: about 17.7 million/year near a 100-million fleet. This is a requirement under the scenario, not a forecast or conversion to human workers. Constant 9% growth yields about 43 million in 2050. In the continuous delayed-factory model, `g+.05=.4exp(−3g)` has g≈0.182/year and a doubling time about 3.8 years; with zero delay g=.35/year and doubling about 2.0 years. The continuous retirement rate in that model and discrete robot retirement fraction are separate assumptions, rather than identical lifetime measurements. A hypothetical 20% cost decline per cumulative-production doubling gives 0.477× cost at 10× cumulative output and 0.227× at 100×, as stated. The Liberty-ship assembly-duration ratio is about 6.2; the memo correctly excludes a claim of 6.2× whole-network productivity and distinguishes keel-to-delivery time from upstream industrial preparation. No correction to its numbers is needed.

Publication should retain these interpretation safeguards: define `n` as plasma particle density under the selected convention, `T` as plasma temperature and `τ` as energy-confinement time; identify grain/calorie examples as partial food budgets; label net/gross and thermal/electrical power every time those boundaries change; and treat dated resource inventories as economically contingent categories rather than hard depletion clocks. The prototype-to-fleet histories provide evidence that constraints can move, while not identifying the SI-era growth distribution.

## Reconciled compute scenario

Keep 2025/2030/2040 knots from the compute memo. Change only 2050 population from 9.7 to **10 billion**, and the total-electricity comparison from 60,000 to **87,600 TWh/year**. Data-centre energy remains 3,000 TWh/year and inference fraction remains 0.56. The new electricity denominator changes the DC share, not the token numerator. This also supersedes the original memo's approximately 3% post-2030 global-electricity growth narration: the 33,600→87,600 TWh endpoints imply about 4.91% annual growth over twenty years, with an accelerating path if the 45,000 TWh 2040 knot is retained. Label the 2050 quantity as a service-budget scenario rather than an externally forecast demand path. Linear interpolation of data-centre electricity, allocated inference fraction and population; geometric interpolation of J/token; 100,000 midpoint integration slices per interval independently reproduce:

| Year | J/reference token | Tokens/person/day | Cumulative since 2025 | Tokens/day at fixed 10 J | Cumulative at fixed 10 J |
|---|---:|---:|---:|---:|---:|
|2030|10|38,581.8|53,745,840|38,581.8|53,745,840|
|2040|2|482,430.0|723,695,160|96,486.0|295,910,724|
|2050|1|1,656,986.3|4,255,646,872|165,698.6|771,030,207|

At a hypothetical 10⁸ token-equivalents per accepted research job including failed attempts, the 2050 efficiency scenario supports **6.048 jobs/person/year**, rather than the original 6.2. This is not a measured SI task price. Round values to two or three significant figures in prose.

## Exact doom allocation

For scenario z and pathway i, the disjoint bookkeeping contribution is:

`c_i,z = w_z × q_i,z × r_i,z × product_{j<i}(1−q_j,z r_j,z)`.

The residual contribution is `w_z×r0×product_i(1−q_i,z r_i,z)`. Summing across scenarios gives:

| First listed pathway | Contribution to P(D|S), percentage points | Share of modeled doom |
|---|---:|---:|
|AI control|5.615220588|76.1376%|
|Nuclear war|0.815051507|11.0514%|
|Disease|0.319722214|4.3352%|
|Ecology|0.116693362|1.5823%|
|Resources|0.042954589|0.5824%|
|Residual|0.465451789|6.3111%|
|Total|7.375094050|100%|

These figures depend on the chosen pathway order and its conditional judgments. Reordering requires reassessment of conditional probabilities. They cannot be interpreted as independently measured causes or a unique allocation of cascades.

## Connecting physics to probabilities

A suitable bridge is:

`P(E | S,z,¬D) = ∫ 1{delivered regional capacity and service quality meet E by2050} p(θ | S,z,¬D) dθ`,

where θ includes demand, construction and retirement rates, capital cost, availability, weather/storage/interconnection, fuel/material supply and access constraints. Equivalent threshold events define M, H and U; later gates retain the article's conditioning on earlier successes.

The calculations identify parts of that indicator function and reject infeasible combinations. They do not identify the distribution p(θ). Empirical deployments can inform build-rate and cost distributions, but extrapolation to SI-driven redesign, shared institutional effects and global access remains judgment. No source reviewed by the researchers establishes distributions sufficient to recalibrate the headline inputs. Retaining 67/25/7 as explicit reference judgments is therefore defensible; presenting them as newly measured or derived from physics alone would not be.

A compact article sentence: **“The physical budgets test whether a world can meet the service target. The probability table expresses how likely I judge the required deployment to be. Resource size alone supplies no probability; construction, reliability, cost and access must succeed together.”**

Space, fusion, geothermal, desalination, recycling and medical platforms are substituting or complementary routes. Do not multiply independent success chances for all of them, or add a separate score merely because a route is promising. Shared factories, energy, finance and governance make their outcomes correlated. The largest remaining uncertainties in the current model concern reliable SI, institutional deployment and access, and irreversible AI-control failure. The physical research improves the argument substantially without eliminating those uncertainties.

## Integrated publication review

Read-only review covered `PhysicalAnalysis.astro`, `EnergyPhysics.astro`, `ComputePhysics.astro`, `SpacePhysics.astro`, `PlanetPhysics.astro`, `TechnologyPhysics.astro`, `ProbabilityAssessment.astro`, `si-physics.ts` and the revised article definitions. No critical arithmetic error was found in the integrated publication draft. The computed token table uses ten billion people in 2050; its 3.4% electricity share and cumulative integration match the reconciliation above. The 120-TWh example is correctly labeled a full-load twelve-hour deficit, with explicit portfolio/interconnection offsets, rather than all Earth experiencing night simultaneously. Food is a calorie sensitivity rather than a full-diet claim; resource-inventory ratios are not presented as fixed exhaustion dates. Joint coverage is now explicit in A and U.

The following wording fixes were sent to the writer and verified in the resulting source:

- The Liberty-ship **244-day** clock belongs to the first ship, whereas the later approximately **39-day** figure is an average. Do not call both averages. Explain that keel-to-delivery time excludes upstream industrial preparation.
- The fusion **50% driver efficiency** is an illustrative generic or magnetic-heating assumption, not LLNL's laser-development target. Define Q as fusion power divided by delivered driver heating, use steady or cycle-averaged powers consistently, and define τ as energy-confinement time. A pulsed target energy gain can enter an average plant balance only with a consistent pulse rate and wall-plug boundary.
- Label the geothermal **100-MWe** heat-stock case gross electrical conversion before pumping/other loads, to distinguish it from the **33-MW net** commercial Fervo observation.
- In the physics-to-probability bridge, retain the model's S and no-doom conditioning, or explicitly state when suppressing those conditions. Do not let shorthand look like a changed probability event.

Other checked interpretation safeguards are retained: historical 270-TW ocean uptake arises from planetary energy imbalance and is not current uptake or direct energy-industry waste heat; the orbital radiator figure is emitting surface with a stated cold-sky idealization; startup tritium inventories and effective breeding ratios remain design scenarios; and the model's control-driven doom allocation remains explicitly bookkeeping-order-dependent. No new numerical probability update is warranted solely from these physical checks.

Final source inspection confirms these corrections. The article now also defines deuterium/tritium, electronvolts and the kBT temperature convention; the doom definition consistently counts an independent viable off-Earth civilisation as preserving humanity's recovery capacity. No further actionable physics or probability-semantic issue was identified in this review. Browser layout, link validation and production deployment remain the parent's checks.
