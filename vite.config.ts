import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import path from "path";

export default defineConfig({
    resolve: {
        alias: {
            scripts: path.resolve(__dirname, "resources/scripts"),
            node_modules: path.resolve(__dirname, "node_modules"),
        },
    },
    plugins: [
        laravel({
            input: ["resources/sass/app.scss", "resources/scripts/app.ts"],
            refresh: true,
        }),
    ],
    server: {
        cors: true,
        host: "127.0.0.1",
        hmr: {
            host: "127.0.0.1",
        },
    },
});
