import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

console.log('Vite Root:', __dirname);

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
