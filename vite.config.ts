import { defineConfig } from "vite";
import dotenv from "dotenv";
import path from "path";

dotenv.config();

export default defineConfig({
  define: {
    "process.env": {
      APP_NAME: process.env.APP_NAME,
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "~": path.resolve(__dirname, "./node_modules"),
    },
  },
});
