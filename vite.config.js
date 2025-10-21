import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/cafunas/', // 👈 Must match GitHub repo name exactly
  plugins: [react()],
})
