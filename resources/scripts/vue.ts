import { createApp } from "vue";
import { i18n } from "./i18n";

import Welcome from "./vue/Welcome.vue";

const app = createApp({});
app.component("welcome", Welcome);
app.use(i18n);
app.mount("#app");
