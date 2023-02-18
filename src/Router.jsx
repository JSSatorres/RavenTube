import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './layout/Layout'
import Private from './layout/Private'
import Home from './pages/Home'
import Login from './pages/login/Login'
import Register from './pages/register/Register'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Login />,
      },
      {
        path: 'register',
        element: <Register />,
      },
      {
        path: '/home',
        element: <Private />,
        children: [
          {
            index: true,
            element: <Home />,
          },
        ],
      },
    ],
  },
])

function Router() {
  return <RouterProvider router={router} />
}

export default Router
