<!-- prompt version 2026-11-23.1 -->
You are one of several independent judges for a public forecasting dashboard. Give your own calibrated probabilities. Do not anchor on any number you believe the site's author wants. Do not use tools; reason from the evidence below and your own knowledge.

## Definitions (fixed)
- Horizon: every event is judged by the end of 2100.
- The five essentials are energy (reliable electricity and clean cooking), fresh water (safe drinking water and sanitation), food (enough nutritious food), health (care that keeps life expectancy at or above 75 years), and security (physical safety from war, violence and persecution).
- Abundance: A country reaches abundance if, in 2100, at least 90% of its residents have reliable, affordable access to all five essentials, and it has not collapsed along the way. For the world, abundance means at least 90% of humanity has them.
- Collapse: A country collapses if, at any point before 2100, a majority of its residents lose reliable access to at least one of the five essentials for five years or more. Losing a single essential is enough. Global doom counts as collapse for every country.
- Doom: Global doom means human extinction, or an irreversible civilization-wide collapse before 2100: most of humanity loses the five essentials, and global civilization is not expected to regain its 2025 capabilities within a century.
- Muddling through is everything else: no collapse, but not abundance either.
- Superintelligence (SI) means AI systems that outperform the best humans at virtually every cognitive task, including science, engineering and strategy, and that are deployed widely enough to act in the economy. “If superintelligence arrives” assumes this happens before 2100; “if it never does” assumes it does not.

## What to estimate
For the world:
- siBy2050, siBy2100: probability that superintelligence, as defined, is deployed by those dates.
- For each scenario ("si": superintelligence arrives before 2100; "noSi": it does not):
  - doom: probability of global doom by 2100.
  - abundance: probability of global abundance in 2100.
  - pathways: probability of doom through each route. Attribute each doom world to its main cause, so the pathway values should sum to roughly the doom total.
    - ai: Doom caused mainly by AI systems escaping human control or being used to disempower humanity.
    - nuclear: Doom caused mainly by nuclear war, including its effects on climate and harvests.
    - pandemic: Doom caused mainly by a natural or engineered pandemic.
    - climate: Doom caused mainly by climate change and Earth-system breakdown (ocean, ice, biosphere, food systems).
    - resources: Doom caused mainly by the failure of energy, materials, water or infrastructure systems.
    - other: Every other route, including causes nobody has thought of.
- rationale: 2–4 sentences on what drives your numbers.

For each country, for each scenario:
- collapse: probability the country collapses before 2100 (including through global doom).
- abundance: probability the country reaches abundance in 2100.
- pillarLoss: for each essential, the probability that losing it alone would trigger collapse before 2100. Collapse must be at least the largest pillarLoss and at most their sum.
- rationale: 2–3 sentences naming the factors that matter most.

## Consistency rules (your answer is rejected if it breaks them)
- Every value is a probability between 0 and 1.
- abundance + collapse ≤ 1 for every country and scenario; abundance + doom ≤ 1 for the world.
- siBy2050 ≤ siBy2100.
- A country's collapse is at least the world's doom in the same scenario.

