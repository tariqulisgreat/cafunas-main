import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/cafunas-main/', // 👈 must match the GitHub repo name exactly
  plugins: [react()],
})
