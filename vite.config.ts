import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
  resolve: {
    alias: {},
  },
  plugins: [
    laravel({
      input: ['resources/core/app.css', 'resources/core/app.ts'],
      refresh: true,
    }),
  ],
});
