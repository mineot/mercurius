import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";

export default defineConfig({
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
