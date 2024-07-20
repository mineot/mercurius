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
      "@scripts": path.resolve(__dirname, "./resources/scripts"),
      "@stores": path.resolve(__dirname, "./resources/scripts/stores"),
      $api: path.resolve(__dirname, "./resources/scripts/miscellaneous/api.ts"),
    },
  },
});
