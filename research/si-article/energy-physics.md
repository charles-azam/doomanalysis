# Energy and fusion: physical budgets, plant engineering and fleet growth

Evidence checked through1November2026. Authored component: `src/components/si/EnergyPhysics.astro`, approximately1,270visible words. Sources are primary institutions, expert technical assessments and explicitly identified company claims. All future budgets, capacity factors, efficiencies, inventories and doubling times below are scenario assumptions, not probability estimates or demand forecasts.

## What scale of energy services must a2050system deliver?

### Takeaway

Primary supply, final consumption and electricity are different accounting boundaries. A plausible range of future service budgets spans tens of terawatts, so an impressive first facility must be assessed against both demand and fleet construction rates.

### Cited Findings

- IEA's Global Energy Review2026,20April2026, official PDF table on printedp.44/PDFp.44:2025total energy supply655EJ; gross electricity32,132TWh. The same table reports605GW PV additions in2025. — [Official PDF](https://www.iea.org/files/df903e1c-49c6-4757-8cbf-6fbcfe7611a0/GlobalEnergyReview2026.pdf)
- IEA WEO2025reports total final consumption around450EJ in2024. The official indexed text was available; full15MBPDF exceeded web-reader size limits. TFC is an end-user account, not useful mechanical work; transformations/efficiency matter. — [WEO2025](https://iea.blob.core.windows.net/assets/5306bae2-1f99-402f-8d14-542bfa0ae96e/WorldEnergyOutlook2025.pdf)
- IEA PVPS September2026reports690GW PV installed in2025, with2.96TW cumulative at year-end. — [PVPS](https://iea-pvps.org/trends_reports/trends-2026/)
- End2025lithium-ion nameplate manufacturing capacity exceeded4TWh/year; this is not realized grid-storage output. The industry serves vehicles and other uses, and utilization varies. — [IEA Global EV Outlook2026](https://www.iea.org/reports/global-ev-outlook-2026/electric-vehicle-batteries)
- The goal-aligned grid scenario requires80millionkm of additions/refurbishments by2040, including distribution. It is a required buildout under national goals, not a prediction or immutable engineering delay. — [IEA grid assessment](https://www.iea.org/reports/electricity-grids-and-secure-energy-transitions/executive-summary)

### Inferences

Use365.25days/year for energy/power conversions, except the conventional8,760h/year for rounded TWh calculations. Differences from leap-year conventions are immaterial at the precision shown.

| Calculation | Reproducible arithmetic | Result |
|---|---|---|
|2025primary average power|655×10^18J/(31,557,600s)|20.76TW|
|2024final average power|450×10^18J/(31,557,600s)|14.26TW|
|2025gross electric average|32,132TWh/8,760h|3.668TW|
|Assumed2050population10^10,1/2/4kW delivered/person|10/20/40TW×31.5576EJ perTW-year|315.6/631.2/1,262.3EJ/year|
|Middle scenario electricity share50%|20TW×.5|10TWaverage,87,600TWh/year|
|All-PV endmember,CF=.20|10TW/.20|50TWnameplate|
|Build50TW over25years|50/25|2TW/year,~2.9×thePVPS2025rate|
|Twelve-hour storage for10TWshortfall|10TW×12h|120TWhusable|
|Seven-day storage for10TWshortfall|10TW×168h|1,680TWhusable|
|120TWh divided by4TWh/year battery nameplate|120/4|30years if capacity froze, all output were usable grid storage, and all were diverted from other uses|
|Grid scenario average from2023to2040|80millionkm/17years|4.7millionkm/year|

The2050table is a *delivered-energy* sensitivity exercise. It does not claim1kW/person is sufficient for a decent life or4kW/person is necessary for abundance. Electrification can improve energy productivity; synthetic fuels and storage can add losses. A coefficient of performance of3means3kWheat per1kWelectric input by definition. Do not compare50TWsolar nameplate with10TWcontinuous demand without the capacity factor, or include the energy content of fossil fuels and the electricity they generate as separate services.

The PV/storage/fission cases are deliberately separate extreme portfolios to expose scale. They are not recommended complete systems; wind, hydro, geothermal, demand flexibility, geographic diversity, thermal storage and direct heat can reduce the burdens. Existing capacity should be credited in a full prospective buildout; “build50TW” is an illustrative new all-PV tranche, not a claim that no PV already exists.

### Gaps

- **Unresolved PV reporting discrepancy:** IEA's April2026review gives605GW2025PV additions; SeptemberPVPSgives690GW. Different revisions/reporting conventions, including possibleAC/DCdifferences, may contribute, but this session did not establish a complete reconciliation. The component explicitly usesPVPSfor its0.69TWbenchmark; it does not silently treat the two figures as equal. Do not assert a specific reason without inspecting both methodologies.
- A full2050service forecast requires sectoral and regional demand, electrification, quality/comfort, rebound, fuel feedstocks, network/storage losses and reliability modeling. This calculation does not supply those.
- Annual energy adequacy alone cannot estimate regional loss-of-load risk. Hourly weather correlation, reserves, interconnection and storage dispatch need a separate power-system model.

## What has to work for fission or fusion to become a fleet?

### Takeaway

Fission offers proven electricity but would require a large change in industrial build rates for a many-terawatt endmember. Fusion's plasma, fuel, materials and electrical balances must succeed simultaneously; none of those quantities alone establishes economic fleet replication.

### Cited Findings

- In2025fission added3GW and retired3GW; construction starts totaled12.2GW. The March2026snapshot had78GW under construction. IEA's420GWinstalled figure includes suspended Japanese capacity and differs from IAEAoperational-capacity definitions; the component avoids merging those denominators. — [IEA,Technology:Nuclear](https://www.iea.org/reports/global-energy-review-2026/technology-nuclear)
- D–Tfusion releases17.6MeV, including14.1MeV neutron energy. — [JFusion2025technical white paper](https://jfusion.jp/wp-content/uploads/2025/10/FusionEnergyWhitePaper_en.pdf)
- Roughly80%of D–Tenergy is carried by neutrons. Structural materials, heat exhaust, remote maintenance and breeding are integrated engineering challenges. — [ITER,making fusion work](https://www.iter.org/fusion-energy/making-it-work)
- For magneticD–Tnear8–20keV, the2021National Academies assessment gives4–10×10^21keV·s/m³as the triple-product range for high gain relevant to net electricity. This is a technical condition, not a statement that the historical2021device rankings remain current. — [National Academies,ch.4](https://www.nationalacademies.org/read/25991/chapter/6)
- NIF's7April2025shot produced8.6±.45MJfrom2.08MJtarget laser energy, gain4.13. ItsJune2026shot was7.9MJ; neither is net electric generation. — [LLNL experiment history](https://lmf.llnl.gov/science/achieving-fusion-ignition)
- ITERtargets500MWfusion with50MWheating delivered to plasma. It will not convert its heat to electricity. — [ITERproject goals](https://www.iter.org/fusion-energy/what-will-iter-do)
- LLNL's inertial-fusion development goals include≥10%wall-plug laser efficiency, repetition of order10Hz and billion-shot optical lifetimes. These are requirements/research goals, not demonstrated whole-power-plant performance. — [LLNLdriver program](https://lift.llnl.gov/research-areas/ife/driver-technology)
- Tritium has~12.3year half-life and existing commercial supply cannot sustain a largeD–Tfleet; lithium breeding is required. — [NRCfusionFAQ](https://www.nrc.gov/materials/fusion/faq)
- Quaise's20km/500°Cnumbers are its technology ambitions. Current company materials describe a planned2030commercial plant, not an established20kmproductive fleet. — [Quaise](https://www.quaise.com/)

### Inferences

**Fission endmember.**10TWaverage/.9availability=11.11TWnameplate, or~11,000one-GWreactors. Building this tranche in25years means444GW/yearbefore retirements:~150×2025's3GWcommissioning, or~60×2024's~7GW. “Two orders of magnitude” is a scale comparison, not a prediction that growth cannot occur. Nuclear fuel supply, suppliers, qualified construction and financing must grow together.

**Net electricity.**DefineQ=P_fusion/P_driver-delivered andη_driver=P_driver-delivered/P_driver-electric. A simplified net balance is:

`P_net ≈ η_thermal P_fusion − P_fusion/(Q η_driver) − P_aux`.

This neglects blanket energy multiplication and useful recovery of deposited driver energy. Setη_thermal=.4andη_driver=.5as assumptions: atQ10the coefficient before other auxiliaries is.4−.2=.2; atQ30it is.4−.0667=.333. A laser'starget gain and a tokamak'splasmaQhave different delivered-energy denominators; neither includes all electrical plant loads.8.6MJ/3.6MJper kWh=2.389kWhthermal. Pulsed power numbers must not be read as annual output.

**Fuel burn from constants.**One reaction releases17.6×10^6eV×1.602176634×10^-19J/eV=2.81983×10^-12J. At1GWfusion, reactions/year=(10^9×31,557,600)/2.81983×10^-12=1.119×10^28. Tritium atomic mass3.016u×1.6605390666×10^-27kg/u gives56.05kg/year. At40%thermal conversion, even1GWgross electricity needs2.5GWfusion, or140kgTper full-power year; internal loads raise the required fusion power. Actual calendar-year burn includes availability.

**Tritium-seed calculation, including decay of the accumulating seed.**Assume burnB=56kg/year, operating inventoryI_op=5kg, and recovered effective breeding ratio b after processing losses but before radioactive decay. Letλ=ln2/12.3=.05635/yearandJbe exported/startup inventory held in storage:

`dJ/dt = (b−1)B − λ I_op − λ J ≡ S − λJ`,

`J(t)=(S/λ)[1−exp(−λt)]`.

A new startup inventoryI_startcan accumulate only ifS>λI_start. Forb1.05,S=2.518kg/year; reachingJ5kg takes `−ln(1−λ×5/S)/λ`≈2.1years. Atb1.01,S=.278kg/yearandthe limiting storeS/λ≈4.94kg, so a5kgseed never accumulates under those exact assumptions. **Do not use the tempting linear5/S≈18year estimate**: it neglects decay of the seed itself and fails over long times. These illustrative5kginventories are not universal requirements; reducing startup inventory or using dedicated breeders can change the conclusion dramatically.

**Neutron fluence.**At assumed wall neutron-energy loading1MW/m², each14.1MeVneutron carries2.259×10^-12J. Flux=10^6/2.259×10^-12=4.427×10^17neutrons/m²/s; year fluence1.397×10^25/m². This is an illustrative loading, not a measureddesignpointor anautomatic failure threshold. Displacement damage, gas generation and strength loss require material-specific irradiation evidence. Higher-flux testing can accelerate exposure but must reproduce relevant spectrum/temperature/chemistry.

**Heat sink.**At40%conversion,1GWgross electricity from2.5GWheat rejects1.5GW. With assumed water heat capacity4,180J/kg/Kand allowed10Ktemperature rise, flow=1.5×10^9/(4,180×10)=35,885kg/s≈36m³/s. This is once-through flow, not evaporative consumption. Towers/drycooling change water requirements, cost and efficiency. Do not describe36m³/sas unavoidable freshwater consumption.

**Deep geothermal stress.**ρghwith assumedrockdensity2,700kg/m³,h20,000m,g9.81gives5.2974×10^8Pa=.53GPa. This is verticaloverburden stress, not formationfluidpressure, differentialboreholepressure or a measured site. The25°C/kmgradient example was omitted: extrapolating a near-surface mean linearly to20kmcan mislead. Hot-rock temperature alone does not quantify reservoir flow or sustainable extraction.

**Fleet.**K=K0×2^(Δ/τ), whereτis capacitydoubling time andKis electricnameplate/exportcapacity, not annual electricity. From1GW in2035,Δ15gives181GWforτ2and8GWforτ5by2050. From2045,Δ5gives5.66GWand2GW. All assume continuous scalable capacity growth without upstream/fuel/demand limits. Many simultaneous firstplants, smaller modules, faster replication or earlier start can change the result; the example does not impose a historical fixedgrowth ceiling. Availability determines annual energy delivered.

### Gaps

- No current demonstration establishes simultaneously commercialnetexport, powerplantavailability, lifetime, self-sufficientbreedingand replicatedcost. This is an evidencegap, not proof that SI cannot solve them.
- No quantitative fusioncommissioning forecast was inferred from private-companydates. ITER'sschedule does not set every privatecompany'sschedule, and a firstMWscale plant does not establish aTWfleet.
- The simple electricalbalance and tritium model omit time-dependent inventories, pumping/processingdelay, outages, wallretention and detailed blanketneutronics. They expose requirements, not a licensable reactordesign.

## Which overlooked developments could change the conclusion?

### Takeaway

The strongest omitted candidates change the manufacturing/fuel loop or remove an assumed conversion penalty. They deserve explicit upside and downside tests instead of being subsumed under a generic “fusion breakthrough.”

### Cited Findings

- **High-temperature superconducting magnets and integrated plasma control:**the National Academies identifiesHTSmagnetsand concurrent optimization ofpressure/confinement/currentdriveas paths toward compact highperformance devices. — [Technical assessment](https://www.nationalacademies.org/read/25991/chapter/6)
- **Specialised tritium breeders:**a2026model reported byOakRidgeexamines separating fuelproductionfrom electricityproduction;under specificfuelcycleparameters it finds<1kgstartupinventoriesand storage-doubling times ofweeks. These are model results, not a demonstrated breedingfactory. — [ORNLresearchrecord](https://impact.ornl.gov/en/publications/observations-for-a-fusion-tritium-economy/); [originalpaper](https://www.tandfonline.com/doi/full/10.1080/15361055.2026.2716587)
- **Target/driver consumables:**LLNLrequiresbillion-shotopticsand~10Hzrepetition, placing the powerplant in a different manufacturingregime from individualNIFshots. — [LLNLdriverprogram](https://lift.llnl.gov/research-areas/ife/driver-technology)

### Inferences

1. **Magnet manufacturing can alter the scale of the construction task.**At fixed plasmaβandtemperature, fusionpowerdensity scalesapproximatelyasB^4becausepressure∝B²andfusionrate∝density². This idealization omitsstability, magnetstress, heatloadsand shielding. Stronger magnets can reduce requiredplasmavolume; they do not directly yield aB^4cheaperplant. SIcouldoptimizewinding, joints, cooling, protectionandfactoryproduction. Evidence ofhighfieldplusreliablecheapcoilproductionwouldmove thefleetcalculationmorethanone isolatedplasmarecord.
2. **Fuel infrastructure could be specialised.**Our5kgstartupscenariois intentionallynotuniversal. A breederplantoptimizedfor fuelratherthanelectricalexport, and much fasterisotopeseparation/recycling, could radically reducefleetstartupconstraints. Conversely, a blanketbreedingratioaboveoneincodesbutnotatrelevantintegratedconditionswoulddelaydeployment. Thiscandidatechanges theconclusionbecausefuelcanitselfsupportorblock exponentialreplication.
3. **Cheap targets and replaceable optics may decide inertial-fusioncost.**At10Hz, oneplantuses3.16×10^8targets/year. Anassumed$1per targetimplies$316million/year; dividedby8.76millionMWhfroma continuouslyoperating1GWeplant, that is~$36/MWhfor targetsalone. At$0.10,targetcostis~$3.6/MWh. These are sensitivityprices, not currentmanufacturingquotes. Billion-shotopticlifeat10Hzis~3.2yearscontinuousoperation, so replacementcost/downtimeandrobottargetinjectionmatter. SIcouldmake thefuelpacketandthefactoryfarcheaper; a highgainshotdoesnotdemonstratethat.

### Gaps

- A public, independentlyverifiedrepeatmanufacturingcostforpowerplantgradefusiontargets, fullmagnetsets, blanketmodulesandtritiumsystemswasnotestablishedhere.
- The broaderportfolio—includingwind,hydro,tidal,biomass,spaceenergyandfulldeeppothermalanalysis—belongs to theother assignedspecialist. Thiscomponentdoesnotclaimto rankallenergyroutes.
