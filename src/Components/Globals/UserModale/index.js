import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../redux/Hooks';
import { closeModale } from '../../../redux/reducer/userReducer';
import { useAuth } from '../../App/ProtectedRoute';

const UserModale = () => {
  const { user } = useSelector((state) => state.user);
  const isAuth = useAuth();
  const dispatch = useAppDispatch();

  const navigate = useNavigate();
  const handleClick = () => {
    localStorage.removeItem('credentials');
    dispatch(closeModale());
    navigate('/');
  };

  return (
    <section
      id="modale"
      className="h-1/2 w-full fixed bottom-0 z-10 rounded-t-[10px] bg-white flex flex-col items-center shadow-inner shadow-greyPlaceholder md:top-[130px] md:w-40 md:right-0 md:h-72 md:rounded-b-[10px] "
    >
      <button
        onClick={() => {
          dispatch(closeModale());
        }}
        className="absolute top-3 right-4 w-10 h-10"
      >
        <img
          src="/img/bi_arrow-down-circle.svg"
          alt="flèche_du_bas"
          className="md:hidden"
        />
      </button>
      <Link
        to={`/profile/${isAuth?.user?._id}`}
        onClick={() => {
          dispatch(closeModale());
        }}
      >
        <img
          className="w-20 h-20 rounded-full mt-[33px] mb-4 shadow-lg shadow-greyPlaceholder"
          src={
            user?.image_url ||
            'http://image.noelshack.com/fichiers/2022/38/4/1663838623-default-user-image.png'
          }
          alt="photo de profil"
        />
      </Link>
      <Link
        to={`/profile/${isAuth?.user?._id}`}
        onClick={() => {
          dispatch(closeModale());
        }}
        className="mb-2"
      >
        Mon profil
      </Link>
      <Link to={`/profile/${isAuth?.user?._id}/events`} className="mb-2">
        Mes sessions
      </Link>
      <div className="w-36 h-1 bg-[#E3E3E3] mt-3" />
      <button onClick={handleClick}>
        <p className="pt-[14px] w-full text-center">Se Déconnecter</p>
      </button>
    </section>
  );
};
export default UserModale;
