import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  site: 'https://doomanalysis.com',
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
  output: 'static',
})
