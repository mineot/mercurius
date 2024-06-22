import registerRouters from "@helper/register-routers";
import { createRouter, createWebHistory } from "vue-router";

const routerInstance = createRouter({
  history: createWebHistory(),
  routes: registerRouters,
});

export { routerInstance };
