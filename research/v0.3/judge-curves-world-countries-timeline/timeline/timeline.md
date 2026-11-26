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

## What the judges have already settled (pooled from independent runs)
- Superintelligence deployed: 60% by 2050 and 80% by 2100.
- By 2100, in our forecast (mixed over superintelligence):
  - the worst thing to happen to the world reaches level 3 or worse: 44% (shares by root cause: climate 19%, resources 13%, war 16%, civil 21%, disease 8.9%, ai 20%, natural 1.4%);
  - level 4 or worse: 14% (shares: climate 2.7%, resources 12%, war 19%, civil 19%, disease 7.8%, ai 39%, natural 1.1%);
  - doom, level 5: 4.4% (shares: climate 0.9%, resources 1.7%, war 12%, civil 3.8%, disease 8.4%, ai 71%, natural 1.7%).
- If superintelligence arrives, doom is 5.2%; if it never does, 1%.

## Your task: when it happens
Give the cumulative chance, from today, of each of these by 2030, 2040, 2050, 2075:
- si: superintelligence is deployed by that year;
- atLeast3: by that year, a catastrophe of level 3 or worse has happened;
- atLeast4: level 4 or worse has happened;
- doom: level 5 has happened.

Think about timing: when superintelligence is likely to arrive, how soon after it AI risk would play out, how warming and resource limits build up through the century, and how wars and pandemics strike at any time.

Rules (your answer is rejected if it breaks them):
- Every value is between 0 and 1, and none falls from one year to the next.
- None may exceed its 2100 value above.
- si by 2050 must stay within 3 points of 60%.

Answer only with JSON: {"timeline": [{"year": 2030, "si": .., "atLeast3": .., "atLeast4": .., "doom": ..}, ... one object for each of 2030, 2040, 2050, 2075], "rationale": "two or three sentences on timing"}.

## Output JSON schema

{
 "type": "object",
 "additionalProperties": false,
 "required": [
  "timeline",
  "rationale"
 ],
 "properties": {
  "timeline": {
   "type": "array",
   "items": {
    "type": "object",
    "additionalProperties": false,
    "required": [
     "year",
     "si",
     "atLeast3",
     "atLeast4",
     "doom"
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
     "si": {
      "type": "number"
     },
     "atLeast3": {
      "type": "number"
     },
     "atLeast4": {
      "type": "number"
     },
     "doom": {
      "type": "number"
     }
    }
   }
  },
  "rationale": {
   "type": "string"
  }
 }
}
