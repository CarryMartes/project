import { Navigate, useRoutes, Route, Routes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
import PropTypes from 'prop-types';
//
import Login from './pages/Login';
import Register from './pages/Register';
import NotFound from './pages/Page404';
import { useSelector } from 'react-redux';
import { lazy } from 'react';

const Repositories = lazy(() => import('./pages/Repositories'));
const DashboardApp = lazy(() => import('./pages/DashboardApp'));
const Products = lazy(() => import('./pages/Products'));
const User = lazy(() => import('./pages/User'));
const Blog = lazy(() => import('./pages/Blog'));

// ----------------------------------------------------------------------

function PrivateRoute({ component, ...rest }) {
  const isAuthed = useSelector((state) => state.authReducer['isAuth']);
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
        { path: 'subjects', element: <Products /> },
        { path: 'repositories', element: <Repositories /> },
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
