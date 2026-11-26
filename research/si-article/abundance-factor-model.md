# A factor model for abundance conditional on SI

Proposal for the article, not measured probabilities. Shared scenario cells: SI arrival in2035 or2045; deployment-capable or fragmented institutions. Deadline2050. No repository edits.

## 1. Define the event before calculating it

Retain the proposed endpoint event A: by31December2050, at least90%of humanity has reliable, affordable access to an explicitly specified essential-service basket, with a quality-adjusted real basket cost at least50%below2025. Include adequate nutrition, housing, clean water, reliable low-carbon electricity and essential healthcare. This is *broad service abundance*, not a requirement to cure all diseases, satisfy every desire, or increase every material flow tenfold.

The basket and comparable regional2025baselines remain a real unresolved measurement task. That limits forecast resolvability; do not conceal it with more decimal places. The50%cost/90%coverage thresholds are editorial definitions, not quantities established by Smil. Definitions must stay fixed when evidence updates.

D is the common doom endpoint supplied by the doom model. Define A to require¬D at2050; if abundance was reached but lost through doom, classify the endpoint as D. Thus A∩D=∅, with a residual neither-outcome. Survival alone does not mean institutions are healthy, and a fragmented world can survive without becoming abundant.

## 2. Four necessary service gates, ordered as a chain

For each scenario z, define:

- **E — reliable essential energy:** an operating, sufficiently low-carbon energy system can supply the defined basket at the required regional scale and reliability. Count firm services, storage and grids, not only PV nameplate watts. This gate is about physical/technical supply capacity; actual household affordability and allocation are reserved for X.
- **M — productive material services:** food, housing, water infrastructure and other required physical production can deliver the basket at adequate resource productivity and throughput. Include manufacturing equipment, robotics, construction, maintenance, logistics and substitution. It need not require robots or fusion: they are alternative mechanisms for meeting service requirements. Require the necessary physical capacity, not a particular technology.
- **H — validated essential healthcare:** an effective, clinically supported and scalable portfolio can supply the specified essential health services at the needed resource cost. It may use existing treatments, prevention, diagnostics, care-process automation and new therapies. New cancer cures, longevity breakthroughs and a universally validated human simulator are not prerequisites. Actual geographic/income access belongs in X; H concerns clinically valid capability and deliverable supply.
- **X — realised distribution and cost:** conditional on the necessary supply capabilities, the system actually reaches≥90%of people, including affordability at household incomes, and the measured essential basket achieves the≥50%real-cost reduction. This is the final bridge from technical potential to the stated event. Define the supply gates so A⇒E∩M∩H; X then supplies the remaining conditions of A, making the decomposition exact by construction.

Write:

 e_z=P(E|S,z,¬D)
 m_z=P(M|E,S,z,¬D)
 h_z=P(H|M,E,S,z,¬D)
 x_z=P(X|H,M,E,S,z,¬D).

Then q_z=e_z m_z h_z x_z=P(A|S,z,¬D), provided the gate definitions partition the necessary conditions as above. This multiplication is the chain rule, **not an independence assumption**. The order is an accounting convention, not a claim all energy must be completed before any housing/medicine. In reality the systems co-evolve.

With w_z=P(z|S) and d_z=P(D|S,z):

 P(A|S)=Σ_z w_z(1−d_z)e_zm_zh_zx_z.

 P(D|S)=Σ_z w_zd_z.

Their sum cannot exceed1 if every input is in[0,1]. Overall P(A) additionally needs P(A|¬S); P(A|S) is not the causal benefit of SI. A no-SI comparison belongs in a later explicit counterfactual model.

## 3. Shared scenario weights and new first-pass gate judgments

Use the SI model's derived timing mass and the stated institutional judgments. Let s40=P(SI by2040)=.4655 and s50=P(SI by2050)=.6664, so t=s40/s50≈.698529 is the early-arrival share conditional on SI by2050. Let c_E=.65 and c_L=.55 be deployment-capable institutional probabilities conditional on early or late arrival. These are institutional judgments; the SI CDF is supplied by the separate SI factor model.

