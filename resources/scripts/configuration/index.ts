import { createApp } from "vue";
import { createPinia } from "pinia";
import { i18nInstance } from "@config/i18n";
import { routerInstance } from "@config/routers";
import { geralRegistrator } from "@/registrator";

const app = createApp({});
const pinia = createPinia();

geralRegistrator(app);
app.use(i18nInstance);
app.use(pinia);
app.use(routerInstance);
app.mount("#app");
