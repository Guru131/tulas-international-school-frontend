import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Disable source maps so raw source code is never exposed in browser DevTools
    sourcemap: false,
  },
})
