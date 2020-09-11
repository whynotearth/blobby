export const onBoardingRoutes = [
  {
    path: '/',
    name: 'Welcome',
    component: () => import('@/views/common/Splash.vue'),
    meta: { layout: () => import('@/layouts/Fullscreen.vue') }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/common/Login.vue'),
    meta: { layout: () => import('@/layouts/Fullscreen.vue') }
  }
];
