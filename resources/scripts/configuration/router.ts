import { createRouter, createWebHistory } from "vue-router";

import AdminPage from "@/vue/pages/admin/AdminPage.vue";
import HomePage from "@/vue/pages/public/HomePage.vue";
import AuthPage from "@/vue/pages/auth/AuthPage.vue";

const routes = [
  { path: "/", component: HomePage },
  { path: "/admin", component: AdminPage },
  { path: "/auth", component: AuthPage },
];

const routerInstance = createRouter({
  history: createWebHistory(),
  routes,
});

export { routerInstance };
