import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import laravel from "laravel-vite-plugin";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    tsconfigPaths(),
    laravel({
      input: ["resources/scss/app.scss", "resources/scripts/app.ts"],
      refresh: true,
    }),
  ],
  resolve: {
    alias: {
      vue: "vue/dist/vue.esm-bundler.js",
    },
  },
});
