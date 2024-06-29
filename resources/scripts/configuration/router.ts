import { createRouter, createWebHistory } from "vue-router";
import { registerRouters, routerGuard } from "@helper/register-routers";

const routerInstance = createRouter({
  history: createWebHistory(),
  routes: registerRouters,
});

routerInstance.beforeEach(routerGuard);

export { routerInstance };
