import { readFileSync, existsSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import type { Card } from '../src/model/types.ts'
import { plainText } from './forecast-prompt.ts'

const explainerDir = fileURLToPath(new URL('../src/content/explainers/', import.meta.url))

/** The body of a card's explainer as plain text, read from disk. */
export function explainerText({ id, limit }: { id: string; limit: number }): string | undefined {
  const path = `${explainerDir}${id}.md`
  if (!existsSync(path)) return undefined
  return plainText({ markdown: readFileSync(path, 'utf8'), limit: limit })
}

export const explainersFor = ({ cards, limit }: { cards: Card[]; limit: number }): Record<string, string> =>
  Object.fromEntries(cards.flatMap((card) => {
    const text = explainerText({ id: card.id, limit: limit })
    return text === undefined ? [] : [[card.id, text]]
  }))
