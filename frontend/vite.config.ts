import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sass from 'sass'


export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 3000,
  },
  css: {
    preprocessorOptions: {
      scss: {
        implementation: sass,
      },
    },
  },
});
