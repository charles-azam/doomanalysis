<!-- forecast prompt version 2026-11-25.1 -->
You are one of several independent judges for a public forecasting site, Doom Analysis. Give your own calibrated probabilities. Do not anchor on any number you believe the site's author wants, and do not soften or dramatise. Do not use tools: reason from the evidence below and from what you know. Today is 24 November 2026; every question is about the years up to the end of 2100.

## Definitions (fixed)
- A danger level is the share of humanity that dies or lastingly loses decent living conditions. Level 1 is under 1%, level 2 is 1 to 10%, level 3 is 10 to 50%, level 4 is over 50% with recovery still possible, and level 5 is doom. Every hazard is read on this one scale, so cards can be compared.
  - Level 0, None: nobody.
  - Level 1, Limited: under 1% of humanity (for scale: COVID-19).
  - Level 2, Serious: 1 to 10% of humanity (for scale: World War II, 1918 flu).
  - Level 3, Severe: 10 to 50% of humanity (for scale: Black Death in Europe).
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

## Your task: level 2
Level 2 means 1 to 10% of humanity dies or lastingly loses decent living conditions. For scale: World War II killed about 3% of humanity, the 1918 flu about 2.7%. COVID-19, well under 1%, was level 1.

For each case ("si": superintelligence deployed before 2100; "noSi": not) and each of the seven root causes, give the chance that the worst thing to happen to the world by 2100 reaches level 2 or worse AND that this cause started it.
Each possible future has one worst level and one root cause: the cause that started the chain, not the one that struck the final blow. A drought that leads to a war counts for climate. Because every future has exactly one root cause, the seven causes add up to 100%.

What is already settled (pooled from independent judges), and what the cards say on their own:
- climate (Climate and Earth systems): level 3+ already settled at 7.3% with superintelligence, 12% without. Its most dangerous card alone gives level 2+ at 87% with, 99% without.
- resources (Resources and energy): level 3+ already settled at 5.6% with superintelligence, 6.7% without. Its most dangerous card alone gives level 2+ at 52% with, 65% without.
- war (War): level 3+ already settled at 7.2% with superintelligence, 6% without. Its most dangerous card alone gives level 2+ at 24% with, 21% without.
- civil (Civil war and state breakdown): level 3+ already settled at 9.7% with superintelligence, 7.2% without. Its most dangerous card alone gives level 2+ at 97% with, 97% without.
- disease (Pandemics and disease): level 3+ already settled at 3.8% with superintelligence, 4% without. Its most dangerous card alone gives level 2+ at 43% with, 71% without.
- ai (AI takeover): level 3+ already settled at 11% with superintelligence, 1.8% without. Its most dangerous card alone gives level 2+ at 12% with, 2.6% without.
- natural (Natural disasters and the unknown): level 3+ already settled at 0.6% with superintelligence, 0.6% without. Its most dangerous card alone gives level 2+ at 3.8% with, 3.8% without.

Then give the cumulative chance, from today, that the world has had a level 2 or worse catastrophe (any cause, our forecast mixed over superintelligence at P(SI by 2100) = 80%) by 2030, 2040, 2050, 2075.

Rules (your answer is rejected if it breaks them):
- Every value is between 0 and 1.
- Each cause's level-2 chance is at least its settled level-3 chance in the same case.
- In each case the seven causes sum to at most 1.
- The timeline never falls, and never exceeds the 2100 total implied by your causes.

Answer only with JSON: {"level2": {"si": {"climate": .., "resources": .., "war": .., "civil": .., "disease": .., "ai": .., "natural": ..}, "noSi": {...}, "timeline": [{"year": 2030, "atLeast2": ..}, ... one per year 2030, 2040, 2050, 2075]}, "rationale": "two or three sentences"}.

## Output JSON schema

{
 "type": "object",
 "additionalProperties": false,
 "required": [
  "level2",
  "rationale"
 ],
 "properties": {
  "level2": {
   "type": "object",
   "additionalProperties": false,
   "required": [
    "si",
    "noSi",
    "timeline"
   ],
   "properties": {
    "si": {
     "type": "object",
     "additionalProperties": false,
     "required": [
      "climate",
      "resources",
      "war",
      "civil",
      "disease",
      "ai",
      "natural"
     ],
     "properties": {
      "climate": {
       "type": "number"
      },
      "resources": {
       "type": "number"
      },
      "war": {
       "type": "number"
      },
      "civil": {
       "type": "number"
      },
      "disease": {
       "type": "number"
      },
      "ai": {
       "type": "number"
      },
      "natural": {
       "type": "number"
      }
     }
    },
    "noSi": {
     "type": "object",
     "additionalProperties": false,
     "required": [
      "climate",
      "resources",
      "war",
      "civil",
      "disease",
      "ai",
      "natural"
     ],
     "properties": {
      "climate": {
       "type": "number"
      },
      "resources": {
       "type": "number"
      },
      "war": {
       "type": "number"
      },
      "civil": {
       "type": "number"
      },
      "disease": {
       "type": "number"
      },
      "ai": {
       "type": "number"
      },
      "natural": {
       "type": "number"
      }
     }
    },
    "timeline": {
     "type": "array",
     "items": {
      "type": "object",
      "additionalProperties": false,
      "required": [
       "year",
       "atLeast2"
      ],
      "properties": {
       "year": {
        "type": "number",
        "enum": [
         2030,
         2040,
         2050,
         2075
        ]
       },
       "atLeast2": {
        "type": "number"
       }
      }
     }
    }
   }
  },
  "rationale": {
   "type": "string"
  }
 }
}
