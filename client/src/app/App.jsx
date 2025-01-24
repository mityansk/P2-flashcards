import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
<<<<<<< HEAD
import Nav from '../widgets/nav/nav'
import HomePage from '../pages/Home'
import RegistrationPage from '../pages/RegistrationPage'

=======
import CardPage from '../pages/CardPage/CardPage'
>>>>>>> dd75e5f80c3d01da413b1e1bfb0e20655db80d7e

const router = createBrowserRouter([
  {
    path: '/',
    // element: <Nav />,
    children: [
<<<<<<< HEAD
      // {
      //   path: '/',
      //   element: <HomePage />
      // },
      // {
      //   path: '/deck',
      //   element: <DeckPage />
      // },
      // {
      //   path: '/card',
      //   element: <CardPage />
      // },
      {
        path: '/registration',
        element: <RegistrationPage />
      },
      // {
      //   path: '/login',
      //   element: <LoginPage />
=======
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/deck',
        element: <DeckPage />
      },
      {
        path: '/card/:cardId',
        element: <CardPage />
      },
      // {
      //   path: '/registration',
      //   element: <RegistrationPage />
      // },
      // {
      //   path: '/login',
      //   element: <AuthorizationPage />
>>>>>>> dd75e5f80c3d01da413b1e1bfb0e20655db80d7e
      // },
      // {
      //   path: '/finish',
      //   element: <FinishPage />
      // },
      // {
      //   path: '/profile',
      //   element: <ProfilePage />
      // },
    ]
  }
])

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
