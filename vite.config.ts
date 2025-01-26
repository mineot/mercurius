import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import path from "path";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
    resolve: {
        alias: {
            scripts: path.resolve(__dirname, "resources/scripts"),
            sass: path.resolve(__dirname, "resources/sass"),
            vues: path.resolve(__dirname, "resources/scripts/vue"),
            node_modules: path.resolve(__dirname, "node_modules"),
            vue: "vue/dist/vue.esm-bundler.js",
        },
    },
    plugins: [
        laravel({
            input: ["resources/sass/app.scss", "resources/scripts/app.ts"],
            refresh: true,
        }),
        vue(),
    ],
    server: {
        cors: true,
        port: 5173,
        host: "127.0.0.1",
        hmr: {
            host: "127.0.0.1",
        },
    },
});
