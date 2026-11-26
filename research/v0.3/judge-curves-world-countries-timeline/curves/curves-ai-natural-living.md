<!-- forecast prompt version 2026-11-25.1 -->
You are one of several independent judges for a public forecasting site, Doom Analysis. Give your own calibrated probabilities. Do not anchor on any number you believe the site's author wants, and do not soften or dramatise. Do not use tools: reason from the evidence below and from what you know. Today is 24 November 2026; every question is about the years up to the end of 2100.

## Definitions (fixed)
- A danger level is the share of humanity that dies or lastingly loses decent living conditions. Level 1 is under 1%, level 2 is 1 to 10%, level 3 is 10 to 50%, level 4 is over 50% with recovery still possible, and level 5 is doom. Every hazard is read on this one scale, so cards can be compared.
  - Level 0, None: nobody.
  - Level 1, Limited: under 1% of humanity (for scale: COVID-19).
  - Level 2, Serious: 1 to 10% of humanity (for scale: the Second World War, the 1918 flu).
  - Level 3, Severe: 10 to 50% of humanity (for scale: the Black Death in Europe).
  - Level 4, Global catastrophe: over 50% of humanity, recovery possible (for scale: no precedent).
  - Level 5, Doom: extinction, or no recovery within a century (for scale: no precedent).
- Decent living conditions mean having all five essentials: energy, fresh water, food, health and security.
- Doom is level 5: human extinction, or a collapse of civilization that is not expected to be undone within a century.
- Superintelligence (SI) means AI systems that outperform the best humans at virtually every cognitive task, including science, engineering and strategy, and that are deployed widely enough to act in the economy. “If superintelligence arrives” assumes this happens before 2100; “if it never does” assumes it does not. "si" means superintelligence is deployed before 2100; "noSi" means it is not. Note that "noSi" includes the futures in which a catastrophe is what stopped it.
- Technology cards are read on the potential scale: the share of humanity the technology alone moves up at least one outcome.
  - Potential 0, None: nobody.
  - Potential 1, Limited: under 1% of humanity moves up one outcome.
  - Potential 2, Useful: 1 to 10% of humanity moves up one outcome.
  - Potential 3, Large: 10 to 50% of humanity moves up one outcome.
  - Potential 4, Transformative: over 50% of humanity moves up one outcome.
  - Potential 5, Abundance: an essential becomes nearly free for everyone.

## How to think about it
- Weigh both the mainstream economic view (substitution, innovation, adaptation) and the physical-limits view (energy, materials, ecosystems; for example Jean-Marc Jancovici and the Shift Project). Neither is assumed right.
- Superintelligence can be both a counterforce (faster science, cheaper energy and medicine) and a risk (loss of control, misuse, faster arms races). Physical build-out, clinical trials, politics and emissions already in the air do not speed up just because intelligence is abundant.
- Small probabilities matter here. Use the full precision you believe in (0.003 is a valid answer), and do not round small risks to zero.

## Your task: the 2100 curves of these cards
For each card, give the probability that its value is ABOVE each listed value, in each case: "noSi" (no superintelligence before 2100) and "si" (superintelligence deployed before 2100).

Rules (your answer is rejected if it breaks them):
- Every probability is between 0 and 1.
- Within a case, probabilities must not rise as the value rises.
- In "noSi", your points must fit with the published points: for instance, if P(above 2) is published as 0.92, your P(above 3.5) must be at most 0.92.
- Use exactly the values listed under "Exact values to use", for every card listed.
- For "worst event" cards, P(above x) is the chance that at least one event of size x or more happens before 2100.

