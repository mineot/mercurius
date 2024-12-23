import { defineConfig } from "vite";
import dotenv from "dotenv";

dotenv.config();

export default defineConfig({
  define: {
    "process.env": {
      APP_NAME: process.env.APP_NAME,
    },
  },
});
