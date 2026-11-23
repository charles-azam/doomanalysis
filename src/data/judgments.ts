import type { JudgeRun } from '../model/types.ts'

/** Validated judge runs, imported by pdoom/judge/import-runs.ts. Do not edit by hand. */
export const judgeRuns: JudgeRun[] = [
  {
    "id": "run-2026-11-23-1",
    "model": "Claude Opus 5.5",
    "date": "2026-11-23",
    "method": "Independent Claude Code subagents, no tools besides reading the prompt, prompt 2026-11-23.1",
    "world": {
      "siBy2050": 0.45,
      "siBy2100": 0.68,
      "si": {
        "doom": 0.12,
        "abundance": 0.45,
        "pathways": {
          "ai": 0.09,
          "nuclear": 0.012,
          "pandemic": 0.01,
          "climate": 0.002,
          "resources": 0.001,
          "other": 0.005
        }
      },
      "noSi": {
        "doom": 0.04,
        "abundance": 0.15,
        "pathways": {
          "ai": 0.003,
          "nuclear": 0.016,
          "pandemic": 0.01,
          "climate": 0.004,
          "resources": 0.003,
          "other": 0.004
        }
      },
      "rationale": "Rapid capability gains (multi-hour METR task horizons in 2026) make superintelligence by 2050 close to a coin flip and likely by 2100, and loss of control or misuse then dominates doom risk. Without SI, doom stays a few percent, driven by nuclear war and engineered pandemics, and is slightly raised because some no-SI worlds are ones where a catastrophe halted progress; climate and resource stress are severe but rarely irreversible at civilizational scale. Global abundance demands 90% of a population increasingly concentrated in sub-Saharan Africa to have all five essentials including security and 75+ life expectancy, which trend growth alone rarely delivers but SI-driven abundance plausibly can."
    },
    "countries": [
      {
        "entity": "FRA",
        "si": {
          "collapse": 0.16,
          "abundance": 0.76,
          "pillarLoss": {
            "energy": 0.12,
            "water": 0.1,
            "food": 0.12,
            "health": 0.12,
            "security": 0.14
          }
        },
        "noSi": {
          "collapse": 0.07,
          "abundance": 0.75,
          "pillarLoss": {
            "energy": 0.04,
            "water": 0.03,
            "food": 0.045,
            "health": 0.04,
            "security": 0.055
          }
        },
        "rationale": "France already meets nearly every threshold (83-year life expectancy, universal electricity and water), so abundance is mainly a question of avoiding global catastrophe and a European war; food insecurity near 9% and aging are the main reasons abundance is not higher."
      },
      {
        "entity": "USA",
        "si": {
          "collapse": 0.17,
          "abundance": 0.72,
          "pillarLoss": {
            "energy": 0.12,
            "water": 0.1,
            "food": 0.12,
            "health": 0.12,
            "security": 0.15
          }
        },
        "noSi": {
          "collapse": 0.08,
          "abundance": 0.62,
          "pillarLoss": {
            "energy": 0.04,
            "water": 0.035,
            "food": 0.045,
            "health": 0.045,
            "security": 0.065
          }
        },
        "rationale": "Great wealth and adaptive capacity, but higher fragility, food insecurity around 11%, status as a primary nuclear target and as the likely site of SI development raise collapse risk; unequal health and food access are the main barrier to the 90% abundance threshold."
      },
      {
        "entity": "CHN",
        "si": {
          "collapse": 0.18,
          "abundance": 0.65,
          "pillarLoss": {
            "energy": 0.12,
            "water": 0.12,
            "food": 0.13,
            "health": 0.12,
            "security": 0.16
          }
        },
        "noSi": {
          "collapse": 0.09,
          "abundance": 0.6,
          "pillarLoss": {
            "energy": 0.045,
            "water": 0.05,
            "food": 0.055,
            "health": 0.045,
            "security": 0.07
          }
        },
        "rationale": "Strong state capacity and high living standards favor abundance, but a Taiwan conflict with the US, political instability, northern water stress and an extreme 1.0 fertility rate straining care for the elderly are the main risks."
      },
      {
        "entity": "IND",
        "si": {
          "collapse": 0.22,
          "abundance": 0.5,
          "pillarLoss": {
            "energy": 0.13,
            "water": 0.17,
            "food": 0.17,
            "health": 0.14,
            "security": 0.17
          }
        },
        "noSi": {
          "collapse": 0.13,
          "abundance": 0.38,
          "pillarLoss": {
            "energy": 0.05,
            "water": 0.09,
            "food": 0.09,
            "health": 0.06,
            "security": 0.08
          }
        },
        "rationale": "Extreme water stress, groundwater depletion, lethal heat and the risk of nuclear war with Pakistan drive collapse risk, while fast growth and near-universal electricity make reaching the 90% threshold plausible by 2100, especially with SI."
      },
      {
        "entity": "NGA",
        "si": {
          "collapse": 0.3,
          "abundance": 0.3,
          "pillarLoss": {
            "energy": 0.14,
            "water": 0.15,
            "food": 0.2,
            "health": 0.17,
            "security": 0.26
          }
        },
        "noSi": {
          "collapse": 0.28,
          "abundance": 0.07,
          "pillarLoss": {
            "energy": 0.08,
            "water": 0.1,
            "food": 0.16,
            "health": 0.12,
            "security": 0.24
          }
        },
        "rationale": "Very high fragility, ethnic grievance, insurgency and rapid population growth make a long civil war or state failure the dominant collapse route; starting from 55-year life expectancy, 30% safe water and 77% food insecurity, 90% abundance by 2100 is unlikely without SI."
      },
      {
        "entity": "BRA",
        "si": {
          "collapse": 0.17,
          "abundance": 0.6,
          "pillarLoss": {
            "energy": 0.12,
            "water": 0.12,
            "food": 0.13,
            "health": 0.12,
            "security": 0.15
          }
        },
        "noSi": {
          "collapse": 0.09,
          "abundance": 0.4,
          "pillarLoss": {
            "energy": 0.045,
            "water": 0.05,
            "food": 0.055,
            "health": 0.05,
            "security": 0.07
          }
        },
        "rationale": "Abundant water, hydro and renewables and food surpluses keep collapse risk low; high criminal violence, inequality and gaps in sanitation are the main obstacles to the 90% abundance threshold, with Amazon dieback a tail risk."
      },
      {
        "entity": "BGD",
        "si": {
          "collapse": 0.24,
          "abundance": 0.45,
          "pillarLoss": {
            "energy": 0.13,
            "water": 0.17,
            "food": 0.19,
            "health": 0.14,
            "security": 0.17
          }
        },
        "noSi": {
          "collapse": 0.16,
          "abundance": 0.25,
          "pillarLoss": {
            "energy": 0.05,
            "water": 0.1,
            "food": 0.12,
            "health": 0.07,
            "security": 0.09
          }
        },
        "rationale": "A densely populated low-lying delta faces sea-level rise, cyclones and salinization that threaten food and water, plus high fragility and grievance; strong recent gains in electricity and life expectancy give a real but uncertain path to abundance."
      },
      {
        "entity": "EGY",
        "si": {
          "collapse": 0.25,
          "abundance": 0.45,
          "pillarLoss": {
            "energy": 0.13,
            "water": 0.2,
            "food": 0.2,
            "health": 0.14,
            "security": 0.18
          }
        },
        "noSi": {
          "collapse": 0.18,
          "abundance": 0.25,
          "pillarLoss": {
            "energy": 0.05,
            "water": 0.14,
            "food": 0.14,
            "health": 0.07,
            "security": 0.11
          }
        },
        "rationale": "Near-total dependence on the Nile under extreme water stress, heavy food imports, a growing population and regime fragility make water and food the main collapse routes; cheap energy for desalination, especially with SI, is the main path to abundance."
      }
    ]
  },
  {
    "id": "run-2026-11-23-2",
    "model": "Claude Opus 5.5",
    "date": "2026-11-23",
    "method": "Independent Claude Code subagents, no tools besides reading the prompt, prompt 2026-11-23.1",
    "world": {
      "siBy2050": 0.5,
      "siBy2100": 0.72,
      "si": {
        "doom": 0.13,
        "abundance": 0.3,
        "pathways": {
          "ai": 0.09,
          "nuclear": 0.015,
          "pandemic": 0.012,
          "climate": 0.002,
          "resources": 0.002,
          "other": 0.009
        }
      },
      "noSi": {
        "doom": 0.035,
        "abundance": 0.12,
        "pathways": {
          "ai": 0.003,
          "nuclear": 0.015,
          "pandemic": 0.01,
          "climate": 0.003,
          "resources": 0.002,
          "other": 0.002
        }
      },
      "rationale": "Rapid capability gains (17-hour METR task horizons in 2026) make superintelligence by 2050 roughly a coin flip and likely by 2100, and loss of control or AI-enabled disempowerment dominates doom when it arrives. Without SI, doom is mostly nuclear war and engineered pandemics; climate and resource stress are severe but rarely civilization-ending within this century. Global abundance at the 90% bar is hard because sub-Saharan Africa and South Asia hold a growing share of humanity and security and health access lag, though SI-driven cheap energy, medicine and desalination raise the odds substantially."
    },
    "countries": [
      {
        "entity": "FRA",
        "si": {
          "collapse": 0.17,
          "abundance": 0.68,
          "pillarLoss": {
            "energy": 0.08,
            "water": 0.05,
            "food": 0.09,
            "health": 0.09,
            "security": 0.14
          }
        },
        "noSi": {
          "collapse": 0.08,
          "abundance": 0.68,
          "pillarLoss": {
            "energy": 0.03,
            "water": 0.015,
            "food": 0.03,
            "health": 0.03,
            "security": 0.05
          }
        },
        "rationale": "France already meets all five essentials for nearly everyone, with a nuclear-heavy grid, high state capacity and low water stress. Its main risks are global doom, a great-power or nuclear war in Europe, and aging plus social grievance straining the health system."
      },
      {
        "entity": "USA",
        "si": {
          "collapse": 0.19,
          "abundance": 0.64,
          "pillarLoss": {
            "energy": 0.08,
            "water": 0.05,
            "food": 0.08,
            "health": 0.09,
            "security": 0.16
          }
        },
        "noSi": {
          "collapse": 0.1,
          "abundance": 0.6,
          "pillarLoss": {
            "energy": 0.03,
            "water": 0.02,
            "food": 0.03,
            "health": 0.04,
            "security": 0.07
          }
        },
        "rationale": "Great wealth, resources and food surpluses make essential-loss unlikely, but polarization, higher state fragility than peers and its role as a primary nuclear and AI-race actor raise security risk. Uneven health access and food insecurity near 11% make the 90% abundance bar less certain than wealth suggests."
      },
      {
        "entity": "CHN",
        "si": {
          "collapse": 0.22,
          "abundance": 0.55,
          "pillarLoss": {
            "energy": 0.08,
            "water": 0.08,
            "food": 0.1,
            "health": 0.09,
            "security": 0.18
          }
        },
        "noSi": {
          "collapse": 0.13,
          "abundance": 0.5,
          "pillarLoss": {
            "energy": 0.03,
            "water": 0.05,
            "food": 0.05,
            "health": 0.04,
            "security": 0.09
          }
        },
        "rationale": "Strong state capacity and dominance of clean-energy supply chains support abundance, but a Taiwan conflict with the US, extreme demographic decline (fertility 1.0) and northern water stress are the key collapse risks. As a leading AI power it is directly exposed to an SI race and its geopolitical shocks."
      },
      {
        "entity": "IND",
        "si": {
          "collapse": 0.26,
          "abundance": 0.42,
          "pillarLoss": {
            "energy": 0.08,
            "water": 0.14,
            "food": 0.14,
            "health": 0.1,
            "security": 0.16
          }
        },
        "noSi": {
          "collapse": 0.18,
          "abundance": 0.3,
          "pillarLoss": {
            "energy": 0.03,
            "water": 0.1,
            "food": 0.09,
            "health": 0.05,
            "security": 0.08
          }
        },
        "rationale": "Extremely high water stress, lethal heat and monsoon dependence threaten water and food, and a nuclear-armed rivalry with Pakistan adds security risk. Rising incomes and near-universal electricity give a real but uncertain path to 90% access by 2100."
      },
      {
        "entity": "NGA",
        "si": {
          "collapse": 0.4,
          "abundance": 0.18,
          "pillarLoss": {
            "energy": 0.12,
            "water": 0.13,
            "food": 0.22,
            "health": 0.16,
            "security": 0.28
          }
        },
        "noSi": {
          "collapse": 0.35,
          "abundance": 0.06,
          "pillarLoss": {
            "energy": 0.08,
            "water": 0.1,
            "food": 0.2,
            "health": 0.12,
            "security": 0.25
          }
        },
        "rationale": "Very high fragility, multiple insurgencies, 76% food insecurity and a population set to roughly double make prolonged security or food breakdown for a majority plausible. Starting from 55-year life expectancy and 30% safe water, reaching 90% on all five essentials by 2100 is unlikely without transformative technology."
      },
      {
        "entity": "BRA",
        "si": {
          "collapse": 0.2,
          "abundance": 0.48,
          "pillarLoss": {
            "energy": 0.08,
            "water": 0.08,
            "food": 0.09,
            "health": 0.09,
            "security": 0.15
          }
        },
        "noSi": {
          "collapse": 0.12,
          "abundance": 0.35,
          "pillarLoss": {
            "energy": 0.03,
            "water": 0.04,
            "food": 0.04,
            "health": 0.04,
            "security": 0.08
          }
        },
        "rationale": "Abundant water, food exports and renewable power make essential loss unlikely, and Brazil is far from great-power war. High criminal violence and inequality limit the 90% security and health bar, and Amazon dieback threatens rainfall-dependent hydro and agriculture."
      },
      {
        "entity": "BGD",
        "si": {
          "collapse": 0.3,
          "abundance": 0.32,
          "pillarLoss": {
            "energy": 0.1,
            "water": 0.16,
            "food": 0.18,
            "health": 0.12,
            "security": 0.17
          }
        },
        "noSi": {
          "collapse": 0.25,
          "abundance": 0.18,
          "pillarLoss": {
            "energy": 0.06,
            "water": 0.13,
            "food": 0.15,
            "health": 0.07,
            "security": 0.12
          }
        },
        "rationale": "A low-lying, densely populated delta faces accelerating sea-level rise, salinization and cyclones that threaten food and water for tens of millions, with weak adaptive readiness and political instability. Strong health gains (life expectancy near 75) and falling fertility keep a meaningful path to abundance."
      },
      {
        "entity": "EGY",
        "si": {
          "collapse": 0.32,
          "abundance": 0.32,
          "pillarLoss": {
            "energy": 0.09,
            "water": 0.19,
            "food": 0.19,
            "health": 0.11,
            "security": 0.17
          }
        },
        "noSi": {
          "collapse": 0.27,
          "abundance": 0.2,
          "pillarLoss": {
            "energy": 0.05,
            "water": 0.17,
            "food": 0.17,
            "health": 0.06,
            "security": 0.12
          }
        },
        "rationale": "Near-total dependence on the Nile under extreme water stress, upstream dam disputes, heavy wheat imports and fast population growth make water and food the critical pillars. Cheap solar-powered desalination and continued state stability are the main routes to abundance, both more likely with SI."
      }
    ]
  },
  {
    "id": "run-2026-11-23-3",
    "model": "Claude Opus 5.5",
    "date": "2026-11-23",
    "method": "Independent Claude Code subagents, no tools besides reading the prompt, prompt 2026-11-23.1",
    "world": {
      "siBy2050": 0.5,
      "siBy2100": 0.75,
      "si": {
        "doom": 0.15,
        "abundance": 0.45,
        "pathways": {
          "ai": 0.11,
          "nuclear": 0.015,
          "pandemic": 0.012,
          "climate": 0.002,
          "resources": 0.002,
          "other": 0.009
        }
      },
      "noSi": {
        "doom": 0.03,
        "abundance": 0.12,
        "pathways": {
          "ai": 0.003,
          "nuclear": 0.012,
          "pandemic": 0.008,
          "climate": 0.003,
          "resources": 0.002,
          "other": 0.002
        }
      },
      "rationale": "AI capability trends (multi-hour METR horizons in 2026, collapsing solar and battery costs) make superintelligence by 2050 roughly a coin flip and likely by 2100. If it arrives, loss of control or AI-enabled disempowerment dominates doom, with AI-amplified bio and great-power war as secondary routes, but SI also makes 90% global access to the essentials plausible. Without SI, doom is mostly tail risk from nuclear war and engineered pandemics, since climate and resource stress hurt badly but rarely end civilization; global abundance stays unlikely because Sub-Saharan Africa and South Asia, a large share of 2100 humanity, are far below the health and security thresholds."
    },
    "countries": [
      {
        "entity": "FRA",
        "si": {
          "collapse": 0.19,
          "abundance": 0.72,
          "pillarLoss": {
            "energy": 0.16,
            "water": 0.15,
            "food": 0.16,
            "health": 0.16,
            "security": 0.17
          }
        },
        "noSi": {
          "collapse": 0.07,
          "abundance": 0.7,
          "pillarLoss": {
            "energy": 0.04,
            "water": 0.035,
            "food": 0.04,
            "health": 0.04,
            "security": 0.05
          }
        },
        "rationale": "France already meets nearly all essentials, with a nuclear-heavy grid, low water stress and high life expectancy, so its collapse risk is mostly global doom plus a European war tail. Abundance is limited by affordability and food insecurity (9.4% moderate or severe), aging and social grievance rather than by physical capacity."
      },
      {
        "entity": "USA",
        "si": {
          "collapse": 0.2,
          "abundance": 0.68,
          "pillarLoss": {
            "energy": 0.16,
            "water": 0.155,
            "food": 0.16,
            "health": 0.165,
            "security": 0.18
          }
        },
        "noSi": {
          "collapse": 0.08,
          "abundance": 0.62,
          "pillarLoss": {
            "energy": 0.04,
            "water": 0.035,
            "food": 0.04,
            "health": 0.045,
            "security": 0.06
          }
        },
        "rationale": "Enormous wealth and resource base make physical collapse unlikely outside global catastrophe, but the US is the likely SI frontier and a nuclear target. Political polarization, uneven health-care access, a lower life expectancy than peers and gun violence weigh on abundance and the security pillar."
      },
      {
        "entity": "CHN",
        "si": {
          "collapse": 0.22,
          "abundance": 0.6,
          "pillarLoss": {
            "energy": 0.16,
            "water": 0.17,
            "food": 0.17,
            "health": 0.165,
            "security": 0.19
          }
        },
        "noSi": {
          "collapse": 0.1,
          "abundance": 0.52,
          "pillarLoss": {
            "energy": 0.04,
            "water": 0.06,
            "food": 0.05,
            "health": 0.05,
            "security": 0.08
          }
        },
        "rationale": "Strong state capacity, universal electricity and dominance of clean-energy supply chains support abundance, but a Taiwan or US-China AI-race war is the main collapse route. Northern water stress, food-import dependence and a fertility rate near 1.0 driving rapid aging are the main slow-burn risks."
      },
      {
        "entity": "IND",
        "si": {
          "collapse": 0.26,
          "abundance": 0.42,
          "pillarLoss": {
            "energy": 0.17,
            "water": 0.21,
            "food": 0.2,
            "health": 0.17,
            "security": 0.19
          }
        },
        "noSi": {
          "collapse": 0.16,
          "abundance": 0.22,
          "pillarLoss": {
            "energy": 0.05,
            "water": 0.11,
            "food": 0.09,
            "health": 0.05,
            "security": 0.09
          }
        },
        "rationale": "Extremely high water stress, groundwater depletion and growing wet-bulb heat exposure threaten water and food, and a nuclear-armed rivalry with Pakistan adds a security tail. Fast growth and near-universal electricity give a credible path to abundance, but the 90% threshold for safe water and life expectancy of 75 or more is a high bar."
      },
      {
        "entity": "NGA",
        "si": {
          "collapse": 0.38,
          "abundance": 0.25,
          "pillarLoss": {
            "energy": 0.19,
            "water": 0.22,
            "food": 0.27,
            "health": 0.24,
            "security": 0.3
          }
        },
        "noSi": {
          "collapse": 0.33,
          "abundance": 0.05,
          "pillarLoss": {
            "energy": 0.06,
            "water": 0.12,
            "food": 0.2,
            "health": 0.14,
            "security": 0.24
          }
        },
        "rationale": "Very high fragility (FSI 96.6), insurgency and banditry, 76.5% moderate or severe food insecurity and a life expectancy of 54.6 leave little buffer, while the population may roughly double by 2100. Abundance without SI is very unlikely; SI could leapfrog health and energy but also disrupt oil revenue and labor markets."
      },
      {
        "entity": "BRA",
        "si": {
          "collapse": 0.21,
          "abundance": 0.52,
          "pillarLoss": {
            "energy": 0.155,
            "water": 0.16,
            "food": 0.155,
            "health": 0.165,
            "security": 0.18
          }
        },
        "noSi": {
          "collapse": 0.08,
          "abundance": 0.33,
          "pillarLoss": {
            "energy": 0.03,
            "water": 0.04,
            "food": 0.035,
            "health": 0.04,
            "security": 0.06
          }
        },
        "rationale": "Brazil is a food and hydro-energy surplus country with low water stress and no major interstate threats, so collapse is unlikely outside global doom. High criminal violence, inequality and Amazon tipping-point risk to rainfall are what keep abundance well short of certain."
      },
      {
        "entity": "BGD",
        "si": {
          "collapse": 0.3,
          "abundance": 0.35,
          "pillarLoss": {
            "energy": 0.18,
            "water": 0.22,
            "food": 0.23,
            "health": 0.18,
            "security": 0.2
          }
        },
        "noSi": {
          "collapse": 0.22,
          "abundance": 0.12,
          "pillarLoss": {
            "energy": 0.06,
            "water": 0.13,
            "food": 0.14,
            "health": 0.06,
            "security": 0.09
          }
        },
        "rationale": "A dense, low-lying delta exposed to accelerating sea-level rise, cyclones, salinization and upstream water control makes water and food the main collapse routes. Strong development gains and near-universal electricity help, but high climate vulnerability and low adaptive readiness limit abundance."
      },
      {
        "entity": "EGY",
        "si": {
          "collapse": 0.3,
          "abundance": 0.35,
          "pillarLoss": {
            "energy": 0.17,
            "water": 0.23,
            "food": 0.24,
            "health": 0.17,
            "security": 0.2
          }
        },
        "noSi": {
          "collapse": 0.22,
          "abundance": 0.12,
          "pillarLoss": {
            "energy": 0.05,
            "water": 0.15,
            "food": 0.15,
            "health": 0.05,
            "security": 0.1
          }
        },
        "rationale": "Near-total dependence on the Nile (water stress 4.85) and on wheat imports, a growing population and Delta exposure to sea-level rise make water and food the binding pillars. Cheap solar-powered desalination, much more likely with SI, is the main route to abundance; regional conflict and fiscal fragility add security risk."
      }
    ]
  }
]
