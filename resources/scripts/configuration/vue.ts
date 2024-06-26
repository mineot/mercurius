import { axiosInstance } from "@config/axios";
import { createApp } from "vue";
import { createPinia } from "pinia";
import { i18nInstance } from "@config/i18n";
import { registrator } from "@helper/registrator";
import { routerInstance } from "@config/router";

const app = createApp({});
const pinia = createPinia();

registrator(app);
app.use(axiosInstance);
app.use(i18nInstance);
app.use(pinia);
app.use(routerInstance);
app.mount("#app");
