import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  resolve: {
    alias: {},
  },
  plugins: [
    laravel({
      input: ['resources/styles/app.css', 'resources/scripts/app.ts'],
      refresh: true,
    }),
    tailwindcss(),
  ],
});
