import { checkCurve } from './distribution.ts'
import type { Band, Card, CurvePoint } from './types.ts'

const limits = { name: 40, summary: 240, bandLabel: 70, siNote: 280, metric: 90 }

const sourced = ({ item }: { item: Band | CurvePoint }): boolean => item.basis === 'judged' || (Boolean(item.source) && Boolean(item.url))

/** Every problem with one card, as sentences. An empty list means the card is valid. */
export function cardProblems({ card }: { card: Card }): string[] {
  const problems: string[] = []
  const say = (text: string): void => {
    problems.push(`${card.id}: ${text}`)
  }
  if (!/^[a-z][a-z0-9_]*$/.test(card.id)) say('id must be lower snake_case')
  if (card.name.length === 0 || card.name.length > limits.name) say(`name must be 1–${limits.name} characters`)
  if (card.summary.length === 0 || card.summary.length > limits.summary) say(`summary must be 1–${limits.summary} characters`)
  if (card.metric.length === 0 || card.metric.length > limits.metric) say(`metric must be 1–${limits.metric} characters`)
  if (card.siNote.length === 0 || card.siNote.length > limits.siNote) say(`siNote must be 1–${limits.siNote} characters`)
  if (card.wikipedia.length === 0 || card.wikipedia.includes('http')) say('wikipedia must be an article title, not a link')
  if (card.parent === card.id) say('a card cannot be its own parent')
  if (!(card.axis.min < card.axis.max)) say('axis.min must be below axis.max')
  if (card.axis.log && card.axis.min <= 0) say('a log axis needs a positive minimum')
  if (card.group === 'technology' && card.scale === 'danger') say('technology cards use the potential scale, or none')
  if (card.group !== 'technology' && card.scale === 'potential') say('only technology cards use the potential scale')
  if (card.today.value < card.axis.min || card.today.value > card.axis.max) say(`today's value ${card.today.value} is outside the axis`)
  if (!card.today.source || !card.today.url) say("today's value needs a source and a link")

  if (card.scale === 'none') {
    if (card.bands.length > 0) say('a card without a scale has no bands')
  } else {
    if (card.bands.length < 2) say('a scaled card needs at least two bands')
    for (const [index, band] of card.bands.entries()) {
      if (!(band.from < band.to)) say(`band ${index + 1} must run from a lower to a higher value`)
      if (index === 0 && band.from !== card.axis.min) say('the first band must start at axis.min')
      if (index > 0 && band.from !== card.bands[index - 1].to) say(`band ${index + 1} must start where band ${index} ends`)
      if (index === card.bands.length - 1 && band.to !== card.axis.max) say('the last band must end at axis.max')
      if (![0, 1, 2, 3, 4, 5].includes(band.level)) say(`band ${index + 1} has level ${band.level}, not 0–5`)
      if (band.label.length === 0 || band.label.length > limits.bandLabel) say(`band ${index + 1} label must be 1–${limits.bandLabel} characters`)
      if (!sourced({ item: band })) say(`band ${index + 1} is ${band.basis} and needs a source and a link`)
    }
  }

  for (const mark of card.marks ?? []) {
    if (mark.value < card.axis.min || mark.value > card.axis.max) say(`mark "${mark.label}" is outside the axis`)
  }

  for (const siCase of ['noSi', 'si'] as const) {
    const points = [...card.published[siCase]].sort((a, b) => a.value - b.value)
    for (const point of points) {
      if (point.basis === 'judged') say(`published ${siCase} point at ${point.value} cannot be judged`)
      if (!sourced({ item: point })) say(`published ${siCase} point at ${point.value} needs a source and a link`)
      if (point.value < card.axis.min || point.value > card.axis.max) say(`published ${siCase} point at ${point.value} is outside the axis`)
    }
    try {
      checkCurve({ points: points, label: `published ${siCase}` })
    } catch (error) {
      say((error as Error).message)
    }
  }
  return problems
}

/** Problems across a set of cards: duplicate ids, missing parents, parent chains that loop. */
export function cardSetProblems({ cards }: { cards: Card[] }): string[] {
  const problems = cards.flatMap((card) => cardProblems({ card: card }))
  const ids = new Map<string, number>()
  for (const card of cards) ids.set(card.id, (ids.get(card.id) ?? 0) + 1)
  for (const [id, count] of ids) if (count > 1) problems.push(`${id}: id is used ${count} times`)
  for (const card of cards) {
    if (card.parent === undefined) continue
    if (!ids.has(card.parent)) problems.push(`${card.id}: parent ${card.parent} does not exist`)
    let current: Card | undefined = card
    for (let depth = 0; current?.parent !== undefined; depth++) {
      if (depth > 5) {
        problems.push(`${card.id}: parent chain loops`)
        break
      }
      const parentId: string = current.parent
      current = cards.find((c) => c.id === parentId)
    }
  }
  return problems
}

export type CardNode = { card: Card; children: CardNode[] }

/** The cards of one group as a tree: top cards first, each with the cards that explain it. */
export function cardTree({ cards, group }: { cards: Card[]; group: Card['group'] }): CardNode[] {
  const inGroup = cards.filter((card) => card.group === group)
  const nodeFor = (card: Card): CardNode => ({ card: card, children: cards.filter((c) => c.parent === card.id).map(nodeFor) })
  return inGroup.filter((card) => card.parent === undefined || !cards.some((c) => c.id === card.parent)).map(nodeFor)
}
