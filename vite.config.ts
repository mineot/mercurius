import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'node:url';
import nightwatchPlugin from 'vite-plugin-nightwatch';
import vue from '@vitejs/plugin-vue';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), nightwatchPlugin()],
  resolve: {
    alias: {
      '~': fileURLToPath(new URL('./node_modules', import.meta.url)),
      $styles: fileURLToPath(new URL('./src/styles', import.meta.url)),
      '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
      '@core': fileURLToPath(new URL('./src/core', import.meta.url)),
      '@stores': fileURLToPath(new URL('./src/components/stores', import.meta.url))
    }
  }
});
