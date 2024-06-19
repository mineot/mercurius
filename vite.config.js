import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import path from "path";
import tsconfigPaths from "vite-tsconfig-paths";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

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
      "@": path.resolve(__dirname, "./resources/scripts"),
      "@config": path.resolve(__dirname, "./resources/scripts/configuration"),
      "@helper": path.resolve(__dirname, "./resources/scripts/helpers"),
      "@component": path.resolve(__dirname, "./resources/scripts/vue/components"),
      "@adminPage": path.resolve(__dirname, "./resources/scripts/vue/pages/admin"),
      "@authPage": path.resolve(__dirname, "./resources/scripts/vue/pages/auth"),
      "@publicPage": path.resolve(__dirname, "./resources/scripts/vue/pages/public"),
    },
  },
});
