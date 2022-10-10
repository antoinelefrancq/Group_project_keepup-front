import React, { useEffect } from 'react';
import jwt_decode from 'jwt-decode';
import { Navigate, Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getUserData } from '../../redux/reducer/userReducer';
import ButtonMenu from '../Globals/ButtonMenu';

export const useAuth = () => {
  try {
    const currentDate = new Date();
    const token = JSON.parse(localStorage.getItem('credentials'));
    const decodedToken = jwt_decode(token?.refresh);

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
  const { loggedIn, user } = useAuth();
  const dispatch = useDispatch();
  console.log(loggedIn);
  useEffect(() => {
    if (loggedIn) {
      dispatch(getUserData({ id: user._id }));
    }
  }, []);

  return (
    <>
      {loggedIn && <ButtonMenu />}
      {loggedIn ? <Outlet /> : <Navigate to="/login" />}
    </>
  );
};

export default ProtectedRoute;
