import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        // Use your deployed Vercel backend
        target: 'https://keepify-ioft.vercel.app',
        changeOrigin: true,
        secure: true, // true because Vercel uses HTTPS
      },
    },
  },
});
