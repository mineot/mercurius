import { defineConfig, loadEnv } from "vite";
import laravel from "laravel-vite-plugin";
import path from "path";
import tsconfigPaths from "vite-tsconfig-paths";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

// FIXME fix this problem, need get data from env by realtime
const env = loadEnv(process.env.MODE, process.cwd());

export default defineConfig({
  define: {
    process,
    "process.env": env,
  },
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
      "~scss": path.resolve(__dirname, "./resources/scss"),
      "~node": path.resolve(__dirname, "./node_modules"),
      "@config": path.resolve(__dirname, "./resources/scripts/configuration"),
      "@helper": path.resolve(__dirname, "./resources/scripts/helpers"),
      "@component": path.resolve(__dirname, "./resources/scripts/vue/components"),
      "@widget": path.resolve(__dirname, "./resources/scripts/vue/widgets"),
      "@layout": path.resolve(__dirname, "./resources/scripts/vue/layouts"),
      "@store": path.resolve(__dirname, "./resources/scripts/vue/stores"),
      "@adminPage": path.resolve(__dirname, "./resources/scripts/vue/pages/admin"),
      "@authPage": path.resolve(__dirname, "./resources/scripts/vue/pages/auth"),
      "@publicPage": path.resolve(__dirname, "./resources/scripts/vue/pages/public"),
    },
  },
});
