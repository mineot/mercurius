import { createApp } from "vue";
import { axiosInstance } from "@config/axios";
import { i18nInstance } from "@config/i18n";
import { routerInstance } from "@config/router";

import Layout from "@component/Layout.vue";
import MenuRouter from "@component/MenuRouter.vue";
import Offcanvas from "@component/Offcanvas.vue";
import Sidebar from "@component/Sidebar.vue";
import Topbar from "@component/Topbar.vue";

const app = createApp({});
app.component("layout", Layout);
app.component("menurouter", MenuRouter);
app.component("offcanvas", Offcanvas);
app.component("sidebar", Sidebar);
app.component("topbar", Topbar);
app.use(axiosInstance);
app.use(i18nInstance);
app.use(routerInstance);
app.mount("#app");
