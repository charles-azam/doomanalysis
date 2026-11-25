import { readFileSync, writeFileSync } from 'node:fs'
import { cards } from '../src/data/cards.ts'
import { forecastRuns } from '../src/data/forecasts.ts'
import { validateRun, validateTimeline, verdictOf } from '../src/model/forecast.ts'
import type { CurveForecast, ForecastRun, PlaceForecast, TimelinePoint, WorldForecast } from '../src/model/types.ts'
import { forecastPromptVersion } from './forecast-prompt.ts'

/**
 * Validates v0.3 judge answers (one JSON file per run) and stores them in src/data/forecasts.ts.
 * Usage: node --experimental-strip-types pdoom/judge/import-forecasts.ts [--reset|--check] <model> <method> <batch> <run.json>...
 * --reset drops every stored run first. --check validates and prints, without writing anything.
 * A batch replaces any earlier runs of the same batch. Any incoherent run stops the import.
 */
const args = process.argv.slice(2)
const flag = args[0]?.startsWith('--') ? args[0] : undefined
const [model, method, batch, ...files] = flag ? args.slice(1) : args
if (model === undefined || method === undefined || batch === undefined || files.length === 0) {
  throw new Error('usage: import-forecasts.ts [--reset|--check] <model> <method> <batch> <run.json>...')
}

type Answer = { world?: WorldForecast & { rationale?: string }; places?: (PlaceForecast & { rationale?: string })[]; curves?: CurveForecast[]; timeline?: TimelinePoint[] }

const date = new Date().toISOString().slice(0, 10)
const fresh: ForecastRun[] = files.map((file, index) => {
  const answer = JSON.parse(readFileSync(file, 'utf8')) as Answer
  const world = answer.world === undefined ? undefined : { siBy2050: answer.world.siBy2050, siBy2100: answer.world.siBy2100, si: answer.world.si, noSi: answer.world.noSi }
  const run: ForecastRun = {
    id: `${batch}-${date}-${index + 1}`,
    batch: batch,
    model: model,
    date: date,
    method: `${method}, prompt ${forecastPromptVersion}`,
    world: world,
    places: (answer.places ?? []).map((place) => ({ entity: place.entity, si: place.si, noSi: place.noSi, ...(place.reading ? { reading: place.reading } : {}) })),
    curves: answer.curves ?? [],
    timeline: answer.timeline?.map((point) => ({ year: point.year, si: point.si, atLeast3: point.atLeast3, atLeast4: point.atLeast4, doom: point.doom })),
  }
  return validateRun({ run: run, cards: cards })
})

// A timeline is checked against the world already stored: it must climb to the pooled 2100 values.
if (fresh.some((run) => run.timeline !== undefined)) {
  const stored = verdictOf({ runs: forecastRuns.filter((run) => run.batch !== batch), cards: cards })
  for (const run of fresh) if (run.timeline) validateTimeline({ points: run.timeline, world: stored.world })
}

for (const run of fresh) console.error(`${run.id}: ${run.world ? 'world, ' : ''}${run.places.length} places, ${run.curves.length} curves: valid`)
if (flag === '--check') process.exit(0)

const kept = flag === '--reset' ? [] : forecastRuns.filter((run) => run.batch !== batch)
const all = [...kept, ...fresh]
writeFileSync(
  new URL('../src/data/forecasts.ts', import.meta.url),
  `import type { ForecastRun } from '../model/types.ts'

/** Validated v0.3 judge runs, imported by pdoom/judge/import-forecasts.ts. Do not edit by hand. */
export const forecastRuns: ForecastRun[] = ${JSON.stringify(all, null, 1)}
`,
)
console.error(`imported ${fresh.length} validated runs into batch ${batch}; ${all.length} runs stored`)
