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
import CreateCliente from './pages/CreateCliente';
import EditClient from './pages/EditClient';
import clientLoader from './pages/EditClient/loaders/clientLoader';

export default function App() {
  const route = createBrowserRouter(createRoutesFromElements(
    <>

      <Route element={ <Layout /> }>
        <Route
          path="/create-client"
          element={ <CreateCliente /> }
        />
        <Route
          path="/client/:id"
          loader={ clientLoader }
          element={ <EditClient /> }
        />
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
