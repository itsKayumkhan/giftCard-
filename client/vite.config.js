import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
  },
  proxy: {
    '/api': {
      target: 'http://localhost:8000/api/v1', // Your API server URL
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/api/, ''), // Remove the /api prefix
    },}
})
