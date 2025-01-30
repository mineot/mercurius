import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      comps: path.resolve(__dirname, 'resources/components'),
      pages: path.resolve(__dirname, 'resources/pages'),
      sass: path.resolve(__dirname, 'resources/sass'),
      src: path.resolve(__dirname, 'resources/scripts'),
      wid: path.resolve(__dirname, 'resources/widgets'),
      modules: path.resolve(__dirname, 'node_modules'),
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
