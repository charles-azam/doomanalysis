import { readFileSync } from 'node:fs'
import { verdict } from '/private/tmp/claude-501/-Users-charlesazam-github-charles-azam-github-io/df1e3f5e-644b-4693-b74a-7f5a0edd45c2/scratchpad/doom-wt/pdoom/src/data/site.ts'
import { validateRun } from '/private/tmp/claude-501/-Users-charlesazam-github-charles-azam-github-io/df1e3f5e-644b-4693-b74a-7f5a0edd45c2/scratchpad/doom-wt/pdoom/src/model/judgment.ts'
for (const file of process.argv.slice(2)) {
  const answer = JSON.parse(readFileSync(file, 'utf8'))
  let status = 'valid'
  try { validateRun({ run: { id: file, batch: 'check', model: 'm', date: 'd', method: 'm', entities: answer.entities }, world: verdict.world, checkUpper: true }) } catch (error) { status = `INVALID: ${(error as Error).message}` }
  console.log(file.split('/').pop(), answer.entities.length, 'places', status)
}