## Evidence: global indicators (World)
- Global warming: 1.43 °C above 1850–1900, 2025, WMO State of the Global Climate 2025 (±0.13 °C; Copernicus ERA5 gives 1.47 °C; 2024 was 1.55 °C)
- Atmospheric CO₂: 427.4 ppm, 2025, NOAA GML, Mauna Loa
- Ocean acidification: 2.85 Ωarag (aragonite saturation), 2024, Planetary Health Check 2026 (just past the 2.86 boundary)
- Wildlife populations lost: 73 % average decline since 1970, 2026, WWF/ZSL Living Planet Report 2026 (decline 1970–2022)
- Permafrost at record warmth: 63 % of monitored Arctic sites at a record high, 2025, BAMS State of the Climate in 2025 (15 of 24 sites at a record high)
- Arctic summer sea ice: 4.60 million km², September minimum, 2026, NSIDC via NASA (same as 2025)
- Critical-mineral refining concentration: 72 % average share of the top refiner, 2025, IEA Global Critical Minerals Outlook 2026, via Anadolu Agency (excludes rare earths; IEA pages block automated reading, so confirmed via a news report)
- Copper supply gap in 2035: 25 % of 2035 demand not covered by planned mines, 2035, IEA Global Critical Minerals Outlook 2026, via Anadolu Agency (projection; 30% in the 2025 edition)
- Nuclear warheads: 12,187 warheads, 2026, SIPRI Yearbook 2026 (4,012 deployed)
- State-based armed conflicts: 65 active conflicts, 2025, UCDP, Uppsala University (record since 1946)
- Forcibly displaced people: 117.8 million people, 2025, UNHCR Global Trends 2026, via AFP (down 5.4 million from the end-2024 record)
- Antimicrobial resistance deaths: 1.14 million deaths per year, 2021, GRAM study, The Lancet 2024 (39 million projected for 2025–2050)
- Solar module price: 0.114 US$ per watt, 2026, InfoLink module spot price (TOPCon modules, mid-November 2026)
- Battery pack price: 108 US$ per kWh, 2025, BloombergNEF battery price survey ($115 in 2024)
- Clean share of energy investment: 65 % of energy investment, 2026, IEA World Energy Investment 2026, via Down To Earth ($2.2 trillion clean vs $1.2 trillion fossil, IEA estimate)
- AI task horizon: 17.4 hours of human work, 2026, METR time horizons (METR flags values above 16 h as unreliable)
- Access to electricity: 91.9 % of people, 2024, World Bank (SDG 7.1.1)
- Safely managed drinking water: 73.7 % of people, 2024, WHO/UNICEF JMP via World Bank
- Undernourishment: 7.8 % of people, 2025, FAO SOFI 2026 (645 million people)
- Life expectancy: 73.5 years at birth, 2024, World Bank
- Planetary boundaries crossed: 7 of 9, 2026, Planetary Health Check 2026
- Sea-level rise: 4.75 mm per year, 2025, WMO State of the Global Climate 2025 (2.65 mm/yr in 1993–2011)
- Atlantic overturning circulation: 17.1 Sverdrups, mean at 26°N, 2024, RAPID-MOCHA (trend −0.9 ± 0.7 Sv per decade)

## Evidence: country indicators
### France (FRA)
- Access to electricity: 100.0 % of people, 2024, World Bank (SDG 7.1.1)
- Safely managed drinking water: 99.7 % of people, 2024, WHO/UNICEF JMP via World Bank
- Undernourishment: 2.5 % of people, 2024, FAO via World Bank (below 2.5%; FAO does not report lower values)
- Life expectancy: 83.0 years at birth, 2024, World Bank
- Peace and safety: 2.083 Global Peace Index score (1 = most peaceful), 2026, Global Peace Index 2026
- Climate vulnerability: 0.321 ND-GAIN vulnerability (0–1), 2024, ND-GAIN 2026 release
- Water stress: 1.92 Aqueduct baseline water stress (0–5), 2023, WRI Aqueduct 4.0 (Low - Medium (10-20%))
- State fragility: 28.3 Fragile States Index (0–120), 2024, Fragile States Index 2024 (latest edition; read from the official dashboard)
- Refugee and displacement pressure: 2.5 FSI “Refugees and IDPs” (0–10), 2024, Fragile States Index 2024 (latest edition; read from the official dashboard)
- Group grievance: 6.5 FSI “Group Grievance” (0–10), 2024, Fragile States Index 2024 (latest edition; read from the official dashboard)
- Aging: 36.8 people 65+ per 100 working-age, 2025, UN WPP via World Bank
- Fertility imbalance: 1.61 births per woman, 2024, World Bank
- Wealth: 63,975 GDP per capita, PPP, international $, 2025, World Bank (ICP)
- Readiness to adapt: 0.639 ND-GAIN readiness (0–1), 2024, ND-GAIN 2026 release
- Immigrant population: 13.8 % of population born abroad, 2024, UN DESA via World Bank
- Moderate or severe food insecurity: 9.4 % of people, 2024, FAO via World Bank

