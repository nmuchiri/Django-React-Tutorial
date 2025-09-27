import { defineConfig } from 'vite'
    import react from '@vitejs/plugin-react'

    // https://vitejs.dev/config/
    export default defineConfig({
      plugins: [react()],
      server: {
        proxy: {
          // Proxy API requests to your Django backend
          '/api': {
            target: 'http://localhost:8000', // <--- Change to your Django server's address and port
            changeOrigin: true,
            rewrite: (path) => path.replace(/^\/api/, '/api'), // Usually not needed if Django routes start with /api
          },
        },
      },
    })