import { createRouter, createWebHistory } from "vue-router";

import Admin from "@adminPage/Admin.vue";
import Home from "@publicPage/Home.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/admin", component: Admin },
];

const routerInstance = createRouter({
  history: createWebHistory(),
  routes,
});

export { routerInstance };
