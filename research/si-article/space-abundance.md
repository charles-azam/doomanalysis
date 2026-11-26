# Space and terrestrial abundance

Assessment: 1 November 2026. Scope: physical and industrial contribution through 2050. Source facts, engineering assumptions and our deductions are distinguished. The strongest case concerns exporting valuable computation and expanding space infrastructure. It does not require importing bulk terrestrial commodities.

## What does the space abundance thesis actually claim, and can orbital compute scale?

### Takeaway

Space provides a much larger accessible energy domain over the long run. Its contribution to terrestrial abundance by 2050 depends on delivered services per launched kilogram, lifetime and cost. The relevant test is a complete system, not solar flux alone.

### Cited Findings

- The FCC accepted SpaceX's January 2026 application for up to one million orbital-data-centre satellites for filing and comment. Acceptance is not authorisation to deploy that fleet. The indexed official notice is accessible; direct PDF fetch returned 403. — [FCC DA 26-113](https://docs.fcc.gov/public/attachments/DA-26-113A1.pdf)
- SpaceX's June 2026 prospectus describes a long-run ambition of 100 GW added annually, approximately 100 kW of compute power per tonne and one million tonnes launched annually. Its proposed reusable payload is 100 tonnes. Dawn–dusk orbit, large arrays and radiators are central to the concept. The same document warns that these initiatives involve unproven technology and may lack commercial viability. These are company plans, not commissioned capacity. Relevant PDF pages: 43, 82 and 97. — [SpaceX prospectus](https://content.spacex.com/cms-assets/FINAL_Documents%20and%20Updates/SpaceX%20-%20EU%20Prospectus%20%28Approved%20by%20Bafin%29%20-%20June%205%2C%202026.pdf)
- Near Earth, normal-incidence sunlight outside the atmosphere is approximately 1,361 W/m². Globally averaged incoming sunlight is one-quarter of this because a sphere intercepts radiation over a disc. — [NASA solar irradiance](https://earth.gsfc.nasa.gov/climate/projects/solar-irradiance/science)
- Radiative heat rejection depends on emissivity, radiating area, temperature and sink/environment. Sunlight absorption, Earth infrared, geometry and component operating limits belong in the thermal design. — [NASA thermal control](https://www.nasa.gov/smallsat-institute/sst-soa/thermal-control/)
- GAO identifies potential savings in terrestrial electricity, water and land, alongside unproven large-array/cooling systems, communications, radiation damage, servicing and collision constraints. It distinguishes processing space-generated data from large Earth-serving AI systems. — [GAO, April 2026](https://www.gao.gov/products/gao-26-109012)

### Inferences

The following are our calculations. They use the cited laws/inputs; the efficiencies, temperatures, lifetimes and prices are explicit scenarios, not measurements of a completed orbital AI system.

| Calculation | Assumptions | Result | Interpretation |
|---|---|---|---|
| Solar-cell area A = P/(Sη) | P = 1 GW electrical; S = 1,361 W/m²; η = 30%; normal incidence; continuous illumination | 2.45 km² of cells | Excludes losses, degradation, eclipses, packaging and power for ancillary equipment. Array spacing/structure footprint can be greater. |
| Ideal radiating surface A = P/(εσT⁴) | 1 GW waste heat; ε = 0.9; σ = 5.670374419×10⁻⁸ W m⁻² K⁻⁴; ideal unobstructed cold sky | 2.42 km² at 300 K; 1.31 km² at 350 K | These are emitting surface areas. A panel radiating effectively from two sides may have half that geometric panel area. Real heat loads and view factors change the result. Coolant/radiator temperature is below the chip junction temperature. |
| Annual payload M = P/specific power | 100 GW/year; 100 kW/tonne (10 kg/kW), full deployed-system target assumed | 10⁶ tonnes/year | Optimistic system-level mass target. More solar/cooling/shielding mass worsens it; better design can improve it. |
| Launch cadence = M/payload | 10⁶ tonnes/year; 100 tonnes delivered per launch | 10,000 launches/year ≈ 27/day | Not an impossibility theorem. Requires launch sites, factory output, turnaround, reliability, propellant and coordinated operations at this cadence. |
| Launch-only lifetime charge = μc/(8,760 L u) | μ = 10 kg/kW; L = 5 years; u = 1; c = $100 or $1,000/kg | 2.28 or 22.8 US cents/kWh of compute power | Excludes spacecraft manufacture, chips, financing, communications, failures and servicing. This is not total cost of computation or a launch-price forecast. |
| Maximum launch budget from an assumed avoided energy bill | Terrestrial electricity 5 cents/kWh; five years; u = 1; μ = 10 kg/kW | $219/kg if the *entire* energy saving pays for launch | Before orbital hardware premiums. Terrestrial land/cooling/construction savings or different electricity prices change the comparison. μ = 30 kg/kW cuts the same budget to $73/kg. |
| Replacement flow = fleet/life | 500 GW fleet; five-year life | 100 GW/year merely replaces retirements | Addition rate and installed stock differ. Longer life reduces replacement but may retain obsolete compute. |

At equal module efficiency, near-continuous sunlight can give several times a ground array's annual output per cell area. Computing also returns valuable bits instead of importing an equivalent mass of fuel. This is the strongest economic mechanism. It could close in a niche before a system supplies a substantial share of global computation. Conversely, 100 GW deployed annually is still order 0.1 TW/year, not instant planetary energy abundance. These deductions follow from the resource accounting above, not a claim to forecast costs.

SI could improve thermal design, radiation-tolerant computing, error correction, optical links, deployment, autonomous assembly and useful work per joule. It cannot remove the need to reject heat or replenish failed hardware. Uncertainty should be tested with delivered useful compute-years per kilogram and dollar, rather than installed chip count.

### Gaps

- Public evidence here does not establish full-system 10 kg/kW, profitable large AI clusters or a demonstrated five-year useful computing lifetime. Those are sensitivity inputs.
- A final orbit, workload, latency, optical-network topology and replacement strategy are needed for a credible economic model. Tightly coupled training and independent inference jobs have different networking needs.
- The precise mass/area of the proposed SpaceX system was still being refined in its prospectus. Do not label the illustrative arrays/radiators as its final engineering design.

## Does space energy or mining remove terrestrial resource limits?

### Takeaway

Using energy in orbit and sending electricity to Earth are different systems. Resources used locally in space can be valuable long before importing them competitively substitutes for terrestrial production.

### Cited Findings

- NASA's 2024 assessment studies two representative solar-power-to-Earth designs for operation in 2050. Baseline electricity costs were $0.61 and $1.59/kWh. A combined favourable sensitivity case gave $0.04 and $0.08/kWh. These point designs are not universal bounds or an assessment of orbital computing. They require multiple improvements, including manufacturing, lifetime and transport. — [NASA report, pp. 7 and 38](https://ntrs.nasa.gov/api/citations/20230018600/downloads/OTPS%20SBSP%20Report%20Final_Tagged_Approved_1_5_24.pdf)
- Caltech's 2023 space demonstrator tested wireless transfer and a detectable signal at Earth. That established an experimental link, not grid-scale delivery. — [Caltech mission summary](https://www.caltech.edu/about/news/space-solar-power-project-ends-first-in-space-mission-with-successes-and-lessons)
- NASA describes oxygen extraction from lunar-regolith simulant in integrated prototype tests, plus resource-prospecting and surface-power development. Simulant experiments are distinct from sustained extraction on the Moon. — [NASA lunar technology](https://www.nasa.gov/lunar-surface-technology/)
- OSIRIS-REx returned 121.6 grams of Bennu material in 2023. This is a scientific sample-return achievement, not an industrial mining benchmark optimised for mass or cost. — [NASA sample mass](https://science.nasa.gov/blogs/osiris-rex/2024/02/15/nasa-announces-osiris-rex-bulk-sample-mass/)

### Inferences

For power beaming, an illustrative overall sunlight-to-grid efficiency of 15% gives A = 1 GW/(1,361 W/m²×0.15) ≈ 4.9 km² of collecting area per delivered GW. This does not include receiver land or separate transmitter geometry. The assumed 15% combines solar conversion, power electronics, transmission and reception; it is a scenario, not a measured system efficiency. Orbital computing avoids the power-downlink chain but still needs data communications. The NASA cost sensitivity shows why current high cost should not be frozen indefinitely, while the baseline shows that cheap launch alone does not close every subsystem.

Local oxygen, propellant, shielding and construction materials can avoid lifting their mass from Earth. Returning bulk iron, water or cement-like material faces extraction, processing, transport and terrestrial competition. SI-assisted prospecting and robotic equipment can change these economics, but the Earth's *atoms* are generally not the immediate bottleneck addressed by orbital AI. A valuable space economy is not automatically broad affordable terrestrial housing, food or medicine.

There is an ultimate thermal argument for moving activity off Earth. A reference Earth radius R = 6.371×10⁶ m gives surface area 4πR² ≈ 5.10×10¹⁴ m². If 20 TW were entirely **additional** heat, its globally averaged flux would be 0.039 W/m². At 10,000 TW, it would be 19.6 W/m². This is energy accounting, not an equilibrium temperature calculation. Current energy use is not all an additional planetary input: terrestrial solar intercepts part of an existing flux. Fusion, fission and energy beamed in from space add energy on the relevant timescale. Computing in orbit can reject its heat there. The ultimate constraint is real; it does not show that Earth-serving abundance by 2050 requires a space economy. [NASA explains the planetary energy-budget geometry](https://science.nasa.gov/earth/earth-observatory/climate-and-earths-energy-budget/).

### Gaps

No verified industrial production/return rate or credible full cost curve for extraterrestrial bulk commodities was established in this bounded review. Claims that asteroid riches eliminate terrestrial scarcity should carry this missing production-and-market chain explicitly.

## Can space settlement reduce doom, and what should the article conclude?

### Takeaway

A self-sufficient off-Earth civilisation could reduce exposure to some Earth-specific catastrophes. A dependent outpost is a different event. Its survival cannot simply be deducted from the article's doom probability.

### Cited Findings

- SpaceX states an ultimate goal of self-sustaining human presence on other planets. This is an aspiration; the cited prospectus does not establish a closed industrial economy on Mars. — [SpaceX prospectus, pp. 69 and 99](https://content.spacex.com/cms-assets/FINAL_Documents%20and%20Updates/SpaceX%20-%20EU%20Prospectus%20%28Approved%20by%20Bafin%29%20-%20June%205%2C%202026.pdf)
- The ISS demonstrated approximately 98% water recovery in its life-support system. This is substantial progress in one loop; it does not demonstrate self-sufficiency in food, medicines, electronics, machinery and repair materials. — [NASA water recovery](https://www.nasa.gov/missions/station/iss-research/nasa-achieves-water-recovery-milestone-on-international-space-station/)

### Inferences

Independence is a dependency-closure test: can the settlement replace essential tools and inputs after permanent Earth supply loss? Sharing powerful AI, software, governance or supply designs can also correlate risks across planets. Geographic separation most directly protects against geographically confined failures; it does not automatically protect against an AI-control or infectious threat that travels between settlements. No numerical adjustment to P(D|S) follows without a probability of a genuinely independent, survivable settlement by the deadline and conditional survival under each hazard.

Three overlooked levers worth adding to the technology map:

1. **Higher-temperature computation and heat rejection.** Raising radiator temperature from 300 to 350 K nearly halves ideal area. Component reliability, coolant temperature and heat-pump power determine whether this is economical. [NASA thermal-control mechanisms](https://www.nasa.gov/smallsat-institute/sst-soa/thermal-control/).
2. **Servicing and modular replacement.** Long-lived solar/radiator platforms with replaceable compute could separate the spacecraft lifetime from chip obsolescence. This changes both launched mass and lifecycle cost; servicing is still underdeveloped. [GAO](https://www.gao.gov/products/gao-26-109012).
3. **Produce and consume in the same location.** Processing satellite observations locally or making propellant where it will be used can avoid a costly transport leg. That is a more credible early market than bulk imports for Earth's ordinary materials. [GAO space-data use](https://www.gao.gov/products/gao-26-109012), [NASA ISRU overview](https://www.nasa.gov/overview-in-situ-resource-utilization/).

Suggested article treatment (~700 words when prose and the compact table are combined): lead with the operational SpaceX proposal, show solar/radiator/launch/cost rows, then distinguish power beaming, local resources and self-sufficient settlement. Present space as an option that can widen the feasible frontier, not a required gate for 2050 abundance. Better launch and automation may make that option unexpectedly important. The mathematical model should credit delivered services under E/M/U, not multiply separate probabilities for launch, mining, orbital AI and colonisation as though all must succeed.

### Gaps

This review does not establish a probability of autonomous settlement by 2050, nor a hazard-by-hazard survival probability. It supports including space as an enabling or substituting route and retaining uncertainty about scale and timing.
