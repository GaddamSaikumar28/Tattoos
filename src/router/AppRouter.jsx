// src/router/AppRouter.jsx
import { createBrowserRouter } from 'react-router-dom';
import { Suspense } from 'react';
import MainLayout from '../layouts/MainLayout';
import { routesConfig } from './routesConfig';
import NotFound from '../pages/ErrorPages/NotFound';

export const AppRouter = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: routesConfig.map((route) => ({
      path: route.path,
      element: (
        // Suspense handles the loading state of our lazy-loaded pages
        <Suspense fallback={<div className="h-screen flex items-center justify-center">Loading...</div>}>
          {route.element}
        </Suspense>
      ),
    })),
  },
]);