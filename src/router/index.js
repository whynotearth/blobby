import Vue from 'vue';
import VueRouter from 'vue-router';

import { onBoardingRoutes } from './onboardingRoutes';
import { customerViewRoutes } from './customerViewRoutes';

Vue.use(VueRouter);

const routes = [
  ...onBoardingRoutes,
  ...customerViewRoutes,
  {
    path: '/*',
    redirect: '/'
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
