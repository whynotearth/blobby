export const customerViewRoutes = [
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
    meta: { layout: () => import('@/layouts/SideMenuLayout.vue') }
  }
];
