import React from 'react';
import './App.css';
import { Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import Home from './pages/Home';
import Layout from './pages/LayoutComponents/Layout';
import clientsLoader from './pages/Home/loaders/clientsLoader';

export default function App() {
  const route = createBrowserRouter(createRoutesFromElements(
    <>

      <Route element={ <Layout /> }>
        <Route
          loader={ clientsLoader }
          path="/"
          element={ <Home /> }
        />

      </Route>
      ,
    </>,
  ));
  return (
    <RouterProvider router={ route } />
  );
}
