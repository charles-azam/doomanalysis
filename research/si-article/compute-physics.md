# Compute: from electrical power to useful scientific work

Evidence checked 1 November 2026. This memo owns no implementation files. New long-range quantities below are **author scenarios**, not forecasts attributed to the IEA or chipmakers. The existing 2030 token arithmetic is correct; its weak point is the assumed energy per token, not unit conversion.

## What is actually deployed, and what is the electricity budget?

### Takeaway

There is a substantial, growing physical base. A contract for ten gigawatts, a commissioned data hall, peak IT power and metered annual facility electricity are different quantities. Budget global electricity explicitly rather than extrapolating exponential data-centre demand indefinitely.

### Cited Findings

- The IEA's April 2026 assessment estimates **485 TWh in 2025** and projects **950 TWh in 2030** for all data centres, including conventional cloud, training and overhead. It identifies grid, memory, equipment and financing bottlenecks. — [IEA, Key Questions on Energy and AI](https://www.iea.org/reports/key-questions-on-energy-and-ai/executive-summary).
- Global electricity consumption is estimated at **28,200 TWh in 2025**, projected **33,600 TWh in 2030**. — [IEA, Electricity 2026, demand](https://www.iea.org/reports/electricity-2026/demand).
- OpenAI reports **~1.9 GW of available compute in 2025**, across providers. Its separate April 2026 statement says **more than 10 GW secured** for US infrastructure, not ten operating gigawatts. These series also have potentially different IT/facility boundaries. — [OpenAI CFO, 18 January 2026](https://openai.com/index/a-business-that-scales-with-the-value-of-intelligence/); [OpenAI, 29 April 2026](https://openai.com/index/building-the-compute-infrastructure-for-the-intelligence-age/).
- Crusoe's March 2026 primary release establishes two energised **100 MW buildings**, with a six-building phase targeting **1.2 GW total by end-2026**. Its adjacent Microsoft campus has **900 MW projected capacity**, first energisation targeted mid-2027. These are dated facts/targets, not a November capacity census. — [Crusoe, 27 March 2026](https://www.crusoe.ai/resources/newsroom/crusoe-announces-new-900-mw-ai-factory-campus-in-abilene-texas-to-support-microsoft-ai-infrastructure).
- A newer commissioned example: Microsoft declared its first Mount Pleasant/Fairwater facility fully operational on **23 June 2026**, following equipment start-up in April; the second facility remains scheduled for 2028. The release does not quantify its delivered MW, so do not invent a number. — [Microsoft, June 2026](https://news.microsoft.com/source/2026/06/23/microsoft-completes-construction-on-first-datacenter-facility-in-mount-pleasant-wisconsin/).
- Google's reported 2025 fleet PUE is **1.09**; its current page explains the measurement boundary and reports roughly three times as much comparable compute per energy as five years earlier. These are company measurements, not a universal fleet standard. — [Google data-centre efficiency](https://datacenters.google/efficiency/).

### Inferences

**Power is a rate; energy is its time integral.** 1 GW sustained for 8,760 h produces/consumes 8.76 TWh. The IEA's 950 TWh/year is therefore **108 GW average facility power**, **2.83%** of its projected 2030 global electricity consumption. It is about 0.11 TW, not 110 TW. Nameplate capacity must be multiplied by an actual load factor to obtain this energy.

Use a bounded illustrative budget, not an energy-growth law:

| Year | Global electricity TWh/year | All-data-centre TWh/year | Average DC GW | DC fraction of global electricity | Status |
|---|---:|---:|---:|---:|---|
|2025|28,200|485|55|1.72%|IEA estimate|
|2030|33,600|950|108|2.83%|IEA projections|
|2040|45,000|2,000|228|4.44%|Author budget scenario|
|2050|60,000|3,000|342|5.00%|Author budget scenario|

The post-2030 global budget grows ~3% annually; the DC allocation reaches 5% by 2050. These are explicit choices to test, not limits imposed by physics. At 3,000 TWh/year, data centres alone need roughly 0.34 TW continuously, with corresponding generation, transmission, cooling and equipment. All consumed electricity ultimately becomes heat. Annual energy is only one constraint: a particular region can lack firm power or a grid connection even when the global percentage is small.

**Construction timing:** a ten-GW project that waits three years then ramps linearly from zero to ten over two years supplies only 10 GW-years (87.6 TWh) in the first five years. Counting ten GW for all five gives 50 GW-years. Commissioning dates belong in the calculation.

### Gaps

A complete, consistently defined November 2026 census of metered online AI power was not established. Project aggregators disagree on whether their numbers mean projected campus, IT, connected or actually loaded capacity. The global IEA estimate plus dated operator observations is more defensible than a misleading summed headline. No source checked supplies reliable 2040/2050 data-centre demand forecasts matching the scenario above.

## How many tokens and successful projects can that buy?

### Takeaway

The electricity-to-token conversion spans orders of magnitude because arithmetic, memory movement, batching, model size, context and latency all matter. Tokens are a reproducible workload accounting unit, not intelligence. Keep a fixed-workload scenario separate from a prediction about future SI architectures.

### Cited Findings

- H100 SXM specifications: **80 GB HBM**, **3.35 TB/s memory bandwidth**, **up to 700 W**, dense BF16 arithmetic approximately **989 TFLOP/s** (the advertised 1,979 uses sparsity). — [NVIDIA H100 specifications](https://www.nvidia.com/en-us/data-center/h100/).
- Google's production measurement finds **0.24 Wh = 864 J per median Gemini Apps text request**, including accelerators, host systems, provisioned idle capacity and facility overhead. It reports a 33-fold energy decline for its median request over one year. It does not establish joules per arbitrary frontier-reasoning token, and the median request is not a mean or a standard task. — [Elsworth et al., 21 August 2025](https://arxiv.org/abs/2508.15734).
- Broad scientific ability is measured by completed tasks under a particular harness, not token volume. AA's October v5 evaluations retain substantial failures. — [Artificial Analysis v5](https://artificialanalysis.ai/articles/artificial-analysis-intelligence-index-v5).

### Inferences

#### The arithmetic and memory checks should be visible

For a short-context dense transformer, or an active-parameter approximation to a mixture of experts, a forward token needs roughly **F ≈ 2 N_active** floating-point operations. For N_active = 10^11, this is 2×10^11 FLOP/token. Actual attention, routing, communication, prefill and verification add work. Total parameters determine weight storage; active parameters determine only part of per-token arithmetic. More experts do not make total memory free.

H100 dense peak efficiency is 989×10^12/700 ≈ **1.4×10^12 FLOP/J**. Let u be realised FLOP/J divided by this peak, h the fraction of IT energy spent in accelerators, and p = facility/IT energy (PUE). Then:

**e_facility ≈ [2 N_active/(η_peak u)] × p/h.**

Taking N_active = 10^11, u = .03, h = .60, p = 1.20 gives **e ≈ 9.5 J/token**, the article's rounded 10-J baseline. These are workload assumptions, not measured fleet properties. The earlier shorthand “half facility energy reaches accelerators” is the same h/p = .5 convention.

But a FLOP-only estimate hides the stronger explanation. A 100-billion-parameter FP16 dense model has **200 GB of weights**. Distributed across three 80-GB H100s, a batch-one decode step must stream order 200 GB. Even at aggregate peak bandwidth 3×3.35 TB/s, that is **~20 ms per step**, versus only **~67 microseconds** at peak arithmetic. If the three chips draw an assumed 700 W each during that step, with p/h = 2, the facility energy is **~84 J per output token**. This is an engineering reference under an explicit draw assumption, not an absolute physical lower energy bound. Batch sixteen can share the weight reads, taking that component toward **~5 J/token**; compute, KV-cache traffic, communication and scheduling then matter. A fixed headline J/token without batching/model/context is not a physical constant.

A 10× larger active model can consume the 10× hardware-efficiency gain. A longer reasoning trace or many discarded attempts can consume another 10^2–10^4. Better chips can produce cheaper existing-model tokens without making a harder scientific question equally cheap. Therefore use **joules per independently accepted task at fixed quality** alongside joules per token.

#### A 2030/2040/2050 scenario, with cumulative accounting

**Annual tokens/person = E_DC × 3.6×10^15 × f_inference / (e_facility × population).**

Here f_inference includes both AI's share of DC energy and inference's share of AI. PUE, idle capacity, chip utilisation and hosts are already in e_facility; do not subtract them twice. If starting from peak installed watts instead of metered energy, first multiply by the actual power load factor. Hardware “compute utilisation” is not the same as power load factor: idle hardware still draws electricity.

Assume a fixed reference workload, linear changes in DC electricity, inference share and population between the knots below; interpolate e_facility geometrically. Use all the allocated pool worldwide. Population figures are rounded author inputs, not exact demographic claims.

|Year|DC TWh/year|AI share × inference share = f|People, billion|Reference e J/token|Tokens/person/day|Cumulative since 2025|
|---|---:|---|---:|---:|---:|---:|
|2025|485|.50×.70 = .35|8.3|10|~20,200|0|
|2030|950|.50×.70 = .35|8.5|10|**3.86×10^4**|**5.37×10^7**|
|2040|2,000|.60×.75 = .45|9.2|2|**4.82×10^5**|**7.24×10^8**|
|2050|3,000|.70×.80 = .56|9.7|1|**1.71×10^6**|**4.32×10^9**|

These are plausible-to-test resource scenarios, not calibrated predictions. The assumed fivefold improvement in 2030–2040 and twofold in 2040–2050 refer to energy per fixed-workload token, not a tenfold improvement in SI quality. Hold energy at **10 J/token throughout** with the same electricity/allocation/population path and the endpoint counts become **3.86×10^4, 9.65×10^4, 1.71×10^5 per day**; cumulative totals **5.37×10^7, 2.96×10^8, 7.79×10^8**. The 2050 tenfold difference is an efficiency assumption, not extra electricity.

For any endpoint, divide/multiply by ten when energy per equivalent token rises/falls tenfold. In particular, 2030 spans ~3.9×10^3–3.9×10^5/day at 100–1 J/token. This is a sensitivity range, not a confidence interval or a claim that SI fits in those costs. The old five-year 5.32×10^7 calculation is correct for fixed 8.5 billion people; 5.37×10^7 here reflects varying 8.3→8.5 billion.

**Successful tasks:** if a defined accepted research job costs 10^8 token equivalents including failures, 2030's ~1.4×10^7 annual tokens/person support only **0.14 jobs/person/year**; the illustrative 2050 efficiency case supports **6.2**. The 10^8 cost is an assumed task budget, not a measured universal scientific-project cost. A 1,000-fold hidden/search-token multiplier similarly converts 2030's 38,600 token-equivalents/day into only 39 final-output equivalents/day. No human-equivalent researcher count follows without task validation.

**Geography:** a one-billion-person group allocated 20% of 2030's global pool receives 1.7× the global per-capita reference. Allocating it the entire pool gives 8.5×. The population denominator and its share of hardware must move together.

#### Reproduce cumulative arithmetic

For each adjacent knot a,b, and t from 0 to 1:

E(t)=E_a+(E_b−E_a)t; f(t)=f_a+(f_b−f_a)t; N(t)=N_a+(N_b−N_a)t; e(t)=e_a(e_b/e_a)^t.

Integrate **(year_b−year_a)∫[3.6×10^15 E(t)f(t)/(e(t)N(t)10^9)]dt**. Values above use 10,000 midpoint slices per interval; rounding is intentionally to three significant figures. Use the product f, not interpolating its two factors separately unless recomputing the table consistently.

### Gaps

No verified public source checked supplies representative November 2026 full-stack joules per successful Astra/Opus frontier scientific project. Vendor median text-query measurements cannot supply it. The optimal mixture of model sizes, active experts, precision, batching and latency is also unknown. Extrapolating the reported 33× efficiency year indefinitely would erase real floors and is unjustified.

## How much silicon, capital and manufacturing must accompany the watts?

### Takeaway

The wafer area alone is not an obvious global impossibility; advanced-node capacity, yield, HBM, packaging, networking and continuous replacement can bind first. A power connection without those complements does not produce computation.

### Cited Findings

- GH100 is an **814 mm² die**, using TSMC's customised 4N process. — [NVIDIA Hopper architecture, March 2022](https://developer.nvidia.com/blog/nvidia-hopper-architecture-in-depth/).
- TSMC reports **more than 17 million 300-mm-equivalent wafers/year** of managed 2025 capacity, across many process nodes and product categories. This is not all AI-ready or leading-edge capacity. — [TSMC fab capacity](https://www.tsmc.com/english/dedicatedFoundry/manufacturing/fab_capacity).
- Microsoft's 2026 annual report gives estimated accounting lives of **two to six years for servers/network equipment**. These are depreciation judgments, not hard technical lifetimes or universal GPU replacement dates. — [Microsoft Annual Report 2026, accounting policies](https://www.microsoft.com/investor/reports/ar26/index.html).

### Inferences

Take a **10-GW average facility**, PUE 1.2 and accelerators consuming 60% of IT power. It contains order **10^10×.60/(1.2×700) ≈ 7.1 million H100-equivalent powered GPUs**, assuming 700 W/chip. At 80 GB each, that is **~570 PB of HBM** before host RAM and storage. This is a reference fleet, not the actual equipment mix in an announced project.

A first wafer estimate for diameter D and die area A is gross dies ≈ πD²/(4A)−πD/√(2A). At D=300 mm and A=814 mm² it gives **~63 gross dies/wafer**. An assumed 70% usable yield gives **~44 good dies**, so 7.1 million chips require **~160,000 wafers** initially. Yield, scribe lanes, edge exclusions and binning change this approximate geometry. It does not include separate memory dies or packages.

Spread replacement over an assumed five-year equipment life: **~32,000 logic wafers/year** for the fleet, or ~0.2% of TSMC's total all-node wafer-equivalent capacity. That comparison shows why “not enough silicon atoms” is the wrong diagnosis; it does not prove easy supply. The relevant advanced process, HBM and packaging lines are much smaller and cannot instantly substitute for mature-node fabs. A modern multi-die GPU also changes the logic-die count per package.

The same fleet costs order **$210 billion** if the **assumed installed accelerator/server/network capital is $30,000 per GPU-equivalent**, excluding sites and power supply. Five-year replacement implies **~$43 billion/year** of that capital before expansion and financing. By comparison, 87.6 TWh/year at an **assumed $50/MWh** is **$4.4 billion/year of electricity**. Prices and equipment life are scenario inputs, not quotations. Cheap energy alone cannot eliminate memory, network and capital costs. Higher hardware throughput may reduce these costs per task, but only if useful workload and utilisation keep up.

A better global deployment equation is **useful output = min(electricity-limited output, chip-limited output, memory/packaging-limited output, task/experiment-limited output)**, with each expressed in the same task unit. The minimum can move as investment and invention change the complements. It is not a declaration that present bottlenecks are immutable.

**Map physics into the probability table without fake calibration:** define the energy gate by service quantities, firm regional delivery and feasible installed capacity; define material services by tonnes or service output per year, ramp rates, yield, replacement and required complementary inputs. For SI, compute availability bounds experiments/attempts; it does not determine whether learning crosses the quality threshold. The reference numbers become conditional feasibility checks: can a scenario commission the power and machines on time, and deliver the required accepted output? A simulation's feasibility fraction becomes a probability only after explicitly justified distributions for uncertain parameters. Do not convert a headroom ratio into a probability by declaration.

**Recommended three visible calculations:** (1) a memory-versus-FLOP box explaining why one “token” can cost 1–100 J; (2) the bounded 2030/2040/2050 table with a fixed-10-J comparison and cumulative integral; (3) the ten-GW bill of materials, replacement and electricity-capital comparison. These expose the physical machinery behind the headline rather than merely adding more large numbers.

### Gaps

The $30,000 installed cost, 70% yield, five-year turnover and future efficiency improvements are transparent assumptions. They are not established prices/yields for future SI hardware. A full industrial audit requires actual node-specific capacity, HBM stack production, package substrate/interposer throughput, transformer lead times and accepted-work throughput. Those were not established in this bounded memo. Orbital infrastructure is outside this assignment.

### Three overlooked changes worth testing

1. **Long context can destroy the batching gain.** A possible advance is better KV-cache compression or architectures that retain useful state with much less memory. For an illustrative 80-layer model with eight KV heads, head dimension 128 and two bytes/value, K and V require 2×80×8×128×2 = **327,680 bytes per context token**. A 128,000-token context needs **~42 GB per live sequence**; sixteen sequences need **~670 GB**, before the 200-GB model weights. That cannot fit on the three 80-GB H100s in the simplified batch example; at least eleven would be needed even before other allocations. The assumed architecture is not a claim about Astra. This converts a vague “long context costs more” into a concrete memory budget, and shows why batch sixteen was only a weight-read component calculation. **Measure:** memory bytes and full-stack joules per accepted long-context task. **Potential consequence:** a real reduction in required state could improve useful throughput more than another increase in peak arithmetic. Hardware capacity anchor: [NVIDIA H100](https://www.nvidia.com/en-us/data-center/h100/).

2. **Cheaper tokens and cheaper verified work can move in opposite directions.** Let an attempted task consume L token equivalents, have acceptance probability p, and cost e joules/token. Under the explicit simplifying assumption that attempts are independent and can be retried until accepted, expected energy/accepted job is **eL/p**. Improving e from 10 to 1 J while increasing L from 10^5 to 10^7 and p from .5 to .8 raises energy/accepted job from **2 MJ to 12.5 MJ**, a factor **6.25**. Additional reasoning may still be worth buying because it unlocks valuable work, but the direction of efficiency depends on the task metric. Better verifiers, targeted search, active experimental design and model routing could improve p or reduce L without bigger power plants. **Measure:** prospective accepted outcomes at fixed quality, including failed samples, tools and laboratory energy. **Potential consequence:** “intelligence abundance” could arrive through error correction and sample efficiency rather than a correspondingly enormous raw token budget. Task-based empirical anchor: [AA v5](https://artificialanalysis.ai/articles/artificial-analysis-intelligence-index-v5); full serving boundary anchor: [Google measurement](https://arxiv.org/abs/2508.15734).

3. **Yield engineering and chiplets can move a manufacturing bottleneck, while packaging becomes the new one.** Under a simple Poisson defect model, defect-free yield is **Y = exp(−DA)**, with D defects/cm² and A die area in cm². For an 814-mm² (=8.14-cm²) die, assumed D=.10 gives Y≈44%; D=.05 gives Y≈67%. Halving the defect density would therefore produce **~1.5 times as many usable large dies per wafer**, without a new fab. Dividing functions among smaller known-good dies can also improve yield, but requires interconnects, substrates, assembly, testing and sufficient memory bandwidth; it does not make the full system free. These defect densities are hypothetical, not TSMC yield disclosures. **Measure:** known-good packaged accelerators and accepted-work throughput per wafer, not merely wafer starts or transistor density. **Potential consequence:** better process control/packaging could accelerate deployment sooner than a new node; conversely, an HBM or package bottleneck could prevent promised FLOPs from reaching service even when logic wafers are available. Source dimensions and fabrication scope: [NVIDIA GH100](https://developer.nvidia.com/blog/nvidia-hopper-architecture-in-depth/), [TSMC managed capacity](https://www.tsmc.com/english/dedicatedFoundry/manufacturing/fab_capacity).
