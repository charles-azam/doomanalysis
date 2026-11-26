import type { HeadlineRecord } from '../model/types.ts'

/**
 * Every headline the site has published, oldest first. A record is added each time judges are re-run
 * (judge/import-forecasts.ts does it); none is ever back-filled. Do not edit past records.
 * `definitions` names the definitions in force: when it changes, the chart marks the break.
 */
export const history: HeadlineRecord[] = [
  {
    date: '2026-11-23',
    version: 'v0.1',
    definitions: 'v0.1',
    doom: 0.1034,
    doomGivenSi: 0.13,
    abundance: 0.3576,
    si: 0.72,
    note: 'First estimate. Abundance meant the five essentials for 90% of people.',
  },
  {
    date: '2026-11-24',
    version: 'v0.2',
    definitions: 'v0.2',
    doom: 0.0996,
    doomGivenSi: 0.115,
    abundance: 0.127,
    si: 0.78,
    note: 'Abundance redefined as near-free essentials; every country judged.',
  },
  {
    date: "2026-11-25",
    version: "v0.3",
    definitions: "v0.3",
    doom: 0.0438,
    doomGivenSi: 0.0522,
    abundance: 0.0642,
    si: 0.8,
    note: "New definitions: one danger scale, seven root causes, six outcomes per place; abundance is five times the rich world today."
  },
]
