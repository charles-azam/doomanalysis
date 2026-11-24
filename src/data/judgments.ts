import type { JudgeRun } from '../model/types.ts'

/** Validated judge runs, imported by pdoom/judge/import-runs.ts. Do not edit by hand. */
export const judgeRuns: JudgeRun[] = [
 {
  "id": "world-2026-11-24-1",
  "batch": "world",
  "model": "Claude Opus 5.5",
  "date": "2026-11-24",
  "method": "Independent Claude Code agents reading only the prompt, prompt 2026-11-24.2",
  "world": {
   "siBy2050": 0.52,
   "siBy2100": 0.78,
   "si": {
    "doom": 0.12,
    "abundance": 0.16,
    "pathways": {
     "ai": 0.085,
     "nuclear": 0.015,
     "pandemic": 0.015,
     "climate": 0.002,
     "resources": 0.002,
     "other": 0.01
    }
   },
   "noSi": {
    "doom": 0.052,
    "abundance": 0.01,
    "pathways": {
     "ai": 0.005,
     "nuclear": 0.025,
     "pandemic": 0.015,
     "climate": 0.004,
     "resources": 0.003,
     "other": 0.006
    }
   },
   "rationale": "Rapid capability gains (40-hour task horizons in 2026) make superintelligence more likely than not by 2100, and loss of control or misuse is then the dominant doom route, with AI-enabled bioweapons and great-power war behind it. Without superintelligence, nuclear war and engineered pandemics are the main tail risks, and some of those same catastrophes are what would stop superintelligence arriving. World abundance needs near-free essentials for 90% of a 2100 population about one third of which lives in Sub-Saharan Africa, so it is rare even with superintelligence and almost impossible without it, because health and security costs rise with income."
  },
  "entities": [
   {
    "entity": "europe-north",
    "si": {
     "collapse": 0.155,
     "abundance": 0.47,
     "pillarLoss": {
      "energy": 0.14,
      "water": 0.128,
      "food": 0.135,
      "health": 0.135,
      "security": 0.145
     }
    },
    "noSi": {
     "collapse": 0.09,
     "abundance": 0.06,
     "pillarLoss": {
      "energy": 0.072,
      "water": 0.06,
      "food": 0.072,
      "health": 0.067,
      "security": 0.077
     }
    },
    "rationale": "Rich, well governed and domestically supplied with energy, so collapse risk is mostly global doom or a war with Russia. Abundance depends on whether superintelligence pushes health and security spending far below today's roughly 25-30% essentials share."
   },
   {
    "entity": "europe-west",
    "si": {
     "collapse": 0.16,
     "abundance": 0.46,
     "pillarLoss": {
      "energy": 0.145,
      "water": 0.128,
      "food": 0.135,
      "health": 0.135,
      "security": 0.15
     }
    },
    "noSi": {
     "collapse": 0.1,
     "abundance": 0.055,
     "pillarLoss": {
      "energy": 0.077,
      "water": 0.062,
      "food": 0.074,
      "health": 0.067,
      "security": 0.082
     }
    },
    "rationale": "Strong institutions and wealth, but it imports 62% of its energy and ages fast, which pushes up health costs. An AMOC weakening and a European war are the main regional collapse routes outside global doom."
   },
   {
    "entity": "europe-south",
    "si": {
     "collapse": 0.165,
     "abundance": 0.43,
     "pillarLoss": {
      "energy": 0.145,
      "water": 0.135,
      "food": 0.14,
      "health": 0.135,
      "security": 0.15
     }
    },
    "noSi": {
     "collapse": 0.11,
     "abundance": 0.045,
     "pillarLoss": {
      "energy": 0.077,
      "water": 0.077,
      "food": 0.077,
      "health": 0.067,
      "security": 0.087
     }
    },
    "rationale": "High water stress, heavy energy imports, high debt and the oldest population make Mediterranean heat and drought the main regional threat. Wealth and EU membership still make collapse unlikely outside global catastrophe."
   },
   {
    "entity": "europe-east",
    "si": {
     "collapse": 0.195,
     "abundance": 0.33,
     "pillarLoss": {
      "energy": 0.15,
      "water": 0.135,
      "food": 0.14,
      "health": 0.145,
      "security": 0.185
     }
    },
    "noSi": {
     "collapse": 0.14,
     "abundance": 0.03,
     "pillarLoss": {
      "energy": 0.082,
      "water": 0.067,
      "food": 0.077,
      "health": 0.077,
      "security": 0.127
     }
    },
    "rationale": "The Russia-Ukraine war, military spending of 10% of GDP and the risk of a NATO-Russia nuclear exchange make security the weak point. Weak governance and war-level peace scores also lower the odds of near-free essentials."
   },
   {
    "entity": "north-america",
    "si": {
     "collapse": 0.175,
     "abundance": 0.45,
     "pillarLoss": {
      "energy": 0.15,
      "water": 0.13,
      "food": 0.135,
      "health": 0.14,
      "security": 0.165
     }
    },
    "noSi": {
     "collapse": 0.11,
     "abundance": 0.045,
     "pillarLoss": {
      "energy": 0.082,
      "water": 0.067,
      "food": 0.072,
      "health": 0.072,
      "security": 0.097
     }
    },
    "rationale": "As the likely superintelligence leader it would capture the gains first, but it is also the prime nuclear target and is politically polarized. Health spending of 16% of GDP alone breaks the abundance line today, so abundance needs a big drop in care costs."
   },
   {
    "entity": "latin-america",
    "si": {
     "collapse": 0.175,
     "abundance": 0.29,
     "pillarLoss": {
      "energy": 0.14,
      "water": 0.14,
      "food": 0.145,
      "health": 0.14,
      "security": 0.165
     }
    },
    "noSi": {
     "collapse": 0.12,
     "abundance": 0.025,
     "pillarLoss": {
      "energy": 0.072,
      "water": 0.077,
      "food": 0.087,
      "health": 0.072,
      "security": 0.107
     }
    },
    "rationale": "It produces its own food and energy, far from the main nuclear rivals, but homicide near 19 per 100,000 means 90% physical safety is a high bar. Heavy interest burdens and weak governance slow how fast cheap technology spreads."
   },
   {
    "entity": "mena",
    "si": {
     "collapse": 0.21,
     "abundance": 0.23,
     "pillarLoss": {
      "energy": 0.15,
      "water": 0.17,
      "food": 0.165,
      "health": 0.15,
      "security": 0.19
     }
    },
    "noSi": {
     "collapse": 0.17,
     "abundance": 0.02,
     "pillarLoss": {
      "energy": 0.082,
      "water": 0.122,
      "food": 0.112,
      "health": 0.082,
      "security": 0.142
     }
    },
    "rationale": "Extremely high water stress, dependence on food imports, extreme heat and chronic regional wars make water and security the likeliest breaking points. Cheap solar desalination under superintelligence is the main way out."
   },
   {
    "entity": "sub-saharan-africa",
    "si": {
     "collapse": 0.2,
     "abundance": 0.19,
     "pillarLoss": {
      "energy": 0.15,
      "water": 0.155,
      "food": 0.175,
      "health": 0.16,
      "security": 0.175
     }
    },
    "noSi": {
     "collapse": 0.15,
     "abundance": 0.012,
     "pillarLoss": {
      "energy": 0.082,
      "water": 0.092,
      "food": 0.127,
      "health": 0.097,
      "security": 0.117
     }
    },
    "rationale": "Starting from 55% electricity access, 27% safe water and 62% food insecurity, with a population likely to more than double, it needs a huge build-out before 2100 to reach 90% access. Climate shocks on food and widespread conflict are the main collapse risks."
   },
   {
    "entity": "central-south-asia",
    "si": {
     "collapse": 0.2,
     "abundance": 0.24,
     "pillarLoss": {
      "energy": 0.15,
      "water": 0.165,
      "food": 0.175,
      "health": 0.15,
      "security": 0.17
     }
    },
    "noSi": {
     "collapse": 0.15,
     "abundance": 0.018,
     "pillarLoss": {
      "energy": 0.082,
      "water": 0.112,
      "food": 0.122,
      "health": 0.082,
      "security": 0.112
     }
    },
    "rationale": "Near-extreme water stress, glacier loss, wet-bulb heat and an India-Pakistan nuclear rivalry threaten food and water for two billion people. Interest costs near 30% of revenue and low health spending limit resilience."
   },
   {
    "entity": "east-asia",
    "si": {
     "collapse": 0.195,
     "abundance": 0.38,
     "pillarLoss": {
      "energy": 0.155,
      "water": 0.14,
      "food": 0.15,
      "health": 0.145,
      "security": 0.18
     }
    },
    "noSi": {
     "collapse": 0.13,
     "abundance": 0.04,
     "pillarLoss": {
      "energy": 0.087,
      "water": 0.077,
      "food": 0.087,
      "health": 0.077,
      "security": 0.112
     }
    },
    "rationale": "China's manufacturing and robotics base makes it a strong candidate to make essentials cheap, but a Taiwan or US-China AI-race war and very low fertility are the key risks. Energy and food imports add some exposure."
   },
   {
    "entity": "southeast-asia",
    "si": {
     "collapse": 0.175,
     "abundance": 0.3,
     "pillarLoss": {
      "energy": 0.14,
      "water": 0.14,
      "food": 0.15,
      "health": 0.14,
      "security": 0.16
     }
    },
    "noSi": {
     "collapse": 0.11,
     "abundance": 0.025,
     "pillarLoss": {
      "energy": 0.072,
      "water": 0.072,
      "food": 0.087,
      "health": 0.072,
      "security": 0.092
     }
    },
    "rationale": "Relatively peaceful, with fast-growing economies, but only 45% safe water access, low-lying deltas exposed to sea-level rise and spillover from a South China Sea conflict. Rice yields under heat stress are the main food risk."
   },
   {
    "entity": "oceania",
    "si": {
     "collapse": 0.15,
     "abundance": 0.39,
     "pillarLoss": {
      "energy": 0.135,
      "water": 0.13,
      "food": 0.132,
      "health": 0.132,
      "security": 0.14
     }
    },
    "noSi": {
     "collapse": 0.09,
     "abundance": 0.05,
     "pillarLoss": {
      "energy": 0.067,
      "water": 0.064,
      "food": 0.067,
      "health": 0.064,
      "security": 0.077
     }
    },
    "rationale": "Australia and New Zealand are remote, food and energy exporters, which is the best protection from collapse. Papua New Guinea's low access to the essentials makes the regional 90% access line harder to reach."
   }
  ]
 },
 {
  "id": "world-2026-11-24-2",
  "batch": "world",
  "model": "Claude Opus 5.5",
  "date": "2026-11-24",
  "method": "Independent Claude Code agents reading only the prompt, prompt 2026-11-24.2",
  "world": {
   "siBy2050": 0.5,
   "siBy2100": 0.75,
   "si": {
    "doom": 0.11,
    "abundance": 0.15,
    "pathways": {
     "ai": 0.08,
     "nuclear": 0.015,
     "pandemic": 0.012,
     "climate": 0.001,
     "resources": 0.001,
     "other": 0.007
    }
   },
   "noSi": {
    "doom": 0.045,
    "abundance": 0.004,
    "pathways": {
     "ai": 0.003,
     "nuclear": 0.02,
     "pandemic": 0.012,
     "climate": 0.004,
     "resources": 0.003,
     "other": 0.008
    }
   },
   "rationale": "Superintelligence is more likely than not this century given how fast AI capability is rising, and it drives both tails: loss of control is the main route to doom, while near-free essentials for 90% of humanity also depend on it and on the gains reaching Africa and South Asia, which will hold over half of humanity by 2100. Without it, doom comes mainly from nuclear war and engineered pandemics, and doom is a little more likely because some no-superintelligence worlds are ones where a catastrophe stopped progress. The near-free test is almost out of reach without superintelligence, because health and security alone already cost more than 10% of income in rich countries."
  },
  "entities": [
   {
    "entity": "europe-north",
    "si": {
     "collapse": 0.145,
     "abundance": 0.38,
     "pillarLoss": {
      "energy": 0.11,
      "water": 0.09,
      "food": 0.11,
      "health": 0.11,
      "security": 0.12
     }
    },
    "noSi": {
     "collapse": 0.08,
     "abundance": 0.04,
     "pillarLoss": {
      "energy": 0.05,
      "water": 0.04,
      "food": 0.055,
      "health": 0.05,
      "security": 0.06
     }
    },
    "rationale": "Rich, stable and well governed, so collapse mostly means global doom or a war with Russia reaching the region. Abundance hinges on superintelligence pushing health and food costs far below today's roughly quarter of income."
   },
   {
    "entity": "europe-west",
    "si": {
     "collapse": 0.15,
     "abundance": 0.37,
     "pillarLoss": {
      "energy": 0.115,
      "water": 0.09,
      "food": 0.11,
      "health": 0.11,
      "security": 0.125
     }
    },
    "noSi": {
     "collapse": 0.09,
     "abundance": 0.035,
     "pillarLoss": {
      "energy": 0.06,
      "water": 0.04,
      "food": 0.055,
      "health": 0.05,
      "security": 0.065
     }
    },
    "rationale": "Wealthy and resilient but reliant on imported energy and exposed to a European war. Health spending near 12% of GDP must fall sharply for the near-free test, which realistically needs superintelligence."
   },
   {
    "entity": "europe-south",
    "si": {
     "collapse": 0.155,
     "abundance": 0.32,
     "pillarLoss": {
      "energy": 0.11,
      "water": 0.105,
      "food": 0.115,
      "health": 0.11,
      "security": 0.12
     }
    },
    "noSi": {
     "collapse": 0.095,
     "abundance": 0.03,
     "pillarLoss": {
      "energy": 0.055,
      "water": 0.055,
      "food": 0.06,
      "health": 0.05,
      "security": 0.06
     }
    },
    "rationale": "High water stress, heat and heavy public debt add some risk, but rich states can buy their way through droughts. Abundance needs superintelligence to cut costs and lift weaker economies."
   },
   {
    "entity": "europe-east",
    "si": {
     "collapse": 0.21,
     "abundance": 0.22,
     "pillarLoss": {
      "energy": 0.12,
      "water": 0.1,
      "food": 0.12,
      "health": 0.13,
      "security": 0.18
     }
    },
    "noSi": {
     "collapse": 0.16,
     "abundance": 0.015,
     "pillarLoss": {
      "energy": 0.07,
      "water": 0.05,
      "food": 0.07,
      "health": 0.08,
      "security": 0.14
     }
    },
    "rationale": "Security is the weak pillar: an ongoing war, near-war-zone peace scores and Russia making up half the population mean a wider war or Russian breakdown could leave most people unsafe. Weak governance and military spending also make near-free essentials harder."
   },
   {
    "entity": "north-america",
    "si": {
     "collapse": 0.165,
     "abundance": 0.35,
     "pillarLoss": {
      "energy": 0.12,
      "water": 0.09,
      "food": 0.11,
      "health": 0.12,
      "security": 0.13
     }
    },
    "noSi": {
     "collapse": 0.1,
     "abundance": 0.03,
     "pillarLoss": {
      "energy": 0.065,
      "water": 0.045,
      "food": 0.06,
      "health": 0.06,
      "security": 0.075
     }
    },
    "rationale": "The main nuclear target and the centre of the AI race, with rising political instability, but rich in energy and food. Health spending at 16% of GDP is the biggest barrier to near-free essentials unless superintelligence-driven growth swamps it."
   },
   {
    "entity": "latin-america",
    "si": {
     "collapse": 0.17,
     "abundance": 0.21,
     "pillarLoss": {
      "energy": 0.11,
      "water": 0.11,
      "food": 0.12,
      "health": 0.12,
      "security": 0.14
     }
    },
    "noSi": {
     "collapse": 0.11,
     "abundance": 0.008,
     "pillarLoss": {
      "energy": 0.05,
      "water": 0.06,
      "food": 0.07,
      "health": 0.06,
      "security": 0.085
     }
    },
    "rationale": "Far from the nuclear front lines and rich in food and energy, but very high violence, weak water access and middling governance stand in the way of 90% access. Abundance needs superintelligence gains to reach it and violence to fall."
   },
   {
    "entity": "mena",
    "si": {
     "collapse": 0.21,
     "abundance": 0.18,
     "pillarLoss": {
      "energy": 0.12,
      "water": 0.15,
      "food": 0.15,
      "health": 0.12,
      "security": 0.17
     }
    },
    "noSi": {
     "collapse": 0.17,
     "abundance": 0.008,
     "pillarLoss": {
      "energy": 0.06,
      "water": 0.11,
      "food": 0.11,
      "health": 0.07,
      "security": 0.13
     }
    },
    "rationale": "Extreme water stress, food import dependence, heat and repeated wars make it one of the likeliest regions to collapse. Cheap desalination and energy under superintelligence could change that, but only if conflict subsides."
   },
   {
    "entity": "sub-saharan-africa",
    "si": {
     "collapse": 0.19,
     "abundance": 0.15,
     "pillarLoss": {
      "energy": 0.11,
      "water": 0.11,
      "food": 0.15,
      "health": 0.13,
      "security": 0.14
     }
    },
    "noSi": {
     "collapse": 0.16,
     "abundance": 0.002,
     "pillarLoss": {
      "energy": 0.06,
      "water": 0.07,
      "food": 0.12,
      "health": 0.09,
      "security": 0.1
     }
    },
    "rationale": "Starts furthest from abundance, with low electricity and water access, widespread hunger and fragile states, while its population may more than double. Food is the pillar most at risk from warming, and reaching near-free essentials requires superintelligence gains to diffuse here quickly."
   },
   {
    "entity": "central-south-asia",
    "si": {
     "collapse": 0.18,
     "abundance": 0.18,
     "pillarLoss": {
      "energy": 0.11,
      "water": 0.13,
      "food": 0.13,
      "health": 0.11,
      "security": 0.13
     }
    },
    "noSi": {
     "collapse": 0.13,
     "abundance": 0.004,
     "pillarLoss": {
      "energy": 0.055,
      "water": 0.08,
      "food": 0.09,
      "health": 0.06,
      "security": 0.08
     }
    },
    "rationale": "India dominates, so regional collapse needs India to fail, most plausibly through an India-Pakistan nuclear war or severe water and heat stress. Low incomes and a heavy interest burden make near-free essentials unlikely without superintelligence."
   },
   {
    "entity": "east-asia",
    "si": {
     "collapse": 0.18,
     "abundance": 0.29,
     "pillarLoss": {
      "energy": 0.12,
      "water": 0.1,
      "food": 0.12,
      "health": 0.11,
      "security": 0.15
     }
    },
    "noSi": {
     "collapse": 0.11,
     "abundance": 0.02,
     "pillarLoss": {
      "energy": 0.06,
      "water": 0.05,
      "food": 0.065,
      "health": 0.055,
      "security": 0.08
     }
    },
    "rationale": "Capable states and strong industry, but a war over Taiwan, which an AI race makes more likely, is the main collapse risk. China's scale and manufacturing base give it a real shot at abundance if superintelligence arrives."
   },
   {
    "entity": "southeast-asia",
    "si": {
     "collapse": 0.17,
     "abundance": 0.23,
     "pillarLoss": {
      "energy": 0.11,
      "water": 0.11,
      "food": 0.12,
      "health": 0.11,
      "security": 0.13
     }
    },
    "noSi": {
     "collapse": 0.11,
     "abundance": 0.008,
     "pillarLoss": {
      "energy": 0.055,
      "water": 0.06,
      "food": 0.07,
      "health": 0.055,
      "security": 0.08
     }
    },
    "rationale": "Fairly peaceful and growing, but exposed to sea-level rise, storms and a South China Sea conflict, and fewer than half of people have safe water today. Abundance depends on superintelligence gains spreading through middle-income economies."
   },
   {
    "entity": "oceania",
    "si": {
     "collapse": 0.145,
     "abundance": 0.35,
     "pillarLoss": {
      "energy": 0.11,
      "water": 0.09,
      "food": 0.1,
      "health": 0.11,
      "security": 0.12
     }
    },
    "noSi": {
     "collapse": 0.08,
     "abundance": 0.03,
     "pillarLoss": {
      "energy": 0.05,
      "water": 0.045,
      "food": 0.05,
      "health": 0.05,
      "security": 0.055
     }
    },
    "rationale": "Australia and New Zealand are rich, stable, food and energy exporters, far from likely nuclear targets. Papua New Guinea's low access to electricity and food pulls the 90% threshold down, and near-free essentials still need superintelligence."
   }
  ]
 },
 {
  "id": "world-2026-11-24-3",
  "batch": "world",
  "model": "Claude Opus 5.5",
  "date": "2026-11-24",
  "method": "Independent Claude Code agents reading only the prompt, prompt 2026-11-24.2",
  "world": {
   "siBy2050": 0.58,
   "siBy2100": 0.8,
   "si": {
    "doom": 0.115,
    "abundance": 0.18,
    "pathways": {
     "ai": 0.085,
     "nuclear": 0.015,
     "pandemic": 0.01,
     "climate": 0.001,
     "resources": 0.001,
     "other": 0.008
    }
   },
   "noSi": {
    "doom": 0.04,
    "abundance": 0.012,
    "pathways": {
     "ai": 0.005,
     "nuclear": 0.015,
     "pandemic": 0.011,
     "climate": 0.003,
     "resources": 0.002,
     "other": 0.006
    }
   },
   "rationale": "Fast capability gains (40-hour task horizons in 2026) make superintelligence by 2100 likely, and loss of control or AI-enabled disempowerment dominates the doom risk in that branch, with AI-amplified war and bioweapons behind it. World abundance needs near-free essentials for 90% of humanity, including Sub-Saharan Africa and South Asia, which will hold over half of people by 2100, so even a well-aligned SI world clears it less than one time in five. Without SI, essentials still cost about a quarter of output and health costs tend to rise with income, so abundance is close to ruled out while nuclear war and engineered pandemics carry most of the doom risk."
  },
  "entities": [
   {
    "entity": "europe-north",
    "si": {
     "collapse": 0.165,
     "abundance": 0.48,
     "pillarLoss": {
      "energy": 0.13,
      "water": 0.12,
      "food": 0.135,
      "health": 0.13,
      "security": 0.15
     }
    },
    "noSi": {
     "collapse": 0.09,
     "abundance": 0.05,
     "pillarLoss": {
      "energy": 0.06,
      "water": 0.05,
      "food": 0.065,
      "health": 0.06,
      "security": 0.075
     }
    },
    "rationale": "Rich, stable, well governed and energy self-sufficient, so its collapse risk is mostly global doom plus spillover from a war with Russia. Health spending at 10.5% of GDP alone uses up the abundance budget, so near-free essentials need SI-driven cost collapse."
   },
   {
    "entity": "europe-west",
    "si": {
     "collapse": 0.17,
     "abundance": 0.46,
     "pillarLoss": {
      "energy": 0.135,
      "water": 0.125,
      "food": 0.14,
      "health": 0.135,
      "security": 0.155
     }
    },
    "noSi": {
     "collapse": 0.1,
     "abundance": 0.045,
     "pillarLoss": {
      "energy": 0.07,
      "water": 0.055,
      "food": 0.07,
      "health": 0.065,
      "security": 0.085
     }
    },
    "rationale": "Wealthy and capable but imports 62% of its energy and spends almost 12% of GDP on health, so abundance depends on SI making care and energy far cheaper. Collapse is mostly global doom or a European war."
   },
   {
    "entity": "europe-south",
    "si": {
     "collapse": 0.18,
     "abundance": 0.42,
     "pillarLoss": {
      "energy": 0.135,
      "water": 0.14,
      "food": 0.145,
      "health": 0.135,
      "security": 0.16
     }
    },
    "noSi": {
     "collapse": 0.12,
     "abundance": 0.035,
     "pillarLoss": {
      "energy": 0.075,
      "water": 0.08,
      "food": 0.085,
      "health": 0.07,
      "security": 0.095
     }
    },
    "rationale": "High water stress, heat exposure, heavy energy imports and debt above 100% of GDP make it a bit more fragile than northern Europe. Long life expectancy and peace keep regional collapse unlikely outside global shocks."
   },
   {
    "entity": "europe-east",
    "si": {
     "collapse": 0.25,
     "abundance": 0.32,
     "pillarLoss": {
      "energy": 0.16,
      "water": 0.15,
      "food": 0.16,
      "health": 0.17,
      "security": 0.23
     }
    },
    "noSi": {
     "collapse": 0.2,
     "abundance": 0.02,
     "pillarLoss": {
      "energy": 0.1,
      "water": 0.08,
      "food": 0.1,
      "health": 0.11,
      "security": 0.18
     }
    },
    "rationale": "The Russia-Ukraine war, military spending at 10% of GDP and a peace score near war-zone level make security the dominant collapse route, including the risk of a nuclear NATO-Russia war. Weaker governance and life expectancy right at 75 lower its abundance odds."
   },
   {
    "entity": "north-america",
    "si": {
     "collapse": 0.2,
     "abundance": 0.43,
     "pillarLoss": {
      "energy": 0.14,
      "water": 0.13,
      "food": 0.14,
      "health": 0.15,
      "security": 0.18
     }
    },
    "noSi": {
     "collapse": 0.12,
     "abundance": 0.03,
     "pillarLoss": {
      "energy": 0.07,
      "water": 0.06,
      "food": 0.07,
      "health": 0.08,
      "security": 0.1
     }
    },
    "rationale": "Likely home of SI, which brings both the biggest gains and the most direct exposure to AI conflict and loss of control, on top of being a prime nuclear target. Health spending at 16% of GDP and high inequality make the under-10% cost test hard without SI."
   },
   {
    "entity": "latin-america",
    "si": {
     "collapse": 0.21,
     "abundance": 0.27,
     "pillarLoss": {
      "energy": 0.14,
      "water": 0.15,
      "food": 0.16,
      "health": 0.15,
      "security": 0.19
     }
    },
    "noSi": {
     "collapse": 0.17,
     "abundance": 0.012,
     "pillarLoss": {
      "energy": 0.08,
      "water": 0.1,
      "food": 0.11,
      "health": 0.09,
      "security": 0.14
     }
    },
    "rationale": "Endemic violence (homicide near 19 per 100,000) and 22% food insecurity are the main obstacles. The region is far from great-power nuclear targets, but it needs SI benefits to spread to it, not just reach the US and China, before it can reach abundance."
   },
   {
    "entity": "mena",
    "si": {
     "collapse": 0.24,
     "abundance": 0.25,
     "pillarLoss": {
      "energy": 0.14,
      "water": 0.19,
      "food": 0.18,
      "health": 0.15,
      "security": 0.21
     }
    },
    "noSi": {
     "collapse": 0.23,
     "abundance": 0.012,
     "pillarLoss": {
      "energy": 0.09,
      "water": 0.17,
      "food": 0.15,
      "health": 0.1,
      "security": 0.19
     }
    },
    "rationale": "Extreme water stress, dependence on food imports, extreme heat and chronic conflict make water, food and security the weak points. Cheap SI-driven desalination and solar would help most here, but political fragility limits how far gains spread."
   },
   {
    "entity": "sub-saharan-africa",
    "si": {
     "collapse": 0.26,
     "abundance": 0.2,
     "pillarLoss": {
      "energy": 0.15,
      "water": 0.17,
      "food": 0.2,
      "health": 0.18,
      "security": 0.22
     }
    },
    "noSi": {
     "collapse": 0.3,
     "abundance": 0.004,
     "pillarLoss": {
      "energy": 0.1,
      "water": 0.15,
      "food": 0.22,
      "health": 0.17,
      "security": 0.24
     }
    },
    "rationale": "Starting from 55% electricity access, 27% safe water, 62% food insecurity and fragile states, with population roughly tripling, it is the region most exposed to climate-driven harvest losses and conflict. Abundance requires SI and robots to leapfrog decades of infrastructure, which is possible but far from assured."
   },
   {
    "entity": "central-south-asia",
    "si": {
     "collapse": 0.25,
     "abundance": 0.25,
     "pillarLoss": {
      "energy": 0.15,
      "water": 0.19,
      "food": 0.19,
      "health": 0.16,
      "security": 0.2
     }
    },
    "noSi": {
     "collapse": 0.24,
     "abundance": 0.008,
     "pillarLoss": {
      "energy": 0.09,
      "water": 0.16,
      "food": 0.16,
      "health": 0.1,
      "security": 0.17
     }
    },
    "rationale": "Near-extreme water stress, deadly heat, monsoon-dependent harvests and the India-Pakistan nuclear rivalry are the main collapse risks. Low current spending and income mean abundance hinges on SI-driven growth reaching two billion people."
   },
   {
    "entity": "east-asia",
    "si": {
     "collapse": 0.22,
     "abundance": 0.37,
     "pillarLoss": {
      "energy": 0.15,
      "water": 0.15,
      "food": 0.16,
      "health": 0.14,
      "security": 0.2
     }
    },
    "noSi": {
     "collapse": 0.15,
     "abundance": 0.025,
     "pillarLoss": {
      "energy": 0.08,
      "water": 0.08,
      "food": 0.09,
      "health": 0.07,
      "security": 0.12
     }
    },
    "rationale": "Strong state capacity, manufacturing depth and likely SI leadership in China favour abundance, but a Taiwan or Korea war and a US-China AI race are serious collapse risks. Very low fertility and rapid aging add pressure on health systems."
   },
   {
    "entity": "southeast-asia",
    "si": {
     "collapse": 0.2,
     "abundance": 0.3,
     "pillarLoss": {
      "energy": 0.14,
      "water": 0.15,
      "food": 0.15,
      "health": 0.14,
      "security": 0.17
     }
    },
    "noSi": {
     "collapse": 0.16,
     "abundance": 0.012,
     "pillarLoss": {
      "energy": 0.08,
      "water": 0.1,
      "food": 0.1,
      "health": 0.08,
      "security": 0.12
     }
    },
    "rationale": "Relatively peaceful and growing, but only 45% have safe water, and sea-level rise and flooding threaten its delta rice lands. Spillover from a South China Sea conflict is the main security risk."
   },
   {
    "entity": "oceania",
    "si": {
     "collapse": 0.15,
     "abundance": 0.44,
     "pillarLoss": {
      "energy": 0.125,
      "water": 0.12,
      "food": 0.125,
      "health": 0.125,
      "security": 0.135
     }
    },
    "noSi": {
     "collapse": 0.075,
     "abundance": 0.04,
     "pillarLoss": {
      "energy": 0.05,
      "water": 0.05,
      "food": 0.055,
      "health": 0.05,
      "security": 0.06
     }
    },
    "rationale": "Dominated by Australia and New Zealand: big energy and food exporters, remote from nuclear targets and among the best places to ride out global shocks. Pacific islands and Papua New Guinea pull access figures down, which tempers the abundance odds."
   }
  ]
 },
 {
  "id": "spotlight-2-2026-11-24-1",
  "batch": "spotlight-2",
  "model": "Claude Opus 5.5",
  "date": "2026-11-24",
  "method": "Independent Claude Code agents reading only the prompt, prompt 2026-11-24.2",
  "entities": [
   {
    "entity": "GBR",
    "si": {
     "collapse": 0.16,
     "abundance": 0.31,
     "pillarLoss": {
      "energy": 0.06,
      "water": 0.03,
      "food": 0.06,
      "health": 0.07,
      "security": 0.1
     }
    },
    "noSi": {
     "collapse": 0.09,
     "abundance": 0.025,
     "pillarLoss": {
      "energy": 0.03,
      "water": 0.015,
      "food": 0.03,
      "health": 0.03,
      "security": 0.05
     }
    },
    "rationale": "Rich and stable, but a nuclear target that imports half its energy and much of its food. Getting essentials from 24% to under 10% of income needs SI to cut health and care costs, which are rising as the population ages."
   },
   {
    "entity": "FRA",
    "si": {
     "collapse": 0.165,
     "abundance": 0.29,
     "pillarLoss": {
      "energy": 0.05,
      "water": 0.035,
      "food": 0.05,
      "health": 0.07,
      "security": 0.11
     }
    },
    "noSi": {
     "collapse": 0.095,
     "abundance": 0.02,
     "pillarLoss": {
      "energy": 0.025,
      "water": 0.02,
      "food": 0.025,
      "health": 0.03,
      "security": 0.055
     }
    },
    "rationale": "A nuclear-powered grid and a strong farm sector are strengths. Political instability, rising debt and being a nuclear power are the main risks, and essentials at 27% of income only fall below 10% with SI."
   },
   {
    "entity": "ZAF",
    "si": {
     "collapse": 0.28,
     "abundance": 0.08,
     "pillarLoss": {
      "energy": 0.12,
      "water": 0.14,
      "food": 0.09,
      "health": 0.09,
      "security": 0.15
     }
    },
    "noSi": {
     "collapse": 0.22,
     "abundance": 0.004,
     "pillarLoss": {
      "energy": 0.1,
      "water": 0.12,
      "food": 0.07,
      "health": 0.06,
      "security": 0.12
     }
    },
    "rationale": "Severe water stress, a fragile grid, extreme violent crime and weak state capacity make a multi-year breakdown plausible. Deep poverty and inequality make near-free essentials unlikely even with SI."
   },
   {
    "entity": "ITA",
    "si": {
     "collapse": 0.16,
     "abundance": 0.25,
     "pillarLoss": {
      "energy": 0.06,
      "water": 0.05,
      "food": 0.05,
      "health": 0.07,
      "security": 0.09
     }
    },
    "noSi": {
     "collapse": 0.085,
     "abundance": 0.015,
     "pillarLoss": {
      "energy": 0.03,
      "water": 0.025,
      "food": 0.02,
      "health": 0.03,
      "security": 0.04
     }
    },
    "rationale": "Very safe and long-lived, but it imports 79% of its energy, is water-stressed, carries very high debt and is ageing fast. Abundance depends on SI offsetting the cost of caring for the elderly."
   },
   {
    "entity": "KEN",
    "si": {
     "collapse": 0.3,
     "abundance": 0.07,
     "pillarLoss": {
      "energy": 0.08,
      "water": 0.12,
      "food": 0.2,
      "health": 0.1,
      "security": 0.14
     }
    },
    "noSi": {
     "collapse": 0.25,
     "abundance": 0.003,
     "pillarLoss": {
      "energy": 0.06,
      "water": 0.1,
      "food": 0.18,
      "health": 0.08,
      "security": 0.12
     }
    },
    "rationale": "A third of people are already undernourished, and high climate vulnerability, heavy debt service and political volatility make a food or security breakdown the main risk. From such a low income, near-free essentials are a long shot."
   },
   {
    "entity": "COL",
    "si": {
     "collapse": 0.22,
     "abundance": 0.12,
     "pillarLoss": {
      "energy": 0.05,
      "water": 0.05,
      "food": 0.07,
      "health": 0.07,
      "security": 0.15
     }
    },
    "noSi": {
     "collapse": 0.16,
     "abundance": 0.006,
     "pillarLoss": {
      "energy": 0.04,
      "water": 0.04,
      "food": 0.05,
      "health": 0.05,
      "security": 0.12
     }
    },
    "rationale": "Plenty of water and exportable energy, but armed groups, a high homicide rate and political instability make security the weak pillar."
   },
   {
    "entity": "KOR",
    "si": {
     "collapse": 0.2,
     "abundance": 0.29,
     "pillarLoss": {
      "energy": 0.09,
      "water": 0.03,
      "food": 0.08,
      "health": 0.06,
      "security": 0.15
     }
    },
    "noSi": {
     "collapse": 0.13,
     "abundance": 0.02,
     "pillarLoss": {
      "energy": 0.06,
      "water": 0.02,
      "food": 0.05,
      "health": 0.03,
      "security": 0.1
     }
    },
    "rationale": "War with North Korea, or a regional blockade of a country that imports 83% of its energy, is the main path to collapse. A strong state and tech base make it an early SI beneficiary, but extreme ageing and defence spending push costs up."
   },
   {
    "entity": "ESP",
    "si": {
     "collapse": 0.155,
     "abundance": 0.27,
     "pillarLoss": {
      "energy": 0.05,
      "water": 0.07,
      "food": 0.05,
      "health": 0.06,
      "security": 0.08
     }
    },
    "noSi": {
     "collapse": 0.08,
     "abundance": 0.018,
     "pillarLoss": {
      "energy": 0.025,
      "water": 0.035,
      "food": 0.025,
      "health": 0.025,
      "security": 0.035
     }
    },
    "rationale": "Peaceful and long-lived, but water stress is near the top of the scale and it imports most of its energy. Cheap solar and desalination help, yet near-free essentials still need SI."
   },
   {
    "entity": "ARG",
    "si": {
     "collapse": 0.17,
     "abundance": 0.15,
     "pillarLoss": {
      "energy": 0.05,
      "water": 0.03,
      "food": 0.05,
      "health": 0.07,
      "security": 0.08
     }
    },
    "noSi": {
     "collapse": 0.11,
     "abundance": 0.008,
     "pillarLoss": {
      "energy": 0.035,
      "water": 0.02,
      "food": 0.03,
      "health": 0.05,
      "security": 0.05
     }
    },
    "rationale": "A food and energy exporter far from the major wars, but repeated economic crises and weak institutions put health care and incomes at risk. Abundance needs SI plus decades of steady governance."
   },
   {
    "entity": "CAN",
    "si": {
     "collapse": 0.145,
     "abundance": 0.34,
     "pillarLoss": {
      "energy": 0.04,
      "water": 0.02,
      "food": 0.04,
      "health": 0.07,
      "security": 0.1
     }
    },
    "noSi": {
     "collapse": 0.07,
     "abundance": 0.025,
     "pillarLoss": {
      "energy": 0.015,
      "water": 0.01,
      "food": 0.015,
      "health": 0.025,
      "security": 0.04
     }
    },
    "rationale": "Rich in energy and water, stable and safe. The main risks are a US-Russia war spilling over and a global catastrophe."
   },
   {
    "entity": "UKR",
    "si": {
     "collapse": 0.37,
     "abundance": 0.11,
     "pillarLoss": {
      "energy": 0.18,
      "water": 0.08,
      "food": 0.06,
      "health": 0.1,
      "security": 0.32
     }
    },
    "noSi": {
     "collapse": 0.32,
     "abundance": 0.006,
     "pillarLoss": {
      "energy": 0.15,
      "water": 0.06,
      "food": 0.04,
      "health": 0.08,
      "security": 0.28
     }
    },
    "rationale": "Russia's ongoing invasion and its attacks on the power grid make a long loss of security or electricity the dominant risk. Abundance needs a lasting peace plus SI-driven rebuilding."
   },
   {
    "entity": "SAU",
    "si": {
     "collapse": 0.23,
     "abundance": 0.18,
     "pillarLoss": {
      "energy": 0.04,
      "water": 0.13,
      "food": 0.08,
      "health": 0.05,
      "security": 0.13
     }
    },
    "noSi": {
     "collapse": 0.17,
     "abundance": 0.01,
     "pillarLoss": {
      "energy": 0.03,
      "water": 0.1,
      "food": 0.06,
      "health": 0.04,
      "security": 0.09
     }
    },
    "rationale": "It depends almost entirely on desalination and imported food, and faces extreme heat, rivalry with Iran and the end of oil revenue. Cheap energy could make water nearly free, but high defence spending works against the cost test."
   },
   {
    "entity": "POL",
    "si": {
     "collapse": 0.17,
     "abundance": 0.26,
     "pillarLoss": {
      "energy": 0.05,
      "water": 0.03,
      "food": 0.04,
      "health": 0.06,
      "security": 0.12
     }
    },
    "noSi": {
     "collapse": 0.1,
     "abundance": 0.015,
     "pillarLoss": {
      "energy": 0.025,
      "water": 0.015,
      "food": 0.02,
      "health": 0.025,
      "security": 0.06
     }
    },
    "rationale": "Stable, fast-growing and able to feed itself, but a frontline NATO state on Russia's border. High defence spending and rapid ageing make the near-free test hard."
   },
   {
    "entity": "AUS",
    "si": {
     "collapse": 0.145,
     "abundance": 0.33,
     "pillarLoss": {
      "energy": 0.03,
      "water": 0.05,
      "food": 0.04,
      "health": 0.06,
      "security": 0.09
     }
    },
    "noSi": {
     "collapse": 0.07,
     "abundance": 0.025,
     "pillarLoss": {
      "energy": 0.015,
      "water": 0.025,
      "food": 0.015,
      "health": 0.02,
      "security": 0.035
     }
    },
    "rationale": "Huge energy and food surpluses, stable institutions and distance from most wars. Drought, heat and a China-US conflict are the main local risks."
   },
   {
    "entity": "NLD",
    "si": {
     "collapse": 0.15,
     "abundance": 0.33,
     "pillarLoss": {
      "energy": 0.06,
      "water": 0.05,
      "food": 0.04,
      "health": 0.06,
      "security": 0.09
     }
    },
    "noSi": {
     "collapse": 0.075,
     "abundance": 0.03,
     "pillarLoss": {
      "energy": 0.03,
      "water": 0.025,
      "food": 0.015,
      "health": 0.02,
      "security": 0.035
     }
    },
    "rationale": "Very rich, with world-class flood defences that should handle sea-level rise through 2100. Its weak points are its low-lying land and its 88% dependence on imported energy."
   },
   {
    "entity": "SWE",
    "si": {
     "collapse": 0.145,
     "abundance": 0.35,
     "pillarLoss": {
      "energy": 0.04,
      "water": 0.02,
      "food": 0.04,
      "health": 0.06,
      "security": 0.1
     }
    },
    "noSi": {
     "collapse": 0.07,
     "abundance": 0.03,
     "pillarLoss": {
      "energy": 0.015,
      "water": 0.01,
      "food": 0.02,
      "health": 0.02,
      "security": 0.04
     }
    },
    "rationale": "Strong institutions, clean home-grown power, ample water and low debt. Baltic tensions with Russia are the main local risk."
   },
   {
    "entity": "NOR",
    "si": {
     "collapse": 0.14,
     "abundance": 0.38,
     "pillarLoss": {
      "energy": 0.03,
      "water": 0.02,
      "food": 0.05,
      "health": 0.05,
      "security": 0.09
     }
    },
    "noSi": {
     "collapse": 0.065,
     "abundance": 0.04,
     "pillarLoss": {
      "energy": 0.01,
      "water": 0.01,
      "food": 0.02,
      "health": 0.02,
      "security": 0.035
     }
    },
    "rationale": "The richest and most energy-secure country here, with essentials already at 20% of income and a huge sovereign wealth fund. Only a global catastrophe or a war with Russia plausibly breaks it."
   }
  ]
 },
 {
  "id": "spotlight-2-2026-11-24-2",
  "batch": "spotlight-2",
  "model": "Claude Opus 5.5",
  "date": "2026-11-24",
  "method": "Independent Claude Code agents reading only the prompt, prompt 2026-11-24.2",
  "entities": [
   {
    "entity": "GBR",
    "si": {
     "collapse": 0.16,
     "abundance": 0.25,
     "pillarLoss": {
      "energy": 0.125,
      "water": 0.115,
      "food": 0.13,
      "health": 0.13,
      "security": 0.14
     }
    },
    "noSi": {
     "collapse": 0.075,
     "abundance": 0.02,
     "pillarLoss": {
      "energy": 0.05,
      "water": 0.045,
      "food": 0.055,
      "health": 0.05,
      "security": 0.06
     }
    },
    "rationale": "A rich, capable state whose collapse risk is mostly global doom plus a war or trade shock hitting its imported food and energy. Near-free essentials need SI-scale growth, because health spending alone is already near the 10% line."
   },
   {
    "entity": "FRA",
    "si": {
     "collapse": 0.165,
     "abundance": 0.23,
     "pillarLoss": {
      "energy": 0.12,
      "water": 0.12,
      "food": 0.12,
      "health": 0.13,
      "security": 0.145
     }
    },
    "noSi": {
     "collapse": 0.08,
     "abundance": 0.018,
     "pillarLoss": {
      "energy": 0.05,
      "water": 0.05,
      "food": 0.048,
      "health": 0.055,
      "security": 0.065
     }
    },
    "rationale": "Nuclear power and food self-sufficiency make it resilient, but weak political stability and rising debt add some risk. Essentials at 27% of income, with high health costs, make abundance unlikely without SI."
   },
   {
    "entity": "ZAF",
    "si": {
     "collapse": 0.25,
     "abundance": 0.08,
     "pillarLoss": {
      "energy": 0.15,
      "water": 0.16,
      "food": 0.13,
      "health": 0.12,
      "security": 0.16
     }
    },
    "noSi": {
     "collapse": 0.22,
     "abundance": 0.004,
     "pillarLoss": {
      "energy": 0.12,
      "water": 0.12,
      "food": 0.07,
      "health": 0.06,
      "security": 0.1
     }
    },
    "rationale": "Chronic grid failure, severe water stress and very high violence make a five-year loss of electricity, water or security plausible. Low life expectancy and weak state capacity put abundance far out of reach."
   },
   {
    "entity": "ITA",
    "si": {
     "collapse": 0.165,
     "abundance": 0.2,
     "pillarLoss": {
      "energy": 0.13,
      "water": 0.125,
      "food": 0.12,
      "health": 0.13,
      "security": 0.13
     }
    },
    "noSi": {
     "collapse": 0.08,
     "abundance": 0.013,
     "pillarLoss": {
      "energy": 0.055,
      "water": 0.055,
      "food": 0.05,
      "health": 0.055,
      "security": 0.055
     }
    },
    "rationale": "Peaceful and rich, but it imports 79% of its energy, carries very high debt, faces growing water stress and has one of the oldest populations, which pushes health costs up. Collapse outside global doom is unlikely."
   },
   {
    "entity": "KEN",
    "si": {
     "collapse": 0.26,
     "abundance": 0.06,
     "pillarLoss": {
      "energy": 0.13,
      "water": 0.15,
      "food": 0.18,
      "health": 0.13,
      "security": 0.16
     }
    },
    "noSi": {
     "collapse": 0.22,
     "abundance": 0.002,
     "pillarLoss": {
      "energy": 0.07,
      "water": 0.1,
      "food": 0.15,
      "health": 0.07,
      "security": 0.1
     }
    },
    "rationale": "A third of people are already undernourished, the climate is getting harsher and politics is fragile, so a majority food or security failure is the main path to collapse. Abundance needs SI gains to reach a poor country with life expectancy below 75."
   },
   {
    "entity": "COL",
    "si": {
     "collapse": 0.19,
     "abundance": 0.11,
     "pillarLoss": {
      "energy": 0.12,
      "water": 0.12,
      "food": 0.125,
      "health": 0.125,
      "security": 0.16
     }
    },
    "noSi": {
     "collapse": 0.14,
     "abundance": 0.005,
     "pillarLoss": {
      "energy": 0.05,
      "water": 0.05,
      "food": 0.06,
      "health": 0.06,
      "security": 0.11
     }
    },
    "rationale": "Plentiful water and energy exports are strengths, but armed groups, high homicide and low political stability make security the main pillar at risk. Middle income limits abundance."
   },
   {
    "entity": "KOR",
    "si": {
     "collapse": 0.18,
     "abundance": 0.25,
     "pillarLoss": {
      "energy": 0.135,
      "water": 0.115,
      "food": 0.135,
      "health": 0.12,
      "security": 0.16
     }
    },
    "noSi": {
     "collapse": 0.1,
     "abundance": 0.013,
     "pillarLoss": {
      "energy": 0.06,
      "water": 0.045,
      "food": 0.06,
      "health": 0.05,
      "security": 0.08
     }
    },
    "rationale": "War with North Korea, or a regional blockade cutting the 83% of energy it imports and much of its food, is the main risk on top of global doom. Its strong state and tech base help abundance under SI, but extreme aging drags it down without SI."
   },
   {
    "entity": "ESP",
    "si": {
     "collapse": 0.16,
     "abundance": 0.21,
     "pillarLoss": {
      "energy": 0.12,
      "water": 0.135,
      "food": 0.125,
      "health": 0.12,
      "security": 0.125
     }
    },
    "noSi": {
     "collapse": 0.075,
     "abundance": 0.014,
     "pillarLoss": {
      "energy": 0.05,
      "water": 0.06,
      "food": 0.055,
      "health": 0.05,
      "security": 0.05
     }
    },
    "rationale": "Peaceful and rich with strong solar, but severe and worsening water stress threatens water and farming. Rapid aging keeps health costs high, which limits abundance."
   },
   {
    "entity": "ARG",
    "si": {
     "collapse": 0.16,
     "abundance": 0.13,
     "pillarLoss": {
      "energy": 0.12,
      "water": 0.115,
      "food": 0.12,
      "health": 0.13,
      "security": 0.13
     }
    },
    "noSi": {
     "collapse": 0.09,
     "abundance": 0.006,
     "pillarLoss": {
      "energy": 0.05,
      "water": 0.045,
      "food": 0.05,
      "health": 0.06,
      "security": 0.055
     }
    },
    "rationale": "As a food and energy exporter it is physically secure, but repeated economic crises could degrade health care and incomes. Middle income and macro instability make near-free essentials unlikely."
   },
   {
    "entity": "CAN",
    "si": {
     "collapse": 0.145,
     "abundance": 0.28,
     "pillarLoss": {
      "energy": 0.12,
      "water": 0.115,
      "food": 0.12,
      "health": 0.125,
      "security": 0.13
     }
    },
    "noSi": {
     "collapse": 0.06,
     "abundance": 0.025,
     "pillarLoss": {
      "energy": 0.045,
      "water": 0.042,
      "food": 0.045,
      "health": 0.05,
      "security": 0.05
     }
    },
    "rationale": "Abundant energy, water and food, plus strong institutions, leave global doom as nearly its whole collapse risk, along with spillover if the US becomes unstable. Health spending keeps essentials well above 10% unless SI cuts costs sharply."
   },
   {
    "entity": "UKR",
    "si": {
     "collapse": 0.44,
     "abundance": 0.08,
     "pillarLoss": {
      "energy": 0.2,
      "water": 0.15,
      "food": 0.14,
      "health": 0.16,
      "security": 0.4
     }
    },
    "noSi": {
     "collapse": 0.4,
     "abundance": 0.003,
     "pillarLoss": {
      "energy": 0.15,
      "water": 0.08,
      "food": 0.07,
      "health": 0.1,
      "security": 0.36
     }
    },
    "rationale": "The war passes five years in early 2027 with strikes nationwide and occupation, so a majority losing security, and repeated attacks on the grid, may already count as collapse. Renewed Russian aggression later is a further risk."
   },
   {
    "entity": "SAU",
    "si": {
     "collapse": 0.19,
     "abundance": 0.15,
     "pillarLoss": {
      "energy": 0.12,
      "water": 0.14,
      "food": 0.135,
      "health": 0.12,
      "security": 0.15
     }
    },
    "noSi": {
     "collapse": 0.13,
     "abundance": 0.008,
     "pillarLoss": {
      "energy": 0.05,
      "water": 0.08,
      "food": 0.07,
      "health": 0.05,
      "security": 0.08
     }
    },
    "rationale": "Water depends on desalination, food is mostly imported, and extreme heat, regional war and the end of oil revenue all threaten stability. High military spending also works against near-free security."
   },
   {
    "entity": "POL",
    "si": {
     "collapse": 0.165,
     "abundance": 0.21,
     "pillarLoss": {
      "energy": 0.125,
      "water": 0.115,
      "food": 0.12,
      "health": 0.12,
      "security": 0.15
     }
    },
    "noSi": {
     "collapse": 0.08,
     "abundance": 0.012,
     "pillarLoss": {
      "energy": 0.05,
      "water": 0.045,
      "food": 0.045,
      "health": 0.05,
      "security": 0.07
     }
    },
    "rationale": "It is stable and growing, but as a NATO front-line state next to Russia, war is the main risk beyond global doom. Rapid aging and middling income limit abundance."
   },
   {
    "entity": "AUS",
    "si": {
     "collapse": 0.145,
     "abundance": 0.28,
     "pillarLoss": {
      "energy": 0.115,
      "water": 0.125,
      "food": 0.115,
      "health": 0.12,
      "security": 0.13
     }
    },
    "noSi": {
     "collapse": 0.065,
     "abundance": 0.025,
     "pillarLoss": {
      "energy": 0.045,
      "water": 0.055,
      "food": 0.045,
      "health": 0.045,
      "security": 0.05
     }
    },
    "rationale": "As an energy and food exporter with strong institutions it is resilient. The main local risks are drought, heat and a Pacific conflict. Under SI, its wealth and solar resources make abundance comparatively plausible."
   },
   {
    "entity": "NLD",
    "si": {
     "collapse": 0.145,
     "abundance": 0.28,
     "pillarLoss": {
      "energy": 0.125,
      "water": 0.12,
      "food": 0.115,
      "health": 0.12,
      "security": 0.125
     }
    },
    "noSi": {
     "collapse": 0.065,
     "abundance": 0.025,
     "pillarLoss": {
      "energy": 0.05,
      "water": 0.05,
      "food": 0.045,
      "health": 0.045,
      "security": 0.05
     }
    },
    "rationale": "Very rich with world-class flood defenses, so the projected 2100 sea-level rise is manageable. Its 88% energy import dependence is the main weak point beyond global doom."
   },
   {
    "entity": "SWE",
    "si": {
     "collapse": 0.14,
     "abundance": 0.3,
     "pillarLoss": {
      "energy": 0.115,
      "water": 0.11,
      "food": 0.12,
      "health": 0.12,
      "security": 0.13
     }
    },
    "noSi": {
     "collapse": 0.06,
     "abundance": 0.028,
     "pillarLoss": {
      "energy": 0.045,
      "water": 0.042,
      "food": 0.045,
      "health": 0.05,
      "security": 0.05
     }
    },
    "rationale": "Low debt, clean domestic power, ample water and very effective government leave little collapse risk beyond global doom and a Baltic war. Essentials at 25% of income still need SI-driven cost cuts to fall below 10%."
   },
   {
    "entity": "NOR",
    "si": {
     "collapse": 0.138,
     "abundance": 0.33,
     "pillarLoss": {
      "energy": 0.11,
      "water": 0.11,
      "food": 0.12,
      "health": 0.115,
      "security": 0.125
     }
    },
    "noSi": {
     "collapse": 0.058,
     "abundance": 0.04,
     "pillarLoss": {
      "energy": 0.043,
      "water": 0.042,
      "food": 0.045,
      "health": 0.045,
      "security": 0.05
     }
    },
    "rationale": "The richest country here, with hydropower, a huge sovereign fund, the lowest climate vulnerability and essentials already at 20% of income, so it is the likeliest to reach abundance. Food imports and the Arctic border with Russia are minor risks."
   }
  ]
 },
 {
  "id": "spotlight-2-2026-11-24-3",
  "batch": "spotlight-2",
  "model": "Claude Opus 5.5",
  "date": "2026-11-24",
  "method": "Independent Claude Code agents reading only the prompt, prompt 2026-11-24.2",
  "entities": [
   {
    "entity": "GBR",
    "si": {
     "collapse": 0.155,
     "abundance": 0.28,
     "pillarLoss": {
      "energy": 0.1,
      "water": 0.06,
      "food": 0.09,
      "health": 0.08,
      "security": 0.11
     }
    },
    "noSi": {
     "collapse": 0.08,
     "abundance": 0.02,
     "pillarLoss": {
      "energy": 0.05,
      "water": 0.025,
      "food": 0.04,
      "health": 0.035,
      "security": 0.05
     }
    },
    "rationale": "Rich and well governed, so collapse is mostly global doom plus nuclear-state war risk; abundance needs essentials to fall from 24% to under 10% of income, which an aging population's health bill makes unlikely without superintelligence."
   },
   {
    "entity": "FRA",
    "si": {
     "collapse": 0.16,
     "abundance": 0.27,
     "pillarLoss": {
      "energy": 0.09,
      "water": 0.07,
      "food": 0.08,
      "health": 0.08,
      "security": 0.12
     }
    },
    "noSi": {
     "collapse": 0.085,
     "abundance": 0.02,
     "pillarLoss": {
      "energy": 0.04,
      "water": 0.035,
      "food": 0.035,
      "health": 0.035,
      "security": 0.06
     }
    },
    "rationale": "Nuclear power and food self-sufficiency make it resilient, but weaker political stability and rising debt add risk; 27% essentials cost means near-free needs superintelligence-driven deflation."
   },
   {
    "entity": "ZAF",
    "si": {
     "collapse": 0.23,
     "abundance": 0.07,
     "pillarLoss": {
      "energy": 0.12,
      "water": 0.15,
      "food": 0.11,
      "health": 0.1,
      "security": 0.16
     }
    },
    "noSi": {
     "collapse": 0.19,
     "abundance": 0.003,
     "pillarLoss": {
      "energy": 0.1,
      "water": 0.12,
      "food": 0.08,
      "health": 0.07,
      "security": 0.12
     }
    },
    "rationale": "Severe water stress, a fragile power grid, very high violence and weak state capacity make prolonged loss of an essential a real risk; abundance is remote without broad, well-distributed superintelligence gains."
   },
   {
    "entity": "ITA",
    "si": {
     "collapse": 0.16,
     "abundance": 0.24,
     "pillarLoss": {
      "energy": 0.1,
      "water": 0.08,
      "food": 0.08,
      "health": 0.09,
      "security": 0.1
     }
    },
    "noSi": {
     "collapse": 0.09,
     "abundance": 0.015,
     "pillarLoss": {
      "energy": 0.05,
      "water": 0.04,
      "food": 0.035,
      "health": 0.045,
      "security": 0.05
     }
    },
    "rationale": "Heavy energy import dependence, high debt and one of the steepest aging curves strain the system, though it starts from full access; extreme aging keeps health costs far above a near-free level without superintelligence."
   },
   {
    "entity": "KEN",
    "si": {
     "collapse": 0.27,
     "abundance": 0.05,
     "pillarLoss": {
      "energy": 0.12,
      "water": 0.15,
      "food": 0.19,
      "health": 0.13,
      "security": 0.16
     }
    },
    "noSi": {
     "collapse": 0.25,
     "abundance": 0.001,
     "pillarLoss": {
      "energy": 0.1,
      "water": 0.13,
      "food": 0.18,
      "health": 0.11,
      "security": 0.14
     }
    },
    "rationale": "A third of people are already undernourished and climate vulnerability is high, so drought-driven food loss is the main path to collapse; abundance would require both superintelligence and fast diffusion to a low-income economy."
   },
   {
    "entity": "COL",
    "si": {
     "collapse": 0.19,
     "abundance": 0.1,
     "pillarLoss": {
      "energy": 0.08,
      "water": 0.07,
      "food": 0.08,
      "health": 0.08,
      "security": 0.15
     }
    },
    "noSi": {
     "collapse": 0.14,
     "abundance": 0.004,
     "pillarLoss": {
      "energy": 0.04,
      "water": 0.04,
      "food": 0.04,
      "health": 0.04,
      "security": 0.11
     }
    },
    "rationale": "Ample water and energy, but armed groups, high homicide and low political stability make a renewed security breakdown the dominant risk; middle income keeps strict abundance unlikely."
   },
   {
    "entity": "KOR",
    "si": {
     "collapse": 0.19,
     "abundance": 0.3,
     "pillarLoss": {
      "energy": 0.12,
      "water": 0.07,
      "food": 0.11,
      "health": 0.08,
      "security": 0.15
     }
    },
    "noSi": {
     "collapse": 0.12,
     "abundance": 0.015,
     "pillarLoss": {
      "energy": 0.07,
      "water": 0.03,
      "food": 0.06,
      "health": 0.04,
      "security": 0.09
     }
    },
    "rationale": "Highly capable state and tech base well placed to capture superintelligence gains, offset by North Korean war risk, 83% energy imports and the world's most extreme aging."
   },
   {
    "entity": "ESP",
    "si": {
     "collapse": 0.16,
     "abundance": 0.25,
     "pillarLoss": {
      "energy": 0.09,
      "water": 0.1,
      "food": 0.08,
      "health": 0.08,
      "security": 0.1
     }
    },
    "noSi": {
     "collapse": 0.09,
     "abundance": 0.015,
     "pillarLoss": {
      "energy": 0.04,
      "water": 0.055,
      "food": 0.04,
      "health": 0.04,
      "security": 0.05
     }
    },
    "rationale": "Peaceful and rich, but water stress heading toward extreme levels and heavy energy imports are its weak points; strong solar potential helps, yet aging keeps essentials far above 10% of income without superintelligence."
   },
   {
    "entity": "ARG",
    "si": {
     "collapse": 0.165,
     "abundance": 0.14,
     "pillarLoss": {
      "energy": 0.08,
      "water": 0.06,
      "food": 0.06,
      "health": 0.09,
      "security": 0.1
     }
    },
    "noSi": {
     "collapse": 0.1,
     "abundance": 0.006,
     "pillarLoss": {
      "energy": 0.04,
      "water": 0.03,
      "food": 0.03,
      "health": 0.05,
      "security": 0.06
     }
    },
    "rationale": "A food and energy exporter that is physically secure, but repeated economic crises and modest state effectiveness threaten health and security services and limit how much superintelligence wealth reaches everyone."
   },
   {
    "entity": "CAN",
    "si": {
     "collapse": 0.14,
     "abundance": 0.32,
     "pillarLoss": {
      "energy": 0.07,
      "water": 0.05,
      "food": 0.07,
      "health": 0.08,
      "security": 0.1
     }
    },
    "noSi": {
     "collapse": 0.065,
     "abundance": 0.025,
     "pillarLoss": {
      "energy": 0.03,
      "water": 0.02,
      "food": 0.03,
      "health": 0.035,
      "security": 0.045
     }
    },
    "rationale": "Energy and water surpluses, strong institutions and geographic safety leave little beyond global doom; strict abundance depends almost entirely on superintelligence collapsing health and other costs."
   },
   {
    "entity": "UKR",
    "si": {
     "collapse": 0.38,
     "abundance": 0.09,
     "pillarLoss": {
      "energy": 0.24,
      "water": 0.14,
      "food": 0.12,
      "health": 0.18,
      "security": 0.32
     }
    },
    "noSi": {
     "collapse": 0.35,
     "abundance": 0.004,
     "pillarLoss": {
      "energy": 0.22,
      "water": 0.12,
      "food": 0.1,
      "health": 0.16,
      "security": 0.3
     }
    },
    "rationale": "Nearly five years of full-scale war with strikes on the grid already put security and energy at the edge of the collapse threshold, and renewed Russian aggression is plausible later; abundance needs both lasting peace and superintelligence."
   },
   {
    "entity": "SAU",
    "si": {
     "collapse": 0.19,
     "abundance": 0.18,
     "pillarLoss": {
      "energy": 0.07,
      "water": 0.13,
      "food": 0.1,
      "health": 0.07,
      "security": 0.13
     }
    },
    "noSi": {
     "collapse": 0.13,
     "abundance": 0.008,
     "pillarLoss": {
      "energy": 0.04,
      "water": 0.08,
      "food": 0.06,
      "health": 0.04,
      "security": 0.08
     }
    },
    "rationale": "Rich and fiscally strong, but water depends on energy-hungry desalination, food is imported, extreme heat rises and regional war risk is real; heavy defense spending also counts against near-free security."
   },
   {
    "entity": "POL",
    "si": {
     "collapse": 0.17,
     "abundance": 0.25,
     "pillarLoss": {
      "energy": 0.09,
      "water": 0.06,
      "food": 0.06,
      "health": 0.08,
      "security": 0.13
     }
    },
    "noSi": {
     "collapse": 0.1,
     "abundance": 0.015,
     "pillarLoss": {
      "energy": 0.045,
      "water": 0.03,
      "food": 0.03,
      "health": 0.04,
      "security": 0.07
     }
    },
    "rationale": "Stable and growing fast, but as NATO's frontline with Russia it carries above-average war risk, and steep aging pushes health costs up; abundance hinges on superintelligence."
   },
   {
    "entity": "AUS",
    "si": {
     "collapse": 0.145,
     "abundance": 0.32,
     "pillarLoss": {
      "energy": 0.07,
      "water": 0.07,
      "food": 0.06,
      "health": 0.07,
      "security": 0.1
     }
    },
    "noSi": {
     "collapse": 0.07,
     "abundance": 0.025,
     "pillarLoss": {
      "energy": 0.03,
      "water": 0.035,
      "food": 0.025,
      "health": 0.03,
      "security": 0.045
     }
    },
    "rationale": "A food and energy exporter with strong institutions and isolation from most wars; drought and heat are the main local stresses, and near-free essentials require superintelligence."
   },
   {
    "entity": "NLD",
    "si": {
     "collapse": 0.15,
     "abundance": 0.32,
     "pillarLoss": {
      "energy": 0.09,
      "water": 0.08,
      "food": 0.07,
      "health": 0.08,
      "security": 0.1
     }
    },
    "noSi": {
     "collapse": 0.075,
     "abundance": 0.025,
     "pillarLoss": {
      "energy": 0.04,
      "water": 0.04,
      "food": 0.03,
      "health": 0.035,
      "security": 0.045
     }
    },
    "rationale": "Very wealthy with low debt and world-class flood defenses, but sea-level rise and 88% energy imports are long-run vulnerabilities; strict abundance needs superintelligence."
   },
   {
    "entity": "SWE",
    "si": {
     "collapse": 0.145,
     "abundance": 0.34,
     "pillarLoss": {
      "energy": 0.07,
      "water": 0.05,
      "food": 0.07,
      "health": 0.07,
      "security": 0.1
     }
    },
    "noSi": {
     "collapse": 0.07,
     "abundance": 0.03,
     "pillarLoss": {
      "energy": 0.03,
      "water": 0.02,
      "food": 0.03,
      "health": 0.03,
      "security": 0.05
     }
    },
    "rationale": "Clean domestic power, abundant water, low debt and top-tier governance leave mainly global doom and Baltic security risk; it is among the likeliest to reach near-free essentials if superintelligence delivers."
   },
   {
    "entity": "NOR",
    "si": {
     "collapse": 0.14,
     "abundance": 0.37,
     "pillarLoss": {
      "energy": 0.06,
      "water": 0.04,
      "food": 0.07,
      "health": 0.07,
      "security": 0.1
     }
    },
    "noSi": {
     "collapse": 0.065,
     "abundance": 0.04,
     "pillarLoss": {
      "energy": 0.025,
      "water": 0.015,
      "food": 0.03,
      "health": 0.03,
      "security": 0.045
     }
    },
    "rationale": "The richest and most energy-secure country here, with essentials already at 20% of income and a sovereign fund buffer, so collapse is near the global floor and abundance is likelier than anywhere else listed."
   }
  ]
 },
 {
  "id": "rest-1-2026-11-24-1",
  "batch": "rest-1",
  "model": "Claude Opus 5.5",
  "date": "2026-11-24",
  "method": "Independent Claude Code agents reading only the prompt, prompt 2026-11-24.2",
  "entities": [
   {
    "entity": "TZA",
    "si": {
     "collapse": 0.26,
     "abundance": 0.07,
     "pillarLoss": {
      "energy": 0.14,
      "water": 0.15,
      "food": 0.17,
      "health": 0.16,
      "security": 0.18
     }
    },
    "noSi": {
     "collapse": 0.21,
     "abundance": 0.003,
     "pillarLoss": {
      "energy": 0.07,
      "water": 0.09,
      "food": 0.12,
      "health": 0.1,
      "security": 0.13
     }
    },
    "rationale": "Relatively peaceful but poor, with fast population growth, climate exposure and post-2025 election tensions; near-free essentials need a large SI-driven cost collapse that also reaches a low-income state."
   },
   {
    "entity": "MMR",
    "si": {
     "collapse": 0.45,
     "abundance": 0.04,
     "pillarLoss": {
      "energy": 0.2,
      "water": 0.15,
      "food": 0.18,
      "health": 0.22,
      "security": 0.39
     }
    },
    "noSi": {
     "collapse": 0.43,
     "abundance": 0.002,
     "pillarLoss": {
      "energy": 0.15,
      "water": 0.08,
      "food": 0.12,
      "health": 0.18,
      "security": 0.38
     }
    },
    "rationale": "The civil war since the 2021 coup, a collapsing state and weak adaptive capacity make prolonged loss of security for most people the dominant risk; SI arrives too late to change the near-term trajectory."
   },
   {
    "entity": "SDN",
    "si": {
     "collapse": 0.8,
     "abundance": 0.015,
     "pillarLoss": {
      "energy": 0.33,
      "water": 0.38,
      "food": 0.61,
      "health": 0.56,
      "security": 0.73
     }
    },
    "noSi": {
     "collapse": 0.78,
     "abundance": 0.001,
     "pillarLoss": {
      "energy": 0.3,
      "water": 0.35,
      "food": 0.6,
      "health": 0.55,
      "security": 0.72
     }
    },
    "rationale": "The ongoing war with famine, mass displacement and a shattered health system is likely to keep a majority without security or food for five years or more; SI changes little in time."
   },
   {
    "entity": "UGA",
    "si": {
     "collapse": 0.32,
     "abundance": 0.06,
     "pillarLoss": {
      "energy": 0.14,
      "water": 0.14,
      "food": 0.19,
      "health": 0.17,
      "security": 0.22
     }
    },
    "noSi": {
     "collapse": 0.28,
     "abundance": 0.003,
     "pillarLoss": {
      "energy": 0.07,
      "water": 0.07,
      "food": 0.14,
      "health": 0.12,
      "security": 0.18
     }
    },
    "rationale": "An uncertain succession after a long personal rule, regional conflict spillover and high food insecurity drive collapse risk; water is ample, but very low incomes make near-free essentials unlikely."
   },
   {
    "entity": "DZA",
    "si": {
     "collapse": 0.25,
     "abundance": 0.11,
     "pillarLoss": {
      "energy": 0.13,
      "water": 0.18,
      "food": 0.16,
      "health": 0.14,
      "security": 0.16
     }
    },
    "noSi": {
     "collapse": 0.21,
     "abundance": 0.005,
     "pillarLoss": {
      "energy": 0.06,
      "water": 0.13,
      "food": 0.1,
      "health": 0.07,
      "security": 0.11
     }
    },
    "rationale": "Basic access is already good, but extreme and rising water stress, food-import dependence and a hydrocarbon-funded state facing the energy transition are the main risks; its solar and desalination potential helps under SI."
   },
   {
    "entity": "IRQ",
    "si": {
     "collapse": 0.39,
     "abundance": 0.06,
     "pillarLoss": {
      "energy": 0.21,
      "water": 0.26,
      "food": 0.21,
      "health": 0.19,
      "security": 0.26
     }
    },
    "noSi": {
     "collapse": 0.36,
     "abundance": 0.003,
     "pillarLoss": {
      "energy": 0.18,
      "water": 0.24,
      "food": 0.17,
      "health": 0.14,
      "security": 0.24
     }
    },
    "rationale": "Shrinking Tigris-Euphrates flows, extreme heat, chronic power shortages, an oil-dependent budget exposed to falling demand and recurrent conflict give a high risk of collapse."
   },
   {
    "entity": "AFG",
    "si": {
     "collapse": 0.53,
     "abundance": 0.025,
     "pillarLoss": {
      "energy": 0.22,
      "water": 0.31,
      "food": 0.38,
      "health": 0.31,
      "security": 0.37
     }
    },
    "noSi": {
     "collapse": 0.52,
     "abundance": 0.001,
     "pillarLoss": {
      "energy": 0.18,
      "water": 0.3,
      "food": 0.38,
      "health": 0.3,
      "security": 0.36
     }
    },
    "rationale": "Widespread hunger, aid cuts, mass returns of refugees, water stress, persecution and an isolated regime with a fast-growing population make prolonged loss of food or security likely."
   },
   {
    "entity": "YEM",
    "si": {
     "collapse": 0.8,
     "abundance": 0.015,
     "pillarLoss": {
      "energy": 0.47,
      "water": 0.61,
      "food": 0.66,
      "health": 0.59,
      "security": 0.67
     }
    },
    "noSi": {
     "collapse": 0.79,
     "abundance": 0.001,
     "pillarLoss": {
      "energy": 0.45,
      "water": 0.6,
      "food": 0.66,
      "health": 0.58,
      "security": 0.66
     }
    },
    "rationale": "A decade of war, aquifers close to depletion, import-dependent food and fuel, and a majority already relying on aid make collapse near the default outcome."
   },
   {
    "entity": "AGO",
    "si": {
     "collapse": 0.31,
     "abundance": 0.06,
     "pillarLoss": {
      "energy": 0.14,
      "water": 0.14,
      "food": 0.19,
      "health": 0.18,
      "security": 0.18
     }
    },
    "noSi": {
     "collapse": 0.27,
     "abundance": 0.003,
     "pillarLoss": {
      "energy": 0.08,
      "water": 0.08,
      "food": 0.15,
      "health": 0.13,
      "security": 0.13
     }
    },
    "rationale": "Peace has held since 2002, but heavy oil dependence, a crushing interest burden, high hunger and low life expectancy leave the state fragile once oil demand falls."
   },
   {
    "entity": "MAR",
    "si": {
     "collapse": 0.2,
     "abundance": 0.13,
     "pillarLoss": {
      "energy": 0.13,
      "water": 0.15,
      "food": 0.13,
      "health": 0.13,
      "security": 0.14
     }
    },
    "noSi": {
     "collapse": 0.14,
     "abundance": 0.006,
     "pillarLoss": {
      "energy": 0.06,
      "water": 0.09,
      "food": 0.06,
      "health": 0.05,
      "security": 0.06
     }
    },
    "rationale": "A stable state with near-universal access and strong solar and desalination options; severe water stress and drought-hit farming are the main threat, and global doom dominates its collapse risk under SI."
   },
   {
    "entity": "UZB",
    "si": {
     "collapse": 0.22,
     "abundance": 0.12,
     "pillarLoss": {
      "energy": 0.13,
      "water": 0.16,
      "food": 0.14,
      "health": 0.13,
      "security": 0.14
     }
    },
    "noSi": {
     "collapse": 0.16,
     "abundance": 0.006,
     "pillarLoss": {
      "energy": 0.06,
      "water": 0.1,
      "food": 0.07,
      "health": 0.06,
      "security": 0.07
     }
    },
    "rationale": "A stable, improving state with good basic access, but irrigated farming depends on a shrinking Amu Darya shared with Afghanistan, making water the key vulnerability."
   },
   {
    "entity": "MYS",
    "si": {
     "collapse": 0.16,
     "abundance": 0.22,
     "pillarLoss": {
      "energy": 0.13,
      "water": 0.13,
      "food": 0.13,
      "health": 0.13,
      "security": 0.14
     }
    },
    "noSi": {
     "collapse": 0.09,
     "abundance": 0.02,
     "pillarLoss": {
      "energy": 0.05,
      "water": 0.05,
      "food": 0.05,
      "health": 0.05,
      "security": 0.06
     }
    },
    "rationale": "Upper-middle income, effective government, ample water and full access put it above the world on abundance if SI arrives; collapse risk is mostly global doom."
   },
   {
    "entity": "MOZ",
    "si": {
     "collapse": 0.37,
     "abundance": 0.04,
     "pillarLoss": {
      "energy": 0.14,
      "water": 0.15,
      "food": 0.22,
      "health": 0.19,
      "security": 0.24
     }
    },
    "noSi": {
     "collapse": 0.33,
     "abundance": 0.002,
     "pillarLoss": {
      "energy": 0.08,
      "water": 0.09,
      "food": 0.18,
      "health": 0.15,
      "security": 0.2
     }
    },
    "rationale": "Extreme poverty, the Cabo Delgado insurgency, post-election unrest, cyclones and a heavy debt load make prolonged loss of security or food plausible; abundance would require a huge outside cost collapse."
   },
   {
    "entity": "GHA",
    "si": {
     "collapse": 0.23,
     "abundance": 0.09,
     "pillarLoss": {
      "energy": 0.13,
      "water": 0.13,
      "food": 0.15,
      "health": 0.15,
      "security": 0.15
     }
    },
    "noSi": {
     "collapse": 0.17,
     "abundance": 0.004,
     "pillarLoss": {
      "energy": 0.06,
      "water": 0.06,
      "food": 0.08,
      "health": 0.08,
      "security": 0.09
     }
    },
    "rationale": "A stable democracy with high electricity access and low water stress; debt stress, Sahel spillover and weak health outcomes are the main risks."
   },
   {
    "entity": "PER",
    "si": {
     "collapse": 0.2,
     "abundance": 0.12,
     "pillarLoss": {
      "energy": 0.13,
      "water": 0.15,
      "food": 0.13,
      "health": 0.13,
      "security": 0.14
     }
    },
    "noSi": {
     "collapse": 0.14,
     "abundance": 0.006,
     "pillarLoss": {
      "energy": 0.05,
      "water": 0.08,
      "food": 0.06,
      "health": 0.06,
      "security": 0.07
     }
    },
    "rationale": "Good life expectancy and low debt, but chronic political instability, a desert coast that depends on melting glaciers, and earthquake risk; collapse risk is moderate and partly global."
   },
   {
    "entity": "MDG",
    "si": {
     "collapse": 0.39,
     "abundance": 0.04,
     "pillarLoss": {
      "energy": 0.14,
      "water": 0.16,
      "food": 0.3,
      "health": 0.19,
      "security": 0.16
     }
    },
    "noSi": {
     "collapse": 0.37,
     "abundance": 0.002,
     "pillarLoss": {
      "energy": 0.07,
      "water": 0.1,
      "food": 0.3,
      "health": 0.15,
      "security": 0.1
     }
    },
    "rationale": "With 42% already undernourished, recurring droughts and cyclones, and the 2025 military takeover, a sustained food crisis affecting most people is the main path to collapse."
   },
   {
    "entity": "CIV",
    "si": {
     "collapse": 0.28,
     "abundance": 0.07,
     "pillarLoss": {
      "energy": 0.13,
      "water": 0.13,
      "food": 0.16,
      "health": 0.16,
      "security": 0.19
     }
    },
    "noSi": {
     "collapse": 0.24,
     "abundance": 0.003,
     "pillarLoss": {
      "energy": 0.06,
      "water": 0.06,
      "food": 0.1,
      "health": 0.1,
      "security": 0.15
     }
    },
    "rationale": "Strong growth and ample water, but a history of civil war, a contested succession and jihadist spillover from the Sahel make renewed conflict the key risk; life expectancy is low."
   },
   {
    "entity": "CMR",
    "si": {
     "collapse": 0.37,
     "abundance": 0.05,
     "pillarLoss": {
      "energy": 0.14,
      "water": 0.14,
      "food": 0.17,
      "health": 0.17,
      "security": 0.27
     }
    },
    "noSi": {
     "collapse": 0.33,
     "abundance": 0.002,
     "pillarLoss": {
      "energy": 0.07,
      "water": 0.07,
      "food": 0.12,
      "health": 0.12,
      "security": 0.24
     }
    },
    "rationale": "A risky succession after a very old ruler, the Anglophone conflict and Boko Haram in the north make a wider civil conflict the dominant path to collapse."
   },
   {
    "entity": "NPL",
    "si": {
     "collapse": 0.24,
     "abundance": 0.07,
     "pillarLoss": {
      "energy": 0.13,
      "water": 0.15,
      "food": 0.15,
      "health": 0.15,
      "security": 0.16
     }
    },
    "noSi": {
     "collapse": 0.19,
     "abundance": 0.003,
     "pillarLoss": {
      "energy": 0.06,
      "water": 0.08,
      "food": 0.09,
      "health": 0.08,
      "security": 0.1
     }
    },
    "rationale": "Near-universal hydropower electricity and low fertility help, but political upheaval after the 2025 protests, earthquakes, glacier loss and very low safe-water coverage weigh on it."
   },
   {
    "entity": "VEN",
    "si": {
     "collapse": 0.32,
     "abundance": 0.07,
     "pillarLoss": {
      "energy": 0.18,
      "water": 0.15,
      "food": 0.19,
      "health": 0.2,
      "security": 0.18
     }
    },
    "noSi": {
     "collapse": 0.28,
     "abundance": 0.003,
     "pillarLoss": {
      "energy": 0.13,
      "water": 0.1,
      "food": 0.15,
      "health": 0.16,
      "security": 0.14
     }
    },
    "rationale": "Hollowed-out institutions, an unreliable grid, a gutted health system and dependence on oil during a political transition make a repeat of the 2010s breakdown plausible, though the country's resource base allows recovery."
   }
  ]
 },
 {
  "id": "rest-2-2026-11-24-1",
  "batch": "rest-2",
  "model": "Claude Opus 5.5",
  "date": "2026-11-24",
  "method": "Independent Claude Code agents reading only the prompt, prompt 2026-11-24.2",
  "entities": [
   {
    "entity": "NER",
    "si": {
     "collapse": 0.44,
     "abundance": 0.03,
     "pillarLoss": {
      "energy": 0.13,
      "water": 0.16,
      "food": 0.22,
      "health": 0.16,
      "security": 0.32
     }
    },
    "noSi": {
     "collapse": 0.42,
     "abundance": 0.002,
     "pillarLoss": {
      "energy": 0.07,
      "water": 0.12,
      "food": 0.24,
      "health": 0.14,
      "security": 0.32
     }
    },
    "rationale": "A spreading jihadist insurgency, a military junta and very fast population growth on drought-prone land make prolonged insecurity or famine for most people a real risk. Starting from extreme poverty, near-free essentials by 2100 are a long shot even with superintelligence."
   },
   {
    "entity": "PRK",
    "si": {
     "collapse": 0.36,
     "abundance": 0.05,
     "pillarLoss": {
      "energy": 0.14,
      "water": 0.13,
      "food": 0.2,
      "health": 0.15,
      "security": 0.25
     }
    },
    "noSi": {
     "collapse": 0.3,
     "abundance": 0.004,
     "pillarLoss": {
      "energy": 0.09,
      "water": 0.07,
      "food": 0.2,
      "health": 0.1,
      "security": 0.2
     }
    },
    "rationale": "Chronic food shortages, a brittle regime and a nuclear standoff mean war, regime collapse or a repeat of the 1990s famine are serious possibilities. Abundance mostly depends on a peaceful opening or reunification with the South."
   },
   {
    "entity": "SYR",
    "si": {
     "collapse": 0.38,
     "abundance": 0.03,
     "pillarLoss": {
      "energy": 0.14,
      "water": 0.19,
      "food": 0.2,
      "health": 0.15,
      "security": 0.27
     }
    },
    "noSi": {
     "collapse": 0.35,
     "abundance": 0.002,
     "pillarLoss": {
      "energy": 0.1,
      "water": 0.16,
      "food": 0.2,
      "health": 0.12,
      "security": 0.26
     }
    },
    "rationale": "Syria is emerging from a civil war with severe hunger, a fragile new government and extreme water stress, so a relapse into conflict or drought-driven crisis is likely enough to dominate. Rebuilding to near-free essentials by 2100 is unlikely."
   },
   {
    "entity": "MLI",
    "si": {
     "collapse": 0.5,
     "abundance": 0.025,
     "pillarLoss": {
      "energy": 0.14,
      "water": 0.15,
      "food": 0.24,
      "health": 0.17,
      "security": 0.4
     }
    },
    "noSi": {
     "collapse": 0.5,
     "abundance": 0.002,
     "pillarLoss": {
      "energy": 0.08,
      "water": 0.1,
      "food": 0.25,
      "health": 0.15,
      "security": 0.42
     }
    },
    "rationale": "Jihadist groups already control much of the country and have squeezed the capital, so most Malians losing physical safety for years is close to a coin flip. Climate stress on farming and herding adds famine risk."
   },
   {
    "entity": "BFA",
    "si": {
     "collapse": 0.49,
     "abundance": 0.025,
     "pillarLoss": {
      "energy": 0.14,
      "water": 0.16,
      "food": 0.23,
      "health": 0.17,
      "security": 0.38
     }
    },
    "noSi": {
     "collapse": 0.48,
     "abundance": 0.002,
     "pillarLoss": {
      "energy": 0.08,
      "water": 0.12,
      "food": 0.24,
      "health": 0.15,
      "security": 0.4
     }
    },
    "rationale": "A large share of the territory is contested by insurgents and millions are displaced under a military government, making prolonged insecurity for a majority quite likely. Rising water stress threatens food in a very poor economy."
   },
   {
    "entity": "MWI",
    "si": {
     "collapse": 0.27,
     "abundance": 0.04,
     "pillarLoss": {
      "energy": 0.13,
      "water": 0.14,
      "food": 0.18,
      "health": 0.14,
      "security": 0.14
     }
    },
    "noSi": {
     "collapse": 0.22,
     "abundance": 0.002,
     "pillarLoss": {
      "energy": 0.05,
      "water": 0.07,
      "food": 0.15,
      "health": 0.09,
      "security": 0.07
     }
    },
    "rationale": "Malawi is peaceful but extremely poor, heavily indebted and dependent on rain-fed maize, so a long climate-driven food crisis is the main danger. Its low starting point makes near-free essentials improbable."
   },
   {
    "entity": "ZMB",
    "si": {
     "collapse": 0.25,
     "abundance": 0.045,
     "pillarLoss": {
      "energy": 0.14,
      "water": 0.13,
      "food": 0.16,
      "health": 0.14,
      "security": 0.14
     }
    },
    "noSi": {
     "collapse": 0.2,
     "abundance": 0.003,
     "pillarLoss": {
      "energy": 0.07,
      "water": 0.06,
      "food": 0.13,
      "health": 0.09,
      "security": 0.07
     }
    },
    "rationale": "Zambia is stable, but widespread hunger, a debt crisis and drought exposure of both crops and hydropower create a meaningful risk of prolonged food or power loss. Copper wealth helps but is far from enough for abundance."
   },
   {
    "entity": "LKA",
    "si": {
     "collapse": 0.19,
     "abundance": 0.09,
     "pillarLoss": {
      "energy": 0.14,
      "water": 0.13,
      "food": 0.13,
      "health": 0.13,
      "security": 0.14
     }
    },
    "noSi": {
     "collapse": 0.12,
     "abundance": 0.006,
     "pillarLoss": {
      "energy": 0.07,
      "water": 0.05,
      "food": 0.07,
      "health": 0.06,
      "security": 0.06
     }
    },
    "rationale": "Good health and full electricity access are offset by crushing debt and heavy reliance on imported fuel, as the 2022 crisis showed, though that crisis was short of a five-year collapse. Middling income gives a modest chance of abundance under superintelligence."
   },
   {
    "entity": "TCD",
    "si": {
     "collapse": 0.45,
     "abundance": 0.02,
     "pillarLoss": {
      "energy": 0.13,
      "water": 0.16,
      "food": 0.23,
      "health": 0.17,
      "security": 0.33
     }
    },
    "noSi": {
     "collapse": 0.44,
     "abundance": 0.001,
     "pillarLoss": {
      "energy": 0.06,
      "water": 0.13,
      "food": 0.25,
      "health": 0.15,
      "security": 0.34
     }
    },
    "rationale": "Chad has a long history of civil war, sits between conflicts in Sudan, Libya and the Sahel, and has very weak health, water and food systems. It has the worst readiness to adapt in this group, so abundance is very unlikely."
   },
   {
    "entity": "KAZ",
    "si": {
     "collapse": 0.18,
     "abundance": 0.12,
     "pillarLoss": {
      "energy": 0.13,
      "water": 0.13,
      "food": 0.13,
      "health": 0.13,
      "security": 0.14
     }
    },
    "noSi": {
     "collapse": 0.11,
     "abundance": 0.01,
     "pillarLoss": {
      "energy": 0.05,
      "water": 0.06,
      "food": 0.05,
      "health": 0.05,
      "security": 0.06
     }
    },
    "rationale": "Kazakhstan is fairly rich, food-secure and an energy exporter, so collapse risk is mostly global doom plus a Russia-related security shock or water shortage. Its wealth gives a reasonable chance of abundance if superintelligence arrives."
   },
   {
    "entity": "CHL",
    "si": {
     "collapse": 0.16,
     "abundance": 0.16,
     "pillarLoss": {
      "energy": 0.125,
      "water": 0.135,
      "food": 0.125,
      "health": 0.125,
      "security": 0.13
     }
    },
    "noSi": {
     "collapse": 0.08,
     "abundance": 0.015,
     "pillarLoss": {
      "energy": 0.05,
      "water": 0.055,
      "food": 0.05,
      "health": 0.05,
      "security": 0.05
     }
    },
    "rationale": "Chile has strong institutions, high life expectancy and near-universal services, so its own collapse risk is low apart from severe water stress. It is among the better-placed here for abundance, but near-free essentials still need superintelligence."
   },
   {
    "entity": "SOM",
    "si": {
     "collapse": 0.55,
     "abundance": 0.02,
     "pillarLoss": {
      "energy": 0.14,
      "water": 0.22,
      "food": 0.35,
      "health": 0.22,
      "security": 0.4
     }
    },
    "noSi": {
     "collapse": 0.55,
     "abundance": 0.001,
     "pillarLoss": {
      "energy": 0.07,
      "water": 0.2,
      "food": 0.38,
      "health": 0.2,
      "security": 0.42
     }
    },
    "rationale": "More than half the population is already undernourished, the state barely functions and al-Shabaab remains strong, so another long war or drought famine is more likely than not. Abundance is very unlikely from this base."
   },
   {
    "entity": "ROU",
    "si": {
     "collapse": 0.16,
     "abundance": 0.18,
     "pillarLoss": {
      "energy": 0.13,
      "water": 0.125,
      "food": 0.125,
      "health": 0.125,
      "security": 0.14
     }
    },
    "noSi": {
     "collapse": 0.08,
     "abundance": 0.02,
     "pillarLoss": {
      "energy": 0.05,
      "water": 0.05,
      "food": 0.05,
      "health": 0.05,
      "security": 0.06
     }
    },
    "rationale": "As an EU and NATO member with high income and stable services, Romania mainly risks global doom or a wider war spilling over from Ukraine. EU-level wealth gives it one of the better shots at abundance under superintelligence."
   },
   {
    "entity": "SEN",
    "si": {
     "collapse": 0.21,
     "abundance": 0.06,
     "pillarLoss": {
      "energy": 0.13,
      "water": 0.14,
      "food": 0.15,
      "health": 0.14,
      "security": 0.15
     }
    },
    "noSi": {
     "collapse": 0.14,
     "abundance": 0.003,
     "pillarLoss": {
      "energy": 0.06,
      "water": 0.07,
      "food": 0.08,
      "health": 0.06,
      "security": 0.07
     }
    },
    "rationale": "Senegal is a stable democracy, but a debt crisis, sharply rising water stress and Sahel insurgency on its borders add risk. Low income keeps abundance unlikely."
   },
   {
    "entity": "GTM",
    "si": {
     "collapse": 0.21,
     "abundance": 0.07,
     "pillarLoss": {
      "energy": 0.13,
      "water": 0.13,
      "food": 0.15,
      "health": 0.13,
      "security": 0.15
     }
    },
    "noSi": {
     "collapse": 0.15,
     "abundance": 0.004,
     "pillarLoss": {
      "energy": 0.05,
      "water": 0.06,
      "food": 0.09,
      "health": 0.06,
      "security": 0.09
     }
    },
    "rationale": "High violence, weak government and drought in the Dry Corridor threaten security and food, though a nationwide five-year breakdown is not the base case. Middling income gives a small chance of abundance with superintelligence."
   },
   {
    "entity": "ECU",
    "si": {
     "collapse": 0.21,
     "abundance": 0.08,
     "pillarLoss": {
      "energy": 0.13,
      "water": 0.125,
      "food": 0.13,
      "health": 0.13,
      "security": 0.16
     }
    },
    "noSi": {
     "collapse": 0.15,
     "abundance": 0.005,
     "pillarLoss": {
      "energy": 0.06,
      "water": 0.05,
      "food": 0.06,
      "health": 0.06,
      "security": 0.1
     }
    },
    "rationale": "Ecuador has good health and electricity access, but gang violence has exploded and drought-hit hydropower has caused blackouts, so security is the main path to collapse. Abundance needs superintelligence and better governance."
   },
   {
    "entity": "KHM",
    "si": {
     "collapse": 0.19,
     "abundance": 0.07,
     "pillarLoss": {
      "energy": 0.13,
      "water": 0.13,
      "food": 0.13,
      "health": 0.13,
      "security": 0.14
     }
    },
    "noSi": {
     "collapse": 0.12,
     "abundance": 0.004,
     "pillarLoss": {
      "energy": 0.05,
      "water": 0.06,
      "food": 0.06,
      "health": 0.05,
      "security": 0.06
     }
    },
    "rationale": "Cambodia is growing steadily with low debt, but Mekong flows, climate risk to rice and border tension with Thailand are real vulnerabilities. Its modest income makes abundance unlikely without superintelligence."
   },
   {
    "entity": "ZWE",
    "si": {
     "collapse": 0.28,
     "abundance": 0.04,
     "pillarLoss": {
      "energy": 0.14,
      "water": 0.14,
      "food": 0.18,
      "health": 0.15,
      "security": 0.15
     }
    },
    "noSi": {
     "collapse": 0.23,
     "abundance": 0.002,
     "pillarLoss": {
      "energy": 0.07,
      "water": 0.08,
      "food": 0.15,
      "health": 0.11,
      "security": 0.08
     }
    },
    "rationale": "Zimbabwe has a record of economic meltdown, hunger and health-system failure under weak governance, and drought threatens its food supply. Low readiness to adapt makes abundance very unlikely."
   },
   {
    "entity": "GIN",
    "si": {
     "collapse": 0.29,
     "abundance": 0.04,
     "pillarLoss": {
      "energy": 0.13,
      "water": 0.14,
      "food": 0.15,
      "health": 0.16,
      "security": 0.19
     }
    },
    "noSi": {
     "collapse": 0.24,
     "abundance": 0.002,
     "pillarLoss": {
      "energy": 0.06,
      "water": 0.07,
      "food": 0.09,
      "health": 0.12,
      "security": 0.15
     }
    },
    "rationale": "Military rule, coup risk, a weak health system that buckled under Ebola and an unstable region drive the risk. Plentiful water and minerals help, but abundance from this base is improbable."
   },
   {
    "entity": "BEN",
    "si": {
     "collapse": 0.24,
     "abundance": 0.05,
     "pillarLoss": {
      "energy": 0.13,
      "water": 0.13,
      "food": 0.14,
      "health": 0.14,
      "security": 0.17
     }
    },
    "noSi": {
     "collapse": 0.18,
     "abundance": 0.003,
     "pillarLoss": {
      "energy": 0.05,
      "water": 0.06,
      "food": 0.08,
      "health": 0.07,
      "security": 0.12
     }
    },
    "rationale": "Benin is relatively stable, but jihadist violence is spreading into its north from the Sahel, and poverty and weak water and health services limit resilience. Abundance is unlikely without superintelligence."
   }
  ]
 },
 {
  "id": "rest-3-2026-11-24-1",
  "batch": "rest-3",
  "model": "Claude Opus 5.5",
  "date": "2026-11-24",
  "method": "Independent Claude Code agents reading only the prompt, prompt 2026-11-24.2",
  "entities": [
   {
    "entity": "RWA",
    "si": {
     "collapse": 0.24,
     "abundance": 0.1,
     "pillarLoss": {
      "energy": 0.12,
      "water": 0.08,
      "food": 0.16,
      "health": 0.12,
      "security": 0.18
     }
    },
    "noSi": {
     "collapse": 0.22,
     "abundance": 0.005,
     "pillarLoss": {
      "energy": 0.07,
      "water": 0.05,
      "food": 0.14,
      "health": 0.08,
      "security": 0.16
     }
    },
    "rationale": "Stable and well run for its income, but succession after Kagame, the eastern Congo conflict and food insecurity in a dense, fast-growing population are the main risks; near-free essentials need a large outside boost."
   },
   {
    "entity": "BDI",
    "si": {
     "collapse": 0.36,
     "abundance": 0.03,
     "pillarLoss": {
      "energy": 0.13,
      "water": 0.12,
      "food": 0.26,
      "health": 0.18,
      "security": 0.26
     }
    },
    "noSi": {
     "collapse": 0.38,
     "abundance": 0.002,
     "pillarLoss": {
      "energy": 0.06,
      "water": 0.08,
      "food": 0.26,
      "health": 0.14,
      "security": 0.26
     }
    },
    "rationale": "One of the poorest countries, with a weak government, a history of civil war, very high fertility and most people without electricity; famine or renewed conflict is the main path to collapse."
   },
   {
    "entity": "BOL",
    "si": {
     "collapse": 0.18,
     "abundance": 0.1,
     "pillarLoss": {
      "energy": 0.11,
      "water": 0.08,
      "food": 0.11,
      "health": 0.09,
      "security": 0.1
     }
    },
    "noSi": {
     "collapse": 0.12,
     "abundance": 0.008,
     "pillarLoss": {
      "energy": 0.06,
      "water": 0.05,
      "food": 0.06,
      "health": 0.05,
      "security": 0.06
     }
    },
    "rationale": "Middle income and an energy exporter, but a deep currency and fuel crisis, political volatility, high debt and glacier loss threatening Andean water are the risks; weak institutions limit abundance."
   },
   {
    "entity": "TUN",
    "si": {
     "collapse": 0.18,
     "abundance": 0.11,
     "pillarLoss": {
      "energy": 0.1,
      "water": 0.12,
      "food": 0.11,
      "health": 0.08,
      "security": 0.09
     }
    },
    "noSi": {
     "collapse": 0.12,
     "abundance": 0.008,
     "pillarLoss": {
      "energy": 0.05,
      "water": 0.08,
      "food": 0.06,
      "health": 0.04,
      "security": 0.05
     }
    },
    "rationale": "Severe and worsening water stress, heavy dependence on imported energy and food, high debt and authoritarian drift are the risks; cheap solar and desalination are its best path."
   },
   {
    "entity": "SSD",
    "si": {
     "collapse": 0.6,
     "abundance": 0.02,
     "pillarLoss": {
      "energy": 0.14,
      "water": 0.25,
      "food": 0.45,
      "health": 0.3,
      "security": 0.5
     }
    },
    "noSi": {
     "collapse": 0.63,
     "abundance": 0.001,
     "pillarLoss": {
      "energy": 0.06,
      "water": 0.22,
      "food": 0.45,
      "health": 0.28,
      "security": 0.52
     }
    },
    "rationale": "Recurrent civil war, an almost non-functioning state, oil dependence and repeated famine make another multi-year loss of food or security for most people likely."
   },
   {
    "entity": "BEL",
    "si": {
     "collapse": 0.15,
     "abundance": 0.3,
     "pillarLoss": {
      "energy": 0.1,
      "water": 0.07,
      "food": 0.1,
      "health": 0.09,
      "security": 0.11
     }
    },
    "noSi": {
     "collapse": 0.075,
     "abundance": 0.03,
     "pillarLoss": {
      "energy": 0.045,
      "water": 0.025,
      "food": 0.04,
      "health": 0.035,
      "security": 0.05
     }
    },
    "rationale": "Rich, effective and peaceful, so collapse is mostly global risk; heavy energy imports, an aging population and health costs make near-free essentials unlikely without superintelligence."
   },
   {
    "entity": "HTI",
    "si": {
     "collapse": 0.52,
     "abundance": 0.03,
     "pillarLoss": {
      "energy": 0.15,
      "water": 0.22,
      "food": 0.4,
      "health": 0.28,
      "security": 0.45
     }
    },
    "noSi": {
     "collapse": 0.57,
     "abundance": 0.001,
     "pillarLoss": {
      "energy": 0.1,
      "water": 0.2,
      "food": 0.42,
      "health": 0.27,
      "security": 0.48
     }
    },
    "rationale": "Gangs control much of the capital, half the population is undernourished and the state barely functions, so a lasting loss of security or food for most people is about as likely as not."
   },
   {
    "entity": "JOR",
    "si": {
     "collapse": 0.2,
     "abundance": 0.11,
     "pillarLoss": {
      "energy": 0.1,
      "water": 0.14,
      "food": 0.11,
      "health": 0.08,
      "security": 0.13
     }
    },
    "noSi": {
     "collapse": 0.15,
     "abundance": 0.006,
     "pillarLoss": {
      "energy": 0.05,
      "water": 0.1,
      "food": 0.07,
      "health": 0.04,
      "security": 0.08
     }
    },
    "rationale": "Among the most water-scarce countries, dependent on imported energy and food, heavily indebted and next to regional wars; desalination plus cheap solar could fix water, but the fiscal strain is real."
   },
   {
    "entity": "DOM",
    "si": {
     "collapse": 0.16,
     "abundance": 0.14,
     "pillarLoss": {
      "energy": 0.09,
      "water": 0.07,
      "food": 0.08,
      "health": 0.07,
      "security": 0.09
     }
    },
    "noSi": {
     "collapse": 0.09,
     "abundance": 0.01,
     "pillarLoss": {
      "energy": 0.045,
      "water": 0.03,
      "food": 0.04,
      "health": 0.03,
      "security": 0.04
     }
    },
    "rationale": "Fast-growing and stable, so collapse risk is mostly global; hurricanes, imported energy, a heavy interest bill and poor water services hold back near-free essentials."
   },
   {
    "entity": "ARE",
    "si": {
     "collapse": 0.17,
     "abundance": 0.32,
     "pillarLoss": {
      "energy": 0.1,
      "water": 0.12,
      "food": 0.11,
      "health": 0.08,
      "security": 0.12
     }
    },
    "noSi": {
     "collapse": 0.1,
     "abundance": 0.035,
     "pillarLoss": {
      "energy": 0.05,
      "water": 0.07,
      "food": 0.06,
      "health": 0.03,
      "security": 0.07
     }
    },
    "rationale": "Rich, well run and an early AI adopter with ample energy, but total reliance on desalination and food imports in a hot, volatile Gulf, plus the end of oil income, are the vulnerabilities."
   },
   {
    "entity": "HND",
    "si": {
     "collapse": 0.21,
     "abundance": 0.07,
     "pillarLoss": {
      "energy": 0.09,
      "water": 0.08,
      "food": 0.11,
      "health": 0.09,
      "security": 0.15
     }
    },
    "noSi": {
     "collapse": 0.17,
     "abundance": 0.004,
     "pillarLoss": {
      "energy": 0.05,
      "water": 0.05,
      "food": 0.08,
      "health": 0.06,
      "security": 0.13
     }
    },
    "rationale": "Gang violence, weak institutions, hurricanes and drought in the Dry Corridor are the main risks; low income makes near-free essentials a long shot."
   },
   {
    "entity": "CUB",
    "si": {
     "collapse": 0.5,
     "abundance": 0.05,
     "pillarLoss": {
      "energy": 0.4,
      "water": 0.18,
      "food": 0.3,
      "health": 0.22,
      "security": 0.12
     }
    },
    "noSi": {
     "collapse": 0.48,
     "abundance": 0.003,
     "pillarLoss": {
      "energy": 0.38,
      "water": 0.16,
      "food": 0.28,
      "health": 0.2,
      "security": 0.08
     }
    },
    "rationale": "The grid is failing, with island-wide blackouts and fuel and food shortages as imported oil shrinks, so a five-year loss of reliable electricity for most people may already be under way; a political or economic opening could reverse it."
   },
   {
    "entity": "CZE",
    "si": {
     "collapse": 0.15,
     "abundance": 0.3,
     "pillarLoss": {
      "energy": 0.1,
      "water": 0.07,
      "food": 0.09,
      "health": 0.09,
      "security": 0.11
     }
    },
    "noSi": {
     "collapse": 0.07,
     "abundance": 0.03,
     "pillarLoss": {
      "energy": 0.04,
      "water": 0.025,
      "food": 0.035,
      "health": 0.03,
      "security": 0.045
     }
    },
    "rationale": "Stable, effective and safe with low debt, so collapse is mostly global risk; aging and health spending keep essentials well above 10% of income without superintelligence."
   },
   {
    "entity": "PRT",
    "si": {
     "collapse": 0.15,
     "abundance": 0.28,
     "pillarLoss": {
      "energy": 0.09,
      "water": 0.09,
      "food": 0.09,
      "health": 0.09,
      "security": 0.1
     }
    },
    "noSi": {
     "collapse": 0.07,
     "abundance": 0.025,
     "pillarLoss": {
      "energy": 0.035,
      "water": 0.04,
      "food": 0.035,
      "health": 0.035,
      "security": 0.04
     }
    },
    "rationale": "Peaceful and well governed with strong solar and wind; rising drought, heat and the oldest population in this group are pressures, and near-free essentials depend on superintelligence."
   },
   {
    "entity": "TJK",
    "si": {
     "collapse": 0.22,
     "abundance": 0.07,
     "pillarLoss": {
      "energy": 0.1,
      "water": 0.11,
      "food": 0.13,
      "health": 0.09,
      "security": 0.14
     }
    },
    "noSi": {
     "collapse": 0.17,
     "abundance": 0.004,
     "pillarLoss": {
      "energy": 0.05,
      "water": 0.08,
      "food": 0.1,
      "health": 0.05,
      "security": 0.11
     }
    },
    "rationale": "Poor, authoritarian and dependent on remittances from Russia, beside Afghanistan and reliant on melting glaciers for water and hydropower; a messy succession or regional conflict is the main risk."
   },
   {
    "entity": "PNG",
    "si": {
     "collapse": 0.25,
     "abundance": 0.04,
     "pillarLoss": {
      "energy": 0.1,
      "water": 0.08,
      "food": 0.15,
      "health": 0.13,
      "security": 0.18
     }
    },
    "noSi": {
     "collapse": 0.22,
     "abundance": 0.002,
     "pillarLoss": {
      "energy": 0.04,
      "water": 0.05,
      "food": 0.13,
      "health": 0.1,
      "security": 0.17
     }
    },
    "rationale": "Weak state reach, tribal violence and high undernourishment are the risks, though plentiful water and subsistence farming cushion shocks; abundance is very unlikely."
   },
   {
    "entity": "GRC",
    "si": {
     "collapse": 0.16,
     "abundance": 0.24,
     "pillarLoss": {
      "energy": 0.1,
      "water": 0.09,
      "food": 0.09,
      "health": 0.09,
      "security": 0.11
     }
    },
    "noSi": {
     "collapse": 0.085,
     "abundance": 0.02,
     "pillarLoss": {
      "energy": 0.045,
      "water": 0.045,
      "food": 0.04,
      "health": 0.04,
      "security": 0.05
     }
    },
    "rationale": "Safe and rich enough to avoid collapse barring global catastrophe, but very high debt, water stress, heat and fires and an aging population make cheap essentials hard."
   },
   {
    "entity": "AZE",
    "si": {
     "collapse": 0.19,
     "abundance": 0.13,
     "pillarLoss": {
      "energy": 0.09,
      "water": 0.11,
      "food": 0.1,
      "health": 0.08,
      "security": 0.13
     }
    },
    "noSi": {
     "collapse": 0.13,
     "abundance": 0.008,
     "pillarLoss": {
      "energy": 0.05,
      "water": 0.07,
      "food": 0.06,
      "health": 0.04,
      "security": 0.08
     }
    },
    "rationale": "Oil and gas wealth and low debt give a buffer, but dependence on hydrocarbons, an authoritarian system, water stress and a volatile neighbourhood are the risks."
   },
   {
    "entity": "ISR",
    "si": {
     "collapse": 0.22,
     "abundance": 0.22,
     "pillarLoss": {
      "energy": 0.11,
      "water": 0.08,
      "food": 0.1,
      "health": 0.09,
      "security": 0.17
     }
    },
    "noSi": {
     "collapse": 0.15,
     "abundance": 0.02,
     "pillarLoss": {
      "energy": 0.06,
      "water": 0.04,
      "food": 0.05,
      "health": 0.04,
      "security": 0.12
     }
    },
    "rationale": "Rich, technologically strong and water-secure through desalination, but ongoing wars and regional nuclear rivalry make security the main risk, and defence spending keeps essentials costly."
   },
   {
    "entity": "HUN",
    "si": {
     "collapse": 0.15,
     "abundance": 0.26,
     "pillarLoss": {
      "energy": 0.1,
      "water": 0.06,
      "food": 0.09,
      "health": 0.09,
      "security": 0.11
     }
    },
    "noSi": {
     "collapse": 0.075,
     "abundance": 0.02,
     "pillarLoss": {
      "energy": 0.045,
      "water": 0.02,
      "food": 0.035,
      "health": 0.035,
      "security": 0.045
     }
    },
    "rationale": "A peaceful EU member with good access today; energy import dependence, high interest costs and weaker institutions slightly raise risk and lower the chance of near-free essentials."
   }
  ]
 },
 {
  "id": "rest-4-2026-11-24-1",
  "batch": "rest-4",
  "model": "Claude Opus 5.5",
  "date": "2026-11-24",
  "method": "Independent Claude Code agents reading only the prompt, prompt 2026-11-24.2",
  "entities": [
   {
    "entity": "AUT",
    "si": {
     "collapse": 0.155,
     "abundance": 0.33,
     "pillarLoss": {
      "energy": 0.135,
      "water": 0.125,
      "food": 0.13,
      "health": 0.135,
      "security": 0.14
     }
    },
    "noSi": {
     "collapse": 0.08,
     "abundance": 0.025,
     "pillarLoss": {
      "energy": 0.06,
      "water": 0.05,
      "food": 0.055,
      "health": 0.055,
      "security": 0.06
     }
    },
    "rationale": "Rich, neutral and well governed, so collapse risk is mostly global doom plus a European war or energy shock; near-free essentials need superintelligence to break rising health costs from aging."
   },
   {
    "entity": "CHE",
    "si": {
     "collapse": 0.15,
     "abundance": 0.36,
     "pillarLoss": {
      "energy": 0.13,
      "water": 0.125,
      "food": 0.13,
      "health": 0.13,
      "security": 0.135
     }
    },
    "noSi": {
     "collapse": 0.075,
     "abundance": 0.03,
     "pillarLoss": {
      "energy": 0.055,
      "water": 0.05,
      "food": 0.055,
      "health": 0.052,
      "security": 0.058
     }
    },
    "rationale": "Among the safest and richest places, with low debt and strong institutions; abundance hinges on superintelligence cutting a health bill that is already over a tenth of GDP."
   },
   {
    "entity": "BLR",
    "si": {
     "collapse": 0.22,
     "abundance": 0.15,
     "pillarLoss": {
      "energy": 0.16,
      "water": 0.13,
      "food": 0.14,
      "health": 0.16,
      "security": 0.2
     }
    },
    "noSi": {
     "collapse": 0.17,
     "abundance": 0.005,
     "pillarLoss": {
      "energy": 0.1,
      "water": 0.06,
      "food": 0.07,
      "health": 0.1,
      "security": 0.15
     }
    },
    "rationale": "Basic services are solid, but dependence on Russia, exposure to a Russia-NATO war and an unstable succession after Lukashenko drive the risk; weak governance limits abundance."
   },
   {
    "entity": "SLE",
    "si": {
     "collapse": 0.36,
     "abundance": 0.06,
     "pillarLoss": {
      "energy": 0.16,
      "water": 0.2,
      "food": 0.28,
      "health": 0.25,
      "security": 0.27
     }
    },
    "noSi": {
     "collapse": 0.38,
     "abundance": 0.002,
     "pillarLoss": {
      "energy": 0.1,
      "water": 0.16,
      "food": 0.3,
      "health": 0.24,
      "security": 0.28
     }
    },
    "rationale": "Very poor, food insecure and climate exposed, with a recent civil war and weak state capacity; famine or renewed conflict is the main path to collapse and abundance is remote."
   },
   {
    "entity": "TGO",
    "si": {
     "collapse": 0.33,
     "abundance": 0.07,
     "pillarLoss": {
      "energy": 0.16,
      "water": 0.18,
      "food": 0.24,
      "health": 0.22,
      "security": 0.27
     }
    },
    "noSi": {
     "collapse": 0.34,
     "abundance": 0.002,
     "pillarLoss": {
      "energy": 0.1,
      "water": 0.14,
      "food": 0.24,
      "health": 0.2,
      "security": 0.28
     }
    },
    "rationale": "Jihadist spillover from the Sahel into the north, a closed dynastic regime and fast population growth make insecurity and food the key risks; low income keeps abundance unlikely."
   },
   {
    "entity": "LAO",
    "si": {
     "collapse": 0.22,
     "abundance": 0.11,
     "pillarLoss": {
      "energy": 0.14,
      "water": 0.15,
      "food": 0.18,
      "health": 0.17,
      "security": 0.16
     }
    },
    "noSi": {
     "collapse": 0.19,
     "abundance": 0.004,
     "pillarLoss": {
      "energy": 0.06,
      "water": 0.1,
      "food": 0.15,
      "health": 0.12,
      "security": 0.1
     }
    },
    "rationale": "Politically stable with plentiful hydropower, but heavy external debt, weak health and water systems and Mekong climate stress could erode food and health access."
   },
   {
    "entity": "TKM",
    "si": {
     "collapse": 0.3,
     "abundance": 0.09,
     "pillarLoss": {
      "energy": 0.15,
      "water": 0.25,
      "food": 0.24,
      "health": 0.2,
      "security": 0.2
     }
    },
    "noSi": {
     "collapse": 0.3,
     "abundance": 0.004,
     "pillarLoss": {
      "energy": 0.1,
      "water": 0.24,
      "food": 0.22,
      "health": 0.17,
      "security": 0.17
     }
    },
    "rationale": "Severe water stress on a shrinking Amu Darya, a gas economy facing the energy transition and an opaque autocracy with existing food shortages make water and food the weak points."
   },
   {
    "entity": "HKG",
    "si": {
     "collapse": 0.18,
     "abundance": 0.3,
     "pillarLoss": {
      "energy": 0.14,
      "water": 0.14,
      "food": 0.15,
      "health": 0.14,
      "security": 0.16
     }
    },
    "noSi": {
     "collapse": 0.11,
     "abundance": 0.035,
     "pillarLoss": {
      "energy": 0.07,
      "water": 0.07,
      "food": 0.08,
      "health": 0.065,
      "security": 0.09
     }
    },
    "rationale": "Rich and efficient but dependent on the mainland for water, food and power, so a US-China war over Taiwan is the main risk; extreme aging pushes health costs up unless superintelligence cuts them."
   },
   {
    "entity": "LBY",
    "si": {
     "collapse": 0.45,
     "abundance": 0.07,
     "pillarLoss": {
      "energy": 0.26,
      "water": 0.32,
      "food": 0.28,
      "health": 0.24,
      "security": 0.38
     }
    },
    "noSi": {
     "collapse": 0.47,
     "abundance": 0.002,
     "pillarLoss": {
      "energy": 0.25,
      "water": 0.32,
      "food": 0.28,
      "health": 0.22,
      "security": 0.4
     }
    },
    "rationale": "A divided state with rival governments, extreme water stress on fossil aquifers and an oil income that the energy transition will shrink; renewed civil war or water failure is likely enough to dominate."
   },
   {
    "entity": "KGZ",
    "si": {
     "collapse": 0.23,
     "abundance": 0.11,
     "pillarLoss": {
      "energy": 0.14,
      "water": 0.17,
      "food": 0.16,
      "health": 0.16,
      "security": 0.17
     }
    },
    "noSi": {
     "collapse": 0.21,
     "abundance": 0.004,
     "pillarLoss": {
      "energy": 0.08,
      "water": 0.14,
      "food": 0.12,
      "health": 0.11,
      "security": 0.13
     }
    },
    "rationale": "Repeated upheavals, border clashes and dependence on remittances from Russia, plus glacier loss threatening water and hydropower, set a moderate risk; low income limits abundance."
   },
   {
    "entity": "PRY",
    "si": {
     "collapse": 0.18,
     "abundance": 0.15,
     "pillarLoss": {
      "energy": 0.125,
      "water": 0.13,
      "food": 0.13,
      "health": 0.14,
      "security": 0.155
     }
    },
    "noSi": {
     "collapse": 0.12,
     "abundance": 0.005,
     "pillarLoss": {
      "energy": 0.05,
      "water": 0.06,
      "food": 0.055,
      "health": 0.07,
      "security": 0.09
     }
    },
    "rationale": "A food exporter with abundant hydropower and no water stress, so collapse needs a security breakdown from organized crime; weak health and water services hold back abundance."
   },
   {
    "entity": "NIC",
    "si": {
     "collapse": 0.27,
     "abundance": 0.09,
     "pillarLoss": {
      "energy": 0.15,
      "water": 0.15,
      "food": 0.19,
      "health": 0.18,
      "security": 0.23
     }
    },
    "noSi": {
     "collapse": 0.25,
     "abundance": 0.003,
     "pillarLoss": {
      "energy": 0.09,
      "water": 0.1,
      "food": 0.15,
      "health": 0.13,
      "security": 0.21
     }
    },
    "rationale": "A repressive regime facing a fragile succession, high hunger and hurricane exposure make civil conflict and food the main risks; poverty and isolation keep abundance unlikely."
   },
   {
    "entity": "SRB",
    "si": {
     "collapse": 0.17,
     "abundance": 0.2,
     "pillarLoss": {
      "energy": 0.13,
      "water": 0.125,
      "food": 0.125,
      "health": 0.135,
      "security": 0.15
     }
    },
    "noSi": {
     "collapse": 0.12,
     "abundance": 0.008,
     "pillarLoss": {
      "energy": 0.07,
      "water": 0.06,
      "food": 0.055,
      "health": 0.07,
      "security": 0.09
     }
    },
    "rationale": "Middle income and food secure, but Kosovo tensions, political unrest and fast aging add some risk; abundance needs superintelligence gains to reach a non-EU, mid-governance state."
   },
   {
    "entity": "COG",
    "si": {
     "collapse": 0.37,
     "abundance": 0.07,
     "pillarLoss": {
      "energy": 0.16,
      "water": 0.18,
      "food": 0.27,
      "health": 0.25,
      "security": 0.29
     }
    },
    "noSi": {
     "collapse": 0.38,
     "abundance": 0.002,
     "pillarLoss": {
      "energy": 0.1,
      "water": 0.14,
      "food": 0.28,
      "health": 0.24,
      "security": 0.3
     }
    },
    "rationale": "An oil state with very weak governance, high debt, widespread hunger and a history of civil war; falling oil income could trigger state failure, so abundance is remote."
   },
   {
    "entity": "BGR",
    "si": {
     "collapse": 0.16,
     "abundance": 0.22,
     "pillarLoss": {
      "energy": 0.13,
      "water": 0.125,
      "food": 0.125,
      "health": 0.135,
      "security": 0.145
     }
    },
    "noSi": {
     "collapse": 0.1,
     "abundance": 0.01,
     "pillarLoss": {
      "energy": 0.065,
      "water": 0.05,
      "food": 0.05,
      "health": 0.065,
      "security": 0.075
     }
    },
    "rationale": "EU and NATO membership and low debt keep collapse risk near the global floor; depopulation, Black Sea exposure and weaker governance keep abundance below western Europe's."
   },
   {
    "entity": "SLV",
    "si": {
     "collapse": 0.24,
     "abundance": 0.13,
     "pillarLoss": {
      "energy": 0.14,
      "water": 0.18,
      "food": 0.18,
      "health": 0.16,
      "security": 0.2
     }
    },
    "noSi": {
     "collapse": 0.22,
     "abundance": 0.005,
     "pillarLoss": {
      "energy": 0.08,
      "water": 0.14,
      "food": 0.14,
      "health": 0.11,
      "security": 0.17
     }
    },
    "rationale": "Security gains rest on one strongman's crackdown and could reverse, while rising water stress in the Dry Corridor and a heavy interest burden threaten food and water."
   },
   {
    "entity": "SGP",
    "si": {
     "collapse": 0.17,
     "abundance": 0.38,
     "pillarLoss": {
      "energy": 0.145,
      "water": 0.14,
      "food": 0.15,
      "health": 0.13,
      "security": 0.155
     }
    },
    "noSi": {
     "collapse": 0.1,
     "abundance": 0.05,
     "pillarLoss": {
      "energy": 0.075,
      "water": 0.065,
      "food": 0.075,
      "health": 0.055,
      "security": 0.08
     }
    },
    "rationale": "Superb state capacity and very high income make it a prime abundance candidate, but it imports almost all food and energy, so a regional war cutting shipping lanes is the main risk."
   },
   {
    "entity": "DNK",
    "si": {
     "collapse": 0.155,
     "abundance": 0.35,
     "pillarLoss": {
      "energy": 0.13,
      "water": 0.125,
      "food": 0.125,
      "health": 0.13,
      "security": 0.145
     }
    },
    "noSi": {
     "collapse": 0.08,
     "abundance": 0.03,
     "pillarLoss": {
      "energy": 0.055,
      "water": 0.05,
      "food": 0.05,
      "health": 0.055,
      "security": 0.07
     }
    },
    "rationale": "Rich, cohesive and food exporting, with risk mainly from global doom or a Baltic war; near-free essentials need superintelligence to offset health and rising defence costs."
   },
   {
    "entity": "LBN",
    "si": {
     "collapse": 0.4,
     "abundance": 0.1,
     "pillarLoss": {
      "energy": 0.26,
      "water": 0.3,
      "food": 0.25,
      "health": 0.22,
      "security": 0.34
     }
    },
    "noSi": {
     "collapse": 0.41,
     "abundance": 0.003,
     "pillarLoss": {
      "energy": 0.25,
      "water": 0.3,
      "food": 0.24,
      "health": 0.21,
      "security": 0.35
     }
    },
    "rationale": "Already in financial and state collapse, with grid power replaced by private generators, maximum water stress and recurring war with Israel; another prolonged conflict is quite likely."
   },
   {
    "entity": "LBR",
    "si": {
     "collapse": 0.4,
     "abundance": 0.05,
     "pillarLoss": {
      "energy": 0.16,
      "water": 0.2,
      "food": 0.32,
      "health": 0.27,
      "security": 0.29
     }
    },
    "noSi": {
     "collapse": 0.42,
     "abundance": 0.002,
     "pillarLoss": {
      "energy": 0.1,
      "water": 0.16,
      "food": 0.34,
      "health": 0.26,
      "security": 0.3
     }
    },
    "rationale": "Among the poorest countries, with over a third undernourished, a weak state and a civil war in living memory; famine or renewed conflict dominates and abundance is very unlikely."
   }
  ]
 },
 {
  "id": "rest-5-2026-11-24-1",
  "batch": "rest-5",
  "model": "Claude Opus 5.5",
  "date": "2026-11-24",
  "method": "Independent Claude Code agents reading only the prompt, prompt 2026-11-24.2",
  "entities": [
   {
    "entity": "FIN",
    "si": {
     "collapse": 0.165,
     "abundance": 0.32,
     "pillarLoss": {
      "energy": 0.125,
      "water": 0.115,
      "food": 0.12,
      "health": 0.125,
      "security": 0.145
     }
    },
    "noSi": {
     "collapse": 0.09,
     "abundance": 0.03,
     "pillarLoss": {
      "energy": 0.052,
      "water": 0.045,
      "food": 0.05,
      "health": 0.052,
      "security": 0.075
     }
    },
    "rationale": "Rich, very well governed and water-secure, so local collapse is unlikely; the main local risk is a war with Russia on its long border. Near-free essentials need superintelligence, because an ageing population keeps health costs high."
   },
   {
    "entity": "CAF",
    "si": {
     "collapse": 0.44,
     "abundance": 0.05,
     "pillarLoss": {
      "energy": 0.13,
      "water": 0.15,
      "food": 0.28,
      "health": 0.25,
      "security": 0.36
     }
    },
    "noSi": {
     "collapse": 0.45,
     "abundance": 0.002,
     "pillarLoss": {
      "energy": 0.12,
      "water": 0.15,
      "food": 0.3,
      "health": 0.26,
      "security": 0.38
     }
    },
    "rationale": "Recurring civil war, a very weak state, widespread hunger and fast population growth make a renewed country-wide breakdown in security or food quite likely. Abundance would need outside abundance spreading in, which is only plausible with superintelligence."
   },
   {
    "entity": "OMN",
    "si": {
     "collapse": 0.2,
     "abundance": 0.2,
     "pillarLoss": {
      "energy": 0.14,
      "water": 0.16,
      "food": 0.15,
      "health": 0.13,
      "security": 0.16
     }
    },
    "noSi": {
     "collapse": 0.15,
     "abundance": 0.015,
     "pillarLoss": {
      "energy": 0.08,
      "water": 0.1,
      "food": 0.09,
      "health": 0.07,
      "security": 0.1
     }
    },
    "rationale": "Water depends entirely on desalination and food mostly on imports, with extreme heat, the Gulf war risk and the end of oil revenues as the stresses. Cheap solar power makes desalination and cooling affordable if the economy adapts."
   },
   {
    "entity": "IRL",
    "si": {
     "collapse": 0.15,
     "abundance": 0.34,
     "pillarLoss": {
      "energy": 0.13,
      "water": 0.112,
      "food": 0.115,
      "health": 0.12,
      "security": 0.125
     }
    },
    "noSi": {
     "collapse": 0.075,
     "abundance": 0.045,
     "pillarLoss": {
      "energy": 0.055,
      "water": 0.042,
      "food": 0.045,
      "health": 0.048,
      "security": 0.045
     }
    },
    "rationale": "A peaceful, wealthy island where global doom is the main collapse path; its heavy reliance on energy imports is the main local weakness. Its very high income makes the under-10% cost test easier to pass than for most countries."
   },
   {
    "entity": "SVK",
    "si": {
     "collapse": 0.175,
     "abundance": 0.25,
     "pillarLoss": {
      "energy": 0.135,
      "water": 0.115,
      "food": 0.12,
      "health": 0.13,
      "security": 0.15
     }
    },
    "noSi": {
     "collapse": 0.1,
     "abundance": 0.015,
     "pillarLoss": {
      "energy": 0.06,
      "water": 0.045,
      "food": 0.05,
      "health": 0.055,
      "security": 0.075
     }
    },
    "rationale": "EU and NATO membership protects it, but it borders Ukraine, depends on imported energy and has middling governance. Abundance tracks how quickly superintelligence-driven productivity reaches Central Europe."
   },
   {
    "entity": "PSE",
    "si": {
     "collapse": 0.55,
     "abundance": 0.04,
     "pillarLoss": {
      "energy": 0.3,
      "water": 0.38,
      "food": 0.33,
      "health": 0.33,
      "security": 0.5
     }
    },
    "noSi": {
     "collapse": 0.55,
     "abundance": 0.002,
     "pillarLoss": {
      "energy": 0.28,
      "water": 0.38,
      "food": 0.32,
      "health": 0.32,
      "security": 0.5
     }
    },
    "rationale": "Gaza's essentials have already broken down, and a lasting escalation in the West Bank would push a majority of Palestinians past the collapse line. Occupation, water scarcity and dependence on outside supplies leave little control over the essentials."
   },
   {
    "entity": "NZL",
    "si": {
     "collapse": 0.145,
     "abundance": 0.33,
     "pillarLoss": {
      "energy": 0.12,
      "water": 0.11,
      "food": 0.11,
      "health": 0.12,
      "security": 0.12
     }
    },
    "noSi": {
     "collapse": 0.065,
     "abundance": 0.03,
     "pillarLoss": {
      "energy": 0.048,
      "water": 0.042,
      "food": 0.042,
      "health": 0.048,
      "security": 0.045
     }
    },
    "rationale": "Remote, peaceful, a food exporter with plenty of water and renewable power, so global doom is almost the only path to collapse. Earthquakes and volcanoes are the local tail risks."
   },
   {
    "entity": "MRT",
    "si": {
     "collapse": 0.31,
     "abundance": 0.07,
     "pillarLoss": {
      "energy": 0.14,
      "water": 0.2,
      "food": 0.22,
      "health": 0.17,
      "security": 0.22
     }
    },
    "noSi": {
     "collapse": 0.31,
     "abundance": 0.003,
     "pillarLoss": {
      "energy": 0.12,
      "water": 0.18,
      "food": 0.22,
      "health": 0.15,
      "security": 0.21
     }
    },
    "rationale": "A Sahel desert country exposed to drought, food shortages and spillover from Mali's jihadist wars, with weak state capacity. Its large solar and hydrogen potential is the main path upward."
   },
   {
    "entity": "CRI",
    "si": {
     "collapse": 0.175,
     "abundance": 0.2,
     "pillarLoss": {
      "energy": 0.12,
      "water": 0.12,
      "food": 0.12,
      "health": 0.125,
      "security": 0.15
     }
    },
    "noSi": {
     "collapse": 0.11,
     "abundance": 0.008,
     "pillarLoss": {
      "energy": 0.05,
      "water": 0.055,
      "food": 0.05,
      "health": 0.055,
      "security": 0.08
     }
    },
    "rationale": "A stable democracy with a renewable grid and good health outcomes; rising drug violence and a heavy interest bill are the main local stresses. Abundance needs superintelligence to raise incomes well beyond the middle range."
   },
   {
    "entity": "KWT",
    "si": {
     "collapse": 0.2,
     "abundance": 0.22,
     "pillarLoss": {
      "energy": 0.14,
      "water": 0.16,
      "food": 0.15,
      "health": 0.13,
      "security": 0.17
     }
    },
    "noSi": {
     "collapse": 0.16,
     "abundance": 0.015,
     "pillarLoss": {
      "energy": 0.09,
      "water": 0.11,
      "food": 0.09,
      "health": 0.07,
      "security": 0.12
     }
    },
    "rationale": "Rich, but it relies on desalinated water, imported food and air conditioning in some of the world's hottest summers, beside Iraq and Iran. The oil revenues that pay for its subsidies are likely to shrink by 2100."
   },
   {
    "entity": "PAN",
    "si": {
     "collapse": 0.18,
     "abundance": 0.17,
     "pillarLoss": {
      "energy": 0.125,
      "water": 0.13,
      "food": 0.125,
      "health": 0.125,
      "security": 0.14
     }
    },
    "noSi": {
     "collapse": 0.12,
     "abundance": 0.006,
     "pillarLoss": {
      "energy": 0.055,
      "water": 0.07,
      "food": 0.055,
      "health": 0.055,
      "security": 0.08
     }
    },
    "rationale": "Fairly rich and stable, but interest takes almost 30% of state revenue, the country is very unequal, and droughts already threaten the canal's water supply. These limit how cheap the essentials can become."
   },
   {
    "entity": "GEO",
    "si": {
     "collapse": 0.23,
     "abundance": 0.13,
     "pillarLoss": {
      "energy": 0.14,
      "water": 0.125,
      "food": 0.13,
      "health": 0.14,
      "security": 0.21
     }
    },
    "noSi": {
     "collapse": 0.17,
     "abundance": 0.004,
     "pillarLoss": {
      "energy": 0.07,
      "water": 0.05,
      "food": 0.055,
      "health": 0.06,
      "security": 0.15
     }
    },
    "rationale": "Russia occupies part of its territory and invaded in 2008, and domestic politics are unstable, so security is the main collapse risk. Life expectancy is near the 75-year line and many people lack safe water."
   },
   {
    "entity": "HRV",
    "si": {
     "collapse": 0.16,
     "abundance": 0.25,
     "pillarLoss": {
      "energy": 0.125,
      "water": 0.115,
      "food": 0.12,
      "health": 0.125,
      "security": 0.13
     }
    },
    "noSi": {
     "collapse": 0.09,
     "abundance": 0.012,
     "pillarLoss": {
      "energy": 0.055,
      "water": 0.045,
      "food": 0.048,
      "health": 0.055,
      "security": 0.06
     }
    },
    "rationale": "EU, eurozone and NATO membership and ample water make local collapse unlikely; rapid ageing and imported energy are the main pressures. Abundance depends on superintelligence making health care and energy cheap."
   },
   {
    "entity": "ERI",
    "si": {
     "collapse": 0.38,
     "abundance": 0.04,
     "pillarLoss": {
      "energy": 0.14,
      "water": 0.22,
      "food": 0.27,
      "health": 0.18,
      "security": 0.3
     }
    },
    "noSi": {
     "collapse": 0.38,
     "abundance": 0.002,
     "pillarLoss": {
      "energy": 0.12,
      "water": 0.22,
      "food": 0.28,
      "health": 0.17,
      "security": 0.31
     }
    },
    "rationale": "A closed, repressive state with indefinite conscription, a live risk of war with Ethiopia over sea access, and drought-prone farming. Food and security are the most likely essentials to fail."
   },
   {
    "entity": "MNG",
    "si": {
     "collapse": 0.2,
     "abundance": 0.13,
     "pillarLoss": {
      "energy": 0.15,
      "water": 0.14,
      "food": 0.14,
      "health": 0.13,
      "security": 0.15
     }
    },
    "noSi": {
     "collapse": 0.14,
     "abundance": 0.004,
     "pillarLoss": {
      "energy": 0.08,
      "water": 0.07,
      "food": 0.07,
      "health": 0.06,
      "security": 0.08
     }
    },
    "rationale": "Bitter winters make heating essential, safe water reaches fewer than half of residents, and the country sits between Russia and China. Mining wealth and a stable democracy help, but governance is weak."
   },
   {
    "entity": "URY",
    "si": {
     "collapse": 0.165,
     "abundance": 0.22,
     "pillarLoss": {
      "energy": 0.12,
      "water": 0.12,
      "food": 0.115,
      "health": 0.12,
      "security": 0.14
     }
    },
    "noSi": {
     "collapse": 0.09,
     "abundance": 0.01,
     "pillarLoss": {
      "energy": 0.048,
      "water": 0.055,
      "food": 0.045,
      "health": 0.05,
      "security": 0.065
     }
    },
    "rationale": "Very stable politics, a renewable grid and large food surpluses make collapse unlikely; rising crime and droughts like Montevideo's 2023 water crisis are the weak points."
   },
   {
    "entity": "PRI",
    "si": {
     "collapse": 0.18,
     "abundance": 0.25,
     "pillarLoss": {
      "energy": 0.15,
      "water": 0.13,
      "food": 0.125,
      "health": 0.13,
      "security": 0.13
     }
    },
    "noSi": {
     "collapse": 0.14,
     "abundance": 0.01,
     "pillarLoss": {
      "energy": 0.1,
      "water": 0.06,
      "food": 0.055,
      "health": 0.065,
      "security": 0.06
     }
    },
    "rationale": "The US connection gives a strong backstop and access to US abundance if it comes, but the fragile grid, stronger hurricanes, a shrinking and ageing population and past bankruptcy make long energy failures the main risk."
   },
   {
    "entity": "BIH",
    "si": {
     "collapse": 0.2,
     "abundance": 0.14,
     "pillarLoss": {
      "energy": 0.13,
      "water": 0.12,
      "food": 0.125,
      "health": 0.13,
      "security": 0.18
     }
    },
    "noSi": {
     "collapse": 0.14,
     "abundance": 0.005,
     "pillarLoss": {
      "energy": 0.06,
      "water": 0.05,
      "food": 0.055,
      "health": 0.06,
      "security": 0.11
     }
    },
    "rationale": "Ethnic divisions and secession pressure from Republika Srpska keep a security breakdown possible, and emigration and ageing weaken the state. A path to the EU is its main stabiliser."
   },
   {
    "entity": "NAM",
    "si": {
     "collapse": 0.235,
     "abundance": 0.1,
     "pillarLoss": {
      "energy": 0.14,
      "water": 0.19,
      "food": 0.19,
      "health": 0.16,
      "security": 0.14
     }
    },
    "noSi": {
     "collapse": 0.21,
     "abundance": 0.003,
     "pillarLoss": {
      "energy": 0.08,
      "water": 0.15,
      "food": 0.16,
      "health": 0.12,
      "security": 0.08
     }
    },
    "rationale": "Peaceful and fairly well run, but it is one of Africa's driest countries, with frequent droughts, widespread hunger and low life expectancy, so water and food are the weak essentials. Its solar and hydrogen potential is a real upside."
   },
   {
    "entity": "ARM",
    "si": {
     "collapse": 0.225,
     "abundance": 0.13,
     "pillarLoss": {
      "energy": 0.14,
      "water": 0.14,
      "food": 0.13,
      "health": 0.13,
      "security": 0.2
     }
    },
    "noSi": {
     "collapse": 0.17,
     "abundance": 0.004,
     "pillarLoss": {
      "energy": 0.07,
      "water": 0.07,
      "food": 0.06,
      "health": 0.055,
      "security": 0.14
     }
    },
    "rationale": "Hostile neighbours and the 2023 loss of Nagorno-Karabakh make security the dominant risk, even with the 2025 peace framework. Imported energy, high water stress and a heavy interest bill add strain."
   }
  ]
 },
 {
  "id": "rest-6-2026-11-24-1",
  "batch": "rest-6",
  "model": "Claude Opus 5.5",
  "date": "2026-11-24",
  "method": "Independent Claude Code agents reading only the prompt, prompt 2026-11-24.2",
  "entities": [
   {
    "entity": "QAT",
    "si": {
     "collapse": 0.21,
     "abundance": 0.27,
     "pillarLoss": {
      "energy": 0.14,
      "water": 0.16,
      "food": 0.15,
      "health": 0.14,
      "security": 0.18
     }
    },
    "noSi": {
     "collapse": 0.14,
     "abundance": 0.05,
     "pillarLoss": {
      "energy": 0.07,
      "water": 0.09,
      "food": 0.08,
      "health": 0.06,
      "security": 0.1
     }
    },
    "rationale": "Great wealth and a small population make near-free essentials plausible if AI and solar desalination push costs down. The main collapse paths are total reliance on desalination and imported food, extreme heat, a mostly migrant population and Gulf war risk involving Iran."
   },
   {
    "entity": "LTU",
    "si": {
     "collapse": 0.18,
     "abundance": 0.26,
     "pillarLoss": {
      "energy": 0.14,
      "water": 0.13,
      "food": 0.13,
      "health": 0.14,
      "security": 0.16
     }
    },
    "noSi": {
     "collapse": 0.11,
     "abundance": 0.02,
     "pillarLoss": {
      "energy": 0.06,
      "water": 0.05,
      "food": 0.05,
      "health": 0.06,
      "security": 0.09
     }
    },
    "rationale": "A rich, well-governed EU and NATO member whose main collapse risk is Russian military aggression. Rapid aging and very low fertility push health costs up, so near-free essentials are unlikely without superintelligence."
   },
   {
    "entity": "JAM",
    "si": {
     "collapse": 0.23,
     "abundance": 0.12,
     "pillarLoss": {
      "energy": 0.15,
      "water": 0.14,
      "food": 0.16,
      "health": 0.15,
      "security": 0.18
     }
    },
    "noSi": {
     "collapse": 0.17,
     "abundance": 0.006,
     "pillarLoss": {
      "energy": 0.08,
      "water": 0.07,
      "food": 0.09,
      "health": 0.08,
      "security": 0.12
     }
    },
    "rationale": "Hurricanes, sea-level rise, imported energy and very high gang violence are the main risks. Middling income and heavy debt service make near-free essentials unlikely without superintelligence."
   },
   {
    "entity": "GMB",
    "si": {
     "collapse": 0.32,
     "abundance": 0.06,
     "pillarLoss": {
      "energy": 0.17,
      "water": 0.17,
      "food": 0.22,
      "health": 0.2,
      "security": 0.19
     }
    },
    "noSi": {
     "collapse": 0.28,
     "abundance": 0.002,
     "pillarLoss": {
      "energy": 0.12,
      "water": 0.11,
      "food": 0.18,
      "health": 0.15,
      "security": 0.13
     }
    },
    "rationale": "Very poor, fast-growing and climate-exposed, with high food insecurity and coastal flooding risk. Abundance depends on superintelligence-driven technology reaching a country with weak state capacity."
   },
   {
    "entity": "GAB",
    "si": {
     "collapse": 0.29,
     "abundance": 0.08,
     "pillarLoss": {
      "energy": 0.16,
      "water": 0.15,
      "food": 0.19,
      "health": 0.18,
      "security": 0.19
     }
    },
    "noSi": {
     "collapse": 0.24,
     "abundance": 0.004,
     "pillarLoss": {
      "energy": 0.1,
      "water": 0.09,
      "food": 0.15,
      "health": 0.12,
      "security": 0.14
     }
    },
    "rationale": "A middle-income oil exporter with plenty of water, but high undernourishment, recent military rule, weak governance and declining oil revenue threaten food and security."
   },
   {
    "entity": "BWA",
    "si": {
     "collapse": 0.25,
     "abundance": 0.11,
     "pillarLoss": {
      "energy": 0.14,
      "water": 0.18,
      "food": 0.17,
      "health": 0.16,
      "security": 0.15
     }
    },
    "noSi": {
     "collapse": 0.19,
     "abundance": 0.006,
     "pillarLoss": {
      "energy": 0.08,
      "water": 0.12,
      "food": 0.11,
      "health": 0.1,
      "security": 0.07
     }
    },
    "rationale": "One of Africa's most stable democracies with low debt, but severe water stress and drought, HIV, and a diamond economy squeezed by lab-grown stones are the key risks."
   },
   {
    "entity": "LSO",
    "si": {
     "collapse": 0.36,
     "abundance": 0.05,
     "pillarLoss": {
      "energy": 0.18,
      "water": 0.18,
      "food": 0.24,
      "health": 0.24,
      "security": 0.2
     }
    },
    "noSi": {
     "collapse": 0.32,
     "abundance": 0.002,
     "pillarLoss": {
      "energy": 0.12,
      "water": 0.12,
      "food": 0.2,
      "health": 0.2,
      "security": 0.14
     }
    },
    "rationale": "Very low life expectancy, HIV, deep poverty and chronic food insecurity, with near-total economic dependence on South Africa and weak governance."
   },
   {
    "entity": "MDA",
    "si": {
     "collapse": 0.23,
     "abundance": 0.13,
     "pillarLoss": {
      "energy": 0.16,
      "water": 0.13,
      "food": 0.13,
      "health": 0.15,
      "security": 0.19
     }
    },
    "noSi": {
     "collapse": 0.16,
     "abundance": 0.006,
     "pillarLoss": {
      "energy": 0.1,
      "water": 0.06,
      "food": 0.06,
      "health": 0.08,
      "security": 0.12
     }
    },
    "rationale": "Russian pressure, Transnistria and heavy energy-import dependence are the main collapse paths. EU integration helps, but low income, aging and emigration make near-free essentials unlikely without superintelligence."
   },
   {
    "entity": "ALB",
    "si": {
     "collapse": 0.18,
     "abundance": 0.18,
     "pillarLoss": {
      "energy": 0.13,
      "water": 0.14,
      "food": 0.13,
      "health": 0.14,
      "security": 0.15
     }
    },
    "noSi": {
     "collapse": 0.11,
     "abundance": 0.01,
     "pillarLoss": {
      "energy": 0.05,
      "water": 0.07,
      "food": 0.05,
      "health": 0.06,
      "security": 0.07
     }
    },
    "rationale": "Long life expectancy, peace and hydropower are strengths. Water stress and drought hitting hydropower, emigration and middling income limit the chance of near-free essentials."
   },
   {
    "entity": "GNB",
    "si": {
     "collapse": 0.43,
     "abundance": 0.04,
     "pillarLoss": {
      "energy": 0.2,
      "water": 0.2,
      "food": 0.28,
      "health": 0.25,
      "security": 0.28
     }
    },
    "noSi": {
     "collapse": 0.4,
     "abundance": 0.001,
     "pillarLoss": {
      "energy": 0.14,
      "water": 0.14,
      "food": 0.24,
      "health": 0.2,
      "security": 0.24
     }
    },
    "rationale": "Repeated coups, a very weak government, drug-trafficking networks, low-lying coasts and extreme poverty make collapse a serious risk. Abundance would need outside technology to reach it."
   },
   {
    "entity": "SVN",
    "si": {
     "collapse": 0.155,
     "abundance": 0.3,
     "pillarLoss": {
      "energy": 0.13,
      "water": 0.125,
      "food": 0.13,
      "health": 0.135,
      "security": 0.14
     }
    },
    "noSi": {
     "collapse": 0.075,
     "abundance": 0.02,
     "pillarLoss": {
      "energy": 0.05,
      "water": 0.045,
      "food": 0.05,
      "health": 0.055,
      "security": 0.055
     }
    },
    "rationale": "A peaceful, rich, water-rich EU member with strong institutions, so collapse risk is close to the global floor. Rapid aging raises health costs, so near-free essentials mostly depend on superintelligence."
   },
   {
    "entity": "GNQ",
    "si": {
     "collapse": 0.37,
     "abundance": 0.05,
     "pillarLoss": {
      "energy": 0.18,
      "water": 0.18,
      "food": 0.22,
      "health": 0.23,
      "security": 0.24
     }
    },
    "noSi": {
     "collapse": 0.33,
     "abundance": 0.002,
     "pillarLoss": {
      "energy": 0.13,
      "water": 0.13,
      "food": 0.18,
      "health": 0.19,
      "security": 0.2
     }
    },
    "rationale": "Oil wealth is captured by a personalist regime with extremely weak readiness to adapt. Oil depletion and a likely succession crisis threaten health, food and security for a poor majority."
   },
   {
    "entity": "LVA",
    "si": {
     "collapse": 0.185,
     "abundance": 0.24,
     "pillarLoss": {
      "energy": 0.14,
      "water": 0.13,
      "food": 0.13,
      "health": 0.14,
      "security": 0.165
     }
    },
    "noSi": {
     "collapse": 0.115,
     "abundance": 0.015,
     "pillarLoss": {
      "energy": 0.06,
      "water": 0.05,
      "food": 0.05,
      "health": 0.06,
      "security": 0.095
     }
    },
    "rationale": "A rich EU and NATO member with ample water, but a Russian border, a large Russian-speaking minority and fast population decline. Russian aggression is the main collapse path and aging health costs block near-free essentials without superintelligence."
   },
   {
    "entity": "MKD",
    "si": {
     "collapse": 0.19,
     "abundance": 0.16,
     "pillarLoss": {
      "energy": 0.14,
      "water": 0.14,
      "food": 0.13,
      "health": 0.15,
      "security": 0.15
     }
    },
    "noSi": {
     "collapse": 0.12,
     "abundance": 0.008,
     "pillarLoss": {
      "energy": 0.07,
      "water": 0.07,
      "food": 0.05,
      "health": 0.07,
      "security": 0.07
     }
    },
    "rationale": "Peaceful but middle-income, with rising water stress, energy import dependence, weak government effectiveness, emigration and lingering ethnic tensions."
   },
   {
    "entity": "BHR",
    "si": {
     "collapse": 0.26,
     "abundance": 0.17,
     "pillarLoss": {
      "energy": 0.15,
      "water": 0.19,
      "food": 0.17,
      "health": 0.15,
      "security": 0.21
     }
    },
    "noSi": {
     "collapse": 0.2,
     "abundance": 0.02,
     "pillarLoss": {
      "energy": 0.08,
      "water": 0.13,
      "food": 0.11,
      "health": 0.07,
      "security": 0.15
     }
    },
    "rationale": "Rich but reliant on desalination and imported food, with very high public debt, dwindling oil, sectarian tension, sea-level exposure and proximity to any Iran conflict."
   },
   {
    "entity": "TLS",
    "si": {
     "collapse": 0.3,
     "abundance": 0.07,
     "pillarLoss": {
      "energy": 0.17,
      "water": 0.16,
      "food": 0.21,
      "health": 0.19,
      "security": 0.18
     }
    },
    "noSi": {
     "collapse": 0.25,
     "abundance": 0.003,
     "pillarLoss": {
      "energy": 0.11,
      "water": 0.1,
      "food": 0.17,
      "health": 0.13,
      "security": 0.12
     }
    },
    "rationale": "Peaceful now with almost no debt, but the petroleum fund that pays for the state is being drawn down, while food insecurity, poverty and weak governance remain."
   },
   {
    "entity": "CYP",
    "si": {
     "collapse": 0.17,
     "abundance": 0.25,
     "pillarLoss": {
      "energy": 0.13,
      "water": 0.14,
      "food": 0.13,
      "health": 0.13,
      "security": 0.15
     }
    },
    "noSi": {
     "collapse": 0.1,
     "abundance": 0.02,
     "pillarLoss": {
      "energy": 0.06,
      "water": 0.07,
      "food": 0.05,
      "health": 0.05,
      "security": 0.07
     }
    },
    "rationale": "A rich EU member facing extreme water stress, heat and a frozen conflict with Turkey near a volatile region. Desalination and cheap solar limit collapse risk, and superintelligence could make essentials near-free."
   },
   {
    "entity": "TTO",
    "si": {
     "collapse": 0.22,
     "abundance": 0.14,
     "pillarLoss": {
      "energy": 0.14,
      "water": 0.15,
      "food": 0.15,
      "health": 0.14,
      "security": 0.17
     }
    },
    "noSi": {
     "collapse": 0.15,
     "abundance": 0.008,
     "pillarLoss": {
      "energy": 0.07,
      "water": 0.08,
      "food": 0.08,
      "health": 0.07,
      "security": 0.1
     }
    },
    "rationale": "An upper-income gas exporter facing gas depletion, high debt and very high violent crime, with spillover risk from Venezuela."
   },
   {
    "entity": "EST",
    "si": {
     "collapse": 0.17,
     "abundance": 0.3,
     "pillarLoss": {
      "energy": 0.13,
      "water": 0.125,
      "food": 0.13,
      "health": 0.135,
      "security": 0.155
     }
    },
    "noSi": {
     "collapse": 0.1,
     "abundance": 0.025,
     "pillarLoss": {
      "energy": 0.05,
      "water": 0.045,
      "food": 0.05,
      "health": 0.055,
      "security": 0.085
     }
    },
    "rationale": "The best-governed and least indebted Baltic state, with a digital government that could adopt AI quickly. Russian aggression is the main collapse risk and aging health costs block near-free essentials without superintelligence."
   },
   {
    "entity": "SWZ",
    "si": {
     "collapse": 0.34,
     "abundance": 0.06,
     "pillarLoss": {
      "energy": 0.17,
      "water": 0.17,
      "food": 0.21,
      "health": 0.22,
      "security": 0.22
     }
    },
    "noSi": {
     "collapse": 0.29,
     "abundance": 0.002,
     "pillarLoss": {
      "energy": 0.11,
      "water": 0.11,
      "food": 0.17,
      "health": 0.17,
      "security": 0.17
     }
    },
    "rationale": "An absolute monarchy with recent violent unrest, very high HIV, low life expectancy, food insecurity and heavy dependence on South Africa."
   }
  ]
 },
 {
  "id": "rest-7-2026-11-24-1",
  "batch": "rest-7",
  "model": "Claude Opus 5.5",
  "date": "2026-11-24",
  "method": "Independent Claude Code agents reading only the prompt, prompt 2026-11-24.2",
  "entities": [
   {
    "entity": "MUS",
    "si": {
     "collapse": 0.165,
     "abundance": 0.14,
     "pillarLoss": {
      "energy": 0.13,
      "water": 0.13,
      "food": 0.14,
      "health": 0.14,
      "security": 0.13
     }
    },
    "noSi": {
     "collapse": 0.09,
     "abundance": 0.01,
     "pillarLoss": {
      "energy": 0.05,
      "water": 0.06,
      "food": 0.06,
      "health": 0.06,
      "security": 0.05
     }
    },
    "rationale": "Stable, peaceful middle-income island with good institutions; main local risks are cyclones, imported food and fuel, and debt, so collapse is mostly the global floor and near-free essentials need cheap global supply from superintelligence."
   },
   {
    "entity": "DJI",
    "si": {
     "collapse": 0.3,
     "abundance": 0.05,
     "pillarLoss": {
      "energy": 0.16,
      "water": 0.2,
      "food": 0.2,
      "health": 0.16,
      "security": 0.21
     }
    },
    "noSi": {
     "collapse": 0.25,
     "abundance": 0.003,
     "pillarLoss": {
      "energy": 0.1,
      "water": 0.16,
      "food": 0.15,
      "health": 0.1,
      "security": 0.15
     }
    },
    "rationale": "Extreme heat, scarce water, near-total food imports and a volatile Horn of Africa neighbourhood with weak governance make a long loss of water, food or security plausible; foreign bases and port income are the main buffers."
   },
   {
    "entity": "FJI",
    "si": {
     "collapse": 0.2,
     "abundance": 0.07,
     "pillarLoss": {
      "energy": 0.14,
      "water": 0.15,
      "food": 0.14,
      "health": 0.15,
      "security": 0.15
     }
    },
    "noSi": {
     "collapse": 0.14,
     "abundance": 0.003,
     "pillarLoss": {
      "energy": 0.07,
      "water": 0.08,
      "food": 0.07,
      "health": 0.08,
      "security": 0.08
     }
    },
    "rationale": "Currently stable but with a coup history, cyclones, sea-level rise and weak water and health outcomes (life expectancy 67.5); abundance would require large outside cost declines."
   },
   {
    "entity": "COM",
    "si": {
     "collapse": 0.3,
     "abundance": 0.04,
     "pillarLoss": {
      "energy": 0.16,
      "water": 0.18,
      "food": 0.21,
      "health": 0.2,
      "security": 0.18
     }
    },
    "noSi": {
     "collapse": 0.25,
     "abundance": 0.002,
     "pillarLoss": {
      "energy": 0.1,
      "water": 0.12,
      "food": 0.16,
      "health": 0.14,
      "security": 0.12
     }
    },
    "rationale": "Very poor, coup-prone, with very weak government effectiveness, high fertility, food insecurity and cyclone exposure; a prolonged food or health breakdown is the most likely path to collapse."
   },
   {
    "entity": "SLB",
    "si": {
     "collapse": 0.3,
     "abundance": 0.03,
     "pillarLoss": {
      "energy": 0.16,
      "water": 0.18,
      "food": 0.21,
      "health": 0.18,
      "security": 0.2
     }
    },
    "noSi": {
     "collapse": 0.26,
     "abundance": 0.002,
     "pillarLoss": {
      "energy": 0.1,
      "water": 0.12,
      "food": 0.16,
      "health": 0.12,
      "security": 0.15
     }
    },
    "rationale": "Poor, with 27% undernourishment, weak state capacity, a record of ethnic unrest and riots, great-power rivalry and high climate vulnerability; food and security are the weak points."
   },
   {
    "entity": "GUY",
    "si": {
     "collapse": 0.22,
     "abundance": 0.1,
     "pillarLoss": {
      "energy": 0.14,
      "water": 0.16,
      "food": 0.14,
      "health": 0.14,
      "security": 0.17
     }
    },
    "noSi": {
     "collapse": 0.16,
     "abundance": 0.01,
     "pillarLoss": {
      "energy": 0.07,
      "water": 0.09,
      "food": 0.07,
      "health": 0.07,
      "security": 0.1
     }
    },
    "rationale": "Oil wealth can pay for sea walls and services, but a population on a coastal plain below sea level, high crime, ethnic politics, resource-curse risk and the Venezuelan border claim keep collapse well above the floor."
   },
   {
    "entity": "BTN",
    "si": {
     "collapse": 0.17,
     "abundance": 0.12,
     "pillarLoss": {
      "energy": 0.13,
      "water": 0.13,
      "food": 0.13,
      "health": 0.13,
      "security": 0.15
     }
    },
    "noSi": {
     "collapse": 0.1,
     "abundance": 0.005,
     "pillarLoss": {
      "energy": 0.05,
      "water": 0.06,
      "food": 0.06,
      "health": 0.06,
      "security": 0.07
     }
    },
    "rationale": "Very stable with abundant hydropower, but exposed to glacial-lake floods and to China-India tension; middle income and heavy emigration limit the chance of near-free essentials without superintelligence."
   },
   {
    "entity": "LUX",
    "si": {
     "collapse": 0.145,
     "abundance": 0.37,
     "pillarLoss": {
      "energy": 0.125,
      "water": 0.125,
      "food": 0.125,
      "health": 0.125,
      "security": 0.13
     }
    },
    "noSi": {
     "collapse": 0.075,
     "abundance": 0.05,
     "pillarLoss": {
      "energy": 0.05,
      "water": 0.05,
      "food": 0.05,
      "health": 0.05,
      "security": 0.055
     }
    },
    "rationale": "Extremely rich, well governed and embedded in the EU, so collapse is mostly global doom; its very high income makes it one of the few places where essentials could fall below 10% of income, though its income per resident is inflated by cross-border workers and health costs rise with aging."
   },
   {
    "entity": "MAC",
    "si": {
     "collapse": 0.17,
     "abundance": 0.28,
     "pillarLoss": {
      "energy": 0.13,
      "water": 0.135,
      "food": 0.13,
      "health": 0.125,
      "security": 0.145
     }
    },
    "noSi": {
     "collapse": 0.1,
     "abundance": 0.04,
     "pillarLoss": {
      "energy": 0.06,
      "water": 0.065,
      "food": 0.06,
      "health": 0.055,
      "security": 0.07
     }
    },
    "rationale": "Rich and orderly but completely dependent on mainland China for water, food and power, with a volatile casino economy, the world's lowest fertility, typhoons and low-lying reclaimed land; a Taiwan conflict is the main local tail risk."
   },
   {
    "entity": "SUR",
    "si": {
     "collapse": 0.2,
     "abundance": 0.08,
     "pillarLoss": {
      "energy": 0.14,
      "water": 0.15,
      "food": 0.14,
      "health": 0.14,
      "security": 0.15
     }
    },
    "noSi": {
     "collapse": 0.14,
     "abundance": 0.004,
     "pillarLoss": {
      "energy": 0.06,
      "water": 0.08,
      "food": 0.07,
      "health": 0.07,
      "security": 0.08
     }
    },
    "rationale": "Coming offshore oil could ease a heavy debt load, but a low-lying coastal capital, middling governance and a coup history leave moderate collapse risk and little chance of near-free essentials."
   },
   {
    "entity": "MNE",
    "si": {
     "collapse": 0.165,
     "abundance": 0.2,
     "pillarLoss": {
      "energy": 0.13,
      "water": 0.125,
      "food": 0.125,
      "health": 0.13,
      "security": 0.145
     }
    },
    "noSi": {
     "collapse": 0.09,
     "abundance": 0.008,
     "pillarLoss": {
      "energy": 0.055,
      "water": 0.05,
      "food": 0.05,
      "health": 0.055,
      "security": 0.07
     }
    },
    "rationale": "A NATO member close to EU accession with decent incomes, so collapse risk is low apart from Balkan tensions and rapid aging; abundance depends on EU-level cost declines."
   },
   {
    "entity": "MLT",
    "si": {
     "collapse": 0.155,
     "abundance": 0.28,
     "pillarLoss": {
      "energy": 0.135,
      "water": 0.14,
      "food": 0.13,
      "health": 0.125,
      "security": 0.125
     }
    },
    "noSi": {
     "collapse": 0.085,
     "abundance": 0.015,
     "pillarLoss": {
      "energy": 0.06,
      "water": 0.065,
      "food": 0.055,
      "health": 0.05,
      "security": 0.05
     }
    },
    "rationale": "A rich, safe EU island whose weak points are imported energy, desalinated water and imported food; with cheap superintelligence-driven energy those weak points mostly disappear."
   },
   {
    "entity": "MDV",
    "si": {
     "collapse": 0.23,
     "abundance": 0.12,
     "pillarLoss": {
      "energy": 0.15,
      "water": 0.18,
      "food": 0.16,
      "health": 0.14,
      "security": 0.14
     }
    },
    "noSi": {
     "collapse": 0.19,
     "abundance": 0.005,
     "pillarLoss": {
      "energy": 0.08,
      "water": 0.12,
      "food": 0.09,
      "health": 0.07,
      "security": 0.07
     }
    },
    "rationale": "Islands about a metre above sea level facing 0.5 m or more of rise, salinized freshwater, heavy debt and reliance on tourism; built-up islands such as Hulhumale and better engineering are the main defences."
   },
   {
    "entity": "CPV",
    "si": {
     "collapse": 0.18,
     "abundance": 0.1,
     "pillarLoss": {
      "energy": 0.135,
      "water": 0.15,
      "food": 0.145,
      "health": 0.135,
      "security": 0.13
     }
    },
    "noSi": {
     "collapse": 0.11,
     "abundance": 0.004,
     "pillarLoss": {
      "energy": 0.06,
      "water": 0.08,
      "food": 0.075,
      "health": 0.06,
      "security": 0.055
     }
    },
    "rationale": "One of Africa's most stable democracies, but drought-prone, dependent on desalination and food imports, and heavily indebted; water and food are the pillars at risk."
   },
   {
    "entity": "BRN",
    "si": {
     "collapse": 0.165,
     "abundance": 0.2,
     "pillarLoss": {
      "energy": 0.125,
      "water": 0.125,
      "food": 0.135,
      "health": 0.13,
      "security": 0.135
     }
    },
    "noSi": {
     "collapse": 0.09,
     "abundance": 0.02,
     "pillarLoss": {
      "energy": 0.05,
      "water": 0.05,
      "food": 0.06,
      "health": 0.055,
      "security": 0.06
     }
    },
    "rationale": "A wealthy, low-debt, stable energy exporter with plenty of water; the risks are oil depletion, a royal succession, imported food and South China Sea tension, and a life expectancy of 75.5 leaves little margin on health."
   },
   {
    "entity": "BLZ",
    "si": {
     "collapse": 0.2,
     "abundance": 0.07,
     "pillarLoss": {
      "energy": 0.14,
      "water": 0.14,
      "food": 0.14,
      "health": 0.145,
      "security": 0.165
     }
    },
    "noSi": {
     "collapse": 0.14,
     "abundance": 0.003,
     "pillarLoss": {
      "energy": 0.06,
      "water": 0.06,
      "food": 0.06,
      "health": 0.07,
      "security": 0.09
     }
    },
    "rationale": "Gang violence is high (28 homicides per 100,000), Guatemala claims its territory, and hurricanes and a low-lying coast add risk; security is the most fragile pillar."
   },
   {
    "entity": "BHS",
    "si": {
     "collapse": 0.195,
     "abundance": 0.14,
     "pillarLoss": {
      "energy": 0.15,
      "water": 0.15,
      "food": 0.14,
      "health": 0.14,
      "security": 0.155
     }
    },
    "noSi": {
     "collapse": 0.13,
     "abundance": 0.006,
     "pillarLoss": {
      "energy": 0.07,
      "water": 0.07,
      "food": 0.06,
      "health": 0.06,
      "security": 0.08
     }
    },
    "rationale": "A high-income tourism economy on very low islands in the hurricane belt (Dorian was a warning), with high crime and interest costs taking 20% of revenue; it is close to the US for recovery support."
   },
   {
    "entity": "ISL",
    "si": {
     "collapse": 0.145,
     "abundance": 0.37,
     "pillarLoss": {
      "energy": 0.12,
      "water": 0.12,
      "food": 0.135,
      "health": 0.125,
      "security": 0.125
     }
    },
    "noSi": {
     "collapse": 0.075,
     "abundance": 0.03,
     "pillarLoss": {
      "energy": 0.045,
      "water": 0.045,
      "food": 0.06,
      "health": 0.05,
      "security": 0.05
     }
    },
    "rationale": "The world's most peaceful country, with cheap geothermal and hydro power, abundant water and strong institutions, so collapse is mostly global doom; the tail risks are volcanoes, imported food and a possible slowdown of the Atlantic overturning circulation."
   },
   {
    "entity": "VUT",
    "si": {
     "collapse": 0.25,
     "abundance": 0.04,
     "pillarLoss": {
      "energy": 0.15,
      "water": 0.17,
      "food": 0.19,
      "health": 0.17,
      "security": 0.14
     }
    },
    "noSi": {
     "collapse": 0.21,
     "abundance": 0.002,
     "pillarLoss": {
      "energy": 0.08,
      "water": 0.1,
      "food": 0.13,
      "health": 0.11,
      "security": 0.07
     }
    },
    "rationale": "Among the most disaster-exposed countries on Earth (cyclones, volcanoes, earthquakes), poor, with low electricity and water access and weak government effectiveness, although it is peaceful."
   },
   {
    "entity": "BRB",
    "si": {
     "collapse": 0.17,
     "abundance": 0.15,
     "pillarLoss": {
      "energy": 0.135,
      "water": 0.14,
      "food": 0.13,
      "health": 0.13,
      "security": 0.125
     }
    },
    "noSi": {
     "collapse": 0.1,
     "abundance": 0.006,
     "pillarLoss": {
      "energy": 0.06,
      "water": 0.07,
      "food": 0.06,
      "health": 0.055,
      "security": 0.05
     }
    },
    "rationale": "A stable, well-run democracy with high readiness to adapt, but it is water-scarce, imports food and fuel, carries heavy debt and is exposed to hurricanes; water is the weakest pillar."
   }
  ]
 },
 {
  "id": "rest-8-2026-11-24-1",
  "batch": "rest-8",
  "model": "Claude Opus 5.5",
  "date": "2026-11-24",
  "method": "Independent Claude Code agents reading only the prompt, prompt 2026-11-24.2",
  "entities": [
   {
    "entity": "STP",
    "si": {
     "collapse": 0.2,
     "abundance": 0.05,
     "pillarLoss": {
      "energy": 0.13,
      "water": 0.14,
      "food": 0.16,
      "health": 0.15,
      "security": 0.14
     }
    },
    "noSi": {
     "collapse": 0.13,
     "abundance": 0.002,
     "pillarLoss": {
      "energy": 0.06,
      "water": 0.08,
      "food": 0.1,
      "health": 0.08,
      "security": 0.07
     }
    },
    "rationale": "Poor, aid-dependent island state with weak government, high undernourishment and low safe-water access; food imports and governance are the weak points, while political calm helps."
   },
   {
    "entity": "WSM",
    "si": {
     "collapse": 0.18,
     "abundance": 0.08,
     "pillarLoss": {
      "energy": 0.13,
      "water": 0.14,
      "food": 0.13,
      "health": 0.13,
      "security": 0.13
     }
    },
    "noSi": {
     "collapse": 0.1,
     "abundance": 0.004,
     "pillarLoss": {
      "energy": 0.05,
      "water": 0.07,
      "food": 0.06,
      "health": 0.06,
      "security": 0.05
     }
    },
    "rationale": "Stable high-island state exposed to cyclones and coastal flooding; remittances and aid keep the basics going, but low income makes near-free essentials unlikely without superintelligence."
   },
   {
    "entity": "LCA",
    "si": {
     "collapse": 0.17,
     "abundance": 0.15,
     "pillarLoss": {
      "energy": 0.13,
      "water": 0.13,
      "food": 0.13,
      "health": 0.13,
      "security": 0.14
     }
    },
    "noSi": {
     "collapse": 0.09,
     "abundance": 0.01,
     "pillarLoss": {
      "energy": 0.05,
      "water": 0.06,
      "food": 0.05,
      "health": 0.05,
      "security": 0.06
     }
    },
    "rationale": "Upper-middle-income tourism economy; hurricanes, high public debt and rising violent crime are the main threats, but recovery capacity is decent."
   },
   {
    "entity": "KIR",
    "si": {
     "collapse": 0.31,
     "abundance": 0.04,
     "pillarLoss": {
      "energy": 0.14,
      "water": 0.25,
      "food": 0.18,
      "health": 0.16,
      "security": 0.14
     }
    },
    "noSi": {
     "collapse": 0.3,
     "abundance": 0.002,
     "pillarLoss": {
      "energy": 0.08,
      "water": 0.26,
      "food": 0.16,
      "health": 0.12,
      "security": 0.07
     }
    },
    "rationale": "Low-lying atolls facing sea-level rise, wave flooding and salinised freshwater lenses; loss of water and habitable land dominates, and emigration routes are limited."
   },
   {
    "entity": "SYC",
    "si": {
     "collapse": 0.16,
     "abundance": 0.18,
     "pillarLoss": {
      "energy": 0.13,
      "water": 0.13,
      "food": 0.13,
      "health": 0.12,
      "security": 0.12
     }
    },
    "noSi": {
     "collapse": 0.08,
     "abundance": 0.01,
     "pillarLoss": {
      "energy": 0.05,
      "water": 0.05,
      "food": 0.05,
      "health": 0.04,
      "security": 0.04
     }
    },
    "rationale": "Relatively rich and well governed with granite high islands; coastal erosion and dependence on imported food and fuel are the main exposures."
   },
   {
    "entity": "GRD",
    "si": {
     "collapse": 0.16,
     "abundance": 0.14,
     "pillarLoss": {
      "energy": 0.13,
      "water": 0.12,
      "food": 0.12,
      "health": 0.12,
      "security": 0.12
     }
    },
    "noSi": {
     "collapse": 0.08,
     "abundance": 0.008,
     "pillarLoss": {
      "energy": 0.05,
      "water": 0.05,
      "food": 0.04,
      "health": 0.04,
      "security": 0.04
     }
    },
    "rationale": "Stable small state with good adaptation readiness; major hurricanes like Ivan and Beryl are the recurring shock, but recovery has taken months to a few years, not a lasting loss."
   },
   {
    "entity": "FSM",
    "si": {
     "collapse": 0.23,
     "abundance": 0.04,
     "pillarLoss": {
      "energy": 0.14,
      "water": 0.17,
      "food": 0.15,
      "health": 0.15,
      "security": 0.13
     }
    },
    "noSi": {
     "collapse": 0.18,
     "abundance": 0.002,
     "pillarLoss": {
      "energy": 0.07,
      "water": 0.12,
      "food": 0.1,
      "health": 0.09,
      "security": 0.05
     }
    },
    "rationale": "Highest climate vulnerability in this group, with many outer atolls; high islands and US compact funding and migration rights cushion it, but reliance on that funding is a risk."
   },
   {
    "entity": "ABW",
    "si": {
     "collapse": 0.15,
     "abundance": 0.25,
     "pillarLoss": {
      "energy": 0.13,
      "water": 0.13,
      "food": 0.12,
      "health": 0.12,
      "security": 0.12
     }
    },
    "noSi": {
     "collapse": 0.07,
     "abundance": 0.015,
     "pillarLoss": {
      "energy": 0.05,
      "water": 0.05,
      "food": 0.04,
      "health": 0.04,
      "security": 0.04
     }
    },
    "rationale": "Rich, mostly outside the hurricane belt and backed by the Netherlands, but it runs on desalinated water and imported food and fuel, and aging raises health costs."
   },
   {
    "entity": "VIR",
    "si": {
     "collapse": 0.17,
     "abundance": 0.22,
     "pillarLoss": {
      "energy": 0.14,
      "water": 0.13,
      "food": 0.12,
      "health": 0.13,
      "security": 0.13
     }
    },
    "noSi": {
     "collapse": 0.09,
     "abundance": 0.012,
     "pillarLoss": {
      "energy": 0.06,
      "water": 0.05,
      "food": 0.04,
      "health": 0.05,
      "security": 0.05
     }
    },
    "rationale": "US territory with a federal backstop and high income, but hurricanes like Irma and Maria cut power for months, homicide is very high and the population is aging fast."
   },
   {
    "entity": "TON",
    "si": {
     "collapse": 0.21,
     "abundance": 0.06,
     "pillarLoss": {
      "energy": 0.13,
      "water": 0.15,
      "food": 0.14,
      "health": 0.14,
      "security": 0.13
     }
    },
    "noSi": {
     "collapse": 0.14,
     "abundance": 0.003,
     "pillarLoss": {
      "energy": 0.06,
      "water": 0.09,
      "food": 0.08,
      "health": 0.07,
      "security": 0.05
     }
    },
    "rationale": "Low-lying islands exposed to cyclones, tsunamis and volcanic shocks like the 2022 eruption, with poor safe-water access; diaspora remittances and stability help, but income is too low for near-free essentials without superintelligence."
   },
   {
    "entity": "VCT",
    "si": {
     "collapse": 0.18,
     "abundance": 0.12,
     "pillarLoss": {
      "energy": 0.13,
      "water": 0.13,
      "food": 0.13,
      "health": 0.13,
      "security": 0.14
     }
    },
    "noSi": {
     "collapse": 0.1,
     "abundance": 0.006,
     "pillarLoss": {
      "energy": 0.05,
      "water": 0.05,
      "food": 0.05,
      "health": 0.05,
      "security": 0.07
     }
    },
    "rationale": "Debt above 100% of GDP, very high homicide, hurricanes and the La Soufriere volcano are the main risks; it remains a stable democracy with full electricity access."
   },
   {
    "entity": "ATG",
    "si": {
     "collapse": 0.16,
     "abundance": 0.17,
     "pillarLoss": {
      "energy": 0.13,
      "water": 0.13,
      "food": 0.12,
      "health": 0.12,
      "security": 0.12
     }
    },
    "noSi": {
     "collapse": 0.08,
     "abundance": 0.01,
     "pillarLoss": {
      "energy": 0.05,
      "water": 0.05,
      "food": 0.04,
      "health": 0.04,
      "security": 0.04
     }
    },
    "rationale": "Fairly rich tourism economy; low-lying Barbuda, which was evacuated after Irma, and water scarcity met by desalination are the main exposures."
   },
   {
    "entity": "AND",
    "si": {
     "collapse": 0.14,
     "abundance": 0.35,
     "pillarLoss": {
      "energy": 0.12,
      "water": 0.12,
      "food": 0.12,
      "health": 0.12,
      "security": 0.12
     }
    },
    "noSi": {
     "collapse": 0.06,
     "abundance": 0.03,
     "pillarLoss": {
      "energy": 0.05,
      "water": 0.05,
      "food": 0.05,
      "health": 0.05,
      "security": 0.05
     }
    },
    "rationale": "Rich, well governed and embedded between France and Spain, so collapse is mostly the global risk; getting essentials under 10% of income needs superintelligence-driven cost drops."
   },
   {
    "entity": "DMA",
    "si": {
     "collapse": 0.18,
     "abundance": 0.11,
     "pillarLoss": {
      "energy": 0.14,
      "water": 0.13,
      "food": 0.13,
      "health": 0.13,
      "security": 0.13
     }
    },
    "noSi": {
     "collapse": 0.1,
     "abundance": 0.006,
     "pillarLoss": {
      "energy": 0.07,
      "water": 0.06,
      "food": 0.05,
      "health": 0.05,
      "security": 0.05
     }
    },
    "rationale": "Mountainous island repeatedly hit by hurricanes, with Maria destroying much of its housing, and debt near 100% of GDP; strong adaptation readiness helps it recover."
   },
   {
    "entity": "KNA",
    "si": {
     "collapse": 0.16,
     "abundance": 0.17,
     "pillarLoss": {
      "energy": 0.13,
      "water": 0.12,
      "food": 0.12,
      "health": 0.12,
      "security": 0.13
     }
    },
    "noSi": {
     "collapse": 0.08,
     "abundance": 0.01,
     "pillarLoss": {
      "energy": 0.05,
      "water": 0.05,
      "food": 0.04,
      "health": 0.04,
      "security": 0.06
     }
    },
    "rationale": "Relatively rich with solid governance, but the highest homicide rate in this group and hurricane exposure are the main risks."
   },
   {
    "entity": "LIE",
    "si": {
     "collapse": 0.13,
     "abundance": 0.42,
     "pillarLoss": {
      "energy": 0.12,
      "water": 0.12,
      "food": 0.12,
      "health": 0.12,
      "security": 0.12
     }
    },
    "noSi": {
     "collapse": 0.055,
     "abundance": 0.08,
     "pillarLoss": {
      "energy": 0.05,
      "water": 0.045,
      "food": 0.05,
      "health": 0.05,
      "security": 0.05
     }
    },
    "rationale": "Very rich, almost debt-free and well governed inside the Swiss system, so collapse is nearly all global risk; very high income per resident already puts essentials close to the 10% line."
   },
   {
    "entity": "MCO",
    "si": {
     "collapse": 0.13,
     "abundance": 0.42,
     "pillarLoss": {
      "energy": 0.12,
      "water": 0.12,
      "food": 0.12,
      "health": 0.12,
      "security": 0.12
     }
    },
    "noSi": {
     "collapse": 0.055,
     "abundance": 0.08,
     "pillarLoss": {
      "energy": 0.05,
      "water": 0.045,
      "food": 0.05,
      "health": 0.05,
      "security": 0.05
     }
    },
    "rationale": "Extremely high income and protection by France make local collapse unlikely; the very old population pushes health costs up, which keeps essentials near rather than clearly below 10% of income."
   },
   {
    "entity": "MHL",
    "si": {
     "collapse": 0.29,
     "abundance": 0.04,
     "pillarLoss": {
      "energy": 0.14,
      "water": 0.23,
      "food": 0.17,
      "health": 0.15,
      "security": 0.14
     }
    },
    "noSi": {
     "collapse": 0.28,
     "abundance": 0.002,
     "pillarLoss": {
      "energy": 0.08,
      "water": 0.24,
      "food": 0.15,
      "health": 0.11,
      "security": 0.07
     }
    },
    "rationale": "Atolls about two meters above sea level face flooding and loss of freshwater; US compact funding and migration rights are the main buffer, though many residents may leave."
   },
   {
    "entity": "SMR",
    "si": {
     "collapse": 0.14,
     "abundance": 0.33,
     "pillarLoss": {
      "energy": 0.12,
      "water": 0.12,
      "food": 0.12,
      "health": 0.12,
      "security": 0.12
     }
    },
    "noSi": {
     "collapse": 0.06,
     "abundance": 0.025,
     "pillarLoss": {
      "energy": 0.05,
      "water": 0.05,
      "food": 0.05,
      "health": 0.05,
      "security": 0.05
     }
    },
    "rationale": "Rich hilltop enclave inside Italy, so its fate tracks Italy and the world; high water stress is covered by Italian supply."
   },
   {
    "entity": "PLW",
    "si": {
     "collapse": 0.19,
     "abundance": 0.11,
     "pillarLoss": {
      "energy": 0.14,
      "water": 0.14,
      "food": 0.14,
      "health": 0.13,
      "security": 0.13
     }
    },
    "noSi": {
     "collapse": 0.12,
     "abundance": 0.006,
     "pillarLoss": {
      "energy": 0.06,
      "water": 0.07,
      "food": 0.07,
      "health": 0.06,
      "security": 0.06
     }
    },
    "rationale": "Middle-income with US compact backing and a large volcanic main island, but typhoons, low outer islands and reef-dependent food and tourism are exposed; tension around Taiwan adds security risk."
   }
  ]
 },
 {
  "id": "rest-9-2026-11-24-1",
  "batch": "rest-9",
  "model": "Claude Opus 5.5",
  "date": "2026-11-24",
  "method": "Independent Claude Code agents reading only the prompt, prompt 2026-11-24.2",
  "entities": [
   {
    "entity": "NRU",
    "si": {
     "collapse": 0.22,
     "abundance": 0.07,
     "pillarLoss": {
      "energy": 0.14,
      "water": 0.16,
      "food": 0.15,
      "health": 0.13,
      "security": 0.13
     }
    },
    "noSi": {
     "collapse": 0.19,
     "abundance": 0.005,
     "pillarLoss": {
      "energy": 0.1,
      "water": 0.13,
      "food": 0.1,
      "health": 0.08,
      "security": 0.07
     }
    },
    "rationale": "Nauru imports nearly all its food and depends on diesel-powered desalination and on Australian money, and it already went through a fiscal and blackout crisis in the 2000s; the 2024 treaty with Australia and the higher interior ground reduce the risk of a long collapse. Very low life expectancy and a weak health system make near-free, universal essentials a long shot even with superintelligence."
   },
   {
    "entity": "TUV",
    "si": {
     "collapse": 0.26,
     "abundance": 0.05,
     "pillarLoss": {
      "energy": 0.14,
      "water": 0.19,
      "food": 0.18,
      "health": 0.13,
      "security": 0.13
     }
    },
    "noSi": {
     "collapse": 0.24,
     "abundance": 0.003,
     "pillarLoss": {
      "energy": 0.09,
      "water": 0.17,
      "food": 0.14,
      "health": 0.09,
      "security": 0.08
     }
    },
    "rationale": "Tuvalu is a low atoll nation facing about half a metre or more of sea-level rise, with saltwater flooding of land, crops and water supplies, droughts and total dependence on imports; land reclamation and the Falepili Union with Australia (migration plus a security guarantee) cushion it but cannot remove the habitability risk. Poor water access, low life expectancy and a tiny economy make strict abundance very unlikely."
   }
  ]
 },
 {
  "id": "spotlight-1-2026-11-24-1",
  "batch": "spotlight-1",
  "model": "Claude Opus 5.5",
  "date": "2026-11-24",
  "method": "Independent Claude Code agents reading only the prompt, prompt 2026-11-24.2",
  "entities": [
   {
    "entity": "IND",
    "si": {
     "collapse": 0.22,
     "abundance": 0.13,
     "pillarLoss": {
      "energy": 0.125,
      "water": 0.145,
      "food": 0.15,
      "health": 0.12,
      "security": 0.15
     }
    },
    "noSi": {
     "collapse": 0.16,
     "abundance": 0.006,
     "pillarLoss": {
      "energy": 0.06,
      "water": 0.095,
      "food": 0.092,
      "health": 0.06,
      "security": 0.087
     }
    },
    "rationale": "Severe water stress, heat and a nuclear-armed neighbour drive collapse risk. Getting near-free essentials to 90% of 1.5 billion people needs superintelligence to cut water, sanitation and health costs drastically."
   },
   {
    "entity": "CHN",
    "si": {
     "collapse": 0.21,
     "abundance": 0.25,
     "pillarLoss": {
      "energy": 0.135,
      "water": 0.115,
      "food": 0.135,
      "health": 0.115,
      "security": 0.16
     }
    },
    "noSi": {
     "collapse": 0.13,
     "abundance": 0.018,
     "pillarLoss": {
      "energy": 0.07,
      "water": 0.055,
      "food": 0.072,
      "health": 0.055,
      "security": 0.092
     }
    },
    "rationale": "A capable state and cheap energy favour abundance under superintelligence. A Taiwan or US war, import blockades and very rapid aging are the main threats."
   },
   {
    "entity": "USA",
    "si": {
     "collapse": 0.19,
     "abundance": 0.29,
     "pillarLoss": {
      "energy": 0.12,
      "water": 0.105,
      "food": 0.12,
      "health": 0.12,
      "security": 0.16
     }
    },
    "noSi": {
     "collapse": 0.1,
     "abundance": 0.02,
     "pillarLoss": {
      "energy": 0.05,
      "water": 0.045,
      "food": 0.052,
      "health": 0.055,
      "security": 0.082
     }
    },
    "rationale": "Rich, an energy exporter and the likely home of superintelligence, but health care alone costs well over 10% of income today. Great-power war or domestic conflict are the main collapse paths."
   },
   {
    "entity": "IDN",
    "si": {
     "collapse": 0.19,
     "abundance": 0.16,
     "pillarLoss": {
      "energy": 0.12,
      "water": 0.11,
      "food": 0.14,
      "health": 0.115,
      "security": 0.14
     }
    },
    "noSi": {
     "collapse": 0.14,
     "abundance": 0.008,
     "pillarLoss": {
      "energy": 0.06,
      "water": 0.055,
      "food": 0.087,
      "health": 0.055,
      "security": 0.082
     }
    },
    "rationale": "Peaceful and energy self-sufficient, but only 30% have safely managed water and coastal cities face sea-level rise, so abundance depends on very large cost drops."
   },
   {
    "entity": "PAK",
    "si": {
     "collapse": 0.29,
     "abundance": 0.07,
     "pillarLoss": {
      "energy": 0.155,
      "water": 0.165,
      "food": 0.17,
      "health": 0.13,
      "security": 0.21
     }
    },
    "noSi": {
     "collapse": 0.25,
     "abundance": 0.003,
     "pillarLoss": {
      "energy": 0.1,
      "water": 0.125,
      "food": 0.122,
      "health": 0.07,
      "security": 0.152
     }
    },
    "rationale": "Very weak political stability, Indus water stress, climate floods and nuclear rivalry with India make collapse a serious risk. Abundance is remote."
   },
   {
    "entity": "NGA",
    "si": {
     "collapse": 0.31,
     "abundance": 0.07,
     "pillarLoss": {
      "energy": 0.145,
      "water": 0.115,
      "food": 0.21,
      "health": 0.135,
      "security": 0.23
     }
    },
    "noSi": {
     "collapse": 0.28,
     "abundance": 0.003,
     "pillarLoss": {
      "energy": 0.09,
      "water": 0.055,
      "food": 0.162,
      "health": 0.08,
      "security": 0.192
     }
    },
    "rationale": "Insurgency, banditry, weak government and fast population growth threaten security and food. With 62% electricity access and 30% safe water, near-free access for 90% is far off."
   },
   {
    "entity": "BRA",
    "si": {
     "collapse": 0.17,
     "abundance": 0.17,
     "pillarLoss": {
      "energy": 0.115,
      "water": 0.105,
      "food": 0.118,
      "health": 0.115,
      "security": 0.14
     }
    },
    "noSi": {
     "collapse": 0.11,
     "abundance": 0.008,
     "pillarLoss": {
      "energy": 0.055,
      "water": 0.047,
      "food": 0.052,
      "health": 0.052,
      "security": 0.082
     }
    },
    "rationale": "Large food and energy surpluses make collapse unlikely outside global doom. High violence and inequality are the main obstacles to abundance."
   },
   {
    "entity": "BGD",
    "si": {
     "collapse": 0.23,
     "abundance": 0.1,
     "pillarLoss": {
      "energy": 0.135,
      "water": 0.14,
      "food": 0.16,
      "health": 0.12,
      "security": 0.145
     }
    },
    "noSi": {
     "collapse": 0.2,
     "abundance": 0.004,
     "pillarLoss": {
      "energy": 0.075,
      "water": 0.095,
      "food": 0.117,
      "health": 0.06,
      "security": 0.087
     }
    },
    "rationale": "A low-lying delta exposed to floods, salinisation and sea-level rise, with fragile politics. Strong recent health gains help, but near-free essentials need superintelligence."
   },
   {
    "entity": "RUS",
    "si": {
     "collapse": 0.22,
     "abundance": 0.17,
     "pillarLoss": {
      "energy": 0.115,
      "water": 0.105,
      "food": 0.12,
      "health": 0.125,
      "security": 0.18
     }
    },
    "noSi": {
     "collapse": 0.16,
     "abundance": 0.01,
     "pillarLoss": {
      "energy": 0.05,
      "water": 0.045,
      "food": 0.052,
      "health": 0.065,
      "security": 0.122
     }
    },
    "rationale": "Plenty of energy, land and food, but war with NATO, regime instability and nuclear risk make security the dominant collapse path."
   },
   {
    "entity": "ETH",
    "si": {
     "collapse": 0.31,
     "abundance": 0.07,
     "pillarLoss": {
      "energy": 0.135,
      "water": 0.115,
      "food": 0.21,
      "health": 0.135,
      "security": 0.24
     }
    },
    "noSi": {
     "collapse": 0.29,
     "abundance": 0.003,
     "pillarLoss": {
      "energy": 0.07,
      "water": 0.055,
      "food": 0.172,
      "health": 0.08,
      "security": 0.202
     }
    },
    "rationale": "Recurring civil wars, drought and famine risk make security and food the weak points. With 57% electricity and 14% safe water, abundance is very unlikely."
   },
   {
    "entity": "MEX",
    "si": {
     "collapse": 0.2,
     "abundance": 0.15,
     "pillarLoss": {
      "energy": 0.115,
      "water": 0.125,
      "food": 0.12,
      "health": 0.115,
      "security": 0.15
     }
    },
    "noSi": {
     "collapse": 0.15,
     "abundance": 0.007,
     "pillarLoss": {
      "energy": 0.055,
      "water": 0.075,
      "food": 0.057,
      "health": 0.052,
      "security": 0.092
     }
    },
    "rationale": "Cartel violence and severe water stress in the north and in Mexico City are the main risks, and only 43% have safely managed water."
   },
   {
    "entity": "JPN",
    "si": {
     "collapse": 0.16,
     "abundance": 0.3,
     "pillarLoss": {
      "energy": 0.12,
      "water": 0.098,
      "food": 0.12,
      "health": 0.11,
      "security": 0.135
     }
    },
    "noSi": {
     "collapse": 0.09,
     "abundance": 0.025,
     "pillarLoss": {
      "energy": 0.058,
      "water": 0.039,
      "food": 0.054,
      "health": 0.046,
      "security": 0.067
     }
    },
    "rationale": "Excellent governance and safety make it a strong abundance candidate with superintelligence. Heavy energy and food imports and regional war are its weak points, and extreme aging keeps health costs high."
   },
   {
    "entity": "EGY",
    "si": {
     "collapse": 0.24,
     "abundance": 0.1,
     "pillarLoss": {
      "energy": 0.125,
      "water": 0.145,
      "food": 0.17,
      "health": 0.12,
      "security": 0.15
     }
    },
    "noSi": {
     "collapse": 0.2,
     "abundance": 0.004,
     "pillarLoss": {
      "energy": 0.06,
      "water": 0.1,
      "food": 0.122,
      "health": 0.055,
      "security": 0.092
     }
    },
    "rationale": "Near-total dependence on the Nile, heavy wheat imports and high debt with a growing population make food and water the main collapse paths."
   },
   {
    "entity": "PHL",
    "si": {
     "collapse": 0.19,
     "abundance": 0.14,
     "pillarLoss": {
      "energy": 0.125,
      "water": 0.11,
      "food": 0.135,
      "health": 0.115,
      "security": 0.14
     }
    },
    "noSi": {
     "collapse": 0.14,
     "abundance": 0.006,
     "pillarLoss": {
      "energy": 0.065,
      "water": 0.055,
      "food": 0.077,
      "health": 0.052,
      "security": 0.082
     }
    },
    "rationale": "Typhoons, sea-level rise, energy imports and South China Sea tensions are the risks. Low safe-water coverage keeps abundance hard."
   },
   {
    "entity": "COD",
    "si": {
     "collapse": 0.37,
     "abundance": 0.04,
     "pillarLoss": {
      "energy": 0.115,
      "water": 0.105,
      "food": 0.25,
      "health": 0.155,
      "security": 0.29
     }
    },
    "noSi": {
     "collapse": 0.35,
     "abundance": 0.002,
     "pillarLoss": {
      "energy": 0.05,
      "water": 0.045,
      "food": 0.212,
      "health": 0.1,
      "security": 0.262
     }
    },
    "rationale": "Chronic conflict, 40% undernourishment and the weakest institutions in the group make a nationwide security or food collapse likely. Abundance is a long shot even with superintelligence."
   },
   {
    "entity": "VNM",
    "si": {
     "collapse": 0.18,
     "abundance": 0.18,
     "pillarLoss": {
      "energy": 0.12,
      "water": 0.11,
      "food": 0.135,
      "health": 0.113,
      "security": 0.135
     }
    },
    "noSi": {
     "collapse": 0.13,
     "abundance": 0.01,
     "pillarLoss": {
      "energy": 0.06,
      "water": 0.055,
      "food": 0.077,
      "health": 0.05,
      "security": 0.072
     }
    },
    "rationale": "A stable, effective state developing fast. The Mekong delta's exposure to sea-level rise and tensions with China are the main risks."
   },
   {
    "entity": "IRN",
    "si": {
     "collapse": 0.28,
     "abundance": 0.11,
     "pillarLoss": {
      "energy": 0.125,
      "water": 0.185,
      "food": 0.15,
      "health": 0.125,
      "security": 0.19
     }
    },
    "noSi": {
     "collapse": 0.25,
     "abundance": 0.006,
     "pillarLoss": {
      "energy": 0.06,
      "water": 0.145,
      "food": 0.092,
      "health": 0.065,
      "security": 0.132
     }
    },
    "rationale": "Extreme water stress already threatening Tehran, war with Israel and the US, sanctions and a fragile regime drive a high collapse risk."
   },
   {
    "entity": "TUR",
    "si": {
     "collapse": 0.19,
     "abundance": 0.2,
     "pillarLoss": {
      "energy": 0.125,
      "water": 0.115,
      "food": 0.12,
      "health": 0.115,
      "security": 0.14
     }
    },
    "noSi": {
     "collapse": 0.14,
     "abundance": 0.012,
     "pillarLoss": {
      "energy": 0.065,
      "water": 0.065,
      "food": 0.057,
      "health": 0.052,
      "security": 0.082
     }
    },
    "rationale": "Middle-income with good health outcomes, but dependence on energy imports, rising water stress, earthquakes and regional conflict are the risks."
   },
   {
    "entity": "DEU",
    "si": {
     "collapse": 0.16,
     "abundance": 0.31,
     "pillarLoss": {
      "energy": 0.12,
      "water": 0.098,
      "food": 0.115,
      "health": 0.11,
      "security": 0.135
     }
    },
    "noSi": {
     "collapse": 0.09,
     "abundance": 0.025,
     "pillarLoss": {
      "energy": 0.058,
      "water": 0.038,
      "food": 0.048,
      "health": 0.046,
      "security": 0.07
     }
    },
    "rationale": "Rich, safe and well governed, so collapse mostly comes from global doom or a war with Russia. Essentials cost 27% of income today, so abundance needs superintelligence."
   },
   {
    "entity": "THA",
    "si": {
     "collapse": 0.18,
     "abundance": 0.18,
     "pillarLoss": {
      "energy": 0.125,
      "water": 0.115,
      "food": 0.125,
      "health": 0.115,
      "security": 0.13
     }
    },
    "noSi": {
     "collapse": 0.12,
     "abundance": 0.01,
     "pillarLoss": {
      "energy": 0.065,
      "water": 0.06,
      "food": 0.062,
      "health": 0.052,
      "security": 0.067
     }
    },
    "rationale": "Good health and a food surplus, but coups, high water stress, energy imports and a sinking Bangkok are the risks."
   }
  ]
 },
 {
  "id": "spotlight-1-2026-11-24-2",
  "batch": "spotlight-1",
  "model": "Claude Opus 5.5",
  "date": "2026-11-24",
  "method": "Independent Claude Code agents reading only the prompt, prompt 2026-11-24.2",
  "entities": [
   {
    "entity": "IND",
    "si": {
     "collapse": 0.23,
     "abundance": 0.12,
     "pillarLoss": {
      "energy": 0.13,
      "water": 0.16,
      "food": 0.16,
      "health": 0.14,
      "security": 0.17
     }
    },
    "noSi": {
     "collapse": 0.18,
     "abundance": 0.004,
     "pillarLoss": {
      "energy": 0.06,
      "water": 0.11,
      "food": 0.1,
      "health": 0.07,
      "security": 0.1
     }
    },
    "rationale": "Extreme water stress, groundwater depletion and dangerous heat in the north, plus nuclear rivalry with Pakistan, are the main collapse risks; abundance needs essentials to fall from 31% of income to under 10% for 1.5 billion people, which only a strong superintelligence boom could do."
   },
   {
    "entity": "CHN",
    "si": {
     "collapse": 0.22,
     "abundance": 0.27,
     "pillarLoss": {
      "energy": 0.14,
      "water": 0.13,
      "food": 0.14,
      "health": 0.14,
      "security": 0.19
     }
    },
    "noSi": {
     "collapse": 0.13,
     "abundance": 0.01,
     "pillarLoss": {
      "energy": 0.06,
      "water": 0.06,
      "food": 0.07,
      "health": 0.06,
      "security": 0.1
     }
    },
    "rationale": "Strong state capacity, low essential costs and a likely lead role in AI and robotics make abundance plausible with superintelligence; a Taiwan or AI-race war with the US and extreme aging are the main collapse paths."
   },
   {
    "entity": "USA",
    "si": {
     "collapse": 0.19,
     "abundance": 0.33,
     "pillarLoss": {
      "energy": 0.14,
      "water": 0.13,
      "food": 0.13,
      "health": 0.14,
      "security": 0.17
     }
    },
    "noSi": {
     "collapse": 0.1,
     "abundance": 0.015,
     "pillarLoss": {
      "energy": 0.06,
      "water": 0.05,
      "food": 0.05,
      "health": 0.06,
      "security": 0.08
     }
    },
    "rationale": "As the likely superintelligence leader its national income could soar and make essentials cheap, but very high health and security spending and deep polarization are obstacles; great-power or nuclear war is the main collapse risk."
   },
   {
    "entity": "IDN",
    "si": {
     "collapse": 0.21,
     "abundance": 0.12,
     "pillarLoss": {
      "energy": 0.13,
      "water": 0.15,
      "food": 0.15,
      "health": 0.13,
      "security": 0.16
     }
    },
    "noSi": {
     "collapse": 0.14,
     "abundance": 0.004,
     "pillarLoss": {
      "energy": 0.05,
      "water": 0.08,
      "food": 0.08,
      "health": 0.06,
      "security": 0.08
     }
    },
    "rationale": "Peaceful and an energy exporter, but poor safe-water coverage, sinking coastal cities and middling governance keep abundance unlikely without a large technology dividend."
   },
   {
    "entity": "PAK",
    "si": {
     "collapse": 0.37,
     "abundance": 0.05,
     "pillarLoss": {
      "energy": 0.17,
      "water": 0.23,
      "food": 0.23,
      "health": 0.19,
      "security": 0.27
     }
    },
    "noSi": {
     "collapse": 0.33,
     "abundance": 0.002,
     "pillarLoss": {
      "energy": 0.1,
      "water": 0.18,
      "food": 0.18,
      "health": 0.12,
      "security": 0.22
     }
    },
    "rationale": "Very low political stability, nuclear rivalry with India, insurgency, dependence on a stressed Indus basin and severe flood exposure make collapse a serious risk over 75 years."
   },
   {
    "entity": "NGA",
    "si": {
     "collapse": 0.38,
     "abundance": 0.04,
     "pillarLoss": {
      "energy": 0.17,
      "water": 0.18,
      "food": 0.25,
      "health": 0.2,
      "security": 0.3
     }
    },
    "noSi": {
     "collapse": 0.35,
     "abundance": 0.002,
     "pillarLoss": {
      "energy": 0.1,
      "water": 0.12,
      "food": 0.2,
      "health": 0.14,
      "security": 0.25
     }
    },
    "rationale": "Widespread insurgency and banditry, weak government, high hunger and a population heading toward half a billion make a security or food collapse likely enough to dominate; abundance is far off."
   },
   {
    "entity": "BRA",
    "si": {
     "collapse": 0.2,
     "abundance": 0.14,
     "pillarLoss": {
      "energy": 0.13,
      "water": 0.13,
      "food": 0.13,
      "health": 0.14,
      "security": 0.17
     }
    },
    "noSi": {
     "collapse": 0.12,
     "abundance": 0.006,
     "pillarLoss": {
      "energy": 0.05,
      "water": 0.05,
      "food": 0.05,
      "health": 0.06,
      "security": 0.09
     }
    },
    "rationale": "Abundant food, water and clean power and no external enemies limit collapse risk; high violence, weak public finances and inequality make the 90% access and near-free tests hard."
   },
   {
    "entity": "BGD",
    "si": {
     "collapse": 0.28,
     "abundance": 0.08,
     "pillarLoss": {
      "energy": 0.15,
      "water": 0.19,
      "food": 0.2,
      "health": 0.16,
      "security": 0.18
     }
    },
    "noSi": {
     "collapse": 0.24,
     "abundance": 0.003,
     "pillarLoss": {
      "energy": 0.08,
      "water": 0.14,
      "food": 0.15,
      "health": 0.1,
      "security": 0.13
     }
    },
    "rationale": "A dense, low-lying delta facing sea-level rise, cyclones and salinization of farmland, with fragile politics and upstream river dependence on India; climate-driven food and water loss is the main risk."
   },
   {
    "entity": "RUS",
    "si": {
     "collapse": 0.24,
     "abundance": 0.14,
     "pillarLoss": {
      "energy": 0.13,
      "water": 0.13,
      "food": 0.13,
      "health": 0.16,
      "security": 0.21
     }
    },
    "noSi": {
     "collapse": 0.16,
     "abundance": 0.008,
     "pillarLoss": {
      "energy": 0.05,
      "water": 0.06,
      "food": 0.06,
      "health": 0.09,
      "security": 0.13
     }
    },
    "rationale": "Rich in energy, land and water, but war with NATO, nuclear escalation and a disorderly end to the current regime are real collapse paths; weak institutions make near-free essentials unlikely."
   },
   {
    "entity": "ETH",
    "si": {
     "collapse": 0.38,
     "abundance": 0.05,
     "pillarLoss": {
      "energy": 0.15,
      "water": 0.18,
      "food": 0.26,
      "health": 0.19,
      "security": 0.3
     }
    },
    "noSi": {
     "collapse": 0.36,
     "abundance": 0.002,
     "pillarLoss": {
      "energy": 0.08,
      "water": 0.12,
      "food": 0.22,
      "health": 0.12,
      "security": 0.26
     }
    },
    "rationale": "Recurring civil wars, a history of famine, very low incomes and a fast-growing population make a nationwide security or food collapse a substantial risk; abundance would require extraordinary outside help."
   },
   {
    "entity": "MEX",
    "si": {
     "collapse": 0.23,
     "abundance": 0.13,
     "pillarLoss": {
      "energy": 0.13,
      "water": 0.16,
      "food": 0.13,
      "health": 0.14,
      "security": 0.18
     }
    },
    "noSi": {
     "collapse": 0.16,
     "abundance": 0.005,
     "pillarLoss": {
      "energy": 0.05,
      "water": 0.09,
      "food": 0.06,
      "health": 0.06,
      "security": 0.11
     }
    },
    "rationale": "Very high cartel violence and severe water stress around Mexico City are the main threats; integration with the US economy helps it share in any superintelligence boom."
   },
   {
    "entity": "JPN",
    "si": {
     "collapse": 0.17,
     "abundance": 0.32,
     "pillarLoss": {
      "energy": 0.14,
      "water": 0.12,
      "food": 0.14,
      "health": 0.13,
      "security": 0.14
     }
    },
    "noSi": {
     "collapse": 0.09,
     "abundance": 0.018,
     "pillarLoss": {
      "energy": 0.06,
      "water": 0.05,
      "food": 0.06,
      "health": 0.05,
      "security": 0.06
     }
    },
    "rationale": "Excellent governance, safety and robotics make it a front-runner for abundance with superintelligence; its main weakness is dependence on imported energy and food that a regional war or blockade could cut."
   },
   {
    "entity": "EGY",
    "si": {
     "collapse": 0.29,
     "abundance": 0.08,
     "pillarLoss": {
      "energy": 0.14,
      "water": 0.2,
      "food": 0.21,
      "health": 0.16,
      "security": 0.18
     }
    },
    "noSi": {
     "collapse": 0.25,
     "abundance": 0.003,
     "pillarLoss": {
      "energy": 0.07,
      "water": 0.16,
      "food": 0.17,
      "health": 0.09,
      "security": 0.13
     }
    },
    "rationale": "Near-total dependence on the Nile, the world's heaviest wheat imports, a growing population and fragile public finances make a water or food collapse the key risk; cheap desalination under superintelligence would help."
   },
   {
    "entity": "PHL",
    "si": {
     "collapse": 0.23,
     "abundance": 0.1,
     "pillarLoss": {
      "energy": 0.14,
      "water": 0.15,
      "food": 0.15,
      "health": 0.14,
      "security": 0.18
     }
    },
    "noSi": {
     "collapse": 0.16,
     "abundance": 0.003,
     "pillarLoss": {
      "energy": 0.06,
      "water": 0.08,
      "food": 0.08,
      "health": 0.07,
      "security": 0.1
     }
    },
    "rationale": "Typhoons, sea-level rise, energy import dependence and its frontline position in a South China Sea conflict are the main risks; weak water coverage and modest income keep abundance unlikely."
   },
   {
    "entity": "COD",
    "si": {
     "collapse": 0.49,
     "abundance": 0.02,
     "pillarLoss": {
      "energy": 0.18,
      "water": 0.22,
      "food": 0.34,
      "health": 0.24,
      "security": 0.4
     }
    },
    "noSi": {
     "collapse": 0.46,
     "abundance": 0.001,
     "pillarLoss": {
      "energy": 0.12,
      "water": 0.18,
      "food": 0.32,
      "health": 0.2,
      "security": 0.36
     }
    },
    "rationale": "Chronic war, near-failed government, mass hunger and very low incomes make a nationwide security or food collapse close to even odds; demand for its copper and cobalt under superintelligence could fuel more conflict."
   },
   {
    "entity": "VNM",
    "si": {
     "collapse": 0.22,
     "abundance": 0.16,
     "pillarLoss": {
      "energy": 0.13,
      "water": 0.14,
      "food": 0.15,
      "health": 0.13,
      "security": 0.17
     }
    },
    "noSi": {
     "collapse": 0.14,
     "abundance": 0.006,
     "pillarLoss": {
      "energy": 0.05,
      "water": 0.07,
      "food": 0.08,
      "health": 0.06,
      "security": 0.08
     }
    },
    "rationale": "Stable, peaceful and fast-growing, but the Mekong delta rice bowl faces sea-level rise and salinization, and tension with China is a war risk."
   },
   {
    "entity": "IRN",
    "si": {
     "collapse": 0.33,
     "abundance": 0.1,
     "pillarLoss": {
      "energy": 0.15,
      "water": 0.21,
      "food": 0.18,
      "health": 0.16,
      "security": 0.23
     }
    },
    "noSi": {
     "collapse": 0.28,
     "abundance": 0.004,
     "pillarLoss": {
      "energy": 0.08,
      "water": 0.17,
      "food": 0.12,
      "health": 0.1,
      "security": 0.18
     }
    },
    "rationale": "Extreme and worsening water stress in its big cities, sanctions, war with Israel and the US, and an unstable regime that could fall violently make collapse a real risk."
   },
   {
    "entity": "TUR",
    "si": {
     "collapse": 0.22,
     "abundance": 0.16,
     "pillarLoss": {
      "energy": 0.14,
      "water": 0.15,
      "food": 0.13,
      "health": 0.13,
      "security": 0.17
     }
    },
    "noSi": {
     "collapse": 0.14,
     "abundance": 0.008,
     "pillarLoss": {
      "energy": 0.06,
      "water": 0.08,
      "food": 0.06,
      "health": 0.06,
      "security": 0.09
     }
    },
    "rationale": "Middle-high income and capable industry favour it, but rising water stress, 70% energy imports, wars on its borders and economic instability weigh against near-free essentials."
   },
   {
    "entity": "DEU",
    "si": {
     "collapse": 0.17,
     "abundance": 0.32,
     "pillarLoss": {
      "energy": 0.14,
      "water": 0.12,
      "food": 0.13,
      "health": 0.13,
      "security": 0.15
     }
    },
    "noSi": {
     "collapse": 0.09,
     "abundance": 0.018,
     "pillarLoss": {
      "energy": 0.06,
      "water": 0.05,
      "food": 0.05,
      "health": 0.05,
      "security": 0.06
     }
    },
    "rationale": "Strong institutions, low climate vulnerability and high income make abundance plausible with superintelligence; heavy energy imports and a war with Russia are the main collapse paths, and today's 27% essentials cost rules out abundance without it."
   },
   {
    "entity": "THA",
    "si": {
     "collapse": 0.21,
     "abundance": 0.15,
     "pillarLoss": {
      "energy": 0.13,
      "water": 0.15,
      "food": 0.13,
      "health": 0.13,
      "security": 0.15
     }
    },
    "noSi": {
     "collapse": 0.13,
     "abundance": 0.006,
     "pillarLoss": {
      "energy": 0.06,
      "water": 0.08,
      "food": 0.06,
      "health": 0.06,
      "security": 0.07
     }
    },
    "rationale": "A food exporter with good health care, but high water stress, a sinking Bangkok, energy imports, rapid aging and recurring coups limit its odds."
   }
  ]
 },
 {
  "id": "spotlight-1-2026-11-24-3",
  "batch": "spotlight-1",
  "model": "Claude Opus 5.5",
  "date": "2026-11-24",
  "method": "Independent Claude Code agents reading only the prompt, prompt 2026-11-24.2",
  "entities": [
   {
    "entity": "IND",
    "si": {
     "collapse": 0.2,
     "abundance": 0.14,
     "pillarLoss": {
      "energy": 0.135,
      "water": 0.165,
      "food": 0.15,
      "health": 0.135,
      "security": 0.155
     }
    },
    "noSi": {
     "collapse": 0.15,
     "abundance": 0.008,
     "pillarLoss": {
      "energy": 0.06,
      "water": 0.11,
      "food": 0.09,
      "health": 0.065,
      "security": 0.085
     }
    },
    "rationale": "Extreme water stress, heat and a nuclear-armed rival are the main collapse paths; essentials still cost 31% of income, so near-free needs a large superintelligence-driven jump in wealth and state capacity."
   },
   {
    "entity": "CHN",
    "si": {
     "collapse": 0.19,
     "abundance": 0.25,
     "pillarLoss": {
      "energy": 0.14,
      "water": 0.14,
      "food": 0.14,
      "health": 0.135,
      "security": 0.17
     }
    },
    "noSi": {
     "collapse": 0.11,
     "abundance": 0.02,
     "pillarLoss": {
      "energy": 0.06,
      "water": 0.065,
      "food": 0.065,
      "health": 0.055,
      "security": 0.09
     }
    },
    "rationale": "Strong state capacity and low essentials cost make abundance plausible with superintelligence, but a Taiwan war and extreme aging are the key risks."
   },
   {
    "entity": "USA",
    "si": {
     "collapse": 0.18,
     "abundance": 0.3,
     "pillarLoss": {
      "energy": 0.135,
      "water": 0.125,
      "food": 0.13,
      "health": 0.14,
      "security": 0.16
     }
    },
    "noSi": {
     "collapse": 0.09,
     "abundance": 0.02,
     "pillarLoss": {
      "energy": 0.055,
      "water": 0.05,
      "food": 0.052,
      "health": 0.06,
      "security": 0.075
     }
    },
    "rationale": "Wealth and likely leadership in AI favour abundance if superintelligence arrives, but health spending alone is about 17% of GDP, so near-free is very hard without it; polarisation and great-power war are the main collapse risks."
   },
   {
    "entity": "IDN",
    "si": {
     "collapse": 0.18,
     "abundance": 0.14,
     "pillarLoss": {
      "energy": 0.13,
      "water": 0.145,
      "food": 0.14,
      "health": 0.135,
      "security": 0.15
     }
    },
    "noSi": {
     "collapse": 0.12,
     "abundance": 0.01,
     "pillarLoss": {
      "energy": 0.055,
      "water": 0.075,
      "food": 0.07,
      "health": 0.06,
      "security": 0.085
     }
    },
    "rationale": "Relatively peaceful with energy self-sufficiency, but very low safe-water coverage and middle income keep abundance unlikely; sea-level rise and political instability are the main threats."
   },
   {
    "entity": "PAK",
    "si": {
     "collapse": 0.3,
     "abundance": 0.06,
     "pillarLoss": {
      "energy": 0.16,
      "water": 0.22,
      "food": 0.2,
      "health": 0.16,
      "security": 0.24
     }
    },
    "noSi": {
     "collapse": 0.27,
     "abundance": 0.003,
     "pillarLoss": {
      "energy": 0.09,
      "water": 0.17,
      "food": 0.15,
      "health": 0.1,
      "security": 0.19
     }
    },
    "rationale": "Very low political stability, severe water stress, climate exposure and nuclear rivalry with India make a breakdown of security or water a real risk; low income makes near-free essentials remote."
   },
   {
    "entity": "NGA",
    "si": {
     "collapse": 0.32,
     "abundance": 0.06,
     "pillarLoss": {
      "energy": 0.15,
      "water": 0.17,
      "food": 0.23,
      "health": 0.18,
      "security": 0.26
     }
    },
    "noSi": {
     "collapse": 0.3,
     "abundance": 0.003,
     "pillarLoss": {
      "energy": 0.08,
      "water": 0.11,
      "food": 0.19,
      "health": 0.13,
      "security": 0.22
     }
    },
    "rationale": "Insurgencies, weak governance, high hunger and fast population growth drive collapse risk mainly through security and food; essentials already cost 38% of income."
   },
   {
    "entity": "BRA",
    "si": {
     "collapse": 0.18,
     "abundance": 0.16,
     "pillarLoss": {
      "energy": 0.13,
      "water": 0.14,
      "food": 0.13,
      "health": 0.135,
      "security": 0.155
     }
    },
    "noSi": {
     "collapse": 0.11,
     "abundance": 0.01,
     "pillarLoss": {
      "energy": 0.055,
      "water": 0.065,
      "food": 0.055,
      "health": 0.06,
      "security": 0.08
     }
    },
    "rationale": "Food and energy surpluses and low water stress make collapse fairly unlikely, but high violence, debt and middle income hold back abundance."
   },
   {
    "entity": "BGD",
    "si": {
     "collapse": 0.22,
     "abundance": 0.1,
     "pillarLoss": {
      "energy": 0.14,
      "water": 0.18,
      "food": 0.18,
      "health": 0.14,
      "security": 0.16
     }
    },
    "noSi": {
     "collapse": 0.2,
     "abundance": 0.005,
     "pillarLoss": {
      "energy": 0.07,
      "water": 0.13,
      "food": 0.13,
      "health": 0.08,
      "security": 0.1
     }
    },
    "rationale": "A low delta with high climate vulnerability and weak readiness to adapt faces sea-level rise, flooding and salinity that threaten water and food; strong health gains are the bright spot."
   },
   {
    "entity": "RUS",
    "si": {
     "collapse": 0.22,
     "abundance": 0.15,
     "pillarLoss": {
      "energy": 0.13,
      "water": 0.13,
      "food": 0.135,
      "health": 0.15,
      "security": 0.2
     }
    },
    "noSi": {
     "collapse": 0.15,
     "abundance": 0.01,
     "pillarLoss": {
      "energy": 0.055,
      "water": 0.06,
      "food": 0.065,
      "health": 0.08,
      "security": 0.13
     }
    },
    "rationale": "Ongoing war, a brittle regime and nuclear escalation risk make security the main collapse path; energy and food surpluses help, but weak governance limits abundance."
   },
   {
    "entity": "ETH",
    "si": {
     "collapse": 0.34,
     "abundance": 0.06,
     "pillarLoss": {
      "energy": 0.14,
      "water": 0.17,
      "food": 0.25,
      "health": 0.17,
      "security": 0.27
     }
    },
    "noSi": {
     "collapse": 0.33,
     "abundance": 0.004,
     "pillarLoss": {
      "energy": 0.07,
      "water": 0.12,
      "food": 0.22,
      "health": 0.11,
      "security": 0.24
     }
    },
    "rationale": "Recurring civil war, famine history and very low income make security and food breakdowns likely risks; abundance needs both peace and a transformative technology shock."
   },
   {
    "entity": "MEX",
    "si": {
     "collapse": 0.2,
     "abundance": 0.15,
     "pillarLoss": {
      "energy": 0.13,
      "water": 0.16,
      "food": 0.135,
      "health": 0.135,
      "security": 0.17
     }
    },
    "noSi": {
     "collapse": 0.15,
     "abundance": 0.01,
     "pillarLoss": {
      "energy": 0.055,
      "water": 0.1,
      "food": 0.065,
      "health": 0.065,
      "security": 0.11
     }
    },
    "rationale": "Cartel violence and very high water stress are the main threats; ties to the US economy could spread superintelligence gains, but low safe-water coverage and insecurity hold back abundance."
   },
   {
    "entity": "JPN",
    "si": {
     "collapse": 0.17,
     "abundance": 0.29,
     "pillarLoss": {
      "energy": 0.145,
      "water": 0.125,
      "food": 0.14,
      "health": 0.13,
      "security": 0.15
     }
    },
    "noSi": {
     "collapse": 0.09,
     "abundance": 0.02,
     "pillarLoss": {
      "energy": 0.065,
      "water": 0.05,
      "food": 0.06,
      "health": 0.055,
      "security": 0.07
     }
    },
    "rationale": "Excellent governance and safety favour abundance with superintelligence, but heavy energy and food imports, extreme aging and regional war risk are the vulnerabilities."
   },
   {
    "entity": "EGY",
    "si": {
     "collapse": 0.25,
     "abundance": 0.09,
     "pillarLoss": {
      "energy": 0.14,
      "water": 0.21,
      "food": 0.2,
      "health": 0.14,
      "security": 0.17
     }
    },
    "noSi": {
     "collapse": 0.22,
     "abundance": 0.005,
     "pillarLoss": {
      "energy": 0.065,
      "water": 0.17,
      "food": 0.15,
      "health": 0.07,
      "security": 0.1
     }
    },
    "rationale": "Near-total dependence on the Nile, extreme water stress, food imports and a heavy debt burden make water and food the main collapse paths; cheap desalination from superintelligence could change that."
   },
   {
    "entity": "PHL",
    "si": {
     "collapse": 0.19,
     "abundance": 0.12,
     "pillarLoss": {
      "energy": 0.135,
      "water": 0.14,
      "food": 0.145,
      "health": 0.135,
      "security": 0.155
     }
    },
    "noSi": {
     "collapse": 0.13,
     "abundance": 0.008,
     "pillarLoss": {
      "energy": 0.06,
      "water": 0.07,
      "food": 0.08,
      "health": 0.06,
      "security": 0.09
     }
    },
    "rationale": "Typhoons, sea-level rise and South China Sea tensions are the main risks; low safe-water coverage and import dependence keep abundance unlikely."
   },
   {
    "entity": "COD",
    "si": {
     "collapse": 0.43,
     "abundance": 0.04,
     "pillarLoss": {
      "energy": 0.14,
      "water": 0.18,
      "food": 0.33,
      "health": 0.24,
      "security": 0.35
     }
    },
    "noSi": {
     "collapse": 0.42,
     "abundance": 0.002,
     "pillarLoss": {
      "energy": 0.07,
      "water": 0.12,
      "food": 0.31,
      "health": 0.19,
      "security": 0.33
     }
    },
    "rationale": "Chronic war, the weakest governance in the set and 40% undernourishment make a nationwide security or food collapse likely over 75 years; abundance is very remote."
   },
   {
    "entity": "VNM",
    "si": {
     "collapse": 0.18,
     "abundance": 0.16,
     "pillarLoss": {
      "energy": 0.13,
      "water": 0.145,
      "food": 0.145,
      "health": 0.13,
      "security": 0.15
     }
    },
    "noSi": {
     "collapse": 0.12,
     "abundance": 0.012,
     "pillarLoss": {
      "energy": 0.055,
      "water": 0.075,
      "food": 0.075,
      "health": 0.055,
      "security": 0.08
     }
    },
    "rationale": "Stable, low-debt and fast-growing, but the Mekong delta faces sea-level rise and salinity, and tension with China is a security risk."
   },
   {
    "entity": "IRN",
    "si": {
     "collapse": 0.3,
     "abundance": 0.1,
     "pillarLoss": {
      "energy": 0.15,
      "water": 0.24,
      "food": 0.18,
      "health": 0.16,
      "security": 0.24
     }
    },
    "noSi": {
     "collapse": 0.27,
     "abundance": 0.005,
     "pillarLoss": {
      "energy": 0.08,
      "water": 0.2,
      "food": 0.13,
      "health": 0.09,
      "security": 0.18
     }
    },
    "rationale": "Water depletion is already acute and political instability, sanctions and war with Israel and the US are real risks; good health and energy reserves are the strengths."
   },
   {
    "entity": "TUR",
    "si": {
     "collapse": 0.19,
     "abundance": 0.17,
     "pillarLoss": {
      "energy": 0.14,
      "water": 0.15,
      "food": 0.135,
      "health": 0.13,
      "security": 0.16
     }
    },
    "noSi": {
     "collapse": 0.13,
     "abundance": 0.015,
     "pillarLoss": {
      "energy": 0.065,
      "water": 0.08,
      "food": 0.06,
      "health": 0.055,
      "security": 0.09
     }
    },
    "rationale": "Fairly high income, low debt and good health help, but rising water stress, energy imports, earthquakes and a volatile region are the main risks."
   },
   {
    "entity": "DEU",
    "si": {
     "collapse": 0.16,
     "abundance": 0.3,
     "pillarLoss": {
      "energy": 0.135,
      "water": 0.123,
      "food": 0.127,
      "health": 0.13,
      "security": 0.145
     }
    },
    "noSi": {
     "collapse": 0.08,
     "abundance": 0.03,
     "pillarLoss": {
      "energy": 0.058,
      "water": 0.048,
      "food": 0.052,
      "health": 0.053,
      "security": 0.065
     }
    },
    "rationale": "Strong institutions and wealth make local collapse unlikely and abundance plausible with superintelligence; without it, aging-driven health costs keep the essentials well above 10% of income."
   },
   {
    "entity": "THA",
    "si": {
     "collapse": 0.18,
     "abundance": 0.17,
     "pillarLoss": {
      "energy": 0.135,
      "water": 0.145,
      "food": 0.13,
      "health": 0.13,
      "security": 0.145
     }
    },
    "noSi": {
     "collapse": 0.12,
     "abundance": 0.012,
     "pillarLoss": {
      "energy": 0.06,
      "water": 0.08,
      "food": 0.06,
      "health": 0.055,
      "security": 0.075
     }
    },
    "rationale": "A food exporter with good health outcomes, but high water stress, a sinking Bangkok, energy imports and recurring coups are the main vulnerabilities."
   }
  ]
 }
]
