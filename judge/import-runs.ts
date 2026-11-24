import { readFileSync, writeFileSync } from 'node:fs'
import { judgeRuns } from '../src/data/judgments.ts'
import { validateRun, worldConsensus } from '../src/model/judgment.ts'
import type { EntityJudgment, JudgeRun, WorldJudgment } from '../src/model/types.ts'
import { promptVersion } from './prompt.ts'

/**
 * Validates judge answers (one JSON file per run) and adds them to src/data/judgments.ts.
 * Usage: node --experimental-strip-types pdoom/judge/import-runs.ts [--reset] <model> <method> <batch> <run.json>...
 * --reset drops every stored run first (use it for a new world batch). Country runs are validated against
 * the world consensus already stored. Any incoherent run stops the import: nothing invalid reaches the site.
 */
const args = process.argv.slice(2)
const reset = args[0] === '--reset'
const [model, method, batch, ...files] = reset ? args.slice(1) : args
if (model === undefined || method === undefined || batch === undefined || files.length === 0) {
  throw new Error('usage: import-runs.ts [--reset] <model> <method> <batch> <run.json>...')
}

const kept = reset ? [] : judgeRuns.filter((run) => run.batch !== batch)
const date = new Date().toISOString().slice(0, 10)
const fresh: JudgeRun[] = files.map((file, index) => {
  const answer = JSON.parse(readFileSync(file, 'utf8')) as { world?: WorldJudgment; entities: EntityJudgment[] }
  return { id: `${batch}-${date}-${index + 1}`, batch: batch, model: model, date: date, method: `${method}, prompt ${promptVersion}`, world: answer.world, entities: answer.entities }
})
const all = [...kept, ...fresh]
const worlds = all.flatMap((run) => (run.world ? [run.world] : []))
const consensusWorld = worldConsensus({ worlds: worlds })
for (const run of fresh) validateRun({ run: run, world: run.world ?? consensusWorld, checkUpper: true })

writeFileSync(
  new URL('../src/data/judgments.ts', import.meta.url),
  `import type { JudgeRun } from '../model/types.ts'

/** Validated judge runs, imported by pdoom/judge/import-runs.ts. Do not edit by hand. */
export const judgeRuns: JudgeRun[] = ${JSON.stringify(all, null, 1)}
`,
)
console.error(`imported ${fresh.length} validated runs into batch ${batch}; ${all.length} runs stored`)
