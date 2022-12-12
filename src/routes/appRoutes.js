import { lazy } from 'react';
import { appUrls } from '../utils/constraints/appUrls';

export const publicRoutes = {
  login: {
    path: appUrls.login,
    component: lazy(() => import('../pages/auth/login')),
  },
  resetPassword: {
    path: appUrls.resetPassword,
    component: lazy(() => import('../pages/auth/resetPassword/resetPassword')),
  },
  // requestOtp: {
  //   path: appUrls.requestOtp,
  //   component: lazy(() => import('../pages/auth/resetPassword/requestOtp')),
  // },
  // verifyOtp: {
  //   path: appUrls.verifyOtp,
  //   component: lazy(() => import('../pages/auth/resetPassword/verifyOtp')),
  // },
  error: {
    notFound: {
      path: appUrls.notFound,
      component: lazy(() => import('../features/error/notFound')),
    },
  },
};

// login: {
//   path: appUrls.login,
//   component: lazy(() => import('../pages/auth/login')),
// },
// resetPassword: {
//   path: appUrls.resetPassword,
//   component: lazy(() => import('../pages/auth/resetPassword')),
// },
// error: {
//   notFound: {
//     path: appUrls.notFound,
//     component: lazy(() => import('../features/error/notFound')),
//   },
// },

export const privateRoutes = {
  path: appUrls.dashboard,
  component: lazy(() => import('../pages/dashboard')),
  routes: [
    {
      path: '/',
      component: lazy(() => import('../pages/overview/overview')),
    },
    {
      path: appUrls.users,
      component: lazy(() => import('../pages/users/users')),
    },
    {
      path: appUrls.items,
      component: lazy(() => import('../pages/items/items')),
    },
    // {
    //   path: appUrls.userDetails,
    //   component: lazy(() => import('../pages/users/userDetails/userDetails')),
    // },
    // ----------- meetings start ----------

    // ----------- Settings end ----------
  ],
};
