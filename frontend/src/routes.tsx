import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';
import Product from './pages/Product';
import Checkout from './pages/Checkout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/product/:id',
    element: <Product />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/checkout',
    element: <Checkout />,
    errorElement: <ErrorPage />,
  },
]);

export default router;
