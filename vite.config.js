import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true,
      interval: 100, // ms
    },
    host: true,
  },
  build: {
    outDir: 'dist'
  },
  base: '/',
})