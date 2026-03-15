// src/router/routesConfig.js
import { lazy } from 'react';

// Lazy load pages for performance optimization
// const Home = lazy(() => import('../pages/Home'));
const Home = lazy(() => import('../pages/Home'));
const NotFound = lazy(() => import('../pages/ErrorPages/NotFound'));

export const routesConfig = [
  {
    path: '/',
    element: <Home />,
  },
  // We will add Product, Collection, Cart, etc., here later
  {
    path: '*',
    element: <NotFound />,
  },
];