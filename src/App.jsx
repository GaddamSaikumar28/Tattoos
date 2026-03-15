// src/App.jsx
import { RouterProvider } from 'react-router-dom';
import { AppRouter } from './router/AppRouter';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'sonner';

export default function App() {
  return (
    <HelmetProvider>
      {/* Provides routing to the whole app */}
      <RouterProvider router={AppRouter} />
      
      {/* Global Toast Notifications */}
      <Toaster position="bottom-right" richColors />
    </HelmetProvider>
  );
}