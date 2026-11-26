# Planetary physical scales: ocean, carbon and mineral throughput

Research cutoff/check: 1 November 2026. Scope: the visible `PlanetPhysics.astro` section, without duplicating the existing planetary-boundary inventory. The section contains approximately 1,010 words. Facts below come from primary institutional sources, scientific assessments or technical research; arithmetic and selected engineering sensitivities are explicitly inferences. No new probability estimates are inferred from these scales.

## How large are the ocean's mass, heat inventory and response times?

### Takeaway

The ocean is large enough to absorb enormous heat while exhibiting a small whole-volume temperature change; organisms experience geographically and vertically uneven conditions. Its size gives both near-term buffering and long recovery times, rather than a proof that intervention is useless. [IPCC AR6 WGI Chapter 9](https://www.ipcc.ch/report/ar6/wg1/chapter/chapter-9/), [National Academies, ocean observations summary](https://www.nationalacademies.org/read/24919/chapter/2).

### Cited Findings

- NOAA estimates ocean volume **1,335,000,000 km³**; page last updated 23 September 2026. This is the water inventory, not the amount that must be processed for any particular intervention. [NOAA ocean volume](https://oceanservice.noaa.gov/facts/oceanwater.html).
- Seawater density and heat capacity vary with salinity, temperature and pressure. Rounded values **1,025 kg/m³** and **4,000 J/(kg K)** are appropriate for an order-of-magnitude calculation, not a vertically resolved ocean model. [MIT thermophysical-property library and tables](https://web.mit.edu/seawater/). NOAA independently gives the whole-ocean heat-capacity scale near **5.5×10²⁴ J/K**. [NOAA explanatory calculation](https://prod-01-asg-www-climate.woc.noaa.gov/news-features/blogs/enso/role-ocean-tempering-global-warming).
- IPCC assesses **0.396 yottajoules =396 ZJ** ocean heat gain during **1971–2018**, likely range **329–463 ZJ**. Ocean heat storage dominated the planet's energy gain over that interval. The figures are historical, not 2026 ocean heat content or a current instantaneous uptake rate. [IPCC Chapter 9](https://www.ipcc.ch/report/ar6/wg1/chapter/chapter-9/).
- Surface-boundary turbulence exchanges water on hours-to-days scales; exchange with the thermocline can take years to decades, while deep water may take decades to millennia to return. These are distributions of processes, not a single global mixing time. [National Academies, 2017, summary](https://www.nationalacademies.org/read/24919/chapter/2). NOAA's approximately thousand-year conveyor description is an illustrative circulation circuit, not a guarantee every parcel follows it. [NOAA conveyor tutorial](https://oceanservice.noaa.gov/education/tutorial_currents/05conveyor2.html).

### Inferences

Using the sourced volume and rounded properties above:

```text
V =1.335e9 km³ ×1e9 m³/km³ =1.335e18 m³
M =ρV =1025×1.335e18 =1.368375e21 kg
C =Mc =1.368375e21×4000 =5.4735e24 J/K

Historical Q =396e21 J
Elapsed time =47×365.25×86400 =1.4832072e9 s
Average Q/time =2.66989e14 W ≈270 TW
Whole-volume-equivalent ΔT =Q/C =0.07235 K
```

This equivalent temperature is **not** measured sea-surface warming, and does not imply marine heatwaves are small. It demonstrates what averaging over the entire reservoir hides. The historical average flux likewise must not be presented as today's rate. [Input basis: NOAA volume](https://oceanservice.noaa.gov/facts/oceanwater.html), [MIT properties](https://web.mit.edu/seawater/), [IPCC historical heat](https://www.ipcc.ch/report/ar6/wg1/chapter/chapter-9/).

For an illustrative uniform **100 m** surface layer and assumed ocean area **3.61e14 m²**:

```text
V100 =3.61e14×100 =3.61e16 m³
V100/V =0.02704 ≈2.7%
Q100 for0.1K =3.61e14×100×1025×4000×0.1
              =1.4801e22 J ≈15 ZJ
```

This is a chosen layer geometry, not an estimate that the whole mixed layer is100m or warms uniformly. The ocean area is rounded to the approximately360million km² global scale; precision beyond two significant figures is immaterial. [NOAA ocean heat and area explanation](https://www.climate.gov/news-features/understanding-climate/climate-change-ocean-heat-content).

Moving heat into the atmosphere does not remove it from Earth. A heat pump adds waste heat; sustained planetary cooling requires net radiative loss to space. This follows conservation of energy and does not establish that a particular climate intervention is effective or acceptable. [IPCC Earth energy-budget assessment](https://www.ipcc.ch/report/ar6/wg1/chapter/chapter-7/).

### Gaps

- No uniform cooling treatment or ocean heat-pump feasibility is claimed. A design would need an explicit heat sink, work input and climate response, not just `McΔT`.
- No single number represents mixed-layer depth, residence time or local heat exposure. Regional circulation and the specific affected ecosystem must determine intervention design. [National Academies observation requirements](https://www.nationalacademies.org/read/24919/chapter/2).

## What carbon inventory and carbonate buffering must a repair strategy confront?

### Takeaway

A ppm is a small fraction of an enormous atmosphere. Acidification cannot be costed by counting only free protons: carbonate chemistry and gas exchange couple pH to much larger dissolved reservoirs. [NOAA atmospheric mass conversion](https://gml.noaa.gov/education/faq_cat-3.html), [National Academies carbonate-chemistry discussion](https://www.nationalacademies.org/read/26278/chapter/9).

### Cited Findings

- NOAA derives **1ppmCO₂ =2.12Gt carbon**, using dry-atmosphere mass **5.13e18kg** and mean molar mass approximately29g/mol. Multiplying carbon by44/12 gives CO₂ mass. Its illustrative concentration and total inventory refer to2006; the unit conversion is the fact used, not its old atmospheric concentration. [NOAA FAQ, “How much CO₂ is in the atmosphere?”](https://gml.noaa.gov/education/faq_cat-3.html).
- Global Carbon Budget2025, final publication **13May2026**, reports total anthropogenicCO₂ **42.4±3.2Gt in2024** and preliminary **42.2Gt in2025**. We round to40Gt/year; this is CO₂, not all-GHGCO₂-equivalent emissions. [Friedlingstein etal., ESSD](https://essd.copernicus.org/articles/18/3211/2026/).
- Carbon removal changes land/ocean exchange as atmospheric concentration falls. Surface acidification can reverse while deeper changes persist much longer; neither a simple atmospheric subtraction nor an instantaneous ocean response is a complete model. [IPCC Chapter5, especially5.3.4.2](https://www.ipcc.ch/report/ar6/wg1/chapter/chapter-5/).
- NOAA's historical global surface-pH decline approximately0.11 corresponds to roughly30% higher hydrogen-ion concentration/activity. pH is logarithmic; activity is not identical to concentration in saline water. [NOAA pH primer](https://pmel.noaa.gov/co2/story/A+primer+on+pH).
- NOAA carbon-measurement material gives DIC concentrations approximately**1800–2300µmol/kg**, with natural spatial/seasonal variability. The page's old40% ocean-uptake assumption is **not** used as a current carbon-budget estimate. [NOAA AOML DIC measurements](https://www.aoml.noaa.gov/general/project/ocdrhw3.html).
- Carbonate, bicarbonate and other acid–base species participate in buffering. Alkalinity measures proton-accepting capacity; DIC and alkalinity are different quantities. Adding alkalinity can increase atmosphericCO₂ uptake after equilibration, with conditions and side effects requiring evaluation. [National Academies2022, Chapter7](https://www.nationalacademies.org/read/26278/chapter/9).

### Inferences

```text
1ppmCO₂ =2.12×44/12 =7.7733GtCO₂
100ppm atmospheric inventory =777.33GtCO₂ ≈780Gt
At a hypothetical10GtCO₂/year net removal:777.33/10 =77.73years
```

The last line is **throughput bookkeeping**, not the actual time to reduce atmosphericCO₂ by100ppm: emissions, sinks and induced exchanges are excluded. A10Gt/year removal industry does not by itself balance40Gt/year anthropogenic emissions. [Mass input](https://gml.noaa.gov/education/faq_cat-3.html), [emissions input](https://essd.copernicus.org/articles/18/3211/2026/), [response limitation](https://www.ipcc.ch/report/ar6/wg1/chapter/chapter-5/).

```text
pH =−log10(a_H+)
a_H+ atpH8 ≈1e−8
Activity ratio for8.2→8.1 =10^0.1 =1.258925 ≈+26%
DIC concentration order2e−3mol/kg versus H+ activity order1e−8
```

For the comparison, convert activity to order-of-magnitude hydrogen-ion molality near1e−8mol/kg using a1mol/kg standard state; activity coefficients and seawaterpH conventions change the exact conversion. This permits comparing like units rather than dividing dimensional concentration by activity. The five-order contrast shows that freeH⁺ does not represent the full acid–base inventory, not that all DIC must be neutralised. Consuming freeH⁺ shifts equilibria; a proton-count multiplication by ocean volume misses buffering. A quantitative neutralisation model needs DIC, total alkalinity, salinity, temperature, pressure and subsequent air–sea exchange. [pH basis](https://pmel.noaa.gov/co2/story/A+primer+on+pH), [DIC basis](https://www.aoml.noaa.gov/general/project/ocdrhw3.html), [chemistry basis](https://www.nationalacademies.org/read/26278/chapter/9).

### Gaps

- No amount of alkaline material needed to restore the entire ocean to a specified historicalpH is estimated. That requires a spatial/time-resolved carbonate-system model; free-proton arithmetic is inadequate.
- No specific atmospheric target or removal trajectory is recommended. The100ppm example is a transparent stock scale rather than a policy prescription.

## What does mineral-based repair require, and what does intelligence change?

### Takeaway

Mineral alkalinity offers a chemically grounded candidate whose material flows can reach billions of tonnes annually. Existing bulk industries make that scale conceivable, while kinetics, energy, environmental effects and verified net uptake determine usefulness. [National Academies2022](https://www.nationalacademies.org/read/26278/chapter/9), [OAE technical guidance2023](https://sp.copernicus.org/articles/2-oae2023/3/2023/), [UNEP bulk-material scale](https://www.unep.org/en/news-and-stories/press-release/our-use-sand-brings-us-against-wall-says-unep-report).

### Cited Findings

- National Academies2022 discusses the olivine bicarbonate reaction with4molCO₂ per mineral formula unit, alongside secondary precipitation pathways with lower uptake. Its Figure7.3 explicitly uses **1.25tCO₂ per tonne olivine** for an ideal reaction. This is a pathway-specific pure-mineral ceiling, not a universal removal efficiency. [Chapter7, equations7.3–7.8 and Figure7.3](https://www.nationalacademies.org/read/26278/chapter/9).
- OAE technical guidance published **27November2023** discusses methods, grinding/dissolution tradeoffs, air–sea equilibration and precipitation. At equilibrium, reportedCO₂ uptake per mole added alkalinity ranges approximately0.75 to>0.85, depending on conditions. Local highpH, turbidity and carbonate precipitation constrain addition/dilution rates. This technical range is not a demonstrated global deployment yield. [Eisaman etal., State of the Planet](https://sp.copernicus.org/articles/2-oae2023/3/2023/).
- UNEP's **26April2022** assessment places global annual sand/gravel use near**50billion tonnes**. The materials, grain size and destinations differ from OAE feedstocks; existing aggregates throughput cannot be treated as available removal capacity. [UNEP institutional report release](https://www.unep.org/en/news-and-stories/press-release/our-use-sand-brings-us-against-wall-says-unep-report).
- A dated national comparator is US2025 crushed-stone production approximately**1.5billion metric tonnes**, not global mining output. DirectPDF requests returned403, but officialUSGS indexed text verified the figure. This comparator is retained in research only to avoid crowding the public section. [USGS Mineral Commodity Summaries2026, crushed stone](https://pubs.usgs.gov/periodicals/mcs2026/mcs2026-stone-crushed.pdf).

### Inferences

Ideal pure-forsterite bookkeeping:

```text
Mg₂SiO₄ +4CO₂ +4H₂O →2Mg²⁺ +4HCO₃⁻ +H₄SiO₄

M_forsterite =2×24.305 +28.085 +4×15.999 =140.691g/mol
4M_CO₂ =4×44.01 =176.04g/mol
Ideal ratio =176.04/140.691 =1.25125tCO₂/tmineral
For10GtCO₂/year: mineral≥10/1.25125 =7.992Gt/year ≈8Gt/year
```

Assumptions: pureMg endmember, complete dissolution, carbon stored via ideal bicarbonate route; no mining/process/transport emissions, no secondary losses. Natural rock and actual seawater conditions violate this idealisation in several ways. The reaction consumes dissolvedCO₂; claiming atmospheric removal requires demonstrating compensating atmospheric uptake and durable storage, not merely that powder was delivered. [Reaction and limitations](https://www.nationalacademies.org/read/26278/chapter/9), [equilibration and accounting](https://sp.copernicus.org/articles/2-oae2023/3/2023/).

Grinding electricity is an **analyst-selected sensitivity**, not a sourced plant forecast:

```text
At100kWh/t:8e9t/year ×100kWh/t =8e11kWh/year =800TWh/year
At1000kWh/t:8e12kWh/year =8000TWh/year
```

Neither figure includes mining, beneficiation, transport, dispersion or monitoring, and neither fixes actual dissolution rate. The assumed electricity intensity must be tested against a particular feedstock, particle distribution and process. Improving dissolution can trade against grinding, residence time and ecological exposure; intelligence can optimise this frontier, while stoichiometry remains. [Process basis](https://sp.copernicus.org/articles/2-oae2023/3/2023/).

SI's plausible contributions are process discovery, robotics, plant design, logistics and monitoring. The meaningful output is verified **net, additional, durable tonnes removed per year** at acceptable energy/material/ecological cost. Cheap energy alone does not establish ecosystem replacement, and chemical recovery does not automatically recreate extinct species. These are mechanistic distinctions, not numerical extinction forecasts. [Evaluation requirements](https://www.nationalacademies.org/read/26278/chapter/9).

#### Neglected candidates for the next article revision

1. **Ocean deoxygenation and compound habitat loss.** A2017 reconstruction estimated global ocean oxygen loss>2% since1960, with strong regional/depth variation. Temperature affects oxygen solubility and ventilation; nutrient-driven respiration adds another pressure. This can change food-system resilience independently ofpH, so monitoring only carbon would miss a potentially important abundance/doom mechanism. SI could improve forecasts and management; it cannot make a poorly ventilated water mass instantly oxygenated. No extinction probability follows from2%. [Schmidtko etal., Nature2017](https://www.nature.com/articles/nature21399).
2. **Methane detection and repair as a faster climate lever.** IEA2026 estimates about70% of fossil-fuel methane emissions, nearly85Mt/year, are technically avoidable with existing technology. Sensing, attribution and repair scheduling are concrete AI opportunities that need less speculative breakthrough than bulkCO₂ removal. Methane abatement and CO₂ removal address different gases and timescales; it would not reverse CO₂-driven acidification. This could improve near-term deployment gates if realised, not justify assuming all industrial emissions are easy. [IEA2026 key findings](https://www.iea.org/reports/global-methane-tracker-2026/key-findings).
3. **Restoring functioning marine ecosystems before treating them only as carbon sinks.** Fisheries management, marine protection and kelp/coastal restoration can have ecological co-benefits even when additionalCDR is uncertain. National Academies2022 identifies major scaling/accounting gaps. The potential probability effect is preserving food, habitat and resilience, not automatically crediting every restored hectare as permanent offset tonnes. SI may improve siting, enforcement and measurement; community institutions and recovery conditions still govern results. [National Academies, Chapter6](https://www.nationalacademies.org/read/26278/chapter/8).

### Gaps

- No operating, independently verified globalOAE system demonstrates the10Gt/year throughput used for the thought experiment. The section presents a requirement, not a deployment forecast.
- Stoichiometric capacity cannot determine net removal cost, ecological acceptability or effective rate. Those require feedstock/process-specific field evidence and carbon accounting.
- Broader food/water/nutrient and ecosystem-service replacement constraints belong to the separate Earth-services survey commissioned by the parent, rather than being squeezed into this focused section.
- Full-text HTML was inspected for NOAA volume, atmospheric conversion, National AcademiesOAE and observation summaries, and CopernicusOAE guidance. SomeIPCC andUSGS passages were verified through their official indexed text because direct retrieval was blocked. No full review of a large primary dataset or new ocean simulation is claimed.
