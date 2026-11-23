import { readFileSync, writeFileSync } from 'node:fs'
import { validateRun } from '../src/model/judgment.ts'
import type { CountryJudgment, JudgeRun, WorldJudgment } from '../src/model/types.ts'
import { promptVersion } from './prompt.ts'

/**
 * Validates judge answers (one JSON file per run) and writes them to src/data/judgments.ts.
 * Usage: node --experimental-strip-types pdoom/judge/import-runs.ts <model> <method> <run.json>...
 * Any incoherent run stops the import: nothing invalid reaches the site.
 */
const [model, method, ...files] = process.argv.slice(2)
if (model === undefined || method === undefined || files.length === 0) {
  throw new Error('usage: import-runs.ts <model> <method> <run.json>...')
}

const date = new Date().toISOString().slice(0, 10)
const runs: JudgeRun[] = files.map((file, index) => {
  const answer = JSON.parse(readFileSync(file, 'utf8')) as { world: WorldJudgment; countries: CountryJudgment[] }
  const run: JudgeRun = {
    id: `run-${date}-${index + 1}`,
    model: model,
    date: date,
    method: `${method}, prompt ${promptVersion}`,
    world: answer.world,
    countries: answer.countries,
  }
  return validateRun({ run: run, checkUpper: true })
})

const body = `import type { JudgeRun } from '../model/types.ts'

/** Validated judge runs, imported by pdoom/judge/import-runs.ts. Do not edit by hand. */
export const judgeRuns: JudgeRun[] = ${JSON.stringify(runs, null, 2)}
`
writeFileSync(new URL('../src/data/judgments.ts', import.meta.url), body)
console.error(`imported ${runs.length} validated runs`)
