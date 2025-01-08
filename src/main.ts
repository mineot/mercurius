import "./main.scss";
import { createApp } from "vue";
import App from "@/App.vue";
import router from "@/router";

import FooterComponent from "@/components/FooterComponent.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import IconComponent from "@/components/IconComponent.vue";
import LayoutComponent from "@/components/LayoutComponent.vue";
import NavComponent from "@/components/NavComponent.vue";

const app = createApp(App);
app.component("app-footer", FooterComponent);
app.component("app-header", HeaderComponent);
app.component("app-icon", IconComponent);
app.component("app-layout", LayoutComponent);
app.component("app-nav", NavComponent);
app.use(router);
app.mount("#app");
