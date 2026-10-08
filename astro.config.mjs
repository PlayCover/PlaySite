import mdx from '@astrojs/mdx'
import vue from '@astrojs/vue'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  site: 'https://playcover.io/',
  integrations: [vue(), mdx()],
  vite: {
    plugins: [tailwindcss()],
  },
})
