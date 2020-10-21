export const customerViewRoutes = [
  {
    path: '/home',
    name: 'Home',
    props: true,
    component: () => import('@/views/Home.vue'),
    meta: { layout: () => import('@/layouts/SideMenuLayout.vue') }
  },
  {
    path: '/details/:name',
    name: 'ViewDetails',
    props: true,
    component: () => import('@/views/ViewDetails.vue'),
    meta: {
      layout: () => import('@/layouts/SideMenuLayout.vue'),
      isRestaurantPage: true
    }
  }
];
