import { Navigate, useRoutes, Route, Routes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
import PropTypes from 'prop-types';
//
import Login from './pages/Login';
import Register from './pages/Register';
import DashboardApp from './pages/DashboardApp';
import Products from './pages/Products';
import Blog from './pages/Blog';
import User from './pages/User';
import NotFound from './pages/Page404';
import { useSelector } from 'react-redux';

// ----------------------------------------------------------------------

function PrivateRoute({ component, ...rest }) {
  const isAuthed = useSelector((state) => state.authReducer['isAuth']);
  console.log(isAuthed, 'IS AUTh');
  return isAuthed ? component : <Navigate to="/login" />;
}

export default function Router() {
  return useRoutes([
    {
      path: '/dashboard',
      element: <PrivateRoute component={<DashboardLayout />} />,
      children: [
        { path: 'app', element: <DashboardApp /> },
        { path: 'user', element: <User /> },
        { path: 'products', element: <Products /> },
        { path: 'blog', element: <Blog /> }
      ]
    },
    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [
        { path: '/', element: <Navigate to="/dashboard/app" /> },
        { path: 'login', element: <Login /> },
        { path: 'register', element: <Register /> },
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to="/404" /> }
      ]
    },
    { path: '*', element: <Navigate to="/404" replace /> }
  ]);
}

export { PrivateRoute };
