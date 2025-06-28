import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@component': path.resolve(__dirname, './src/components'),
      '@database': path.resolve(__dirname, './src/database'),
      '@model': path.resolve(__dirname, './src/models'),
      '@page': path.resolve(__dirname, './src/pages'),
    },
  },
});
