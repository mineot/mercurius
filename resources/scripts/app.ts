import "bootstrap";
import { authGuard } from "./miscellaneous/guards/auth.guard";
import { componentsRegistration } from "./components/components-registration";
import { createApp } from "vue";
import { createPinia } from "pinia";
import { createRouter, createWebHistory } from "vue-router";
import { i18nInstance } from "@scripts/miscellaneous/i18n";
import { routes } from "./pages/routes";
import "@scripts/miscellaneous/helpers/resize";

const app = createApp({});
const pinia = createPinia();

const routerInstance = createRouter({
  history: createWebHistory(),
  routes,
});

routerInstance.beforeEach(async (to: any, from: any, next: any) => {
  await authGuard(to, from, next);
});

componentsRegistration(app);
app.use(i18nInstance);
app.use(pinia);
app.use(routerInstance);
app.mount("#app");
