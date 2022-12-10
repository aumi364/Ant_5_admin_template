import React, { lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router';
import { privateRoutes } from './appRoutes';
import { Spin } from 'antd';
import { authStore } from '../store/auth';

const NotFound = lazy(() => import('../features/error/notFound'));

const DashboardRouter = () => {
  const { routes } = privateRoutes;
  const userType = authStore(state => state?.userType);

  return (
    <Suspense fallback={<Spin />}>
      <Routes>
        {routes?.map((route, i) => {
          const RouteComponent = route.component;
          return (
            <Route
              exact={route.exact}
              key={i}
              path={`${route.path}`}
              element={<RouteComponent />}
            />
          );
        })}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};
export default DashboardRouter;
