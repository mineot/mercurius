import { createApp } from "vue";
import { i18n } from "../i18n";
import router from "./router";

import MenuRouter from "../vue/components/MenuRouter.vue";
import Offcanvas from "../vue/components/Offcanvas.vue";
import Sidebar from "../vue/components/Sidebar.vue";
import Topbar from "../vue/components/Topbar.vue";

const app = createApp({});
app.component("menurouter", MenuRouter);
app.component("offcanvas", Offcanvas);
app.component("sidebar", Sidebar);
app.component("topbar", Topbar);
app.use(i18n);
app.use(router);
app.mount("#app");
