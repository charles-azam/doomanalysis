import { readFileSync, writeFileSync, existsSync } from 'node:fs'
import { cards } from '../src/data/cards.ts'

/**
 * Downloads, word for word, the opening section of the English Wikipedia article chosen for each card,
 * with its link, revision and date, into src/data/generated/wikipedia.json. Nothing is rewritten.
 * Usage: node --experimental-strip-types scripts/wikipedia.ts
 * The text is shared under CC BY-SA 4.0; the card page credits it and links to the revision.
 */
export type WikipediaExtract = { title: string; url: string; revision: number; timestamp: string; text: string }

type ApiPage = { title: string; missing?: boolean; extract?: string; fullurl?: string; revisions?: { revid: number; timestamp: string }[] }
type ApiAnswer = { query?: { pages?: ApiPage[]; redirects?: { from: string; to: string }[]; normalized?: { from: string; to: string }[] } }

const output = new URL('../src/data/generated/wikipedia.json', import.meta.url)
const titles = [...new Set(cards.map((card) => card.wikipedia))].sort()

async function fetchBatch({ batch }: { batch: string[] }): Promise<Record<string, WikipediaExtract>> {
  const params = new URLSearchParams({
    action: 'query',
    prop: 'extracts|revisions|info',
    exintro: '1',
    explaintext: '1',
    exsectionformat: 'plain',
    rvprop: 'ids|timestamp',
    inprop: 'url',
    redirects: '1',
    format: 'json',
    formatversion: '2',
    titles: batch.join('|'),
  })
  const response = await fetch(`https://en.wikipedia.org/w/api.php?${params}`, { headers: { 'User-Agent': 'doom-analysis-build/0.3 (static site build)' } })
  if (!response.ok) throw new Error(`Wikipedia answered ${response.status}`)
  const answer = (await response.json()) as ApiAnswer
  const renamed = new Map<string, string>()
  for (const step of [...(answer.query?.normalized ?? []), ...(answer.query?.redirects ?? [])]) renamed.set(step.from, step.to)
  const resolve = (title: string): string => {
    let current = title
    for (let i = 0; i < 4 && renamed.has(current); i++) current = renamed.get(current) as string
    return current
  }
  const pages = new Map((answer.query?.pages ?? []).map((page) => [page.title, page]))
  const result: Record<string, WikipediaExtract> = {}
  for (const title of batch) {
    const page = pages.get(resolve(title))
    if (page === undefined || page.missing || !page.extract || !page.revisions?.[0] || !page.fullurl) throw new Error(`no Wikipedia article for "${title}"`)
    result[title] = { title: page.title, url: page.fullurl, revision: page.revisions[0].revid, timestamp: page.revisions[0].timestamp, text: page.extract.trim() }
  }
  return result
}

const extracts: Record<string, WikipediaExtract> = {}
for (let i = 0; i < titles.length; i += 20) Object.assign(extracts, await fetchBatch({ batch: titles.slice(i, i + 20) }))
const before = existsSync(output) ? (JSON.parse(readFileSync(output, 'utf8')) as Record<string, WikipediaExtract>) : {}
writeFileSync(output, `${JSON.stringify(extracts, null, 1)}\n`)
const changed = titles.filter((title) => before[title]?.revision !== extracts[title].revision).length
console.log(`${titles.length} articles, ${changed} new or updated`)
