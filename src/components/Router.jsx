import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from '../App';
import ErrorPage from './ErrorPage';
import Home from './pages/HomePage/Home';
import MealSearch from './pages/MealSearchPage/MealSearch';
import Profile from './pages/ProfilePage/Profile';

const Router = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/Home',
          element: <Home />,
        },
        {
          path: '/MealSearch',
          element: <MealSearch />,
        },
        {
          path: '/Profile',
          element: <Profile />,
        },
        {
          path: '*',
          element: <ErrorPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
