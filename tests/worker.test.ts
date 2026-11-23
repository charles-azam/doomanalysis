import test from 'node:test'
import assert from 'node:assert/strict'
import worker from '../worker/index.ts'

test('the Worker serves doomanalysis.com and redirects every legacy host to it', async () => {
  const served: string[] = []
  const env = {
    ASSETS: {
      fetch: async (request: Request): Promise<Response> => {
        served.push(request.url)
        return new Response('asset', { status: 200 })
      },
    },
  }

  const cases = [
    { url: 'https://doomanalysis.com/countries/france/?scenario=si', status: 200, location: null },
    {
      url: 'https://www.doomanalysis.com/countries/france/?scenario=si',
      status: 301,
      location: 'https://doomanalysis.com/countries/france/?scenario=si',
    },
    { url: 'https://doom.charlesazam.com/factors/', status: 301, location: 'https://doomanalysis.com/factors/' },
    { url: 'http://doom.charlesazam.com/', status: 301, location: 'https://doomanalysis.com/' },
    { url: 'https://doom.azamcharles0.workers.dev/methodology/', status: 200, location: null },
    { url: 'https://my-branch-doom.azamcharles0.workers.dev/', status: 200, location: null },
    { url: 'http://localhost:8787/', status: 200, location: null },
  ]

  for (const item of cases) {
    const response = await worker.fetch(new Request(item.url), env)
    assert.equal(response.status, item.status, item.url)
    assert.equal(response.headers.get('location'), item.location, item.url)
  }

  assert.deepEqual(served, [
    'https://doomanalysis.com/countries/france/?scenario=si',
    'https://doom.azamcharles0.workers.dev/methodology/',
    'https://my-branch-doom.azamcharles0.workers.dev/',
    'http://localhost:8787/',
  ])
})
