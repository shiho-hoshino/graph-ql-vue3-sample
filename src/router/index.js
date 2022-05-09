import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/home.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/test',
    name: 'test',
    component: () => import('../pages/test.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
