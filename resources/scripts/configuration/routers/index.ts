import { routes } from "@config/routers/routes";
import { createRouter, createWebHistory } from "vue-router";
import { authGuard } from "./guards/auth.guard";

const routerInstance = createRouter({
  history: createWebHistory(),
  routes,
});

routerInstance.beforeEach(async (to: any, from: any, next: any) => {
  await authGuard(to, from, next);
});

export { routerInstance };
