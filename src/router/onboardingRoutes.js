export const onBoardingRoutes = [
  {
    path: '/',
    name: 'Welcome',
    component: () => import('@/views/common/Splash.vue'),
    meta: { layout: () => import('@/layouts/AppBarLayout.vue') }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/common/Login.vue'),
    props: true,
    meta: {
      layout: () => import('@/layouts/AppBarLayout.vue'),
      appBar: {
        title: 'Welcome Back!'
      }
    }
  },
  {
    path: '/verify',
    name: 'Verification',
    component: () => import('@/views/common/Verification.vue'),
    props: true,
    meta: {
      layout: () => import('@/layouts/AppBarLayout.vue'),
      appBar: {
        title: 'Verification Required',
        icon: true
      }
    }
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: () => import('@/views/common/SignUp.vue'),
    props: true,
    meta: {
      layout: () => import('@/layouts/AppBarLayout.vue'),
      appBar: {
        title: 'Create Account'
      }
    }
  }
];
