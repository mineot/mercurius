import { App } from "vue";
import axios from "axios";

const axiosConfig = axios.create({
  headers: { "Content-Type": "application/json" },
  baseURL: process.env.VITE_APP_URL,
  timeout: 1000,
});

const axiosInstance = {
  install(app: App) {
    app.config.globalProperties.$axios = axiosConfig;
  },
};

export { axiosInstance };
