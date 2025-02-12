import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@component': path.resolve(__dirname, 'resources/components'),
      '@page': path.resolve(__dirname, 'resources/pages'),
      '@sass': path.resolve(__dirname, 'resources/sass'),
      '@script': path.resolve(__dirname, 'resources/scripts'),
      '@store': path.resolve(__dirname, 'resources/stores'),
      '@widget': path.resolve(__dirname, 'resources/widgets'),
      '@module': path.resolve(__dirname, 'node_modules'),
      vue: 'vue/dist/vue.esm-bundler.js',
    },
  },
  plugins: [
    laravel({
      input: ['resources/sass/app.scss', 'resources/scripts/app.ts'],
      refresh: true,
    }),
    vue(),
  ],
  server: {
    cors: true,
    port: 5173,
    host: '127.0.0.1',
    hmr: {
      host: '127.0.0.1',
    },
  },
});
