import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'node:url';
import nightwatchPlugin from 'vite-plugin-nightwatch';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), nightwatchPlugin()],
  resolve: {
    alias: {
      '@src': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
});
