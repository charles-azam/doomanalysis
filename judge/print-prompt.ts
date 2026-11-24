import { mkdirSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { verdict } from '../src/data/site.ts'
import { buildCountryPrompt, buildWorldPrompt, countryBatches, countrySchema, promptVersion, worldSchema } from './prompt.ts'

/**
 * Writes the judge prompts to a folder, one file per batch, for runs made outside the API script.
 * Usage: node --experimental-strip-types pdoom/judge/print-prompt.ts world <dir>
 *        node --experimental-strip-types pdoom/judge/print-prompt.ts countries <dir> [batch size]
 * Country prompts use the world consensus already imported into src/data/judgments.ts.
 */
const [mode, dir, size] = process.argv.slice(2)
if ((mode !== 'world' && mode !== 'countries') || dir === undefined) throw new Error('usage: print-prompt.ts world|countries <dir> [batch size]')
mkdirSync(dir, { recursive: true })
const write = (name: string, prompt: string, schema: object) =>
  writeFileSync(join(dir, `${name}.md`), `<!-- prompt version ${promptVersion} -->\n${prompt}\n\n## Output JSON schema\n\n${JSON.stringify(schema, null, 1)}\n`)

if (mode === 'world') {
  write('world', buildWorldPrompt(), worldSchema())
  console.log('wrote world.md')
} else {
  const batches = countryBatches({ size: Number(size ?? '20') })
  batches.spotlight.forEach((ids, i) => write(`spotlight-${i + 1}`, buildCountryPrompt({ ids: ids, world: verdict.world }), countrySchema({ ids: ids })))
  batches.rest.forEach((ids, i) => write(`rest-${i + 1}`, buildCountryPrompt({ ids: ids, world: verdict.world }), countrySchema({ ids: ids })))
  console.log(`wrote ${batches.spotlight.length} spotlight and ${batches.rest.length} other country batches`)
}
