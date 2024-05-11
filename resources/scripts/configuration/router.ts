import { createRouter, createWebHistory } from "vue-router";

const pathToPages = "../vue/pages";

const routes = [
  { path: "/", component: () => import(`${pathToPages}/Home.vue`) },
  { path: "/admin", component: () => import(`${pathToPages}/Admin.vue`) },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
