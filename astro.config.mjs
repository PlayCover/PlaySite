import { defineConfig } from 'astro/config'
import vue from '@astrojs/vue'
import tailwind from '@astrojs/tailwind'
import mdx from '@astrojs/mdx'
// https://astro.build/config
export default defineConfig({
  integrations: [vue(), tailwind(), mdx()],
  site: 'https://playcover.github.io/Project-Astrolabos/',
  base: '/Project-Astrolabos',
  vite: {
    optimizeDeps: {
      exclude: ['/scripts'],
    },
    plugins: [
    ],
  },
})
