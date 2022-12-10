import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Navigate, Routes } from 'react-router';
import PropTypes from 'prop-types';
import { privateRoutes, publicRoutes } from './appRoutes';
import { authStore } from '../store/auth';
import { appUrls } from '../utils/constraints/appUrls';
import { Spin } from 'antd';

function PrivateRoute({ children }) {
  const isLoggedIn = authStore(state => state?.token);
  return isLoggedIn ? children : <Navigate to={`/${appUrls.login}`} />;
}

PrivateRoute.propTypes = {
  children: PropTypes.node,
};

function RoutesCollection() {
  const publicRoutesList = [
    publicRoutes.login,
    publicRoutes.resetPassword,
    // publicRoutes.requestOtp,
    // publicRoutes.verifyOtp,
  ];
  const Component = privateRoutes.component;
  const NotFound = publicRoutes.error.notFound;
  return (
    <div>
      <Suspense fallback={<Spin />}>
        <Router>
          <Routes>
            <Route
              path={appUrls.landing}
              element={<Navigate replace to={publicRoutes.login.path} />}
            />
            {publicRoutesList.map(routeElement => {
              const RouteComponent = routeElement.component;
              return (
                <Route
                  key={routeElement.path}
                  path={routeElement.path}
                  element={<RouteComponent />}
                />
              );
            })}
            <Route
              key={privateRoutes.path}
              path={`${privateRoutes.path}/*`}
              element={
                <PrivateRoute>
                  <Component />
                </PrivateRoute>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </Suspense>
    </div>
  );
}

export default RoutesCollection;
