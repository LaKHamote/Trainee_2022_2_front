
import {
    createBrowserRouter,
  } from "react-router-dom";
import CreateGenrePage from "../pages/CreateGenrePage";
import HomePage from '../pages/HomePage';
import Root from "../pages/Root";
import WithId from "../pages/WithId";

export const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      errorElement: <>erro</>,
      children: [
        {
          path: '',
          element: <HomePage />,
        },
        {
          path: 'create',
          element: <CreateGenrePage />,
        },
        {
          path: 'genre/:id',
          element: <WithId />,
        },  
      ]
    }
  ])
  