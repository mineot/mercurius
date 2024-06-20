import { axiosInstance } from "@config/axios";
import { createApp } from "vue";
import { createPinia } from "pinia";
import { i18nInstance } from "@config/i18n";
import { routerInstance } from "@config/router";

import LayoutPublic from "@/vue/components/layout-public/LayoutPublic.vue";

const app = createApp({});
const pinia = createPinia();

app.component("layout-public", LayoutPublic);
app.use(axiosInstance);
app.use(i18nInstance);
app.use(pinia);
app.use(routerInstance);
app.mount("#app");
