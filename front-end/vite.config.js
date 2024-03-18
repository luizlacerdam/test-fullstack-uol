import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const defaultPort = 3000;
const PORT = process.env.PORT || defaultPort;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: { port: PORT },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './setupTests.js',
    css: true,
    reporters: ['verbose'],
    coverage: {
      reporter: ['text', 'json', 'html'],
      provider: 'v8',
    },
  },
});
