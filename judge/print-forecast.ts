import { mkdirSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { cards } from '../src/data/cards.ts'
import { forecastRuns } from '../src/data/forecasts.ts'
import { curveEdges } from '../src/model/distribution.ts'
import { poolCurves, validateRun, verdictOf } from '../src/model/forecast.ts'
import type { Card, CurveForecast } from '../src/model/types.ts'
import { explainersFor, explainerText } from './forecast-files.ts'
import { buildCountryPrompt, buildCurvePrompt, buildTimelinePrompt, buildWorldPrompt, countryBatches, countrySchema, curveSchema, forecastPromptVersion, timelineSchema, worldSchema } from './forecast-prompt.ts'

/**
 * Writes the v0.3 judge prompts to a folder, one file per batch.
 * Usage: node --experimental-strip-types pdoom/judge/print-forecast.ts curves <dir>
 *        node --experimental-strip-types pdoom/judge/print-forecast.ts world <dir>
 *        node --experimental-strip-types pdoom/judge/print-forecast.ts countries <dir> [batch size]
 *        node --experimental-strip-types pdoom/judge/print-forecast.ts timeline <dir>
 * The world prompt uses the curves already imported; country prompts use the world already imported.
 */
const [mode, dir, size] = process.argv.slice(2)
if (!['curves', 'world', 'countries', 'timeline'].includes(mode ?? '') || dir === undefined) throw new Error('usage: print-forecast.ts curves|world|countries|timeline <dir> [batch size]')
mkdirSync(dir, { recursive: true })
const write = (name: string, prompt: string, schema: object) =>
  writeFileSync(join(dir, `${name}.md`), `<!-- forecast prompt version ${forecastPromptVersion} -->\n${prompt}\n\n## Output JSON schema\n\n${JSON.stringify(schema, null, 1)}\n`)

/** Cards whose curve still needs a judge: any band edge or mark without a published point, in either case. */
const needsJudging = (card: Card): boolean => curveEdges({ card: card }).length > 0

const pooledCurves = (): Record<string, CurveForecast> => poolCurves({ runs: forecastRuns.map((run) => validateRun({ run: run, cards: cards })), cards: cards })

if (mode === 'curves') {
  const groups = new Map<string, Card[]>()
  for (const card of cards.filter(needsJudging)) {
    const key = card.group === 'living' || card.group === 'ai' || card.group === 'natural' ? 'ai-natural-living' : card.group === 'civil' || card.group === 'war' ? 'war-civil' : card.group === 'disease' ? 'resources-disease' : card.group === 'resources' ? 'resources-disease' : card.group
    groups.set(key, [...(groups.get(key) ?? []), card])
  }
  for (const [key, list] of groups) write(`curves-${key}`, buildCurvePrompt({ cards: list, explainers: explainersFor({ cards: list, limit: 1400 }) }), curveSchema)
  console.log([...groups].map(([key, list]) => `${key}: ${list.length} cards`).join('\n'))
} else if (mode === 'world') {
  if (forecastRuns.every((run) => run.world === undefined) && forecastRuns.every((run) => run.curves.length === 0)) console.warn('warning: no curves imported yet')
  const aiNote = explainerText({ id: 'ai_progress_index', limit: 2500 }) ?? ''
  write('world', buildWorldPrompt({ cards: cards, curves: pooledCurves(), aiNote: aiNote }), worldSchema)
  console.log('wrote world.md')
} else if (mode === 'timeline') {
  write('timeline', buildTimelinePrompt({ verdict: verdictOf({ runs: forecastRuns, cards: cards }) }), timelineSchema)
  console.log('wrote timeline.md')
} else {
  const verdict = verdictOf({ runs: forecastRuns, cards: cards })
  const batches = countryBatches({ size: Number(size ?? '20') })
  batches.spotlight.forEach((ids, i) => write(`spotlight-${i + 1}`, buildCountryPrompt({ ids: ids, verdict: verdict }), countrySchema({ ids: ids })))
  batches.rest.forEach((ids, i) => write(`rest-${i + 1}`, buildCountryPrompt({ ids: ids, verdict: verdict }), countrySchema({ ids: ids })))
  console.log(`wrote ${batches.spotlight.length} spotlight and ${batches.rest.length} other country batches`)
}
