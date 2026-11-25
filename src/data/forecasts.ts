import type { ForecastRun } from '../model/types.ts'

/** Validated v0.3 judge runs, imported by pdoom/judge/import-forecasts.ts. Do not edit by hand. */
export const forecastRuns: ForecastRun[] = [
 {
  "id": "curves-climate-2026-11-25-1",
  "batch": "curves-climate",
  "model": "Claude Opus 5.5",
  "date": "2026-11-25",
  "method": "independent agent run, prompt 2026-11-25.1",
  "places": [],
  "curves": [
   {
    "card": "co2",
    "noSi": [
     {
      "value": 405,
      "above": 0.97
     },
     {
      "value": 840,
      "above": 0.04
     }
    ],
    "si": [
     {
      "value": 405,
      "above": 0.88
     },
     {
      "value": 840,
      "above": 0.025
     }
    ]
   },
   {
    "card": "warming",
    "noSi": [
     {
      "value": 3.5,
      "above": 0.13
     },
     {
      "value": 6,
      "above": 0.002
     }
    ],
    "si": [
     {
      "value": 1.5,
      "above": 0.85
     },
     {
      "value": 3.5,
      "above": 0.07
     },
     {
      "value": 6,
      "above": 0.0015
     }
    ]
   },
   {
    "card": "humid_heat",
    "noSi": [
     {
      "value": 50,
      "above": 0.01
     }
    ],
    "si": [
     {
      "value": 5,
      "above": 0.8
     },
     {
      "value": 50,
      "above": 0.006
     }
    ]
   },
   {
    "card": "harvests",
    "noSi": [
     {
      "value": 5,
      "above": 0.8
     },
     {
      "value": 30,
      "above": 0.03
     }
    ],
    "si": [
     {
      "value": 5,
      "above": 0.62
     },
     {
      "value": 30,
      "above": 0.015
     }
    ]
   },
   {
    "card": "extreme_weather",
    "noSi": [
     {
      "value": 13.9,
      "above": 0.91
     },
     {
      "value": 39.2,
      "above": 0.035
     }
    ],
    "si": [
     {
      "value": 8.6,
      "above": 0.85
     },
     {
      "value": 13.9,
      "above": 0.7
     },
     {
      "value": 39.2,
      "above": 0.022
     }
    ]
   },
   {
    "card": "sea_level",
    "noSi": [
     {
      "value": 100,
      "above": 0.05
     }
    ],
    "si": [
     {
      "value": 50,
      "above": 0.56
     },
     {
      "value": 100,
      "above": 0.035
     }
    ]
   },
   {
    "card": "ice_sheets",
    "noSi": [
     {
      "value": 3,
      "above": 0.86
     },
     {
      "value": 10,
      "above": 0.17
     }
    ],
    "si": [
     {
      "value": 3,
      "above": 0.72
     },
     {
      "value": 10,
      "above": 0.09
     }
    ]
   },
   {
    "card": "arctic_sea_ice",
    "noSi": [
     {
      "value": 1,
      "above": 0.2
     },
     {
      "value": 3.41,
      "above": 0.04
     },
     {
      "value": 6.7,
      "above": 0.006
     }
    ],
    "si": [
     {
      "value": 1,
      "above": 0.33
     },
     {
      "value": 3.41,
      "above": 0.09
     },
     {
      "value": 6.7,
      "above": 0.015
     }
    ]
   },
   {
    "card": "permafrost",
    "noSi": [
     {
      "value": 125,
      "above": 0.2
     },
     {
      "value": 250,
      "above": 0.03
     }
    ],
    "si": [
     {
      "value": 125,
      "above": 0.13
     },
     {
      "value": 250,
      "above": 0.02
     }
    ]
   },
   {
    "card": "amoc",
    "noSi": [
     {
      "value": 6,
      "above": 0.88
     },
     {
      "value": 10,
      "above": 0.65
     },
     {
      "value": 15,
      "above": 0.17
     }
    ],
    "si": [
     {
      "value": 6,
      "above": 0.91
     },
     {
      "value": 10,
      "above": 0.72
     },
     {
      "value": 15,
      "above": 0.23
     }
    ]
   },
   {
    "card": "ocean_heat",
    "noSi": [
     {
      "value": 1425,
      "above": 0.95
     },
     {
      "value": 1805,
      "above": 0.68
     },
     {
      "value": 2475,
      "above": 0.04
     }
    ],
    "si": [
     {
      "value": 1425,
      "above": 0.85
     },
     {
      "value": 1805,
      "above": 0.45
     },
     {
      "value": 2475,
      "above": 0.025
     }
    ]
   },
   {
    "card": "ocean_acidification",
    "noSi": [
     {
      "value": 2,
      "above": 0.94
     },
     {
      "value": 2.86,
      "above": 0.05
     },
     {
      "value": 3.21,
      "above": 0.003
     }
    ],
    "si": [
     {
      "value": 2,
      "above": 0.96
     },
     {
      "value": 2.86,
      "above": 0.16
     },
     {
      "value": 3.21,
      "above": 0.02
     }
    ]
   },
   {
    "card": "corals",
    "noSi": [
     {
      "value": 70,
      "above": 0.96
     },
     {
      "value": 90,
      "above": 0.82
     }
    ],
    "si": [
     {
      "value": 70,
      "above": 0.92
     },
     {
      "value": 90,
      "above": 0.68
     }
    ]
   },
   {
    "card": "biodiversity",
    "noSi": [
     {
      "value": 30,
      "above": 0.78
     },
     {
      "value": 50,
      "above": 0.13
     }
    ],
    "si": [
     {
      "value": 30,
      "above": 0.7
     },
     {
      "value": 37,
      "above": 0.45
     },
     {
      "value": 50,
      "above": 0.12
     }
    ]
   },
   {
    "card": "planetary_boundaries",
    "noSi": [
     {
      "value": 4,
      "above": 0.98
     },
     {
      "value": 6,
      "above": 0.86
     },
     {
      "value": 7,
      "above": 0.08
     },
     {
      "value": 8,
      "above": 0.015
     }
    ],
    "si": [
     {
      "value": 4,
      "above": 0.95
     },
     {
      "value": 6,
      "above": 0.72
     },
     {
      "value": 7,
      "above": 0.09
     },
     {
      "value": 8,
      "above": 0.025
     }
    ]
   }
  ]
 },
 {
  "id": "curves-climate-2026-11-25-2",
  "batch": "curves-climate",
  "model": "Claude Opus 5.5",
  "date": "2026-11-25",
  "method": "independent agent run, prompt 2026-11-25.1",
  "places": [],
  "curves": [
   {
    "card": "co2",
    "noSi": [
     {
      "value": 405,
      "above": 0.985
     },
     {
      "value": 840,
      "above": 0.05
     }
    ],
    "si": [
     {
      "value": 405,
      "above": 0.86
     },
     {
      "value": 840,
      "above": 0.025
     }
    ]
   },
   {
    "card": "warming",
    "noSi": [
     {
      "value": 3.5,
      "above": 0.13
     },
     {
      "value": 6,
      "above": 0.004
     }
    ],
    "si": [
     {
      "value": 1.5,
      "above": 0.84
     },
     {
      "value": 3.5,
      "above": 0.07
     },
     {
      "value": 6,
      "above": 0.003
     }
    ]
   },
   {
    "card": "humid_heat",
    "noSi": [
     {
      "value": 50,
      "above": 0.015
     }
    ],
    "si": [
     {
      "value": 5,
      "above": 0.82
     },
     {
      "value": 50,
      "above": 0.007
     }
    ]
   },
   {
    "card": "harvests",
    "noSi": [
     {
      "value": 5,
      "above": 0.85
     },
     {
      "value": 30,
      "above": 0.04
     }
    ],
    "si": [
     {
      "value": 5,
      "above": 0.62
     },
     {
      "value": 30,
      "above": 0.015
     }
    ]
   },
   {
    "card": "extreme_weather",
    "noSi": [
     {
      "value": 13.9,
      "above": 0.92
     },
     {
      "value": 39.2,
      "above": 0.035
     }
    ],
    "si": [
     {
      "value": 8.6,
      "above": 0.84
     },
     {
      "value": 13.9,
      "above": 0.58
     },
     {
      "value": 39.2,
      "above": 0.018
     }
    ]
   },
   {
    "card": "sea_level",
    "noSi": [
     {
      "value": 100,
      "above": 0.07
     }
    ],
    "si": [
     {
      "value": 50,
      "above": 0.52
     },
     {
      "value": 100,
      "above": 0.05
     }
    ]
   },
   {
    "card": "ice_sheets",
    "noSi": [
     {
      "value": 3,
      "above": 0.89
     },
     {
      "value": 10,
      "above": 0.17
     }
    ],
    "si": [
     {
      "value": 3,
      "above": 0.72
     },
     {
      "value": 10,
      "above": 0.08
     }
    ]
   },
   {
    "card": "arctic_sea_ice",
    "noSi": [
     {
      "value": 1,
      "above": 0.16
     },
     {
      "value": 3.41,
      "above": 0.03
     },
     {
      "value": 6.7,
      "above": 0.002
     }
    ],
    "si": [
     {
      "value": 1,
      "above": 0.35
     },
     {
      "value": 3.41,
      "above": 0.1
     },
     {
      "value": 6.7,
      "above": 0.009
     }
    ]
   },
   {
    "card": "permafrost",
    "noSi": [
     {
      "value": 125,
      "above": 0.17
     },
     {
      "value": 250,
      "above": 0.015
     }
    ],
    "si": [
     {
      "value": 125,
      "above": 0.1
     },
     {
      "value": 250,
      "above": 0.009
     }
    ]
   },
   {
    "card": "amoc",
    "noSi": [
     {
      "value": 6,
      "above": 0.92
     },
     {
      "value": 10,
      "above": 0.68
     },
     {
      "value": 15,
      "above": 0.13
     }
    ],
    "si": [
     {
      "value": 6,
      "above": 0.94
     },
     {
      "value": 10,
      "above": 0.76
     },
     {
      "value": 15,
      "above": 0.18
     }
    ]
   },
   {
    "card": "ocean_heat",
    "noSi": [
     {
      "value": 1425,
      "above": 0.94
     },
     {
      "value": 1805,
      "above": 0.6
     },
     {
      "value": 2475,
      "above": 0.03
     }
    ],
    "si": [
     {
      "value": 1425,
      "above": 0.85
     },
     {
      "value": 1805,
      "above": 0.4
     },
     {
      "value": 2475,
      "above": 0.015
     }
    ]
   },
   {
    "card": "ocean_acidification",
    "noSi": [
     {
      "value": 2,
      "above": 0.95
     },
     {
      "value": 2.86,
      "above": 0.025
     },
     {
      "value": 3.21,
      "above": 0.003
     }
    ],
    "si": [
     {
      "value": 2,
      "above": 0.975
     },
     {
      "value": 2.86,
      "above": 0.2
     },
     {
      "value": 3.21,
      "above": 0.02
     }
    ]
   },
   {
    "card": "corals",
    "noSi": [
     {
      "value": 70,
      "above": 0.97
     },
     {
      "value": 90,
      "above": 0.85
     }
    ],
    "si": [
     {
      "value": 70,
      "above": 0.92
     },
     {
      "value": 90,
      "above": 0.7
     }
    ]
   },
   {
    "card": "biodiversity",
    "noSi": [
     {
      "value": 30,
      "above": 0.78
     },
     {
      "value": 50,
      "above": 0.12
     }
    ],
    "si": [
     {
      "value": 30,
      "above": 0.65
     },
     {
      "value": 37,
      "above": 0.38
     },
     {
      "value": 50,
      "above": 0.09
     }
    ]
   },
   {
    "card": "planetary_boundaries",
    "noSi": [
     {
      "value": 4,
      "above": 0.96
     },
     {
      "value": 6,
      "above": 0.8
     },
     {
      "value": 7,
      "above": 0.08
     },
     {
      "value": 8,
      "above": 0.015
     }
    ],
    "si": [
     {
      "value": 4,
      "above": 0.92
     },
     {
      "value": 6,
      "above": 0.6
     },
     {
      "value": 7,
      "above": 0.08
     },
     {
      "value": 8,
      "above": 0.015
     }
    ]
   }
  ]
 },
 {
  "id": "curves-resources-disease-2026-11-25-1",
  "batch": "curves-resources-disease",
  "model": "Claude Opus 5.5",
  "date": "2026-11-25",
  "method": "independent agent run, prompt 2026-11-25.1",
  "places": [],
  "curves": [
   {
    "card": "soil",
    "noSi": [
     {
      "value": 20,
      "above": 0.72
     },
     {
      "value": 40,
      "above": 0.22
     }
    ],
    "si": [
     {
      "value": 20,
      "above": 0.55
     },
     {
      "value": 40,
      "above": 0.12
     }
    ]
   },
   {
    "card": "fish",
    "noSi": [
     {
      "value": 35,
      "above": 0.75
     },
     {
      "value": 60,
      "above": 0.2
     }
    ],
    "si": [
     {
      "value": 35,
      "above": 0.6
     },
     {
      "value": 60,
      "above": 0.13
     }
    ]
   },
   {
    "card": "fresh_water",
    "noSi": [
     {
      "value": 55,
      "above": 0.6
     },
     {
      "value": 70,
      "above": 0.15
     }
    ],
    "si": [
     {
      "value": 55,
      "above": 0.45
     },
     {
      "value": 70,
      "above": 0.1
     }
    ]
   },
   {
    "card": "pandemic",
    "noSi": [
     {
      "value": 50,
      "above": 0.0032
     },
     {
      "value": 99,
      "above": 0.0007
     }
    ],
    "si": [
     {
      "value": 1,
      "above": 0.083
     },
     {
      "value": 10,
      "above": 0.025
     },
     {
      "value": 50,
      "above": 0.008
     },
     {
      "value": 99,
      "above": 0.003
     }
    ]
   },
   {
    "card": "engineered_pandemic",
    "noSi": [
     {
      "value": 50,
      "above": 0.0026
     },
     {
      "value": 99,
      "above": 0.0006
     }
    ],
    "si": [
     {
      "value": 1,
      "above": 0.055
     },
     {
      "value": 10,
      "above": 0.018
     },
     {
      "value": 50,
      "above": 0.006
     },
     {
      "value": 99,
      "above": 0.0025
     }
    ]
   },
   {
    "card": "amr_deaths",
    "noSi": [
     {
      "value": 12,
      "above": 0.72
     },
     {
      "value": 120,
      "above": 0.025
     }
    ],
    "si": [
     {
      "value": 12,
      "above": 0.45
     },
     {
      "value": 120,
      "above": 0.012
     }
    ]
   },
   {
    "card": "energy_supply",
    "noSi": [
     {
      "value": 25,
      "above": 0.985
     },
     {
      "value": 50,
      "above": 0.93
     },
     {
      "value": 75,
      "above": 0.78
     },
     {
      "value": 100,
      "above": 0.5
     }
    ],
    "si": [
     {
      "value": 25,
      "above": 0.96
     },
     {
      "value": 50,
      "above": 0.93
     },
     {
      "value": 75,
      "above": 0.87
     },
     {
      "value": 100,
      "above": 0.74
     }
    ]
   },
   {
    "card": "oil",
    "noSi": [
     {
      "value": 25,
      "above": 0.55
     },
     {
      "value": 70,
      "above": 0.12
     }
    ],
    "si": [
     {
      "value": 25,
      "above": 0.4
     },
     {
      "value": 70,
      "above": 0.08
     }
    ]
   },
   {
    "card": "gas",
    "noSi": [
     {
      "value": 1000,
      "above": 0.78
     },
     {
      "value": 3000,
      "above": 0.35
     }
    ],
    "si": [
     {
      "value": 1000,
      "above": 0.65
     },
     {
      "value": 3000,
      "above": 0.25
     }
    ]
   },
   {
    "card": "coal",
    "noSi": [
     {
      "value": 0.4,
      "above": 0.87
     },
     {
      "value": 1.2,
      "above": 0.68
     },
     {
      "value": 4.7,
      "above": 0.25
     }
    ],
    "si": [
     {
      "value": 0.4,
      "above": 0.75
     },
     {
      "value": 1.2,
      "above": 0.52
     },
     {
      "value": 4.7,
      "above": 0.15
     }
    ]
   },
   {
    "card": "uranium",
    "noSi": [
     {
      "value": 56,
      "above": 0.65
     },
     {
      "value": 7500,
      "above": 0.07
     },
     {
      "value": 62000,
      "above": 0.035
     }
    ],
    "si": [
     {
      "value": 56,
      "above": 0.72
     },
     {
      "value": 7500,
      "above": 0.15
     },
     {
      "value": 62000,
      "above": 0.07
     }
    ]
   },
   {
    "card": "copper",
    "noSi": [
     {
      "value": 15,
      "above": 0.25
     }
    ],
    "si": [
     {
      "value": 15,
      "above": 0.2
     }
    ]
   },
   {
    "card": "lithium",
    "noSi": [
     {
      "value": 20,
      "above": 0.18
     }
    ],
    "si": [
     {
      "value": 20,
      "above": 0.13
     }
    ]
   },
   {
    "card": "nickel",
    "noSi": [
     {
      "value": 25,
      "above": 0.15
     }
    ],
    "si": [
     {
      "value": 25,
      "above": 0.11
     }
    ]
   },
   {
    "card": "cobalt",
    "noSi": [
     {
      "value": 40,
      "above": 0.2
     }
    ],
    "si": [
     {
      "value": 40,
      "above": 0.15
     }
    ]
   },
   {
    "card": "rare_earths",
    "noSi": [
     {
      "value": 30,
      "above": 0.2
     }
    ],
    "si": [
     {
      "value": 30,
      "above": 0.15
     }
    ]
   },
   {
    "card": "phosphate",
    "noSi": [
     {
      "value": 10,
      "above": 0.45
     },
     {
      "value": 30,
      "above": 0.06
     }
    ],
    "si": [
     {
      "value": 10,
      "above": 0.35
     },
     {
      "value": 30,
      "above": 0.05
     }
    ]
   },
   {
    "card": "mineral_concentration",
    "noSi": [
     {
      "value": 59,
      "above": 0.88
     },
     {
      "value": 77,
      "above": 0.45
     },
     {
      "value": 82,
      "above": 0.3
     },
     {
      "value": 99,
      "above": 0.004
     }
    ],
    "si": [
     {
      "value": 59,
      "above": 0.83
     },
     {
      "value": 77,
      "above": 0.45
     },
     {
      "value": 82,
      "above": 0.33
     },
     {
      "value": 99,
      "above": 0.02
     }
    ]
   }
  ]
 },
 {
  "id": "curves-resources-disease-2026-11-25-2",
  "batch": "curves-resources-disease",
  "model": "Claude Opus 5.5",
  "date": "2026-11-25",
  "method": "independent agent run, prompt 2026-11-25.1",
  "places": [],
  "curves": [
   {
    "card": "soil",
    "noSi": [
     {
      "value": 20,
      "above": 0.65
     },
     {
      "value": 40,
      "above": 0.17
     }
    ],
    "si": [
     {
      "value": 20,
      "above": 0.45
     },
     {
      "value": 40,
      "above": 0.1
     }
    ]
   },
   {
    "card": "fish",
    "noSi": [
     {
      "value": 35,
      "above": 0.68
     },
     {
      "value": 60,
      "above": 0.21
     }
    ],
    "si": [
     {
      "value": 35,
      "above": 0.55
     },
     {
      "value": 60,
      "above": 0.16
     }
    ]
   },
   {
    "card": "fresh_water",
    "noSi": [
     {
      "value": 55,
      "above": 0.7
     },
     {
      "value": 70,
      "above": 0.25
     }
    ],
    "si": [
     {
      "value": 55,
      "above": 0.58
     },
     {
      "value": 70,
      "above": 0.2
     }
    ]
   },
   {
    "card": "pandemic",
    "noSi": [
     {
      "value": 50,
      "above": 0.005
     },
     {
      "value": 99,
      "above": 0.001
     }
    ],
    "si": [
     {
      "value": 1,
      "above": 0.085
     },
     {
      "value": 10,
      "above": 0.026
     },
     {
      "value": 50,
      "above": 0.012
     },
     {
      "value": 99,
      "above": 0.0056
     }
    ]
   },
   {
    "card": "engineered_pandemic",
    "noSi": [
     {
      "value": 50,
      "above": 0.0035
     },
     {
      "value": 99,
      "above": 0.0009
     }
    ],
    "si": [
     {
      "value": 1,
      "above": 0.06
     },
     {
      "value": 10,
      "above": 0.018
     },
     {
      "value": 50,
      "above": 0.011
     },
     {
      "value": 99,
      "above": 0.0055
     }
    ]
   },
   {
    "card": "amr_deaths",
    "noSi": [
     {
      "value": 12,
      "above": 0.7
     },
     {
      "value": 120,
      "above": 0.03
     }
    ],
    "si": [
     {
      "value": 12,
      "above": 0.4
     },
     {
      "value": 120,
      "above": 0.015
     }
    ]
   },
   {
    "card": "energy_supply",
    "noSi": [
     {
      "value": 25,
      "above": 0.98
     },
     {
      "value": 50,
      "above": 0.93
     },
     {
      "value": 75,
      "above": 0.8
     },
     {
      "value": 100,
      "above": 0.52
     }
    ],
    "si": [
     {
      "value": 25,
      "above": 0.965
     },
     {
      "value": 50,
      "above": 0.945
     },
     {
      "value": 75,
      "above": 0.9
     },
     {
      "value": 100,
      "above": 0.78
     }
    ]
   },
   {
    "card": "oil",
    "noSi": [
     {
      "value": 25,
      "above": 0.6
     },
     {
      "value": 70,
      "above": 0.2
     }
    ],
    "si": [
     {
      "value": 25,
      "above": 0.42
     },
     {
      "value": 70,
      "above": 0.12
     }
    ]
   },
   {
    "card": "gas",
    "noSi": [
     {
      "value": 1000,
      "above": 0.75
     },
     {
      "value": 3000,
      "above": 0.4
     }
    ],
    "si": [
     {
      "value": 1000,
      "above": 0.52
     },
     {
      "value": 3000,
      "above": 0.23
     }
    ]
   },
   {
    "card": "coal",
    "noSi": [
     {
      "value": 0.4,
      "above": 0.7
     },
     {
      "value": 1.2,
      "above": 0.47
     },
     {
      "value": 4.7,
      "above": 0.17
     }
    ],
    "si": [
     {
      "value": 0.4,
      "above": 0.45
     },
     {
      "value": 1.2,
      "above": 0.27
     },
     {
      "value": 4.7,
      "above": 0.08
     }
    ]
   },
   {
    "card": "uranium",
    "noSi": [
     {
      "value": 56,
      "above": 0.82
     },
     {
      "value": 7500,
      "above": 0.06
     },
     {
      "value": 62000,
      "above": 0.035
     }
    ],
    "si": [
     {
      "value": 56,
      "above": 0.82
     },
     {
      "value": 7500,
      "above": 0.12
     },
     {
      "value": 62000,
      "above": 0.07
     }
    ]
   },
   {
    "card": "copper",
    "noSi": [
     {
      "value": 15,
      "above": 0.12
     }
    ],
    "si": [
     {
      "value": 15,
      "above": 0.08
     }
    ]
   },
   {
    "card": "lithium",
    "noSi": [
     {
      "value": 20,
      "above": 0.15
     }
    ],
    "si": [
     {
      "value": 20,
      "above": 0.1
     }
    ]
   },
   {
    "card": "nickel",
    "noSi": [
     {
      "value": 25,
      "above": 0.08
     }
    ],
    "si": [
     {
      "value": 25,
      "above": 0.05
     }
    ]
   },
   {
    "card": "cobalt",
    "noSi": [
     {
      "value": 40,
      "above": 0.3
     }
    ],
    "si": [
     {
      "value": 40,
      "above": 0.2
     }
    ]
   },
   {
    "card": "rare_earths",
    "noSi": [
     {
      "value": 30,
      "above": 0.13
     }
    ],
    "si": [
     {
      "value": 30,
      "above": 0.09
     }
    ]
   },
   {
    "card": "phosphate",
    "noSi": [
     {
      "value": 10,
      "above": 0.35
     },
     {
      "value": 30,
      "above": 0.06
     }
    ],
    "si": [
     {
      "value": 10,
      "above": 0.25
     },
     {
      "value": 30,
      "above": 0.04
     }
    ]
   },
   {
    "card": "mineral_concentration",
    "noSi": [
     {
      "value": 59,
      "above": 0.85
     },
     {
      "value": 77,
      "above": 0.5
     },
     {
      "value": 82,
      "above": 0.37
     },
     {
      "value": 99,
      "above": 0.01
     }
    ],
    "si": [
     {
      "value": 59,
      "above": 0.8
     },
     {
      "value": 77,
      "above": 0.45
     },
     {
      "value": 82,
      "above": 0.33
     },
     {
      "value": 99,
      "above": 0.015
     }
    ]
   }
  ]
 },
 {
  "id": "curves-ai-natural-living-2026-11-25-1",
  "batch": "curves-ai-natural-living",
  "model": "Claude Opus 5.5",
  "date": "2026-11-25",
  "method": "independent agent run, prompt 2026-11-25.1",
  "places": [],
  "curves": [
   {
    "card": "asteroid",
    "noSi": [
     {
      "value": 1500,
      "above": 0.000002
     },
     {
      "value": 5000,
      "above": 2.5e-7
     },
     {
      "value": 10000,
      "above": 6e-8
     }
    ],
    "si": [
     {
      "value": 25,
      "above": 0.29
     },
     {
      "value": 1000,
      "above": 0.000005
     },
     {
      "value": 1500,
      "above": 0.0000015
     },
     {
      "value": 5000,
      "above": 2e-7
     },
     {
      "value": 10000,
      "above": 5e-8
     }
    ]
   },
   {
    "card": "supervolcano",
    "noSi": [
     {
      "value": 300,
      "above": 0.022
     }
    ],
    "si": [
     {
      "value": 300,
      "above": 0.022
     },
     {
      "value": 1000,
      "above": 0.004
     }
    ]
   },
   {
    "card": "solar_storm",
    "noSi": [
     {
      "value": 850,
      "above": 0.34
     },
     {
      "value": 1500,
      "above": 0.03
     }
    ],
    "si": [
     {
      "value": 850,
      "above": 0.34
     },
     {
      "value": 1500,
      "above": 0.03
     }
    ]
   },
   {
    "card": "ai_takeover",
    "noSi": [
     {
      "value": 1,
      "above": 0.022
     },
     {
      "value": 50,
      "above": 0.005
     },
     {
      "value": 99,
      "above": 0.003
     }
    ],
    "si": [
     {
      "value": 1,
      "above": 0.14
     },
     {
      "value": 10,
      "above": 0.1
     },
     {
      "value": 50,
      "above": 0.075
     },
     {
      "value": 99,
      "above": 0.06
     }
    ]
   },
   {
    "card": "ai_progress_index",
    "noSi": [
     {
      "value": 460,
      "above": 0.55
     },
     {
      "value": 535,
      "above": 0.28
     },
     {
      "value": 610,
      "above": 0.13
     }
    ],
    "si": [
     {
      "value": 460,
      "above": 0.97
     },
     {
      "value": 535,
      "above": 0.92
     },
     {
      "value": 610,
      "above": 0.84
     }
    ]
   },
   {
    "card": "ai_horizon",
    "noSi": [
     {
      "value": 167,
      "above": 0.78
     },
     {
      "value": 2000,
      "above": 0.4
     },
     {
      "value": 10000,
      "above": 0.22
     }
    ],
    "si": [
     {
      "value": 167,
      "above": 0.97
     },
     {
      "value": 2000,
      "above": 0.92
     },
     {
      "value": 10000,
      "above": 0.84
     }
    ]
   },
   {
    "card": "living_standard",
    "noSi": [
     {
      "value": 36,
      "above": 0.91
     },
     {
      "value": 100,
      "above": 0.65
     },
     {
      "value": 500,
      "above": 0.11
     }
    ],
    "si": [
     {
      "value": 36,
      "above": 0.89
     },
     {
      "value": 100,
      "above": 0.8
     },
     {
      "value": 500,
      "above": 0.45
     }
    ]
   },
   {
    "card": "energy_per_person",
    "noSi": [
     {
      "value": 4250,
      "above": 0.975
     },
     {
      "value": 52512,
      "above": 0.1
     },
     {
      "value": 75051,
      "above": 0.03
     }
    ],
    "si": [
     {
      "value": 4250,
      "above": 0.95
     },
     {
      "value": 52512,
      "above": 0.33
     },
     {
      "value": 75051,
      "above": 0.2
     }
    ]
   },
   {
    "card": "healthy_life_years",
    "noSi": [
     {
      "value": 57.9,
      "above": 0.95
     },
     {
      "value": 67.5,
      "above": 0.68
     },
     {
      "value": 72.9,
      "above": 0.05
     }
    ],
    "si": [
     {
      "value": 57.9,
      "above": 0.92
     },
     {
      "value": 67.5,
      "above": 0.77
     },
     {
      "value": 72.9,
      "above": 0.33
     }
    ]
   },
   {
    "card": "floor_area",
    "noSi": [
     {
      "value": 15,
      "above": 0.96
     },
     {
      "value": 41.7,
      "above": 0.22
     },
     {
      "value": 49.5,
      "above": 0.09
     }
    ],
    "si": [
     {
      "value": 15,
      "above": 0.95
     },
     {
      "value": 41.7,
      "above": 0.35
     },
     {
      "value": 49.5,
      "above": 0.21
     }
    ]
   },
   {
    "card": "free_time",
    "noSi": [
     {
      "value": 780,
      "above": 0.995
     },
     {
      "value": 1542,
      "above": 0.8
     },
     {
      "value": 1806,
      "above": 0.42
     }
    ],
    "si": [
     {
      "value": 780,
      "above": 0.85
     },
     {
      "value": 1542,
      "above": 0.5
     },
     {
      "value": 1806,
      "above": 0.28
     }
    ]
   },
   {
    "card": "essentials_cost_world",
    "noSi": [
     {
      "value": 10,
      "above": 0.99
     },
     {
      "value": 20,
      "above": 0.78
     },
     {
      "value": 50,
      "above": 0.03
     }
    ],
    "si": [
     {
      "value": 10,
      "above": 0.82
     },
     {
      "value": 20,
      "above": 0.48
     },
     {
      "value": 50,
      "above": 0.05
     }
    ]
   },
   {
    "card": "electricity_access_world",
    "noSi": [
     {
      "value": 83.5,
      "above": 0.95
     },
     {
      "value": 90,
      "above": 0.92
     },
     {
      "value": 99.97,
      "above": 0.25
     }
    ],
    "si": [
     {
      "value": 83.5,
      "above": 0.95
     },
     {
      "value": 90,
      "above": 0.93
     },
     {
      "value": 99.97,
      "above": 0.45
     }
    ]
   },
   {
    "card": "water_access_world",
    "noSi": [
     {
      "value": 61.3,
      "above": 0.95
     },
     {
      "value": 90,
      "above": 0.68
     },
     {
      "value": 95.8,
      "above": 0.33
     }
    ],
    "si": [
     {
      "value": 61.3,
      "above": 0.94
     },
     {
      "value": 90,
      "above": 0.8
     },
     {
      "value": 95.8,
      "above": 0.5
     }
    ]
   },
   {
    "card": "undernourishment_world",
    "noSi": [
     {
      "value": 2.5,
      "above": 0.72
     },
     {
      "value": 13,
      "above": 0.1
     },
     {
      "value": 20,
      "above": 0.04
     }
    ],
    "si": [
     {
      "value": 2.5,
      "above": 0.5
     },
     {
      "value": 13,
      "above": 0.07
     },
     {
      "value": 20,
      "above": 0.045
     }
    ]
   },
   {
    "card": "life_expectancy_world",
    "noSi": [
     {
      "value": 65.1,
      "above": 0.98
     },
     {
      "value": 80.4,
      "above": 0.76
     },
     {
      "value": 85.4,
      "above": 0.02
     }
    ],
    "si": [
     {
      "value": 65.1,
      "above": 0.95
     },
     {
      "value": 80.4,
      "above": 0.8
     },
     {
      "value": 85.4,
      "above": 0.35
     }
    ]
   },
   {
    "card": "population",
    "noSi": [
     {
      "value": 4.1,
      "above": 0.985
     },
     {
      "value": 6.16,
      "above": 0.982
     },
     {
      "value": 8.8,
      "above": 0.98
     },
     {
      "value": 10.3,
      "above": 0.3
     }
    ],
    "si": [
     {
      "value": 4.1,
      "above": 0.94
     },
     {
      "value": 6.16,
      "above": 0.92
     },
     {
      "value": 8.8,
      "above": 0.82
     },
     {
      "value": 10.3,
      "above": 0.3
     }
    ]
   },
   {
    "card": "aging_world",
    "noSi": [
     {
      "value": 25.8,
      "above": 0.99
     },
     {
      "value": 31,
      "above": 0.985
     },
     {
      "value": 51,
      "above": 0.022
     }
    ],
    "si": [
     {
      "value": 25.8,
      "above": 0.96
     },
     {
      "value": 31,
      "above": 0.93
     },
     {
      "value": 51,
      "above": 0.12
     }
    ]
   }
  ]
 },
 {
  "id": "curves-ai-natural-living-2026-11-25-2",
  "batch": "curves-ai-natural-living",
  "model": "Claude Opus 5.5",
  "date": "2026-11-25",
  "method": "independent agent run, prompt 2026-11-25.1",
  "places": [],
  "curves": [
   {
    "card": "asteroid",
    "noSi": [
     {
      "value": 1500,
      "above": 0.000004
     },
     {
      "value": 5000,
      "above": 6e-7
     },
     {
      "value": 10000,
      "above": 2e-7
     }
    ],
    "si": [
     {
      "value": 25,
      "above": 0.28
     },
     {
      "value": 1000,
      "above": 0.000005
     },
     {
      "value": 1500,
      "above": 0.0000025
     },
     {
      "value": 5000,
      "above": 4e-7
     },
     {
      "value": 10000,
      "above": 1.3e-7
     }
    ]
   },
   {
    "card": "supervolcano",
    "noSi": [
     {
      "value": 300,
      "above": 0.025
     }
    ],
    "si": [
     {
      "value": 300,
      "above": 0.025
     },
     {
      "value": 1000,
      "above": 0.004
     }
    ]
   },
   {
    "card": "solar_storm",
    "noSi": [
     {
      "value": 850,
      "above": 0.35
     },
     {
      "value": 1500,
      "above": 0.045
     }
    ],
    "si": [
     {
      "value": 850,
      "above": 0.35
     },
     {
      "value": 1500,
      "above": 0.045
     }
    ]
   },
   {
    "card": "ai_takeover",
    "noSi": [
     {
      "value": 1,
      "above": 0.03
     },
     {
      "value": 50,
      "above": 0.004
     },
     {
      "value": 99,
      "above": 0.002
     }
    ],
    "si": [
     {
      "value": 1,
      "above": 0.11
     },
     {
      "value": 10,
      "above": 0.08
     },
     {
      "value": 50,
      "above": 0.06
     },
     {
      "value": 99,
      "above": 0.05
     }
    ]
   },
   {
    "card": "ai_progress_index",
    "noSi": [
     {
      "value": 460,
      "above": 0.55
     },
     {
      "value": 535,
      "above": 0.27
     },
     {
      "value": 610,
      "above": 0.13
     }
    ],
    "si": [
     {
      "value": 460,
      "above": 0.97
     },
     {
      "value": 535,
      "above": 0.93
     },
     {
      "value": 610,
      "above": 0.86
     }
    ]
   },
   {
    "card": "ai_horizon",
    "noSi": [
     {
      "value": 167,
      "above": 0.72
     },
     {
      "value": 2000,
      "above": 0.42
     },
     {
      "value": 10000,
      "above": 0.22
     }
    ],
    "si": [
     {
      "value": 167,
      "above": 0.97
     },
     {
      "value": 2000,
      "above": 0.92
     },
     {
      "value": 10000,
      "above": 0.85
     }
    ]
   },
   {
    "card": "living_standard",
    "noSi": [
     {
      "value": 36,
      "above": 0.92
     },
     {
      "value": 100,
      "above": 0.65
     },
     {
      "value": 500,
      "above": 0.105
     }
    ],
    "si": [
     {
      "value": 36,
      "above": 0.89
     },
     {
      "value": 100,
      "above": 0.78
     },
     {
      "value": 500,
      "above": 0.4
     }
    ]
   },
   {
    "card": "energy_per_person",
    "noSi": [
     {
      "value": 4250,
      "above": 0.97
     },
     {
      "value": 52512,
      "above": 0.1
     },
     {
      "value": 75051,
      "above": 0.04
     }
    ],
    "si": [
     {
      "value": 4250,
      "above": 0.93
     },
     {
      "value": 52512,
      "above": 0.38
     },
     {
      "value": 75051,
      "above": 0.25
     }
    ]
   },
   {
    "card": "healthy_life_years",
    "noSi": [
     {
      "value": 57.9,
      "above": 0.96
     },
     {
      "value": 67.5,
      "above": 0.75
     },
     {
      "value": 72.9,
      "above": 0.07
     }
    ],
    "si": [
     {
      "value": 57.9,
      "above": 0.92
     },
     {
      "value": 67.5,
      "above": 0.85
     },
     {
      "value": 72.9,
      "above": 0.55
     }
    ]
   },
   {
    "card": "floor_area",
    "noSi": [
     {
      "value": 15,
      "above": 0.96
     },
     {
      "value": 41.7,
      "above": 0.32
     },
     {
      "value": 49.5,
      "above": 0.14
     }
    ],
    "si": [
     {
      "value": 15,
      "above": 0.95
     },
     {
      "value": 41.7,
      "above": 0.5
     },
     {
      "value": 49.5,
      "above": 0.34
     }
    ]
   },
   {
    "card": "free_time",
    "noSi": [
     {
      "value": 780,
      "above": 0.99
     },
     {
      "value": 1542,
      "above": 0.82
     },
     {
      "value": 1806,
      "above": 0.48
     }
    ],
    "si": [
     {
      "value": 780,
      "above": 0.85
     },
     {
      "value": 1542,
      "above": 0.55
     },
     {
      "value": 1806,
      "above": 0.33
     }
    ]
   },
   {
    "card": "essentials_cost_world",
    "noSi": [
     {
      "value": 10,
      "above": 0.98
     },
     {
      "value": 20,
      "above": 0.8
     },
     {
      "value": 50,
      "above": 0.04
     }
    ],
    "si": [
     {
      "value": 10,
      "above": 0.72
     },
     {
      "value": 20,
      "above": 0.42
     },
     {
      "value": 50,
      "above": 0.05
     }
    ]
   },
   {
    "card": "electricity_access_world",
    "noSi": [
     {
      "value": 83.5,
      "above": 0.965
     },
     {
      "value": 90,
      "above": 0.94
     },
     {
      "value": 99.97,
      "above": 0.2
     }
    ],
    "si": [
     {
      "value": 83.5,
      "above": 0.92
     },
     {
      "value": 90,
      "above": 0.9
     },
     {
      "value": 99.97,
      "above": 0.4
     }
    ]
   },
   {
    "card": "water_access_world",
    "noSi": [
     {
      "value": 61.3,
      "above": 0.95
     },
     {
      "value": 90,
      "above": 0.52
     },
     {
      "value": 95.8,
      "above": 0.25
     }
    ],
    "si": [
     {
      "value": 61.3,
      "above": 0.92
     },
     {
      "value": 90,
      "above": 0.74
     },
     {
      "value": 95.8,
      "above": 0.5
     }
    ]
   },
   {
    "card": "undernourishment_world",
    "noSi": [
     {
      "value": 2.5,
      "above": 0.68
     },
     {
      "value": 13,
      "above": 0.08
     },
     {
      "value": 20,
      "above": 0.04
     }
    ],
    "si": [
     {
      "value": 2.5,
      "above": 0.4
     },
     {
      "value": 13,
      "above": 0.06
     },
     {
      "value": 20,
      "above": 0.04
     }
    ]
   },
   {
    "card": "life_expectancy_world",
    "noSi": [
     {
      "value": 65.1,
      "above": 0.985
     },
     {
      "value": 80.4,
      "above": 0.78
     },
     {
      "value": 85.4,
      "above": 0.02
     }
    ],
    "si": [
     {
      "value": 65.1,
      "above": 0.94
     },
     {
      "value": 80.4,
      "above": 0.85
     },
     {
      "value": 85.4,
      "above": 0.48
     }
    ]
   },
   {
    "card": "population",
    "noSi": [
     {
      "value": 4.1,
      "above": 0.995
     },
     {
      "value": 6.16,
      "above": 0.99
     },
     {
      "value": 8.8,
      "above": 0.98
     },
     {
      "value": 10.3,
      "above": 0.35
     }
    ],
    "si": [
     {
      "value": 4.1,
      "above": 0.945
     },
     {
      "value": 6.16,
      "above": 0.93
     },
     {
      "value": 8.8,
      "above": 0.84
     },
     {
      "value": 10.3,
      "above": 0.33
     }
    ]
   },
   {
    "card": "aging_world",
    "noSi": [
     {
      "value": 25.8,
      "above": 0.995
     },
     {
      "value": 31,
      "above": 0.985
     },
     {
      "value": 51,
      "above": 0.024
     }
    ],
    "si": [
     {
      "value": 25.8,
      "above": 0.95
     },
     {
      "value": 31,
      "above": 0.92
     },
     {
      "value": 51,
      "above": 0.18
     }
    ]
   }
  ]
 },
 {
  "id": "curves-war-civil-2026-11-25-1",
  "batch": "curves-war-civil",
  "model": "Claude Opus 5.5",
  "date": "2026-11-25",
  "method": "independent agent run, prompt 2026-11-25.1",
  "places": [],
  "curves": [
   {
    "card": "war",
    "noSi": [
     {
      "value": 1,
      "above": 0.2
     },
     {
      "value": 50,
      "above": 0.012
     },
     {
      "value": 99,
      "above": 0.002
     }
    ],
    "si": [
     {
      "value": 1,
      "above": 0.22
     },
     {
      "value": 10,
      "above": 0.05
     },
     {
      "value": 50,
      "above": 0.016
     },
     {
      "value": 99,
      "above": 0.003
     }
    ]
   },
   {
    "card": "armed_conflicts",
    "noSi": [
     {
      "value": 31,
      "above": 0.78
     },
     {
      "value": 53,
      "above": 0.37
     },
     {
      "value": 65,
      "above": 0.22
     }
    ],
    "si": [
     {
      "value": 31,
      "above": 0.68
     },
     {
      "value": 53,
      "above": 0.32
     },
     {
      "value": 65,
      "above": 0.2
     }
    ]
   },
   {
    "card": "battle_deaths",
    "noSi": [
     {
      "value": 0.19,
      "above": 0.8
     },
     {
      "value": 3.6,
      "above": 0.17
     },
     {
      "value": 22,
      "above": 0.03
     },
     {
      "value": 120,
      "above": 0.01
     }
    ],
    "si": [
     {
      "value": 0.19,
      "above": 0.7
     },
     {
      "value": 3.6,
      "above": 0.15
     },
     {
      "value": 22,
      "above": 0.03
     },
     {
      "value": 120,
      "above": 0.01
     }
    ]
   },
   {
    "card": "world_military_spending",
    "noSi": [
     {
      "value": 2.1,
      "above": 0.55
     },
     {
      "value": 3.5,
      "above": 0.17
     },
     {
      "value": 6.1,
      "above": 0.04
     }
    ],
    "si": [
     {
      "value": 2.1,
      "above": 0.42
     },
     {
      "value": 3.5,
      "above": 0.16
     },
     {
      "value": 6.1,
      "above": 0.05
     }
    ]
   },
   {
    "card": "conflict_exposure",
    "noSi": [
     {
      "value": 12.5,
      "above": 0.55
     },
     {
      "value": 25,
      "above": 0.2
     },
     {
      "value": 50,
      "above": 0.04
     }
    ],
    "si": [
     {
      "value": 12.5,
      "above": 0.48
     },
     {
      "value": 25,
      "above": 0.18
     },
     {
      "value": 50,
      "above": 0.04
     }
    ]
   },
   {
    "card": "nuclear_warheads",
    "noSi": [
     {
      "value": 100,
      "above": 0.95
     },
     {
      "value": 4400,
      "above": 0.68
     },
     {
      "value": 70300,
      "above": 0.03
     }
    ],
    "si": [
     {
      "value": 100,
      "above": 0.9
     },
     {
      "value": 4400,
      "above": 0.6
     },
     {
      "value": 70300,
      "above": 0.05
     }
    ]
   },
   {
    "card": "bioweapons",
    "noSi": [
     {
      "value": 50,
      "above": 0.003
     },
     {
      "value": 99,
      "above": 0.001
     }
    ],
    "si": [
     {
      "value": 1,
      "above": 0.05
     },
     {
      "value": 10,
      "above": 0.015
     },
     {
      "value": 50,
      "above": 0.006
     },
     {
      "value": 99,
      "above": 0.0025
     }
    ]
   },
   {
    "card": "state_breakdown",
    "noSi": [
     {
      "value": 1,
      "above": 0.97
     },
     {
      "value": 5,
      "above": 0.35
     },
     {
      "value": 20,
      "above": 0.06
     },
     {
      "value": 80,
      "above": 0.01
     }
    ],
    "si": [
     {
      "value": 1,
      "above": 0.97
     },
     {
      "value": 5,
      "above": 0.33
     },
     {
      "value": 20,
      "above": 0.08
     },
     {
      "value": 80,
      "above": 0.03
     }
    ]
   },
   {
    "card": "internal_conflicts",
    "noSi": [
     {
      "value": 20,
      "above": 0.9
     },
     {
      "value": 31,
      "above": 0.72
     },
     {
      "value": 57,
      "above": 0.25
     },
     {
      "value": 80,
      "above": 0.08
     }
    ],
    "si": [
     {
      "value": 20,
      "above": 0.85
     },
     {
      "value": 31,
      "above": 0.63
     },
     {
      "value": 57,
      "above": 0.22
     },
     {
      "value": 80,
      "above": 0.08
     }
    ]
   },
   {
    "card": "polarisation",
    "noSi": [
     {
      "value": -1.3,
      "above": 0.96
     },
     {
      "value": -0.8,
      "above": 0.86
     },
     {
      "value": 1.4,
      "above": 0.1
     },
     {
      "value": 2.3,
      "above": 0.02
     }
    ],
    "si": [
     {
      "value": -1.3,
      "above": 0.94
     },
     {
      "value": -0.8,
      "above": 0.82
     },
     {
      "value": 1.4,
      "above": 0.14
     },
     {
      "value": 2.3,
      "above": 0.04
     }
    ]
   },
   {
    "card": "forced_displacement",
    "noSi": [
     {
      "value": 1,
      "above": 0.6
     },
     {
      "value": 3,
      "above": 0.17
     },
     {
      "value": 10,
      "above": 0.02
     }
    ],
    "si": [
     {
      "value": 1,
      "above": 0.52
     },
     {
      "value": 3,
      "above": 0.15
     },
     {
      "value": 10,
      "above": 0.025
     }
    ]
   },
   {
    "card": "immigration_pressure",
    "noSi": [
     {
      "value": 9.2,
      "above": 0.93
     },
     {
      "value": 15,
      "above": 0.68
     },
     {
      "value": 33,
      "above": 0.05
     }
    ],
    "si": [
     {
      "value": 9.2,
      "above": 0.85
     },
     {
      "value": 15,
      "above": 0.55
     },
     {
      "value": 33,
      "above": 0.05
     }
    ]
   }
  ]
 },
 {
  "id": "curves-war-civil-2026-11-25-2",
  "batch": "curves-war-civil",
  "model": "Claude Opus 5.5",
  "date": "2026-11-25",
  "method": "independent agent run, prompt 2026-11-25.1",
  "places": [],
  "curves": [
   {
    "card": "war",
    "noSi": [
     {
      "value": 1,
      "above": 0.22
     },
     {
      "value": 50,
      "above": 0.012
     },
     {
      "value": 99,
      "above": 0.002
     }
    ],
    "si": [
     {
      "value": 1,
      "above": 0.25
     },
     {
      "value": 10,
      "above": 0.06
     },
     {
      "value": 50,
      "above": 0.02
     },
     {
      "value": 99,
      "above": 0.005
     }
    ]
   },
   {
    "card": "armed_conflicts",
    "noSi": [
     {
      "value": 31,
      "above": 0.72
     },
     {
      "value": 53,
      "above": 0.36
     },
     {
      "value": 65,
      "above": 0.2
     }
    ],
    "si": [
     {
      "value": 31,
      "above": 0.62
     },
     {
      "value": 53,
      "above": 0.3
     },
     {
      "value": 65,
      "above": 0.18
     }
    ]
   },
   {
    "card": "battle_deaths",
    "noSi": [
     {
      "value": 0.19,
      "above": 0.78
     },
     {
      "value": 3.6,
      "above": 0.15
     },
     {
      "value": 22,
      "above": 0.03
     },
     {
      "value": 120,
      "above": 0.008
     }
    ],
    "si": [
     {
      "value": 0.19,
      "above": 0.7
     },
     {
      "value": 3.6,
      "above": 0.14
     },
     {
      "value": 22,
      "above": 0.035
     },
     {
      "value": 120,
      "above": 0.012
     }
    ]
   },
   {
    "card": "world_military_spending",
    "noSi": [
     {
      "value": 2.1,
      "above": 0.5
     },
     {
      "value": 3.5,
      "above": 0.17
     },
     {
      "value": 6.1,
      "above": 0.04
     }
    ],
    "si": [
     {
      "value": 2.1,
      "above": 0.42
     },
     {
      "value": 3.5,
      "above": 0.17
     },
     {
      "value": 6.1,
      "above": 0.06
     }
    ]
   },
   {
    "card": "conflict_exposure",
    "noSi": [
     {
      "value": 12.5,
      "above": 0.45
     },
     {
      "value": 25,
      "above": 0.15
     },
     {
      "value": 50,
      "above": 0.03
     }
    ],
    "si": [
     {
      "value": 12.5,
      "above": 0.42
     },
     {
      "value": 25,
      "above": 0.15
     },
     {
      "value": 50,
      "above": 0.04
     }
    ]
   },
   {
    "card": "nuclear_warheads",
    "noSi": [
     {
      "value": 100,
      "above": 0.93
     },
     {
      "value": 4400,
      "above": 0.6
     },
     {
      "value": 70300,
      "above": 0.03
     }
    ],
    "si": [
     {
      "value": 100,
      "above": 0.88
     },
     {
      "value": 4400,
      "above": 0.52
     },
     {
      "value": 70300,
      "above": 0.05
     }
    ]
   },
   {
    "card": "bioweapons",
    "noSi": [
     {
      "value": 50,
      "above": 0.0025
     },
     {
      "value": 99,
      "above": 0.001
     }
    ],
    "si": [
     {
      "value": 1,
      "above": 0.06
     },
     {
      "value": 10,
      "above": 0.015
     },
     {
      "value": 50,
      "above": 0.005
     },
     {
      "value": 99,
      "above": 0.002
     }
    ]
   },
   {
    "card": "state_breakdown",
    "noSi": [
     {
      "value": 1,
      "above": 0.97
     },
     {
      "value": 5,
      "above": 0.42
     },
     {
      "value": 20,
      "above": 0.09
     },
     {
      "value": 80,
      "above": 0.012
     }
    ],
    "si": [
     {
      "value": 1,
      "above": 0.96
     },
     {
      "value": 5,
      "above": 0.42
     },
     {
      "value": 20,
      "above": 0.11
     },
     {
      "value": 80,
      "above": 0.03
     }
    ]
   },
   {
    "card": "internal_conflicts",
    "noSi": [
     {
      "value": 20,
      "above": 0.82
     },
     {
      "value": 31,
      "above": 0.6
     },
     {
      "value": 57,
      "above": 0.18
     },
     {
      "value": 80,
      "above": 0.06
     }
    ],
    "si": [
     {
      "value": 20,
      "above": 0.72
     },
     {
      "value": 31,
      "above": 0.52
     },
     {
      "value": 57,
      "above": 0.17
     },
     {
      "value": 80,
      "above": 0.07
     }
    ]
   },
   {
    "card": "polarisation",
    "noSi": [
     {
      "value": -1.3,
      "above": 0.93
     },
     {
      "value": -0.8,
      "above": 0.75
     },
     {
      "value": 1.4,
      "above": 0.1
     },
     {
      "value": 2.3,
      "above": 0.025
     }
    ],
    "si": [
     {
      "value": -1.3,
      "above": 0.9
     },
     {
      "value": -0.8,
      "above": 0.72
     },
     {
      "value": 1.4,
      "above": 0.13
     },
     {
      "value": 2.3,
      "above": 0.04
     }
    ]
   },
   {
    "card": "forced_displacement",
    "noSi": [
     {
      "value": 1,
      "above": 0.55
     },
     {
      "value": 3,
      "above": 0.15
     },
     {
      "value": 10,
      "above": 0.015
     }
    ],
    "si": [
     {
      "value": 1,
      "above": 0.48
     },
     {
      "value": 3,
      "above": 0.14
     },
     {
      "value": 10,
      "above": 0.02
     }
    ]
   },
   {
    "card": "immigration_pressure",
    "noSi": [
     {
      "value": 9.2,
      "above": 0.93
     },
     {
      "value": 15,
      "above": 0.72
     },
     {
      "value": 33,
      "above": 0.1
     }
    ],
    "si": [
     {
      "value": 9.2,
      "above": 0.85
     },
     {
      "value": 15,
      "above": 0.6
     },
     {
      "value": 33,
      "above": 0.09
     }
    ]
   }
  ]
 },
 {
  "id": "curves-technology-2026-11-25-1",
  "batch": "curves-technology",
  "model": "Claude Opus 5.5",
  "date": "2026-11-25",
  "method": "independent agent run, prompt 2026-11-25.1",
  "places": [],
  "curves": [
   {
    "card": "solar_storage",
    "noSi": [
     {
      "value": 10,
      "above": 0.94
     },
     {
      "value": 30,
      "above": 0.88
     },
     {
      "value": 60,
      "above": 0.7
     }
    ],
    "si": [
     {
      "value": 10,
      "above": 0.94
     },
     {
      "value": 30,
      "above": 0.88
     },
     {
      "value": 60,
      "above": 0.69
     }
    ]
   },
   {
    "card": "solar_price",
    "noSi": [
     {
      "value": 21,
      "above": 0.45
     },
     {
      "value": 100,
      "above": 0.05
     },
     {
      "value": 417,
      "above": 0.012
     }
    ],
    "si": [
     {
      "value": 21,
      "above": 0.3
     },
     {
      "value": 100,
      "above": 0.04
     },
     {
      "value": 417,
      "above": 0.01
     }
    ]
   },
   {
    "card": "battery_price",
    "noSi": [
     {
      "value": 70,
      "above": 0.17
     },
     {
      "value": 100,
      "above": 0.09
     },
     {
      "value": 1436,
      "above": 0.012
     }
    ],
    "si": [
     {
      "value": 70,
      "above": 0.12
     },
     {
      "value": 100,
      "above": 0.07
     },
     {
      "value": 1436,
      "above": 0.01
     }
    ]
   },
   {
    "card": "clean_investment",
    "noSi": [
     {
      "value": 50,
      "above": 0.88
     },
     {
      "value": 63,
      "above": 0.8
     },
     {
      "value": 79,
      "above": 0.62
     }
    ],
    "si": [
     {
      "value": 50,
      "above": 0.88
     },
     {
      "value": 63,
      "above": 0.8
     },
     {
      "value": 79,
      "above": 0.65
     }
    ]
   },
   {
    "card": "fission",
    "noSi": [
     {
      "value": 10,
      "above": 0.35
     },
     {
      "value": 30,
      "above": 0.06
     }
    ],
    "si": [
     {
      "value": 10,
      "above": 0.42
     },
     {
      "value": 30,
      "above": 0.1
     }
    ]
   },
   {
    "card": "fusion",
    "noSi": [
     {
      "value": 1,
      "above": 0.3
     },
     {
      "value": 10,
      "above": 0.08
     },
     {
      "value": 30,
      "above": 0.02
     }
    ],
    "si": [
     {
      "value": 1,
      "above": 0.48
     },
     {
      "value": 10,
      "above": 0.18
     },
     {
      "value": 30,
      "above": 0.06
     }
    ]
   },
   {
    "card": "geothermal",
    "noSi": [
     {
      "value": 1,
      "above": 0.55
     },
     {
      "value": 10,
      "above": 0.1
     },
     {
      "value": 30,
      "above": 0.02
     }
    ],
    "si": [
     {
      "value": 1,
      "above": 0.65
     },
     {
      "value": 10,
      "above": 0.17
     },
     {
      "value": 30,
      "above": 0.04
     }
    ]
   },
   {
    "card": "desalination",
    "noSi": [
     {
      "value": 0.15,
      "above": 0.8
     },
     {
      "value": 2,
      "above": 0.03
     }
    ],
    "si": [
     {
      "value": 0.15,
      "above": 0.62
     },
     {
      "value": 2,
      "above": 0.03
     }
    ]
   },
   {
    "card": "food_tech",
    "noSi": [
     {
      "value": 5.3,
      "above": 0.78
     },
     {
      "value": 8,
      "above": 0.2
     }
    ],
    "si": [
     {
      "value": 5.3,
      "above": 0.83
     },
     {
      "value": 8,
      "above": 0.33
     }
    ]
   },
   {
    "card": "medicine",
    "noSi": [
     {
      "value": 30,
      "above": 0.7
     },
     {
      "value": 100,
      "above": 0.12
     },
     {
      "value": 500,
      "above": 0.02
     }
    ],
    "si": [
     {
      "value": 30,
      "above": 0.72
     },
     {
      "value": 100,
      "above": 0.33
     },
     {
      "value": 500,
      "above": 0.09
     }
    ]
   },
   {
    "card": "robots",
    "noSi": [
     {
      "value": 50,
      "above": 0.85
     },
     {
      "value": 500,
      "above": 0.42
     },
     {
      "value": 5000,
      "above": 0.08
     }
    ],
    "si": [
     {
      "value": 50,
      "above": 0.92
     },
     {
      "value": 500,
      "above": 0.78
     },
     {
      "value": 5000,
      "above": 0.45
     }
    ]
   },
   {
    "card": "carbon_removal",
    "noSi": [
     {
      "value": 2,
      "above": 0.72
     },
     {
      "value": 40,
      "above": 0.03
     }
    ],
    "si": [
     {
      "value": 2,
      "above": 0.8
     },
     {
      "value": 40,
      "above": 0.08
     }
    ]
   },
   {
    "card": "materials",
    "noSi": [
     {
      "value": 2,
      "above": 0.95
     },
     {
      "value": 10,
      "above": 0.52
     }
    ],
    "si": [
     {
      "value": 2,
      "above": 0.72
     },
     {
      "value": 10,
      "above": 0.22
     }
    ]
   }
  ]
 },
 {
  "id": "curves-technology-2026-11-25-2",
  "batch": "curves-technology",
  "model": "Claude Opus 5.5",
  "date": "2026-11-25",
  "method": "independent agent run, prompt 2026-11-25.1",
  "places": [],
  "curves": [
   {
    "card": "solar_storage",
    "noSi": [
     {
      "value": 10,
      "above": 0.96
     },
     {
      "value": 30,
      "above": 0.88
     },
     {
      "value": 60,
      "above": 0.6
     }
    ],
    "si": [
     {
      "value": 10,
      "above": 0.95
     },
     {
      "value": 30,
      "above": 0.87
     },
     {
      "value": 60,
      "above": 0.57
     }
    ]
   },
   {
    "card": "solar_price",
    "noSi": [
     {
      "value": 21,
      "above": 0.45
     },
     {
      "value": 100,
      "above": 0.04
     },
     {
      "value": 417,
      "above": 0.005
     }
    ],
    "si": [
     {
      "value": 21,
      "above": 0.33
     },
     {
      "value": 100,
      "above": 0.03
     },
     {
      "value": 417,
      "above": 0.005
     }
    ]
   },
   {
    "card": "battery_price",
    "noSi": [
     {
      "value": 70,
      "above": 0.22
     },
     {
      "value": 100,
      "above": 0.1
     },
     {
      "value": 1436,
      "above": 0.005
     }
    ],
    "si": [
     {
      "value": 70,
      "above": 0.13
     },
     {
      "value": 100,
      "above": 0.07
     },
     {
      "value": 1436,
      "above": 0.004
     }
    ]
   },
   {
    "card": "clean_investment",
    "noSi": [
     {
      "value": 50,
      "above": 0.9
     },
     {
      "value": 63,
      "above": 0.82
     },
     {
      "value": 79,
      "above": 0.62
     }
    ],
    "si": [
     {
      "value": 50,
      "above": 0.92
     },
     {
      "value": 63,
      "above": 0.86
     },
     {
      "value": 79,
      "above": 0.7
     }
    ]
   },
   {
    "card": "fission",
    "noSi": [
     {
      "value": 10,
      "above": 0.35
     },
     {
      "value": 30,
      "above": 0.04
     }
    ],
    "si": [
     {
      "value": 10,
      "above": 0.45
     },
     {
      "value": 30,
      "above": 0.08
     }
    ]
   },
   {
    "card": "fusion",
    "noSi": [
     {
      "value": 1,
      "above": 0.3
     },
     {
      "value": 10,
      "above": 0.08
     },
     {
      "value": 30,
      "above": 0.015
     }
    ],
    "si": [
     {
      "value": 1,
      "above": 0.55
     },
     {
      "value": 10,
      "above": 0.22
     },
     {
      "value": 30,
      "above": 0.07
     }
    ]
   },
   {
    "card": "geothermal",
    "noSi": [
     {
      "value": 1,
      "above": 0.45
     },
     {
      "value": 10,
      "above": 0.06
     },
     {
      "value": 30,
      "above": 0.008
     }
    ],
    "si": [
     {
      "value": 1,
      "above": 0.6
     },
     {
      "value": 10,
      "above": 0.13
     },
     {
      "value": 30,
      "above": 0.02
     }
    ]
   },
   {
    "card": "desalination",
    "noSi": [
     {
      "value": 0.15,
      "above": 0.75
     },
     {
      "value": 2,
      "above": 0.03
     }
    ],
    "si": [
     {
      "value": 0.15,
      "above": 0.55
     },
     {
      "value": 2,
      "above": 0.025
     }
    ]
   },
   {
    "card": "food_tech",
    "noSi": [
     {
      "value": 5.3,
      "above": 0.88
     },
     {
      "value": 8,
      "above": 0.25
     }
    ],
    "si": [
     {
      "value": 5.3,
      "above": 0.87
     },
     {
      "value": 8,
      "above": 0.42
     }
    ]
   },
   {
    "card": "medicine",
    "noSi": [
     {
      "value": 30,
      "above": 0.75
     },
     {
      "value": 100,
      "above": 0.15
     },
     {
      "value": 500,
      "above": 0.01
     }
    ],
    "si": [
     {
      "value": 30,
      "above": 0.8
     },
     {
      "value": 100,
      "above": 0.45
     },
     {
      "value": 500,
      "above": 0.1
     }
    ]
   },
   {
    "card": "robots",
    "noSi": [
     {
      "value": 50,
      "above": 0.78
     },
     {
      "value": 500,
      "above": 0.38
     },
     {
      "value": 5000,
      "above": 0.06
     }
    ],
    "si": [
     {
      "value": 50,
      "above": 0.92
     },
     {
      "value": 500,
      "above": 0.78
     },
     {
      "value": 5000,
      "above": 0.48
     }
    ]
   },
   {
    "card": "carbon_removal",
    "noSi": [
     {
      "value": 2,
      "above": 0.75
     },
     {
      "value": 40,
      "above": 0.01
     }
    ],
    "si": [
     {
      "value": 2,
      "above": 0.82
     },
     {
      "value": 40,
      "above": 0.05
     }
    ]
   },
   {
    "card": "materials",
    "noSi": [
     {
      "value": 2,
      "above": 0.96
     },
     {
      "value": 10,
      "above": 0.5
     }
    ],
    "si": [
     {
      "value": 2,
      "above": 0.72
     },
     {
      "value": 10,
      "above": 0.18
     }
    ]
   }
  ]
 },
 {
  "id": "world-2026-11-25-1",
  "batch": "world",
  "model": "Claude Opus 5.5",
  "date": "2026-11-25",
  "method": "independent agent run, prompt 2026-11-25.1",
  "world": {
   "siBy2050": 0.6,
   "siBy2100": 0.8,
   "si": {
    "causes": {
     "climate": {
      "atLeast3": 0.075,
      "atLeast4": 0.003,
      "doom": 0.0002
     },
     "resources": {
      "atLeast3": 0.06,
      "atLeast4": 0.02,
      "doom": 0.0005
     },
     "war": {
      "atLeast3": 0.07,
      "atLeast4": 0.025,
      "doom": 0.004
     },
     "civil": {
      "atLeast3": 0.095,
      "atLeast4": 0.03,
      "doom": 0.001
     },
     "disease": {
      "atLeast3": 0.04,
      "atLeast4": 0.012,
      "doom": 0.004
     },
     "ai": {
      "atLeast3": 0.11,
      "atLeast4": 0.07,
      "doom": 0.035
     },
     "natural": {
      "atLeast3": 0.006,
      "atLeast4": 0.001,
      "doom": 0.0005
     }
    },
    "directDoom": 0.045,
    "abundance": 0.08
   },
   "noSi": {
    "causes": {
     "climate": {
      "atLeast3": 0.13,
      "atLeast4": 0.005,
      "doom": 0.0003
     },
     "resources": {
      "atLeast3": 0.07,
      "atLeast4": 0.018,
      "doom": 0.0005
     },
     "war": {
      "atLeast3": 0.06,
      "atLeast4": 0.02,
      "doom": 0.003
     },
     "civil": {
      "atLeast3": 0.075,
      "atLeast4": 0.011,
      "doom": 0.0002
     },
     "disease": {
      "atLeast3": 0.04,
      "atLeast4": 0.006,
      "doom": 0.001
     },
     "ai": {
      "atLeast3": 0.02,
      "atLeast4": 0.006,
      "doom": 0.003
     },
     "natural": {
      "atLeast3": 0.006,
      "atLeast4": 0.0008,
      "doom": 0.0003
     }
    },
    "directDoom": 0.008,
    "abundance": 0.001
   }
  },
  "places": [
   {
    "entity": "europe-north",
    "si": {
     "abundance": 0.33,
     "better": 0.45,
     "stagnation": 0.08,
     "decline": 0.05,
     "collapse": 0.09
    },
    "noSi": {
     "abundance": 0.01,
     "better": 0.68,
     "stagnation": 0.18,
     "decline": 0.08,
     "collapse": 0.05
    }
   },
   {
    "entity": "europe-west",
    "si": {
     "abundance": 0.31,
     "better": 0.46,
     "stagnation": 0.09,
     "decline": 0.05,
     "collapse": 0.09
    },
    "noSi": {
     "abundance": 0.01,
     "better": 0.64,
     "stagnation": 0.19,
     "decline": 0.1,
     "collapse": 0.06
    }
   },
   {
    "entity": "europe-south",
    "si": {
     "abundance": 0.2700000000000001,
     "better": 0.47000000000000003,
     "stagnation": 0.10000000000000002,
     "decline": 0.060000000000000005,
     "collapse": 0.10000000000000002
    },
    "noSi": {
     "abundance": 0.008000000000000002,
     "better": 0.5800000000000001,
     "stagnation": 0.22000000000000003,
     "decline": 0.12000000000000001,
     "collapse": 0.07200000000000001
    }
   },
   {
    "entity": "europe-east",
    "si": {
     "abundance": 0.20000000000000004,
     "better": 0.5200000000000001,
     "stagnation": 0.09000000000000001,
     "decline": 0.07000000000000002,
     "collapse": 0.12000000000000001
    },
    "noSi": {
     "abundance": 0.005,
     "better": 0.62,
     "stagnation": 0.17,
     "decline": 0.11,
     "collapse": 0.095
    }
   },
   {
    "entity": "north-america",
    "si": {
     "abundance": 0.35999999999999993,
     "better": 0.4299999999999999,
     "stagnation": 0.06999999999999999,
     "decline": 0.04999999999999999,
     "collapse": 0.08999999999999998
    },
    "noSi": {
     "abundance": 0.015,
     "better": 0.66,
     "stagnation": 0.17,
     "decline": 0.09,
     "collapse": 0.065
    }
   },
   {
    "entity": "latin-america",
    "si": {
     "abundance": 0.15000000000000002,
     "better": 0.6000000000000001,
     "stagnation": 0.08000000000000002,
     "decline": 0.060000000000000005,
     "collapse": 0.11000000000000001
    },
    "noSi": {
     "abundance": 0.003,
     "better": 0.68,
     "stagnation": 0.15,
     "decline": 0.09,
     "collapse": 0.077
    }
   },
   {
    "entity": "mena",
    "si": {
     "abundance": 0.13000000000000003,
     "better": 0.5700000000000001,
     "stagnation": 0.10000000000000002,
     "decline": 0.07000000000000002,
     "collapse": 0.13000000000000003
    },
    "noSi": {
     "abundance": 0.002,
     "better": 0.55,
     "stagnation": 0.2,
     "decline": 0.13,
     "collapse": 0.118
    }
   },
   {
    "entity": "sub-saharan-africa",
    "si": {
     "abundance": 0.1,
     "better": 0.64,
     "stagnation": 0.08,
     "decline": 0.05,
     "collapse": 0.13
    },
    "noSi": {
     "abundance": 0.003,
     "better": 0.72,
     "stagnation": 0.12,
     "decline": 0.06,
     "collapse": 0.097
    }
   },
   {
    "entity": "central-south-asia",
    "si": {
     "abundance": 0.11999999999999997,
     "better": 0.6499999999999999,
     "stagnation": 0.06999999999999999,
     "decline": 0.04999999999999999,
     "collapse": 0.10999999999999997
    },
    "noSi": {
     "abundance": 0.0020000000000000005,
     "better": 0.7500000000000001,
     "stagnation": 0.10000000000000002,
     "decline": 0.060000000000000005,
     "collapse": 0.08800000000000001
    }
   },
   {
    "entity": "east-asia",
    "si": {
     "abundance": 0.26999999999999996,
     "better": 0.5199999999999999,
     "stagnation": 0.059999999999999984,
     "decline": 0.04999999999999999,
     "collapse": 0.09999999999999998
    },
    "noSi": {
     "abundance": 0.006000000000000001,
     "better": 0.7000000000000001,
     "stagnation": 0.14000000000000004,
     "decline": 0.08000000000000002,
     "collapse": 0.07400000000000001
    }
   },
   {
    "entity": "southeast-asia",
    "si": {
     "abundance": 0.17999999999999997,
     "better": 0.5999999999999999,
     "stagnation": 0.06999999999999999,
     "decline": 0.04999999999999999,
     "collapse": 0.09999999999999998
    },
    "noSi": {
     "abundance": 0.004,
     "better": 0.74,
     "stagnation": 0.12,
     "decline": 0.07,
     "collapse": 0.066
    }
   },
   {
    "entity": "oceania",
    "si": {
     "abundance": 0.3,
     "better": 0.47,
     "stagnation": 0.08,
     "decline": 0.05,
     "collapse": 0.1
    },
    "noSi": {
     "abundance": 0.01,
     "better": 0.64,
     "stagnation": 0.19,
     "decline": 0.09,
     "collapse": 0.07
    }
   }
  ],
  "curves": []
 },
 {
  "id": "world-2026-11-25-2",
  "batch": "world",
  "model": "Claude Opus 5.5",
  "date": "2026-11-25",
  "method": "independent agent run, prompt 2026-11-25.1",
  "world": {
   "siBy2050": 0.6,
   "siBy2100": 0.8,
   "si": {
    "causes": {
     "climate": {
      "atLeast3": 0.07,
      "atLeast4": 0.003,
      "doom": 0.0003
     },
     "resources": {
      "atLeast3": 0.063,
      "atLeast4": 0.02,
      "doom": 0.001
     },
     "war": {
      "atLeast3": 0.075,
      "atLeast4": 0.028,
      "doom": 0.007
     },
     "civil": {
      "atLeast3": 0.1,
      "atLeast4": 0.035,
      "doom": 0.003
     },
     "disease": {
      "atLeast3": 0.04,
      "atLeast4": 0.012,
      "doom": 0.005
     },
     "ai": {
      "atLeast3": 0.11,
      "atLeast4": 0.07,
      "doom": 0.045
     },
     "natural": {
      "atLeast3": 0.006,
      "atLeast4": 0.002,
      "doom": 0.001
     }
    },
    "directDoom": 0.06,
    "abundance": 0.06
   },
   "noSi": {
    "causes": {
     "climate": {
      "atLeast3": 0.13,
      "atLeast4": 0.006,
      "doom": 0.0008
     },
     "resources": {
      "atLeast3": 0.07,
      "atLeast4": 0.018,
      "doom": 0.0015
     },
     "war": {
      "atLeast3": 0.055,
      "atLeast4": 0.018,
      "doom": 0.004
     },
     "civil": {
      "atLeast3": 0.065,
      "atLeast4": 0.011,
      "doom": 0.0005
     },
     "disease": {
      "atLeast3": 0.04,
      "atLeast4": 0.006,
      "doom": 0.001
     },
     "ai": {
      "atLeast3": 0.02,
      "atLeast4": 0.006,
      "doom": 0.003
     },
     "natural": {
      "atLeast3": 0.006,
      "atLeast4": 0.0008,
      "doom": 0.0003
     }
    },
    "directDoom": 0.011,
    "abundance": 0.0006
   }
  },
  "places": [
   {
    "entity": "europe-north",
    "si": {
     "abundance": 0.3,
     "better": 0.53,
     "stagnation": 0.08,
     "decline": 0.05,
     "collapse": 0.04
    },
    "noSi": {
     "abundance": 0.005,
     "better": 0.685,
     "stagnation": 0.17,
     "decline": 0.08,
     "collapse": 0.06
    }
   },
   {
    "entity": "europe-west",
    "si": {
     "abundance": 0.28,
     "better": 0.53,
     "stagnation": 0.09,
     "decline": 0.05,
     "collapse": 0.05
    },
    "noSi": {
     "abundance": 0.005,
     "better": 0.645,
     "stagnation": 0.19,
     "decline": 0.09,
     "collapse": 0.07
    }
   },
   {
    "entity": "europe-south",
    "si": {
     "abundance": 0.24,
     "better": 0.53,
     "stagnation": 0.11,
     "decline": 0.07,
     "collapse": 0.05
    },
    "noSi": {
     "abundance": 0.003,
     "better": 0.562,
     "stagnation": 0.23,
     "decline": 0.12,
     "collapse": 0.085
    }
   },
   {
    "entity": "europe-east",
    "si": {
     "abundance": 0.18000000000000002,
     "better": 0.5500000000000002,
     "stagnation": 0.11000000000000001,
     "decline": 0.08000000000000002,
     "collapse": 0.08000000000000002
    },
    "noSi": {
     "abundance": 0.003,
     "better": 0.622,
     "stagnation": 0.15,
     "decline": 0.11,
     "collapse": 0.115
    }
   },
   {
    "entity": "north-america",
    "si": {
     "abundance": 0.32999999999999996,
     "better": 0.4899999999999999,
     "stagnation": 0.06999999999999999,
     "decline": 0.04999999999999999,
     "collapse": 0.059999999999999984
    },
    "noSi": {
     "abundance": 0.01,
     "better": 0.67,
     "stagnation": 0.15,
     "decline": 0.09,
     "collapse": 0.08
    }
   },
   {
    "entity": "latin-america",
    "si": {
     "abundance": 0.12,
     "better": 0.64,
     "stagnation": 0.1,
     "decline": 0.07,
     "collapse": 0.07
    },
    "noSi": {
     "abundance": 0.002,
     "better": 0.661,
     "stagnation": 0.15,
     "decline": 0.1,
     "collapse": 0.087
    }
   },
   {
    "entity": "mena",
    "si": {
     "abundance": 0.11,
     "better": 0.56,
     "stagnation": 0.12,
     "decline": 0.09,
     "collapse": 0.12
    },
    "noSi": {
     "abundance": 0.002,
     "better": 0.521,
     "stagnation": 0.17,
     "decline": 0.14,
     "collapse": 0.167
    }
   },
   {
    "entity": "sub-saharan-africa",
    "si": {
     "abundance": 0.08000000000000002,
     "better": 0.6500000000000001,
     "stagnation": 0.10000000000000002,
     "decline": 0.060000000000000005,
     "collapse": 0.11000000000000001
    },
    "noSi": {
     "abundance": 0.001,
     "better": 0.62,
     "stagnation": 0.15,
     "decline": 0.09,
     "collapse": 0.139
    }
   },
   {
    "entity": "central-south-asia",
    "si": {
     "abundance": 0.10000000000000002,
     "better": 0.6900000000000001,
     "stagnation": 0.07000000000000002,
     "decline": 0.05000000000000001,
     "collapse": 0.09000000000000001
    },
    "noSi": {
     "abundance": 0.0010000000000000002,
     "better": 0.7210000000000001,
     "stagnation": 0.10000000000000002,
     "decline": 0.07000000000000002,
     "collapse": 0.10800000000000001
    }
   },
   {
    "entity": "east-asia",
    "si": {
     "abundance": 0.19999999999999996,
     "better": 0.6199999999999999,
     "stagnation": 0.06999999999999999,
     "decline": 0.04999999999999999,
     "collapse": 0.059999999999999984
    },
    "noSi": {
     "abundance": 0.0030000000000000005,
     "better": 0.7030000000000001,
     "stagnation": 0.13000000000000003,
     "decline": 0.08000000000000002,
     "collapse": 0.08400000000000002
    }
   },
   {
    "entity": "southeast-asia",
    "si": {
     "abundance": 0.13999999999999999,
     "better": 0.6799999999999999,
     "stagnation": 0.06999999999999999,
     "decline": 0.04999999999999999,
     "collapse": 0.059999999999999984
    },
    "noSi": {
     "abundance": 0.0020000000000000005,
     "better": 0.7120000000000001,
     "stagnation": 0.12000000000000001,
     "decline": 0.08000000000000002,
     "collapse": 0.08600000000000001
    }
   },
   {
    "entity": "oceania",
    "si": {
     "abundance": 0.27,
     "better": 0.55,
     "stagnation": 0.08,
     "decline": 0.05,
     "collapse": 0.05
    },
    "noSi": {
     "abundance": 0.005,
     "better": 0.665,
     "stagnation": 0.18,
     "decline": 0.09,
     "collapse": 0.06
    }
   }
  ],
  "curves": []
 },
 {
  "id": "world-2026-11-25-3",
  "batch": "world",
  "model": "Claude Opus 5.5",
  "date": "2026-11-25",
  "method": "independent agent run, prompt 2026-11-25.1",
  "world": {
   "siBy2050": 0.6,
   "siBy2100": 0.8,
   "si": {
    "causes": {
     "climate": {
      "atLeast3": 0.075,
      "atLeast4": 0.004,
      "doom": 0.0005
     },
     "resources": {
      "atLeast3": 0.045,
      "atLeast4": 0.012,
      "doom": 0.0005
     },
     "war": {
      "atLeast3": 0.07,
      "atLeast4": 0.03,
      "doom": 0.006
     },
     "civil": {
      "atLeast3": 0.095,
      "atLeast4": 0.025,
      "doom": 0.002
     },
     "disease": {
      "atLeast3": 0.035,
      "atLeast4": 0.012,
      "doom": 0.004
     },
     "ai": {
      "atLeast3": 0.1,
      "atLeast4": 0.06,
      "doom": 0.035
     },
     "natural": {
      "atLeast3": 0.006,
      "atLeast4": 0.002,
      "doom": 0.001
     }
    },
    "directDoom": 0.05,
    "abundance": 0.1
   },
   "noSi": {
    "causes": {
     "climate": {
      "atLeast3": 0.1,
      "atLeast4": 0.006,
      "doom": 0.001
     },
     "resources": {
      "atLeast3": 0.06,
      "atLeast4": 0.015,
      "doom": 0.001
     },
     "war": {
      "atLeast3": 0.065,
      "atLeast4": 0.025,
      "doom": 0.004
     },
     "civil": {
      "atLeast3": 0.075,
      "atLeast4": 0.01,
      "doom": 0.0005
     },
     "disease": {
      "atLeast3": 0.04,
      "atLeast4": 0.008,
      "doom": 0.0015
     },
     "ai": {
      "atLeast3": 0.015,
      "atLeast4": 0.005,
      "doom": 0.003
     },
     "natural": {
      "atLeast3": 0.006,
      "atLeast4": 0.0015,
      "doom": 0.0005
     }
    },
    "directDoom": 0.012,
    "abundance": 0.001
   }
  },
  "places": [
   {
    "entity": "europe-north",
    "si": {
     "abundance": 0.3799999999999999,
     "better": 0.4499999999999999,
     "stagnation": 0.06999999999999999,
     "decline": 0.04999999999999999,
     "collapse": 0.04999999999999999
    },
    "noSi": {
     "abundance": 0.01,
     "better": 0.72,
     "stagnation": 0.14,
     "decline": 0.08,
     "collapse": 0.05
    }
   },
   {
    "entity": "europe-west",
    "si": {
     "abundance": 0.37,
     "better": 0.45,
     "stagnation": 0.08,
     "decline": 0.05,
     "collapse": 0.05
    },
    "noSi": {
     "abundance": 0.01,
     "better": 0.68,
     "stagnation": 0.16,
     "decline": 0.09,
     "collapse": 0.06
    }
   },
   {
    "entity": "europe-south",
    "si": {
     "abundance": 0.32,
     "better": 0.47,
     "stagnation": 0.1,
     "decline": 0.06,
     "collapse": 0.05
    },
    "noSi": {
     "abundance": 0.005000000000000001,
     "better": 0.6200000000000001,
     "stagnation": 0.18000000000000002,
     "decline": 0.12000000000000001,
     "collapse": 0.07500000000000001
    }
   },
   {
    "entity": "europe-east",
    "si": {
     "abundance": 0.27,
     "better": 0.5,
     "stagnation": 0.1,
     "decline": 0.06,
     "collapse": 0.07
    },
    "noSi": {
     "abundance": 0.005,
     "better": 0.66,
     "stagnation": 0.14,
     "decline": 0.11,
     "collapse": 0.085
    }
   },
   {
    "entity": "north-america",
    "si": {
     "abundance": 0.4199999999999999,
     "better": 0.3999999999999999,
     "stagnation": 0.06999999999999999,
     "decline": 0.04999999999999999,
     "collapse": 0.059999999999999984
    },
    "noSi": {
     "abundance": 0.02,
     "better": 0.7,
     "stagnation": 0.14,
     "decline": 0.08,
     "collapse": 0.06
    }
   },
   {
    "entity": "latin-america",
    "si": {
     "abundance": 0.2,
     "better": 0.58,
     "stagnation": 0.1,
     "decline": 0.06,
     "collapse": 0.06
    },
    "noSi": {
     "abundance": 0.002,
     "better": 0.7,
     "stagnation": 0.15,
     "decline": 0.08,
     "collapse": 0.068
    }
   },
   {
    "entity": "mena",
    "si": {
     "abundance": 0.18000000000000002,
     "better": 0.5500000000000002,
     "stagnation": 0.11000000000000001,
     "decline": 0.07000000000000002,
     "collapse": 0.09000000000000001
    },
    "noSi": {
     "abundance": 0.002,
     "better": 0.58,
     "stagnation": 0.18,
     "decline": 0.12,
     "collapse": 0.118
    }
   },
   {
    "entity": "sub-saharan-africa",
    "si": {
     "abundance": 0.13000000000000003,
     "better": 0.6200000000000001,
     "stagnation": 0.10000000000000002,
     "decline": 0.060000000000000005,
     "collapse": 0.09000000000000001
    },
    "noSi": {
     "abundance": 0.001,
     "better": 0.66,
     "stagnation": 0.14,
     "decline": 0.08,
     "collapse": 0.119
    }
   },
   {
    "entity": "central-south-asia",
    "si": {
     "abundance": 0.17,
     "better": 0.63,
     "stagnation": 0.08,
     "decline": 0.05,
     "collapse": 0.07
    },
    "noSi": {
     "abundance": 0.0020000000000000005,
     "better": 0.7200000000000001,
     "stagnation": 0.11000000000000001,
     "decline": 0.07000000000000002,
     "collapse": 0.09800000000000002
    }
   },
   {
    "entity": "east-asia",
    "si": {
     "abundance": 0.33,
     "better": 0.48,
     "stagnation": 0.08,
     "decline": 0.05,
     "collapse": 0.06
    },
    "noSi": {
     "abundance": 0.005000000000000001,
     "better": 0.7000000000000001,
     "stagnation": 0.13000000000000003,
     "decline": 0.08000000000000002,
     "collapse": 0.08500000000000002
    }
   },
   {
    "entity": "southeast-asia",
    "si": {
     "abundance": 0.22,
     "better": 0.59,
     "stagnation": 0.08,
     "decline": 0.05,
     "collapse": 0.06
    },
    "noSi": {
     "abundance": 0.003,
     "better": 0.74,
     "stagnation": 0.12,
     "decline": 0.07,
     "collapse": 0.067
    }
   },
   {
    "entity": "oceania",
    "si": {
     "abundance": 0.36,
     "better": 0.46,
     "stagnation": 0.08,
     "decline": 0.05,
     "collapse": 0.05
    },
    "noSi": {
     "abundance": 0.01,
     "better": 0.72,
     "stagnation": 0.14,
     "decline": 0.08,
     "collapse": 0.05
    }
   }
  ],
  "curves": []
 },
 {
  "id": "spotlight-1-2026-11-25-1",
  "batch": "spotlight-1",
  "model": "Claude Opus 5.5",
  "date": "2026-11-25",
  "method": "independent agent run, prompt 2026-11-25.1",
  "places": [
   {
    "entity": "IND",
    "si": {
     "abundance": 0.10000000000000002,
     "better": 0.6900000000000001,
     "stagnation": 0.060000000000000005,
     "decline": 0.05500000000000001,
     "collapse": 0.09500000000000001
    },
    "noSi": {
     "abundance": 0.001,
     "better": 0.77,
     "stagnation": 0.07,
     "decline": 0.06,
     "collapse": 0.099
    }
   },
   {
    "entity": "CHN",
    "si": {
     "abundance": 0.2,
     "better": 0.605,
     "stagnation": 0.06,
     "decline": 0.055,
     "collapse": 0.08
    },
    "noSi": {
     "abundance": 0.0030000000000000005,
     "better": 0.7400000000000001,
     "stagnation": 0.10500000000000001,
     "decline": 0.07500000000000001,
     "collapse": 0.07700000000000001
    }
   },
   {
    "entity": "USA",
    "si": {
     "abundance": 0.32999999999999996,
     "better": 0.4899999999999999,
     "stagnation": 0.059999999999999984,
     "decline": 0.04499999999999999,
     "collapse": 0.07499999999999998
    },
    "noSi": {
     "abundance": 0.013,
     "better": 0.71,
     "stagnation": 0.13,
     "decline": 0.08,
     "collapse": 0.067
    }
   },
   {
    "entity": "IDN",
    "si": {
     "abundance": 0.11,
     "better": 0.69,
     "stagnation": 0.065,
     "decline": 0.06,
     "collapse": 0.075
    },
    "noSi": {
     "abundance": 0.002,
     "better": 0.77,
     "stagnation": 0.09,
     "decline": 0.065,
     "collapse": 0.073
    }
   },
   {
    "entity": "PAK",
    "si": {
     "abundance": 0.05,
     "better": 0.63,
     "stagnation": 0.1,
     "decline": 0.08,
     "collapse": 0.14
    },
    "noSi": {
     "abundance": 0.0005000000000000001,
     "better": 0.6495000000000001,
     "stagnation": 0.12000000000000001,
     "decline": 0.09000000000000001,
     "collapse": 0.14000000000000004
    }
   },
   {
    "entity": "NGA",
    "si": {
     "abundance": 0.05,
     "better": 0.62,
     "stagnation": 0.11,
     "decline": 0.08,
     "collapse": 0.14
    },
    "noSi": {
     "abundance": 0.0005000000000000001,
     "better": 0.6100000000000001,
     "stagnation": 0.14000000000000004,
     "decline": 0.10000000000000002,
     "collapse": 0.14950000000000002
    }
   },
   {
    "entity": "BRA",
    "si": {
     "abundance": 0.11,
     "better": 0.68,
     "stagnation": 0.08,
     "decline": 0.065,
     "collapse": 0.065
    },
    "noSi": {
     "abundance": 0.0015000000000000002,
     "better": 0.7300000000000001,
     "stagnation": 0.13000000000000003,
     "decline": 0.08500000000000002,
     "collapse": 0.053500000000000006
    }
   },
   {
    "entity": "BGD",
    "si": {
     "abundance": 0.08000000000000002,
     "better": 0.6700000000000002,
     "stagnation": 0.08000000000000002,
     "decline": 0.07000000000000002,
     "collapse": 0.10000000000000002
    },
    "noSi": {
     "abundance": 0.0005000000000000001,
     "better": 0.7200000000000001,
     "stagnation": 0.10000000000000002,
     "decline": 0.07500000000000001,
     "collapse": 0.10450000000000001
    }
   },
   {
    "entity": "RUS",
    "si": {
     "abundance": 0.12000000000000001,
     "better": 0.5800000000000001,
     "stagnation": 0.11000000000000001,
     "decline": 0.09000000000000001,
     "collapse": 0.10000000000000002
    },
    "noSi": {
     "abundance": 0.003,
     "better": 0.627,
     "stagnation": 0.16,
     "decline": 0.12,
     "collapse": 0.09
    }
   },
   {
    "entity": "ETH",
    "si": {
     "abundance": 0.05,
     "better": 0.66,
     "stagnation": 0.09,
     "decline": 0.08,
     "collapse": 0.12
    },
    "noSi": {
     "abundance": 0.00020000000000000004,
     "better": 0.6798000000000001,
     "stagnation": 0.12000000000000001,
     "decline": 0.08000000000000002,
     "collapse": 0.12000000000000001
    }
   },
   {
    "entity": "MEX",
    "si": {
     "abundance": 0.11,
     "better": 0.67,
     "stagnation": 0.085,
     "decline": 0.065,
     "collapse": 0.07
    },
    "noSi": {
     "abundance": 0.0015000000000000002,
     "better": 0.7100000000000001,
     "stagnation": 0.14000000000000004,
     "decline": 0.08500000000000002,
     "collapse": 0.06350000000000001
    }
   },
   {
    "entity": "JPN",
    "si": {
     "abundance": 0.26,
     "better": 0.545,
     "stagnation": 0.07,
     "decline": 0.055,
     "collapse": 0.07
    },
    "noSi": {
     "abundance": 0.005,
     "better": 0.65,
     "stagnation": 0.18,
     "decline": 0.1,
     "collapse": 0.065
    }
   },
   {
    "entity": "EGY",
    "si": {
     "abundance": 0.08000000000000002,
     "better": 0.5900000000000001,
     "stagnation": 0.12000000000000001,
     "decline": 0.10000000000000002,
     "collapse": 0.11000000000000001
    },
    "noSi": {
     "abundance": 0.0005,
     "better": 0.5895,
     "stagnation": 0.17,
     "decline": 0.12,
     "collapse": 0.12
    }
   },
   {
    "entity": "PHL",
    "si": {
     "abundance": 0.1,
     "better": 0.68,
     "stagnation": 0.08,
     "decline": 0.065,
     "collapse": 0.075
    },
    "noSi": {
     "abundance": 0.0015,
     "better": 0.76,
     "stagnation": 0.09,
     "decline": 0.07,
     "collapse": 0.0785
    }
   },
   {
    "entity": "COD",
    "si": {
     "abundance": 0.03,
     "better": 0.6,
     "stagnation": 0.13,
     "decline": 0.09,
     "collapse": 0.15
    },
    "noSi": {
     "abundance": 0.0001,
     "better": 0.5799,
     "stagnation": 0.16,
     "decline": 0.1,
     "collapse": 0.16
    }
   },
   {
    "entity": "VNM",
    "si": {
     "abundance": 0.13,
     "better": 0.69,
     "stagnation": 0.06,
     "decline": 0.055,
     "collapse": 0.065
    },
    "noSi": {
     "abundance": 0.002,
     "better": 0.79,
     "stagnation": 0.08,
     "decline": 0.06,
     "collapse": 0.068
    }
   },
   {
    "entity": "IRN",
    "si": {
     "abundance": 0.07000000000000002,
     "better": 0.6000000000000001,
     "stagnation": 0.11000000000000001,
     "decline": 0.10000000000000002,
     "collapse": 0.12000000000000001
    },
    "noSi": {
     "abundance": 0.0005,
     "better": 0.5995,
     "stagnation": 0.16,
     "decline": 0.12,
     "collapse": 0.12
    }
   },
   {
    "entity": "TUR",
    "si": {
     "abundance": 0.13,
     "better": 0.61,
     "stagnation": 0.11,
     "decline": 0.08,
     "collapse": 0.07
    },
    "noSi": {
     "abundance": 0.0015,
     "better": 0.66,
     "stagnation": 0.16,
     "decline": 0.1,
     "collapse": 0.0785
    }
   },
   {
    "entity": "DEU",
    "si": {
     "abundance": 0.2899999999999999,
     "better": 0.5199999999999999,
     "stagnation": 0.06999999999999999,
     "decline": 0.04999999999999999,
     "collapse": 0.06999999999999999
    },
    "noSi": {
     "abundance": 0.006,
     "better": 0.67,
     "stagnation": 0.17,
     "decline": 0.09,
     "collapse": 0.064
    }
   },
   {
    "entity": "THA",
    "si": {
     "abundance": 0.13,
     "better": 0.65,
     "stagnation": 0.085,
     "decline": 0.065,
     "collapse": 0.07
    },
    "noSi": {
     "abundance": 0.0015000000000000002,
     "better": 0.7100000000000001,
     "stagnation": 0.14000000000000004,
     "decline": 0.08500000000000002,
     "collapse": 0.06350000000000001
    }
   }
  ],
  "curves": []
 },
 {
  "id": "spotlight-1-2026-11-25-2",
  "batch": "spotlight-1",
  "model": "Claude Opus 5.5",
  "date": "2026-11-25",
  "method": "independent agent run, prompt 2026-11-25.1",
  "places": [
   {
    "entity": "IND",
    "si": {
     "abundance": 0.11999999999999997,
     "better": 0.6799999999999999,
     "stagnation": 0.059999999999999984,
     "decline": 0.04999999999999999,
     "collapse": 0.08999999999999998
    },
    "noSi": {
     "abundance": 0.0020000000000000005,
     "better": 0.7180000000000001,
     "stagnation": 0.09000000000000001,
     "decline": 0.08000000000000002,
     "collapse": 0.11000000000000001
    }
   },
   {
    "entity": "CHN",
    "si": {
     "abundance": 0.22,
     "better": 0.59,
     "stagnation": 0.065,
     "decline": 0.05,
     "collapse": 0.075
    },
    "noSi": {
     "abundance": 0.003,
     "better": 0.747,
     "stagnation": 0.1,
     "decline": 0.08,
     "collapse": 0.07
    }
   },
   {
    "entity": "USA",
    "si": {
     "abundance": 0.32,
     "better": 0.485,
     "stagnation": 0.07,
     "decline": 0.055,
     "collapse": 0.07
    },
    "noSi": {
     "abundance": 0.012,
     "better": 0.723,
     "stagnation": 0.13,
     "decline": 0.07,
     "collapse": 0.065
    }
   },
   {
    "entity": "IDN",
    "si": {
     "abundance": 0.14,
     "better": 0.675,
     "stagnation": 0.07,
     "decline": 0.055,
     "collapse": 0.06
    },
    "noSi": {
     "abundance": 0.002,
     "better": 0.758,
     "stagnation": 0.1,
     "decline": 0.075,
     "collapse": 0.065
    }
   },
   {
    "entity": "PAK",
    "si": {
     "abundance": 0.06500000000000002,
     "better": 0.6450000000000001,
     "stagnation": 0.10000000000000002,
     "decline": 0.08000000000000002,
     "collapse": 0.11000000000000001
    },
    "noSi": {
     "abundance": 0.0005,
     "better": 0.5895,
     "stagnation": 0.15,
     "decline": 0.11,
     "collapse": 0.15
    }
   },
   {
    "entity": "NGA",
    "si": {
     "abundance": 0.06500000000000002,
     "better": 0.6250000000000001,
     "stagnation": 0.13000000000000003,
     "decline": 0.08000000000000002,
     "collapse": 0.10000000000000002
    },
    "noSi": {
     "abundance": 0.0005,
     "better": 0.5695,
     "stagnation": 0.19,
     "decline": 0.11,
     "collapse": 0.13
    }
   },
   {
    "entity": "BRA",
    "si": {
     "abundance": 0.13,
     "better": 0.68,
     "stagnation": 0.09,
     "decline": 0.05,
     "collapse": 0.05
    },
    "noSi": {
     "abundance": 0.002,
     "better": 0.733,
     "stagnation": 0.14,
     "decline": 0.075,
     "collapse": 0.05
    }
   },
   {
    "entity": "BGD",
    "si": {
     "abundance": 0.09000000000000001,
     "better": 0.6700000000000002,
     "stagnation": 0.08000000000000002,
     "decline": 0.07000000000000002,
     "collapse": 0.09000000000000001
    },
    "noSi": {
     "abundance": 0.001,
     "better": 0.679,
     "stagnation": 0.12,
     "decline": 0.1,
     "collapse": 0.1
    }
   },
   {
    "entity": "RUS",
    "si": {
     "abundance": 0.13000000000000003,
     "better": 0.5700000000000001,
     "stagnation": 0.13000000000000003,
     "decline": 0.08000000000000002,
     "collapse": 0.09000000000000001
    },
    "noSi": {
     "abundance": 0.003,
     "better": 0.627,
     "stagnation": 0.17,
     "decline": 0.11,
     "collapse": 0.09
    }
   },
   {
    "entity": "ETH",
    "si": {
     "abundance": 0.06500000000000002,
     "better": 0.6550000000000001,
     "stagnation": 0.10000000000000002,
     "decline": 0.07500000000000001,
     "collapse": 0.10500000000000001
    },
    "noSi": {
     "abundance": 0.0005000000000000001,
     "better": 0.6395000000000001,
     "stagnation": 0.14000000000000004,
     "decline": 0.10000000000000002,
     "collapse": 0.12000000000000001
    }
   },
   {
    "entity": "MEX",
    "si": {
     "abundance": 0.14,
     "better": 0.65,
     "stagnation": 0.09,
     "decline": 0.06,
     "collapse": 0.06
    },
    "noSi": {
     "abundance": 0.002,
     "better": 0.698,
     "stagnation": 0.15,
     "decline": 0.08,
     "collapse": 0.07
    }
   },
   {
    "entity": "JPN",
    "si": {
     "abundance": 0.26,
     "better": 0.54,
     "stagnation": 0.09,
     "decline": 0.055,
     "collapse": 0.055
    },
    "noSi": {
     "abundance": 0.004,
     "better": 0.601,
     "stagnation": 0.25,
     "decline": 0.09,
     "collapse": 0.055
    }
   },
   {
    "entity": "EGY",
    "si": {
     "abundance": 0.09500000000000001,
     "better": 0.6150000000000001,
     "stagnation": 0.12000000000000001,
     "decline": 0.08000000000000002,
     "collapse": 0.09000000000000001
    },
    "noSi": {
     "abundance": 0.001,
     "better": 0.569,
     "stagnation": 0.18,
     "decline": 0.13,
     "collapse": 0.12
    }
   },
   {
    "entity": "PHL",
    "si": {
     "abundance": 0.12,
     "better": 0.66,
     "stagnation": 0.09,
     "decline": 0.065,
     "collapse": 0.065
    },
    "noSi": {
     "abundance": 0.002,
     "better": 0.728,
     "stagnation": 0.12,
     "decline": 0.08,
     "collapse": 0.07
    }
   },
   {
    "entity": "COD",
    "si": {
     "abundance": 0.055,
     "better": 0.635,
     "stagnation": 0.12,
     "decline": 0.08,
     "collapse": 0.11
    },
    "noSi": {
     "abundance": 0.0005,
     "better": 0.5995,
     "stagnation": 0.16,
     "decline": 0.1,
     "collapse": 0.14
    }
   },
   {
    "entity": "VNM",
    "si": {
     "abundance": 0.14999999999999997,
     "better": 0.6599999999999999,
     "stagnation": 0.06999999999999999,
     "decline": 0.059999999999999984,
     "collapse": 0.059999999999999984
    },
    "noSi": {
     "abundance": 0.003,
     "better": 0.757,
     "stagnation": 0.1,
     "decline": 0.075,
     "collapse": 0.065
    }
   },
   {
    "entity": "IRN",
    "si": {
     "abundance": 0.09000000000000001,
     "better": 0.6200000000000001,
     "stagnation": 0.11000000000000001,
     "decline": 0.08000000000000002,
     "collapse": 0.10000000000000002
    },
    "noSi": {
     "abundance": 0.001,
     "better": 0.569,
     "stagnation": 0.17,
     "decline": 0.13,
     "collapse": 0.13
    }
   },
   {
    "entity": "TUR",
    "si": {
     "abundance": 0.15,
     "better": 0.62,
     "stagnation": 0.1,
     "decline": 0.07,
     "collapse": 0.06
    },
    "noSi": {
     "abundance": 0.003,
     "better": 0.672,
     "stagnation": 0.16,
     "decline": 0.1,
     "collapse": 0.065
    }
   },
   {
    "entity": "DEU",
    "si": {
     "abundance": 0.28,
     "better": 0.52,
     "stagnation": 0.09,
     "decline": 0.055,
     "collapse": 0.055
    },
    "noSi": {
     "abundance": 0.005,
     "better": 0.63,
     "stagnation": 0.22,
     "decline": 0.09,
     "collapse": 0.055
    }
   },
   {
    "entity": "THA",
    "si": {
     "abundance": 0.15,
     "better": 0.63,
     "stagnation": 0.09,
     "decline": 0.065,
     "collapse": 0.065
    },
    "noSi": {
     "abundance": 0.002,
     "better": 0.683,
     "stagnation": 0.16,
     "decline": 0.09,
     "collapse": 0.065
    }
   }
  ],
  "curves": []
 },
 {
  "id": "spotlight-1-2026-11-25-3",
  "batch": "spotlight-1",
  "model": "Claude Opus 5.5",
  "date": "2026-11-25",
  "method": "independent agent run, prompt 2026-11-25.1",
  "places": [
   {
    "entity": "IND",
    "si": {
     "abundance": 0.1,
     "better": 0.715,
     "stagnation": 0.05,
     "decline": 0.055,
     "collapse": 0.08
    },
    "noSi": {
     "abundance": 0.0010000000000000002,
     "better": 0.7490000000000001,
     "stagnation": 0.09000000000000001,
     "decline": 0.07500000000000001,
     "collapse": 0.08500000000000002
    }
   },
   {
    "entity": "CHN",
    "si": {
     "abundance": 0.17999999999999997,
     "better": 0.6399999999999999,
     "stagnation": 0.04999999999999999,
     "decline": 0.059999999999999984,
     "collapse": 0.06999999999999999
    },
    "noSi": {
     "abundance": 0.002,
     "better": 0.753,
     "stagnation": 0.105,
     "decline": 0.075,
     "collapse": 0.065
    }
   },
   {
    "entity": "USA",
    "si": {
     "abundance": 0.31999999999999995,
     "better": 0.5099999999999999,
     "stagnation": 0.059999999999999984,
     "decline": 0.04999999999999999,
     "collapse": 0.059999999999999984
    },
    "noSi": {
     "abundance": 0.01,
     "better": 0.72,
     "stagnation": 0.14,
     "decline": 0.08,
     "collapse": 0.05
    }
   },
   {
    "entity": "IDN",
    "si": {
     "abundance": 0.1,
     "better": 0.72,
     "stagnation": 0.06,
     "decline": 0.055,
     "collapse": 0.065
    },
    "noSi": {
     "abundance": 0.001,
     "better": 0.77,
     "stagnation": 0.1,
     "decline": 0.068,
     "collapse": 0.061
    }
   },
   {
    "entity": "PAK",
    "si": {
     "abundance": 0.045,
     "better": 0.655,
     "stagnation": 0.09,
     "decline": 0.09,
     "collapse": 0.12
    },
    "noSi": {
     "abundance": 0.001,
     "better": 0.62,
     "stagnation": 0.14,
     "decline": 0.11,
     "collapse": 0.129
    }
   },
   {
    "entity": "NGA",
    "si": {
     "abundance": 0.035,
     "better": 0.645,
     "stagnation": 0.12,
     "decline": 0.08,
     "collapse": 0.12
    },
    "noSi": {
     "abundance": 0.0005,
     "better": 0.58,
     "stagnation": 0.17,
     "decline": 0.115,
     "collapse": 0.1345
    }
   },
   {
    "entity": "BRA",
    "si": {
     "abundance": 0.09,
     "better": 0.69,
     "stagnation": 0.09,
     "decline": 0.07,
     "collapse": 0.06
    },
    "noSi": {
     "abundance": 0.002,
     "better": 0.7,
     "stagnation": 0.15,
     "decline": 0.088,
     "collapse": 0.06
    }
   },
   {
    "entity": "BGD",
    "si": {
     "abundance": 0.06,
     "better": 0.69,
     "stagnation": 0.07,
     "decline": 0.08,
     "collapse": 0.1
    },
    "noSi": {
     "abundance": 0.0010000000000000002,
     "better": 0.6900000000000001,
     "stagnation": 0.11000000000000001,
     "decline": 0.09500000000000001,
     "collapse": 0.10400000000000001
    }
   },
   {
    "entity": "RUS",
    "si": {
     "abundance": 0.11000000000000001,
     "better": 0.5900000000000001,
     "stagnation": 0.11000000000000001,
     "decline": 0.09000000000000001,
     "collapse": 0.10000000000000002
    },
    "noSi": {
     "abundance": 0.002,
     "better": 0.6,
     "stagnation": 0.18,
     "decline": 0.12,
     "collapse": 0.098
    }
   },
   {
    "entity": "ETH",
    "si": {
     "abundance": 0.030000000000000002,
     "better": 0.6900000000000001,
     "stagnation": 0.10000000000000002,
     "decline": 0.07000000000000002,
     "collapse": 0.11000000000000001
    },
    "noSi": {
     "abundance": 0.0002,
     "better": 0.66,
     "stagnation": 0.13,
     "decline": 0.09,
     "collapse": 0.1198
    }
   },
   {
    "entity": "MEX",
    "si": {
     "abundance": 0.1,
     "better": 0.67,
     "stagnation": 0.09,
     "decline": 0.07,
     "collapse": 0.07
    },
    "noSi": {
     "abundance": 0.002,
     "better": 0.69,
     "stagnation": 0.15,
     "decline": 0.09,
     "collapse": 0.068
    }
   },
   {
    "entity": "JPN",
    "si": {
     "abundance": 0.25,
     "better": 0.57,
     "stagnation": 0.08,
     "decline": 0.05,
     "collapse": 0.05
    },
    "noSi": {
     "abundance": 0.002,
     "better": 0.59,
     "stagnation": 0.25,
     "decline": 0.108,
     "collapse": 0.05
    }
   },
   {
    "entity": "EGY",
    "si": {
     "abundance": 0.060000000000000005,
     "better": 0.6300000000000001,
     "stagnation": 0.11000000000000001,
     "decline": 0.10000000000000002,
     "collapse": 0.10000000000000002
    },
    "noSi": {
     "abundance": 0.001,
     "better": 0.609,
     "stagnation": 0.16,
     "decline": 0.12,
     "collapse": 0.11
    }
   },
   {
    "entity": "PHL",
    "si": {
     "abundance": 0.07,
     "better": 0.71,
     "stagnation": 0.08,
     "decline": 0.065,
     "collapse": 0.075
    },
    "noSi": {
     "abundance": 0.001,
     "better": 0.74,
     "stagnation": 0.11,
     "decline": 0.08,
     "collapse": 0.069
    }
   },
   {
    "entity": "COD",
    "si": {
     "abundance": 0.015,
     "better": 0.635,
     "stagnation": 0.14,
     "decline": 0.08,
     "collapse": 0.13
    },
    "noSi": {
     "abundance": 0.0001,
     "better": 0.56,
     "stagnation": 0.17,
     "decline": 0.11,
     "collapse": 0.1599
    }
   },
   {
    "entity": "VNM",
    "si": {
     "abundance": 0.12,
     "better": 0.71,
     "stagnation": 0.05,
     "decline": 0.055,
     "collapse": 0.065
    },
    "noSi": {
     "abundance": 0.002,
     "better": 0.79,
     "stagnation": 0.08,
     "decline": 0.068,
     "collapse": 0.06
    }
   },
   {
    "entity": "IRN",
    "si": {
     "abundance": 0.060000000000000005,
     "better": 0.6200000000000001,
     "stagnation": 0.11000000000000001,
     "decline": 0.10000000000000002,
     "collapse": 0.11000000000000001
    },
    "noSi": {
     "abundance": 0.001,
     "better": 0.6,
     "stagnation": 0.16,
     "decline": 0.12,
     "collapse": 0.119
    }
   },
   {
    "entity": "TUR",
    "si": {
     "abundance": 0.13,
     "better": 0.64,
     "stagnation": 0.09,
     "decline": 0.07,
     "collapse": 0.07
    },
    "noSi": {
     "abundance": 0.002,
     "better": 0.68,
     "stagnation": 0.16,
     "decline": 0.09,
     "collapse": 0.068
    }
   },
   {
    "entity": "DEU",
    "si": {
     "abundance": 0.28,
     "better": 0.54,
     "stagnation": 0.08,
     "decline": 0.05,
     "collapse": 0.05
    },
    "noSi": {
     "abundance": 0.004,
     "better": 0.64,
     "stagnation": 0.21,
     "decline": 0.1,
     "collapse": 0.046
    }
   },
   {
    "entity": "THA",
    "si": {
     "abundance": 0.12,
     "better": 0.67,
     "stagnation": 0.08,
     "decline": 0.06,
     "collapse": 0.07
    },
    "noSi": {
     "abundance": 0.002,
     "better": 0.7,
     "stagnation": 0.15,
     "decline": 0.085,
     "collapse": 0.063
    }
   }
  ],
  "curves": []
 },
 {
  "id": "spotlight-2-2026-11-25-1",
  "batch": "spotlight-2",
  "model": "Claude Opus 5.5",
  "date": "2026-11-25",
  "method": "independent agent run, prompt 2026-11-25.1",
  "places": [
   {
    "entity": "GBR",
    "si": {
     "abundance": 0.26,
     "better": 0.555,
     "stagnation": 0.07,
     "decline": 0.05,
     "collapse": 0.065
    },
    "noSi": {
     "abundance": 0.007,
     "better": 0.68,
     "stagnation": 0.17,
     "decline": 0.083,
     "collapse": 0.06
    }
   },
   {
    "entity": "FRA",
    "si": {
     "abundance": 0.25,
     "better": 0.56,
     "stagnation": 0.075,
     "decline": 0.05,
     "collapse": 0.065
    },
    "noSi": {
     "abundance": 0.006,
     "better": 0.665,
     "stagnation": 0.18,
     "decline": 0.09,
     "collapse": 0.059
    }
   },
   {
    "entity": "ZAF",
    "si": {
     "abundance": 0.06500000000000002,
     "better": 0.6150000000000001,
     "stagnation": 0.13000000000000003,
     "decline": 0.08000000000000002,
     "collapse": 0.11000000000000001
    },
    "noSi": {
     "abundance": 0.0010000000000000002,
     "better": 0.6000000000000001,
     "stagnation": 0.19000000000000003,
     "decline": 0.10000000000000002,
     "collapse": 0.10900000000000001
    }
   },
   {
    "entity": "ITA",
    "si": {
     "abundance": 0.21,
     "better": 0.56,
     "stagnation": 0.1,
     "decline": 0.065,
     "collapse": 0.065
    },
    "noSi": {
     "abundance": 0.004000000000000001,
     "better": 0.5700000000000001,
     "stagnation": 0.23000000000000004,
     "decline": 0.12500000000000003,
     "collapse": 0.07100000000000001
    }
   },
   {
    "entity": "KEN",
    "si": {
     "abundance": 0.054999999999999986,
     "better": 0.6849999999999999,
     "stagnation": 0.08999999999999998,
     "decline": 0.059999999999999984,
     "collapse": 0.10999999999999997
    },
    "noSi": {
     "abundance": 0.001,
     "better": 0.68,
     "stagnation": 0.13,
     "decline": 0.08,
     "collapse": 0.109
    }
   },
   {
    "entity": "COL",
    "si": {
     "abundance": 0.09,
     "better": 0.67,
     "stagnation": 0.1,
     "decline": 0.065,
     "collapse": 0.075
    },
    "noSi": {
     "abundance": 0.002,
     "better": 0.67,
     "stagnation": 0.16,
     "decline": 0.09,
     "collapse": 0.078
    }
   },
   {
    "entity": "KOR",
    "si": {
     "abundance": 0.23999999999999994,
     "better": 0.5599999999999999,
     "stagnation": 0.06999999999999999,
     "decline": 0.054999999999999986,
     "collapse": 0.07499999999999998
    },
    "noSi": {
     "abundance": 0.005,
     "better": 0.64,
     "stagnation": 0.17,
     "decline": 0.105,
     "collapse": 0.08
    }
   },
   {
    "entity": "ESP",
    "si": {
     "abundance": 0.22,
     "better": 0.57,
     "stagnation": 0.09,
     "decline": 0.06,
     "collapse": 0.06
    },
    "noSi": {
     "abundance": 0.004,
     "better": 0.61,
     "stagnation": 0.21,
     "decline": 0.11,
     "collapse": 0.066
    }
   },
   {
    "entity": "ARG",
    "si": {
     "abundance": 0.11,
     "better": 0.64,
     "stagnation": 0.12,
     "decline": 0.07,
     "collapse": 0.06
    },
    "noSi": {
     "abundance": 0.002,
     "better": 0.6,
     "stagnation": 0.22,
     "decline": 0.11,
     "collapse": 0.068
    }
   },
   {
    "entity": "CAN",
    "si": {
     "abundance": 0.2899999999999999,
     "better": 0.5499999999999999,
     "stagnation": 0.059999999999999984,
     "decline": 0.04499999999999999,
     "collapse": 0.054999999999999986
    },
    "noSi": {
     "abundance": 0.012,
     "better": 0.71,
     "stagnation": 0.15,
     "decline": 0.075,
     "collapse": 0.053
    }
   },
   {
    "entity": "UKR",
    "si": {
     "abundance": 0.10000000000000002,
     "better": 0.6400000000000001,
     "stagnation": 0.09000000000000001,
     "decline": 0.07000000000000002,
     "collapse": 0.10000000000000002
    },
    "noSi": {
     "abundance": 0.002,
     "better": 0.64,
     "stagnation": 0.14,
     "decline": 0.1,
     "collapse": 0.118
    }
   },
   {
    "entity": "SAU",
    "si": {
     "abundance": 0.11000000000000001,
     "better": 0.5800000000000001,
     "stagnation": 0.12000000000000001,
     "decline": 0.08000000000000002,
     "collapse": 0.11000000000000001
    },
    "noSi": {
     "abundance": 0.002,
     "better": 0.5,
     "stagnation": 0.22,
     "decline": 0.15,
     "collapse": 0.128
    }
   },
   {
    "entity": "POL",
    "si": {
     "abundance": 0.22000000000000003,
     "better": 0.5800000000000001,
     "stagnation": 0.07000000000000002,
     "decline": 0.05500000000000001,
     "collapse": 0.07500000000000001
    },
    "noSi": {
     "abundance": 0.004000000000000001,
     "better": 0.6900000000000001,
     "stagnation": 0.14000000000000004,
     "decline": 0.09500000000000001,
     "collapse": 0.07100000000000001
    }
   },
   {
    "entity": "AUS",
    "si": {
     "abundance": 0.28,
     "better": 0.56,
     "stagnation": 0.065,
     "decline": 0.045,
     "collapse": 0.05
    },
    "noSi": {
     "abundance": 0.01,
     "better": 0.7,
     "stagnation": 0.16,
     "decline": 0.08,
     "collapse": 0.05
    }
   },
   {
    "entity": "NLD",
    "si": {
     "abundance": 0.27999999999999997,
     "better": 0.5549999999999999,
     "stagnation": 0.06499999999999999,
     "decline": 0.04499999999999999,
     "collapse": 0.054999999999999986
    },
    "noSi": {
     "abundance": 0.009,
     "better": 0.69,
     "stagnation": 0.165,
     "decline": 0.08,
     "collapse": 0.056
    }
   },
   {
    "entity": "SWE",
    "si": {
     "abundance": 0.2899999999999999,
     "better": 0.5499999999999999,
     "stagnation": 0.059999999999999984,
     "decline": 0.04499999999999999,
     "collapse": 0.054999999999999986
    },
    "noSi": {
     "abundance": 0.009,
     "better": 0.71,
     "stagnation": 0.15,
     "decline": 0.077,
     "collapse": 0.054
    }
   },
   {
    "entity": "NOR",
    "si": {
     "abundance": 0.32999999999999996,
     "better": 0.5299999999999999,
     "stagnation": 0.059999999999999984,
     "decline": 0.039999999999999994,
     "collapse": 0.039999999999999994
    },
    "noSi": {
     "abundance": 0.015,
     "better": 0.69,
     "stagnation": 0.18,
     "decline": 0.07,
     "collapse": 0.045
    }
   }
  ],
  "curves": []
 },
 {
  "id": "spotlight-2-2026-11-25-2",
  "batch": "spotlight-2",
  "model": "Claude Opus 5.5",
  "date": "2026-11-25",
  "method": "independent agent run, prompt 2026-11-25.1",
  "places": [
   {
    "entity": "GBR",
    "si": {
     "abundance": 0.28,
     "better": 0.48,
     "stagnation": 0.1,
     "decline": 0.07,
     "collapse": 0.07
    },
    "noSi": {
     "abundance": 0.006,
     "better": 0.66,
     "stagnation": 0.17,
     "decline": 0.1,
     "collapse": 0.064
    }
   },
   {
    "entity": "FRA",
    "si": {
     "abundance": 0.27,
     "better": 0.48,
     "stagnation": 0.1,
     "decline": 0.08,
     "collapse": 0.07
    },
    "noSi": {
     "abundance": 0.005,
     "better": 0.64,
     "stagnation": 0.18,
     "decline": 0.11,
     "collapse": 0.065
    }
   },
   {
    "entity": "ZAF",
    "si": {
     "abundance": 0.08000000000000002,
     "better": 0.6000000000000001,
     "stagnation": 0.12000000000000001,
     "decline": 0.09000000000000001,
     "collapse": 0.11000000000000001
    },
    "noSi": {
     "abundance": 0.0020000000000000005,
     "better": 0.5700000000000001,
     "stagnation": 0.18500000000000003,
     "decline": 0.12300000000000001,
     "collapse": 0.12000000000000001
    }
   },
   {
    "entity": "ITA",
    "si": {
     "abundance": 0.23,
     "better": 0.5,
     "stagnation": 0.12,
     "decline": 0.08,
     "collapse": 0.07
    },
    "noSi": {
     "abundance": 0.004,
     "better": 0.56,
     "stagnation": 0.22,
     "decline": 0.14,
     "collapse": 0.076
    }
   },
   {
    "entity": "KEN",
    "si": {
     "abundance": 0.08000000000000002,
     "better": 0.6700000000000002,
     "stagnation": 0.09000000000000001,
     "decline": 0.060000000000000005,
     "collapse": 0.10000000000000002
    },
    "noSi": {
     "abundance": 0.001,
     "better": 0.66,
     "stagnation": 0.125,
     "decline": 0.095,
     "collapse": 0.119
    }
   },
   {
    "entity": "COL",
    "si": {
     "abundance": 0.10000000000000002,
     "better": 0.6400000000000001,
     "stagnation": 0.11000000000000001,
     "decline": 0.07000000000000002,
     "collapse": 0.08000000000000002
    },
    "noSi": {
     "abundance": 0.002,
     "better": 0.645,
     "stagnation": 0.163,
     "decline": 0.104,
     "collapse": 0.086
    }
   },
   {
    "entity": "KOR",
    "si": {
     "abundance": 0.26000000000000006,
     "better": 0.5000000000000001,
     "stagnation": 0.09000000000000001,
     "decline": 0.07000000000000002,
     "collapse": 0.08000000000000002
    },
    "noSi": {
     "abundance": 0.005000000000000001,
     "better": 0.6200000000000001,
     "stagnation": 0.18000000000000002,
     "decline": 0.11000000000000001,
     "collapse": 0.08500000000000002
    }
   },
   {
    "entity": "ESP",
    "si": {
     "abundance": 0.25,
     "better": 0.5,
     "stagnation": 0.11,
     "decline": 0.07,
     "collapse": 0.07
    },
    "noSi": {
     "abundance": 0.004,
     "better": 0.6,
     "stagnation": 0.2,
     "decline": 0.125,
     "collapse": 0.071
    }
   },
   {
    "entity": "ARG",
    "si": {
     "abundance": 0.13,
     "better": 0.58,
     "stagnation": 0.13,
     "decline": 0.09,
     "collapse": 0.07
    },
    "noSi": {
     "abundance": 0.002,
     "better": 0.6,
     "stagnation": 0.21,
     "decline": 0.12,
     "collapse": 0.068
    }
   },
   {
    "entity": "CAN",
    "si": {
     "abundance": 0.31,
     "better": 0.47,
     "stagnation": 0.09,
     "decline": 0.07,
     "collapse": 0.06
    },
    "noSi": {
     "abundance": 0.008,
     "better": 0.68,
     "stagnation": 0.16,
     "decline": 0.1,
     "collapse": 0.052
    }
   },
   {
    "entity": "UKR",
    "si": {
     "abundance": 0.11000000000000001,
     "better": 0.6400000000000001,
     "stagnation": 0.09000000000000001,
     "decline": 0.060000000000000005,
     "collapse": 0.10000000000000002
    },
    "noSi": {
     "abundance": 0.002,
     "better": 0.637,
     "stagnation": 0.126,
     "decline": 0.105,
     "collapse": 0.13
    }
   },
   {
    "entity": "SAU",
    "si": {
     "abundance": 0.15,
     "better": 0.5,
     "stagnation": 0.14,
     "decline": 0.11,
     "collapse": 0.1
    },
    "noSi": {
     "abundance": 0.0020000000000000005,
     "better": 0.44000000000000006,
     "stagnation": 0.24000000000000002,
     "decline": 0.19000000000000003,
     "collapse": 0.12800000000000003
    }
   },
   {
    "entity": "POL",
    "si": {
     "abundance": 0.24000000000000002,
     "better": 0.5200000000000001,
     "stagnation": 0.09000000000000001,
     "decline": 0.07000000000000002,
     "collapse": 0.08000000000000002
    },
    "noSi": {
     "abundance": 0.004,
     "better": 0.67,
     "stagnation": 0.15,
     "decline": 0.1,
     "collapse": 0.076
    }
   },
   {
    "entity": "AUS",
    "si": {
     "abundance": 0.31,
     "better": 0.48,
     "stagnation": 0.09,
     "decline": 0.06,
     "collapse": 0.06
    },
    "noSi": {
     "abundance": 0.008,
     "better": 0.67,
     "stagnation": 0.165,
     "decline": 0.1,
     "collapse": 0.057
    }
   },
   {
    "entity": "NLD",
    "si": {
     "abundance": 0.31,
     "better": 0.48,
     "stagnation": 0.09,
     "decline": 0.06,
     "collapse": 0.06
    },
    "noSi": {
     "abundance": 0.007,
     "better": 0.67,
     "stagnation": 0.17,
     "decline": 0.095,
     "collapse": 0.058
    }
   },
   {
    "entity": "SWE",
    "si": {
     "abundance": 0.3,
     "better": 0.49,
     "stagnation": 0.09,
     "decline": 0.06,
     "collapse": 0.06
    },
    "noSi": {
     "abundance": 0.006,
     "better": 0.7,
     "stagnation": 0.16,
     "decline": 0.085,
     "collapse": 0.049
    }
   },
   {
    "entity": "NOR",
    "si": {
     "abundance": 0.37,
     "better": 0.45,
     "stagnation": 0.08,
     "decline": 0.05,
     "collapse": 0.05
    },
    "noSi": {
     "abundance": 0.012,
     "better": 0.68,
     "stagnation": 0.17,
     "decline": 0.09,
     "collapse": 0.048
    }
   }
  ],
  "curves": []
 },
 {
  "id": "spotlight-2-2026-11-25-3",
  "batch": "spotlight-2",
  "model": "Claude Opus 5.5",
  "date": "2026-11-25",
  "method": "independent agent run, prompt 2026-11-25.1",
  "places": [
   {
    "entity": "GBR",
    "si": {
     "abundance": 0.29999999999999993,
     "better": 0.5199999999999999,
     "stagnation": 0.06999999999999999,
     "decline": 0.04999999999999999,
     "collapse": 0.059999999999999984
    },
    "noSi": {
     "abundance": 0.007,
     "better": 0.67,
     "stagnation": 0.17,
     "decline": 0.09,
     "collapse": 0.063
    }
   },
   {
    "entity": "FRA",
    "si": {
     "abundance": 0.27,
     "better": 0.53,
     "stagnation": 0.08,
     "decline": 0.055,
     "collapse": 0.065
    },
    "noSi": {
     "abundance": 0.006,
     "better": 0.65,
     "stagnation": 0.18,
     "decline": 0.1,
     "collapse": 0.064
    }
   },
   {
    "entity": "ZAF",
    "si": {
     "abundance": 0.060000000000000005,
     "better": 0.6500000000000001,
     "stagnation": 0.11000000000000001,
     "decline": 0.07000000000000002,
     "collapse": 0.11000000000000001
    },
    "noSi": {
     "abundance": 0.001,
     "better": 0.6,
     "stagnation": 0.17,
     "decline": 0.11,
     "collapse": 0.119
    }
   },
   {
    "entity": "ITA",
    "si": {
     "abundance": 0.23,
     "better": 0.53,
     "stagnation": 0.11,
     "decline": 0.065,
     "collapse": 0.065
    },
    "noSi": {
     "abundance": 0.004,
     "better": 0.56,
     "stagnation": 0.23,
     "decline": 0.13,
     "collapse": 0.076
    }
   },
   {
    "entity": "KEN",
    "si": {
     "abundance": 0.08000000000000002,
     "better": 0.6400000000000001,
     "stagnation": 0.10000000000000002,
     "decline": 0.07000000000000002,
     "collapse": 0.11000000000000001
    },
    "noSi": {
     "abundance": 0.001,
     "better": 0.659,
     "stagnation": 0.13,
     "decline": 0.09,
     "collapse": 0.12
    }
   },
   {
    "entity": "COL",
    "si": {
     "abundance": 0.12000000000000001,
     "better": 0.6300000000000001,
     "stagnation": 0.10000000000000002,
     "decline": 0.07000000000000002,
     "collapse": 0.08000000000000002
    },
    "noSi": {
     "abundance": 0.002,
     "better": 0.68,
     "stagnation": 0.14,
     "decline": 0.09,
     "collapse": 0.088
    }
   },
   {
    "entity": "KOR",
    "si": {
     "abundance": 0.26999999999999996,
     "better": 0.5299999999999999,
     "stagnation": 0.06999999999999999,
     "decline": 0.04999999999999999,
     "collapse": 0.07999999999999999
    },
    "noSi": {
     "abundance": 0.004,
     "better": 0.62,
     "stagnation": 0.18,
     "decline": 0.1,
     "collapse": 0.096
    }
   },
   {
    "entity": "ESP",
    "si": {
     "abundance": 0.23,
     "better": 0.54,
     "stagnation": 0.1,
     "decline": 0.065,
     "collapse": 0.065
    },
    "noSi": {
     "abundance": 0.004,
     "better": 0.6,
     "stagnation": 0.2,
     "decline": 0.12,
     "collapse": 0.076
    }
   },
   {
    "entity": "ARG",
    "si": {
     "abundance": 0.13,
     "better": 0.62,
     "stagnation": 0.11,
     "decline": 0.07,
     "collapse": 0.07
    },
    "noSi": {
     "abundance": 0.002,
     "better": 0.64,
     "stagnation": 0.19,
     "decline": 0.1,
     "collapse": 0.068
    }
   },
   {
    "entity": "CAN",
    "si": {
     "abundance": 0.32999999999999996,
     "better": 0.4999999999999999,
     "stagnation": 0.059999999999999984,
     "decline": 0.04999999999999999,
     "collapse": 0.059999999999999984
    },
    "noSi": {
     "abundance": 0.012,
     "better": 0.69,
     "stagnation": 0.15,
     "decline": 0.085,
     "collapse": 0.063
    }
   },
   {
    "entity": "UKR",
    "si": {
     "abundance": 0.11000000000000001,
     "better": 0.6000000000000001,
     "stagnation": 0.10000000000000002,
     "decline": 0.07000000000000002,
     "collapse": 0.12000000000000001
    },
    "noSi": {
     "abundance": 0.002,
     "better": 0.64,
     "stagnation": 0.13,
     "decline": 0.1,
     "collapse": 0.128
    }
   },
   {
    "entity": "SAU",
    "si": {
     "abundance": 0.12,
     "better": 0.56,
     "stagnation": 0.12,
     "decline": 0.09,
     "collapse": 0.11
    },
    "noSi": {
     "abundance": 0.002,
     "better": 0.5,
     "stagnation": 0.22,
     "decline": 0.15,
     "collapse": 0.128
    }
   },
   {
    "entity": "POL",
    "si": {
     "abundance": 0.22,
     "better": 0.57,
     "stagnation": 0.08,
     "decline": 0.06,
     "collapse": 0.07
    },
    "noSi": {
     "abundance": 0.005,
     "better": 0.68,
     "stagnation": 0.15,
     "decline": 0.09,
     "collapse": 0.075
    }
   },
   {
    "entity": "AUS",
    "si": {
     "abundance": 0.30999999999999994,
     "better": 0.5099999999999999,
     "stagnation": 0.06999999999999999,
     "decline": 0.04999999999999999,
     "collapse": 0.059999999999999984
    },
    "noSi": {
     "abundance": 0.01,
     "better": 0.7,
     "stagnation": 0.15,
     "decline": 0.085,
     "collapse": 0.055
    }
   },
   {
    "entity": "NLD",
    "si": {
     "abundance": 0.30999999999999994,
     "better": 0.5099999999999999,
     "stagnation": 0.06999999999999999,
     "decline": 0.04999999999999999,
     "collapse": 0.059999999999999984
    },
    "noSi": {
     "abundance": 0.008,
     "better": 0.68,
     "stagnation": 0.16,
     "decline": 0.09,
     "collapse": 0.062
    }
   },
   {
    "entity": "SWE",
    "si": {
     "abundance": 0.30999999999999994,
     "better": 0.5199999999999999,
     "stagnation": 0.06999999999999999,
     "decline": 0.04999999999999999,
     "collapse": 0.04999999999999999
    },
    "noSi": {
     "abundance": 0.007,
     "better": 0.7,
     "stagnation": 0.16,
     "decline": 0.08,
     "collapse": 0.053
    }
   },
   {
    "entity": "NOR",
    "si": {
     "abundance": 0.35,
     "better": 0.49,
     "stagnation": 0.07,
     "decline": 0.045,
     "collapse": 0.045
    },
    "noSi": {
     "abundance": 0.015,
     "better": 0.68,
     "stagnation": 0.19,
     "decline": 0.07,
     "collapse": 0.045
    }
   }
  ],
  "curves": []
 },
 {
  "id": "rest-1-2026-11-25-1",
  "batch": "rest-1",
  "model": "Claude Opus 5.5",
  "date": "2026-11-25",
  "method": "independent agent run, prompt 2026-11-25.1",
  "places": [
   {
    "entity": "TZA",
    "si": {
     "abundance": 0.05000000000000001,
     "better": 0.7000000000000001,
     "stagnation": 0.08000000000000002,
     "decline": 0.060000000000000005,
     "collapse": 0.11000000000000001
    },
    "noSi": {
     "abundance": 0.0003,
     "better": 0.68,
     "stagnation": 0.12,
     "decline": 0.08,
     "collapse": 0.1197
    }
   },
   {
    "entity": "MMR",
    "si": {
     "abundance": 0.05,
     "better": 0.65,
     "stagnation": 0.11,
     "decline": 0.08,
     "collapse": 0.11
    },
    "noSi": {
     "abundance": 0.0004,
     "better": 0.62,
     "stagnation": 0.15,
     "decline": 0.1,
     "collapse": 0.1296
    }
   },
   {
    "entity": "SDN",
    "si": {
     "abundance": 0.03,
     "better": 0.53,
     "stagnation": 0.15,
     "decline": 0.11,
     "collapse": 0.18
    },
    "noSi": {
     "abundance": 0.00020000000000000004,
     "better": 0.5000000000000001,
     "stagnation": 0.18000000000000002,
     "decline": 0.13000000000000003,
     "collapse": 0.18980000000000002
    }
   },
   {
    "entity": "UGA",
    "si": {
     "abundance": 0.045000000000000005,
     "better": 0.6900000000000001,
     "stagnation": 0.09000000000000001,
     "decline": 0.06500000000000002,
     "collapse": 0.11000000000000001
    },
    "noSi": {
     "abundance": 0.0003,
     "better": 0.66,
     "stagnation": 0.13,
     "decline": 0.08,
     "collapse": 0.1297
    }
   },
   {
    "entity": "DZA",
    "si": {
     "abundance": 0.07000000000000002,
     "better": 0.6000000000000001,
     "stagnation": 0.14000000000000004,
     "decline": 0.09000000000000001,
     "collapse": 0.10000000000000002
    },
    "noSi": {
     "abundance": 0.0008000000000000001,
     "better": 0.5800000000000001,
     "stagnation": 0.19000000000000003,
     "decline": 0.12000000000000001,
     "collapse": 0.10920000000000002
    }
   },
   {
    "entity": "IRQ",
    "si": {
     "abundance": 0.05,
     "better": 0.5,
     "stagnation": 0.17,
     "decline": 0.13,
     "collapse": 0.15
    },
    "noSi": {
     "abundance": 0.0005,
     "better": 0.47,
     "stagnation": 0.2,
     "decline": 0.16,
     "collapse": 0.1695
    }
   },
   {
    "entity": "AFG",
    "si": {
     "abundance": 0.025,
     "better": 0.5,
     "stagnation": 0.18,
     "decline": 0.12,
     "collapse": 0.175
    },
    "noSi": {
     "abundance": 0.00020000000000000004,
     "better": 0.47000000000000003,
     "stagnation": 0.20000000000000004,
     "decline": 0.14000000000000004,
     "collapse": 0.18980000000000002
    }
   },
   {
    "entity": "YEM",
    "si": {
     "abundance": 0.025,
     "better": 0.45,
     "stagnation": 0.18,
     "decline": 0.13,
     "collapse": 0.215
    },
    "noSi": {
     "abundance": 0.0002,
     "better": 0.42,
     "stagnation": 0.2,
     "decline": 0.15,
     "collapse": 0.2298
    }
   },
   {
    "entity": "AGO",
    "si": {
     "abundance": 0.04,
     "better": 0.58,
     "stagnation": 0.16,
     "decline": 0.11,
     "collapse": 0.11
    },
    "noSi": {
     "abundance": 0.0003,
     "better": 0.55,
     "stagnation": 0.2,
     "decline": 0.13,
     "collapse": 0.1197
    }
   },
   {
    "entity": "MAR",
    "si": {
     "abundance": 0.08,
     "better": 0.69,
     "stagnation": 0.1,
     "decline": 0.06,
     "collapse": 0.07
    },
    "noSi": {
     "abundance": 0.0008,
     "better": 0.7,
     "stagnation": 0.13,
     "decline": 0.08,
     "collapse": 0.0892
    }
   },
   {
    "entity": "UZB",
    "si": {
     "abundance": 0.07500000000000001,
     "better": 0.6900000000000001,
     "stagnation": 0.09000000000000001,
     "decline": 0.06500000000000002,
     "collapse": 0.08000000000000002
    },
    "noSi": {
     "abundance": 0.0008000000000000001,
     "better": 0.7000000000000001,
     "stagnation": 0.12000000000000001,
     "decline": 0.08000000000000002,
     "collapse": 0.09920000000000001
    }
   },
   {
    "entity": "MYS",
    "si": {
     "abundance": 0.13,
     "better": 0.72,
     "stagnation": 0.06,
     "decline": 0.04,
     "collapse": 0.05
    },
    "noSi": {
     "abundance": 0.004,
     "better": 0.8,
     "stagnation": 0.09,
     "decline": 0.05,
     "collapse": 0.056
    }
   },
   {
    "entity": "MOZ",
    "si": {
     "abundance": 0.035,
     "better": 0.65,
     "stagnation": 0.11,
     "decline": 0.08,
     "collapse": 0.125
    },
    "noSi": {
     "abundance": 0.0002,
     "better": 0.62,
     "stagnation": 0.14,
     "decline": 0.1,
     "collapse": 0.1398
    }
   },
   {
    "entity": "GHA",
    "si": {
     "abundance": 0.055,
     "better": 0.72,
     "stagnation": 0.09,
     "decline": 0.055,
     "collapse": 0.08
    },
    "noSi": {
     "abundance": 0.0004000000000000001,
     "better": 0.7200000000000001,
     "stagnation": 0.12000000000000001,
     "decline": 0.07000000000000002,
     "collapse": 0.08960000000000001
    }
   },
   {
    "entity": "PER",
    "si": {
     "abundance": 0.075,
     "better": 0.68,
     "stagnation": 0.11,
     "decline": 0.065,
     "collapse": 0.07
    },
    "noSi": {
     "abundance": 0.0008,
     "better": 0.7,
     "stagnation": 0.14,
     "decline": 0.08,
     "collapse": 0.0792
    }
   },
   {
    "entity": "MDG",
    "si": {
     "abundance": 0.03,
     "better": 0.57,
     "stagnation": 0.16,
     "decline": 0.11,
     "collapse": 0.13
    },
    "noSi": {
     "abundance": 0.0002,
     "better": 0.52,
     "stagnation": 0.2,
     "decline": 0.13,
     "collapse": 0.1498
    }
   },
   {
    "entity": "CIV",
    "si": {
     "abundance": 0.05000000000000001,
     "better": 0.7000000000000001,
     "stagnation": 0.09000000000000001,
     "decline": 0.060000000000000005,
     "collapse": 0.10000000000000002
    },
    "noSi": {
     "abundance": 0.0004,
     "better": 0.68,
     "stagnation": 0.12,
     "decline": 0.08,
     "collapse": 0.1196
    }
   },
   {
    "entity": "CMR",
    "si": {
     "abundance": 0.04,
     "better": 0.63,
     "stagnation": 0.12,
     "decline": 0.09,
     "collapse": 0.12
    },
    "noSi": {
     "abundance": 0.0003,
     "better": 0.6,
     "stagnation": 0.15,
     "decline": 0.11,
     "collapse": 0.1397
    }
   },
   {
    "entity": "NPL",
    "si": {
     "abundance": 0.05000000000000001,
     "better": 0.7100000000000001,
     "stagnation": 0.10000000000000002,
     "decline": 0.060000000000000005,
     "collapse": 0.08000000000000002
    },
    "noSi": {
     "abundance": 0.0004000000000000001,
     "better": 0.7000000000000001,
     "stagnation": 0.13000000000000003,
     "decline": 0.08000000000000002,
     "collapse": 0.08960000000000001
    }
   },
   {
    "entity": "VEN",
    "si": {
     "abundance": 0.06,
     "better": 0.67,
     "stagnation": 0.12,
     "decline": 0.08,
     "collapse": 0.07
    },
    "noSi": {
     "abundance": 0.0006,
     "better": 0.68,
     "stagnation": 0.15,
     "decline": 0.09,
     "collapse": 0.0794
    }
   }
  ],
  "curves": []
 },
 {
  "id": "rest-2-2026-11-25-1",
  "batch": "rest-2",
  "model": "Claude Opus 5.5",
  "date": "2026-11-25",
  "method": "independent agent run, prompt 2026-11-25.1",
  "places": [
   {
    "entity": "NER",
    "si": {
     "abundance": 0.05,
     "better": 0.55,
     "stagnation": 0.13,
     "decline": 0.1,
     "collapse": 0.17
    },
    "noSi": {
     "abundance": 0.001,
     "better": 0.5,
     "stagnation": 0.18,
     "decline": 0.13,
     "collapse": 0.189
    }
   },
   {
    "entity": "PRK",
    "si": {
     "abundance": 0.08000000000000002,
     "better": 0.6000000000000001,
     "stagnation": 0.13000000000000003,
     "decline": 0.07000000000000002,
     "collapse": 0.12000000000000001
    },
    "noSi": {
     "abundance": 0.001,
     "better": 0.62,
     "stagnation": 0.17,
     "decline": 0.08,
     "collapse": 0.129
    }
   },
   {
    "entity": "SYR",
    "si": {
     "abundance": 0.07000000000000002,
     "better": 0.6200000000000001,
     "stagnation": 0.11000000000000001,
     "decline": 0.08000000000000002,
     "collapse": 0.12000000000000001
    },
    "noSi": {
     "abundance": 0.002,
     "better": 0.6,
     "stagnation": 0.15,
     "decline": 0.11,
     "collapse": 0.138
    }
   },
   {
    "entity": "MLI",
    "si": {
     "abundance": 0.04,
     "better": 0.55,
     "stagnation": 0.14,
     "decline": 0.1,
     "collapse": 0.17
    },
    "noSi": {
     "abundance": 0.001,
     "better": 0.51,
     "stagnation": 0.18,
     "decline": 0.12,
     "collapse": 0.189
    }
   },
   {
    "entity": "BFA",
    "si": {
     "abundance": 0.045,
     "better": 0.565,
     "stagnation": 0.135,
     "decline": 0.095,
     "collapse": 0.16
    },
    "noSi": {
     "abundance": 0.001,
     "better": 0.53,
     "stagnation": 0.17,
     "decline": 0.12,
     "collapse": 0.179
    }
   },
   {
    "entity": "MWI",
    "si": {
     "abundance": 0.05,
     "better": 0.63,
     "stagnation": 0.13,
     "decline": 0.08,
     "collapse": 0.11
    },
    "noSi": {
     "abundance": 0.001,
     "better": 0.6,
     "stagnation": 0.17,
     "decline": 0.1,
     "collapse": 0.129
    }
   },
   {
    "entity": "ZMB",
    "si": {
     "abundance": 0.060000000000000005,
     "better": 0.6500000000000001,
     "stagnation": 0.12000000000000001,
     "decline": 0.07000000000000002,
     "collapse": 0.10000000000000002
    },
    "noSi": {
     "abundance": 0.001,
     "better": 0.63,
     "stagnation": 0.15,
     "decline": 0.1,
     "collapse": 0.119
    }
   },
   {
    "entity": "LKA",
    "si": {
     "abundance": 0.10000000000000002,
     "better": 0.6600000000000001,
     "stagnation": 0.10000000000000002,
     "decline": 0.060000000000000005,
     "collapse": 0.08000000000000002
    },
    "noSi": {
     "abundance": 0.0020000000000000005,
     "better": 0.7000000000000001,
     "stagnation": 0.14000000000000004,
     "decline": 0.08000000000000002,
     "collapse": 0.07800000000000001
    }
   },
   {
    "entity": "TCD",
    "si": {
     "abundance": 0.035,
     "better": 0.52,
     "stagnation": 0.15,
     "decline": 0.11,
     "collapse": 0.185
    },
    "noSi": {
     "abundance": 0.001,
     "better": 0.48,
     "stagnation": 0.19,
     "decline": 0.13,
     "collapse": 0.199
    }
   },
   {
    "entity": "KAZ",
    "si": {
     "abundance": 0.14,
     "better": 0.62,
     "stagnation": 0.11,
     "decline": 0.06,
     "collapse": 0.07
    },
    "noSi": {
     "abundance": 0.002,
     "better": 0.65,
     "stagnation": 0.18,
     "decline": 0.09,
     "collapse": 0.078
    }
   },
   {
    "entity": "CHL",
    "si": {
     "abundance": 0.18,
     "better": 0.61,
     "stagnation": 0.09,
     "decline": 0.065,
     "collapse": 0.055
    },
    "noSi": {
     "abundance": 0.003,
     "better": 0.69,
     "stagnation": 0.16,
     "decline": 0.087,
     "collapse": 0.06
    }
   },
   {
    "entity": "SOM",
    "si": {
     "abundance": 0.03,
     "better": 0.5,
     "stagnation": 0.16,
     "decline": 0.11,
     "collapse": 0.2
    },
    "noSi": {
     "abundance": 0.001,
     "better": 0.46,
     "stagnation": 0.19,
     "decline": 0.13,
     "collapse": 0.219
    }
   },
   {
    "entity": "ROU",
    "si": {
     "abundance": 0.24,
     "better": 0.56,
     "stagnation": 0.09,
     "decline": 0.05,
     "collapse": 0.06
    },
    "noSi": {
     "abundance": 0.005,
     "better": 0.7,
     "stagnation": 0.15,
     "decline": 0.085,
     "collapse": 0.06
    }
   },
   {
    "entity": "SEN",
    "si": {
     "abundance": 0.07000000000000002,
     "better": 0.6600000000000001,
     "stagnation": 0.11000000000000001,
     "decline": 0.07000000000000002,
     "collapse": 0.09000000000000001
    },
    "noSi": {
     "abundance": 0.001,
     "better": 0.64,
     "stagnation": 0.15,
     "decline": 0.1,
     "collapse": 0.109
    }
   },
   {
    "entity": "GTM",
    "si": {
     "abundance": 0.09,
     "better": 0.67,
     "stagnation": 0.11,
     "decline": 0.07,
     "collapse": 0.06
    },
    "noSi": {
     "abundance": 0.002,
     "better": 0.68,
     "stagnation": 0.16,
     "decline": 0.09,
     "collapse": 0.068
    }
   },
   {
    "entity": "ECU",
    "si": {
     "abundance": 0.08,
     "better": 0.64,
     "stagnation": 0.13,
     "decline": 0.08,
     "collapse": 0.07
    },
    "noSi": {
     "abundance": 0.002,
     "better": 0.64,
     "stagnation": 0.18,
     "decline": 0.1,
     "collapse": 0.078
    }
   },
   {
    "entity": "KHM",
    "si": {
     "abundance": 0.09,
     "better": 0.7,
     "stagnation": 0.09,
     "decline": 0.06,
     "collapse": 0.06
    },
    "noSi": {
     "abundance": 0.002,
     "better": 0.74,
     "stagnation": 0.12,
     "decline": 0.07,
     "collapse": 0.068
    }
   },
   {
    "entity": "ZWE",
    "si": {
     "abundance": 0.05,
     "better": 0.58,
     "stagnation": 0.15,
     "decline": 0.1,
     "collapse": 0.12
    },
    "noSi": {
     "abundance": 0.001,
     "better": 0.54,
     "stagnation": 0.19,
     "decline": 0.12,
     "collapse": 0.149
    }
   },
   {
    "entity": "GIN",
    "si": {
     "abundance": 0.05,
     "better": 0.64,
     "stagnation": 0.12,
     "decline": 0.08,
     "collapse": 0.11
    },
    "noSi": {
     "abundance": 0.001,
     "better": 0.61,
     "stagnation": 0.16,
     "decline": 0.1,
     "collapse": 0.129
    }
   },
   {
    "entity": "BEN",
    "si": {
     "abundance": 0.060000000000000005,
     "better": 0.6600000000000001,
     "stagnation": 0.11000000000000001,
     "decline": 0.07000000000000002,
     "collapse": 0.10000000000000002
    },
    "noSi": {
     "abundance": 0.001,
     "better": 0.64,
     "stagnation": 0.15,
     "decline": 0.09,
     "collapse": 0.119
    }
   }
  ],
  "curves": []
 },
 {
  "id": "rest-3-2026-11-25-1",
  "batch": "rest-3",
  "model": "Claude Opus 5.5",
  "date": "2026-11-25",
  "method": "independent agent run, prompt 2026-11-25.1",
  "places": [
   {
    "entity": "RWA",
    "si": {
     "abundance": 0.08000000000000002,
     "better": 0.7000000000000001,
     "stagnation": 0.07000000000000002,
     "decline": 0.05500000000000001,
     "collapse": 0.09500000000000001
    },
    "noSi": {
     "abundance": 0.0010000000000000002,
     "better": 0.7490000000000001,
     "stagnation": 0.09000000000000001,
     "decline": 0.060000000000000005,
     "collapse": 0.10000000000000002
    }
   },
   {
    "entity": "BDI",
    "si": {
     "abundance": 0.05,
     "better": 0.62,
     "stagnation": 0.13,
     "decline": 0.065,
     "collapse": 0.135
    },
    "noSi": {
     "abundance": 0.0005000000000000001,
     "better": 0.5900000000000001,
     "stagnation": 0.17000000000000004,
     "decline": 0.08500000000000002,
     "collapse": 0.15450000000000003
    }
   },
   {
    "entity": "BOL",
    "si": {
     "abundance": 0.1,
     "better": 0.67,
     "stagnation": 0.095,
     "decline": 0.065,
     "collapse": 0.07
    },
    "noSi": {
     "abundance": 0.0010000000000000002,
     "better": 0.7000000000000001,
     "stagnation": 0.14000000000000004,
     "decline": 0.08400000000000002,
     "collapse": 0.07500000000000001
    }
   },
   {
    "entity": "TUN",
    "si": {
     "abundance": 0.09000000000000001,
     "better": 0.6200000000000001,
     "stagnation": 0.13000000000000003,
     "decline": 0.08000000000000002,
     "collapse": 0.08000000000000002
    },
    "noSi": {
     "abundance": 0.0010000000000000002,
     "better": 0.6300000000000001,
     "stagnation": 0.18000000000000002,
     "decline": 0.10000000000000002,
     "collapse": 0.08900000000000001
    }
   },
   {
    "entity": "SSD",
    "si": {
     "abundance": 0.03,
     "better": 0.54,
     "stagnation": 0.15,
     "decline": 0.08,
     "collapse": 0.2
    },
    "noSi": {
     "abundance": 0.00030000000000000003,
     "better": 0.5000000000000001,
     "stagnation": 0.18000000000000002,
     "decline": 0.10000000000000002,
     "collapse": 0.21970000000000003
    }
   },
   {
    "entity": "BEL",
    "si": {
     "abundance": 0.28,
     "better": 0.515,
     "stagnation": 0.09,
     "decline": 0.05,
     "collapse": 0.065
    },
    "noSi": {
     "abundance": 0.005,
     "better": 0.66,
     "stagnation": 0.18,
     "decline": 0.09,
     "collapse": 0.065
    }
   },
   {
    "entity": "HTI",
    "si": {
     "abundance": 0.04,
     "better": 0.52,
     "stagnation": 0.19,
     "decline": 0.1,
     "collapse": 0.15
    },
    "noSi": {
     "abundance": 0.0005,
     "better": 0.48,
     "stagnation": 0.23,
     "decline": 0.12,
     "collapse": 0.1695
    }
   },
   {
    "entity": "JOR",
    "si": {
     "abundance": 0.08000000000000002,
     "better": 0.6200000000000001,
     "stagnation": 0.13000000000000003,
     "decline": 0.08000000000000002,
     "collapse": 0.09000000000000001
    },
    "noSi": {
     "abundance": 0.0010000000000000002,
     "better": 0.6000000000000001,
     "stagnation": 0.19000000000000003,
     "decline": 0.11000000000000001,
     "collapse": 0.09900000000000002
    }
   },
   {
    "entity": "DOM",
    "si": {
     "abundance": 0.14,
     "better": 0.65,
     "stagnation": 0.09,
     "decline": 0.06,
     "collapse": 0.06
    },
    "noSi": {
     "abundance": 0.002,
     "better": 0.76,
     "stagnation": 0.108,
     "decline": 0.07,
     "collapse": 0.06
    }
   },
   {
    "entity": "ARE",
    "si": {
     "abundance": 0.18,
     "better": 0.52,
     "stagnation": 0.15,
     "decline": 0.08,
     "collapse": 0.07
    },
    "noSi": {
     "abundance": 0.002,
     "better": 0.55,
     "stagnation": 0.24,
     "decline": 0.128,
     "collapse": 0.08
    }
   },
   {
    "entity": "HND",
    "si": {
     "abundance": 0.09,
     "better": 0.66,
     "stagnation": 0.11,
     "decline": 0.07,
     "collapse": 0.07
    },
    "noSi": {
     "abundance": 0.0010000000000000002,
     "better": 0.6900000000000001,
     "stagnation": 0.13500000000000004,
     "decline": 0.09000000000000001,
     "collapse": 0.08400000000000002
    }
   },
   {
    "entity": "CUB",
    "si": {
     "abundance": 0.10000000000000002,
     "better": 0.6300000000000001,
     "stagnation": 0.12000000000000001,
     "decline": 0.07500000000000001,
     "collapse": 0.07500000000000001
    },
    "noSi": {
     "abundance": 0.001,
     "better": 0.64,
     "stagnation": 0.16,
     "decline": 0.1,
     "collapse": 0.099
    }
   },
   {
    "entity": "CZE",
    "si": {
     "abundance": 0.24,
     "better": 0.565,
     "stagnation": 0.09,
     "decline": 0.05,
     "collapse": 0.055
    },
    "noSi": {
     "abundance": 0.004,
     "better": 0.75,
     "stagnation": 0.12,
     "decline": 0.07,
     "collapse": 0.056
    }
   },
   {
    "entity": "PRT",
    "si": {
     "abundance": 0.25,
     "better": 0.54,
     "stagnation": 0.1,
     "decline": 0.05,
     "collapse": 0.06
    },
    "noSi": {
     "abundance": 0.004,
     "better": 0.67,
     "stagnation": 0.18,
     "decline": 0.083,
     "collapse": 0.063
    }
   },
   {
    "entity": "TJK",
    "si": {
     "abundance": 0.08,
     "better": 0.68,
     "stagnation": 0.1,
     "decline": 0.065,
     "collapse": 0.075
    },
    "noSi": {
     "abundance": 0.0010000000000000002,
     "better": 0.7200000000000001,
     "stagnation": 0.12000000000000001,
     "decline": 0.07500000000000001,
     "collapse": 0.08400000000000002
    }
   },
   {
    "entity": "PNG",
    "si": {
     "abundance": 0.05,
     "better": 0.645,
     "stagnation": 0.14,
     "decline": 0.075,
     "collapse": 0.09
    },
    "noSi": {
     "abundance": 0.0005,
     "better": 0.63,
     "stagnation": 0.18,
     "decline": 0.09,
     "collapse": 0.0995
    }
   },
   {
    "entity": "GRC",
    "si": {
     "abundance": 0.22,
     "better": 0.535,
     "stagnation": 0.12,
     "decline": 0.06,
     "collapse": 0.065
    },
    "noSi": {
     "abundance": 0.0030000000000000005,
     "better": 0.6000000000000001,
     "stagnation": 0.22000000000000003,
     "decline": 0.10500000000000001,
     "collapse": 0.07200000000000001
    }
   },
   {
    "entity": "AZE",
    "si": {
     "abundance": 0.09000000000000001,
     "better": 0.5900000000000001,
     "stagnation": 0.15000000000000002,
     "decline": 0.09000000000000001,
     "collapse": 0.08000000000000002
    },
    "noSi": {
     "abundance": 0.0010000000000000002,
     "better": 0.5800000000000001,
     "stagnation": 0.20000000000000004,
     "decline": 0.12000000000000001,
     "collapse": 0.09900000000000002
    }
   },
   {
    "entity": "ISR",
    "si": {
     "abundance": 0.22,
     "better": 0.545,
     "stagnation": 0.09,
     "decline": 0.055,
     "collapse": 0.09
    },
    "noSi": {
     "abundance": 0.004,
     "better": 0.68,
     "stagnation": 0.15,
     "decline": 0.08,
     "collapse": 0.086
    }
   },
   {
    "entity": "HUN",
    "si": {
     "abundance": 0.2,
     "better": 0.585,
     "stagnation": 0.095,
     "decline": 0.055,
     "collapse": 0.065
    },
    "noSi": {
     "abundance": 0.003,
     "better": 0.71,
     "stagnation": 0.14,
     "decline": 0.085,
     "collapse": 0.062
    }
   }
  ],
  "curves": []
 },
 {
  "id": "rest-4-2026-11-25-1",
  "batch": "rest-4",
  "model": "Claude Opus 5.5",
  "date": "2026-11-25",
  "method": "independent agent run, prompt 2026-11-25.1",
  "places": [
   {
    "entity": "AUT",
    "si": {
     "abundance": 0.25,
     "better": 0.54,
     "stagnation": 0.09,
     "decline": 0.055,
     "collapse": 0.065
    },
    "noSi": {
     "abundance": 0.006,
     "better": 0.66,
     "stagnation": 0.18,
     "decline": 0.09,
     "collapse": 0.064
    }
   },
   {
    "entity": "CHE",
    "si": {
     "abundance": 0.29,
     "better": 0.52,
     "stagnation": 0.08,
     "decline": 0.05,
     "collapse": 0.06
    },
    "noSi": {
     "abundance": 0.008,
     "better": 0.702,
     "stagnation": 0.16,
     "decline": 0.075,
     "collapse": 0.055
    }
   },
   {
    "entity": "BLR",
    "si": {
     "abundance": 0.14000000000000004,
     "better": 0.5700000000000001,
     "stagnation": 0.11000000000000001,
     "decline": 0.08000000000000002,
     "collapse": 0.10000000000000002
    },
    "noSi": {
     "abundance": 0.002,
     "better": 0.62,
     "stagnation": 0.16,
     "decline": 0.11,
     "collapse": 0.108
    }
   },
   {
    "entity": "SLE",
    "si": {
     "abundance": 0.07000000000000002,
     "better": 0.6600000000000001,
     "stagnation": 0.11000000000000001,
     "decline": 0.060000000000000005,
     "collapse": 0.10000000000000002
    },
    "noSi": {
     "abundance": 0.001,
     "better": 0.64,
     "stagnation": 0.15,
     "decline": 0.09,
     "collapse": 0.119
    }
   },
   {
    "entity": "TGO",
    "si": {
     "abundance": 0.075,
     "better": 0.665,
     "stagnation": 0.105,
     "decline": 0.06,
     "collapse": 0.095
    },
    "noSi": {
     "abundance": 0.001,
     "better": 0.65,
     "stagnation": 0.15,
     "decline": 0.085,
     "collapse": 0.114
    }
   },
   {
    "entity": "LAO",
    "si": {
     "abundance": 0.11000000000000001,
     "better": 0.6700000000000002,
     "stagnation": 0.08000000000000002,
     "decline": 0.060000000000000005,
     "collapse": 0.08000000000000002
    },
    "noSi": {
     "abundance": 0.0020000000000000005,
     "better": 0.7200000000000001,
     "stagnation": 0.12000000000000001,
     "decline": 0.08000000000000002,
     "collapse": 0.07800000000000001
    }
   },
   {
    "entity": "TKM",
    "si": {
     "abundance": 0.07000000000000002,
     "better": 0.6300000000000001,
     "stagnation": 0.11000000000000001,
     "decline": 0.08000000000000002,
     "collapse": 0.11000000000000001
    },
    "noSi": {
     "abundance": 0.001,
     "better": 0.62,
     "stagnation": 0.15,
     "decline": 0.11,
     "collapse": 0.119
    }
   },
   {
    "entity": "HKG",
    "si": {
     "abundance": 0.20000000000000004,
     "better": 0.5300000000000001,
     "stagnation": 0.11000000000000001,
     "decline": 0.07000000000000002,
     "collapse": 0.09000000000000001
    },
    "noSi": {
     "abundance": 0.004000000000000001,
     "better": 0.5800000000000001,
     "stagnation": 0.22000000000000003,
     "decline": 0.11000000000000001,
     "collapse": 0.08600000000000001
    }
   },
   {
    "entity": "LBY",
    "si": {
     "abundance": 0.06,
     "better": 0.53,
     "stagnation": 0.15,
     "decline": 0.11,
     "collapse": 0.15
    },
    "noSi": {
     "abundance": 0.001,
     "better": 0.48,
     "stagnation": 0.18,
     "decline": 0.15,
     "collapse": 0.189
    }
   },
   {
    "entity": "KGZ",
    "si": {
     "abundance": 0.09000000000000001,
     "better": 0.6700000000000002,
     "stagnation": 0.09000000000000001,
     "decline": 0.060000000000000005,
     "collapse": 0.09000000000000001
    },
    "noSi": {
     "abundance": 0.001,
     "better": 0.68,
     "stagnation": 0.13,
     "decline": 0.09,
     "collapse": 0.099
    }
   },
   {
    "entity": "PRY",
    "si": {
     "abundance": 0.13,
     "better": 0.67,
     "stagnation": 0.09,
     "decline": 0.05,
     "collapse": 0.06
    },
    "noSi": {
     "abundance": 0.002,
     "better": 0.72,
     "stagnation": 0.14,
     "decline": 0.08,
     "collapse": 0.058
    }
   },
   {
    "entity": "NIC",
    "si": {
     "abundance": 0.08000000000000002,
     "better": 0.6400000000000001,
     "stagnation": 0.12000000000000001,
     "decline": 0.07000000000000002,
     "collapse": 0.09000000000000001
    },
    "noSi": {
     "abundance": 0.001,
     "better": 0.63,
     "stagnation": 0.17,
     "decline": 0.1,
     "collapse": 0.099
    }
   },
   {
    "entity": "SRB",
    "si": {
     "abundance": 0.19,
     "better": 0.58,
     "stagnation": 0.1,
     "decline": 0.06,
     "collapse": 0.07
    },
    "noSi": {
     "abundance": 0.003,
     "better": 0.64,
     "stagnation": 0.19,
     "decline": 0.1,
     "collapse": 0.067
    }
   },
   {
    "entity": "COG",
    "si": {
     "abundance": 0.07000000000000002,
     "better": 0.6300000000000001,
     "stagnation": 0.12000000000000001,
     "decline": 0.07000000000000002,
     "collapse": 0.11000000000000001
    },
    "noSi": {
     "abundance": 0.001,
     "better": 0.61,
     "stagnation": 0.16,
     "decline": 0.1,
     "collapse": 0.129
    }
   },
   {
    "entity": "BGR",
    "si": {
     "abundance": 0.2,
     "better": 0.56,
     "stagnation": 0.11,
     "decline": 0.06,
     "collapse": 0.07
    },
    "noSi": {
     "abundance": 0.004,
     "better": 0.64,
     "stagnation": 0.18,
     "decline": 0.1,
     "collapse": 0.076
    }
   },
   {
    "entity": "SLV",
    "si": {
     "abundance": 0.10000000000000002,
     "better": 0.6500000000000001,
     "stagnation": 0.11000000000000001,
     "decline": 0.060000000000000005,
     "collapse": 0.08000000000000002
    },
    "noSi": {
     "abundance": 0.001,
     "better": 0.66,
     "stagnation": 0.16,
     "decline": 0.09,
     "collapse": 0.089
    }
   },
   {
    "entity": "SGP",
    "si": {
     "abundance": 0.29999999999999993,
     "better": 0.5199999999999999,
     "stagnation": 0.06999999999999999,
     "decline": 0.04999999999999999,
     "collapse": 0.059999999999999984
    },
    "noSi": {
     "abundance": 0.008,
     "better": 0.71,
     "stagnation": 0.14,
     "decline": 0.077,
     "collapse": 0.065
    }
   },
   {
    "entity": "DNK",
    "si": {
     "abundance": 0.27,
     "better": 0.54,
     "stagnation": 0.08,
     "decline": 0.05,
     "collapse": 0.06
    },
    "noSi": {
     "abundance": 0.006,
     "better": 0.71,
     "stagnation": 0.16,
     "decline": 0.074,
     "collapse": 0.05
    }
   },
   {
    "entity": "LBN",
    "si": {
     "abundance": 0.07000000000000002,
     "better": 0.5800000000000001,
     "stagnation": 0.13000000000000003,
     "decline": 0.09000000000000001,
     "collapse": 0.13000000000000003
    },
    "noSi": {
     "abundance": 0.001,
     "better": 0.56,
     "stagnation": 0.18,
     "decline": 0.12,
     "collapse": 0.139
    }
   },
   {
    "entity": "LBR",
    "si": {
     "abundance": 0.060000000000000005,
     "better": 0.6600000000000001,
     "stagnation": 0.11000000000000001,
     "decline": 0.060000000000000005,
     "collapse": 0.11000000000000001
    },
    "noSi": {
     "abundance": 0.001,
     "better": 0.63,
     "stagnation": 0.155,
     "decline": 0.09,
     "collapse": 0.124
    }
   }
  ],
  "curves": []
 },
 {
  "id": "rest-5-2026-11-25-1",
  "batch": "rest-5",
  "model": "Claude Opus 5.5",
  "date": "2026-11-25",
  "method": "independent agent run, prompt 2026-11-25.1",
  "places": [
   {
    "entity": "FIN",
    "si": {
     "abundance": 0.24,
     "better": 0.55,
     "stagnation": 0.08,
     "decline": 0.06,
     "collapse": 0.07
    },
    "noSi": {
     "abundance": 0.006,
     "better": 0.66,
     "stagnation": 0.17,
     "decline": 0.09,
     "collapse": 0.074
    }
   },
   {
    "entity": "CAF",
    "si": {
     "abundance": 0.04,
     "better": 0.58,
     "stagnation": 0.14,
     "decline": 0.11,
     "collapse": 0.13
    },
    "noSi": {
     "abundance": 0.0005,
     "better": 0.49,
     "stagnation": 0.21,
     "decline": 0.14,
     "collapse": 0.1595
    }
   },
   {
    "entity": "OMN",
    "si": {
     "abundance": 0.08,
     "better": 0.52,
     "stagnation": 0.17,
     "decline": 0.12,
     "collapse": 0.11
    },
    "noSi": {
     "abundance": 0.002,
     "better": 0.44,
     "stagnation": 0.25,
     "decline": 0.17,
     "collapse": 0.138
    }
   },
   {
    "entity": "IRL",
    "si": {
     "abundance": 0.25,
     "better": 0.55,
     "stagnation": 0.08,
     "decline": 0.06,
     "collapse": 0.06
    },
    "noSi": {
     "abundance": 0.006,
     "better": 0.67,
     "stagnation": 0.16,
     "decline": 0.095,
     "collapse": 0.069
    }
   },
   {
    "entity": "SVK",
    "si": {
     "abundance": 0.16000000000000003,
     "better": 0.5800000000000001,
     "stagnation": 0.10000000000000002,
     "decline": 0.08000000000000002,
     "collapse": 0.08000000000000002
    },
    "noSi": {
     "abundance": 0.003,
     "better": 0.62,
     "stagnation": 0.17,
     "decline": 0.11,
     "collapse": 0.097
    }
   },
   {
    "entity": "PSE",
    "si": {
     "abundance": 0.04,
     "better": 0.53,
     "stagnation": 0.17,
     "decline": 0.12,
     "collapse": 0.14
    },
    "noSi": {
     "abundance": 0.001,
     "better": 0.48,
     "stagnation": 0.2,
     "decline": 0.14,
     "collapse": 0.179
    }
   },
   {
    "entity": "NZL",
    "si": {
     "abundance": 0.23,
     "better": 0.57,
     "stagnation": 0.09,
     "decline": 0.06,
     "collapse": 0.05
    },
    "noSi": {
     "abundance": 0.006,
     "better": 0.67,
     "stagnation": 0.18,
     "decline": 0.09,
     "collapse": 0.054
    }
   },
   {
    "entity": "MRT",
    "si": {
     "abundance": 0.04,
     "better": 0.58,
     "stagnation": 0.15,
     "decline": 0.11,
     "collapse": 0.12
    },
    "noSi": {
     "abundance": 0.0005,
     "better": 0.53,
     "stagnation": 0.2,
     "decline": 0.13,
     "collapse": 0.1395
    }
   },
   {
    "entity": "CRI",
    "si": {
     "abundance": 0.12000000000000001,
     "better": 0.6000000000000001,
     "stagnation": 0.12000000000000001,
     "decline": 0.08000000000000002,
     "collapse": 0.08000000000000002
    },
    "noSi": {
     "abundance": 0.002,
     "better": 0.62,
     "stagnation": 0.19,
     "decline": 0.1,
     "collapse": 0.088
    }
   },
   {
    "entity": "KWT",
    "si": {
     "abundance": 0.08,
     "better": 0.5,
     "stagnation": 0.18,
     "decline": 0.13,
     "collapse": 0.11
    },
    "noSi": {
     "abundance": 0.002,
     "better": 0.4,
     "stagnation": 0.27,
     "decline": 0.18,
     "collapse": 0.148
    }
   },
   {
    "entity": "PAN",
    "si": {
     "abundance": 0.10000000000000002,
     "better": 0.6000000000000001,
     "stagnation": 0.13000000000000003,
     "decline": 0.09000000000000001,
     "collapse": 0.08000000000000002
    },
    "noSi": {
     "abundance": 0.002,
     "better": 0.62,
     "stagnation": 0.18,
     "decline": 0.11,
     "collapse": 0.088
    }
   },
   {
    "entity": "GEO",
    "si": {
     "abundance": 0.10000000000000002,
     "better": 0.6000000000000001,
     "stagnation": 0.12000000000000001,
     "decline": 0.09000000000000001,
     "collapse": 0.09000000000000001
    },
    "noSi": {
     "abundance": 0.002,
     "better": 0.6,
     "stagnation": 0.18,
     "decline": 0.11,
     "collapse": 0.108
    }
   },
   {
    "entity": "HRV",
    "si": {
     "abundance": 0.18,
     "better": 0.58,
     "stagnation": 0.1,
     "decline": 0.07,
     "collapse": 0.07
    },
    "noSi": {
     "abundance": 0.004,
     "better": 0.6,
     "stagnation": 0.2,
     "decline": 0.11,
     "collapse": 0.086
    }
   },
   {
    "entity": "ERI",
    "si": {
     "abundance": 0.03,
     "better": 0.53,
     "stagnation": 0.17,
     "decline": 0.12,
     "collapse": 0.15
    },
    "noSi": {
     "abundance": 0.0005,
     "better": 0.46,
     "stagnation": 0.22,
     "decline": 0.15,
     "collapse": 0.1695
    }
   },
   {
    "entity": "MNG",
    "si": {
     "abundance": 0.07000000000000002,
     "better": 0.6200000000000001,
     "stagnation": 0.13000000000000003,
     "decline": 0.09000000000000001,
     "collapse": 0.09000000000000001
    },
    "noSi": {
     "abundance": 0.0010000000000000002,
     "better": 0.6000000000000001,
     "stagnation": 0.18000000000000002,
     "decline": 0.11000000000000001,
     "collapse": 0.10900000000000001
    }
   },
   {
    "entity": "URY",
    "si": {
     "abundance": 0.13,
     "better": 0.61,
     "stagnation": 0.11,
     "decline": 0.08,
     "collapse": 0.07
    },
    "noSi": {
     "abundance": 0.002,
     "better": 0.63,
     "stagnation": 0.19,
     "decline": 0.1,
     "collapse": 0.078
    }
   },
   {
    "entity": "PRI",
    "si": {
     "abundance": 0.17,
     "better": 0.55,
     "stagnation": 0.13,
     "decline": 0.08,
     "collapse": 0.07
    },
    "noSi": {
     "abundance": 0.003,
     "better": 0.52,
     "stagnation": 0.25,
     "decline": 0.142,
     "collapse": 0.085
    }
   },
   {
    "entity": "BIH",
    "si": {
     "abundance": 0.10000000000000002,
     "better": 0.6000000000000001,
     "stagnation": 0.12000000000000001,
     "decline": 0.09000000000000001,
     "collapse": 0.09000000000000001
    },
    "noSi": {
     "abundance": 0.002,
     "better": 0.57,
     "stagnation": 0.2,
     "decline": 0.12,
     "collapse": 0.108
    }
   },
   {
    "entity": "NAM",
    "si": {
     "abundance": 0.05,
     "better": 0.62,
     "stagnation": 0.13,
     "decline": 0.1,
     "collapse": 0.1
    },
    "noSi": {
     "abundance": 0.0010000000000000002,
     "better": 0.5800000000000001,
     "stagnation": 0.19000000000000003,
     "decline": 0.12000000000000001,
     "collapse": 0.10900000000000001
    }
   },
   {
    "entity": "ARM",
    "si": {
     "abundance": 0.10000000000000002,
     "better": 0.6000000000000001,
     "stagnation": 0.12000000000000001,
     "decline": 0.09000000000000001,
     "collapse": 0.09000000000000001
    },
    "noSi": {
     "abundance": 0.002,
     "better": 0.58,
     "stagnation": 0.19,
     "decline": 0.12,
     "collapse": 0.108
    }
   }
  ],
  "curves": []
 },
 {
  "id": "rest-6-2026-11-25-1",
  "batch": "rest-6",
  "model": "Claude Opus 5.5",
  "date": "2026-11-25",
  "method": "independent agent run, prompt 2026-11-25.1",
  "places": [
   {
    "entity": "QAT",
    "si": {
     "abundance": 0.15,
     "better": 0.52,
     "stagnation": 0.13,
     "decline": 0.1,
     "collapse": 0.1
    },
    "noSi": {
     "abundance": 0.002,
     "better": 0.5,
     "stagnation": 0.23,
     "decline": 0.14,
     "collapse": 0.128
    }
   },
   {
    "entity": "LTU",
    "si": {
     "abundance": 0.25999999999999995,
     "better": 0.5399999999999999,
     "stagnation": 0.06999999999999999,
     "decline": 0.059999999999999984,
     "collapse": 0.06999999999999999
    },
    "noSi": {
     "abundance": 0.006000000000000001,
     "better": 0.7300000000000001,
     "stagnation": 0.11000000000000001,
     "decline": 0.08000000000000002,
     "collapse": 0.07400000000000001
    }
   },
   {
    "entity": "JAM",
    "si": {
     "abundance": 0.11000000000000001,
     "better": 0.6200000000000001,
     "stagnation": 0.12000000000000001,
     "decline": 0.07000000000000002,
     "collapse": 0.08000000000000002
    },
    "noSi": {
     "abundance": 0.002,
     "better": 0.588,
     "stagnation": 0.2,
     "decline": 0.12,
     "collapse": 0.09
    }
   },
   {
    "entity": "GMB",
    "si": {
     "abundance": 0.060000000000000005,
     "better": 0.6600000000000001,
     "stagnation": 0.10000000000000002,
     "decline": 0.060000000000000005,
     "collapse": 0.12000000000000001
    },
    "noSi": {
     "abundance": 0.001,
     "better": 0.62,
     "stagnation": 0.15,
     "decline": 0.1,
     "collapse": 0.129
    }
   },
   {
    "entity": "GAB",
    "si": {
     "abundance": 0.07000000000000002,
     "better": 0.6000000000000001,
     "stagnation": 0.13000000000000003,
     "decline": 0.08000000000000002,
     "collapse": 0.12000000000000001
    },
    "noSi": {
     "abundance": 0.001,
     "better": 0.54,
     "stagnation": 0.21,
     "decline": 0.13,
     "collapse": 0.119
    }
   },
   {
    "entity": "BWA",
    "si": {
     "abundance": 0.08000000000000002,
     "better": 0.6500000000000001,
     "stagnation": 0.11000000000000001,
     "decline": 0.07000000000000002,
     "collapse": 0.09000000000000001
    },
    "noSi": {
     "abundance": 0.002,
     "better": 0.628,
     "stagnation": 0.17,
     "decline": 0.11,
     "collapse": 0.09
    }
   },
   {
    "entity": "LSO",
    "si": {
     "abundance": 0.05,
     "better": 0.63,
     "stagnation": 0.12,
     "decline": 0.07,
     "collapse": 0.13
    },
    "noSi": {
     "abundance": 0.001,
     "better": 0.569,
     "stagnation": 0.18,
     "decline": 0.12,
     "collapse": 0.13
    }
   },
   {
    "entity": "MDA",
    "si": {
     "abundance": 0.15000000000000002,
     "better": 0.6000000000000001,
     "stagnation": 0.09000000000000001,
     "decline": 0.07000000000000002,
     "collapse": 0.09000000000000001
    },
    "noSi": {
     "abundance": 0.003,
     "better": 0.66,
     "stagnation": 0.13,
     "decline": 0.11,
     "collapse": 0.097
    }
   },
   {
    "entity": "ALB",
    "si": {
     "abundance": 0.17,
     "better": 0.63,
     "stagnation": 0.08,
     "decline": 0.06,
     "collapse": 0.06
    },
    "noSi": {
     "abundance": 0.0030000000000000005,
     "better": 0.7000000000000001,
     "stagnation": 0.13000000000000003,
     "decline": 0.09000000000000001,
     "collapse": 0.07700000000000001
    }
   },
   {
    "entity": "GNB",
    "si": {
     "abundance": 0.04,
     "better": 0.6,
     "stagnation": 0.14,
     "decline": 0.08,
     "collapse": 0.14
    },
    "noSi": {
     "abundance": 0.001,
     "better": 0.52,
     "stagnation": 0.19,
     "decline": 0.13,
     "collapse": 0.159
    }
   },
   {
    "entity": "SVN",
    "si": {
     "abundance": 0.27,
     "better": 0.55,
     "stagnation": 0.08,
     "decline": 0.05,
     "collapse": 0.05
    },
    "noSi": {
     "abundance": 0.006,
     "better": 0.68,
     "stagnation": 0.18,
     "decline": 0.08,
     "collapse": 0.054
    }
   },
   {
    "entity": "GNQ",
    "si": {
     "abundance": 0.04,
     "better": 0.52,
     "stagnation": 0.16,
     "decline": 0.12,
     "collapse": 0.16
    },
    "noSi": {
     "abundance": 0.001,
     "better": 0.44,
     "stagnation": 0.2,
     "decline": 0.18,
     "collapse": 0.179
    }
   },
   {
    "entity": "LVA",
    "si": {
     "abundance": 0.24,
     "better": 0.55,
     "stagnation": 0.08,
     "decline": 0.06,
     "collapse": 0.07
    },
    "noSi": {
     "abundance": 0.005000000000000001,
     "better": 0.7100000000000001,
     "stagnation": 0.13000000000000003,
     "decline": 0.08000000000000002,
     "collapse": 0.07500000000000001
    }
   },
   {
    "entity": "MKD",
    "si": {
     "abundance": 0.16,
     "better": 0.62,
     "stagnation": 0.09,
     "decline": 0.07,
     "collapse": 0.06
    },
    "noSi": {
     "abundance": 0.003,
     "better": 0.66,
     "stagnation": 0.16,
     "decline": 0.1,
     "collapse": 0.077
    }
   },
   {
    "entity": "BHR",
    "si": {
     "abundance": 0.11,
     "better": 0.5,
     "stagnation": 0.15,
     "decline": 0.11,
     "collapse": 0.13
    },
    "noSi": {
     "abundance": 0.0020000000000000005,
     "better": 0.42000000000000004,
     "stagnation": 0.24000000000000002,
     "decline": 0.18000000000000002,
     "collapse": 0.15800000000000003
    }
   },
   {
    "entity": "TLS",
    "si": {
     "abundance": 0.060000000000000005,
     "better": 0.6500000000000001,
     "stagnation": 0.12000000000000001,
     "decline": 0.07000000000000002,
     "collapse": 0.10000000000000002
    },
    "noSi": {
     "abundance": 0.0010000000000000002,
     "better": 0.5800000000000001,
     "stagnation": 0.18000000000000002,
     "decline": 0.12000000000000001,
     "collapse": 0.11900000000000001
    }
   },
   {
    "entity": "CYP",
    "si": {
     "abundance": 0.25,
     "better": 0.55,
     "stagnation": 0.09,
     "decline": 0.06,
     "collapse": 0.05
    },
    "noSi": {
     "abundance": 0.006,
     "better": 0.64,
     "stagnation": 0.19,
     "decline": 0.1,
     "collapse": 0.064
    }
   },
   {
    "entity": "TTO",
    "si": {
     "abundance": 0.1,
     "better": 0.56,
     "stagnation": 0.15,
     "decline": 0.1,
     "collapse": 0.09
    },
    "noSi": {
     "abundance": 0.002,
     "better": 0.5,
     "stagnation": 0.23,
     "decline": 0.15,
     "collapse": 0.118
    }
   },
   {
    "entity": "EST",
    "si": {
     "abundance": 0.27999999999999997,
     "better": 0.5399999999999999,
     "stagnation": 0.059999999999999984,
     "decline": 0.04999999999999999,
     "collapse": 0.06999999999999999
    },
    "noSi": {
     "abundance": 0.007,
     "better": 0.74,
     "stagnation": 0.11,
     "decline": 0.07,
     "collapse": 0.073
    }
   },
   {
    "entity": "SWZ",
    "si": {
     "abundance": 0.05,
     "better": 0.62,
     "stagnation": 0.12,
     "decline": 0.08,
     "collapse": 0.13
    },
    "noSi": {
     "abundance": 0.001,
     "better": 0.56,
     "stagnation": 0.18,
     "decline": 0.12,
     "collapse": 0.139
    }
   }
  ],
  "curves": []
 },
 {
  "id": "rest-7-2026-11-25-1",
  "batch": "rest-7",
  "model": "Claude Opus 5.5",
  "date": "2026-11-25",
  "method": "independent agent run, prompt 2026-11-25.1",
  "places": [
   {
    "entity": "MUS",
    "si": {
     "abundance": 0.15,
     "better": 0.63,
     "stagnation": 0.09,
     "decline": 0.06,
     "collapse": 0.07
    },
    "noSi": {
     "abundance": 0.002,
     "better": 0.66,
     "stagnation": 0.17,
     "decline": 0.093,
     "collapse": 0.075
    }
   },
   {
    "entity": "DJI",
    "si": {
     "abundance": 0.05,
     "better": 0.61,
     "stagnation": 0.12,
     "decline": 0.095,
     "collapse": 0.125
    },
    "noSi": {
     "abundance": 0.001,
     "better": 0.589,
     "stagnation": 0.17,
     "decline": 0.11,
     "collapse": 0.13
    }
   },
   {
    "entity": "FJI",
    "si": {
     "abundance": 0.08000000000000002,
     "better": 0.6400000000000001,
     "stagnation": 0.12000000000000001,
     "decline": 0.08000000000000002,
     "collapse": 0.08000000000000002
    },
    "noSi": {
     "abundance": 0.0010000000000000002,
     "better": 0.6400000000000001,
     "stagnation": 0.18000000000000002,
     "decline": 0.09400000000000001,
     "collapse": 0.08500000000000002
    }
   },
   {
    "entity": "COM",
    "si": {
     "abundance": 0.04,
     "better": 0.58,
     "stagnation": 0.15,
     "decline": 0.11,
     "collapse": 0.12
    },
    "noSi": {
     "abundance": 0.0005,
     "better": 0.55,
     "stagnation": 0.2,
     "decline": 0.12,
     "collapse": 0.1295
    }
   },
   {
    "entity": "SLB",
    "si": {
     "abundance": 0.04,
     "better": 0.55,
     "stagnation": 0.17,
     "decline": 0.1,
     "collapse": 0.14
    },
    "noSi": {
     "abundance": 0.0005000000000000001,
     "better": 0.5000000000000001,
     "stagnation": 0.23000000000000004,
     "decline": 0.12000000000000001,
     "collapse": 0.14950000000000002
    }
   },
   {
    "entity": "GUY",
    "si": {
     "abundance": 0.12000000000000001,
     "better": 0.6400000000000001,
     "stagnation": 0.09000000000000001,
     "decline": 0.07000000000000002,
     "collapse": 0.08000000000000002
    },
    "noSi": {
     "abundance": 0.002,
     "better": 0.68,
     "stagnation": 0.13,
     "decline": 0.093,
     "collapse": 0.095
    }
   },
   {
    "entity": "BTN",
    "si": {
     "abundance": 0.1,
     "better": 0.7,
     "stagnation": 0.08,
     "decline": 0.05,
     "collapse": 0.07
    },
    "noSi": {
     "abundance": 0.0020000000000000005,
     "better": 0.7200000000000001,
     "stagnation": 0.12000000000000001,
     "decline": 0.07800000000000001,
     "collapse": 0.08000000000000002
    }
   },
   {
    "entity": "LUX",
    "si": {
     "abundance": 0.33,
     "better": 0.49,
     "stagnation": 0.085,
     "decline": 0.045,
     "collapse": 0.05
    },
    "noSi": {
     "abundance": 0.015,
     "better": 0.63,
     "stagnation": 0.2,
     "decline": 0.095,
     "collapse": 0.06
    }
   },
   {
    "entity": "MAC",
    "si": {
     "abundance": 0.24,
     "better": 0.54,
     "stagnation": 0.095,
     "decline": 0.06,
     "collapse": 0.065
    },
    "noSi": {
     "abundance": 0.005000000000000001,
     "better": 0.5900000000000001,
     "stagnation": 0.20000000000000004,
     "decline": 0.12000000000000001,
     "collapse": 0.08500000000000002
    }
   },
   {
    "entity": "SUR",
    "si": {
     "abundance": 0.10000000000000002,
     "better": 0.6400000000000001,
     "stagnation": 0.10000000000000002,
     "decline": 0.07500000000000001,
     "collapse": 0.08500000000000002
    },
    "noSi": {
     "abundance": 0.002,
     "better": 0.66,
     "stagnation": 0.14,
     "decline": 0.1,
     "collapse": 0.098
    }
   },
   {
    "entity": "MNE",
    "si": {
     "abundance": 0.22,
     "better": 0.56,
     "stagnation": 0.1,
     "decline": 0.06,
     "collapse": 0.06
    },
    "noSi": {
     "abundance": 0.003,
     "better": 0.66,
     "stagnation": 0.165,
     "decline": 0.1,
     "collapse": 0.072
    }
   },
   {
    "entity": "MLT",
    "si": {
     "abundance": 0.27,
     "better": 0.51,
     "stagnation": 0.095,
     "decline": 0.06,
     "collapse": 0.065
    },
    "noSi": {
     "abundance": 0.005,
     "better": 0.63,
     "stagnation": 0.185,
     "decline": 0.11,
     "collapse": 0.07
    }
   },
   {
    "entity": "MDV",
    "si": {
     "abundance": 0.08000000000000002,
     "better": 0.5900000000000001,
     "stagnation": 0.12000000000000001,
     "decline": 0.10000000000000002,
     "collapse": 0.11000000000000001
    },
    "noSi": {
     "abundance": 0.001,
     "better": 0.56,
     "stagnation": 0.18,
     "decline": 0.13,
     "collapse": 0.129
    }
   },
   {
    "entity": "CPV",
    "si": {
     "abundance": 0.07000000000000002,
     "better": 0.6600000000000001,
     "stagnation": 0.11000000000000001,
     "decline": 0.08000000000000002,
     "collapse": 0.08000000000000002
    },
    "noSi": {
     "abundance": 0.001,
     "better": 0.67,
     "stagnation": 0.16,
     "decline": 0.084,
     "collapse": 0.085
    }
   },
   {
    "entity": "BRN",
    "si": {
     "abundance": 0.15,
     "better": 0.55,
     "stagnation": 0.15,
     "decline": 0.08,
     "collapse": 0.07
    },
    "noSi": {
     "abundance": 0.003,
     "better": 0.5,
     "stagnation": 0.25,
     "decline": 0.15,
     "collapse": 0.097
    }
   },
   {
    "entity": "BLZ",
    "si": {
     "abundance": 0.08000000000000002,
     "better": 0.6300000000000001,
     "stagnation": 0.12000000000000001,
     "decline": 0.08000000000000002,
     "collapse": 0.09000000000000001
    },
    "noSi": {
     "abundance": 0.001,
     "better": 0.62,
     "stagnation": 0.17,
     "decline": 0.11,
     "collapse": 0.099
    }
   },
   {
    "entity": "BHS",
    "si": {
     "abundance": 0.13,
     "better": 0.54,
     "stagnation": 0.14,
     "decline": 0.1,
     "collapse": 0.09
    },
    "noSi": {
     "abundance": 0.003,
     "better": 0.517,
     "stagnation": 0.23,
     "decline": 0.14,
     "collapse": 0.11
    }
   },
   {
    "entity": "ISL",
    "si": {
     "abundance": 0.34,
     "better": 0.5,
     "stagnation": 0.08,
     "decline": 0.04,
     "collapse": 0.04
    },
    "noSi": {
     "abundance": 0.01,
     "better": 0.68,
     "stagnation": 0.18,
     "decline": 0.085,
     "collapse": 0.045
    }
   },
   {
    "entity": "VUT",
    "si": {
     "abundance": 0.05,
     "better": 0.58,
     "stagnation": 0.16,
     "decline": 0.1,
     "collapse": 0.11
    },
    "noSi": {
     "abundance": 0.0005,
     "better": 0.54,
     "stagnation": 0.23,
     "decline": 0.12,
     "collapse": 0.1095
    }
   },
   {
    "entity": "BRB",
    "si": {
     "abundance": 0.13000000000000003,
     "better": 0.5800000000000001,
     "stagnation": 0.13000000000000003,
     "decline": 0.08500000000000002,
     "collapse": 0.07500000000000001
    },
    "noSi": {
     "abundance": 0.0020000000000000005,
     "better": 0.5800000000000001,
     "stagnation": 0.21000000000000002,
     "decline": 0.12300000000000001,
     "collapse": 0.08500000000000002
    }
   }
  ],
  "curves": []
 },
 {
  "id": "rest-8-2026-11-25-1",
  "batch": "rest-8",
  "model": "Claude Opus 5.5",
  "date": "2026-11-25",
  "method": "independent agent run, prompt 2026-11-25.1",
  "places": [
   {
    "entity": "STP",
    "si": {
     "abundance": 0.07,
     "better": 0.7,
     "stagnation": 0.095,
     "decline": 0.055,
     "collapse": 0.08
    },
    "noSi": {
     "abundance": 0.001,
     "better": 0.66,
     "stagnation": 0.155,
     "decline": 0.085,
     "collapse": 0.099
    }
   },
   {
    "entity": "WSM",
    "si": {
     "abundance": 0.08,
     "better": 0.7,
     "stagnation": 0.1,
     "decline": 0.06,
     "collapse": 0.06
    },
    "noSi": {
     "abundance": 0.002,
     "better": 0.66,
     "stagnation": 0.18,
     "decline": 0.09,
     "collapse": 0.068
    }
   },
   {
    "entity": "LCA",
    "si": {
     "abundance": 0.11,
     "better": 0.66,
     "stagnation": 0.1,
     "decline": 0.06,
     "collapse": 0.07
    },
    "noSi": {
     "abundance": 0.0015,
     "better": 0.65,
     "stagnation": 0.17,
     "decline": 0.1,
     "collapse": 0.0785
    }
   },
   {
    "entity": "KIR",
    "si": {
     "abundance": 0.05,
     "better": 0.58,
     "stagnation": 0.12,
     "decline": 0.12,
     "collapse": 0.13
    },
    "noSi": {
     "abundance": 0.0005,
     "better": 0.48,
     "stagnation": 0.215,
     "decline": 0.15,
     "collapse": 0.1545
    }
   },
   {
    "entity": "SYC",
    "si": {
     "abundance": 0.13,
     "better": 0.66,
     "stagnation": 0.095,
     "decline": 0.055,
     "collapse": 0.06
    },
    "noSi": {
     "abundance": 0.003,
     "better": 0.67,
     "stagnation": 0.17,
     "decline": 0.095,
     "collapse": 0.062
    }
   },
   {
    "entity": "GRD",
    "si": {
     "abundance": 0.11,
     "better": 0.665,
     "stagnation": 0.095,
     "decline": 0.06,
     "collapse": 0.07
    },
    "noSi": {
     "abundance": 0.0015,
     "better": 0.655,
     "stagnation": 0.165,
     "decline": 0.1,
     "collapse": 0.0785
    }
   },
   {
    "entity": "FSM",
    "si": {
     "abundance": 0.060000000000000005,
     "better": 0.6200000000000001,
     "stagnation": 0.13000000000000003,
     "decline": 0.09000000000000001,
     "collapse": 0.10000000000000002
    },
    "noSi": {
     "abundance": 0.001,
     "better": 0.53,
     "stagnation": 0.22,
     "decline": 0.13,
     "collapse": 0.119
    }
   },
   {
    "entity": "ABW",
    "si": {
     "abundance": 0.15,
     "better": 0.62,
     "stagnation": 0.1,
     "decline": 0.065,
     "collapse": 0.065
    },
    "noSi": {
     "abundance": 0.003,
     "better": 0.64,
     "stagnation": 0.19,
     "decline": 0.1,
     "collapse": 0.067
    }
   },
   {
    "entity": "VIR",
    "si": {
     "abundance": 0.18,
     "better": 0.58,
     "stagnation": 0.11,
     "decline": 0.065,
     "collapse": 0.065
    },
    "noSi": {
     "abundance": 0.004000000000000001,
     "better": 0.5800000000000001,
     "stagnation": 0.23000000000000004,
     "decline": 0.11000000000000001,
     "collapse": 0.07600000000000001
    }
   },
   {
    "entity": "TON",
    "si": {
     "abundance": 0.075,
     "better": 0.67,
     "stagnation": 0.11,
     "decline": 0.07,
     "collapse": 0.075
    },
    "noSi": {
     "abundance": 0.0015000000000000002,
     "better": 0.6100000000000001,
     "stagnation": 0.19000000000000003,
     "decline": 0.11000000000000001,
     "collapse": 0.08850000000000001
    }
   },
   {
    "entity": "VCT",
    "si": {
     "abundance": 0.1,
     "better": 0.65,
     "stagnation": 0.105,
     "decline": 0.07,
     "collapse": 0.075
    },
    "noSi": {
     "abundance": 0.0012,
     "better": 0.62,
     "stagnation": 0.17,
     "decline": 0.12,
     "collapse": 0.0888
    }
   },
   {
    "entity": "ATG",
    "si": {
     "abundance": 0.13,
     "better": 0.635,
     "stagnation": 0.1,
     "decline": 0.06,
     "collapse": 0.075
    },
    "noSi": {
     "abundance": 0.002,
     "better": 0.64,
     "stagnation": 0.17,
     "decline": 0.105,
     "collapse": 0.083
    }
   },
   {
    "entity": "AND",
    "si": {
     "abundance": 0.3,
     "better": 0.48,
     "stagnation": 0.1,
     "decline": 0.06,
     "collapse": 0.06
    },
    "noSi": {
     "abundance": 0.006,
     "better": 0.58,
     "stagnation": 0.23,
     "decline": 0.117,
     "collapse": 0.067
    }
   },
   {
    "entity": "DMA",
    "si": {
     "abundance": 0.1,
     "better": 0.65,
     "stagnation": 0.105,
     "decline": 0.07,
     "collapse": 0.075
    },
    "noSi": {
     "abundance": 0.0012000000000000001,
     "better": 0.6100000000000001,
     "stagnation": 0.18000000000000002,
     "decline": 0.12000000000000001,
     "collapse": 0.08880000000000002
    }
   },
   {
    "entity": "KNA",
    "si": {
     "abundance": 0.13,
     "better": 0.635,
     "stagnation": 0.1,
     "decline": 0.06,
     "collapse": 0.075
    },
    "noSi": {
     "abundance": 0.002,
     "better": 0.63,
     "stagnation": 0.18,
     "decline": 0.105,
     "collapse": 0.083
    }
   },
   {
    "entity": "LIE",
    "si": {
     "abundance": 0.4,
     "better": 0.43,
     "stagnation": 0.075,
     "decline": 0.045,
     "collapse": 0.05
    },
    "noSi": {
     "abundance": 0.015,
     "better": 0.67,
     "stagnation": 0.17,
     "decline": 0.09,
     "collapse": 0.055
    }
   },
   {
    "entity": "MCO",
    "si": {
     "abundance": 0.42,
     "better": 0.41,
     "stagnation": 0.075,
     "decline": 0.04,
     "collapse": 0.055
    },
    "noSi": {
     "abundance": 0.02,
     "better": 0.63,
     "stagnation": 0.19,
     "decline": 0.1,
     "collapse": 0.06
    }
   },
   {
    "entity": "MHL",
    "si": {
     "abundance": 0.060000000000000005,
     "better": 0.5800000000000001,
     "stagnation": 0.12000000000000001,
     "decline": 0.11500000000000002,
     "collapse": 0.12500000000000003
    },
    "noSi": {
     "abundance": 0.0005,
     "better": 0.49,
     "stagnation": 0.21,
     "decline": 0.15,
     "collapse": 0.1495
    }
   },
   {
    "entity": "SMR",
    "si": {
     "abundance": 0.27,
     "better": 0.49,
     "stagnation": 0.11,
     "decline": 0.065,
     "collapse": 0.065
    },
    "noSi": {
     "abundance": 0.004000000000000001,
     "better": 0.5700000000000001,
     "stagnation": 0.23000000000000004,
     "decline": 0.12200000000000001,
     "collapse": 0.07400000000000001
    }
   },
   {
    "entity": "PLW",
    "si": {
     "abundance": 0.12,
     "better": 0.64,
     "stagnation": 0.1,
     "decline": 0.07,
     "collapse": 0.07
    },
    "noSi": {
     "abundance": 0.002,
     "better": 0.62,
     "stagnation": 0.18,
     "decline": 0.11,
     "collapse": 0.088
    }
   }
  ],
  "curves": []
 },
 {
  "id": "rest-9-2026-11-25-1",
  "batch": "rest-9",
  "model": "Claude Opus 5.5",
  "date": "2026-11-25",
  "method": "independent agent run, prompt 2026-11-25.1",
  "places": [
   {
    "entity": "NRU",
    "si": {
     "abundance": 0.060000000000000005,
     "better": 0.5800000000000001,
     "stagnation": 0.15000000000000002,
     "decline": 0.11000000000000001,
     "collapse": 0.10000000000000002
    },
    "noSi": {
     "abundance": 0.003,
     "better": 0.53,
     "stagnation": 0.21,
     "decline": 0.137,
     "collapse": 0.12
    }
   },
   {
    "entity": "TUV",
    "si": {
     "abundance": 0.05,
     "better": 0.55,
     "stagnation": 0.15,
     "decline": 0.12,
     "collapse": 0.13
    },
    "noSi": {
     "abundance": 0.002,
     "better": 0.47,
     "stagnation": 0.218,
     "decline": 0.16,
     "collapse": 0.15
    }
   }
  ],
  "curves": []
 },
 {
  "id": "timeline-2026-11-25-1",
  "batch": "timeline",
  "model": "Claude Opus 5.5",
  "date": "2026-11-25",
  "method": "independent agent run, prompt 2026-11-25.1",
  "places": [],
  "curves": [],
  "timeline": [
   {
    "year": 2030,
    "si": 0.15,
    "atLeast3": 0.022,
    "atLeast4": 0.008,
    "doom": 0.003
   },
   {
    "year": 2040,
    "si": 0.45,
    "atLeast3": 0.095,
    "atLeast4": 0.04,
    "doom": 0.016
   },
   {
    "year": 2050,
    "si": 0.6,
    "atLeast3": 0.16,
    "atLeast4": 0.066,
    "doom": 0.025
   },
   {
    "year": 2075,
    "si": 0.75,
    "atLeast3": 0.3,
    "atLeast4": 0.105,
    "doom": 0.036
   }
  ]
 },
 {
  "id": "timeline-2026-11-25-2",
  "batch": "timeline",
  "model": "Claude Opus 5.5",
  "date": "2026-11-25",
  "method": "independent agent run, prompt 2026-11-25.1",
  "places": [],
  "curves": [],
  "timeline": [
   {
    "year": 2030,
    "si": 0.18,
    "atLeast3": 0.026,
    "atLeast4": 0.01,
    "doom": 0.0035
   },
   {
    "year": 2040,
    "si": 0.43,
    "atLeast3": 0.1,
    "atLeast4": 0.04,
    "doom": 0.015
   },
   {
    "year": 2050,
    "si": 0.6,
    "atLeast3": 0.18,
    "atLeast4": 0.067,
    "doom": 0.025
   },
   {
    "year": 2075,
    "si": 0.75,
    "atLeast3": 0.32,
    "atLeast4": 0.11,
    "doom": 0.036
   }
  ]
 },
 {
  "id": "timeline-2026-11-25-3",
  "batch": "timeline",
  "model": "Claude Opus 5.5",
  "date": "2026-11-25",
  "method": "independent agent run, prompt 2026-11-25.1",
  "places": [],
  "curves": [],
  "timeline": [
   {
    "year": 2030,
    "si": 0.14,
    "atLeast3": 0.022,
    "atLeast4": 0.007,
    "doom": 0.0025
   },
   {
    "year": 2040,
    "si": 0.45,
    "atLeast3": 0.095,
    "atLeast4": 0.035,
    "doom": 0.015
   },
   {
    "year": 2050,
    "si": 0.6,
    "atLeast3": 0.165,
    "atLeast4": 0.062,
    "doom": 0.026
   },
   {
    "year": 2075,
    "si": 0.75,
    "atLeast3": 0.3,
    "atLeast4": 0.105,
    "doom": 0.037
   }
  ]
 }
]
