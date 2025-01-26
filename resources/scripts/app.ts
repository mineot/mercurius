import "./bootstrap";
import { createApp } from "vue";

import Welcome from "vues/Welcome.vue";

const app = createApp({});
app.component("v-welcome", Welcome);
app.mount("#app");
