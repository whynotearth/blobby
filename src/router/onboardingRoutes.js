export const onBoardingRoutes = [
  {
    path: '/',
    name: 'Welcome',
    component: () => import('@/views/common/Splash.vue'),
    meta: { layout: () => import('@/layouts/Fullscreen.vue') }
  }
];
