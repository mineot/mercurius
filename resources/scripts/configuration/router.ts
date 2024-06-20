import { createRouter, createWebHistory } from "vue-router";

import Admin from "@adminPage/Admin.vue";
import Home from "@publicPage/Home.vue";
import Auth from "@authPage/Auth.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/admin", component: Admin },
  { path: "/auth", component: Auth },
];

const routerInstance = createRouter({
  history: createWebHistory(),
  routes,
});

export { routerInstance };
