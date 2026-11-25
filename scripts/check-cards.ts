import { pathToFileURL } from 'node:url'
import { cardSetProblems } from '../src/model/cards.ts'
import { curveEdges } from '../src/model/distribution.ts'
import type { Card } from '../src/model/types.ts'

/**
 * Checks one card file on its own, so a research agent can validate its work without the other files.
 * Usage: node --experimental-strip-types pdoom/scripts/check-cards.ts pdoom/src/data/cards/<file>.ts
 * The file must export `cards`. Missing parents are reported only as a note: the parent may live in another file.
 */
const file = process.argv[2]
if (file === undefined) throw new Error('usage: check-cards.ts <card file>')
const module = (await import(pathToFileURL(file).href)) as { cards?: Card[] }
if (!Array.isArray(module.cards)) throw new Error(`${file} must export \`cards\``)

const all = cardSetProblems({ cards: module.cards })
const notes = all.filter((problem) => problem.includes('does not exist'))
const problems = all.filter((problem) => !problem.includes('does not exist'))
for (const card of module.cards) {
  const edges = curveEdges({ card: card })
  const given = card.published.noSi.filter((point) => edges.includes(point.value)).length
  console.log(`${card.id}: ${card.bands.length} bands, ${edges.length} edges to judge, ${given} already published, ${card.published.noSi.length} published points`)
}
for (const note of notes) console.log(`note: ${note} in this file (fine if it lives in another card file)`)
if (problems.length > 0) {
  console.error(`\n${problems.length} problem(s):\n${problems.map((p) => `- ${p}`).join('\n')}`)
  process.exit(1)
}
console.log(`\n${module.cards.length} cards, no problems`)
