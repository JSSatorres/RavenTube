import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import EditVideo from './components/EditVideo'
import Layout from './layout/Layout'
import Private from './layout/Private'
import PrivateCeo from './layout/PrivateCeo'
import Home from './pages/Home'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import UserSettings from './pages/userSettings'

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
          {
            path: 'profile',
            element: <UserSettings />,
          },
          {
            path: 'video/:videoId',
            element: <PrivateCeo />,
            children: [
              {
                index: true,
                element: <EditVideo />,
              },
            ],
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
