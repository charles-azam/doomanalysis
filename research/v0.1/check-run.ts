import { readFileSync } from 'node:fs'
import { validateRun } from '/Users/charlesazam/github/charles-azam.github.io/pdoom/src/model/judgment.ts'
for (const file of process.argv.slice(2)) {
  const answer = JSON.parse(readFileSync(file, 'utf8'))
  validateRun({ run: { id: file, model: 'm', date: 'd', method: 'm', ...answer }, checkUpper: true })
  const w = answer.world
  console.log(file.split('/').pop(), 'valid', { siBy2050: w.siBy2050, siBy2100: w.siBy2100, doomSi: w.si.doom, doomNoSi: w.noSi.doom, abSi: w.si.abundance, abNoSi: w.noSi.abundance })
  for (const c of answer.countries) console.log(' ', c.entity, 'collapse', c.si.collapse, c.noSi.collapse, 'abundance', c.si.abundance, c.noSi.abundance)
}
