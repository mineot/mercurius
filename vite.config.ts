import { defineConfig } from "vite";
import dotenv from "dotenv";
import path from "path";

dotenv.config();

export default defineConfig({
  define: {
    "process.env": {
      APP_NAME: process.env.APP_NAME,
      APP_CONTACT: process.env.APP_CONTACT,
      COPYRIGHT_YEAR: process.env.COPYRIGHT_YEAR,
      COPYRIGHT_NAME: process.env.COPYRIGHT_NAME,
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@public": path.resolve(__dirname, "./public"),
      "~": path.resolve(__dirname, "./node_modules"),
    },
  },
});
