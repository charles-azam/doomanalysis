export const meta = {
  name: 'doom-judges',
  description: 'Independent judges answer one round of Doom Analysis prompts and validate their answers',
  phases: [{ title: 'Judge', detail: 'one agent per run, each reading only its prompt file' }],
}

// Absolute path of your checkout of this repository, passed as args.root.
const ROOT = args.root

const SCHEMA = {
  type: 'object',
  properties: { file: { type: 'string' }, valid: { type: 'boolean' }, note: { type: 'string' } },
  required: ['file', 'valid'],
}

const prompt = (job) => `You are an independent judge for Doom Analysis, a public forecasting site. Your instructions and all your evidence are in one file:
${job.prompt}

Read that file in full. It is your only evidence, and it ends with the JSON schema of your answer.

Use tools for three things only: reading that one file, writing your answer, and running the check below. Do not search the web, open any other file, or look for other judges' answers: the site relies on each judge being independent.

Think it through carefully, then write your answer as JSON exactly in the format the file asks for, to:
${job.out}

Then run, from ${ROOT}:
npm run --silent import -- --check judge check ${job.batch} ${job.out}

If it reports an error, the answer broke a coherence rule. Fix only what the error names, keeping the rest of your judgment, and run the check again until it passes.

Return the answer file path, whether the check passes, and one sentence on anything you found hard.`

phase('Judge')
const results = await parallel(
  args.jobs.map((job) => () =>
    agent(prompt(job), { label: `${job.batch}-${job.run}`, phase: 'Judge', schema: SCHEMA, agentType: 'general-purpose', model: 'opus' }).then((r) => ({ ...job, result: r })),
  ),
)
const done = results.filter(Boolean)
log(`${done.filter((d) => d.result?.valid).length} of ${args.jobs.length} answers valid`)
return done.map((d) => ({ batch: d.batch, run: d.run, out: d.out, valid: d.result?.valid ?? false, note: d.result?.note ?? '' }))
