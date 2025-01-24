import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Nav from '../widgets/nav/nav'
import HomePage from '../pages/Home'
import RegistrationPage from '../pages/RegistrationPage'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Nav />,
    children: [
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