| Scenario | Weight w | Available years |
|---|---:|---:|
| EC:2035 representative arrival, deployment-capable institutions | t c_E≈.454044 |15|
| LC:2045 representative arrival, deployment-capable institutions | (1−t)c_L≈.165809 |5|
| EF:2035 representative arrival, fragmented institutions | t(1−c_E)≈.244485 |15|
| LF:2045 representative arrival, fragmented institutions | (1−t)(1−c_L)≈.135662 |5|

The weights explicitly retain the association between timing and institutions.2035and2045are representative arrival dates for the two bins, not exact arrival predictions; an eventual continuous timing model would avoid that approximation. All SI arrivals by2040, including before2035, are currently represented by the2035cell.

The following gate inputs are **judgments conditional on the entire preceding chain and survival**, chosen for the strict global event and time available. They are not deduced from GW, clinical trial counts or robot shipments. Ranges are plausible sensitivity ranges, not statistical confidence intervals. They should be reviewed openly as the article's contestable assumptions.

| Cell | e:energy | m:material services given E | h:health given E,M | x:access/cost given E,M,H | q:product, conditional on survival |
|---|---:|---:|---:|---:|---:|
| EC | .90[.80,.97] | .85[.65,.95] | .80[.60,.95] | .75[.50,.90] | .459≈46% |
| LC | .65[.40,.85] | .60[.35,.80] | .65[.40,.85] | .60[.30,.80] | .1521≈15% |
| EF | .80[.60,.90] | .70[.45,.85] | .65[.45,.85] | .35[.15,.60] | .1274≈13% |
| LF | .45[.20,.70] | .40[.20,.65] | .45[.20,.70] | .25[.05,.45] | .02025≈2% |

Why the conditional inputs can remain fairly high: in the EC cell, we have already assumed SI by2035, survival through2050, deployment-capable institutions, and preceding gates for later terms. The large downward step occurs between technically capable supply and global50%-cheaper access, especially with fragmentation. H should be lower if the basket requires transformative new therapies; for the proposed *essential* basket, much of the opportunity is delivering proven prevention and care efficiently.

The resulting abundance equation remains symbolic until the doom model supplies its scenario probabilities:

 P(A|S)=w_EC(1−d_EC)×.459+w_LC(1−d_LC)×.1521+w_EF(1−d_EF)×.1274+w_LF(1−d_LF)×.02025.

With doom temporarily ignored, Σw_zq_z is a survival-free upper bound for these center inputs, **not** P(A|S,¬D), because conditioning the overall mixture on survival reweights the scenario cells. Use the doom agent's d-values in the actual result. The earlier50%abundance number should be discarded; this new result must be allowed to fall or rise from the gate model rather than being tuned back to it. Any earlier numerical mixture using preliminary fixed weights is superseded by these SI-derived weights.

Do not publish all five decimal places: they exist only to verify arithmetic. Display roughly46%,15%,13%,2%per surviving cell, then one sensibly rounded mixture from the integrated model.

## 4. Physical bridges from observations to gate judgments

### E: energy is a service balance, not a technology lottery

A regional capacity check should evaluate electricity/heat delivered at the relevant time, reliability and emissions standard:

 available service = existing useful supply + commissioned additions − retirements − competing demand.

For a technology i, annual electricity is P_i×CF_i×8,760h, with explicit capacity factors. Storage shifts energy in time; it does not create net generation. Regional adequacy needs weather-correlated shortfalls, grid transfers and storage duration rather than annual energy alone.

**Anchor:**690GW of2025PV additions at assumed20%capacity factor corresponds to~1,209TWh/year once operating for a full year. Existing nuclear generated~2,618TWh in2024. A1GW load crossing12h requires12GWh ideal storage. These show physically large available paths and genuine system-integration requirements. They support a high EC gate judgment; they do not derive .90. A fossil-fuel expansion can improve gross energy supply while failing the low-carbon gate or increasing climate risk.

Do not calculate e=P(fusion succeeds)×P(batteries succeed)×P(geothermal succeeds). These technologies can substitute or complement one another. If an explicit technology model is later added, calculate the probability of meeting a regional service constraint across portfolios, preserving shared inputs and correlations.

