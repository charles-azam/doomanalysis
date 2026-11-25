import { readFileSync, writeFileSync } from 'node:fs'
import { cards } from '../src/data/cards.ts'
import { forecastRuns } from '../src/data/forecasts.ts'
import { history } from '../src/data/history.ts'
import { headline, verdictOf } from '../src/model/forecast.ts'
import type { HeadlineRecord } from '../src/model/types.ts'

/**
 * Appends the current headline to src/data/history.ts, after a re-judging. Past records are never changed.
 * Usage: node --experimental-strip-types pdoom/judge/record-headline.ts <version> <definitions> <note>
 */
const [version, definitions, ...words] = process.argv.slice(2)
if (version === undefined || definitions === undefined || words.length === 0) throw new Error('usage: record-headline.ts <version> <definitions> <note>')
if (history.some((record) => record.version === version)) throw new Error(`version ${version} is already recorded`)

const verdict = verdictOf({ runs: forecastRuns, cards: cards })
const top = headline({ world: verdict.world })
const round = (value: number) => Number(value.toFixed(4))
const record: HeadlineRecord = {
  date: verdict.date,
  version: version,
  definitions: definitions,
  doom: round(top.doom),
  doomGivenSi: round(top.doomGivenSi),
  abundance: round(top.abundance),
  si: round(top.si),
  note: words.join(' '),
}
const file = new URL('../src/data/history.ts', import.meta.url)
const source = readFileSync(file, 'utf8')
const entry = `  ${JSON.stringify(record, null, 2).replace(/\n/g, '\n  ').replace(/"([a-zA-Z]+)":/g, '$1:')},\n]\n`
writeFileSync(file, source.replace(/\n\]\n?$/, `\n${entry}`))
console.log(`recorded ${version}: doom ${record.doom}, doom | SI ${record.doomGivenSi}, abundance ${record.abundance}, SI ${record.si}`)
