import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@component': path.resolve(__dirname, 'resources/core/components'),
      '@widget': path.resolve(__dirname, 'resources/core/components/widgets'),
      '@script': path.resolve(__dirname, 'resources/core/scripts'),
      '@store': path.resolve(__dirname, 'resources/core/scripts/stores'),
      '@sass': path.resolve(__dirname, 'resources/core/sass'),
      '@page': path.resolve(__dirname, 'resources/pages'),
      '@module': path.resolve(__dirname, 'node_modules'),
      vue: 'vue/dist/vue.esm-bundler.js',
    },
  },
  plugins: [
    laravel({
      input: ['resources/core/sass/app.scss', 'resources/core/scripts/app.ts'],
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
