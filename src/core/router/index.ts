import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '@components/HomeView.vue';
import AboutView from '@components/AboutView.vue';

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => AboutView,
    },
  ],
});
