
import {
    createBrowserRouter,
  } from "react-router-dom";
import CreateGenrePage from "../pages/CreateGenrePage";
import CreateUserPage from "../pages/UserPages/CreateUser";
import Root from "../pages/Root";
import GenrePage from "../pages/UserPages";
import WithId from "../pages/WithId";
import LoginPage from "../pages/LoginPage";

export const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      errorElement: <>erro</>,
      children: [
        {
          path: 'genres',
          element: <GenrePage />,
        },
        {
          path: 'genres/create',
          element: <CreateGenrePage />,
        },
        {
          path: 'genres/:id',
          element: <WithId />,
        },  
        {
          path: 'users/create',
          element: <CreateUserPage />,
        },
        {
          path: 'login',
          element: <LoginPage />,
        }
      ]
    }
  ])
  