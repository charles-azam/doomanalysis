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
     "abundance": 0.07,
     "better": 0.71,
     "stagnation": 0.075,
     "decline": 0.06,
     "collapse": 0.085
    },
    "noSi": {
     "abundance": 0.0010000000000000002,
     "better": 0.7200000000000001,
     "stagnation": 0.10000000000000002,
     "decline": 0.08000000000000002,
     "collapse": 0.09900000000000002
    },
    "reading": {
     "channels": {
      "productivity": 1,
      "prices": 1.5,
      "jobs": -1,
      "ownership": -0.5,
      "stability": -0.5
     },
     "reason": "Prices matter most: cheaper energy, food and medicine lift a huge poor population, while IT and outsourcing exports face automation."
    }
   },
   {
    "entity": "CHN",
    "si": {
     "abundance": 0.14999999999999997,
     "better": 0.6499999999999999,
     "stagnation": 0.06999999999999999,
     "decline": 0.04999999999999999,
     "collapse": 0.07999999999999999
    },
    "noSi": {
     "abundance": 0.0030000000000000005,
     "better": 0.7100000000000001,
     "stagnation": 0.13000000000000003,
     "decline": 0.08000000000000002,
     "collapse": 0.07700000000000001
    },
    "reading": {
     "channels": {
      "productivity": 1.5,
      "prices": 1,
      "jobs": -0.5,
      "ownership": 1,
      "stability": -1
     },
     "reason": "Ownership and productivity: China builds its own models and robots and its state taxes them; the US rivalry and surveillance cut stability."
    }
   },
   {
    "entity": "USA",
    "si": {
     "abundance": 0.26999999999999996,
     "better": 0.5399999999999999,
     "stagnation": 0.06999999999999999,
     "decline": 0.04999999999999999,
     "collapse": 0.06999999999999999
    },
    "noSi": {
     "abundance": 0.004000000000000001,
     "better": 0.7000000000000001,
     "stagnation": 0.14000000000000004,
     "decline": 0.08000000000000002,
     "collapse": 0.07600000000000001
    },
    "reading": {
     "channels": {
      "productivity": 2,
      "prices": 1,
      "jobs": -0.5,
      "ownership": 2,
      "stability": -1
     },
     "reason": "Ownership dominates: the US owns most frontier models and compute and can tax them, though unequal gains and polarisation threaten stability."
    }
   },
   {
    "entity": "IDN",
    "si": {
     "abundance": 0.06999999999999999,
     "better": 0.7299999999999999,
     "stagnation": 0.06999999999999999,
     "decline": 0.054999999999999986,
     "collapse": 0.07499999999999998
    },
    "noSi": {
     "abundance": 0.0020000000000000005,
     "better": 0.7300000000000001,
     "stagnation": 0.11000000000000001,
     "decline": 0.08000000000000002,
     "collapse": 0.07800000000000001
    },
    "reading": {
     "channels": {
      "productivity": 0.5,
      "prices": 1.5,
      "jobs": -0.5,
      "ownership": -0.5,
      "stability": -0.5
     },
     "reason": "Prices matter most: cheaper energy, medicine and goods help a middle-income economy whose commodity exports are only partly exposed to AI."
    }
   },
   {
    "entity": "PAK",
    "si": {
     "abundance": 0.025,
     "better": 0.595,
     "stagnation": 0.13,
     "decline": 0.11,
     "collapse": 0.14
    },
    "noSi": {
     "abundance": 0.001,
     "better": 0.6,
     "stagnation": 0.15,
     "decline": 0.11,
     "collapse": 0.139
    },
    "reading": {
     "channels": {
      "productivity": 0.5,
      "prices": 1.5,
      "jobs": -0.5,
      "ownership": -1,
      "stability": -1
     },
     "reason": "Stability matters most: a fragile, military-dominated state with little AI and a young population risks unrest, though cheaper energy and medicine help."
    }
   },
   {
    "entity": "NGA",
    "si": {
     "abundance": 0.025,
     "better": 0.565,
     "stagnation": 0.15,
     "decline": 0.12,
     "collapse": 0.14
    },
    "noSi": {
     "abundance": 0.001,
     "better": 0.58,
     "stagnation": 0.17,
     "decline": 0.12,
     "collapse": 0.129
    },
    "reading": {
     "channels": {
      "productivity": 0.5,
      "prices": 1.5,
      "jobs": -0.5,
      "ownership": -1,
      "stability": -1
     },
     "reason": "Stability and ownership matter most: a weak state with little compute captures few gains and may lose oil income, though cheap medicine and power help."
    }
   },
   {
    "entity": "BRA",
    "si": {
     "abundance": 0.08,
     "better": 0.68,
     "stagnation": 0.1,
     "decline": 0.065,
     "collapse": 0.075
    },
    "noSi": {
     "abundance": 0.002,
     "better": 0.68,
     "stagnation": 0.15,
     "decline": 0.09,
     "collapse": 0.078
    },
    "reading": {
     "channels": {
      "productivity": 1,
      "prices": 1,
      "jobs": -0.5,
      "ownership": -0.5,
      "stability": -0.5
     },
     "reason": "Productivity matters most: fairly high AI use and agribusiness gain from AI, while commodity exports hold up and service jobs are moderately exposed."
    }
   },
   {
    "entity": "BGD",
    "si": {
     "abundance": 0.025,
     "better": 0.635,
     "stagnation": 0.13,
     "decline": 0.1,
     "collapse": 0.11
    },
    "noSi": {
     "abundance": 0.001,
     "better": 0.68,
     "stagnation": 0.11,
     "decline": 0.1,
     "collapse": 0.109
    },
    "reading": {
     "channels": {
      "productivity": 0,
      "prices": 1.5,
      "jobs": -1.5,
      "ownership": -0.5,
      "stability": -0.5
     },
     "reason": "Jobs matter most: garment exports and Gulf remittance work are exposed to robots, and very low AI use leaves little to gain beyond cheaper goods."
    }
   },
   {
    "entity": "RUS",
    "si": {
     "abundance": 0.05,
     "better": 0.55,
     "stagnation": 0.16,
     "decline": 0.12,
     "collapse": 0.12
    },
    "noSi": {
     "abundance": 0.002,
     "better": 0.6,
     "stagnation": 0.18,
     "decline": 0.12,
     "collapse": 0.098
    },
    "reading": {
     "channels": {
      "productivity": 0.5,
      "prices": 1,
      "jobs": -1,
      "ownership": -0.5,
      "stability": -1
     },
     "reason": "Jobs and exports matter most: cheaper clean energy erodes oil and gas income, and an isolated, surveillance-heavy state gains little from AI."
    }
   },
   {
    "entity": "ETH",
    "si": {
     "abundance": 0.02,
     "better": 0.635,
     "stagnation": 0.12,
     "decline": 0.095,
     "collapse": 0.13
    },
    "noSi": {
     "abundance": 0.001,
     "better": 0.64,
     "stagnation": 0.13,
     "decline": 0.1,
     "collapse": 0.129
    },
    "reading": {
     "channels": {
      "productivity": 0,
      "prices": 2,
      "jobs": -0.5,
      "ownership": -0.5,
      "stability": -1
     },
     "reason": "Prices matter most: cheap medicine, solar power and AI tutoring help a very poor country, while conflict and weak access to AI limit the rest."
    }
   },
   {
    "entity": "MEX",
    "si": {
     "abundance": 0.060000000000000005,
     "better": 0.6300000000000001,
     "stagnation": 0.13000000000000003,
     "decline": 0.09500000000000001,
     "collapse": 0.08500000000000002
    },
    "noSi": {
     "abundance": 0.002,
     "better": 0.66,
     "stagnation": 0.16,
     "decline": 0.1,
     "collapse": 0.078
    },
    "reading": {
     "channels": {
      "productivity": 1,
      "prices": 1,
      "jobs": -1,
      "ownership": -0.5,
      "stability": -0.5
     },
     "reason": "Jobs matter most: assembly plants and remittance work in the US are exposed to robots, offset by productivity gains from close US integration."
    }
   },
   {
    "entity": "JPN",
    "si": {
     "abundance": 0.2,
     "better": 0.62,
     "stagnation": 0.08,
     "decline": 0.04,
     "collapse": 0.06
    },
    "noSi": {
     "abundance": 0.003,
     "better": 0.6,
     "stagnation": 0.24,
     "decline": 0.09,
     "collapse": 0.067
    },
    "reading": {
     "channels": {
      "productivity": 2,
      "prices": 1.5,
      "jobs": -0.5,
      "ownership": 0,
      "stability": 0
     },
     "reason": "Productivity matters most: robots and AI fill the gap left by a shrinking workforce, and cheaper energy helps a country that imports 87% of it."
    }
   },
   {
    "entity": "EGY",
    "si": {
     "abundance": 0.035,
     "better": 0.61,
     "stagnation": 0.15,
     "decline": 0.1,
     "collapse": 0.105
    },
    "noSi": {
     "abundance": 0.0010000000000000002,
     "better": 0.5800000000000001,
     "stagnation": 0.18000000000000002,
     "decline": 0.12000000000000001,
     "collapse": 0.11900000000000001
    },
    "reading": {
     "channels": {
      "productivity": 0.5,
      "prices": 2,
      "jobs": -0.5,
      "ownership": -0.5,
      "stability": -1
     },
     "reason": "Prices matter most: cheap energy makes desalination and food imports affordable for a water-starved country, though stability may suffer."
    }
   },
   {
    "entity": "PHL",
    "si": {
     "abundance": 0.04,
     "better": 0.66,
     "stagnation": 0.14,
     "decline": 0.08,
     "collapse": 0.08
    },
    "noSi": {
     "abundance": 0.0020000000000000005,
     "better": 0.7200000000000001,
     "stagnation": 0.12000000000000001,
     "decline": 0.08000000000000002,
     "collapse": 0.07800000000000001
    },
    "reading": {
     "channels": {
      "productivity": 0.5,
      "prices": 1.5,
      "jobs": -1.5,
      "ownership": -0.5,
      "stability": -0.5
     },
     "reason": "Jobs matter most: call-centre and outsourcing exports plus overseas service work are among the most exposed to AI, offsetting cheaper goods."
    }
   },
   {
    "entity": "COD",
    "si": {
     "abundance": 0.015,
     "better": 0.525,
     "stagnation": 0.18,
     "decline": 0.13,
     "collapse": 0.15
    },
    "noSi": {
     "abundance": 0.001,
     "better": 0.529,
     "stagnation": 0.2,
     "decline": 0.13,
     "collapse": 0.14
    },
    "reading": {
     "channels": {
      "productivity": 0,
      "prices": 1.5,
      "jobs": 0,
      "ownership": -1,
      "stability": -1
     },
     "reason": "Ownership and stability matter most: mineral rents go to foreign owners and elites and armed conflict can worsen, though cheap medicine helps."
    }
   },
   {
    "entity": "VNM",
    "si": {
     "abundance": 0.08,
     "better": 0.73,
     "stagnation": 0.07,
     "decline": 0.055,
     "collapse": 0.065
    },
    "noSi": {
     "abundance": 0.0030000000000000005,
     "better": 0.7600000000000001,
     "stagnation": 0.09000000000000001,
     "decline": 0.07500000000000001,
     "collapse": 0.07200000000000001
    },
    "reading": {
     "channels": {
      "productivity": 1,
      "prices": 1.5,
      "jobs": -1,
      "ownership": -0.5,
      "stability": -0.5
     },
     "reason": "Productivity matters most: high AI use and a capable state gain, while electronics assembly exports are exposed to robots and reshoring."
    }
   },
   {
    "entity": "IRN",
    "si": {
     "abundance": 0.03,
     "better": 0.54,
     "stagnation": 0.16,
     "decline": 0.125,
     "collapse": 0.145
    },
    "noSi": {
     "abundance": 0.001,
     "better": 0.56,
     "stagnation": 0.17,
     "decline": 0.13,
     "collapse": 0.139
    },
    "reading": {
     "channels": {
      "productivity": 0,
      "prices": 1,
      "jobs": -0.5,
      "ownership": -0.5,
      "stability": -1
     },
     "reason": "Stability matters most: a sanctioned, surveillance-heavy regime in a regional conflict gets little AI access while cheaper clean energy erodes oil income."
    }
   },
   {
    "entity": "TUR",
    "si": {
     "abundance": 0.07,
     "better": 0.66,
     "stagnation": 0.12,
     "decline": 0.08,
     "collapse": 0.07
    },
    "noSi": {
     "abundance": 0.003,
     "better": 0.66,
     "stagnation": 0.16,
     "decline": 0.1,
     "collapse": 0.077
    },
    "reading": {
     "channels": {
      "productivity": 1,
      "prices": 1.5,
      "jobs": -1,
      "ownership": -0.5,
      "stability": -0.5
     },
     "reason": "Prices matter most: cheaper energy helps a country importing 70% of it, while textile and auto-parts exports to Europe are exposed to robots."
    }
   },
   {
    "entity": "DEU",
    "si": {
     "abundance": 0.23,
     "better": 0.59,
     "stagnation": 0.08,
     "decline": 0.045,
     "collapse": 0.055
    },
    "noSi": {
     "abundance": 0.004,
     "better": 0.645,
     "stagnation": 0.2,
     "decline": 0.095,
     "collapse": 0.056
    },
    "reading": {
     "channels": {
      "productivity": 1.5,
      "prices": 1.5,
      "jobs": -0.5,
      "ownership": 0,
      "stability": 0
     },
     "reason": "Productivity and prices matter most: high AI use and an effective state gain, and cheaper energy relieves its industry, though it owns few models."
    }
   },
   {
    "entity": "THA",
    "si": {
     "abundance": 0.07,
     "better": 0.67,
     "stagnation": 0.12,
     "decline": 0.07,
     "collapse": 0.07
    },
    "noSi": {
     "abundance": 0.002,
     "better": 0.68,
     "stagnation": 0.15,
     "decline": 0.09,
     "collapse": 0.078
    },
    "reading": {
     "channels": {
      "productivity": 1,
      "prices": 1.5,
      "jobs": -1,
      "ownership": -0.5,
      "stability": -0.5
     },
     "reason": "Productivity matters most: robots offset fast ageing, while car and electronics assembly exports face automation and cheaper energy helps an importer."
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
     "abundance": 0.08,
     "better": 0.68,
     "stagnation": 0.08,
     "decline": 0.065,
     "collapse": 0.095
    },
    "noSi": {
     "abundance": 0.0010000000000000002,
     "better": 0.7200000000000001,
     "stagnation": 0.10000000000000002,
     "decline": 0.08000000000000002,
     "collapse": 0.09900000000000002
    },
    "reading": {
     "channels": {
      "productivity": 1,
      "prices": 1.5,
      "jobs": -1,
      "ownership": -0.5,
      "stability": -0.5
     },
     "reason": "Prices: cheap energy, food and medicine lift a poor importer, while AI erodes the IT and call-centre exports that built its middle class."
    }
   },
   {
    "entity": "CHN",
    "si": {
     "abundance": 0.18,
     "better": 0.6,
     "stagnation": 0.07,
     "decline": 0.065,
     "collapse": 0.085
    },
    "noSi": {
     "abundance": 0.0030000000000000005,
     "better": 0.7300000000000001,
     "stagnation": 0.10000000000000002,
     "decline": 0.08500000000000002,
     "collapse": 0.08200000000000002
    },
    "reading": {
     "channels": {
      "productivity": 1.5,
      "prices": 1,
      "jobs": -0.5,
      "ownership": 1.5,
      "stability": -0.5
     },
     "reason": "Ownership: China builds its own models, chips and robots and can tax them, offsetting lost factory jobs; rivalry with the US adds risk."
    }
   },
   {
    "entity": "USA",
    "si": {
     "abundance": 0.32999999999999996,
     "better": 0.47999999999999987,
     "stagnation": 0.06999999999999999,
     "decline": 0.04999999999999999,
     "collapse": 0.06999999999999999
    },
    "noSi": {
     "abundance": 0.02,
     "better": 0.66,
     "stagnation": 0.15,
     "decline": 0.1,
     "collapse": 0.07
    },
    "reading": {
     "channels": {
      "productivity": 2,
      "prices": 1,
      "jobs": -0.5,
      "ownership": 2,
      "stability": -1
     },
     "reason": "Ownership: the US holds most frontier compute, models and AI firms and can tax them; whether the bottom tenth shares in it decides abundance."
    }
   },
   {
    "entity": "IDN",
    "si": {
     "abundance": 0.09,
     "better": 0.69,
     "stagnation": 0.08,
     "decline": 0.07,
     "collapse": 0.07
    },
    "noSi": {
     "abundance": 0.0020000000000000005,
     "better": 0.7400000000000001,
     "stagnation": 0.11000000000000001,
     "decline": 0.07500000000000001,
     "collapse": 0.07300000000000001
    },
    "reading": {
     "channels": {
      "productivity": 1,
      "prices": 1.5,
      "jobs": -0.5,
      "ownership": -1,
      "stability": -0.5
     },
     "reason": "Prices: a large domestic market gains from cheap energy, goods and medicine; it sells commodities more than labour, so job losses stay moderate."
    }
   },
   {
    "entity": "PAK",
    "si": {
     "abundance": 0.04,
     "better": 0.58,
     "stagnation": 0.13,
     "decline": 0.105,
     "collapse": 0.145
    },
    "noSi": {
     "abundance": 0.001,
     "better": 0.6,
     "stagnation": 0.14,
     "decline": 0.11,
     "collapse": 0.149
    },
    "reading": {
     "channels": {
      "productivity": 0.5,
      "prices": 2,
      "jobs": -0.5,
      "ownership": -1,
      "stability": -1
     },
     "reason": "Prices: cheap energy, food and medicine help most, but a fragile nuclear-armed state with little AI access gains little ownership and risks unrest."
    }
   },
   {
    "entity": "NGA",
    "si": {
     "abundance": 0.05,
     "better": 0.57,
     "stagnation": 0.15,
     "decline": 0.09,
     "collapse": 0.14
    },
    "noSi": {
     "abundance": 0.001,
     "better": 0.58,
     "stagnation": 0.17,
     "decline": 0.1,
     "collapse": 0.149
    },
    "reading": {
     "channels": {
      "productivity": 0.5,
      "prices": 2,
      "jobs": -0.5,
      "ownership": -1,
      "stability": -1
     },
     "reason": "Prices: cheap solar power and medicine could reach the 4 in 10 without electricity, but falling oil income and weak governance limit the gain."
    }
   },
   {
    "entity": "BRA",
    "si": {
     "abundance": 0.08,
     "better": 0.65,
     "stagnation": 0.12,
     "decline": 0.08,
     "collapse": 0.07
    },
    "noSi": {
     "abundance": 0.002,
     "better": 0.64,
     "stagnation": 0.18,
     "decline": 0.1,
     "collapse": 0.078
    },
    "reading": {
     "channels": {
      "productivity": 1,
      "prices": 1,
      "jobs": -0.5,
      "ownership": -0.5,
      "stability": -0.5
     },
     "reason": "Productivity: wide AI use and food and energy self-sufficiency let Brazil gain, but high inequality makes it hard for the bottom tenth to share."
    }
   },
   {
    "entity": "BGD",
    "si": {
     "abundance": 0.04,
     "better": 0.63,
     "stagnation": 0.13,
     "decline": 0.09,
     "collapse": 0.11
    },
    "noSi": {
     "abundance": 0.001,
     "better": 0.68,
     "stagnation": 0.12,
     "decline": 0.09,
     "collapse": 0.109
    },
    "reading": {
     "channels": {
      "productivity": 0.5,
      "prices": 2,
      "jobs": -1.5,
      "ownership": -1,
      "stability": -0.5
     },
     "reason": "Jobs: robots can take the garment work that earns most export income, which cheaper energy, food and medicine only partly offset."
    }
   },
   {
    "entity": "RUS",
    "si": {
     "abundance": 0.06999999999999999,
     "better": 0.5199999999999999,
     "stagnation": 0.16999999999999998,
     "decline": 0.12999999999999998,
     "collapse": 0.10999999999999997
    },
    "noSi": {
     "abundance": 0.002999999999999999,
     "better": 0.5499999999999999,
     "stagnation": 0.19999999999999996,
     "decline": 0.13999999999999999,
     "collapse": 0.10699999999999997
    },
    "reading": {
     "channels": {
      "productivity": 1,
      "prices": 1,
      "jobs": -0.5,
      "ownership": -0.5,
      "stability": -1
     },
     "reason": "Stability: an isolated, war-prone autocracy with limited AI access risks power concentration and conflict, and cheap energy erodes its oil income."
    }
   },
   {
    "entity": "ETH",
    "si": {
     "abundance": 0.05,
     "better": 0.63,
     "stagnation": 0.11,
     "decline": 0.08,
     "collapse": 0.13
    },
    "noSi": {
     "abundance": 0.001,
     "better": 0.64,
     "stagnation": 0.13,
     "decline": 0.09,
     "collapse": 0.139
    },
    "reading": {
     "channels": {
      "productivity": 0.5,
      "prices": 2,
      "jobs": -0.5,
      "ownership": -1,
      "stability": -1
     },
     "reason": "Prices: cheap solar power, medicine and food matter most at a living standard of 7, but robots close the factory route out of poverty."
    }
   },
   {
    "entity": "MEX",
    "si": {
     "abundance": 0.08000000000000002,
     "better": 0.6200000000000001,
     "stagnation": 0.13000000000000003,
     "decline": 0.09000000000000001,
     "collapse": 0.08000000000000002
    },
    "noSi": {
     "abundance": 0.002,
     "better": 0.63,
     "stagnation": 0.18,
     "decline": 0.1,
     "collapse": 0.088
    },
    "reading": {
     "channels": {
      "productivity": 1,
      "prices": 1.5,
      "jobs": -1,
      "ownership": -0.5,
      "stability": -0.5
     },
     "reason": "Jobs: factory work and remittances from the US are exposed to robots, but close ties to the US AI economy and cheap energy help."
    }
   },
   {
    "entity": "JPN",
    "si": {
     "abundance": 0.25,
     "better": 0.53,
     "stagnation": 0.1,
     "decline": 0.06,
     "collapse": 0.06
    },
    "noSi": {
     "abundance": 0.005000000000000001,
     "better": 0.5700000000000001,
     "stagnation": 0.23000000000000004,
     "decline": 0.12000000000000001,
     "collapse": 0.07500000000000001
    },
    "reading": {
     "channels": {
      "productivity": 1.5,
      "prices": 1.5,
      "jobs": 0,
      "ownership": 0,
      "stability": 0
     },
     "reason": "Productivity: robots and AI fill the gap left by a shrinking, ageing workforce, and cheap energy relieves a country that imports almost all of it."
    }
   },
   {
    "entity": "EGY",
    "si": {
     "abundance": 0.06,
     "better": 0.56,
     "stagnation": 0.15,
     "decline": 0.1,
     "collapse": 0.13
    },
    "noSi": {
     "abundance": 0.001,
     "better": 0.55,
     "stagnation": 0.18,
     "decline": 0.13,
     "collapse": 0.139
    },
    "reading": {
     "channels": {
      "productivity": 1,
      "prices": 2,
      "jobs": -0.5,
      "ownership": -1,
      "stability": -1
     },
     "reason": "Prices: cheap energy could desalinate water and cut food import bills for a country living off one river, but autocratic stability is fragile."
    }
   },
   {
    "entity": "PHL",
    "si": {
     "abundance": 0.06,
     "better": 0.65,
     "stagnation": 0.13,
     "decline": 0.09,
     "collapse": 0.07
    },
    "noSi": {
     "abundance": 0.0020000000000000005,
     "better": 0.7100000000000001,
     "stagnation": 0.12000000000000001,
     "decline": 0.09000000000000001,
     "collapse": 0.07800000000000001
    },
    "reading": {
     "channels": {
      "productivity": 1,
      "prices": 1.5,
      "jobs": -1.5,
      "ownership": -1,
      "stability": -0.5
     },
     "reason": "Jobs: call centres and overseas nursing, care and sea work are exactly what AI and robots replace, so the income they bring is at risk."
    }
   },
   {
    "entity": "COD",
    "si": {
     "abundance": 0.03,
     "better": 0.52,
     "stagnation": 0.18,
     "decline": 0.11,
     "collapse": 0.16
    },
    "noSi": {
     "abundance": 0.001,
     "better": 0.5,
     "stagnation": 0.2,
     "decline": 0.12,
     "collapse": 0.179
    },
    "reading": {
     "channels": {
      "productivity": 0.5,
      "prices": 2,
      "jobs": 0,
      "ownership": -1,
      "stability": -1
     },
     "reason": "Prices: at a living standard of 2, cheap power, medicine and food matter most; its mineral wealth rarely reaches its people, and AI may not change that."
    }
   },
   {
    "entity": "VNM",
    "si": {
     "abundance": 0.1,
     "better": 0.67,
     "stagnation": 0.09,
     "decline": 0.07,
     "collapse": 0.07
    },
    "noSi": {
     "abundance": 0.003,
     "better": 0.75,
     "stagnation": 0.1,
     "decline": 0.07,
     "collapse": 0.077
    },
    "reading": {
     "channels": {
      "productivity": 1.5,
      "prices": 1.5,
      "jobs": -1.5,
      "ownership": -0.5,
      "stability": -0.5
     },
     "reason": "Jobs: assembly work for export, the engine of its growth, is highly automatable, though high AI uptake and a capable state help it adapt."
    }
   },
   {
    "entity": "IRN",
    "si": {
     "abundance": 0.05,
     "better": 0.53,
     "stagnation": 0.16,
     "decline": 0.13,
     "collapse": 0.13
    },
    "noSi": {
     "abundance": 0.001,
     "better": 0.54,
     "stagnation": 0.18,
     "decline": 0.14,
     "collapse": 0.139
    },
    "reading": {
     "channels": {
      "productivity": 1,
      "prices": 1.5,
      "jobs": -0.5,
      "ownership": -1,
      "stability": -1
     },
     "reason": "Stability: a sanctioned theocracy at risk of war could use AI for repression, though cheap energy for desalination could ease its water crisis."
    }
   },
   {
    "entity": "TUR",
    "si": {
     "abundance": 0.10000000000000002,
     "better": 0.5800000000000001,
     "stagnation": 0.15000000000000002,
     "decline": 0.09000000000000001,
     "collapse": 0.08000000000000002
    },
    "noSi": {
     "abundance": 0.002,
     "better": 0.6,
     "stagnation": 0.2,
     "decline": 0.11,
     "collapse": 0.088
    },
    "reading": {
     "channels": {
      "productivity": 1,
      "prices": 1.5,
      "jobs": -1,
      "ownership": -0.5,
      "stability": -0.5
     },
     "reason": "Prices: cheap energy relieves a country importing 70% of its energy, but its export factories and tourism jobs are exposed to automation."
    }
   },
   {
    "entity": "DEU",
    "si": {
     "abundance": 0.28,
     "better": 0.5,
     "stagnation": 0.1,
     "decline": 0.06,
     "collapse": 0.06
    },
    "noSi": {
     "abundance": 0.01,
     "better": 0.62,
     "stagnation": 0.2,
     "decline": 0.11,
     "collapse": 0.06
    },
    "reading": {
     "channels": {
      "productivity": 1.5,
      "prices": 1.5,
      "jobs": -1,
      "ownership": -0.5,
      "stability": 0
     },
     "reason": "Prices and productivity: cheap energy and wide AI use help an energy importer, but its car and machinery exports face AI-native rivals."
    }
   },
   {
    "entity": "THA",
    "si": {
     "abundance": 0.09,
     "better": 0.64,
     "stagnation": 0.12,
     "decline": 0.08,
     "collapse": 0.07
    },
    "noSi": {
     "abundance": 0.002,
     "better": 0.66,
     "stagnation": 0.17,
     "decline": 0.095,
     "collapse": 0.073
    },
    "reading": {
     "channels": {
      "productivity": 1,
      "prices": 1.5,
      "jobs": -1,
      "ownership": -0.5,
      "stability": -0.5
     },
     "reason": "Productivity: robots and AI can offset a fast-ageing workforce, but car-parts, electronics and tourism exports are exposed to automation."
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
     "abundance": 0.059999999999999984,
     "better": 0.7499999999999999,
     "stagnation": 0.04999999999999999,
     "decline": 0.04999999999999999,
     "collapse": 0.08999999999999998
    },
    "noSi": {
     "abundance": 0.001,
     "better": 0.79,
     "stagnation": 0.06,
     "decline": 0.06,
     "collapse": 0.089
    },
    "reading": {
     "channels": {
      "productivity": 1.5,
      "prices": 1.5,
      "jobs": -1,
      "ownership": -1,
      "stability": -0.5
     },
     "reason": "Cheaper goods and wide diffusion help a poor, AI-literate population, but IT and outsourcing exports are what AI replaces first."
    }
   },
   {
    "entity": "CHN",
    "si": {
     "abundance": 0.13999999999999999,
     "better": 0.6699999999999999,
     "stagnation": 0.04999999999999999,
     "decline": 0.059999999999999984,
     "collapse": 0.07999999999999999
    },
    "noSi": {
     "abundance": 0.003,
     "better": 0.79,
     "stagnation": 0.08,
     "decline": 0.06,
     "collapse": 0.067
    },
    "reading": {
     "channels": {
      "productivity": 1.5,
      "prices": 1.5,
      "jobs": -0.5,
      "ownership": 1.5,
      "stability": -1
     },
     "reason": "China owns compute, models and robot factories, so it captures AI rents; the drag is power concentration and an arms race with the US."
    }
   },
   {
    "entity": "USA",
    "si": {
     "abundance": 0.29999999999999993,
     "better": 0.5399999999999999,
     "stagnation": 0.059999999999999984,
     "decline": 0.039999999999999994,
     "collapse": 0.059999999999999984
    },
    "noSi": {
     "abundance": 0.005,
     "better": 0.765,
     "stagnation": 0.1,
     "decline": 0.07,
     "collapse": 0.06
    },
    "reading": {
     "channels": {
      "productivity": 2,
      "prices": 1.5,
      "jobs": -1,
      "ownership": 2,
      "stability": -1
     },
     "reason": "The US owns most frontier compute and models, so ownership and productivity dominate; white-collar job losses and polarisation drag."
    }
   },
   {
    "entity": "IDN",
    "si": {
     "abundance": 0.059999999999999984,
     "better": 0.7599999999999998,
     "stagnation": 0.059999999999999984,
     "decline": 0.059999999999999984,
     "collapse": 0.059999999999999984
    },
    "noSi": {
     "abundance": 0.002,
     "better": 0.8,
     "stagnation": 0.08,
     "decline": 0.06,
     "collapse": 0.058
    },
    "reading": {
     "channels": {
      "productivity": 1,
      "prices": 1.5,
      "jobs": -0.5,
      "ownership": -0.5,
      "stability": -0.5
     },
     "reason": "A large domestic market and nickel for batteries keep it relevant; cheaper goods and medicine outweigh modest export job losses."
    }
   },
   {
    "entity": "PAK",
    "si": {
     "abundance": 0.03,
     "better": 0.62,
     "stagnation": 0.11,
     "decline": 0.09,
     "collapse": 0.15
    },
    "noSi": {
     "abundance": 0.001,
     "better": 0.66,
     "stagnation": 0.12,
     "decline": 0.09,
     "collapse": 0.129
    },
    "reading": {
     "channels": {
      "productivity": 0.5,
      "prices": 1.5,
      "jobs": -1,
      "ownership": -1,
      "stability": -1
     },
     "reason": "Textile exports and Gulf remittances are exposed and a fragile military-led state gains surveillance power; cheaper goods only partly offset."
    }
   },
   {
    "entity": "NGA",
    "si": {
     "abundance": 0.035,
     "better": 0.585,
     "stagnation": 0.15,
     "decline": 0.1,
     "collapse": 0.13
    },
    "noSi": {
     "abundance": 0.001,
     "better": 0.57,
     "stagnation": 0.17,
     "decline": 0.12,
     "collapse": 0.139
    },
    "reading": {
     "channels": {
      "productivity": 0.5,
      "prices": 1.5,
      "jobs": -0.5,
      "ownership": -1,
      "stability": -0.5
     },
     "reason": "Cheap medicine, solar and AI services help a poor, young population most, but falling oil rents and a weak state limit the gains."
    }
   },
   {
    "entity": "BRA",
    "si": {
     "abundance": 0.08,
     "better": 0.72,
     "stagnation": 0.09,
     "decline": 0.06,
     "collapse": 0.05
    },
    "noSi": {
     "abundance": 0.001,
     "better": 0.72,
     "stagnation": 0.14,
     "decline": 0.08,
     "collapse": 0.059
    },
    "reading": {
     "channels": {
      "productivity": 1,
      "prices": 1.5,
      "jobs": -0.5,
      "ownership": -0.5,
      "stability": -0.5
     },
     "reason": "Fairly high AI use helps and a commodity exporter loses few jobs to AI, but deep inequality and crime limit how widely gains spread."
    }
   },
   {
    "entity": "BGD",
    "si": {
     "abundance": 0.03500000000000001,
     "better": 0.6900000000000001,
     "stagnation": 0.10000000000000002,
     "decline": 0.08000000000000002,
     "collapse": 0.09500000000000001
    },
    "noSi": {
     "abundance": 0.0010000000000000002,
     "better": 0.7300000000000001,
     "stagnation": 0.10000000000000002,
     "decline": 0.08000000000000002,
     "collapse": 0.08900000000000001
    },
    "reading": {
     "channels": {
      "productivity": 0.5,
      "prices": 1.5,
      "jobs": -1.5,
      "ownership": -1,
      "stability": -0.5
     },
     "reason": "Garment exports and remittances are routine labour that robots replace, and AI use is very low; cheaper goods only partly offset the loss."
    }
   },
   {
    "entity": "RUS",
    "si": {
     "abundance": 0.05,
     "better": 0.55,
     "stagnation": 0.17,
     "decline": 0.11,
     "collapse": 0.12
    },
    "noSi": {
     "abundance": 0.002,
     "better": 0.6,
     "stagnation": 0.18,
     "decline": 0.11,
     "collapse": 0.108
    },
    "reading": {
     "channels": {
      "productivity": 0.5,
      "prices": 0.5,
      "jobs": 0,
      "ownership": -1,
      "stability": -1.5
     },
     "reason": "Cheaper energy erodes its oil and gas rents, sanctions limit AI access, and an authoritarian state at war uses AI for control."
    }
   },
   {
    "entity": "ETH",
    "si": {
     "abundance": 0.03,
     "better": 0.67,
     "stagnation": 0.11,
     "decline": 0.08,
     "collapse": 0.11
    },
    "noSi": {
     "abundance": 0.001,
     "better": 0.66,
     "stagnation": 0.12,
     "decline": 0.09,
     "collapse": 0.129
    },
    "reading": {
     "channels": {
      "productivity": 0.5,
      "prices": 2,
      "jobs": -0.5,
      "ownership": -1,
      "stability": -0.5
     },
     "reason": "Very poor households gain most from cheap medicine, energy and farming advice; little AI access and a fragile state limit the rest."
    }
   },
   {
    "entity": "MEX",
    "si": {
     "abundance": 0.08,
     "better": 0.67,
     "stagnation": 0.12,
     "decline": 0.07,
     "collapse": 0.06
    },
    "noSi": {
     "abundance": 0.001,
     "better": 0.71,
     "stagnation": 0.15,
     "decline": 0.08,
     "collapse": 0.059
    },
    "reading": {
     "channels": {
      "productivity": 1,
      "prices": 1.5,
      "jobs": -1,
      "ownership": -0.5,
      "stability": -1
     },
     "reason": "US proximity spreads AI gains, but export assembly and remittances from US jobs are exposed, and cartels can exploit new tools."
    }
   },
   {
    "entity": "JPN",
    "si": {
     "abundance": 0.2,
     "better": 0.61,
     "stagnation": 0.09,
     "decline": 0.05,
     "collapse": 0.05
    },
    "noSi": {
     "abundance": 0.003,
     "better": 0.597,
     "stagnation": 0.25,
     "decline": 0.1,
     "collapse": 0.05
    },
    "reading": {
     "channels": {
      "productivity": 1.5,
      "prices": 1.5,
      "jobs": 0,
      "ownership": 0,
      "stability": 0
     },
     "reason": "Robots and AI fill an ageing workforce's gaps and cheaper energy eases import dependence; it owns robotics but not frontier models."
    }
   },
   {
    "entity": "EGY",
    "si": {
     "abundance": 0.04,
     "better": 0.64,
     "stagnation": 0.13,
     "decline": 0.09,
     "collapse": 0.1
    },
    "noSi": {
     "abundance": 0.001,
     "better": 0.62,
     "stagnation": 0.16,
     "decline": 0.11,
     "collapse": 0.109
    },
    "reading": {
     "channels": {
      "productivity": 0.5,
      "prices": 1.5,
      "jobs": -0.5,
      "ownership": -0.5,
      "stability": -1
     },
     "reason": "Cheap energy for desalination and cheaper food imports matter most to a Nile-dependent state; authoritarian control limits the rest."
    }
   },
   {
    "entity": "PHL",
    "si": {
     "abundance": 0.04,
     "better": 0.7,
     "stagnation": 0.11,
     "decline": 0.08,
     "collapse": 0.07
    },
    "noSi": {
     "abundance": 0.002,
     "better": 0.76,
     "stagnation": 0.1,
     "decline": 0.07,
     "collapse": 0.068
    },
    "reading": {
     "channels": {
      "productivity": 1,
      "prices": 1.5,
      "jobs": -1.5,
      "ownership": -1,
      "stability": -0.5
     },
     "reason": "Call-centre outsourcing and overseas workers' remittances are exactly the labour AI and robots replace, despite fairly high AI use."
    }
   },
   {
    "entity": "COD",
    "si": {
     "abundance": 0.025,
     "better": 0.575,
     "stagnation": 0.16,
     "decline": 0.1,
     "collapse": 0.14
    },
    "noSi": {
     "abundance": 0.0002,
     "better": 0.57,
     "stagnation": 0.18,
     "decline": 0.11,
     "collapse": 0.1398
    },
    "reading": {
     "channels": {
      "productivity": 0,
      "prices": 1.5,
      "jobs": 0,
      "ownership": -0.5,
      "stability": -1
     },
     "reason": "Cheap medicine and solar help the very poor, but AI-era demand for its cobalt and copper may feed conflict more than households."
    }
   },
   {
    "entity": "VNM",
    "si": {
     "abundance": 0.06999999999999999,
     "better": 0.7599999999999998,
     "stagnation": 0.059999999999999984,
     "decline": 0.054999999999999986,
     "collapse": 0.054999999999999986
    },
    "noSi": {
     "abundance": 0.0019999999999999996,
     "better": 0.8099999999999998,
     "stagnation": 0.06999999999999999,
     "decline": 0.059999999999999984,
     "collapse": 0.05799999999999999
    },
    "reading": {
     "channels": {
      "productivity": 1.5,
      "prices": 1.5,
      "jobs": -1.5,
      "ownership": -0.5,
      "stability": -0.5
     },
     "reason": "High AI uptake and a capable state help, but its electronics-assembly export model is the routine manufacturing robots replace."
    }
   },
   {
    "entity": "IRN",
    "si": {
     "abundance": 0.03,
     "better": 0.59,
     "stagnation": 0.14,
     "decline": 0.09,
     "collapse": 0.15
    },
    "noSi": {
     "abundance": 0.001,
     "better": 0.62,
     "stagnation": 0.15,
     "decline": 0.1,
     "collapse": 0.129
    },
    "reading": {
     "channels": {
      "productivity": 0.5,
      "prices": 1,
      "jobs": 0,
      "ownership": -1,
      "stability": -1.5
     },
     "reason": "Sanctions cut its AI access and cheap energy cuts oil rents, while a repressive state in conflict with Israel and the US gains surveillance."
    }
   },
   {
    "entity": "TUR",
    "si": {
     "abundance": 0.1,
     "better": 0.66,
     "stagnation": 0.11,
     "decline": 0.07,
     "collapse": 0.06
    },
    "noSi": {
     "abundance": 0.002,
     "better": 0.68,
     "stagnation": 0.15,
     "decline": 0.1,
     "collapse": 0.068
    },
    "reading": {
     "channels": {
      "productivity": 1,
      "prices": 1.5,
      "jobs": -1,
      "ownership": -0.5,
      "stability": -0.5
     },
     "reason": "Cheaper energy helps a country importing 70% of its energy, but textile and car-assembly exports are exposed to automation."
    }
   },
   {
    "entity": "DEU",
    "si": {
     "abundance": 0.25,
     "better": 0.56,
     "stagnation": 0.09,
     "decline": 0.05,
     "collapse": 0.05
    },
    "noSi": {
     "abundance": 0.003,
     "better": 0.717,
     "stagnation": 0.15,
     "decline": 0.08,
     "collapse": 0.05
    },
    "reading": {
     "channels": {
      "productivity": 1.5,
      "prices": 1.5,
      "jobs": -0.5,
      "ownership": -0.5,
      "stability": 0
     },
     "reason": "High AI use and a strong state spread gains widely; it imports frontier models, and its engineering exports face AI and Chinese rivals."
    }
   },
   {
    "entity": "THA",
    "si": {
     "abundance": 0.07,
     "better": 0.72,
     "stagnation": 0.09,
     "decline": 0.06,
     "collapse": 0.06
    },
    "noSi": {
     "abundance": 0.002,
     "better": 0.74,
     "stagnation": 0.12,
     "decline": 0.08,
     "collapse": 0.058
    },
    "reading": {
     "channels": {
      "productivity": 1,
      "prices": 1.5,
      "jobs": -1,
      "ownership": -0.5,
      "stability": -0.5
     },
     "reason": "Robots offset a fast-ageing workforce and tourism resists automation, but car-assembly exports are exposed and coups recur."
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
     "abundance": 0.27,
     "better": 0.51,
     "stagnation": 0.085,
     "decline": 0.06,
     "collapse": 0.075
    },
    "noSi": {
     "abundance": 0.006,
     "better": 0.64,
     "stagnation": 0.18,
     "decline": 0.1,
     "collapse": 0.074
    },
    "reading": {
     "channels": {
      "productivity": 1.5,
      "prices": 1.5,
      "jobs": -1,
      "ownership": 0,
      "stability": -0.5
     },
     "reason": "Jobs: a finance and professional-services exporter loses income as AI does that work; high AI uptake and cheaper goods still net positive."
    }
   },
   {
    "entity": "FRA",
    "si": {
     "abundance": 0.25,
     "better": 0.52,
     "stagnation": 0.09,
     "decline": 0.065,
     "collapse": 0.075
    },
    "noSi": {
     "abundance": 0.006,
     "better": 0.61,
     "stagnation": 0.2,
     "decline": 0.11,
     "collapse": 0.074
    },
    "reading": {
     "channels": {
      "productivity": 1.5,
      "prices": 1.5,
      "jobs": -0.5,
      "ownership": 0,
      "stability": -0.5
     },
     "reason": "Productivity: heavy AI use and nuclear power for compute favour gains, though political fragility and risk of unrest temper them."
    }
   },
   {
    "entity": "ZAF",
    "si": {
     "abundance": 0.05,
     "better": 0.54,
     "stagnation": 0.15,
     "decline": 0.12,
     "collapse": 0.14
    },
    "noSi": {
     "abundance": 0.001,
     "better": 0.53,
     "stagnation": 0.2,
     "decline": 0.14,
     "collapse": 0.129
    },
    "reading": {
     "channels": {
      "productivity": 1,
      "prices": 1.5,
      "jobs": -1,
      "ownership": -0.5,
      "stability": -1
     },
     "reason": "Stability: the world's highest inequality and mass unemployment make automation-driven unrest the swing factor; cheaper medicine and energy help."
    }
   },
   {
    "entity": "ITA",
    "si": {
     "abundance": 0.19000000000000003,
     "better": 0.5400000000000001,
     "stagnation": 0.12000000000000001,
     "decline": 0.07500000000000001,
     "collapse": 0.07500000000000001
    },
    "noSi": {
     "abundance": 0.004,
     "better": 0.52,
     "stagnation": 0.25,
     "decline": 0.146,
     "collapse": 0.08
    },
    "reading": {
     "channels": {
      "productivity": 1,
      "prices": 1.5,
      "jobs": -0.5,
      "ownership": -0.5,
      "stability": -0.5
     },
     "reason": "Productivity: robots offset one of the fastest-ageing workforces in Europe, but slow AI adoption by small firms limits the gain."
    }
   },
   {
    "entity": "KEN",
    "si": {
     "abundance": 0.06,
     "better": 0.635,
     "stagnation": 0.11,
     "decline": 0.08,
     "collapse": 0.115
    },
    "noSi": {
     "abundance": 0.001,
     "better": 0.64,
     "stagnation": 0.14,
     "decline": 0.09,
     "collapse": 0.129
    },
    "reading": {
     "channels": {
      "productivity": 1,
      "prices": 1.5,
      "jobs": -0.5,
      "ownership": -1,
      "stability": -0.5
     },
     "reason": "Prices: cheaper medicine, energy and farm inputs reach a poor, mobile-first population even with little local AI use or compute ownership."
    }
   },
   {
    "entity": "COL",
    "si": {
     "abundance": 0.07000000000000002,
     "better": 0.6300000000000001,
     "stagnation": 0.13000000000000003,
     "decline": 0.09000000000000001,
     "collapse": 0.08000000000000002
    },
    "noSi": {
     "abundance": 0.0010000000000000002,
     "better": 0.6200000000000001,
     "stagnation": 0.18000000000000002,
     "decline": 0.11000000000000001,
     "collapse": 0.08900000000000001
    },
    "reading": {
     "channels": {
      "productivity": 1,
      "prices": 1.5,
      "jobs": -1,
      "ownership": -0.5,
      "stability": -0.5
     },
     "reason": "Jobs: a growing call-centre and services-export base is exposed to AI, offset by cheaper goods and medicine for consumers."
    }
   },
   {
    "entity": "KOR",
    "si": {
     "abundance": 0.26000000000000006,
     "better": 0.5200000000000001,
     "stagnation": 0.08000000000000002,
     "decline": 0.060000000000000005,
     "collapse": 0.08000000000000002
    },
    "noSi": {
     "abundance": 0.004,
     "better": 0.58,
     "stagnation": 0.2,
     "decline": 0.12,
     "collapse": 0.096
    },
    "reading": {
     "channels": {
      "productivity": 2,
      "prices": 1,
      "jobs": -0.5,
      "ownership": 1,
      "stability": -0.5
     },
     "reason": "Ownership: Korea makes the memory chips and robots SI runs on, and automation offsets the world's lowest fertility."
    }
   },
   {
    "entity": "ESP",
    "si": {
     "abundance": 0.20000000000000004,
     "better": 0.5400000000000001,
     "stagnation": 0.11000000000000001,
     "decline": 0.07000000000000002,
     "collapse": 0.08000000000000002
    },
    "noSi": {
     "abundance": 0.004,
     "better": 0.56,
     "stagnation": 0.23,
     "decline": 0.126,
     "collapse": 0.08
    },
    "reading": {
     "channels": {
      "productivity": 1.5,
      "prices": 1.5,
      "jobs": -0.5,
      "ownership": -0.5,
      "stability": -0.5
     },
     "reason": "Productivity and prices: high AI uptake and cheap solar power lift living standards despite the exposure of tourism and services jobs."
    }
   },
   {
    "entity": "ARG",
    "si": {
     "abundance": 0.1,
     "better": 0.63,
     "stagnation": 0.12,
     "decline": 0.08,
     "collapse": 0.07
    },
    "noSi": {
     "abundance": 0.002,
     "better": 0.62,
     "stagnation": 0.19,
     "decline": 0.115,
     "collapse": 0.073
    },
    "reading": {
     "channels": {
      "productivity": 1,
      "prices": 1.5,
      "jobs": -0.5,
      "ownership": -0.5,
      "stability": -0.5
     },
     "reason": "Prices: cheaper goods and services lift a commodity exporter whose own AI ownership and macro management are weak."
    }
   },
   {
    "entity": "CAN",
    "si": {
     "abundance": 0.31999999999999995,
     "better": 0.4899999999999999,
     "stagnation": 0.06999999999999999,
     "decline": 0.04999999999999999,
     "collapse": 0.06999999999999999
    },
    "noSi": {
     "abundance": 0.01,
     "better": 0.67,
     "stagnation": 0.16,
     "decline": 0.1,
     "collapse": 0.06
    },
    "reading": {
     "channels": {
      "productivity": 1.5,
      "prices": 1.5,
      "jobs": -0.5,
      "ownership": 0.5,
      "stability": 0
     },
     "reason": "Productivity: high AI use, cheap energy and land for data centres, and close ties to US AI firms put Canada near the front."
    }
   },
   {
    "entity": "UKR",
    "si": {
     "abundance": 0.08000000000000002,
     "better": 0.5700000000000001,
     "stagnation": 0.11000000000000001,
     "decline": 0.10000000000000002,
     "collapse": 0.14000000000000004
    },
    "noSi": {
     "abundance": 0.002,
     "better": 0.58,
     "stagnation": 0.15,
     "decline": 0.13,
     "collapse": 0.138
    },
    "reading": {
     "channels": {
      "productivity": 1,
      "prices": 1.5,
      "jobs": -0.5,
      "ownership": -0.5,
      "stability": -1
     },
     "reason": "Stability: AI-driven warfare with Russia is the swing factor; reconstruction and EU integration could carry SI gains in."
    }
   },
   {
    "entity": "SAU",
    "si": {
     "abundance": 0.11,
     "better": 0.55,
     "stagnation": 0.13,
     "decline": 0.1,
     "collapse": 0.11
    },
    "noSi": {
     "abundance": 0.002,
     "better": 0.48,
     "stagnation": 0.21,
     "decline": 0.17,
     "collapse": 0.138
    },
    "reading": {
     "channels": {
      "productivity": 1,
      "prices": 0.5,
      "jobs": 0,
      "ownership": 0.5,
      "stability": -0.5
     },
     "reason": "Ownership: oil money buying compute and data centres can replace fading oil rents, though cheaper energy cuts export income."
    }
   },
   {
    "entity": "POL",
    "si": {
     "abundance": 0.16999999999999998,
     "better": 0.5499999999999999,
     "stagnation": 0.11999999999999997,
     "decline": 0.06999999999999999,
     "collapse": 0.08999999999999998
    },
    "noSi": {
     "abundance": 0.004,
     "better": 0.646,
     "stagnation": 0.16,
     "decline": 0.1,
     "collapse": 0.09
    },
    "reading": {
     "channels": {
      "productivity": 1,
      "prices": 1.5,
      "jobs": -1,
      "ownership": -0.5,
      "stability": -0.5
     },
     "reason": "Jobs: Poland's large business-services and assembly export base is exposed to AI, partly offset by cheaper energy for a coal-heavy importer."
    }
   },
   {
    "entity": "AUS",
    "si": {
     "abundance": 0.3,
     "better": 0.5,
     "stagnation": 0.08,
     "decline": 0.05,
     "collapse": 0.07
    },
    "noSi": {
     "abundance": 0.008,
     "better": 0.66,
     "stagnation": 0.17,
     "decline": 0.092,
     "collapse": 0.07
    },
    "reading": {
     "channels": {
      "productivity": 1.5,
      "prices": 1.5,
      "jobs": -0.5,
      "ownership": 0,
      "stability": 0
     },
     "reason": "Productivity: very high AI use and minerals the SI build-out needs favour gains, though Australia owns little compute itself."
    }
   },
   {
    "entity": "NLD",
    "si": {
     "abundance": 0.31,
     "better": 0.5,
     "stagnation": 0.075,
     "decline": 0.05,
     "collapse": 0.065
    },
    "noSi": {
     "abundance": 0.008,
     "better": 0.67,
     "stagnation": 0.17,
     "decline": 0.09,
     "collapse": 0.062
    },
    "reading": {
     "channels": {
      "productivity": 1.5,
      "prices": 1.5,
      "jobs": -0.5,
      "ownership": 1,
      "stability": 0
     },
     "reason": "Ownership: ASML's hold on chipmaking tools and a capable tax state let the Netherlands share in AI profits."
    }
   },
   {
    "entity": "SWE",
    "si": {
     "abundance": 0.29,
     "better": 0.52,
     "stagnation": 0.075,
     "decline": 0.05,
     "collapse": 0.065
    },
    "noSi": {
     "abundance": 0.008,
     "better": 0.68,
     "stagnation": 0.165,
     "decline": 0.087,
     "collapse": 0.06
    },
    "reading": {
     "channels": {
      "productivity": 1.5,
      "prices": 1,
      "jobs": -0.5,
      "ownership": 0.5,
      "stability": 0
     },
     "reason": "Productivity: strong digital adoption, clean cheap power and an effective redistributive state spread AI gains widely."
    }
   },
   {
    "entity": "NOR",
    "si": {
     "abundance": 0.33999999999999997,
     "better": 0.47999999999999987,
     "stagnation": 0.06999999999999999,
     "decline": 0.04999999999999999,
     "collapse": 0.059999999999999984
    },
    "noSi": {
     "abundance": 0.012,
     "better": 0.66,
     "stagnation": 0.18,
     "decline": 0.09,
     "collapse": 0.058
    },
    "reading": {
     "channels": {
      "productivity": 1.5,
      "prices": 1,
      "jobs": 0,
      "ownership": 1,
      "stability": 0
     },
     "reason": "Ownership: the sovereign fund holds a slice of the global AI firms, so Norway shares in SI profits even without its own labs."
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
     "better": 0.49,
     "stagnation": 0.09,
     "decline": 0.07,
     "collapse": 0.07
    },
    "noSi": {
     "abundance": 0.004,
     "better": 0.64,
     "stagnation": 0.19,
     "decline": 0.1,
     "collapse": 0.066
    },
    "reading": {
     "channels": {
      "productivity": 1.5,
      "prices": 1,
      "jobs": -1,
      "ownership": 0.5,
      "stability": -0.5
     },
     "reason": "Jobs: finance and business-services exports face AI displacement, though high AI use and a strong research base lift productivity."
    }
   },
   {
    "entity": "FRA",
    "si": {
     "abundance": 0.27,
     "better": 0.5,
     "stagnation": 0.09,
     "decline": 0.07,
     "collapse": 0.07
    },
    "noSi": {
     "abundance": 0.004,
     "better": 0.61,
     "stagnation": 0.21,
     "decline": 0.11,
     "collapse": 0.066
    },
    "reading": {
     "channels": {
      "productivity": 1.5,
      "prices": 1,
      "jobs": -0.5,
      "ownership": 0.5,
      "stability": -0.5
     },
     "reason": "Productivity: broad AI uptake and nuclear power for compute, with redistribution spreading gains; fiscal and political strain is the drag."
    }
   },
   {
    "entity": "ZAF",
    "si": {
     "abundance": 0.05,
     "better": 0.57,
     "stagnation": 0.15,
     "decline": 0.1,
     "collapse": 0.13
    },
    "noSi": {
     "abundance": 0.0002,
     "better": 0.55,
     "stagnation": 0.2,
     "decline": 0.12,
     "collapse": 0.1298
    },
    "reading": {
     "channels": {
      "productivity": 1,
      "prices": 1.5,
      "jobs": -1,
      "ownership": -0.5,
      "stability": -1
     },
     "reason": "Prices: cheaper energy, medicine and goods help most, but BPO and mining jobs face automation and extreme inequality risks unrest."
    }
   },
   {
    "entity": "ITA",
    "si": {
     "abundance": 0.22,
     "better": 0.51,
     "stagnation": 0.12,
     "decline": 0.08,
     "collapse": 0.07
    },
    "noSi": {
     "abundance": 0.002,
     "better": 0.54,
     "stagnation": 0.25,
     "decline": 0.13,
     "collapse": 0.078
    },
    "reading": {
     "channels": {
      "productivity": 1,
      "prices": 1.5,
      "jobs": -0.5,
      "ownership": 0,
      "stability": -0.5
     },
     "reason": "Prices and robots: cheaper energy and automated care offset a shrinking workforce, but small firms adopt AI slowly."
    }
   },
   {
    "entity": "KEN",
    "si": {
     "abundance": 0.04,
     "better": 0.65,
     "stagnation": 0.11,
     "decline": 0.08,
     "collapse": 0.12
    },
    "noSi": {
     "abundance": 0.0001,
     "better": 0.65,
     "stagnation": 0.14,
     "decline": 0.08,
     "collapse": 0.1299
    },
    "reading": {
     "channels": {
      "productivity": 1,
      "prices": 1.5,
      "jobs": -1,
      "ownership": -1,
      "stability": -0.5
     },
     "reason": "Prices: cheap medicine, energy and food tech help most, but AI wipes out the BPO and data-labelling work that was a path up."
    }
   },
   {
    "entity": "COL",
    "si": {
     "abundance": 0.08000000000000002,
     "better": 0.6000000000000001,
     "stagnation": 0.14000000000000004,
     "decline": 0.09000000000000001,
     "collapse": 0.09000000000000001
    },
    "noSi": {
     "abundance": 0.0003,
     "better": 0.63,
     "stagnation": 0.18,
     "decline": 0.1,
     "collapse": 0.0897
    },
    "reading": {
     "channels": {
      "productivity": 1,
      "prices": 1.5,
      "jobs": -1,
      "ownership": -0.5,
      "stability": -1
     },
     "reason": "Prices help consumers, but call-centre jobs, fading oil and coal rents and armed groups cancel much of the gain."
    }
   },
   {
    "entity": "KOR",
    "si": {
     "abundance": 0.25000000000000006,
     "better": 0.5100000000000001,
     "stagnation": 0.09000000000000001,
     "decline": 0.07000000000000002,
     "collapse": 0.08000000000000002
    },
    "noSi": {
     "abundance": 0.0030000000000000005,
     "better": 0.6000000000000001,
     "stagnation": 0.19000000000000003,
     "decline": 0.12000000000000001,
     "collapse": 0.08700000000000001
    },
    "reading": {
     "channels": {
      "productivity": 2,
      "prices": 1,
      "jobs": -0.5,
      "ownership": 1,
      "stability": -0.5
     },
     "reason": "Ownership: memory chips and the densest robot base let AI offset a collapsing workforce; regional war risk is the drag."
    }
   },
   {
    "entity": "ESP",
    "si": {
     "abundance": 0.23,
     "better": 0.52,
     "stagnation": 0.11,
     "decline": 0.07,
     "collapse": 0.07
    },
    "noSi": {
     "abundance": 0.0020000000000000005,
     "better": 0.5700000000000001,
     "stagnation": 0.23000000000000004,
     "decline": 0.12000000000000001,
     "collapse": 0.07800000000000001
    },
    "reading": {
     "channels": {
      "productivity": 1.5,
      "prices": 1.5,
      "jobs": -0.5,
      "ownership": 0,
      "stability": -0.5
     },
     "reason": "Prices: cheap solar and desalination ease energy imports and drought, and tourism resists automation better than office work."
    }
   },
   {
    "entity": "ARG",
    "si": {
     "abundance": 0.10000000000000002,
     "better": 0.5900000000000001,
     "stagnation": 0.14000000000000004,
     "decline": 0.09000000000000001,
     "collapse": 0.08000000000000002
    },
    "noSi": {
     "abundance": 0.0005,
     "better": 0.6,
     "stagnation": 0.2,
     "decline": 0.12,
     "collapse": 0.0795
    },
    "reading": {
     "channels": {
      "productivity": 1,
      "prices": 1.5,
      "jobs": -0.5,
      "ownership": -0.5,
      "stability": -0.5
     },
     "reason": "Prices: cheaper goods help, and food and lithium stay in demand, but chronic macro instability limits gains reaching households."
    }
   },
   {
    "entity": "CAN",
    "si": {
     "abundance": 0.33,
     "better": 0.47,
     "stagnation": 0.08,
     "decline": 0.06,
     "collapse": 0.06
    },
    "noSi": {
     "abundance": 0.006,
     "better": 0.67,
     "stagnation": 0.17,
     "decline": 0.095,
     "collapse": 0.059
    },
    "reading": {
     "channels": {
      "productivity": 1.5,
      "prices": 1,
      "jobs": -0.5,
      "ownership": 0.5,
      "stability": -0.5
     },
     "reason": "Productivity: deep AI talent, cheap hydro and land for compute, and pension funds owning global equities spread gains widely."
    }
   },
   {
    "entity": "UKR",
    "si": {
     "abundance": 0.07000000000000002,
     "better": 0.5800000000000001,
     "stagnation": 0.13000000000000003,
     "decline": 0.10000000000000002,
     "collapse": 0.12000000000000001
    },
    "noSi": {
     "abundance": 0.0003,
     "better": 0.61,
     "stagnation": 0.15,
     "decline": 0.11,
     "collapse": 0.1297
    },
    "reading": {
     "channels": {
      "productivity": 1,
      "prices": 1.5,
      "jobs": -1,
      "ownership": -0.5,
      "stability": -1
     },
     "reason": "Stability: on the frontline of an AI-boosted arms race with Russia, security decides everything; its IT outsourcing is also exposed."
    }
   },
   {
    "entity": "SAU",
    "si": {
     "abundance": 0.13,
     "better": 0.53,
     "stagnation": 0.14,
     "decline": 0.1,
     "collapse": 0.1
    },
    "noSi": {
     "abundance": 0.001,
     "better": 0.52,
     "stagnation": 0.22,
     "decline": 0.15,
     "collapse": 0.109
    },
    "reading": {
     "channels": {
      "productivity": 1,
      "prices": 0,
      "jobs": 0,
      "ownership": 1,
      "stability": -0.5
     },
     "reason": "Ownership: sovereign wealth and cheap energy buy compute and robots, but cheaper energy erodes the oil rents that fund the state."
    }
   },
   {
    "entity": "POL",
    "si": {
     "abundance": 0.20000000000000004,
     "better": 0.5300000000000001,
     "stagnation": 0.11000000000000001,
     "decline": 0.08000000000000002,
     "collapse": 0.08000000000000002
    },
    "noSi": {
     "abundance": 0.002,
     "better": 0.64,
     "stagnation": 0.16,
     "decline": 0.11,
     "collapse": 0.088
    },
    "reading": {
     "channels": {
      "productivity": 1.5,
      "prices": 1,
      "jobs": -1,
      "ownership": 0,
      "stability": -0.5
     },
     "reason": "Jobs: shared-services hubs and assembly plants sell exactly the work AI and robots replace, offsetting solid productivity gains."
    }
   },
   {
    "entity": "AUS",
    "si": {
     "abundance": 0.32,
     "better": 0.48,
     "stagnation": 0.08,
     "decline": 0.06,
     "collapse": 0.06
    },
    "noSi": {
     "abundance": 0.006,
     "better": 0.66,
     "stagnation": 0.17,
     "decline": 0.095,
     "collapse": 0.069
    },
    "reading": {
     "channels": {
      "productivity": 1.5,
      "prices": 1,
      "jobs": -0.5,
      "ownership": 1,
      "stability": -0.5
     },
     "reason": "Ownership: minerals for the robot build-out, sun for compute, super funds holding global tech, and very high AI use."
    }
   },
   {
    "entity": "NLD",
    "si": {
     "abundance": 0.33,
     "better": 0.47,
     "stagnation": 0.08,
     "decline": 0.06,
     "collapse": 0.06
    },
    "noSi": {
     "abundance": 0.006,
     "better": 0.66,
     "stagnation": 0.18,
     "decline": 0.093,
     "collapse": 0.061
    },
    "reading": {
     "channels": {
      "productivity": 1.5,
      "prices": 1,
      "jobs": -0.5,
      "ownership": 1,
      "stability": -0.5
     },
     "reason": "Ownership: ASML's lithography monopoly and big pension funds tie Dutch income to the AI build-out, on top of high AI use."
    }
   },
   {
    "entity": "SWE",
    "si": {
     "abundance": 0.31999999999999995,
     "better": 0.4899999999999999,
     "stagnation": 0.06999999999999999,
     "decline": 0.059999999999999984,
     "collapse": 0.059999999999999984
    },
    "noSi": {
     "abundance": 0.006,
     "better": 0.68,
     "stagnation": 0.17,
     "decline": 0.085,
     "collapse": 0.059
    },
    "reading": {
     "channels": {
      "productivity": 1.5,
      "prices": 1,
      "jobs": -0.5,
      "ownership": 0.5,
      "stability": 0
     },
     "reason": "Productivity: cheap clean power, high trust and a welfare state that can spread AI gains to nearly everyone."
    }
   },
   {
    "entity": "NOR",
    "si": {
     "abundance": 0.38,
     "better": 0.45,
     "stagnation": 0.065,
     "decline": 0.05,
     "collapse": 0.055
    },
    "noSi": {
     "abundance": 0.012,
     "better": 0.66,
     "stagnation": 0.19,
     "decline": 0.085,
     "collapse": 0.053
    },
    "reading": {
     "channels": {
      "productivity": 1.5,
      "prices": 0.5,
      "jobs": 0,
      "ownership": 2,
      "stability": 0
     },
     "reason": "Ownership: the oil fund holds about 1.5% of world equities, AI giants included, so Norwegians own a slice of AI profits."
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
     "abundance": 0.28,
     "better": 0.5,
     "stagnation": 0.09,
     "decline": 0.065,
     "collapse": 0.065
    },
    "noSi": {
     "abundance": 0.006,
     "better": 0.66,
     "stagnation": 0.17,
     "decline": 0.09,
     "collapse": 0.074
    },
    "reading": {
     "channels": {
      "productivity": 1.5,
      "prices": 1.5,
      "jobs": -1,
      "ownership": 0,
      "stability": -0.5
     },
     "reason": "Productivity and prices win, but jobs bite: finance, law and consulting exports are the work AI replaces first."
    }
   },
   {
    "entity": "FRA",
    "si": {
     "abundance": 0.27,
     "better": 0.5,
     "stagnation": 0.1,
     "decline": 0.065,
     "collapse": 0.065
    },
    "noSi": {
     "abundance": 0.006,
     "better": 0.63,
     "stagnation": 0.19,
     "decline": 0.1,
     "collapse": 0.074
    },
    "reading": {
     "channels": {
      "productivity": 1.5,
      "prices": 1.5,
      "jobs": -0.5,
      "ownership": 0,
      "stability": -0.5
     },
     "reason": "Productivity: heavy AI use and nuclear power for compute, with a high-tax state able to share gains; fragile politics is the drag."
    }
   },
   {
    "entity": "ZAF",
    "si": {
     "abundance": 0.045,
     "better": 0.55,
     "stagnation": 0.17,
     "decline": 0.11,
     "collapse": 0.125
    },
    "noSi": {
     "abundance": 0.001,
     "better": 0.55,
     "stagnation": 0.21,
     "decline": 0.12,
     "collapse": 0.119
    },
    "reading": {
     "channels": {
      "productivity": 0.5,
      "prices": 1.5,
      "jobs": -1,
      "ownership": -0.5,
      "stability": -0.5
     },
     "reason": "Prices help most (cheap energy and medicine), but mass unemployment makes job losses and unrest a real offset; little AI ownership."
    }
   },
   {
    "entity": "ITA",
    "si": {
     "abundance": 0.22,
     "better": 0.52,
     "stagnation": 0.12,
     "decline": 0.075,
     "collapse": 0.065
    },
    "noSi": {
     "abundance": 0.004,
     "better": 0.55,
     "stagnation": 0.24,
     "decline": 0.13,
     "collapse": 0.076
    },
    "reading": {
     "channels": {
      "productivity": 1,
      "prices": 1.5,
      "jobs": -0.5,
      "ownership": -0.5,
      "stability": -0.5
     },
     "reason": "Productivity: robots and AI offset a shrinking, ageing workforce; little AI ownership and modest uptake limit the gain."
    }
   },
   {
    "entity": "KEN",
    "si": {
     "abundance": 0.045,
     "better": 0.64,
     "stagnation": 0.13,
     "decline": 0.075,
     "collapse": 0.11
    },
    "noSi": {
     "abundance": 0.001,
     "better": 0.66,
     "stagnation": 0.14,
     "decline": 0.085,
     "collapse": 0.114
    },
    "reading": {
     "channels": {
      "productivity": 0.5,
      "prices": 1.5,
      "jobs": -1,
      "ownership": -0.5,
      "stability": -0.5
     },
     "reason": "Prices matter most (cheap medicine, energy, farm tech), but low AI access and exposed BPO and gig work cut income; no ownership."
    }
   },
   {
    "entity": "COL",
    "si": {
     "abundance": 0.09000000000000001,
     "better": 0.6200000000000001,
     "stagnation": 0.13000000000000003,
     "decline": 0.08000000000000002,
     "collapse": 0.08000000000000002
    },
    "noSi": {
     "abundance": 0.001,
     "better": 0.66,
     "stagnation": 0.16,
     "decline": 0.095,
     "collapse": 0.084
    },
    "reading": {
     "channels": {
      "productivity": 1,
      "prices": 1.5,
      "jobs": -1,
      "ownership": -0.5,
      "stability": -0.5
     },
     "reason": "Prices and moderate AI use help; call-centre and BPO jobs are exposed, and armed groups could exploit fast change."
    }
   },
   {
    "entity": "KOR",
    "si": {
     "abundance": 0.3,
     "better": 0.5,
     "stagnation": 0.08,
     "decline": 0.055,
     "collapse": 0.065
    },
    "noSi": {
     "abundance": 0.004,
     "better": 0.6,
     "stagnation": 0.19,
     "decline": 0.12,
     "collapse": 0.086
    },
    "reading": {
     "channels": {
      "productivity": 1.5,
      "prices": 1.5,
      "jobs": -0.5,
      "ownership": 1,
      "stability": -0.5
     },
     "reason": "Productivity and ownership: memory chips and the world's densest robot use turn SI into an answer to its shrinking workforce."
    }
   },
   {
    "entity": "ESP",
    "si": {
     "abundance": 0.24,
     "better": 0.52,
     "stagnation": 0.11,
     "decline": 0.065,
     "collapse": 0.065
    },
    "noSi": {
     "abundance": 0.005000000000000001,
     "better": 0.6000000000000001,
     "stagnation": 0.21000000000000002,
     "decline": 0.11000000000000001,
     "collapse": 0.07500000000000001
    },
    "reading": {
     "channels": {
      "productivity": 1.5,
      "prices": 1.5,
      "jobs": -0.5,
      "ownership": -0.5,
      "stability": -0.5
     },
     "reason": "Productivity and prices: high AI use and cheap solar could make desalination solve its water problem; tourism jobs resist AI."
    }
   },
   {
    "entity": "ARG",
    "si": {
     "abundance": 0.12000000000000001,
     "better": 0.5800000000000001,
     "stagnation": 0.13000000000000003,
     "decline": 0.09000000000000001,
     "collapse": 0.08000000000000002
    },
    "noSi": {
     "abundance": 0.002,
     "better": 0.62,
     "stagnation": 0.18,
     "decline": 0.12,
     "collapse": 0.078
    },
    "reading": {
     "channels": {
      "productivity": 1,
      "prices": 1.5,
      "jobs": -0.5,
      "ownership": 0,
      "stability": -0.5
     },
     "reason": "Prices help, and it sells food, energy and lithium, which keep value when intelligence is cheap; erratic institutions limit the gain."
    }
   },
   {
    "entity": "CAN",
    "si": {
     "abundance": 0.34,
     "better": 0.47,
     "stagnation": 0.08,
     "decline": 0.055,
     "collapse": 0.055
    },
    "noSi": {
     "abundance": 0.008,
     "better": 0.69,
     "stagnation": 0.16,
     "decline": 0.082,
     "collapse": 0.06
    },
    "reading": {
     "channels": {
      "productivity": 1.5,
      "prices": 1.5,
      "jobs": -0.5,
      "ownership": 0.5,
      "stability": -0.5
     },
     "reason": "Productivity, plus ownership through big pension funds and US ties; energy and land for data centres hold value; US dependence is a risk."
    }
   },
   {
    "entity": "UKR",
    "si": {
     "abundance": 0.060000000000000005,
     "better": 0.5800000000000001,
     "stagnation": 0.12000000000000001,
     "decline": 0.10500000000000001,
     "collapse": 0.13500000000000004
    },
    "noSi": {
     "abundance": 0.001,
     "better": 0.62,
     "stagnation": 0.14,
     "decline": 0.11,
     "collapse": 0.129
    },
    "reading": {
     "channels": {
      "productivity": 1,
      "prices": 1.5,
      "jobs": -1,
      "ownership": -0.5,
      "stability": -1
     },
     "reason": "Stability dominates: a frontline state in an AI arms race; IT outsourcing jobs are exposed, though cheaper reconstruction helps."
    }
   },
   {
    "entity": "SAU",
    "si": {
     "abundance": 0.1,
     "better": 0.5,
     "stagnation": 0.17,
     "decline": 0.12,
     "collapse": 0.11
    },
    "noSi": {
     "abundance": 0.002,
     "better": 0.46,
     "stagnation": 0.24,
     "decline": 0.17,
     "collapse": 0.128
    },
    "reading": {
     "channels": {
      "productivity": 1,
      "prices": 0,
      "jobs": 0,
      "ownership": 0.5,
      "stability": -0.5
     },
     "reason": "Ownership: the sovereign fund and cheap energy buy into compute, but cheaper energy erodes oil rents and surveillance can tighten."
    }
   },
   {
    "entity": "POL",
    "si": {
     "abundance": 0.2,
     "better": 0.56,
     "stagnation": 0.1,
     "decline": 0.07,
     "collapse": 0.07
    },
    "noSi": {
     "abundance": 0.005,
     "better": 0.68,
     "stagnation": 0.15,
     "decline": 0.09,
     "collapse": 0.075
    },
    "reading": {
     "channels": {
      "productivity": 1,
      "prices": 1.5,
      "jobs": -1,
      "ownership": -0.5,
      "stability": -0.5
     },
     "reason": "Productivity helps, but shared-services centres and routine manufacturing, Poland's growth model, are the jobs AI replaces."
    }
   },
   {
    "entity": "AUS",
    "si": {
     "abundance": 0.32,
     "better": 0.49,
     "stagnation": 0.08,
     "decline": 0.055,
     "collapse": 0.055
    },
    "noSi": {
     "abundance": 0.008,
     "better": 0.67,
     "stagnation": 0.17,
     "decline": 0.09,
     "collapse": 0.062
    },
    "reading": {
     "channels": {
      "productivity": 1.5,
      "prices": 1.5,
      "jobs": -0.5,
      "ownership": 0.5,
      "stability": -0.5
     },
     "reason": "Productivity: the highest Claude usage index; minerals for the AI build-out and superannuation stakes offset cheaper coal and gas."
    }
   },
   {
    "entity": "NLD",
    "si": {
     "abundance": 0.34,
     "better": 0.47,
     "stagnation": 0.08,
     "decline": 0.055,
     "collapse": 0.055
    },
    "noSi": {
     "abundance": 0.008,
     "better": 0.68,
     "stagnation": 0.16,
     "decline": 0.085,
     "collapse": 0.067
    },
    "reading": {
     "channels": {
      "productivity": 1.5,
      "prices": 1.5,
      "jobs": -0.5,
      "ownership": 1,
      "stability": -0.5
     },
     "reason": "Ownership: ASML's lithography monopoly and large pension funds give it a share of AI profits, on top of high AI use."
    }
   },
   {
    "entity": "SWE",
    "si": {
     "abundance": 0.35,
     "better": 0.47,
     "stagnation": 0.075,
     "decline": 0.05,
     "collapse": 0.055
    },
    "noSi": {
     "abundance": 0.008,
     "better": 0.7,
     "stagnation": 0.16,
     "decline": 0.075,
     "collapse": 0.057
    },
    "reading": {
     "channels": {
      "productivity": 1.5,
      "prices": 1.5,
      "jobs": -0.5,
      "ownership": 0,
      "stability": 0
     },
     "reason": "Productivity, plus a high-capacity welfare state that can spread the gains; clean, cheap power attracts compute."
    }
   },
   {
    "entity": "NOR",
    "si": {
     "abundance": 0.42,
     "better": 0.42,
     "stagnation": 0.07,
     "decline": 0.045,
     "collapse": 0.045
    },
    "noSi": {
     "abundance": 0.01,
     "better": 0.66,
     "stagnation": 0.19,
     "decline": 0.085,
     "collapse": 0.055
    },
    "reading": {
     "channels": {
      "productivity": 1.5,
      "prices": 1,
      "jobs": 0,
      "ownership": 1.5,
      "stability": 0
     },
     "reason": "Ownership: the oil fund holds about 1.5% of world listed equity, including the main AI firms, so SI profits flow home."
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
     "abundance": 0.05,
     "better": 0.74,
     "stagnation": 0.08,
     "decline": 0.06,
     "collapse": 0.07
    },
    "noSi": {
     "abundance": 0.0010000000000000002,
     "better": 0.7600000000000001,
     "stagnation": 0.10000000000000002,
     "decline": 0.06500000000000002,
     "collapse": 0.07400000000000001
    },
    "reading": {
     "channels": {
      "productivity": 1,
      "prices": 1.5,
      "jobs": -0.5,
      "ownership": -1,
      "stability": -0.5
     },
     "reason": "Prices help most: cheap medicine, energy and inputs reach a poor farm economy, while low AI use and no compute ownership cap the gains."
    }
   },
   {
    "entity": "MMR",
    "si": {
     "abundance": 0.03,
     "better": 0.59,
     "stagnation": 0.14,
     "decline": 0.1,
     "collapse": 0.14
    },
    "noSi": {
     "abundance": 0.001,
     "better": 0.62,
     "stagnation": 0.15,
     "decline": 0.1,
     "collapse": 0.129
    },
    "reading": {
     "channels": {
      "productivity": 0.5,
      "prices": 1.5,
      "jobs": -0.5,
      "ownership": -1,
      "stability": -1
     },
     "reason": "Stability dominates: AI surveillance and drones can entrench the junta or prolong war, and garment exports face automation; cheap goods only offset."
    }
   },
   {
    "entity": "SDN",
    "si": {
     "abundance": 0.025,
     "better": 0.52,
     "stagnation": 0.16,
     "decline": 0.12,
     "collapse": 0.175
    },
    "noSi": {
     "abundance": 0.001,
     "better": 0.54,
     "stagnation": 0.17,
     "decline": 0.12,
     "collapse": 0.169
    },
    "reading": {
     "channels": {
      "productivity": 0.5,
      "prices": 1.5,
      "jobs": -0.5,
      "ownership": -1,
      "stability": -1
     },
     "reason": "Stability matters most: cheap drones and AI warfare can prolong factional war; cheap medicine and food help, but the state captures no AI gains."
    }
   },
   {
    "entity": "UGA",
    "si": {
     "abundance": 0.045,
     "better": 0.71,
     "stagnation": 0.09,
     "decline": 0.07,
     "collapse": 0.085
    },
    "noSi": {
     "abundance": 0.0010000000000000002,
     "better": 0.7400000000000001,
     "stagnation": 0.10000000000000002,
     "decline": 0.07500000000000001,
     "collapse": 0.08400000000000002
    },
    "reading": {
     "channels": {
      "productivity": 1,
      "prices": 1.5,
      "jobs": -0.5,
      "ownership": -1,
      "stability": -1
     },
     "reason": "Prices and productivity help a farm economy with ample water, but an entrenched regime using AI surveillance and no compute ownership offset much."
    }
   },
   {
    "entity": "DZA",
    "si": {
     "abundance": 0.06,
     "better": 0.54,
     "stagnation": 0.18,
     "decline": 0.11,
     "collapse": 0.11
    },
    "noSi": {
     "abundance": 0.0010000000000000002,
     "better": 0.6000000000000001,
     "stagnation": 0.19000000000000003,
     "decline": 0.11000000000000001,
     "collapse": 0.09900000000000002
    },
    "reading": {
     "channels": {
      "productivity": 1,
      "prices": 1,
      "jobs": -1,
      "ownership": -1,
      "stability": -0.5
     },
     "reason": "Exports matter most: AI-driven cheap clean energy erodes the gas rents that fund the state; cheap desalination and goods soften the hit."
    }
   },
   {
    "entity": "IRQ",
    "si": {
     "abundance": 0.035,
     "better": 0.44,
     "stagnation": 0.2,
     "decline": 0.16,
     "collapse": 0.165
    },
    "noSi": {
     "abundance": 0.001,
     "better": 0.48,
     "stagnation": 0.21,
     "decline": 0.16,
     "collapse": 0.149
    },
    "reading": {
     "channels": {
      "productivity": 0.5,
      "prices": 1,
      "jobs": -1.5,
      "ownership": -1,
      "stability": -0.5
     },
     "reason": "Exports dominate: SI makes clean energy cheap and shrinks the oil rents that pay public wages; cheaper goods do not replace that income."
    }
   },
   {
    "entity": "AFG",
    "si": {
     "abundance": 0.02,
     "better": 0.55,
     "stagnation": 0.16,
     "decline": 0.12,
     "collapse": 0.15
    },
    "noSi": {
     "abundance": 0.001,
     "better": 0.56,
     "stagnation": 0.17,
     "decline": 0.12,
     "collapse": 0.149
    },
    "reading": {
     "channels": {
      "productivity": 0.5,
      "prices": 1.5,
      "jobs": -0.5,
      "ownership": -1,
      "stability": -1
     },
     "reason": "Prices help most at this poverty level: cheap medicine, food and solar; but internet curbs and a closed regime keep AI access and gains low."
    }
   },
   {
    "entity": "YEM",
    "si": {
     "abundance": 0.02,
     "better": 0.49,
     "stagnation": 0.17,
     "decline": 0.13,
     "collapse": 0.19
    },
    "noSi": {
     "abundance": 0.001,
     "better": 0.5,
     "stagnation": 0.18,
     "decline": 0.13,
     "collapse": 0.189
    },
    "reading": {
     "channels": {
      "productivity": 0.5,
      "prices": 1.5,
      "jobs": -0.5,
      "ownership": -1,
      "stability": -1
     },
     "reason": "Prices matter most: cheap energy could make desalination affordable for a country running out of water, but war and no AI capacity limit the rest."
    }
   },
   {
    "entity": "AGO",
    "si": {
     "abundance": 0.035,
     "better": 0.54,
     "stagnation": 0.18,
     "decline": 0.12,
     "collapse": 0.125
    },
    "noSi": {
     "abundance": 0.0010000000000000002,
     "better": 0.5700000000000001,
     "stagnation": 0.19000000000000003,
     "decline": 0.12000000000000001,
     "collapse": 0.11900000000000001
    },
    "reading": {
     "channels": {
      "productivity": 0.5,
      "prices": 1.5,
      "jobs": -1,
      "ownership": -1,
      "stability": -0.5
     },
     "reason": "Exports dominate: faster clean-energy substitution under SI cuts the oil income that funds the state, while low AI use limits productivity gains."
    }
   },
   {
    "entity": "MAR",
    "si": {
     "abundance": 0.08,
     "better": 0.71,
     "stagnation": 0.09,
     "decline": 0.06,
     "collapse": 0.06
    },
    "noSi": {
     "abundance": 0.001,
     "better": 0.76,
     "stagnation": 0.11,
     "decline": 0.065,
     "collapse": 0.064
    },
    "reading": {
     "channels": {
      "productivity": 1,
      "prices": 1.5,
      "jobs": -1,
      "ownership": -0.5,
      "stability": -0.5
     },
     "reason": "Jobs weigh most: call centres and car assembly face automation, but cheap energy for desalination and solid AI use give net gains."
    }
   },
   {
    "entity": "UZB",
    "si": {
     "abundance": 0.06,
     "better": 0.72,
     "stagnation": 0.09,
     "decline": 0.06,
     "collapse": 0.07
    },
    "noSi": {
     "abundance": 0.001,
     "better": 0.74,
     "stagnation": 0.11,
     "decline": 0.07,
     "collapse": 0.079
    },
    "reading": {
     "channels": {
      "productivity": 1,
      "prices": 1.5,
      "jobs": -0.5,
      "ownership": -1,
      "stability": -0.5
     },
     "reason": "Prices and productivity help a reforming, fully electrified economy; migrant labour and textiles face automation and the state owns no compute."
    }
   },
   {
    "entity": "MYS",
    "si": {
     "abundance": 0.17,
     "better": 0.7,
     "stagnation": 0.06,
     "decline": 0.035,
     "collapse": 0.035
    },
    "noSi": {
     "abundance": 0.008,
     "better": 0.82,
     "stagnation": 0.09,
     "decline": 0.045,
     "collapse": 0.037
    },
    "reading": {
     "channels": {
      "productivity": 1.5,
      "prices": 1,
      "jobs": -1,
      "ownership": 0.5,
      "stability": -0.5
     },
     "reason": "Productivity leads: high AI use and Johor's data-centre and chip-packaging hub, though electronics assembly and service centres face automation."
    }
   },
   {
    "entity": "MOZ",
    "si": {
     "abundance": 0.035,
     "better": 0.63,
     "stagnation": 0.13,
     "decline": 0.09,
     "collapse": 0.115
    },
    "noSi": {
     "abundance": 0.001,
     "better": 0.64,
     "stagnation": 0.14,
     "decline": 0.1,
     "collapse": 0.119
    },
    "reading": {
     "channels": {
      "productivity": 0.5,
      "prices": 1.5,
      "jobs": -0.5,
      "ownership": -1,
      "stability": -0.5
     },
     "reason": "Prices help most where medicine and power are scarce; insurgency, a weak state and little AI capacity limit productivity and ownership gains."
    }
   },
   {
    "entity": "GHA",
    "si": {
     "abundance": 0.06,
     "better": 0.76,
     "stagnation": 0.065,
     "decline": 0.055,
     "collapse": 0.06
    },
    "noSi": {
     "abundance": 0.001,
     "better": 0.8,
     "stagnation": 0.08,
     "decline": 0.06,
     "collapse": 0.059
    },
    "reading": {
     "channels": {
      "productivity": 1,
      "prices": 1.5,
      "jobs": -0.5,
      "ownership": -1,
      "stability": -0.5
     },
     "reason": "Prices and productivity help an English-speaking democracy with fair AI uptake, but it owns no compute and its service exports face automation."
    }
   },
   {
    "entity": "PER",
    "si": {
     "abundance": 0.1,
     "better": 0.7,
     "stagnation": 0.09,
     "decline": 0.055,
     "collapse": 0.055
    },
    "noSi": {
     "abundance": 0.002,
     "better": 0.75,
     "stagnation": 0.12,
     "decline": 0.065,
     "collapse": 0.063
    },
    "reading": {
     "channels": {
      "productivity": 1,
      "prices": 1,
      "jobs": 0,
      "ownership": -0.5,
      "stability": -0.5
     },
     "reason": "Productivity and exports help: high AI use for its income and rising copper demand from the AI build-out; political churn is the main drag."
    }
   },
   {
    "entity": "MDG",
    "si": {
     "abundance": 0.03,
     "better": 0.58,
     "stagnation": 0.15,
     "decline": 0.105,
     "collapse": 0.135
    },
    "noSi": {
     "abundance": 0.001,
     "better": 0.58,
     "stagnation": 0.17,
     "decline": 0.11,
     "collapse": 0.139
    },
    "reading": {
     "channels": {
      "productivity": 0.5,
      "prices": 1.5,
      "jobs": -0.5,
      "ownership": -1,
      "stability": -0.5
     },
     "reason": "Prices help most for a very poor, hungry population, but weak governance and garment and call-centre exports exposed to automation offset gains."
    }
   },
   {
    "entity": "CIV",
    "si": {
     "abundance": 0.05,
     "better": 0.74,
     "stagnation": 0.08,
     "decline": 0.065,
     "collapse": 0.065
    },
    "noSi": {
     "abundance": 0.001,
     "better": 0.77,
     "stagnation": 0.09,
     "decline": 0.07,
     "collapse": 0.069
    },
    "reading": {
     "channels": {
      "productivity": 1,
      "prices": 1.5,
      "jobs": -0.5,
      "ownership": -1,
      "stability": -0.5
     },
     "reason": "Prices and productivity help a fast-growing economy with moderate AI use, but it owns no compute and its state taxes little of the gains."
    }
   },
   {
    "entity": "CMR",
    "si": {
     "abundance": 0.035,
     "better": 0.65,
     "stagnation": 0.125,
     "decline": 0.09,
     "collapse": 0.1
    },
    "noSi": {
     "abundance": 0.001,
     "better": 0.68,
     "stagnation": 0.13,
     "decline": 0.09,
     "collapse": 0.099
    },
    "reading": {
     "channels": {
      "productivity": 0.5,
      "prices": 1.5,
      "jobs": -0.5,
      "ownership": -1,
      "stability": -1
     },
     "reason": "Stability weighs most: a contested succession with AI-enabled repression or unrest, while cheap goods help a poor, mostly farm economy."
    }
   },
   {
    "entity": "NPL",
    "si": {
     "abundance": 0.045,
     "better": 0.71,
     "stagnation": 0.105,
     "decline": 0.07,
     "collapse": 0.07
    },
    "noSi": {
     "abundance": 0.001,
     "better": 0.76,
     "stagnation": 0.11,
     "decline": 0.065,
     "collapse": 0.064
    },
    "reading": {
     "channels": {
      "productivity": 1,
      "prices": 1.5,
      "jobs": -1.5,
      "ownership": -1,
      "stability": -0.5
     },
     "reason": "Jobs weigh most: about a quarter of income is remittances from migrant labour that robots can replace; cheap goods and hydropower help offset it."
    }
   },
   {
    "entity": "VEN",
    "si": {
     "abundance": 0.04,
     "better": 0.63,
     "stagnation": 0.14,
     "decline": 0.085,
     "collapse": 0.105
    },
    "noSi": {
     "abundance": 0.001,
     "better": 0.68,
     "stagnation": 0.14,
     "decline": 0.08,
     "collapse": 0.099
    },
    "reading": {
     "channels": {
      "productivity": 0.5,
      "prices": 1,
      "jobs": -1,
      "ownership": -1,
      "stability": -0.5
     },
     "reason": "Exports weigh most: cheap clean energy under SI erodes the oil reserves a recovery depends on; cheaper goods only partly offset that."
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
     "abundance": 0.03,
     "better": 0.52,
     "stagnation": 0.17,
     "decline": 0.115,
     "collapse": 0.165
    },
    "noSi": {
     "abundance": 0.001,
     "better": 0.5,
     "stagnation": 0.19,
     "decline": 0.13,
     "collapse": 0.179
    },
    "reading": {
     "channels": {
      "productivity": 0.5,
      "prices": 1.5,
      "jobs": -0.5,
      "ownership": -0.5,
      "stability": -1
     },
     "reason": "Prices help most: cheaper solar, medicine and inputs for a country with 21% electricity, but junta rule and insurgency limit what SI delivers."
    }
   },
   {
    "entity": "PRK",
    "si": {
     "abundance": 0.035,
     "better": 0.53,
     "stagnation": 0.17,
     "decline": 0.1,
     "collapse": 0.165
    },
    "noSi": {
     "abundance": 0.002,
     "better": 0.59,
     "stagnation": 0.17,
     "decline": 0.09,
     "collapse": 0.148
    },
    "reading": {
     "channels": {
      "productivity": 0.5,
      "prices": 1,
      "jobs": -0.5,
      "ownership": -1,
      "stability": -1.5
     },
     "reason": "Stability dominates: AI surveillance entrenches the regime and lowers the odds of opening or reunification, on a flashpoint of the AI race."
    }
   },
   {
    "entity": "SYR",
    "si": {
     "abundance": 0.03,
     "better": 0.59,
     "stagnation": 0.13,
     "decline": 0.11,
     "collapse": 0.14
    },
    "noSi": {
     "abundance": 0.002,
     "better": 0.6,
     "stagnation": 0.15,
     "decline": 0.118,
     "collapse": 0.13
    },
    "reading": {
     "channels": {
      "productivity": 0.5,
      "prices": 1.5,
      "jobs": -0.5,
      "ownership": -0.5,
      "stability": -1
     },
     "reason": "Cheap energy for desalination would ease severe water stress, but a fragile post-war state and regional AI arms races threaten stability."
    }
   },
   {
    "entity": "MLI",
    "si": {
     "abundance": 0.025,
     "better": 0.515,
     "stagnation": 0.16,
     "decline": 0.12,
     "collapse": 0.18
    },
    "noSi": {
     "abundance": 0.001,
     "better": 0.5,
     "stagnation": 0.18,
     "decline": 0.13,
     "collapse": 0.189
    },
    "reading": {
     "channels": {
      "productivity": 0.5,
      "prices": 1.5,
      "jobs": -0.5,
      "ownership": -0.5,
      "stability": -1
     },
     "reason": "Stability dominates: with jihadists and a junta, AI drones and surveillance could cancel the gains from cheaper goods and medicine."
    }
   },
   {
    "entity": "BFA",
    "si": {
     "abundance": 0.025,
     "better": 0.535,
     "stagnation": 0.16,
     "decline": 0.11,
     "collapse": 0.17
    },
    "noSi": {
     "abundance": 0.001,
     "better": 0.52,
     "stagnation": 0.18,
     "decline": 0.12,
     "collapse": 0.179
    },
    "reading": {
     "channels": {
      "productivity": 0.5,
      "prices": 1.5,
      "jobs": -0.5,
      "ownership": -0.5,
      "stability": -1
     },
     "reason": "Cheaper energy and medicine help most, but with much territory contested, AI weapons and junta surveillance weigh on stability."
    }
   },
   {
    "entity": "MWI",
    "si": {
     "abundance": 0.035,
     "better": 0.595,
     "stagnation": 0.16,
     "decline": 0.09,
     "collapse": 0.12
    },
    "noSi": {
     "abundance": 0.0010000000000000002,
     "better": 0.5700000000000001,
     "stagnation": 0.19000000000000003,
     "decline": 0.11000000000000001,
     "collapse": 0.12900000000000003
    },
    "reading": {
     "channels": {
      "productivity": 0.5,
      "prices": 1.5,
      "jobs": -0.5,
      "ownership": -0.5,
      "stability": -0.5
     },
     "reason": "Prices matter most: cheaper fertiliser, energy and medicine would ease the binding constraints of a peaceful but very poor farm economy."
    }
   },
   {
    "entity": "ZMB",
    "si": {
     "abundance": 0.04,
     "better": 0.625,
     "stagnation": 0.15,
     "decline": 0.08,
     "collapse": 0.105
    },
    "noSi": {
     "abundance": 0.0010000000000000002,
     "better": 0.6000000000000001,
     "stagnation": 0.18000000000000002,
     "decline": 0.10000000000000002,
     "collapse": 0.11900000000000001
    },
    "reading": {
     "channels": {
      "productivity": 0.5,
      "prices": 1.5,
      "jobs": -0.5,
      "ownership": 0,
      "stability": -0.5
     },
     "reason": "Copper sold into the SI build-out and cheaper goods help most; a stable democracy can tax mining rents, though AI access is low."
    }
   },
   {
    "entity": "LKA",
    "si": {
     "abundance": 0.060000000000000005,
     "better": 0.6500000000000001,
     "stagnation": 0.12000000000000001,
     "decline": 0.08500000000000002,
     "collapse": 0.08500000000000002
    },
    "noSi": {
     "abundance": 0.002,
     "better": 0.68,
     "stagnation": 0.14,
     "decline": 0.09,
     "collapse": 0.088
    },
    "reading": {
     "channels": {
      "productivity": 1,
      "prices": 1.5,
      "jobs": -1,
      "ownership": -1,
      "stability": -0.5
     },
     "reason": "Jobs offset prices: garments, BPO and Gulf migrant remittances are exposed, while cheaper imported energy helps a debt-strapped importer."
    }
   },
   {
    "entity": "TCD",
    "si": {
     "abundance": 0.025,
     "better": 0.5,
     "stagnation": 0.17,
     "decline": 0.12,
     "collapse": 0.185
    },
    "noSi": {
     "abundance": 0.001,
     "better": 0.48,
     "stagnation": 0.19,
     "decline": 0.13,
     "collapse": 0.199
    },
    "reading": {
     "channels": {
      "productivity": 0.5,
      "prices": 1.5,
      "jobs": -0.5,
      "ownership": -0.5,
      "stability": -1
     },
     "reason": "Prices are the main gain where 13% have electricity and health coverage is 26; oil rents fade and a weak state captures little."
    }
   },
   {
    "entity": "KAZ",
    "si": {
     "abundance": 0.08000000000000002,
     "better": 0.6100000000000001,
     "stagnation": 0.14000000000000004,
     "decline": 0.09000000000000001,
     "collapse": 0.08000000000000002
    },
    "noSi": {
     "abundance": 0.002,
     "better": 0.64,
     "stagnation": 0.16,
     "decline": 0.11,
     "collapse": 0.088
    },
    "reading": {
     "channels": {
      "productivity": 1,
      "prices": 1,
      "jobs": -0.5,
      "ownership": 0,
      "stability": -1
     },
     "reason": "Productivity from decent AI use and cheap power for compute helps, but oil rents fade and an authoritarian state gains surveillance."
    }
   },
   {
    "entity": "CHL",
    "si": {
     "abundance": 0.1,
     "better": 0.68,
     "stagnation": 0.1,
     "decline": 0.06,
     "collapse": 0.06
    },
    "noSi": {
     "abundance": 0.003,
     "better": 0.7,
     "stagnation": 0.15,
     "decline": 0.08,
     "collapse": 0.067
    },
    "reading": {
     "channels": {
      "productivity": 1.5,
      "prices": 1,
      "jobs": -0.5,
      "ownership": 0,
      "stability": -0.5
     },
     "reason": "Productivity leads: high AI use and a capable state, plus copper and lithium sold into the build-out; water stress and polarisation are risks."
    }
   },
   {
    "entity": "SOM",
    "si": {
     "abundance": 0.015,
     "better": 0.47,
     "stagnation": 0.185,
     "decline": 0.13,
     "collapse": 0.2
    },
    "noSi": {
     "abundance": 0.001,
     "better": 0.48,
     "stagnation": 0.19,
     "decline": 0.13,
     "collapse": 0.199
    },
    "reading": {
     "channels": {
      "productivity": 0.5,
      "prices": 1.5,
      "jobs": -1,
      "ownership": -0.5,
      "stability": -1
     },
     "reason": "Jobs bite: remittances from diaspora service work shrink as AI and robots spread, offsetting cheaper food and medicine in a fragile state."
    }
   },
   {
    "entity": "ROU",
    "si": {
     "abundance": 0.14,
     "better": 0.64,
     "stagnation": 0.1,
     "decline": 0.06,
     "collapse": 0.06
    },
    "noSi": {
     "abundance": 0.004,
     "better": 0.7,
     "stagnation": 0.15,
     "decline": 0.08,
     "collapse": 0.066
    },
    "reading": {
     "channels": {
      "productivity": 1.5,
      "prices": 1,
      "jobs": -1,
      "ownership": 0,
      "stability": -0.5
     },
     "reason": "Productivity within the EU leads, but IT outsourcing and routine manufacturing jobs are exposed; EU-level taxing of AI profits helps."
    }
   },
   {
    "entity": "SEN",
    "si": {
     "abundance": 0.04,
     "better": 0.64,
     "stagnation": 0.14,
     "decline": 0.08,
     "collapse": 0.1
    },
    "noSi": {
     "abundance": 0.001,
     "better": 0.62,
     "stagnation": 0.17,
     "decline": 0.1,
     "collapse": 0.109
    },
    "reading": {
     "channels": {
      "productivity": 1,
      "prices": 1.5,
      "jobs": -0.5,
      "ownership": -0.5,
      "stability": -0.5
     },
     "reason": "A working democracy with 83% electricity can use cheap AI services and cheaper imports; debt distress and coastal climate risk temper it."
    }
   },
   {
    "entity": "GTM",
    "si": {
     "abundance": 0.035,
     "better": 0.615,
     "stagnation": 0.155,
     "decline": 0.1,
     "collapse": 0.095
    },
    "noSi": {
     "abundance": 0.002,
     "better": 0.66,
     "stagnation": 0.16,
     "decline": 0.1,
     "collapse": 0.078
    },
    "reading": {
     "channels": {
      "productivity": 0.5,
      "prices": 1.5,
      "jobs": -1.5,
      "ownership": -1,
      "stability": -0.5
     },
     "reason": "Jobs dominate: remittances from US labour and maquila exports shrink as robots spread, outweighing cheaper goods in a weakly governed state."
    }
   },
   {
    "entity": "ECU",
    "si": {
     "abundance": 0.060000000000000005,
     "better": 0.6300000000000001,
     "stagnation": 0.13000000000000003,
     "decline": 0.09000000000000001,
     "collapse": 0.09000000000000001
    },
    "noSi": {
     "abundance": 0.002,
     "better": 0.64,
     "stagnation": 0.17,
     "decline": 0.1,
     "collapse": 0.088
    },
    "reading": {
     "channels": {
      "productivity": 1,
      "prices": 1.5,
      "jobs": -0.5,
      "ownership": -0.5,
      "stability": -0.5
     },
     "reason": "Cheaper energy and goods plus decent AI use help most; fading oil rents and gang violence, which surveillance may curb or entrench, temper it."
    }
   },
   {
    "entity": "KHM",
    "si": {
     "abundance": 0.03,
     "better": 0.645,
     "stagnation": 0.14,
     "decline": 0.095,
     "collapse": 0.09
    },
    "noSi": {
     "abundance": 0.0010000000000000002,
     "better": 0.7000000000000001,
     "stagnation": 0.14000000000000004,
     "decline": 0.08000000000000002,
     "collapse": 0.07900000000000001
    },
    "reading": {
     "channels": {
      "productivity": 0.5,
      "prices": 1.5,
      "jobs": -1,
      "ownership": -1,
      "stability": -1
     },
     "reason": "Jobs: garment exports, the core of growth, are routine manufacturing that AI and robots replace; low AI use and one-party rule add little."
    }
   },
   {
    "entity": "ZWE",
    "si": {
     "abundance": 0.03,
     "better": 0.585,
     "stagnation": 0.17,
     "decline": 0.1,
     "collapse": 0.115
    },
    "noSi": {
     "abundance": 0.001,
     "better": 0.56,
     "stagnation": 0.19,
     "decline": 0.12,
     "collapse": 0.129
    },
    "reading": {
     "channels": {
      "productivity": 0.5,
      "prices": 1.5,
      "jobs": -0.5,
      "ownership": 0,
      "stability": -1
     },
     "reason": "Lithium and platinum demand and cheaper goods help, but a ruling party with surveillance tools and poor governance captures much of it."
    }
   },
   {
    "entity": "GIN",
    "si": {
     "abundance": 0.03,
     "better": 0.625,
     "stagnation": 0.15,
     "decline": 0.08,
     "collapse": 0.115
    },
    "noSi": {
     "abundance": 0.001,
     "better": 0.6,
     "stagnation": 0.17,
     "decline": 0.1,
     "collapse": 0.129
    },
    "reading": {
     "channels": {
      "productivity": 0.5,
      "prices": 1.5,
      "jobs": -0.5,
      "ownership": 0,
      "stability": -1
     },
     "reason": "Bauxite and iron ore sell into the SI build-out, but a military-rooted government and weak institutions limit how far gains spread."
    }
   },
   {
    "entity": "BEN",
    "si": {
     "abundance": 0.04,
     "better": 0.645,
     "stagnation": 0.14,
     "decline": 0.08,
     "collapse": 0.095
    },
    "noSi": {
     "abundance": 0.001,
     "better": 0.62,
     "stagnation": 0.17,
     "decline": 0.1,
     "collapse": 0.109
    },
    "reading": {
     "channels": {
      "productivity": 1,
      "prices": 1.5,
      "jobs": -0.5,
      "ownership": -0.5,
      "stability": -0.5
     },
     "reason": "Cheaper energy and medicine plus moderate state capacity let Benin turn SI-era trade into gains, though northern insurgency is a risk."
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
     "abundance": 0.06,
     "better": 0.67,
     "stagnation": 0.08,
     "decline": 0.065,
     "collapse": 0.125
    },
    "noSi": {
     "abundance": 0.001,
     "better": 0.68,
     "stagnation": 0.1,
     "decline": 0.08,
     "collapse": 0.139
    },
    "reading": {
     "channels": {
      "productivity": 1,
      "prices": 1.5,
      "jobs": -0.5,
      "ownership": -1,
      "stability": -0.5
     },
     "reason": "Prices: cheap medicine, power and farm advice reach a poor but well-run state, though it owns no compute and sells little AI can replace."
    }
   },
   {
    "entity": "BDI",
    "si": {
     "abundance": 0.035,
     "better": 0.57,
     "stagnation": 0.15,
     "decline": 0.08,
     "collapse": 0.165
    },
    "noSi": {
     "abundance": 0.0003,
     "better": 0.55,
     "stagnation": 0.17,
     "decline": 0.1,
     "collapse": 0.1797
    },
    "reading": {
     "channels": {
      "productivity": 0.5,
      "prices": 1.5,
      "jobs": 0,
      "ownership": -1,
      "stability": -0.5
     },
     "reason": "Prices: imported medicine, power and inputs get cheaper; with 20% electricity and a predatory state, little AI is put to work locally."
    }
   },
   {
    "entity": "BOL",
    "si": {
     "abundance": 0.07000000000000002,
     "better": 0.6200000000000001,
     "stagnation": 0.12000000000000001,
     "decline": 0.09000000000000001,
     "collapse": 0.10000000000000002
    },
    "noSi": {
     "abundance": 0.002,
     "better": 0.64,
     "stagnation": 0.16,
     "decline": 0.1,
     "collapse": 0.098
    },
    "reading": {
     "channels": {
      "productivity": 1,
      "prices": 1,
      "jobs": -0.5,
      "ownership": -0.5,
      "stability": -0.5
     },
     "reason": "Productivity: farming, mining and informal services gain as AI diffuses; gas and lithium exports give it no claim on AI profits."
    }
   },
   {
    "entity": "TUN",
    "si": {
     "abundance": 0.08,
     "better": 0.55,
     "stagnation": 0.16,
     "decline": 0.11,
     "collapse": 0.1
    },
    "noSi": {
     "abundance": 0.002,
     "better": 0.55,
     "stagnation": 0.2,
     "decline": 0.13,
     "collapse": 0.118
    },
    "reading": {
     "channels": {
      "productivity": 1,
      "prices": 1.5,
      "jobs": -1,
      "ownership": -0.5,
      "stability": -0.5
     },
     "reason": "Jobs: nearshore call centres and routine factories for Europe are exposed, while cheap energy and desalination ease its water and import bills."
    }
   },
   {
    "entity": "SSD",
    "si": {
     "abundance": 0.015,
     "better": 0.46,
     "stagnation": 0.165,
     "decline": 0.125,
     "collapse": 0.235
    },
    "noSi": {
     "abundance": 0.0002,
     "better": 0.45,
     "stagnation": 0.17,
     "decline": 0.13,
     "collapse": 0.2498
    },
    "reading": {
     "channels": {
      "productivity": 0.5,
      "prices": 1.5,
      "jobs": 0,
      "ownership": -1,
      "stability": -1
     },
     "reason": "Stability: cheap drones and surveillance can feed its armed factions; cheaper food and medicine help, but almost no AI is put to work there."
    }
   },
   {
    "entity": "BEL",
    "si": {
     "abundance": 0.25000000000000006,
     "better": 0.47000000000000003,
     "stagnation": 0.11000000000000001,
     "decline": 0.08000000000000002,
     "collapse": 0.09000000000000001
    },
    "noSi": {
     "abundance": 0.01,
     "better": 0.6,
     "stagnation": 0.19,
     "decline": 0.117,
     "collapse": 0.083
    },
    "reading": {
     "channels": {
      "productivity": 1.5,
      "prices": 1,
      "jobs": -0.5,
      "ownership": -0.5,
      "stability": -0.5
     },
     "reason": "Productivity: high AI use, skilled services and pharma adopt fast; profits mostly go to US and Chinese model owners, but the state can tax."
    }
   },
   {
    "entity": "HTI",
    "si": {
     "abundance": 0.02,
     "better": 0.5,
     "stagnation": 0.175,
     "decline": 0.12,
     "collapse": 0.185
    },
    "noSi": {
     "abundance": 0.00030000000000000003,
     "better": 0.5000000000000001,
     "stagnation": 0.18000000000000002,
     "decline": 0.12000000000000001,
     "collapse": 0.19970000000000002
    },
    "reading": {
     "channels": {
      "productivity": 0.5,
      "prices": 1.5,
      "jobs": -0.5,
      "ownership": -1,
      "stability": -0.5
     },
     "reason": "Prices: cheaper food and medicine help most; remittances from US service work and garment assembly are exposed, and the state uses little AI."
    }
   },
   {
    "entity": "JOR",
    "si": {
     "abundance": 0.06999999999999999,
     "better": 0.5299999999999999,
     "stagnation": 0.16999999999999998,
     "decline": 0.11999999999999997,
     "collapse": 0.10999999999999997
    },
    "noSi": {
     "abundance": 0.002,
     "better": 0.5,
     "stagnation": 0.21,
     "decline": 0.15,
     "collapse": 0.138
    },
    "reading": {
     "channels": {
      "productivity": 1,
      "prices": 1.5,
      "jobs": -0.5,
      "ownership": -0.5,
      "stability": -0.5
     },
     "reason": "Prices: cheap energy makes desalination affordable in one of the driest countries; its IT outsourcing and garment exports are exposed."
    }
   },
   {
    "entity": "DOM",
    "si": {
     "abundance": 0.10000000000000002,
     "better": 0.6200000000000001,
     "stagnation": 0.11000000000000001,
     "decline": 0.08000000000000002,
     "collapse": 0.09000000000000001
    },
    "noSi": {
     "abundance": 0.003,
     "better": 0.68,
     "stagnation": 0.14,
     "decline": 0.09,
     "collapse": 0.087
    },
    "reading": {
     "channels": {
      "productivity": 1,
      "prices": 1.5,
      "jobs": -0.5,
      "ownership": -0.5,
      "stability": -0.5
     },
     "reason": "Prices: an energy importer gains from cheap power; tourism holds up while free-zone assembly and US remittances face automation."
    }
   },
   {
    "entity": "ARE",
    "si": {
     "abundance": 0.17,
     "better": 0.5,
     "stagnation": 0.15,
     "decline": 0.09,
     "collapse": 0.09
    },
    "noSi": {
     "abundance": 0.003,
     "better": 0.47,
     "stagnation": 0.25,
     "decline": 0.17,
     "collapse": 0.107
    },
    "reading": {
     "channels": {
      "productivity": 1.5,
      "prices": 0.5,
      "jobs": -0.5,
      "ownership": 1,
      "stability": -0.5
     },
     "reason": "Ownership: the state has bought into compute and frontier models, cushioning the end of oil, and robots may shrink its migrant workforce."
    }
   },
   {
    "entity": "HND",
    "si": {
     "abundance": 0.05,
     "better": 0.6,
     "stagnation": 0.15,
     "decline": 0.1,
     "collapse": 0.1
    },
    "noSi": {
     "abundance": 0.0008,
     "better": 0.62,
     "stagnation": 0.17,
     "decline": 0.1,
     "collapse": 0.1092
    },
    "reading": {
     "channels": {
      "productivity": 1,
      "prices": 1.5,
      "jobs": -1,
      "ownership": -1,
      "stability": -0.5
     },
     "reason": "Jobs: remittances from US service work, maquila assembly and call centres are all exposed, roughly offsetting cheaper goods and medicine."
    }
   },
   {
    "entity": "CUB",
    "si": {
     "abundance": 0.04,
     "better": 0.55,
     "stagnation": 0.17,
     "decline": 0.11,
     "collapse": 0.13
    },
    "noSi": {
     "abundance": 0.0005,
     "better": 0.55,
     "stagnation": 0.19,
     "decline": 0.12,
     "collapse": 0.1395
    },
    "reading": {
     "channels": {
      "productivity": 0.5,
      "prices": 1.5,
      "jobs": -0.5,
      "ownership": -1,
      "stability": -0.5
     },
     "reason": "Prices: cheap solar and imports could fix its broken grid; AI medicine cuts demand for its doctors abroad, and internet controls limit use."
    }
   },
   {
    "entity": "CZE",
    "si": {
     "abundance": 0.18000000000000002,
     "better": 0.5400000000000001,
     "stagnation": 0.12000000000000001,
     "decline": 0.08000000000000002,
     "collapse": 0.08000000000000002
    },
    "noSi": {
     "abundance": 0.004,
     "better": 0.66,
     "stagnation": 0.17,
     "decline": 0.095,
     "collapse": 0.071
    },
    "reading": {
     "channels": {
      "productivity": 1.5,
      "prices": 1,
      "jobs": -1,
      "ownership": 0,
      "stability": -0.5
     },
     "reason": "Productivity: strong AI use and factory robotics lift output, though car-industry assembly jobs go and profits partly flow to foreign owners."
    }
   },
   {
    "entity": "PRT",
    "si": {
     "abundance": 0.2,
     "better": 0.52,
     "stagnation": 0.13,
     "decline": 0.08,
     "collapse": 0.07
    },
    "noSi": {
     "abundance": 0.005000000000000001,
     "better": 0.5700000000000001,
     "stagnation": 0.22000000000000003,
     "decline": 0.13000000000000003,
     "collapse": 0.07500000000000001
    },
    "reading": {
     "channels": {
      "productivity": 1.5,
      "prices": 1,
      "jobs": -0.5,
      "ownership": -0.5,
      "stability": -0.5
     },
     "reason": "Productivity: high AI use and robots offset a fast-aging workforce; tourism holds while shared-services and IT outsourcing jobs are exposed."
    }
   },
   {
    "entity": "TJK",
    "si": {
     "abundance": 0.03,
     "better": 0.57,
     "stagnation": 0.16,
     "decline": 0.105,
     "collapse": 0.135
    },
    "noSi": {
     "abundance": 0.0005,
     "better": 0.62,
     "stagnation": 0.15,
     "decline": 0.1,
     "collapse": 0.1295
    },
    "reading": {
     "channels": {
      "productivity": 0.5,
      "prices": 1.5,
      "jobs": -1.5,
      "ownership": -1,
      "stability": -0.5
     },
     "reason": "Jobs: remittances from migrant construction and service work in Russia, near half of GDP, are what robots replace; cheap goods only partly offset."
    }
   },
   {
    "entity": "PNG",
    "si": {
     "abundance": 0.034999999999999996,
     "better": 0.5599999999999999,
     "stagnation": 0.18999999999999995,
     "decline": 0.09999999999999998,
     "collapse": 0.11499999999999998
    },
    "noSi": {
     "abundance": 0.0005,
     "better": 0.55,
     "stagnation": 0.22,
     "decline": 0.11,
     "collapse": 0.1195
    },
    "reading": {
     "channels": {
      "productivity": 0.5,
      "prices": 1.5,
      "jobs": 0,
      "ownership": -0.5,
      "stability": -0.5
     },
     "reason": "Prices: cheap solar, medicine and AI advice can reach a mostly rural, subsistence population; copper and gold demand may add modest rents."
    }
   },
   {
    "entity": "GRC",
    "si": {
     "abundance": 0.16,
     "better": 0.52,
     "stagnation": 0.15,
     "decline": 0.1,
     "collapse": 0.07
    },
    "noSi": {
     "abundance": 0.004,
     "better": 0.53,
     "stagnation": 0.24,
     "decline": 0.15,
     "collapse": 0.076
    },
    "reading": {
     "channels": {
      "productivity": 1,
      "prices": 1.5,
      "jobs": -0.5,
      "ownership": -0.5,
      "stability": -0.5
     },
     "reason": "Prices: an indebted, aging energy importer gains from cheaper power and care; tourism is hard to automate, so job losses stay modest."
    }
   },
   {
    "entity": "AZE",
    "si": {
     "abundance": 0.06,
     "better": 0.52,
     "stagnation": 0.19,
     "decline": 0.12,
     "collapse": 0.11
    },
    "noSi": {
     "abundance": 0.001,
     "better": 0.52,
     "stagnation": 0.22,
     "decline": 0.14,
     "collapse": 0.119
    },
    "reading": {
     "channels": {
      "productivity": 1,
      "prices": 0,
      "jobs": 0,
      "ownership": -0.5,
      "stability": -0.5
     },
     "reason": "Prices: cheap energy erodes the oil and gas rents behind the budget, offsetting cheaper imports; autocratic rule captures much of any AI gain."
    }
   },
   {
    "entity": "ISR",
    "si": {
     "abundance": 0.20000000000000004,
     "better": 0.5000000000000001,
     "stagnation": 0.12000000000000001,
     "decline": 0.09000000000000001,
     "collapse": 0.09000000000000001
    },
    "noSi": {
     "abundance": 0.005000000000000001,
     "better": 0.6000000000000001,
     "stagnation": 0.18000000000000002,
     "decline": 0.11500000000000002,
     "collapse": 0.10000000000000002
    },
    "reading": {
     "channels": {
      "productivity": 1.5,
      "prices": 1,
      "jobs": -1,
      "ownership": 0.5,
      "stability": -1
     },
     "reason": "Productivity: a deep AI and tech ecosystem adopts fast, but its software-services exports are exposed and AI-enabled regional war is a risk."
    }
   },
   {
    "entity": "HUN",
    "si": {
     "abundance": 0.15,
     "better": 0.53,
     "stagnation": 0.13,
     "decline": 0.1,
     "collapse": 0.09
    },
    "noSi": {
     "abundance": 0.004,
     "better": 0.62,
     "stagnation": 0.18,
     "decline": 0.11,
     "collapse": 0.086
    },
    "reading": {
     "channels": {
      "productivity": 1.5,
      "prices": 1,
      "jobs": -1,
      "ownership": -0.5,
      "stability": -0.5
     },
     "reason": "Jobs: car and battery assembly for foreign firms is what robots replace; strong AI use lifts output, but profits flow to foreign owners."
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
     "abundance": 0.28,
     "better": 0.52,
     "stagnation": 0.08,
     "decline": 0.06,
     "collapse": 0.06
    },
    "noSi": {
     "abundance": 0.008,
     "better": 0.665,
     "stagnation": 0.17,
     "decline": 0.102,
     "collapse": 0.055
    },
    "reading": {
     "channels": {
      "productivity": 1.5,
      "prices": 1.5,
      "jobs": -0.5,
      "ownership": 0,
      "stability": -0.5
     },
     "reason": "Productivity: solid AI use and a capable state spread AI through industry and services; routine factory job losses are cushioned."
    }
   },
   {
    "entity": "CHE",
    "si": {
     "abundance": 0.32999999999999996,
     "better": 0.4999999999999999,
     "stagnation": 0.06999999999999999,
     "decline": 0.04999999999999999,
     "collapse": 0.04999999999999999
    },
    "noSi": {
     "abundance": 0.015,
     "better": 0.685,
     "stagnation": 0.16,
     "decline": 0.09,
     "collapse": 0.05
    },
    "reading": {
     "channels": {
      "productivity": 1.5,
      "prices": 1,
      "jobs": -0.5,
      "ownership": 1,
      "stability": 0
     },
     "reason": "Ownership: Swiss capital, pharma and finance hold global assets and a top-rated state can tax AI gains; heavy AI use adds productivity."
    }
   },
   {
    "entity": "BLR",
    "si": {
     "abundance": 0.08000000000000002,
     "better": 0.5800000000000001,
     "stagnation": 0.13000000000000003,
     "decline": 0.09000000000000001,
     "collapse": 0.12000000000000001
    },
    "noSi": {
     "abundance": 0.003,
     "better": 0.6,
     "stagnation": 0.16,
     "decline": 0.12,
     "collapse": 0.117
    },
    "reading": {
     "channels": {
      "productivity": 1,
      "prices": 1.5,
      "jobs": -0.5,
      "ownership": -1,
      "stability": -1
     },
     "reason": "Stability: a sanctioned autocracy with little AI access gains mostly from cheaper imports, while surveillance and Russia ties add risk."
    }
   },
   {
    "entity": "SLE",
    "si": {
     "abundance": 0.05,
     "better": 0.63,
     "stagnation": 0.12,
     "decline": 0.07,
     "collapse": 0.13
    },
    "noSi": {
     "abundance": 0.001,
     "better": 0.6,
     "stagnation": 0.16,
     "decline": 0.09,
     "collapse": 0.149
    },
    "reading": {
     "channels": {
      "productivity": 0.5,
      "prices": 1.5,
      "jobs": 0,
      "ownership": -1,
      "stability": -0.5
     },
     "reason": "Prices: cheap medicine, power and farm tech reach a very poor country with little AI of its own; it owns none of the gains."
    }
   },
   {
    "entity": "TGO",
    "si": {
     "abundance": 0.05,
     "better": 0.62,
     "stagnation": 0.13,
     "decline": 0.08,
     "collapse": 0.12
    },
    "noSi": {
     "abundance": 0.001,
     "better": 0.62,
     "stagnation": 0.15,
     "decline": 0.1,
     "collapse": 0.129
    },
    "reading": {
     "channels": {
      "productivity": 0.5,
      "prices": 1.5,
      "jobs": -0.5,
      "ownership": -1,
      "stability": -0.5
     },
     "reason": "Prices: cheaper energy, medicine and food tech help most; a weak state, Sahel spillover and no AI ownership limit the rest."
    }
   },
   {
    "entity": "LAO",
    "si": {
     "abundance": 0.08,
     "better": 0.7,
     "stagnation": 0.09,
     "decline": 0.06,
     "collapse": 0.07
    },
    "noSi": {
     "abundance": 0.0020000000000000005,
     "better": 0.7200000000000001,
     "stagnation": 0.12000000000000001,
     "decline": 0.08000000000000002,
     "collapse": 0.07800000000000001
    },
    "reading": {
     "channels": {
      "productivity": 0.5,
      "prices": 1.5,
      "jobs": -0.5,
      "ownership": -0.5,
      "stability": -0.5
     },
     "reason": "Prices: cheap goods and Chinese AI arriving by rail help; debt to China and a one-party state keep the gains modest."
    }
   },
   {
    "entity": "TKM",
    "si": {
     "abundance": 0.02,
     "better": 0.55,
     "stagnation": 0.17,
     "decline": 0.13,
     "collapse": 0.13
    },
    "noSi": {
     "abundance": 0.001,
     "better": 0.55,
     "stagnation": 0.18,
     "decline": 0.14,
     "collapse": 0.129
    },
    "reading": {
     "channels": {
      "productivity": 0.5,
      "prices": 1,
      "jobs": -0.5,
      "ownership": -1,
      "stability": -1
     },
     "reason": "Stability: a closed gas state gets little AI and loses gas rent as energy gets cheap, while surveillance entrenches the regime."
    }
   },
   {
    "entity": "HKG",
    "si": {
     "abundance": 0.2,
     "better": 0.56,
     "stagnation": 0.12,
     "decline": 0.06,
     "collapse": 0.06
    },
    "noSi": {
     "abundance": 0.005000000000000001,
     "better": 0.6200000000000001,
     "stagnation": 0.20000000000000004,
     "decline": 0.10000000000000002,
     "collapse": 0.07500000000000001
    },
    "reading": {
     "channels": {
      "productivity": 1.5,
      "prices": 1,
      "jobs": -1,
      "ownership": 0.5,
      "stability": -1
     },
     "reason": "Jobs: finance and professional services are highly automatable, offset by mainland AI and wealth; Beijing control and Taiwan risk weigh."
    }
   },
   {
    "entity": "LBY",
    "si": {
     "abundance": 0.02,
     "better": 0.45,
     "stagnation": 0.19,
     "decline": 0.165,
     "collapse": 0.175
    },
    "noSi": {
     "abundance": 0.001,
     "better": 0.45,
     "stagnation": 0.2,
     "decline": 0.17,
     "collapse": 0.179
    },
    "reading": {
     "channels": {
      "productivity": 0.5,
      "prices": 1,
      "jobs": -0.5,
      "ownership": -1,
      "stability": -1.5
     },
     "reason": "Stability: a split state with militias faces cheaper drones and falling oil rent; cheap desalination and solar are the main upside."
    }
   },
   {
    "entity": "KGZ",
    "si": {
     "abundance": 0.04,
     "better": 0.64,
     "stagnation": 0.145,
     "decline": 0.09,
     "collapse": 0.085
    },
    "noSi": {
     "abundance": 0.001,
     "better": 0.66,
     "stagnation": 0.15,
     "decline": 0.1,
     "collapse": 0.089
    },
    "reading": {
     "channels": {
      "productivity": 0.5,
      "prices": 1.5,
      "jobs": -1,
      "ownership": -1,
      "stability": -0.5
     },
     "reason": "Jobs: remittances from migrant labour in Russia fall as robots replace it; cheaper goods and medicine only partly offset that."
    }
   },
   {
    "entity": "PRY",
    "si": {
     "abundance": 0.1,
     "better": 0.68,
     "stagnation": 0.1,
     "decline": 0.06,
     "collapse": 0.06
    },
    "noSi": {
     "abundance": 0.002,
     "better": 0.72,
     "stagnation": 0.13,
     "decline": 0.08,
     "collapse": 0.068
    },
    "reading": {
     "channels": {
      "productivity": 0.5,
      "prices": 1.5,
      "jobs": 0,
      "ownership": -0.5,
      "stability": -0.5
     },
     "reason": "Prices: a soy, beef and hydropower exporter sells what AI does not replace and gains from cheaper imports; low AI use limits productivity."
    }
   },
   {
    "entity": "NIC",
    "si": {
     "abundance": 0.025,
     "better": 0.6,
     "stagnation": 0.16,
     "decline": 0.11,
     "collapse": 0.105
    },
    "noSi": {
     "abundance": 0.001,
     "better": 0.62,
     "stagnation": 0.16,
     "decline": 0.11,
     "collapse": 0.109
    },
    "reading": {
     "channels": {
      "productivity": 0.5,
      "prices": 1.5,
      "jobs": -1,
      "ownership": -1,
      "stability": -1
     },
     "reason": "Jobs: remittance labour is replaced and the dictatorship gains surveillance; cheaper imports help, but little AI reaches the economy."
    }
   },
   {
    "entity": "SRB",
    "si": {
     "abundance": 0.12,
     "better": 0.65,
     "stagnation": 0.11,
     "decline": 0.06,
     "collapse": 0.06
    },
    "noSi": {
     "abundance": 0.003,
     "better": 0.68,
     "stagnation": 0.15,
     "decline": 0.1,
     "collapse": 0.067
    },
    "reading": {
     "channels": {
      "productivity": 1,
      "prices": 1.5,
      "jobs": -1,
      "ownership": -0.5,
      "stability": -0.5
     },
     "reason": "Jobs: IT outsourcing and routine factory work for the EU are what AI replaces, partly offset by decent AI use and cheaper imports."
    }
   },
   {
    "entity": "COG",
    "si": {
     "abundance": 0.03,
     "better": 0.55,
     "stagnation": 0.165,
     "decline": 0.105,
     "collapse": 0.15
    },
    "noSi": {
     "abundance": 0.001,
     "better": 0.55,
     "stagnation": 0.17,
     "decline": 0.12,
     "collapse": 0.159
    },
    "reading": {
     "channels": {
      "productivity": 0.5,
      "prices": 1.5,
      "jobs": -0.5,
      "ownership": -1,
      "stability": -1
     },
     "reason": "Stability: an oil state with weak governance and a looming succession gains from cheaper imports but loses oil rent and owns no AI."
    }
   },
   {
    "entity": "BGR",
    "si": {
     "abundance": 0.16,
     "better": 0.58,
     "stagnation": 0.11,
     "decline": 0.08,
     "collapse": 0.07
    },
    "noSi": {
     "abundance": 0.005,
     "better": 0.65,
     "stagnation": 0.18,
     "decline": 0.105,
     "collapse": 0.06
    },
    "reading": {
     "channels": {
      "productivity": 1,
      "prices": 1.5,
      "jobs": -1,
      "ownership": 0,
      "stability": -0.5
     },
     "reason": "Prices and EU transfers carry the gains; outsourced services and routine factory jobs are exposed, and a fractured state slows uptake."
    }
   },
   {
    "entity": "SLV",
    "si": {
     "abundance": 0.04,
     "better": 0.61,
     "stagnation": 0.16,
     "decline": 0.105,
     "collapse": 0.085
    },
    "noSi": {
     "abundance": 0.002,
     "better": 0.64,
     "stagnation": 0.16,
     "decline": 0.11,
     "collapse": 0.088
    },
    "reading": {
     "channels": {
      "productivity": 0.5,
      "prices": 1.5,
      "jobs": -1,
      "ownership": -1,
      "stability": -0.5
     },
     "reason": "Jobs: remittances, call centres and garment assembly are exposed; cheaper imports help, but the country owns no AI and surveillance grows."
    }
   },
   {
    "entity": "SGP",
    "si": {
     "abundance": 0.32999999999999996,
     "better": 0.5099999999999999,
     "stagnation": 0.06999999999999999,
     "decline": 0.039999999999999994,
     "collapse": 0.04999999999999999
    },
    "noSi": {
     "abundance": 0.01,
     "better": 0.72,
     "stagnation": 0.13,
     "decline": 0.08,
     "collapse": 0.06
    },
    "reading": {
     "channels": {
      "productivity": 2,
      "prices": 1,
      "jobs": -1,
      "ownership": 1,
      "stability": 0
     },
     "reason": "Productivity: very high AI use, top governance and sovereign wealth that can own compute; finance and trade service jobs are exposed."
    }
   },
   {
    "entity": "DNK",
    "si": {
     "abundance": 0.31999999999999995,
     "better": 0.5199999999999999,
     "stagnation": 0.06999999999999999,
     "decline": 0.039999999999999994,
     "collapse": 0.04999999999999999
    },
    "noSi": {
     "abundance": 0.005,
     "better": 0.7,
     "stagnation": 0.165,
     "decline": 0.08,
     "collapse": 0.05
    },
    "reading": {
     "channels": {
      "productivity": 1.5,
      "prices": 1.5,
      "jobs": -0.5,
      "ownership": 0.5,
      "stability": 0
     },
     "reason": "Productivity: high AI use, a top state and a welfare system that spreads gains evenly; pharma and wind give some ownership."
    }
   },
   {
    "entity": "LBN",
    "si": {
     "abundance": 0.04,
     "better": 0.52,
     "stagnation": 0.175,
     "decline": 0.13,
     "collapse": 0.135
    },
    "noSi": {
     "abundance": 0.002,
     "better": 0.52,
     "stagnation": 0.19,
     "decline": 0.14,
     "collapse": 0.148
    },
    "reading": {
     "channels": {
      "productivity": 0.5,
      "prices": 1.5,
      "jobs": -0.5,
      "ownership": -1,
      "stability": -1
     },
     "reason": "Stability: an educated, AI-using people is held back by a broken state, war risk and water stress; cheaper imports help most."
    }
   },
   {
    "entity": "LBR",
    "si": {
     "abundance": 0.04,
     "better": 0.62,
     "stagnation": 0.13,
     "decline": 0.08,
     "collapse": 0.13
    },
    "noSi": {
     "abundance": 0.001,
     "better": 0.6,
     "stagnation": 0.15,
     "decline": 0.09,
     "collapse": 0.159
    },
    "reading": {
     "channels": {
      "productivity": 0.5,
      "prices": 1.5,
      "jobs": 0,
      "ownership": -1,
      "stability": -0.5
     },
     "reason": "Prices: cheap medicine, power and farm tech help the poorest country here; it has little AI, owns none, and its state is weak."
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
     "abundance": 0.28,
     "better": 0.53,
     "stagnation": 0.08,
     "decline": 0.05,
     "collapse": 0.06
    },
    "noSi": {
     "abundance": 0.005,
     "better": 0.66,
     "stagnation": 0.17,
     "decline": 0.09,
     "collapse": 0.075
    },
    "reading": {
     "channels": {
      "productivity": 1.5,
      "prices": 1,
      "jobs": -0.5,
      "ownership": 0,
      "stability": 0
     },
     "reason": "Productivity: a skilled, AI-heavy workforce and an effective state turn automation into output; the Russian border keeps stability from scoring higher."
    }
   },
   {
    "entity": "CAF",
    "si": {
     "abundance": 0.02,
     "better": 0.47,
     "stagnation": 0.22,
     "decline": 0.14,
     "collapse": 0.15
    },
    "noSi": {
     "abundance": 0.001,
     "better": 0.45,
     "stagnation": 0.24,
     "decline": 0.15,
     "collapse": 0.159
    },
    "reading": {
     "channels": {
      "productivity": 0.5,
      "prices": 1.5,
      "jobs": 0,
      "ownership": -1,
      "stability": -1
     },
     "reason": "Prices: cheap solar, medicine and food could help, but almost no AI access, no ownership and armed groups that can use new tools cancel it."
    }
   },
   {
    "entity": "OMN",
    "si": {
     "abundance": 0.05,
     "better": 0.45,
     "stagnation": 0.23,
     "decline": 0.15,
     "collapse": 0.12
    },
    "noSi": {
     "abundance": 0.001,
     "better": 0.43,
     "stagnation": 0.26,
     "decline": 0.19,
     "collapse": 0.119
    },
    "reading": {
     "channels": {
      "productivity": 1,
      "prices": 1,
      "jobs": 0,
      "ownership": -1,
      "stability": -0.5
     },
     "reason": "Ownership: cheap energy erodes the oil rents that fund living standards and Oman owns little compute; cheaper desalination and goods help."
    }
   },
   {
    "entity": "IRL",
    "si": {
     "abundance": 0.29,
     "better": 0.53,
     "stagnation": 0.08,
     "decline": 0.045,
     "collapse": 0.055
    },
    "noSi": {
     "abundance": 0.005,
     "better": 0.67,
     "stagnation": 0.16,
     "decline": 0.1,
     "collapse": 0.065
    },
    "reading": {
     "channels": {
      "productivity": 1.5,
      "prices": 1,
      "jobs": -1,
      "ownership": 0.5,
      "stability": 0.5
     },
     "reason": "Productivity: among the highest AI use anywhere; the risk is jobs, as Dublin's support, sales and fund-admin work is easy to automate."
    }
   },
   {
    "entity": "SVK",
    "si": {
     "abundance": 0.17000000000000004,
     "better": 0.5700000000000001,
     "stagnation": 0.11000000000000001,
     "decline": 0.07000000000000002,
     "collapse": 0.08000000000000002
    },
    "noSi": {
     "abundance": 0.002,
     "better": 0.64,
     "stagnation": 0.17,
     "decline": 0.1,
     "collapse": 0.088
    },
    "reading": {
     "channels": {
      "productivity": 1,
      "prices": 1,
      "jobs": -1,
      "ownership": -0.5,
      "stability": 0
     },
     "reason": "Jobs: the car-assembly model that made Slovakia is what robots replace, offset by EU-wide productivity gains and cheaper goods."
    }
   },
   {
    "entity": "PSE",
    "si": {
     "abundance": 0.015,
     "better": 0.4,
     "stagnation": 0.23,
     "decline": 0.16,
     "collapse": 0.195
    },
    "noSi": {
     "abundance": 0.001,
     "better": 0.42,
     "stagnation": 0.24,
     "decline": 0.16,
     "collapse": 0.179
    },
    "reading": {
     "channels": {
      "productivity": 0.5,
      "prices": 1,
      "jobs": -0.5,
      "ownership": -1,
      "stability": -1.5
     },
     "reason": "Stability: AI-enabled surveillance and targeting concentrate power over Palestinians; cheap solar and desalination help only if politics allows."
    }
   },
   {
    "entity": "NZL",
    "si": {
     "abundance": 0.28,
     "better": 0.54,
     "stagnation": 0.08,
     "decline": 0.05,
     "collapse": 0.05
    },
    "noSi": {
     "abundance": 0.005,
     "better": 0.65,
     "stagnation": 0.2,
     "decline": 0.09,
     "collapse": 0.055
    },
    "reading": {
     "channels": {
      "productivity": 1.5,
      "prices": 1,
      "jobs": 0,
      "ownership": 0,
      "stability": 0.5
     },
     "reason": "Productivity: very high AI use and strong institutions; its food and tourism exports are hard to automate, so jobs are spared."
    }
   },
   {
    "entity": "MRT",
    "si": {
     "abundance": 0.025,
     "better": 0.56,
     "stagnation": 0.18,
     "decline": 0.11,
     "collapse": 0.125
    },
    "noSi": {
     "abundance": 0.001,
     "better": 0.55,
     "stagnation": 0.2,
     "decline": 0.12,
     "collapse": 0.129
    },
    "reading": {
     "channels": {
      "productivity": 0.5,
      "prices": 1.5,
      "jobs": 0,
      "ownership": -1,
      "stability": -0.5
     },
     "reason": "Prices: cheap energy, food and medicine matter most for a poor importer with little AI use; it owns none of the gains."
    }
   },
   {
    "entity": "CRI",
    "si": {
     "abundance": 0.11000000000000001,
     "better": 0.5700000000000001,
     "stagnation": 0.15000000000000002,
     "decline": 0.09000000000000001,
     "collapse": 0.08000000000000002
    },
    "noSi": {
     "abundance": 0.002,
     "better": 0.64,
     "stagnation": 0.19,
     "decline": 0.1,
     "collapse": 0.068
    },
    "reading": {
     "channels": {
      "productivity": 1,
      "prices": 1,
      "jobs": -1,
      "ownership": -0.5,
      "stability": 0
     },
     "reason": "Jobs: shared-services and call-centre exports are prime AI targets, offset by good AI use, clean power and cheaper imports."
    }
   },
   {
    "entity": "KWT",
    "si": {
     "abundance": 0.07,
     "better": 0.5,
     "stagnation": 0.2,
     "decline": 0.12,
     "collapse": 0.11
    },
    "noSi": {
     "abundance": 0.002,
     "better": 0.46,
     "stagnation": 0.27,
     "decline": 0.15,
     "collapse": 0.118
    },
    "reading": {
     "channels": {
      "productivity": 0.5,
      "prices": 1,
      "jobs": 0,
      "ownership": 0,
      "stability": -0.5
     },
     "reason": "Ownership: oil rents fall as energy gets cheap, offset by a sovereign fund that holds global equity, AI firms included."
    }
   },
   {
    "entity": "PAN",
    "si": {
     "abundance": 0.09,
     "better": 0.56,
     "stagnation": 0.16,
     "decline": 0.1,
     "collapse": 0.09
    },
    "noSi": {
     "abundance": 0.0020000000000000005,
     "better": 0.6000000000000001,
     "stagnation": 0.21000000000000002,
     "decline": 0.11000000000000001,
     "collapse": 0.07800000000000001
    },
    "reading": {
     "channels": {
      "productivity": 1,
      "prices": 1,
      "jobs": -0.5,
      "ownership": -0.5,
      "stability": -0.5
     },
     "reason": "Jobs: banking and back-office services are exposed, but canal trade and copper gain from an AI-driven physical build-out."
    }
   },
   {
    "entity": "GEO",
    "si": {
     "abundance": 0.06,
     "better": 0.54,
     "stagnation": 0.17,
     "decline": 0.11,
     "collapse": 0.12
    },
    "noSi": {
     "abundance": 0.002,
     "better": 0.6,
     "stagnation": 0.18,
     "decline": 0.11,
     "collapse": 0.108
    },
    "reading": {
     "channels": {
      "productivity": 1,
      "prices": 1,
      "jobs": -0.5,
      "ownership": -1,
      "stability": -1
     },
     "reason": "Stability: an authoritarian drift plus AI surveillance and a hostile Russia can undo the gains that good AI uptake would bring."
    }
   },
   {
    "entity": "HRV",
    "si": {
     "abundance": 0.18,
     "better": 0.57,
     "stagnation": 0.12,
     "decline": 0.06,
     "collapse": 0.07
    },
    "noSi": {
     "abundance": 0.002,
     "better": 0.61,
     "stagnation": 0.21,
     "decline": 0.11,
     "collapse": 0.068
    },
    "reading": {
     "channels": {
      "productivity": 1,
      "prices": 1,
      "jobs": 0,
      "ownership": -0.5,
      "stability": 0
     },
     "reason": "Productivity: EU-level AI access lifts output, and tourism is in-person work AI does not replace, so jobs are spared."
    }
   },
   {
    "entity": "ERI",
    "si": {
     "abundance": 0.012,
     "better": 0.44,
     "stagnation": 0.24,
     "decline": 0.15,
     "collapse": 0.158
    },
    "noSi": {
     "abundance": 0.001,
     "better": 0.46,
     "stagnation": 0.24,
     "decline": 0.15,
     "collapse": 0.149
    },
    "reading": {
     "channels": {
      "productivity": 0,
      "prices": 1,
      "jobs": 0,
      "ownership": -1.5,
      "stability": -1
     },
     "reason": "Ownership and stability: a closed regime with almost no internet captures no AI gains and can turn control tools on its people."
    }
   },
   {
    "entity": "MNG",
    "si": {
     "abundance": 0.07000000000000002,
     "better": 0.6000000000000001,
     "stagnation": 0.14000000000000004,
     "decline": 0.09000000000000001,
     "collapse": 0.10000000000000002
    },
    "noSi": {
     "abundance": 0.002,
     "better": 0.62,
     "stagnation": 0.18,
     "decline": 0.11,
     "collapse": 0.088
    },
    "reading": {
     "channels": {
      "productivity": 0.5,
      "prices": 1,
      "jobs": 0.5,
      "ownership": -0.5,
      "stability": -0.5
     },
     "reason": "Jobs and exports: copper sells well in an AI-driven build-out and little labour is exposed; China's dominance limits ownership."
    }
   },
   {
    "entity": "URY",
    "si": {
     "abundance": 0.12000000000000001,
     "better": 0.5800000000000001,
     "stagnation": 0.14000000000000004,
     "decline": 0.08000000000000002,
     "collapse": 0.08000000000000002
    },
    "noSi": {
     "abundance": 0.002,
     "better": 0.64,
     "stagnation": 0.2,
     "decline": 0.09,
     "collapse": 0.068
    },
    "reading": {
     "channels": {
      "productivity": 1,
      "prices": 1,
      "jobs": -0.5,
      "ownership": -0.5,
      "stability": 0
     },
     "reason": "Productivity: high AI use and strong institutions; software exports are at risk but farm exports and stability hold."
    }
   },
   {
    "entity": "PRI",
    "si": {
     "abundance": 0.2,
     "better": 0.55,
     "stagnation": 0.12,
     "decline": 0.06,
     "collapse": 0.07
    },
    "noSi": {
     "abundance": 0.004,
     "better": 0.56,
     "stagnation": 0.23,
     "decline": 0.12,
     "collapse": 0.086
    },
    "reading": {
     "channels": {
      "productivity": 1,
      "prices": 1,
      "jobs": -0.5,
      "ownership": 0.5,
      "stability": 0
     },
     "reason": "Ownership: as a US territory it can share in taxes on US AI firms; pharma manufacturing and service jobs are exposed."
    }
   },
   {
    "entity": "BIH",
    "si": {
     "abundance": 0.08,
     "better": 0.55,
     "stagnation": 0.17,
     "decline": 0.1,
     "collapse": 0.1
    },
    "noSi": {
     "abundance": 0.001,
     "better": 0.55,
     "stagnation": 0.22,
     "decline": 0.13,
     "collapse": 0.099
    },
    "reading": {
     "channels": {
      "productivity": 1,
      "prices": 1.5,
      "jobs": -0.5,
      "ownership": -1,
      "stability": -0.5
     },
     "reason": "Prices: cheaper goods and energy help most, but low Claude use, no ownership and fragile politics limit what else it gains."
    }
   },
   {
    "entity": "NAM",
    "si": {
     "abundance": 0.03,
     "better": 0.56,
     "stagnation": 0.18,
     "decline": 0.11,
     "collapse": 0.12
    },
    "noSi": {
     "abundance": 0.001,
     "better": 0.56,
     "stagnation": 0.2,
     "decline": 0.12,
     "collapse": 0.119
    },
    "reading": {
     "channels": {
      "productivity": 0.5,
      "prices": 1.5,
      "jobs": 0,
      "ownership": -1,
      "stability": -0.5
     },
     "reason": "Prices: cheap energy and food help a water-stressed country; uranium and lithium exports gain, but it owns none of the AI."
    }
   },
   {
    "entity": "ARM",
    "si": {
     "abundance": 0.06,
     "better": 0.53,
     "stagnation": 0.18,
     "decline": 0.11,
     "collapse": 0.12
    },
    "noSi": {
     "abundance": 0.002,
     "better": 0.58,
     "stagnation": 0.19,
     "decline": 0.12,
     "collapse": 0.108
    },
    "reading": {
     "channels": {
      "productivity": 0.5,
      "prices": 1,
      "jobs": -0.5,
      "ownership": -1,
      "stability": -0.5
     },
     "reason": "Stability: a fragile peace and Russian leverage matter more than AI; IT outsourcing jobs are exposed to automation."
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
     "better": 0.56,
     "stagnation": 0.12,
     "decline": 0.08,
     "collapse": 0.09
    },
    "noSi": {
     "abundance": 0.002,
     "better": 0.5,
     "stagnation": 0.23,
     "decline": 0.158,
     "collapse": 0.11
    },
    "reading": {
     "channels": {
      "productivity": 1,
      "prices": 1,
      "jobs": -1,
      "ownership": 1,
      "stability": -0.5
     },
     "reason": "Ownership: the sovereign fund can buy into compute and models, offsetting the loss of LNG income as cheap clean energy spreads."
    }
   },
   {
    "entity": "LTU",
    "si": {
     "abundance": 0.25,
     "better": 0.56,
     "stagnation": 0.08,
     "decline": 0.05,
     "collapse": 0.06
    },
    "noSi": {
     "abundance": 0.006000000000000001,
     "better": 0.7100000000000001,
     "stagnation": 0.13000000000000003,
     "decline": 0.08000000000000002,
     "collapse": 0.07400000000000001
    },
    "reading": {
     "channels": {
      "productivity": 1.5,
      "prices": 1.5,
      "jobs": -0.5,
      "ownership": -0.5,
      "stability": -0.5
     },
     "reason": "Productivity: strong AI uptake and a capable EU state turn cheap AI into output, though shared-service and fintech back offices are exposed."
    }
   },
   {
    "entity": "JAM",
    "si": {
     "abundance": 0.07000000000000002,
     "better": 0.6200000000000001,
     "stagnation": 0.14000000000000004,
     "decline": 0.08000000000000002,
     "collapse": 0.09000000000000001
    },
    "noSi": {
     "abundance": 0.0010000000000000002,
     "better": 0.6200000000000001,
     "stagnation": 0.19000000000000003,
     "decline": 0.10000000000000002,
     "collapse": 0.08900000000000001
    },
    "reading": {
     "channels": {
      "productivity": 0.5,
      "prices": 1.5,
      "jobs": -0.5,
      "ownership": -1,
      "stability": -0.5
     },
     "reason": "Prices: an import- and fuel-dependent island gains most from cheaper goods and energy, while call-centre jobs are lost and tourism holds up."
    }
   },
   {
    "entity": "GMB",
    "si": {
     "abundance": 0.05,
     "better": 0.62,
     "stagnation": 0.13,
     "decline": 0.08,
     "collapse": 0.12
    },
    "noSi": {
     "abundance": 0.0005,
     "better": 0.6,
     "stagnation": 0.17,
     "decline": 0.1,
     "collapse": 0.1295
    },
    "reading": {
     "channels": {
      "productivity": 0.5,
      "prices": 1.5,
      "jobs": -0.5,
      "ownership": -1,
      "stability": -0.5
     },
     "reason": "Prices: cheaper food, medicine and solar power arrive through trade, but low AI use and no ownership of compute limit any further gain."
    }
   },
   {
    "entity": "GAB",
    "si": {
     "abundance": 0.03,
     "better": 0.56,
     "stagnation": 0.18,
     "decline": 0.11,
     "collapse": 0.12
    },
    "noSi": {
     "abundance": 0.0005,
     "better": 0.54,
     "stagnation": 0.2,
     "decline": 0.13,
     "collapse": 0.1295
    },
    "reading": {
     "channels": {
      "productivity": 0.5,
      "prices": 1.5,
      "jobs": -0.5,
      "ownership": -1,
      "stability": -0.5
     },
     "reason": "Prices: cheaper food and medicine help a hungry population, while oil revenue fades faster and a weak state captures little of the AI gain."
    }
   },
   {
    "entity": "BWA",
    "si": {
     "abundance": 0.060000000000000005,
     "better": 0.6400000000000001,
     "stagnation": 0.14000000000000004,
     "decline": 0.08000000000000002,
     "collapse": 0.08000000000000002
    },
    "noSi": {
     "abundance": 0.0010000000000000002,
     "better": 0.6000000000000001,
     "stagnation": 0.19000000000000003,
     "decline": 0.11000000000000001,
     "collapse": 0.09900000000000002
    },
    "reading": {
     "channels": {
      "productivity": 0.5,
      "prices": 1.5,
      "jobs": -0.5,
      "ownership": -0.5,
      "stability": 0
     },
     "reason": "Prices: cheaper medicine, food and energy help most, while a capable, stable state can tax new mining for the AI build-out."
    }
   },
   {
    "entity": "LSO",
    "si": {
     "abundance": 0.03,
     "better": 0.55,
     "stagnation": 0.19,
     "decline": 0.11,
     "collapse": 0.12
    },
    "noSi": {
     "abundance": 0.0003,
     "better": 0.55,
     "stagnation": 0.2,
     "decline": 0.12,
     "collapse": 0.1297
    },
    "reading": {
     "channels": {
      "productivity": 0.5,
      "prices": 1.5,
      "jobs": -1,
      "ownership": -1,
      "stability": -0.5
     },
     "reason": "Jobs: robots displace the garment exports and South African mine work it lives on, offset partly by much cheaper HIV and TB medicine."
    }
   },
   {
    "entity": "MDA",
    "si": {
     "abundance": 0.14000000000000004,
     "better": 0.6200000000000001,
     "stagnation": 0.10000000000000002,
     "decline": 0.060000000000000005,
     "collapse": 0.08000000000000002
    },
    "noSi": {
     "abundance": 0.003,
     "better": 0.66,
     "stagnation": 0.14,
     "decline": 0.1,
     "collapse": 0.097
    },
    "reading": {
     "channels": {
      "productivity": 1,
      "prices": 1.5,
      "jobs": -0.5,
      "ownership": -0.5,
      "stability": -0.5
     },
     "reason": "Prices: cheaper imported energy helps an import-dependent economy, and a lively IT sector adopts AI, though Russian hybrid pressure weighs on it."
    }
   },
   {
    "entity": "ALB",
    "si": {
     "abundance": 0.15,
     "better": 0.64,
     "stagnation": 0.09,
     "decline": 0.06,
     "collapse": 0.06
    },
    "noSi": {
     "abundance": 0.003,
     "better": 0.68,
     "stagnation": 0.15,
     "decline": 0.09,
     "collapse": 0.077
    },
    "reading": {
     "channels": {
      "productivity": 1,
      "prices": 1.5,
      "jobs": -0.5,
      "ownership": -0.5,
      "stability": -0.5
     },
     "reason": "Prices: cheaper goods and energy plus a richer world buying Adriatic tourism outweigh lost Italian-language call-centre jobs."
    }
   },
   {
    "entity": "GNB",
    "si": {
     "abundance": 0.025,
     "better": 0.52,
     "stagnation": 0.2,
     "decline": 0.12,
     "collapse": 0.135
    },
    "noSi": {
     "abundance": 0.0003,
     "better": 0.5,
     "stagnation": 0.22,
     "decline": 0.13,
     "collapse": 0.1497
    },
    "reading": {
     "channels": {
      "productivity": 0,
      "prices": 1.5,
      "jobs": 0,
      "ownership": -1,
      "stability": -1
     },
     "reason": "Stability: a coup-prone state with surveillance tools may entrench rulers rather than share gains, though cheaper food and medicine still reach it."
    }
   },
   {
    "entity": "SVN",
    "si": {
     "abundance": 0.26,
     "better": 0.56,
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
    },
    "reading": {
     "channels": {
      "productivity": 1.5,
      "prices": 1.5,
      "jobs": -0.5,
      "ownership": -0.5,
      "stability": -0.5
     },
     "reason": "Productivity: high AI use, skilled workers and a capable state turn AI into output, while routine car-parts manufacturing loses some income."
    }
   },
   {
    "entity": "GNQ",
    "si": {
     "abundance": 0.015,
     "better": 0.37,
     "stagnation": 0.23,
     "decline": 0.2,
     "collapse": 0.185
    },
    "noSi": {
     "abundance": 0.0003,
     "better": 0.4,
     "stagnation": 0.24,
     "decline": 0.19,
     "collapse": 0.1697
    },
    "reading": {
     "channels": {
      "productivity": 0,
      "prices": 1,
      "jobs": -1,
      "ownership": -1,
      "stability": -1
     },
     "reason": "Stability: an entrenched elite with surveillance tools captures gains while faster decarbonisation drains the oil rents it depends on."
    }
   },
   {
    "entity": "LVA",
    "si": {
     "abundance": 0.23,
     "better": 0.58,
     "stagnation": 0.08,
     "decline": 0.05,
     "collapse": 0.06
    },
    "noSi": {
     "abundance": 0.005000000000000001,
     "better": 0.6900000000000001,
     "stagnation": 0.14000000000000004,
     "decline": 0.09000000000000001,
     "collapse": 0.07500000000000001
    },
    "reading": {
     "channels": {
      "productivity": 1.5,
      "prices": 1.5,
      "jobs": -0.5,
      "ownership": -0.5,
      "stability": -0.5
     },
     "reason": "Productivity: heavy AI use and an EU-level state raise output per person and offset a shrinking workforce; Russia is the main threat."
    }
   },
   {
    "entity": "MKD",
    "si": {
     "abundance": 0.13,
     "better": 0.64,
     "stagnation": 0.1,
     "decline": 0.07,
     "collapse": 0.06
    },
    "noSi": {
     "abundance": 0.0030000000000000005,
     "better": 0.6400000000000001,
     "stagnation": 0.18000000000000002,
     "decline": 0.10000000000000002,
     "collapse": 0.07700000000000001
    },
    "reading": {
     "channels": {
      "productivity": 1,
      "prices": 1.5,
      "jobs": -0.5,
      "ownership": -0.5,
      "stability": -0.5
     },
     "reason": "Prices: cheaper imported energy and goods help most, while assembly jobs in foreign-owned auto-parts zones are exposed to robots."
    }
   },
   {
    "entity": "BHR",
    "si": {
     "abundance": 0.08,
     "better": 0.5,
     "stagnation": 0.2,
     "decline": 0.12,
     "collapse": 0.1
    },
    "noSi": {
     "abundance": 0.0020000000000000005,
     "better": 0.45000000000000007,
     "stagnation": 0.25000000000000006,
     "decline": 0.18000000000000002,
     "collapse": 0.11800000000000001
    },
    "reading": {
     "channels": {
      "productivity": 1,
      "prices": 1,
      "jobs": -1,
      "ownership": -0.5,
      "stability": -0.5
     },
     "reason": "Jobs: its finance and back-office services hub is exposed to AI, and with heavy debt and little sovereign wealth it can buy little ownership."
    }
   },
   {
    "entity": "TLS",
    "si": {
     "abundance": 0.03,
     "better": 0.57,
     "stagnation": 0.18,
     "decline": 0.11,
     "collapse": 0.11
    },
    "noSi": {
     "abundance": 0.0003,
     "better": 0.55,
     "stagnation": 0.2,
     "decline": 0.13,
     "collapse": 0.1197
    },
    "reading": {
     "channels": {
      "productivity": 0,
      "prices": 1.5,
      "jobs": 0,
      "ownership": -1,
      "stability": -0.5
     },
     "reason": "Prices: cheaper food, medicine and energy are what reach a poor, low-AI economy with little routine work to lose."
    }
   },
   {
    "entity": "CYP",
    "si": {
     "abundance": 0.22,
     "better": 0.58,
     "stagnation": 0.1,
     "decline": 0.05,
     "collapse": 0.05
    },
    "noSi": {
     "abundance": 0.008,
     "better": 0.62,
     "stagnation": 0.2,
     "decline": 0.1,
     "collapse": 0.072
    },
    "reading": {
     "channels": {
      "productivity": 1.5,
      "prices": 1.5,
      "jobs": -1,
      "ownership": 0,
      "stability": -0.5
     },
     "reason": "Jobs: exported finance, shipping and professional services are highly automatable, offset by heavy AI use and a tax regime that draws holding firms."
    }
   },
   {
    "entity": "TTO",
    "si": {
     "abundance": 0.06,
     "better": 0.52,
     "stagnation": 0.2,
     "decline": 0.13,
     "collapse": 0.09
    },
    "noSi": {
     "abundance": 0.002,
     "better": 0.528,
     "stagnation": 0.23,
     "decline": 0.15,
     "collapse": 0.09
    },
    "reading": {
     "channels": {
      "productivity": 0.5,
      "prices": 1,
      "jobs": -1,
      "ownership": -0.5,
      "stability": -0.5
     },
     "reason": "Jobs: gas-based ammonia and methanol exports lose out to green chemicals made with cheap clean power that AI speeds up."
    }
   },
   {
    "entity": "EST",
    "si": {
     "abundance": 0.29999999999999993,
     "better": 0.5299999999999999,
     "stagnation": 0.06999999999999999,
     "decline": 0.039999999999999994,
     "collapse": 0.059999999999999984
    },
    "noSi": {
     "abundance": 0.006000000000000001,
     "better": 0.7200000000000001,
     "stagnation": 0.12000000000000001,
     "decline": 0.08000000000000002,
     "collapse": 0.07400000000000001
    },
    "reading": {
     "channels": {
      "productivity": 2,
      "prices": 1.5,
      "jobs": -0.5,
      "ownership": 0,
      "stability": -0.5
     },
     "reason": "Productivity: a fully digital state, a tech start-up base and very heavy AI use put it among the first to turn AI into output."
    }
   },
   {
    "entity": "SWZ",
    "si": {
     "abundance": 0.025,
     "better": 0.53,
     "stagnation": 0.19,
     "decline": 0.13,
     "collapse": 0.125
    },
    "noSi": {
     "abundance": 0.0005,
     "better": 0.54,
     "stagnation": 0.2,
     "decline": 0.13,
     "collapse": 0.1295
    },
    "reading": {
     "channels": {
      "productivity": 0,
      "prices": 1.5,
      "jobs": -0.5,
      "ownership": -1,
      "stability": -1
     },
     "reason": "Stability: an absolute monarchy gains new surveillance and control, while cheaper HIV medicine is the main benefit for ordinary people."
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
     "abundance": 0.1,
     "better": 0.67,
     "stagnation": 0.09,
     "decline": 0.07,
     "collapse": 0.07
    },
    "noSi": {
     "abundance": 0.003,
     "better": 0.727,
     "stagnation": 0.12,
     "decline": 0.08,
     "collapse": 0.07
    },
    "reading": {
     "channels": {
      "productivity": 1,
      "prices": 1,
      "jobs": -0.5,
      "ownership": -0.5,
      "stability": 0
     },
     "reason": "Productivity: good AI uptake for Africa lifts output, but offshore finance, BPO and textiles are exposed to automation."
    }
   },
   {
    "entity": "DJI",
    "si": {
     "abundance": 0.04,
     "better": 0.56,
     "stagnation": 0.16,
     "decline": 0.11,
     "collapse": 0.13
    },
    "noSi": {
     "abundance": 0.001,
     "better": 0.56,
     "stagnation": 0.18,
     "decline": 0.12,
     "collapse": 0.139
    },
    "reading": {
     "channels": {
      "productivity": 0.5,
      "prices": 1.5,
      "jobs": -0.5,
      "ownership": -1,
      "stability": -0.5
     },
     "reason": "Prices: cheaper energy, desalinated water and imported food help, but it owns nothing in AI and port work automates."
    }
   },
   {
    "entity": "FJI",
    "si": {
     "abundance": 0.060000000000000005,
     "better": 0.6200000000000001,
     "stagnation": 0.14000000000000004,
     "decline": 0.09000000000000001,
     "collapse": 0.09000000000000001
    },
    "noSi": {
     "abundance": 0.001,
     "better": 0.64,
     "stagnation": 0.17,
     "decline": 0.1,
     "collapse": 0.089
    },
    "reading": {
     "channels": {
      "productivity": 0.5,
      "prices": 1.5,
      "jobs": 0,
      "ownership": -1,
      "stability": -0.5
     },
     "reason": "Prices: cheaper imports and medicine help most; in-person tourism is hard to automate, but Fiji owns no AI capital."
    }
   },
   {
    "entity": "COM",
    "si": {
     "abundance": 0.035,
     "better": 0.56,
     "stagnation": 0.18,
     "decline": 0.105,
     "collapse": 0.12
    },
    "noSi": {
     "abundance": 0.001,
     "better": 0.55,
     "stagnation": 0.2,
     "decline": 0.115,
     "collapse": 0.134
    },
    "reading": {
     "channels": {
      "productivity": 0.5,
      "prices": 1.5,
      "jobs": -0.5,
      "ownership": -1,
      "stability": -0.5
     },
     "reason": "Prices: cheap goods and medicine help, but remittances from diaspora service jobs in France are exposed and the state is weak."
    }
   },
   {
    "entity": "SLB",
    "si": {
     "abundance": 0.03,
     "better": 0.53,
     "stagnation": 0.2,
     "decline": 0.11,
     "collapse": 0.13
    },
    "noSi": {
     "abundance": 0.001,
     "better": 0.5,
     "stagnation": 0.22,
     "decline": 0.12,
     "collapse": 0.159
    },
    "reading": {
     "channels": {
      "productivity": 0.5,
      "prices": 1.5,
      "jobs": 0,
      "ownership": -1,
      "stability": -0.5
     },
     "reason": "Prices: cheap imported goods and medicine matter most for a subsistence economy with little AI and weak institutions."
    }
   },
   {
    "entity": "GUY",
    "si": {
     "abundance": 0.08000000000000002,
     "better": 0.6700000000000002,
     "stagnation": 0.09500000000000001,
     "decline": 0.07500000000000001,
     "collapse": 0.08000000000000002
    },
    "noSi": {
     "abundance": 0.0030000000000000005,
     "better": 0.7000000000000001,
     "stagnation": 0.11000000000000001,
     "decline": 0.09000000000000001,
     "collapse": 0.09700000000000002
    },
    "reading": {
     "channels": {
      "productivity": 0.5,
      "prices": 1,
      "jobs": -0.5,
      "ownership": 0,
      "stability": -0.5
     },
     "reason": "Jobs and exports: faster clean-energy tech could devalue oil, partly offset by a sovereign fund owning global assets."
    }
   },
   {
    "entity": "BTN",
    "si": {
     "abundance": 0.09,
     "better": 0.7,
     "stagnation": 0.08,
     "decline": 0.06,
     "collapse": 0.07
    },
    "noSi": {
     "abundance": 0.0020000000000000005,
     "better": 0.7400000000000001,
     "stagnation": 0.11000000000000001,
     "decline": 0.07000000000000002,
     "collapse": 0.07800000000000001
    },
    "reading": {
     "channels": {
      "productivity": 0.5,
      "prices": 1.5,
      "jobs": 0,
      "ownership": 0,
      "stability": 0
     },
     "reason": "Prices: cheaper goods help, and abundant clean hydropower can sell to India or power compute, so exports hold up."
    }
   },
   {
    "entity": "LUX",
    "si": {
     "abundance": 0.26,
     "better": 0.52,
     "stagnation": 0.11,
     "decline": 0.06,
     "collapse": 0.05
    },
    "noSi": {
     "abundance": 0.01,
     "better": 0.64,
     "stagnation": 0.2,
     "decline": 0.1,
     "collapse": 0.05
    },
    "reading": {
     "channels": {
      "productivity": 1.5,
      "prices": 1,
      "jobs": -1,
      "ownership": 0.5,
      "stability": 0
     },
     "reason": "Productivity: very high AI use and a strong state win out, though its fund-administration and banking jobs are highly automatable."
    }
   },
   {
    "entity": "MAC",
    "si": {
     "abundance": 0.15,
     "better": 0.6,
     "stagnation": 0.12,
     "decline": 0.07,
     "collapse": 0.06
    },
    "noSi": {
     "abundance": 0.005,
     "better": 0.62,
     "stagnation": 0.2,
     "decline": 0.105,
     "collapse": 0.07
    },
    "reading": {
     "channels": {
      "productivity": 1,
      "prices": 1,
      "jobs": 0.5,
      "ownership": 0,
      "stability": -0.5
     },
     "reason": "Jobs and exports: richer Chinese consumers raise demand for in-person gaming and tourism, under a tighter surveillance state."
    }
   },
   {
    "entity": "SUR",
    "si": {
     "abundance": 0.060000000000000005,
     "better": 0.6400000000000001,
     "stagnation": 0.13000000000000003,
     "decline": 0.09000000000000001,
     "collapse": 0.08000000000000002
    },
    "noSi": {
     "abundance": 0.002,
     "better": 0.66,
     "stagnation": 0.14,
     "decline": 0.1,
     "collapse": 0.098
    },
    "reading": {
     "channels": {
      "productivity": 0.5,
      "prices": 1.5,
      "jobs": -0.5,
      "ownership": -0.5,
      "stability": -0.5
     },
     "reason": "Prices: cheaper imported goods help most, while oil exports could lose value as AI speeds up clean energy."
    }
   },
   {
    "entity": "MNE",
    "si": {
     "abundance": 0.14,
     "better": 0.64,
     "stagnation": 0.11,
     "decline": 0.06,
     "collapse": 0.05
    },
    "noSi": {
     "abundance": 0.005,
     "better": 0.7,
     "stagnation": 0.15,
     "decline": 0.08,
     "collapse": 0.065
    },
    "reading": {
     "channels": {
      "productivity": 1,
      "prices": 1,
      "jobs": 0,
      "ownership": -0.5,
      "stability": 0
     },
     "reason": "Productivity: EU access to AI and transfers lift output, and coastal tourism is in-person work AI does not replace."
    }
   },
   {
    "entity": "MLT",
    "si": {
     "abundance": 0.18,
     "better": 0.59,
     "stagnation": 0.11,
     "decline": 0.065,
     "collapse": 0.055
    },
    "noSi": {
     "abundance": 0.006,
     "better": 0.7,
     "stagnation": 0.15,
     "decline": 0.08,
     "collapse": 0.064
    },
    "reading": {
     "channels": {
      "productivity": 1,
      "prices": 1,
      "jobs": -0.5,
      "ownership": 0,
      "stability": 0
     },
     "reason": "Productivity: high AI use lifts output, but iGaming, finance and remote services are exposed to automation."
    }
   },
   {
    "entity": "MDV",
    "si": {
     "abundance": 0.07000000000000002,
     "better": 0.6000000000000001,
     "stagnation": 0.13000000000000003,
     "decline": 0.09000000000000001,
     "collapse": 0.11000000000000001
    },
    "noSi": {
     "abundance": 0.003,
     "better": 0.56,
     "stagnation": 0.16,
     "decline": 0.137,
     "collapse": 0.14
    },
    "reading": {
     "channels": {
      "productivity": 0.5,
      "prices": 1.5,
      "jobs": 0.5,
      "ownership": -0.5,
      "stability": -0.5
     },
     "reason": "Prices: cheaper energy, desalination and engineering make adaptation affordable, and richer tourists raise demand."
    }
   },
   {
    "entity": "CPV",
    "si": {
     "abundance": 0.08,
     "better": 0.68,
     "stagnation": 0.1,
     "decline": 0.065,
     "collapse": 0.075
    },
    "noSi": {
     "abundance": 0.0020000000000000005,
     "better": 0.7000000000000001,
     "stagnation": 0.13000000000000003,
     "decline": 0.08000000000000002,
     "collapse": 0.08800000000000001
    },
    "reading": {
     "channels": {
      "productivity": 0.5,
      "prices": 1.5,
      "jobs": 0,
      "ownership": -0.5,
      "stability": 0
     },
     "reason": "Prices: cheaper imported food, energy and desalination help most; tourism gains offset remittance risk."
    }
   },
   {
    "entity": "BRN",
    "si": {
     "abundance": 0.1,
     "better": 0.56,
     "stagnation": 0.17,
     "decline": 0.1,
     "collapse": 0.07
    },
    "noSi": {
     "abundance": 0.004,
     "better": 0.52,
     "stagnation": 0.24,
     "decline": 0.156,
     "collapse": 0.08
    },
    "reading": {
     "channels": {
      "productivity": 0.5,
      "prices": 1,
      "jobs": -1,
      "ownership": 0.5,
      "stability": 0
     },
     "reason": "Jobs and exports: AI-driven clean energy erodes oil and gas income, partly offset by a sovereign fund that owns global capital."
    }
   },
   {
    "entity": "BLZ",
    "si": {
     "abundance": 0.060000000000000005,
     "better": 0.6300000000000001,
     "stagnation": 0.14000000000000004,
     "decline": 0.09000000000000001,
     "collapse": 0.08000000000000002
    },
    "noSi": {
     "abundance": 0.002,
     "better": 0.64,
     "stagnation": 0.17,
     "decline": 0.1,
     "collapse": 0.088
    },
    "reading": {
     "channels": {
      "productivity": 0.5,
      "prices": 1.5,
      "jobs": 0,
      "ownership": -1,
      "stability": -0.5
     },
     "reason": "Prices: cheaper imports help; tourism gains roughly offset call-centre jobs lost to AI, and it owns no AI capital."
    }
   },
   {
    "entity": "BHS",
    "si": {
     "abundance": 0.09000000000000001,
     "better": 0.5700000000000001,
     "stagnation": 0.16000000000000003,
     "decline": 0.10000000000000002,
     "collapse": 0.08000000000000002
    },
    "noSi": {
     "abundance": 0.003,
     "better": 0.54,
     "stagnation": 0.22,
     "decline": 0.137,
     "collapse": 0.1
    },
    "reading": {
     "channels": {
      "productivity": 0.5,
      "prices": 1,
      "jobs": 0,
      "ownership": -0.5,
      "stability": 0
     },
     "reason": "Prices: cheaper goods help, and richer US tourists offset offshore-finance jobs lost to automation."
    }
   },
   {
    "entity": "ISL",
    "si": {
     "abundance": 0.28,
     "better": 0.52,
     "stagnation": 0.1,
     "decline": 0.055,
     "collapse": 0.045
    },
    "noSi": {
     "abundance": 0.008,
     "better": 0.7,
     "stagnation": 0.17,
     "decline": 0.075,
     "collapse": 0.047
    },
    "reading": {
     "channels": {
      "productivity": 1.5,
      "prices": 1,
      "jobs": 0,
      "ownership": 0.5,
      "stability": 0
     },
     "reason": "Productivity: high AI use and cheap clean power for data centres; fishing, tourism and smelting are hard to automate away."
    }
   },
   {
    "entity": "VUT",
    "si": {
     "abundance": 0.03,
     "better": 0.55,
     "stagnation": 0.21,
     "decline": 0.11,
     "collapse": 0.1
    },
    "noSi": {
     "abundance": 0.001,
     "better": 0.54,
     "stagnation": 0.23,
     "decline": 0.119,
     "collapse": 0.11
    },
    "reading": {
     "channels": {
      "productivity": 0.5,
      "prices": 1.5,
      "jobs": -0.5,
      "ownership": -1,
      "stability": -0.5
     },
     "reason": "Prices: cheap imports and medicine help, but farm robots could cut seasonal-work remittances from Australia and NZ."
    }
   },
   {
    "entity": "BRB",
    "si": {
     "abundance": 0.09,
     "better": 0.62,
     "stagnation": 0.14,
     "decline": 0.08,
     "collapse": 0.07
    },
    "noSi": {
     "abundance": 0.0030000000000000005,
     "better": 0.6300000000000001,
     "stagnation": 0.19000000000000003,
     "decline": 0.10000000000000002,
     "collapse": 0.07700000000000001
    },
    "reading": {
     "channels": {
      "productivity": 0.5,
      "prices": 1.5,
      "jobs": 0,
      "ownership": -0.5,
      "stability": 0
     },
     "reason": "Prices: cheaper imports and energy help; richer tourists offset offshore-business services lost to AI."
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
     "abundance": 0.03,
     "better": 0.62,
     "stagnation": 0.13,
     "decline": 0.09,
     "collapse": 0.13
    },
    "noSi": {
     "abundance": 0.001,
     "better": 0.6,
     "stagnation": 0.16,
     "decline": 0.1,
     "collapse": 0.139
    },
    "reading": {
     "channels": {
      "productivity": 0.5,
      "prices": 1.5,
      "jobs": 0,
      "ownership": -1,
      "stability": -0.5
     },
     "reason": "Prices matter most: cheaper imported medicine, energy and food help a poor island that owns no AI and has a weak state to capture gains."
    }
   },
   {
    "entity": "WSM",
    "si": {
     "abundance": 0.03,
     "better": 0.66,
     "stagnation": 0.14,
     "decline": 0.09,
     "collapse": 0.08
    },
    "noSi": {
     "abundance": 0.002,
     "better": 0.64,
     "stagnation": 0.17,
     "decline": 0.1,
     "collapse": 0.088
    },
    "reading": {
     "channels": {
      "productivity": 0.5,
      "prices": 1.5,
      "jobs": -0.5,
      "ownership": -1,
      "stability": 0
     },
     "reason": "Prices help an import-dependent island most; remittances from migrants' manual jobs in New Zealand and Australia are exposed to automation."
    }
   },
   {
    "entity": "LCA",
    "si": {
     "abundance": 0.060000000000000005,
     "better": 0.6400000000000001,
     "stagnation": 0.13000000000000003,
     "decline": 0.08800000000000001,
     "collapse": 0.08200000000000002
    },
    "noSi": {
     "abundance": 0.004,
     "better": 0.61,
     "stagnation": 0.18,
     "decline": 0.12,
     "collapse": 0.086
    },
    "reading": {
     "channels": {
      "productivity": 0.5,
      "prices": 1.5,
      "jobs": 0,
      "ownership": -1,
      "stability": -0.5
     },
     "reason": "Prices help an import-dependent island; tourism work is hard to automate, but foreign-owned resorts and AI owners capture most gains."
    }
   },
   {
    "entity": "KIR",
    "si": {
     "abundance": 0.02,
     "better": 0.47,
     "stagnation": 0.19,
     "decline": 0.14,
     "collapse": 0.18
    },
    "noSi": {
     "abundance": 0.001,
     "better": 0.43,
     "stagnation": 0.2,
     "decline": 0.16,
     "collapse": 0.209
    },
    "reading": {
     "channels": {
      "productivity": 0.5,
      "prices": 1.5,
      "jobs": -0.5,
      "ownership": -0.5,
      "stability": -0.5
     },
     "reason": "Prices matter most: cheaper desalination, energy and medicine, but no AI ownership and rising seas limit what SI can do for atolls."
    }
   },
   {
    "entity": "SYC",
    "si": {
     "abundance": 0.08000000000000002,
     "better": 0.6300000000000001,
     "stagnation": 0.13000000000000003,
     "decline": 0.08500000000000002,
     "collapse": 0.07500000000000001
    },
    "noSi": {
     "abundance": 0.008,
     "better": 0.59,
     "stagnation": 0.19,
     "decline": 0.13,
     "collapse": 0.082
    },
    "reading": {
     "channels": {
      "productivity": 0.5,
      "prices": 1,
      "jobs": 0,
      "ownership": -0.5,
      "stability": 0
     },
     "reason": "Prices and richer travellers help; luxury tourism is hard to automate, but the islands own little of the AI stack."
    }
   },
   {
    "entity": "GRD",
    "si": {
     "abundance": 0.05,
     "better": 0.64,
     "stagnation": 0.14,
     "decline": 0.088,
     "collapse": 0.082
    },
    "noSi": {
     "abundance": 0.004,
     "better": 0.62,
     "stagnation": 0.18,
     "decline": 0.11,
     "collapse": 0.086
    },
    "reading": {
     "channels": {
      "productivity": 0.5,
      "prices": 1.5,
      "jobs": -0.5,
      "ownership": -1,
      "stability": 0
     },
     "reason": "Prices help, but jobs: the offshore medical school, a big earner, is exposed if AI reshapes medical training and demand for doctors."
    }
   },
   {
    "entity": "FSM",
    "si": {
     "abundance": 0.02,
     "better": 0.52,
     "stagnation": 0.21,
     "decline": 0.12,
     "collapse": 0.13
    },
    "noSi": {
     "abundance": 0.001,
     "better": 0.48,
     "stagnation": 0.24,
     "decline": 0.14,
     "collapse": 0.139
    },
    "reading": {
     "channels": {
      "productivity": 0.5,
      "prices": 1.5,
      "jobs": -0.5,
      "ownership": -0.5,
      "stability": 0
     },
     "reason": "Prices help an aid-funded import economy; migrants' manual jobs in the US face automation, and the Compact trust fund is its only AI-linked stake."
    }
   },
   {
    "entity": "ABW",
    "si": {
     "abundance": 0.11,
     "better": 0.61,
     "stagnation": 0.14,
     "decline": 0.075,
     "collapse": 0.065
    },
    "noSi": {
     "abundance": 0.01,
     "better": 0.6,
     "stagnation": 0.2,
     "decline": 0.12,
     "collapse": 0.07
    },
    "reading": {
     "channels": {
      "productivity": 0.5,
      "prices": 1,
      "jobs": 0,
      "ownership": -0.5,
      "stability": 0
     },
     "reason": "Richer travellers and cheaper energy for desalination help; tourism work resists automation, but owning no AI limits the gain."
    }
   },
   {
    "entity": "VIR",
    "si": {
     "abundance": 0.13000000000000003,
     "better": 0.5700000000000001,
     "stagnation": 0.15000000000000002,
     "decline": 0.07000000000000002,
     "collapse": 0.08000000000000002
    },
    "noSi": {
     "abundance": 0.01,
     "better": 0.52,
     "stagnation": 0.24,
     "decline": 0.14,
     "collapse": 0.09
    },
    "reading": {
     "channels": {
      "productivity": 1,
      "prices": 1,
      "jobs": 0,
      "ownership": 0.5,
      "stability": -0.5
     },
     "reason": "Ownership through the US: federal transfers could share AI-economy gains with an ageing territory, while tourism resists automation."
    }
   },
   {
    "entity": "TON",
    "si": {
     "abundance": 0.025,
     "better": 0.59,
     "stagnation": 0.175,
     "decline": 0.11,
     "collapse": 0.1
    },
    "noSi": {
     "abundance": 0.002,
     "better": 0.58,
     "stagnation": 0.19,
     "decline": 0.12,
     "collapse": 0.108
    },
    "reading": {
     "channels": {
      "productivity": 0.5,
      "prices": 1.5,
      "jobs": -1,
      "ownership": -1,
      "stability": 0
     },
     "reason": "Jobs matter most: remittances from migrants' manual work abroad, near 40% of GDP, are exposed to automation; cheaper imports offset."
    }
   },
   {
    "entity": "VCT",
    "si": {
     "abundance": 0.04,
     "better": 0.61,
     "stagnation": 0.16,
     "decline": 0.098,
     "collapse": 0.092
    },
    "noSi": {
     "abundance": 0.0030000000000000005,
     "better": 0.5800000000000001,
     "stagnation": 0.19000000000000003,
     "decline": 0.13000000000000003,
     "collapse": 0.09700000000000002
    },
    "reading": {
     "channels": {
      "productivity": 0.5,
      "prices": 1.5,
      "jobs": 0,
      "ownership": -1,
      "stability": -0.5
     },
     "reason": "Prices help an import-dependent island, but high debt, crime and no AI ownership limit what it captures."
    }
   },
   {
    "entity": "ATG",
    "si": {
     "abundance": 0.07000000000000002,
     "better": 0.6300000000000001,
     "stagnation": 0.13000000000000003,
     "decline": 0.08000000000000002,
     "collapse": 0.09000000000000001
    },
    "noSi": {
     "abundance": 0.006,
     "better": 0.6,
     "stagnation": 0.18,
     "decline": 0.12,
     "collapse": 0.094
    },
    "reading": {
     "channels": {
      "productivity": 0.5,
      "prices": 1.5,
      "jobs": 0,
      "ownership": -1,
      "stability": 0
     },
     "reason": "Prices and richer travellers help a tourism island; it owns none of the AI, so ownership drags."
    }
   },
   {
    "entity": "AND",
    "si": {
     "abundance": 0.18,
     "better": 0.56,
     "stagnation": 0.14,
     "decline": 0.065,
     "collapse": 0.055
    },
    "noSi": {
     "abundance": 0.01,
     "better": 0.56,
     "stagnation": 0.24,
     "decline": 0.13,
     "collapse": 0.06
    },
    "reading": {
     "channels": {
      "productivity": 1,
      "prices": 0.5,
      "jobs": 0,
      "ownership": 0.5,
      "stability": 0
     },
     "reason": "Ownership: a low-tax haven may draw AI-enriched residents and capital, on top of good access to AI."
    }
   },
   {
    "entity": "DMA",
    "si": {
     "abundance": 0.04,
     "better": 0.61,
     "stagnation": 0.16,
     "decline": 0.098,
     "collapse": 0.092
    },
    "noSi": {
     "abundance": 0.0030000000000000005,
     "better": 0.5700000000000001,
     "stagnation": 0.20000000000000004,
     "decline": 0.13000000000000003,
     "collapse": 0.09700000000000002
    },
    "reading": {
     "channels": {
      "productivity": 0.5,
      "prices": 1.5,
      "jobs": 0,
      "ownership": -1,
      "stability": 0
     },
     "reason": "Prices help an import-dependent island; little AI access and no ownership limit gains, and hurricanes still set the pace."
    }
   },
   {
    "entity": "KNA",
    "si": {
     "abundance": 0.07000000000000002,
     "better": 0.6100000000000001,
     "stagnation": 0.14000000000000004,
     "decline": 0.09000000000000001,
     "collapse": 0.09000000000000001
    },
    "noSi": {
     "abundance": 0.006,
     "better": 0.59,
     "stagnation": 0.19,
     "decline": 0.12,
     "collapse": 0.094
    },
    "reading": {
     "channels": {
      "productivity": 0.5,
      "prices": 1.5,
      "jobs": -0.5,
      "ownership": -0.5,
      "stability": -0.5
     },
     "reason": "Jobs: offshore corporate services and medical schools are exposed to AI; cheaper imports and tourism demand offset."
    }
   },
   {
    "entity": "LIE",
    "si": {
     "abundance": 0.25,
     "better": 0.55,
     "stagnation": 0.1,
     "decline": 0.05,
     "collapse": 0.05
    },
    "noSi": {
     "abundance": 0.015,
     "better": 0.62,
     "stagnation": 0.21,
     "decline": 0.1,
     "collapse": 0.055
    },
    "reading": {
     "channels": {
      "productivity": 1.5,
      "prices": 0.5,
      "jobs": -0.5,
      "ownership": 1,
      "stability": 0
     },
     "reason": "Ownership: its wealth managers and industrial firms hold capital and the state can tax it, so AI gains accrue here."
    }
   },
   {
    "entity": "MCO",
    "si": {
     "abundance": 0.3,
     "better": 0.5,
     "stagnation": 0.1,
     "decline": 0.05,
     "collapse": 0.05
    },
    "noSi": {
     "abundance": 0.02,
     "better": 0.6,
     "stagnation": 0.22,
     "decline": 0.11,
     "collapse": 0.05
    },
    "reading": {
     "channels": {
      "productivity": 1,
      "prices": 0.5,
      "jobs": -0.5,
      "ownership": 1.5,
      "stability": 0
     },
     "reason": "Ownership dominates: residents are wealthy capital owners whose returns would soar, and high housing costs keep it that way."
    }
   },
   {
    "entity": "MHL",
    "si": {
     "abundance": 0.02,
     "better": 0.49,
     "stagnation": 0.19,
     "decline": 0.13,
     "collapse": 0.17
    },
    "noSi": {
     "abundance": 0.001,
     "better": 0.45,
     "stagnation": 0.2,
     "decline": 0.15,
     "collapse": 0.199
    },
    "reading": {
     "channels": {
      "productivity": 0.5,
      "prices": 1.5,
      "jobs": -0.5,
      "ownership": -0.5,
      "stability": 0
     },
     "reason": "Prices: cheaper energy, desalination and medicine help most; remittances from migrants' manual US jobs face automation."
    }
   },
   {
    "entity": "SMR",
    "si": {
     "abundance": 0.15999999999999998,
     "better": 0.5499999999999999,
     "stagnation": 0.15999999999999998,
     "decline": 0.06999999999999999,
     "collapse": 0.059999999999999984
    },
    "noSi": {
     "abundance": 0.008,
     "better": 0.5,
     "stagnation": 0.28,
     "decline": 0.14,
     "collapse": 0.072
    },
    "reading": {
     "channels": {
      "productivity": 1,
      "prices": 0.5,
      "jobs": -0.5,
      "ownership": 0,
      "stability": 0
     },
     "reason": "Productivity: good AI access in a rich Italian-linked economy, partly offset by banking and routine manufacturing jobs exposed to automation."
    }
   },
   {
    "entity": "PLW",
    "si": {
     "abundance": 0.05,
     "better": 0.57,
     "stagnation": 0.18,
     "decline": 0.11,
     "collapse": 0.09
    },
    "noSi": {
     "abundance": 0.004,
     "better": 0.53,
     "stagnation": 0.22,
     "decline": 0.145,
     "collapse": 0.101
    },
    "reading": {
     "channels": {
      "productivity": 0.5,
      "prices": 1.5,
      "jobs": 0,
      "ownership": -0.5,
      "stability": 0
     },
     "reason": "Prices help an import-dependent island; reef tourism resists automation, but climate rather than AI sets its fate."
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
     "abundance": 0.07,
     "better": 0.53,
     "stagnation": 0.15,
     "decline": 0.12,
     "collapse": 0.13
    },
    "noSi": {
     "abundance": 0.002,
     "better": 0.53,
     "stagnation": 0.2,
     "decline": 0.14,
     "collapse": 0.128
    },
    "reading": {
     "channels": {
      "productivity": 0.5,
      "prices": 1.5,
      "jobs": -0.5,
      "ownership": -0.5,
      "stability": -0.5
     },
     "reason": "Prices matter most: Nauru imports almost all food, fuel and medicine, so cheaper goods and desalination help, while it owns no AI and sells little labour."
    }
   },
   {
    "entity": "TUV",
    "si": {
     "abundance": 0.06,
     "better": 0.48,
     "stagnation": 0.165,
     "decline": 0.13,
     "collapse": 0.165
    },
    "noSi": {
     "abundance": 0.001,
     "better": 0.47,
     "stagnation": 0.21,
     "decline": 0.15,
     "collapse": 0.169
    },
    "reading": {
     "channels": {
      "productivity": 0.5,
      "prices": 1.5,
      "jobs": -1,
      "ownership": -0.5,
      "stability": -0.25
     },
     "reason": "Prices help most as Tuvalu imports nearly everything, but seafarer and seasonal-work remittances face automation, and it owns no AI to share in profits."
    }
   }
  ],
  "curves": []
 }
]
