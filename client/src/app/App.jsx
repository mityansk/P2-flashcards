// import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import CardPage from '../pages/CardPage/CardPage'

const router = createBrowserRouter([
  {
    path: '/',
    // element: <Nav />,
    children: [
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
