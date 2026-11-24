import Anthropic from '@anthropic-ai/sdk'
import { writeFileSync } from 'node:fs'
import { verdict } from '../src/data/site.ts'
import { buildCountryPrompt, buildWorldPrompt, countryBatches, countrySchema, worldSchema } from './prompt.ts'

/**
 * Runs judge batches through the Claude API and writes each answer to a JSON file for import-runs.ts.
 * Usage (repository root): npm run pdoom:judge -- world 3 <dir>    then import, then
 *                          npm run pdoom:judge -- countries 1 <dir>
 * Credentials come from the environment (ANTHROPIC_API_KEY or an `ant auth login` profile).
 */
const model = 'claude-opus-5-5'
const [mode, count, dir] = process.argv.slice(2)
if ((mode !== 'world' && mode !== 'countries') || dir === undefined) throw new Error('usage: run.ts world|countries <runs> <dir>')

const client = new Anthropic()

async function ask({ prompt, schema }: { prompt: string; schema: { [key: string]: unknown } }): Promise<string> {
  const stream = client.beta.messages.stream({
    model: model,
    max_tokens: 64000,
    betas: ['server-side-fallback-2026-07-01'],
    fallbacks: 'default',
    output_config: { effort: 'high', format: { type: 'json_schema', schema: schema } },
    messages: [{ role: 'user', content: prompt }],
  })
  const message = await stream.finalMessage()
  if (message.stop_reason === 'refusal') throw new Error(`the judge declined (${message.stop_details?.category ?? 'no category'})`)
  if (message.stop_reason === 'max_tokens') throw new Error('output was cut off at max_tokens')
  return message.content.flatMap((block) => (block.type === 'text' ? [block.text] : [])).join('')
}

for (let run = 1; run <= Number(count ?? '1'); run++) {
  if (mode === 'world') {
    writeFileSync(`${dir}/world-${run}.json`, await ask({ prompt: buildWorldPrompt(), schema: worldSchema() }))
  } else {
    const batches = countryBatches({ size: 20 })
    for (const [name, ids] of [...batches.spotlight.map((b, i) => [`spotlight-${i + 1}`, b] as const), ...batches.rest.map((b, i) => [`rest-${i + 1}`, b] as const)]) {
      writeFileSync(`${dir}/${name}-${run}.json`, await ask({ prompt: buildCountryPrompt({ ids: ids, world: verdict.world }), schema: countrySchema({ ids: ids }) }))
    }
  }
  console.error(`run ${run} written`)
}