### M: convert required scale into a growth threshold

Let K0 be currently usable production capacity and K_req the capacity needed for the chosen basket. F=K_req/K0. If net capacity grows at rate g overΔyears, the gate requires g≥ln(F)/Δ, subject to component and resource constraints.

**Illustration, not estimated basket demand:**for F=4, fifteen years requires g≥9.2%/year (doubling7.5years), whereas five years requires27.7%/year (doubling2.5years). For F=10, thresholds are15.4%and46.1%/year. This is the physical reason late SI makes the same endpoint harder. Do not silently assume every service requires4×or10×capacity: F must be estimated from the baseline and service target.

**Anchors:**global battery nameplate capacity rose~30%in2025 to>4TWh/year; China installed415GW PV that year; global industry installed>600,000robots with~5millionoperating. Fast physical expansion is observed in specific industries. It cannot be transferred as a calibrated growth distribution to global housing, food, grids and healthcare. Robots can change uptime, build rates and the production of production equipment; interventions, maintenance and accepted output determine useful work.

A reinvestment model gives a mechanism for g:

 dK/dt=[r u m/κ−δ]K.

K is annual capacity in units/year; u is utilization; m is dollars/unit after running costs; r is reinvestment fraction; κ is dollars/(unit/year); δ is retirement rate/year. SI could raiseu,m and lowerκ, including by automating factory replication. Upstream materials, electricity, demand, ecology and commissioning lags constrain the resulting path. That makes bottlenecks elastic rather than fixed while retaining physical accounting.

### H: clinical proof and health-service output

For a new therapy, Δmust cover discovery, decisive clinical evidence, manufacturing and delivery; stages can overlap and validated substitutes can shorten some. For already proven vaccines, treatments and diagnostic workflows, no new drug trial is required merely to distribute them more efficiently. Healthcare abundance also depends on care workflows, training, prevention and logistics, not only molecules.

**Anchors:**rentosertib's AI-generated candidate reached a71-person12-week randomized phase2a study; FDA typical phase3ranges are300–3,000patients over1–4years. These provide observed scale for validation delays but not a universal lower bound. If an adverse effect occurs independently with probability10^-4per exposure,~30,000exposures are needed for95%chance of seeing at least one. The 2035cell permits several clinical/manufacturing cycles;2045permits much less follow-up. Do not multiply generic phase1/2/3attrition rates to produce h: the essential-health gate includes many existing interventions and selection effects.

### X: diffusion and affordability can be modelled explicitly

One illustrative coverage model is c(t)=1−(1−c0)e^(−kt). It is a scenario curve, not a universal adoption law. Starting from an assumed60%coverage and aiming for90%, k≥ln4/Δ:9.2%/year over15years versus27.7%over5years. Actual c0must be measured regionally for each service;60%is a pedagogical example, not a factual global baseline.

For prices/costs, use a specified regional basket B(t)=Σ_j w_j p_j(t)/q_j(t), relative to2025, where q_jrepresents the chosen quality normalization. Define basket weights once; otherwise a changing mix can manufacture apparent50%cost declines. Aggregate material cost, delivered prices and affordability at household incomes are different variables. H/Mtechnology gains support X but do not guarantee it. Ownership, competition, transfers, trade, conflict and state capacity determine translation. The ECvsEFdifference in x is principally an institutional judgment; empirical infrastructure diffusion and health coverage data should eventually calibrate it.

## 5. Evidence for and against each gate

| Gate | For higher probability | For lower probability | Most useful next observation |
|---|---|---|---|
| E | Existing solar/storage/fission/geothermal portfolios; huge deployment; SI forecasting/control/design | Grid and storage mismatch; competing loads; clean supply not just gross supply; regional fragility | Reliable low-carbon service additions and total system cost, regionally |
| M | Chinese scale, Tesla/Panasonic integration, industrial robotics, engineerable gearbox manufacturing | Production-equipment complements, construction lags, uptime, feedstocks, housing/site constraints | Accepted services per unit capital/energy; net factory replication rate |
| H | Proven existing preventive/therapeutic portfolio; AI trial/design/workflow improvements | Biological uncertainty, follow-up, care workforce and hard delivery tasks | Controlled clinical benefit plus affordable delivered treatments/healthy life |
| X | Deployment-capable institutions, competition, mature logistics, diffusion of inexpensive goods | Fragmentation, exclusion, monopoly rents, conflict, fiscal collapse, nontradeable housing/services | Comparable household-level coverage, quality-adjusted prices and affordability |

