import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

/** Reader explainers, one per factor or topic, each with its sources. */
const explainers = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/explainers' }),
  schema: z.object({
    factor: z.string(),
    title: z.string(),
    summary: z.string(),
    sources: z.array(z.object({ label: z.string(), url: z.string().url() })),
  }),
})

export const collections = { explainers: explainers }