### United States (USA)
- Access to electricity: 100.0 % of people, 2024, World Bank (SDG 7.1.1)
- Safely managed drinking water: 97.6 % of people, 2024, WHO/UNICEF JMP via World Bank
- Undernourishment: 2.5 % of people, 2024, FAO via World Bank (below 2.5%; FAO does not report lower values)
- Life expectancy: 78.9 years at birth, 2024, World Bank
- Peace and safety: 2.535 Global Peace Index score (1 = most peaceful), 2026, Global Peace Index 2026
- Climate vulnerability: 0.317 ND-GAIN vulnerability (0–1), 2024, ND-GAIN 2026 release
- Water stress: 2.60 Aqueduct baseline water stress (0–5), 2023, WRI Aqueduct 4.0 (Medium - High (20-40%))
- State fragility: 44.5 Fragile States Index (0–120), 2024, Fragile States Index 2024 (latest edition; read from the official dashboard)
- Refugee and displacement pressure: 2.4 FSI “Refugees and IDPs” (0–10), 2024, Fragile States Index 2024 (latest edition; read from the official dashboard)
- Group grievance: 6.2 FSI “Group Grievance” (0–10), 2024, Fragile States Index 2024 (latest edition; read from the official dashboard)
- Aging: 28.5 people 65+ per 100 working-age, 2025, UN WPP via World Bank
- Fertility imbalance: 1.63 births per woman, 2024, World Bank
- Wealth: 90,027 GDP per capita, PPP, international $, 2025, World Bank (ICP)
- Readiness to adapt: 0.632 ND-GAIN readiness (0–1), 2024, ND-GAIN 2026 release
- Immigrant population: 15.2 % of population born abroad, 2024, UN DESA via World Bank
- Moderate or severe food insecurity: 10.7 % of people, 2024, FAO via World Bank

### China (CHN)
- Access to electricity: 100.0 % of people, 2024, World Bank (SDG 7.1.1)
- Undernourishment: 2.5 % of people, 2024, FAO via World Bank (below 2.5%; FAO does not report lower values)
- Life expectancy: 78.0 years at birth, 2024, World Bank
- Peace and safety: 2.231 Global Peace Index score (1 = most peaceful), 2026, Global Peace Index 2026
- Climate vulnerability: 0.394 ND-GAIN vulnerability (0–1), 2024, ND-GAIN 2026 release
- Water stress: 2.80 Aqueduct baseline water stress (0–5), 2023, WRI Aqueduct 4.0 (Medium - High (20-40%))
- State fragility: 64.4 Fragile States Index (0–120), 2024, Fragile States Index 2024 (latest edition; read from the official dashboard)
- Refugee and displacement pressure: 2.8 FSI “Refugees and IDPs” (0–10), 2024, Fragile States Index 2024 (latest edition; read from the official dashboard)
- Group grievance: 6.2 FSI “Group Grievance” (0–10), 2024, Fragile States Index 2024 (latest edition; read from the official dashboard)
- Aging: 21.4 people 65+ per 100 working-age, 2025, UN WPP via World Bank
- Fertility imbalance: 1.01 births per woman, 2024, World Bank
- Wealth: 29,333 GDP per capita, PPP, international $, 2025, World Bank (ICP)
- Readiness to adapt: 0.455 ND-GAIN readiness (0–1), 2024, ND-GAIN 2026 release
- Immigrant population: 0.1 % of population born abroad, 2024, UN DESA via World Bank

