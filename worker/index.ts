/**
 * Doom Analysis lives at doomanalysis.com. The other hostnames bound to this Worker redirect there
 * permanently, keeping path and query, so links shared under the old address still land on the same page.
 * Any other host (workers.dev production and preview URLs, local dev) is served as is, so previews keep working.
 */
export const canonicalHost = 'doomanalysis.com'

export const legacyHosts: ReadonlySet<string> = new Set(['www.doomanalysis.com', 'doom.charlesazam.com'])

type Env = {
  ASSETS: { fetch: (request: Request) => Promise<Response> }
}

export function canonicalUrl({ url }: { url: URL }): URL | undefined {
  if (!legacyHosts.has(url.hostname)) return undefined
  const target = new URL(url.toString())
  target.protocol = 'https:'
  target.hostname = canonicalHost
  target.port = ''
  return target
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const target = canonicalUrl({ url: new URL(request.url) })
    if (target !== undefined) return Response.redirect(target.toString(), 301)
    return env.ASSETS.fetch(request)
  },
}
