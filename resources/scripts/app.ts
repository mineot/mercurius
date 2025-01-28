import { createApp } from "vue";
import axios from "axios";

import Welcome from "vues/Welcome.vue";

(window as any).axios = axios;
(window as any).axios.defaults.headers.common["X-Requested-With"] =
    "XMLHttpRequest";

const app = createApp({});
app.component("v-welcome", Welcome);
app.mount("#app");
