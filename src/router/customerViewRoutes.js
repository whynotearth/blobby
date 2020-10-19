export const customerViewRoutes = [
  {
    path: '/home',
    name: 'Home',
    props: true,
    component: () => import('@/views/Home.vue'),
    meta: { layout: () => import('@/layouts/SideMenuLayout.vue') }
  },
  {
    path: '/restaurant',
    name: 'ViewRestaurant',
    props: true,
    component: () => import('@/views/ViewRestaurant.vue'),
    meta: {
      layout: () => import('@/layouts/SideMenuLayout.vue'),
      isRestaurantPage: true
    }
  }
];
