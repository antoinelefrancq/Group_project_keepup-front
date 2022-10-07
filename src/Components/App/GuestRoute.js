import React from 'react';
import jwt_decode from 'jwt-decode';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from './ProtectedRoute';

const GuestRoute = () => {
  const isAuth = useAuth();
  return isAuth.loggedIn ? <Navigate to="/" /> : <Outlet />;
};

export default GuestRoute;
