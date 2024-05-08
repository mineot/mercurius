import { createApp } from "vue";

import Welcome from "../vue/Welcome.vue";

const app = createApp();
app.component("v-welcome", Welcome);
app.mount("#app");