Physical quantities constrain which scenarios are plausible. They do not uniquely identify probabilities of unprecedented future institutions or research systems. The article should say that openly rather than claim to have derived subjective likelihoods from dimensional analysis.

## 6. Dependence and uncertainty rules

1. E,M,H,Xinputs are conditional, so one evidence item should not be mechanically applied to every gate. A robotic breakthrough may increase m and h, but estimate h *given the stronger Mscenario* to avoid counting the same capability twice.
2. Doom and abundance share scenario weights. Do not estimate the abundance world with robust institutions while estimating doom with universal fragmentation. Changes in scenario weights alter both outputs.
3. All abundance gates are conditional on survival. Do not separately subtract war/climate mortality inside x and again subtract d if those events already meet D. Recoverable disasters can still depress supply/access within¬D.
4. A gateway can fail without doom. Conversely, reaching a supply gate can raise destructive capability and doom. The model does not presume technology has a single moral sign.
5. The scalar chain models broad success events, not causal independence. Persistent common uncertainty about energy prices, peace, governance and robot reliability should be represented by shared scenarios or correlated parameter draws.
6. Corner ranges are sensitivity bounds, not calibrated credible intervals. Do not multiply independent random draws from16uniform ranges and call the resulting histogram an objective forecast. If a probabilistic sensitivity model is added, disclose distributions and correlations and explain why they were chosen.
7. Update physical anchors and parameter judgments separately. A new battery factory changes an observed K0/output baseline; revising e from.80to.85 is an additional subjective inference that must state its reason.
8. Preregister milestone tests by2030/2040: independent long-project reliability; robot intervention/uptime and cost; net reliable clean-capacity additions; multi-site industrial replication; clinical results; basket coverage/cost. Revision history should preserve both old measurements and old judgments.

## Suggested short article paragraph

I now estimate abundance through four necessary gates: enough reliable energy, productive physical capacity, validated healthcare, and actual affordable access. These gates are conditional on survival and on what has already succeeded; multiplying them is the chain rule, not an assumption of independence. Early SI gives factories and clinical programmes fifteen years to work; late SI gives them five. A hypothetical fourfold production expansion needs9%annual growth in the first case and28%in the second. Battery capacity has grown that fast, so the faster path is physically plausible in some industries. Extending it to an entire affordable service basket is a much stronger claim. The probabilities below state how much confidence I place in each step. The physics constrains those judgments; it does not eliminate them.

## Source anchors already verified

- IEA PVPS,September2026:https://iea-pvps.org/trends_reports/trends-2026/
- IAEA,Nuclear Technology Review2025:https://www.iaea.org/sites/default/files/gc/gov-inf-2025-8-gc69-inf-4.pdf
- IEA,Global EV Outlook2026:https://www.iea.org/reports/global-ev-outlook-2026/electric-vehicle-batteries
- IFR,24September2026:https://ifr.org/ifr-press-releases/news/five-million-robots-now-operate-in-factories-globally
- Tesla/Panasonic,31July2014:https://ir.tesla.com/press-release/panasonic-and-tesla-sign-agreement-gigafactory
- Tesla,24January2023:https://www.tesla.com/en_gb/blog/continuing-our-investment-nevada
- Schaeffler,2September2026:https://www.schaeffler.de/en/news_media/press_releases/press_releases_detail.jsp?id=88212928
- Rentosertib original randomized trial,3June2025:https://www.nature.com/articles/s41591-025-03743-2
- FDA clinical stages:https://www.fda.gov/patients/drug-development-process/step-3-clinical-research
