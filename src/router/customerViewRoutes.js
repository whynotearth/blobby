export const customerViewRoutes = [
  {
    path: '/',
    name: 'Home',
    props: true,
    component: () => import('@/views/Home.vue'),
    meta: { layout: () => import('@/layouts/SideMenuLayout.vue') }
  },
  {
    path: '/details/:id',
    name: 'ViewDetails',
    props: true,
    component: () => import('@/views/ViewDetails.vue'),
    meta: {
      layout: () => import('@/layouts/SideMenuLayout.vue'),
      isRestaurantPage: true
    }
  },
  {
    path: '/category/:id',
    name: 'ViewCategory',
    props: true,
    component: () => import('@/views/ViewCategory.vue'),
    meta: {
      layout: () => import('@/layouts/SideMenuLayout.vue'),
      isRestaurantPage: true
    }
  },
  {
    path: '/mycart',
    name: 'MyCart',
    props: true,
    component: () => import('@/views/Cart.vue'),
    meta: {
      layout: () => import('@/layouts/SideMenuLayout.vue'),
      isCartPage: true
    }
  }
];
