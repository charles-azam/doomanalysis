import Anthropic from '@anthropic-ai/sdk'
import { writeFileSync } from 'node:fs'
import { validateRun } from '../src/model/judgment.ts'
import type { CountryJudgment, JudgeRun, WorldJudgment } from '../src/model/types.ts'
import { buildPrompt, outputSchema, promptVersion } from './prompt.ts'

/**
 * Runs the judge N times through the Claude API and writes each validated run to a JSON file.
 * Usage (from the repository root): npm run pdoom:judge -- 3 pdoom/judge/runs.json
 * Credentials come from the environment (ANTHROPIC_API_KEY or an `ant auth login` profile).
 * Paste the result into pdoom/src/data/judgments.ts after review.
 */
const model = 'claude-opus-5-5'
const count = Number(process.argv[2] ?? '3')
const outPath = process.argv[3] ?? 'pdoom/judge/runs.json'

type JudgeAnswer = { world: WorldJudgment; countries: CountryJudgment[] }

const client = new Anthropic()

async function judgeOnce({ index }: { index: number }): Promise<JudgeRun> {
  const stream = client.beta.messages.stream({
    model: model,
    max_tokens: 64000,
    betas: ['server-side-fallback-2026-07-01'],
    fallbacks: 'default',
    output_config: {
      effort: 'high',
      format: { type: 'json_schema', schema: outputSchema },
    },
    messages: [{ role: 'user', content: buildPrompt() }],
  })
  const message = await stream.finalMessage()
  if (message.stop_reason === 'refusal') throw new Error(`run ${index}: the judge declined (${message.stop_details?.category ?? 'no category'})`)
  if (message.stop_reason === 'max_tokens') throw new Error(`run ${index}: output was cut off at max_tokens`)
  const text = message.content.flatMap((block) => (block.type === 'text' ? [block.text] : [])).join('')
  const answer = JSON.parse(text) as JudgeAnswer
  const run: JudgeRun = {
    id: `api-${new Date().toISOString().slice(0, 10)}-${index}`,
    model: message.model,
    date: new Date().toISOString().slice(0, 10),
    method: `Claude API, structured output, prompt ${promptVersion}`,
    world: answer.world,
    countries: answer.countries,
  }
  return validateRun({ run: run, checkUpper: true })
}

const runs: JudgeRun[] = []
for (let index = 1; index <= count; index++) {
  console.error(`judge run ${index}/${count}…`)
  runs.push(await judgeOnce({ index: index }))
}
writeFileSync(outPath, JSON.stringify(runs, null, 2) + '\n')
console.error(`wrote ${runs.length} validated runs to ${outPath}`)