### India (IND)
- Access to electricity: 99.9 % of people, 2024, World Bank (SDG 7.1.1)
- Safely managed drinking water: 76.4 % of people, 2024, WHO/UNICEF JMP via World Bank
- Undernourishment: 9.8 % of people, 2024, FAO via World Bank
- Life expectancy: 72.2 years at birth, 2024, World Bank
- Peace and safety: 2.409 Global Peace Index score (1 = most peaceful), 2026, Global Peace Index 2026
- Climate vulnerability: 0.475 ND-GAIN vulnerability (0–1), 2024, ND-GAIN 2026 release
- Water stress: 4.11 Aqueduct baseline water stress (0–5), 2023, WRI Aqueduct 4.0 (Extremely High (>80%))
- State fragility: 72.3 Fragile States Index (0–120), 2024, Fragile States Index 2024 (latest edition; read from the official dashboard)
- Refugee and displacement pressure: 3.8 FSI “Refugees and IDPs” (0–10), 2024, Fragile States Index 2024 (latest edition; read from the official dashboard)
- Group grievance: 8.2 FSI “Group Grievance” (0–10), 2024, Fragile States Index 2024 (latest edition; read from the official dashboard)
- Aging: 10.8 people 65+ per 100 working-age, 2025, UN WPP via World Bank
- Fertility imbalance: 1.96 births per woman, 2024, World Bank
- Wealth: 11,748 GDP per capita, PPP, international $, 2025, World Bank (ICP)
- Readiness to adapt: 0.362 ND-GAIN readiness (0–1), 2024, ND-GAIN 2026 release
- Immigrant population: 0.3 % of population born abroad, 2024, UN DESA via World Bank

### Nigeria (NGA)
- Access to electricity: 62.5 % of people, 2024, World Bank (SDG 7.1.1)
- Safely managed drinking water: 29.9 % of people, 2024, WHO/UNICEF JMP via World Bank
- Undernourishment: 22.2 % of people, 2024, FAO via World Bank
- Life expectancy: 54.6 years at birth, 2024, World Bank
- Peace and safety: 2.755 Global Peace Index score (1 = most peaceful), 2026, Global Peace Index 2026
- Climate vulnerability: 0.490 ND-GAIN vulnerability (0–1), 2024, ND-GAIN 2026 release
- Water stress: 0.80 Aqueduct baseline water stress (0–5), 2023, WRI Aqueduct 4.0 (Low (<10%))
- State fragility: 96.6 Fragile States Index (0–120), 2024, Fragile States Index 2024 (latest edition; read from the official dashboard)
- Refugee and displacement pressure: 6.1 FSI “Refugees and IDPs” (0–10), 2024, Fragile States Index 2024 (latest edition; read from the official dashboard)
- Group grievance: 8.3 FSI “Group Grievance” (0–10), 2024, Fragile States Index 2024 (latest edition; read from the official dashboard)
- Aging: 5.4 people 65+ per 100 working-age, 2025, UN WPP via World Bank
- Fertility imbalance: 4.38 births per woman, 2024, World Bank
- Wealth: 9,532 GDP per capita, PPP, international $, 2025, World Bank (ICP)
- Readiness to adapt: 0.242 ND-GAIN readiness (0–1), 2024, ND-GAIN 2026 release
- Immigrant population: 0.6 % of population born abroad, 2024, UN DESA via World Bank
- Moderate or severe food insecurity: 76.5 % of people, 2024, FAO via World Bank

