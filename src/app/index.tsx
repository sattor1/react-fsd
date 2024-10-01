import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// ------------------ Pages ------------------------
import { HomePageRoute } from '~pages/home';

import './index.css';

const router = createBrowserRouter([HomePageRoute]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
