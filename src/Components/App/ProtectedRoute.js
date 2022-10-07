import React from 'react';
import jwt_decode from 'jwt-decode';
import { Navigate, Outlet } from 'react-router-dom';

export const useAuth = () => {
  try {
    const currentDate = new Date();
    const token = JSON.parse(localStorage.getItem('credentials'));
    const decodedToken = jwt_decode(token.refresh);

    if (decodedToken.exp * 1000 < currentDate.getTime()) {
      return { loggedIn: false, user: null };
    }

    return { loggedIn: true, user: decodedToken };
  } catch (error) {
    console.log(error);
    return { loggedIn: false, user: null };
  }
};

const ProtectedRoute = () => {
  const isAuth = useAuth();
  return isAuth.loggedIn ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