### Brazil (BRA)
- Access to electricity: 99.8 % of people, 2024, World Bank (SDG 7.1.1)
- Safely managed drinking water: 88.6 % of people, 2024, WHO/UNICEF JMP via World Bank
- Undernourishment: 2.5 % of people, 2024, FAO via World Bank (below 2.5%; FAO does not report lower values)
- Life expectancy: 76.0 years at birth, 2024, World Bank
- Peace and safety: 2.333 Global Peace Index score (1 = most peaceful), 2026, Global Peace Index 2026
- Climate vulnerability: 0.366 ND-GAIN vulnerability (0–1), 2024, ND-GAIN 2026 release
- Water stress: 1.04 Aqueduct baseline water stress (0–5), 2023, WRI Aqueduct 4.0 (Low - Medium (10-20%))
- State fragility: 70.3 Fragile States Index (0–120), 2024, Fragile States Index 2024 (latest edition; read from the official dashboard)
- Refugee and displacement pressure: 3.2 FSI “Refugees and IDPs” (0–10), 2024, Fragile States Index 2024 (latest edition; read from the official dashboard)
- Group grievance: 7.5 FSI “Group Grievance” (0–10), 2024, Fragile States Index 2024 (latest edition; read from the official dashboard)
- Aging: 16.6 people 65+ per 100 working-age, 2025, UN WPP via World Bank
- Fertility imbalance: 1.61 births per woman, 2024, World Bank
- Wealth: 23,433 GDP per capita, PPP, international $, 2025, World Bank (ICP)
- Readiness to adapt: 0.381 ND-GAIN readiness (0–1), 2024, ND-GAIN 2026 release
- Immigrant population: 0.7 % of population born abroad, 2024, UN DESA via World Bank
- Moderate or severe food insecurity: 9.6 % of people, 2024, FAO via World Bank

### Bangladesh (BGD)
- Access to electricity: 99.5 % of people, 2024, World Bank (SDG 7.1.1)
- Safely managed drinking water: 59.1 % of people, 2024, WHO/UNICEF JMP via World Bank
- Undernourishment: 8.2 % of people, 2024, FAO via World Bank
- Life expectancy: 74.9 years at birth, 2024, World Bank
- Peace and safety: 2.226 Global Peace Index score (1 = most peaceful), 2026, Global Peace Index 2026
- Climate vulnerability: 0.544 ND-GAIN vulnerability (0–1), 2024, ND-GAIN 2026 release
- Water stress: 2.66 Aqueduct baseline water stress (0–5), 2023, WRI Aqueduct 4.0 (Medium - High (20-40%))
- State fragility: 85.9 Fragile States Index (0–120), 2024, Fragile States Index 2024 (latest edition; read from the official dashboard)
- Refugee and displacement pressure: 7.6 FSI “Refugees and IDPs” (0–10), 2024, Fragile States Index 2024 (latest edition; read from the official dashboard)
- Group grievance: 8.9 FSI “Group Grievance” (0–10), 2024, Fragile States Index 2024 (latest edition; read from the official dashboard)
- Aging: 10.2 people 65+ per 100 working-age, 2025, UN WPP via World Bank
- Fertility imbalance: 2.14 births per woman, 2024, World Bank
- Wealth: 10,154 GDP per capita, PPP, international $, 2025, World Bank (ICP)
- Readiness to adapt: 0.284 ND-GAIN readiness (0–1), 2024, ND-GAIN 2026 release
- Immigrant population: 1.7 % of population born abroad, 2024, UN DESA via World Bank
- Moderate or severe food insecurity: 26.2 % of people, 2024, FAO via World Bank

