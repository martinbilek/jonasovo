import { createWebHistory, createRouter } from "vue-router";

import Dashboard from '@/views/Dashboard.vue';
import NotFound from '@/views/NotFound.vue';

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/:catchAll(.*)',
    name: '404',
    component: NotFound
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(() => {
  // scroll page to top on route change
  window.scrollTo(0, 0)
});

export default router;
