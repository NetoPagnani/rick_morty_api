import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// No GitHub Pages o site fica em /<repo>/, então os assets precisam desse
// prefixo. Em qualquer outro host (Render, Vercel, Netlify) e no dev local
// o site fica na raiz do domínio, onde o prefixo quebraria os assets.
const base = process.env.GITHUB_ACTIONS ? '/rick_morty_api/' : '/'

// https://vite.dev/config/
export default defineConfig({
  base,
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
