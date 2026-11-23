import { buildPrompt, outputSchema, promptVersion } from './prompt.ts'

// Prints the exact judge prompt and its output schema, for runs made outside the API script.
console.log(`<!-- prompt version ${promptVersion} -->`)
console.log(buildPrompt())
console.log('\n## Output JSON schema\n')
console.log(JSON.stringify(outputSchema, null, 2))
