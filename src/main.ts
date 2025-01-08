import "./main.scss";
import { createApp } from "vue";
import App from "@/App.vue";
import router from "@/router";

import IconComponent from "@/components/IconComponent.vue";
import LayoutComponent from "@/components/LayoutComponent.vue";

const app = createApp(App);
app.component("app-layout", LayoutComponent);
app.component("app-icon", IconComponent);
app.use(router);
app.mount("#app");
