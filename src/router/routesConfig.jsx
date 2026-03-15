// src/router/routesConfig.js
import { p, path } from 'framer-motion/client';
import { lazy } from 'react';

// Lazy load pages for performance optimization
// const Home = lazy(() => import('../pages/Home'));
const Home = lazy(() => import('../pages/Home'));
const NotFound = lazy(() => import('../pages/ErrorPages/NotFound'));
const NewArrivalsPage = lazy(() => import('../pages/NewArrivals/Index'));
const SalePage = lazy(() => import('../pages/Sales/Index'));
export const routesConfig = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/new-arrival',
    element: <NewArrivalsPage />,
  },
  {
    path: '/sale',
    element: <SalePage />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];