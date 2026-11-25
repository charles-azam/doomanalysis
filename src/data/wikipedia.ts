import generated from './generated/wikipedia.json' with { type: 'json' }

/** The opening section of a Wikipedia article, word for word, as downloaded by pdoom/scripts/wikipedia.ts. */
export type WikipediaExtract = { title: string; url: string; revision: number; timestamp: string; text: string }

const extracts = generated as Record<string, WikipediaExtract>

export const wikipediaFor = ({ title }: { title: string }): WikipediaExtract | undefined => extracts[title]

export const revisionUrl = ({ extract }: { extract: WikipediaExtract }): string =>
  `https://en.wikipedia.org/w/index.php?title=${encodeURIComponent(extract.title.replace(/ /g, '_'))}&oldid=${extract.revision}`