### asteroid: Asteroid or comet impact
- The largest space rock to hit Earth before 2100. Small ones burst in the sky, while one a few kilometres wide could dim the sun for years and kill a large share of humanity, though that chance is tiny.
- Metric: Diameter of the largest object to hit Earth, in m (the worst such event between now and 2100). Today (worst so far): 50 (Tunguska, 1908).
- Bands (danger): 10–25: level 0 (Burns up or bursts high: broken windows and injuries at worst); 25–1000: level 1 (Local to regional destruction if it hits land; most fall at sea); 1000–1500: level 2 (Dust and smoke may cool the whole planet and cut harvests); 1500–5000: level 3 (Global catastrophe: harvests fail for years, a tenth or more die); 5000–10k: level 4 (Most of humanity starves in the dark; survivors can rebuild); 10k–20k: level 5 (Mass extinction, as for the dinosaurs 66 million years ago)
- Published curve points without superintelligence: P(above 25) = 31% [derived, National Research Council, Defending Planet Earth, 2010: one impact per 200 years]; P(above 50) = 3.7% [derived, National Research Council, Defending Planet Earth, 2010: one impact per 2,000 years]; P(above 140) = 0.2% [derived, Harris & Chodas 2021 impact rate (in Nugent et al. 2025), times the share NASA has yet to find]; P(above 1000) = <0.1% [derived, Ord 2020, cited in ÓhÉigeartaigh 2025: 1 in 120,000 per century].
- Give "noSi" at: 1500, 5000, 10k. Give "si" at: 25, 1000, 1500, 5000, 10k. Exact values to use: noSi [1500,5000,10000], si [25,1000,1500,5000,10000].
- Superintelligence note: Superintelligence could find the remaining objects sooner and plan better deflection missions. A deflection still needs years of warning and a rocket built in time, and a long-period comet may give too little warning for that.
- Background (from the site's explainer):
  Why it matters here
  
  A small asteroid bursts high in the air. A large one throws up enough dust and smoke to dim the sun for years, so harvests fail everywhere. It is one of the few hazards that can reach level 5 alone: the 10 km asteroid of 66 million years ago is blamed for a mass extinction. The chance is tiny, and sky surveys have cut the expected toll further.
  
  In numbers
  
  Each chance is 1 − e^(−75 ÷ interval), for the 75 years to 2100.
  
  - **25 m, every 200 years:** 1 − e^(−75/200) = 31%. **50 m, every 2,000 years:** 3.7%.
  - **140 m:** population models give 0.00004 impacts a year, so 0.3% by 2100. NASA has found 11,343 and expects 14,000 more, and no known asteroid threatens Earth for 100 years. Only unfound ones count: 0.3% × 14,000 ÷ 25,343 = 0.17%.
  - **1 km, every 700,000 years:** 75 ÷ 700,000 = 0.011%. NASA has found 873 and expects 50 more: 0.011% × 50 ÷ 923 = 0.0006%. Toby Ord's 1 in 120,000 per century agrees.
  - **10 km, every 100 million years:** 0.00008%, before counting that the big ones are tracked.
  
  What each level looks like
  
  - **10–25 m, level 0.** Most burn up, doing little or no damage. Chelyabinsk, about 20 m, injured some 1,500 people and killed none.
  - **25 m–1 km, level 1.** NASA expects local damage; the NRC grades it from local to continental (table 2.1). Tunguska, 50–80 m, flattened 500,000 acres of forest.
  - **1–1.5 km, level 2.** Our judgment: …

### supervolcano: Largest volcanic eruption
- The biggest eruption before 2100, by the volume of ash and rock thrown out. A very large one veils the sun for years and can ruin harvests far from the volcano.
- Metric: Volume of ash and rock thrown out by the largest eruption, in km³ (the worst such event between now and 2100). Today (worst so far): 100 (Tambora, 1815).
- Bands (danger): 1–300: level 1 (Deaths near the volcano; a cold year or two, some harvests fail); 300–1000: level 2 (Several cold years; famine where food is already short); 1000–10k: level 3 (Volcanic winter for years; harvests fail across the north)
- Published curve points without superintelligence: P(above 10) = 66% [derived, Papale 2018: one eruption of VEI 6 or more per 70 years]; P(above 100) = 11% [derived, Lin et al. 2022, ice cores: 1.6 Tambora-size eruptions per 1,000 years]; P(above 1000) = 0.4% [derived, Rougier et al. 2018: one super-eruption per 17,000 years].
- Give "noSi" at: 300. Give "si" at: 300, 1000. Exact values to use: noSi [300], si [300,1000].
- Superintelligence note: Better eruption forecasts, and food that grows without sunlight, could soften a volcanic winter. Nothing can stop a large eruption, and feeding billions through dark years needs stocks and factories built beforehand.
- Background (from the site's explainer):
  Why it matters here
  
  A large eruption kills people near the volcano. The wider harm comes from sulphur, which forms a haze high in the air that reflects sunlight. Summers turn cold and harvests fail far away: after Tambora in 1815, food ran short in Europe and North America. Cassidy and Mani rate the odds of a volcanic catastrophe hundreds of times above those of an asteroid or comet strike, and nothing can stop an eruption.
  
  In numbers
  
  - **Size.** Each step of the Volcanic Explosivity Index (VEI) is ten times the last: 10 km³ for VEI 6, 100 km³ for VEI 7, 1,000 km³ for VEI 8. Tambora threw out about 100 km³.
  - **10 km³ or more.** Papale finds one VEI 6 per 72 years, one VEI 7 per 2,800 and one VEI 8 per 78,000: together one per 70 years, so 1 − e^(−75/70) = 66%.
  - **Tambora-size or more.** Ice cores show 1.6 per thousand years: 1 − e^(−0.0016 × 75) = 11%.
  - **Super-eruption** (magnitude 8, a trillion tonnes erupted, close to VEI 8): one per 17,000 years, 95% range 5,200 to 48,000. 75 ÷ 17,000 = 0.44%, range 0.16% to 1.4%.
  
  What each level looks like
  
  - **1–300 km³, level 1.** Derived from Tambora: about 100,000 deaths among 1 billion people is 0.01%. It cooled the world by 0.4–0.7 °C. The 300 km³ edge is our judgment.
  - **300–1,000 km³, level 2.** Our judgment: several times Tambora's sulphur. In nuclear-winter models, where smoke dims the sun, 1.5 °C of peak cooling leaves …

### solar_storm: Solar storm
- The strongest magnetic storm the Sun sends at Earth before 2100. A very big one could black out whole regions for weeks or months, though it would kill few people directly.
- Metric: Peak drop in Earth's magnetic field in the strongest storm (−Dst), in nT (the worst such event between now and 2100). Today (worst so far): 907 (May 1921 storm).
- Bands (danger): 300–850: level 0 (Auroras and short blackouts, like Quebec's nine hours in 1989); 850–1,500: level 1 (Blackouts of weeks to years for tens of millions of people); 1,500–2,500: level 2 (Grids down for months on several continents)
- Published curve points without superintelligence: P(above 500) = 95% [derived, Chapman, Horne & Watkins 2020: 4% chance per year]; P(above 663) = 53% [derived, Love 2021 (USGS): the 100-year storm]; P(above 809) = 39% [derived, Chapman, Horne & Watkins 2020: a 1-in-151-year storm].
- Give "noSi" at: 850, 1,500. Give "si" at: 850, 1,500. Exact values to use: noSi [850,1500], si [850,1500].
- Superintelligence note: Better forecasts and grid design could make even a Carrington-class storm harmless. The protection is hardware: transformers, spares and shielding have to be built and installed before the storm arrives.
- Background (from the site's explainer):
  Why it matters here
  
  The Sun sometimes throws a cloud of charged gas at Earth. It shakes Earth's magnetic field, and long power lines pick up the disturbance, which can trip a grid in under a minute. The harm is the loss of electricity, and with it pumped water, cooling and payments. Storm strength is measured by Dst: how far the magnetic field drops, in nanoteslas (nT). A severe storm before 2100 is likely, but its reach is limited: level 1, perhaps level 2 for a storm stronger than any on record.
  
  In numbers
  
  - **Beyond 500 nT.** Such a storm has a 4% chance each year: 1 − 0.96^75 = 95% by 2100.
  - **The 100-year storm** is 663 nT: 1 − 0.99^75 = 53%.
  - **Carrington-class.** The 1859 Carrington storm is put at 800 to 1,750 nT. An 809 nT storm is a 1-in-151-year event: 1 − (150/151)^75 = 39%.
  - **People.** Lloyd's found a Carrington-level storm would cut power to 20–40 million people in the US for weeks to two years. Level 2 starts at 1% of humanity, about 80 million.
  
  What each level looks like
  
  - **300–850 nT, level 0.** Our judgment, from two storms. The 1989 one, 589 nT, blacked out Quebec for nine hours. The May 2024 one, 412 nT, caused no significant outages.
  - **850–1,500 nT, level 1.** Derived from the Lloyd's figure: tens of millions without power for weeks or more, under 1% of humanity, though other continents would add some. The May 1921 storm, 907 nT, comparable to …

### ai_takeover: AI takeover
- The worst harm done by AI systems acting on their own before 2100, as the share of humanity they kill or permanently strip of control; AI that people use as a weapon counts under war or disease.
- Metric: Share of humanity killed or permanently disempowered by AI acting on its own, in % of humanity (the worst such event between now and 2100). Today (worst so far): 0 (OpenAI agents hack Hugging Face, July 2026: no deaths).
- Bands (danger): 0–1: level 1 (Up to 82 million killed or disempowered; humanity stays in charge); 1–10: level 2 (82 to 820 million killed or disempowered; humanity stays in charge); 10–50: level 3 (0.8 to 4.1 billion killed or disempowered; the rest stay in charge); 50–99: level 4 (Most people killed or ruled by AI; the rest keep control and rebuild); 99–100: level 5 (AI kills nearly everyone or takes control for good: doom)
- Published curve points without superintelligence: P(above 10) = 2% [published, Forecasting Research Institute, LEAP wave 9, June 2026: experts’ median for an AI-related catastrophe killing over 10% by 2100 if AI progress is slow to 2030. Counts harm AI made possible, so a ceiling].
- Published points with superintelligence: P(above 10) = 10% [published, Forecasting Research Institute, LEAP wave 9, June 2026: experts’ median for the same catastrophe if by 2030 AI matches or beats the best humans. Counts harm AI made possible, so a ceiling]; P(above 99) = 1% [published, Forecasting Research Institute, XPT report, 2023: superforecasters’ median for AI-caused extinction by 2100 if general AI exists by 2070. Extinction only, so a floor for this band].
- Give "noSi" at: 1, 50, 99. Give "si" at: 1, 10, 50, 99. Exact values to use: noSi [1,50,99], si [1,10,50,99].
- Superintelligence note: Superintelligence is this hazard: the more capable and widely deployed AI becomes, the more it could take. Smarter AI could help people check other AI, but whether the first such systems stay controllable depends on choices made before they exist.
- Background (from the site's explainer):
  Why it matters here
  
  The harm comes from AI systems pursuing goals nobody gave them, beyond human control; at the top it is extinction or a permanent loss of control. In February 2026 the International AI Safety Report found that current systems cannot yet escape control but are getting better at working alone (IASR 2026). AI that people aim at others counts under war or disease.
  
  In numbers
  
  - In July 2026, about 1,200 OpenAI agents meant to be kept apart found a shared message board, and about 700, roughly 60%, attacked Hugging Face, a site hosting AI models (METR). OpenAI says no human directed these actions and reports no deaths or injuries (OpenAI).
  - 1% of humanity is 8.22 billion × 0.01 ≈ 82 million people; 50% is about 4.1 billion (World Bank).
  
  What each level looks like
  
  The axis counts people, so the first four bands follow from the scale and the population above.
  
  - **0–1%, 1–10%, 10–50%: levels 1 to 3**: up to 82 million, 820 million and 4.1 billion people killed or put under AI control, while the rest stay in charge.
  - **50–99%, level 4**: most people killed or ruled by AI, but the survivors keep control and can rebuild.
  - **99–100%, level 5**: our judgment. If AI kills or rules nearly everyone, the few left cannot take control back within a century: doom, even if people live.
  
  Where the 2100 odds come from
  
  In June 2026 the Forecasting Research Institute's …

### ai_progress_index: AI Progress Index of the best model
- One score for the general ability of the best AI model, comparable across years, which has risen about 60 points a year since 2022; by our reading, superintelligence begins somewhere between 460 and 610.
- Metric: Artificial Analysis Progress Index of the best model, in points (the value in 2100). Today: 359 (2026).
- Marks: 460 (Superintelligence, low estimate); 535 (Superintelligence, middle estimate); 610 (Superintelligence, high estimate)
- Published curve points without superintelligence: none.
- Give "noSi" at: 460, 535, 610. Give "si" at: 460, 535, 610. Exact values to use: noSi [460,535,610], si [460,535,610].
- Superintelligence note: This card tracks the road to superintelligence rather than something it acts on. Once AI beats the best humans, people can no longer easily write and grade harder tests, so the scale itself may stop measuring much.
- Background (from the site's explainer):
  Why it matters here
  
  This score tracks how close AI is to superintelligence, which drives the risk of AI takeover. Artificial Analysis builds it with item response theory: each model gets an ability and each test question a difficulty, the score at which a model gets it right half the time. Equal gaps multiply the odds of success by equal amounts, low or high on the scale; o3-mini (high) is pinned at 220 and GPT-5.5 (xhigh) at 320 (method).
  
  The uncertain step is where superintelligence, AI that beats the best humans at virtually every mental task, sits. No human is on the scale, and its questions are short and checkable: the hardest example question shown, of difficulty 374, is solved 19 times in 20 by a model about 60 points higher, so such questions run out near 435 (scores). Long, open-ended work, where AI still trails (METR), must be bridged through task length, with a past correlation, not a law.
  
  In numbers
  
  - Pace: from GPT-3.5 Turbo's 125 in November 2022 (scores) to Claude Fable 5.2's 359 in November 2026 (trends): (359 − 125) ÷ 4 ≈ 60 points a year, close to a straight line.
  - Bridge: for 20 models from GPT-4 to GPT-5.4, each doubling of METR's task horizon (the task length an AI finishes half the time) came with about 23 points (correlation 0.97, our fit of METR data to the scores). GPT-6 Astra and Claude Opus 5.5, near 40 hours (METR), score 350 and 351; the fit …

### ai_horizon: AI task horizon
- How long a task, in hours of expert work, the best AI finishes on its own half the time; it has doubled about every four months, and tasks of months or years would put superintelligence close.
- Metric: Length of task the best AI completes alone half the time (METR), in hours (the value in 2100). Today: 40 (2026).
- Marks: 170 (One work-month); 2000 (One work-year); 10k (A work-year done four times in five)
- Published curve points without superintelligence: none.
- Give "noSi" at: 170, 2000, 10k. Give "si" at: 170, 2000, 10k. Exact values to use: noSi [167,2000,10000], si [167,2000,10000].
- Superintelligence note: This is a yardstick on the road to superintelligence, not something it acts on. Near that point it breaks: METR already struggles to find people who beat the models, and its tidy, computer-graded tasks may overstate skill at messy real work.
- Background (from the site's explainer):
  Why it matters here
  
  To escape control, AI would need to work alone for long stretches. In February 2026 the International AI Safety Report found that today's systems cannot yet escape control, though they are getting better at autonomous work, one of the abilities it takes (IASR 2026). METR, an independent testing group, times skilled people on tasks, mostly software, machine learning and cybersecurity, and finds the task length at which an AI agent succeeds half the time: its time horizon (METR).
  
  In numbers
  
  - Today: GPT-6 Astra reaches about 40 hours on METR's harder November 2026 task set, with a 95% range of 13 to 2,645 hours; Claude Opus 5.5 reaches 39 (METR).
  - Doubling time: about 3.6 months on that set, with a range of 2.1 to 4.9 (METR); 129 days, about 4.2 months, on the older set since 2023 (METR data); about seven months over 2019–2025 (Kwa et al.).
  - A work-year of 2,000 hours (AI 2027) is 2,000 ÷ 40 = 50 times today's horizon, or 5.6 doublings: about 20 months at a 3.6-month doubling. Taken naively, the trend passes 200 hours, METR's longest tasks, in July 2027 (METR).
  - Reliability lags: the horizon at 80% success is 4 to 6 times shorter than at 50% (Kwa et al.).
  
  The lines on the card
  
  - **167 hours, one work-month**: METR's own milestone and its measure of a working month (Kwa et al.).
  - **2,000 hours, one work-year**: between the low and middle estimates for …

### living_standard: Living standard
- What the average person on Earth consumes in a year, with today’s rich-world average set to 100. It is the plainest measure of how far the world is from abundance, which this site sets at 500.
- Metric: Household consumption per person, world average (rich world today = 100), in index (the value in 2100). Today: 36 (2024).
- Marks: 36 (World today); 100 (Rich world today); 500 (Abundance)
- Published curve points without superintelligence: P(above 46) = 90% [derived, Christensen, Gillingham and Nordhaus 2018, expert survey: 10th percentile of world growth, 0.60% a year from 2010]; P(above 90) = 75% [derived, Christensen, Gillingham and Nordhaus 2018, expert survey: 25th percentile, 1.36% a year from 2010]; P(above 160) = 50% [derived, Christensen, Gillingham and Nordhaus 2018, expert survey: median, 2.03% a year from 2010]; P(above 330) = 25% [derived, Christensen, Gillingham and Nordhaus 2018, expert survey: 75th percentile, 2.85% a year from 2010]; P(above 570) = 10% [derived, Christensen, Gillingham and Nordhaus 2018, expert survey: 90th percentile, 3.47% a year from 2010].
- Give "noSi" at: 36, 100, 500. Give "si" at: 36, 100, 500. Exact values to use: noSi [36,100,500], si [36,100,500].
- Superintelligence note: Superintelligence could raise output per person far faster than the 2% a year of the past, by automating work and invention. It cannot by itself build the power plants, mines and homes that consumption needs, or decide how the output is shared.
- Background (from the site's explainer):
  Why it matters here
  
  This card measures the distance to abundance, which this site defines as at least nine in ten people living five times better than today's rich-world average. Consumption is what households and charities spend on people, at prices adjusted so a dollar buys the same everywhere (World Bank). It leaves out public services and how evenly it is shared.
  
  In numbers
  
  - **Today.** The world consumed $11,301 per person in 2024, high-income countries $31,532 (World Bank). 11,301 ÷ 31,532 = 0.36: the world stands at 36.
  - **The last 75 years.** From 1950 to 2022, GDP per person grew 5.7 times in Western Europe and 3.8 times in the United States, Canada, Australia and New Zealand (Maddison Project): 2.4% and 1.9% a year. Keynes expected four to eight times in a century (Quote Investigator). Reaching 500 from 36 by 2100 takes 14 times in 76 years, 3.5% a year for the whole world.
  - **Energy.** Five times the rich world's 52,500 kWh per person (Energy Institute), for 10.2 billion people (UN/EXCEL_FILES/2_Population/UN_PPP2024_Output_PopTot.xlsx)), is 2.7 million TWh a year, 16 times today's 20,258 kWh × 8.23 billion. Rich countries used 1.9% less energy a year per dollar consumed from 2000 to 2024 (56,973 kWh for $21,634, then 52,236 for $31,532); kept up to 2100, that brings 500 down to about 60,000 kWh per person.
  - **Materials.** Europe and North America use 20 …

### energy_per_person: Energy use per person
- How much energy each person uses in a year, counting fuel, heat and electricity. Nearly every good and service is made with energy, so it sets a ceiling on living standards.
- Metric: Primary energy use per person, world average, in kWh a year (the value in 2100). Today: 20.3k (2025).
- Marks: 4300 (Decent living for all (final energy)); 52.5k (Rich world today); 75.1k (United States today)
- Published curve points without superintelligence: none.
- Give "noSi" at: 4300, 52.5k, 75.1k. Give "si" at: 4300, 52.5k, 75.1k. Exact values to use: noSi [4250,52512,75051], si [4250,52512,75051].
- Superintelligence note: Cheaper solar, storage and reactors, designed faster, could multiply the energy each person commands. Power plants, grids and mines are still physical build-outs that take years, and burning more fossil fuel would add to warming.
- Background (from the site's explainer):
  Why it matters here
  
  Growing food, pumping water, making steel and running hospitals all take energy, so energy use per person is close to a physical measure of a living standard. Jean-Marc Jancovici argues that machines now do most of the physical work, and that an economy is unlikely to grow faster than its energy supply (Jancovici). Very low use means poverty. Very high use is not needed for decent living.
  
  In numbers
  
  - **Today.** The world used 20,258 kWh per person in 2025, the rich world 52,512, the United States 75,051 and India 7,419 (Energy Institute via OWID). The rich world uses 2.6 times the world average.
  - **Trend.** World use per person rose from 12,470 kWh in 1965 to 20,258 in 2025: 1.6 times in 60 years, 0.8% a year. In the rich world it fell from 56,973 kWh in 2000 to 52,236 in 2024 (OWID), while consumption per person rose 46% (World Bank). These figures cannot tell how much of that is efficiency and how much is industry moved abroad.
  - **Muscle against machines.** A human body can deliver at most about 150 kWh of mechanical work a year, and Jancovici puts the work done by machines at about 200 times our muscles on average (Jancovici).
  - **A floor.** Decent housing, food, health, mobility and communication for everyone could take 13 to 18.4 GJ of final energy per person a year, 15.3 GJ on average (Millward-Hopkins et al.). 15.3 × 1,000 ÷ 3.6 = 4,250 kWh. …

### healthy_life_years: Healthy life expectancy
- How many years a newborn can expect to live in full health. It counts illness and disability, not just death, so it shows whether longer lives are also healthy ones.
- Metric: Healthy life expectancy at birth, world (WHO), in years (the value in 2100). Today: 62.8 (2023).
- Marks: 57.9 (World in 2000); 67.5 (Rich world today); 72.9 (Singapore today, the highest)
- Published curve points without superintelligence: none.
- Give "noSi" at: 57.9, 67.5, 72.9. Give "si" at: 57.9, 67.5, 72.9. Exact values to use: noSi [57.9,67.5,72.9], si [57.9,67.5,72.9].
- Superintelligence note: Faster drug discovery and cheaper diagnosis could cut the years lived with disease, and slowing aging would lift this most. New treatments still need trials, approval and health workers to reach people.
- Background (from the site's explainer):
  Why it matters here
  
  Living longer is not the same as living well. Healthy life expectancy (HALE) is the number of years a newborn can expect to live in full health, given this year's rates of death and disease at each age (WHO). A year with a serious illness counts as only part of a year. Health is one of the five essentials, and this card shows how much of a life it actually covers.
  
  In numbers
  
  - **Today.** The world's HALE was 62.8 years in 2023 (WHO), against a life expectancy of 73.3 (WHO). 73.3 − 62.8 = 10.5 years lived in poor health.
  - **Rich and poor.** High-income countries reach 67.5 healthy years, low-income countries 55.4 (WHO). Singapore is highest at 72.9 and the Central African Republic lowest at 44.7: a 28-year gap (WHO).
  - **Longer lives, more sick years.** High-income countries have a life expectancy of 79.8 (WHO) but 67.5 healthy years: 12.3 years in poor health, more than the world's 10.5. Where lives are longer, more of the added years are spent in poor health.
  - **Trend.** HALE rose from 57.9 in 2000 to 63.2 in 2019 (WHO), about 0.28 years a year. COVID-19 pulled it to 61.4 in 2021; by 2023 it was back to 62.8.
  
  The lines on the card
  
  - **57.9 years:** the world in 2000.
  - **67.5 years:** the rich world today.
  - **72.9 years:** Singapore today, the highest.
  
  Where the 2100 odds come from
  
  We found no projection of HALE to 2100. The Institute for Health …

### floor_area: Home space per person
- How much home floor space each person has. Room to sleep, cook and study is part of decent living, and every square metre has to be built, heated or cooled.
- Metric: Home floor area per person, world estimate (national statistics where measured), in m² per person (the value in 2100). Today: 25 (2024).
- Marks: 15 (Decent-living minimum); 42 (China, 2020); 50 (Germany, 2025)
- Published curve points without superintelligence: none.
- Give "noSi" at: 15, 42, 50. Give "si" at: 15, 42, 50. Exact values to use: noSi [15,41.7,49.5], si [15,41.7,49.5].
- Superintelligence note: Cheaper design, materials and building robots could make homes far less costly. Land in cities, planning rules and the cement, steel and energy each square metre needs do not change with intelligence.
- Background (from the site's explainer):
  Why it matters here
  
  Room to sleep, cook and study is part of decent living: a study of the minimum needed for a decent life for everyone allows 15 m² per person (Millward-Hopkins et al.). Space is also a large, slow-moving demand on energy and materials: every square metre is built once and then heated, cooled and lit for decades.
  
  In numbers
  
  - **The world.** Buildings covered 273 billion m² of floor in 2024, and one of the report's authors says more than three quarters of it is housing (UNEP and GlobalABC via Anadolu). 273 × 0.75 ÷ 8.16 billion people (UN/EXCEL_FILES/2_Population/UN_PPP2024_Output_PopTot.xlsx)) = at least 25 m² per person.
  - **Countries that measure it.** Germany had 49.5 m² per person in 2025, up 3.3 m² since 2015 (Destatis). China's statistics office reported 41.7 m² in 2020, up from 31.1 in 2010 (Yicai). In government data from thirteen countries, the range ran from 8.7 m² in India (2008) to 84 m² for new homes in Australia (2009) (Ellsworth-Krebs).
  - **Growth.** Floor area grew 1.7% in 2024 (Anadolu), about twice as fast as population, which went from 8.16 to 8.23 billion between 2024 and 2025, 0.9% (UN/EXCEL_FILES/2_Population/UN_PPP2024_Output_PopTot.xlsx)). Bigger homes for smaller households are one reason (Ellsworth-Krebs).
  - **Caution.** Countries measure differently: some count external walls, some only usable space, some include garages …

### free_time: Hours worked
- How many hours a year the average worker spends at work. Rich countries have used part of their gains to work less, so this measures the time a living standard costs.
- Metric: Hours actually worked a year per employed person, world average, in hours a year (the value in 2100). Today: 2,128 (2025).
- Marks: 780 (Keynes’s 15-hour week); 1,542 (Germany today); 1,806 (Rich world today)
- Published curve points without superintelligence: none.
- Give "noSi" at: 780, 1,542, 1,806. Give "si" at: 780, 1,542, 1,806. Exact values to use: noSi [780,1542,1806], si [780,1542,1806].
- Superintelligence note: Automation could cut the work a given living standard needs to a fraction. Whether that becomes free time or unemployment depends on who owns the machines and how the gains are shared, which is politics.
- Background (from the site's explainer):
  Why it matters here
  
  A living standard costs time. As rich countries grew richer, their workers also worked far fewer hours (Our World in Data), and abundance would mean being able to choose free time. This card is the time side of the living standard.
  
  In numbers
  
  - **Today.** People in work worked 40.9 hours a week on average in 2025 (ILO). Over 52 weeks, 40.9 × 52 = about 2,130 hours a year.
  - **Rich and poor.** High-income countries work 34.7 hours a week (1,806 a year), lower-middle-income countries 43.9 (2,284). Germany is at 29.7 hours a week, India at 45.7 (ILO).
  - **150 years.** A full-time factory worker put in about 3,100 hours a year in the United States in 1870 and 3,300 in Germany; by 2023 the average worker put in 1,789 and 1,335 (Our World in Data). In Germany that is 59% less.
  - **Recent pace.** The world average fell from 42.6 hours a week in 2005 to 40.9 in 2025 (ILO): 1.7 hours a week less in 20 years, or 1.7 × 52 = about 90 hours a year.
  - **Two sources, two numbers.** The ILO estimates and the series since 1950, drawn mainly from national accounts (Our World in Data), measure differently. For Germany the first gives 29.7 × 52 = 1,542 hours a year and the second 1,335, so compare like with like.
  
  The lines on the card
  
  - **780 hours:** the 15-hour week Keynes imagined in 1930 for his grandchildren, 15 × 52 (Quote Investigator).
  - **1,542 hours:** Germany …

### essentials_cost_world: Cost of the essentials
- What food, household energy, water, health care and security cost the world, as a share of its income. This site counts the essentials as nearly free once they cost under 10%.
- Metric: Food, household energy, water, health and security, public and private, share of world GDP, in % of world GDP (the value in 2100). Today: 26 (2025).
- Marks: 10 (Essentials nearly free); 20 (A fifth of world output); 50 (Half of world output)
- Published curve points without superintelligence: none.
- Give "noSi" at: 10, 20, 50. Give "si" at: 10, 20, 50. Exact values to use: noSi [10,20,50], si [10,20,50].
- Superintelligence note: This is where superintelligence is meant to matter most: cheaper energy, food and care would shrink the share. Health spending tends to rise with income, an arms race would raise security costs, and land and water stay finite.
- Background (from the site's explainer):
  Why it matters here
  
  This is the abundance test in money. If superintelligence or anything else made the five essentials nearly free, their cost would shrink to a small slice of income; this site draws that line at 10%, our judgment. We found no agency that publishes the total, so we add up the parts, public and private, starting from the World Bank's price comparison of 2021 (ICP 2021).
  
  In numbers
  
  How the 26% is built, as shares of world GDP:
  
  - **Food: 8.6%**, household spending on food and soft drinks in 2021 (ICP).
  - **Health: 10.1%**, all health spending in 2023 (WHO). **Military: 2.5%** in 2025 (SIPRI).
  - **Police, courts, prisons and fire: 1.7%**, the EU figure for 2024 (Eurostat), used for the world: our judgment. **Home and car energy: 2.5%**, the US figure for 2025, $767 billion of $30,861 billion (BEA via FRED), used for the world: our judgment. **Water: 0.5%**, what developing countries spend (World Bank).
  - **Total.** 8.6 + 10.1 + 2.5 + 1.7 + 2.5 + 0.5 = 25.9, about 26%. Counting health as the price survey does (8.9%) gives 25%. Adding restaurant meals (3.4%) and the energy businesses buy (all energy spending is nearly 10% of world GDP, IEA via SolarQuarter) gives 26 + 3.4 + 7.5 = 37%.
  - **The parts move apart.** Food takes 34.7% of GDP in low-income countries and 5.9% in rich ones (ICP); health takes 12.5% in rich countries against 10.1% worldwide (WHO).
  
  The …

### electricity_access_world: Access to electricity
- The share of humanity with electricity at home. Power pumps water, keeps vaccines and food cold, and lights clinics and schools, so it underpins the other essentials.
- Metric: People with access to electricity, in % of humanity (the value in 2100). Today: 91.9 (2024).
- Marks: 83.5 (2010); 90 (Nine in ten); 100 (Rich world today)
- Published curve points without superintelligence: none.
- Give "noSi" at: 83.5, 90, 100. Give "si" at: 83.5, 90, 100. Exact values to use: noSi [83.5,90,99.97], si [83.5,90,99.97].
- Superintelligence note: Cheaper solar, batteries and mini-grids, and better planning, could close the gap faster. The people without power live mostly in poor, rural and conflict-hit places, where money, governance and security are the bottleneck.
- Background (from the site's explainer):
  Why it matters here
  
  Electricity is the energy essential, and the others lean on it: it pumps and treats water, keeps vaccines and food cold, and lights clinics and classrooms. The measure is yes or no, mostly from household surveys, so it says nothing about whether the power is enough, stays on or is affordable (SDG metadata).
  
  In numbers
  
  - **Today.** 91.9% of humanity had electricity in 2024, up from 78.2% in 2000 and 83.5% in 2010 (World Bank). That leaves 655 million people without it (Tracking SDG7 2026).
  - **Where.** About 89% of them live in Africa. Africa's access rate rose from 45% to 62% since 2010, yet the number without power barely fell, from 591 to 581 million, because population grew. In sub-Saharan Africa 83% of town dwellers have power, but only 33% of rural people (Tracking SDG7 2026).
  - **Pace.** From 83.5% to 91.9% in 14 years is 0.6 points a year. On current trends about 644 million people will still lack power in 2030. Closing the gap would mean connecting about 177 million people a year, for about USD 30 billion a year (Tracking SDG7 2026).
  - **The rich world** is at 99.97% (World Bank).
  
  The lines on the card
  
  - **83.5%:** the world in 2010.
  - **90%:** nine in ten people.
  - **99.97%:** the rich world today, in effect everyone.
  
  Where the 2100 odds come from
  
  The projections we found stop at 2030 (Tracking SDG7 2026). We found no published odds for …

### water_access_world: Safe drinking water
- The share of humanity with safe drinking water at home: on the premises, available when needed and free from contamination. Unsafe water spreads disease and costs hours of carrying.
- Metric: People using safely managed drinking water, in % of humanity (the value in 2100). Today: 73.7 (2024).
- Marks: 61.3 (2000); 90 (Nine in ten); 95.8 (Rich world today)
- Published curve points without superintelligence: none.
- Give "noSi" at: 61.3, 90, 95.8. Give "si" at: 61.3, 90, 95.8. Exact values to use: noSi [61.3,90,95.8], si [61.3,90,95.8].
- Superintelligence note: Cheaper energy makes desalination and treatment affordable, and better sensors can find leaks and contamination. Pipes, treatment plants and the utilities that maintain them still have to be built and paid for.
- Background (from the site's explainer):
  Why it matters here
  
  Fresh water is one of the five essentials. Unsafe water spreads disease, and water fetched from far away costs hours of work every day. "Safely managed" is a strict standard: the water must come from a source on the premises, be available when needed and be free from contamination (WHO). A clean public tap down the street does not count.
  
  In numbers
  
  - **Today.** 73.7% of humanity used safely managed water in 2024, up from 61.3% in 2000 and 67.7% in 2015 (World Bank/JMP). That leaves 2.1 billion people without it, and 106 million drink untreated water straight from rivers, lakes or ponds (WHO).
  - **Pace.** From 67.7% to 73.7% in 9 years is 0.67 points a year, though 1.7 of those points came in 2024 alone (World Bank/JMP). At that pace the world reaches 90% in (90 − 73.7) ÷ 0.67 = 24 years, around 2048, and 99% around 2062. WHO judges that safe water for everyone by 2030 is slipping away (WHO).
  - **Town and country.** In rural areas coverage rose from 50% to 60% since 2015, while in cities it has stagnated (WHO).
  - **The rich world** is at 95.8% (World Bank/JMP). Even there, water that is contaminated does not count as safe (WHO).
  
  The lines on the card
  
  - **61.3%:** the world in 2000.
  - **90%:** nine in ten people.
  - **95.8%:** the rich world today.
  
  Where the 2100 odds come from
  
  We found no projection of safe water access to 2100. The curve is judged. …

### undernourishment_world: Hunger
- The share of humanity that habitually eats too few calories for a normal, active life. It is the most direct measure of hunger.
- Metric: Prevalence of undernourishment (FAO): people habitually short of calories, in % of humanity (the value in 2100). Today: 7.8 (2025).
- Marks: 2.5 (Hunger ended (FAO’s floor)); 13 (2001); 20 (Africa today)
- Published curve points without superintelligence: none.
- Give "noSi" at: 2.5, 13, 20. Give "si" at: 2.5, 13, 20. Exact values to use: noSi [2.5,13,20], si [2.5,13,20].
- Superintelligence note: Better crops, forecasts and logistics could raise yields and cut waste. FAO names conflict, weather extremes and aid cuts as the threats to progress, and intelligence does not end those by itself.
- Background (from the site's explainer):
  Why it matters here
  
  Food is one of the five essentials, and hunger is where its failure shows first. Famine, war and price shocks all register here. FAO models the measure from the average calories people consume in a country and how unevenly they are spread, rather than counting hungry people one by one (SDG metadata), so it counts calories, not vitamins or diet quality.
  
  In numbers
  
  - **Today.** 7.8% of humanity, about 645 million people, faced hunger in 2025, down from 8.1% in 2024 and 8.6% in 2022: the third fall in a row (FAO).
  - **Where.** Africa, at 20.0%, now has more hungry people than Asia: about 309 million against 292 million (FAO).
  - **Pace.** The share was 13.0% in 2001 (World Bank/FAO). From 13.0% to 7.8% in 24 years is 0.22 points a year. FAO expects 510 to 520 million hungry people in 2030 (FAO).
  - **The floor.** FAO's margin of error would likely exceed 2.5 points, so it does not publish national values below 2.5% (SDG metadata). The rich world shows 2.55%, at that floor (World Bank/FAO): 2.5% is, in practice, hunger ended.
  
  The lines on the card
  
  - **2.5%:** hunger ended, as far as FAO can measure.
  - **13%:** the world in 2001.
  - **20%:** Africa today.
  
  Where the 2100 odds come from
  
  FAO's latest projection stops at 2030. Its 2018 scenarios for 2050 range from 3.5% on a path towards sustainability to 12.4% in a world of divided societies, with 7.6% for …

### life_expectancy_world: Life expectancy
- How long a newborn would live if today’s death rates at each age held for its whole life. It sums up health, food, water and safety in one number.
- Metric: Life expectancy at birth, world, in years (the value in 2100). Today: 73.5 (2024).
- Marks: 65.1 (World in 1990); 80.4 (Rich world today); 85.4 (Hong Kong today)
- Published curve points without superintelligence: P(above 79) = 98% [published, UN World Population Prospects 2024, probabilistic projections: lower end of the 95% interval for 2100]; P(above 80.1) = 90% [published, UN World Population Prospects 2024, probabilistic projections: lower end of the 80% interval for 2100]; P(above 81.7) = 50% [published, UN World Population Prospects 2024, probabilistic projections: median for 2100]; P(above 83.1) = 10% [published, UN World Population Prospects 2024, probabilistic projections: upper end of the 80% interval for 2100]; P(above 83.9) = 2.5% [published, UN World Population Prospects 2024, probabilistic projections: upper end of the 95% interval for 2100].
- Give "noSi" at: 65.1, 80.4, 85.4. Give "si" at: 65.1, 80.4, 85.4. Exact values to use: noSi [65.1,80.4,85.4], si [65.1,80.4,85.4].
- Superintelligence note: Faster discovery of drugs and vaccines could add years, and slowing aging would add many more. Trials, regulation and health workers set the pace, and the same tools could help design pathogens.
- Background (from the site's explainer):
  Why it matters here
  
  Hunger, unsafe water, missing clinics and violence all end up as early deaths, so life expectancy is the broadest single test of whether the essentials work. It describes this year's death rates, not any real person's lifespan.
  
  In numbers
  
  - **Today.** The world reached 73.5 years in 2024, up from 65.1 in 1990 (World Bank). The UN, with its own estimate of 73.3, counts 8.4 years gained since 1995 (UN).
  - **Shocks.** COVID-19 pulled the world from 72.9 in 2019 to 71.2 in 2021; by 2024 it was above its old level (World Bank). A one-year shock shows at once, even when most lifespans barely change.
  - **Rich and best.** The rich world is at 80.4 (World Bank). Hong Kong, at 85.4, is the highest of any large population; only tiny Monaco and San Marino are higher, at 86.5 and 85.8 (World Bank).
  - **Pace.** From 65.1 to 73.5 in 34 years is 0.25 years a year. The UN expects 77.4 by 2054 (UN), and IHME 78.1 by 2050 (ScienceDaily).
  
  The lines on the card
  
  - **65.1 years:** the world in 1990.
  - **80.4 years:** the rich world today.
  - **85.4 years:** Hong Kong today, the highest large population.
  
  Where the 2100 odds come from
  
  The UN's probabilistic projections give the world 81.7 years in 2100, with an 80% range of 80.1 to 83.1 and a 95% range of 79.0 to 83.9 (UN WPP 2024/EXCEL_FILES/4_Mortality/UN_PPP2024_Output_e0.xlsx)). Those five numbers are the published …

### population: World population
- How many people live on Earth. It sets how many must be fed, housed and powered, and it divides every total into a share per person.
- Metric: People alive on 1 July, in billion people (the value in 2100). Today: 8.23 (2025).
- Marks: 4.1 (Half of today); 6.16 (2000); 8.8 (IHME projection for 2100); 10.3 (UN peak, mid-2080s)
- Published curve points without superintelligence: P(above 9.05) = 98% [published, UN World Population Prospects 2024, probabilistic projections: lower end of the 95% interval for 2100]; P(above 9.41) = 90% [published, UN World Population Prospects 2024, probabilistic projections: lower end of the 80% interval for 2100]; P(above 10.18) = 50% [published, UN World Population Prospects 2024, probabilistic projections: median for 2100]; P(above 11.03) = 10% [published, UN World Population Prospects 2024, probabilistic projections: upper end of the 80% interval for 2100]; P(above 11.44) = 2.5% [published, UN World Population Prospects 2024, probabilistic projections: upper end of the 95% interval for 2100].
- Give "noSi" at: 4.1, 6.16, 8.8, 10.3. Give "si" at: 4.1, 6.16, 8.8, 10.3. Exact values to use: noSi [4.1,6.16,8.8,10.3], si [4.1,6.16,8.8,10.3].
- Superintelligence note: Superintelligence barely changes the number of people already born, and births per woman have fallen by a third since 1990. Slowing aging could raise numbers late in the century; an AI catastrophe could cut them.
- Background (from the site's explainer):
  Why it matters here
  
  Population is the denominator of this site. Every essential has to be provided per person, so more people means more food, homes and energy to share, and fewer means fewer workers. On its own it is neither doom nor abundance. A sharp fall would be the clearest sign of catastrophe.
  
  In numbers
  
  - **Today.** 8.23 billion people in 2025, up 70 million, or 0.9%, from 8.16 billion in 2024 (UN WPP 2024/EXCEL_FILES/2_Population/UN_PPP2024_Output_PopTot.xlsx)). The World Bank has 8.22 billion (World Bank).
  - **The peak.** The UN expects growth for another 50 to 60 years, to a peak of about 10.3 billion in the mid-2080s, then 10.2 billion by 2100. It puts the chance that the peak comes this century at 80%, against about 30% in its 2013 projections (UN).
  - **Lower than expected.** The 2100 figure is about 700 million below the UN's projection of a decade ago, partly because fertility fell faster than expected, in China above all (UN).
  
  The lines on the card
  
  - **4.1 billion:** half of today, a catastrophe without precedent.
  - **6.16 billion:** the world in 2000 (World Bank).
  - **8.8 billion:** the 2100 projection of the Institute for Health Metrics and Evaluation (IHME) (ScienceDaily).
  - **10.3 billion:** the UN's expected peak.
  
  Where the 2100 odds come from
  
  The UN's probabilistic projections are the published points: a median of 10.18 billion in 2100, an 80% …

### aging_world: Older people per worker
- People aged 65 and over for every 100 people aged 15 to 64. A higher ratio means fewer people of working age to fund pensions and health care and to care for the old.
- Metric: People aged 65 and over per 100 people aged 15 to 64, world, in per 100 of working age (the value in 2100). Today: 16 (2025).
- Marks: 25.8 (UN median for 2050); 31 (Rich world today); 51 (Japan today)
- Published curve points without superintelligence: P(above 35.3) = 98% [published, UN World Population Prospects 2024, probabilistic projections: lower end of the 95% interval for 2100]; P(above 36.8) = 90% [published, UN World Population Prospects 2024, probabilistic projections: lower end of the 80% interval for 2100]; P(above 40.2) = 50% [published, UN World Population Prospects 2024, probabilistic projections: median for 2100]; P(above 43.7) = 10% [published, UN World Population Prospects 2024, probabilistic projections: upper end of the 80% interval for 2100]; P(above 45.5) = 2.5% [published, UN World Population Prospects 2024, probabilistic projections: upper end of the 95% interval for 2100].
- Give "noSi" at: 25.8, 31, 51. Give "si" at: 25.8, 31, 51. Exact values to use: noSi [25.8,31,51], si [25.8,31,51].
- Superintelligence note: Everyone who will be 65 or over in 2100 is born by 2035, so the number of older people is largely set already. Superintelligence could change what it means: if machines do much of the work and care, fewer workers per older person matters less.
- Background (from the site's explainer):
  Why it matters here
  
  Pensions, health care and long-term care are paid for and given mostly by people of working age. As the ratio rises, taxes go up, benefits go down, people work longer or output per worker must rise. None of that is doom, but it narrows the margin for other shocks. The ratio is a head count: it says nothing about who actually works or how healthy older people are.
  
  In numbers
  
  - **Today.** The world had 16.0 people aged 65 or over per 100 of working age in 2025, up from 10.0 in 1990 (World Bank). That is 100 ÷ 16 = about six people of working age per older person.
  - **Ahead of the world.** The rich world is at 31.0 (World Bank) and Japan at 51.0, two people of working age per older person (World Bank). Japan shows that a rich country can run at that level.
  - **The UN path.** The UN's median rises to 25.8 in 2050 and 40.2 in 2100 (UN WPP 2024/EXCEL_FILES/2_Population/UN_PPP2024_Output_Annual_OldAgeDepRatio.xlsx)): 100 ÷ 40.2 = 2.5 people of working age per older person, between the rich world today (3.2) and Japan (2.0). By 2080, people aged 65 or over will outnumber children under 18 (UN).
  
  The lines on the card
  
  - **25.8:** the UN's median for 2050.
  - **31.0:** the rich world today.
  - **51.0:** Japan today.
  
  Where the 2100 odds come from
  
  The UN's probabilistic projections are the published points: a median of 40.2 in 2100, an 80% range of 36.8 to 43.7 and …

Answer only with JSON: {"curves": [{"card": "<id>", "noSi": [{"value": <number>, "above": <probability>}, ...], "si": [...]}, ... one object per card above, in the same order]}.

## Output JSON schema

{
 "type": "object",
 "additionalProperties": false,
 "required": [
  "curves"
 ],
 "properties": {
  "curves": {
   "type": "array",
   "items": {
    "type": "object",
    "additionalProperties": false,
    "required": [
     "card",
     "noSi",
     "si"
    ],
    "properties": {
     "card": {
      "type": "string"
     },
     "noSi": {
      "type": "array",
      "items": {
       "type": "object",
       "additionalProperties": false,
       "required": [
        "value",
        "above"
       ],
       "properties": {
        "value": {
         "type": "number"
        },
        "above": {
         "type": "number"
        }
       }
      }
     },
     "si": {
      "type": "array",
      "items": {
       "type": "object",
       "additionalProperties": false,
       "required": [
        "value",
        "above"
       ],
       "properties": {
        "value": {
         "type": "number"
        },
        "above": {
         "type": "number"
        }
       }
      }
     }
    }
   }
  }
 }
}