### Egypt (EGY)
- Access to electricity: 100.0 % of people, 2024, World Bank (SDG 7.1.1)
- Safely managed drinking water: 78.9 % of people, 2024, WHO/UNICEF JMP via World Bank
- Undernourishment: 8.4 % of people, 2024, FAO via World Bank
- Life expectancy: 71.8 years at birth, 2024, World Bank
- Peace and safety: 2.186 Global Peace Index score (1 = most peaceful), 2026, Global Peace Index 2026
- Climate vulnerability: 0.469 ND-GAIN vulnerability (0–1), 2024, ND-GAIN 2026 release
- Water stress: 4.85 Aqueduct baseline water stress (0–5), 2023, WRI Aqueduct 4.0 (Extremely High (>80%))
- State fragility: 82.8 Fragile States Index (0–120), 2024, Fragile States Index 2024 (latest edition; read from the official dashboard)
- Refugee and displacement pressure: 6.0 FSI “Refugees and IDPs” (0–10), 2024, Fragile States Index 2024 (latest edition; read from the official dashboard)
- Group grievance: 7.4 FSI “Group Grievance” (0–10), 2024, Fragile States Index 2024 (latest edition; read from the official dashboard)
- Aging: 8.3 people 65+ per 100 working-age, 2025, UN WPP via World Bank
- Fertility imbalance: 2.73 births per woman, 2024, World Bank
- Wealth: 20,204 GDP per capita, PPP, international $, 2025, World Bank (ICP)
- Readiness to adapt: 0.378 ND-GAIN readiness (0–1), 2024, ND-GAIN 2026 release
- Immigrant population: 1.0 % of population born abroad, 2024, UN DESA via World Bank
- Moderate or severe food insecurity: 29.9 % of people, 2024, FAO via World Bank

Answer only with JSON matching the requested schema. Countries, in order: France, United States, China, India, Nigeria, Brazil, Bangladesh, Egypt.

## Output JSON schema

{
  "type": "object",
  "additionalProperties": false,
  "required": [
    "world",
    "countries"
  ],
  "properties": {
    "world": {
      "type": "object",
      "additionalProperties": false,
      "required": [
        "siBy2050",
        "siBy2100",
        "si",
        "noSi",
        "rationale"
      ],
      "properties": {
        "siBy2050": {
          "type": "number"
        },
        "siBy2100": {
          "type": "number"
        },
        "si": {
          "$ref": "#/$defs/worldScenario"
        },
        "noSi": {
          "$ref": "#/$defs/worldScenario"
        },
        "rationale": {
          "type": "string"
        }
      }
    },
    "countries": {
      "type": "array",
      "items": {
        "type": "object",
        "additionalProperties": false,
        "required": [
          "entity",
          "si",
          "noSi",
          "rationale"
        ],
        "properties": {
          "entity": {
            "type": "string",
            "enum": [
              "FRA",
              "USA",
              "CHN",
              "IND",
              "NGA",
              "BRA",
              "BGD",
              "EGY"
            ]
          },
          "si": {
            "$ref": "#/$defs/countryScenario"
          },
          "noSi": {
            "$ref": "#/$defs/countryScenario"
          },
          "rationale": {
            "type": "string"
          }
        }
      }
    }
  },
  "$defs": {
    "worldScenario": {
      "type": "object",
      "additionalProperties": false,
      "required": [
        "doom",
        "abundance",
        "pathways"
      ],
      "properties": {
        "doom": {
          "type": "number"
        },
        "abundance": {
          "type": "number"
        },
        "pathways": {
          "type": "object",
          "additionalProperties": false,
          "required": [
            "ai",
            "nuclear",
            "pandemic",
            "climate",
            "resources",
            "other"
          ],
          "properties": {
            "ai": {
              "type": "number"
            },
            "nuclear": {
              "type": "number"
            },
            "pandemic": {
              "type": "number"
            },
            "climate": {
              "type": "number"
            },
            "resources": {
              "type": "number"
            },
            "other": {
              "type": "number"
            }
          }
        }
      }
    },
    "countryScenario": {
      "type": "object",
      "additionalProperties": false,
      "required": [
        "collapse",
        "abundance",
        "pillarLoss"
      ],
      "properties": {
        "collapse": {
          "type": "number"
        },
        "abundance": {
          "type": "number"
        },
        "pillarLoss": {
          "type": "object",
          "additionalProperties": false,
          "required": [
            "energy",
            "water",
            "food",
            "health",
            "security"
          ],
          "properties": {
            "energy": {
              "type": "number"
            },
            "water": {
              "type": "number"
            },
            "food": {
              "type": "number"
            },
            "health": {
              "type": "number"
            },
            "security": {
              "type": "number"
            }
          }
        }
      }
    }
  }
}
