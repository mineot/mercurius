// resources/scripts/plugins/axiosPlugin.ts
import { App } from "vue";
import axios from "axios";

const axiosConfig = axios.create({
  //   baseURL: "https://api.example.com", // Substitua pela sua URL base
  timeout: 1000,
  headers: { "Content-Type": "application/json" },
});

const axiosInstance = {
  install(app: App) {
    app.config.globalProperties.$axios = axiosConfig;
  },
};

export { axiosInstance };
