import { createRouter, createWebHistory } from "vue-router";

import Admin from "../vue/pages/Admin.vue";
import Home from "../vue/pages/Home.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/admin", component: Admin },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
