/** Ids of the factors and topics that have a reader explainer, read from the content folder at build time. */
const files = import.meta.glob('../content/explainers/*.md')

export const explainerIds = new Set(Object.keys(files).map((path) => path.split('/').at(-1)?.replace(/\.md$/, '') ?? ''))
