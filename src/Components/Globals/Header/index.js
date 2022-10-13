// import './style.scss'

import { Link } from 'react-router-dom';
import { useAuth } from '../../App/ProtectedRoute';
import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import { closeModale } from '../../../redux/reducer/userReducer';
import { useDispatch } from 'react-redux';

import { toggleModale } from '../../../redux/reducer/userReducer';
import { useSelector } from 'react-redux';

function Header() {
  const {loggedIn: connected} = useAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClick = () => {
    localStorage.removeItem('credentials');
    dispatch(closeModale());
    navigate('/');
  };
  const {user} = useSelector((state) => state.user);
  console.log(user);

  return (
    <div className="bg-whiteCustom header text-[36px] flex items-end justify-between ">
    
      {/**
       * Link to the Homepage
       */}
      <Link to="/"><h1 className="text-blue pt-14 pb-5 pl-6 font-pangram font-black">Keep<span className="text-red">'Up</span></h1></Link>
      
      {/**
       * Deconnection
       */}
      {
        connected && 
        <div className="flex flex-col items-center font-bold text-blue text-[14px] pb-[28px] pr-10 sm:flex-row sm:text-[24px] sm:gap-5 ">
          <Link to="/team"><button className='group block hover:text-red focus:outline-none'><span className='group-focus:text-red group-focus:underline'>About</span></button></Link>
          <button onClick={handleClick} className='group block hover:text-red focus:outline-none md:hidden'><span className='group-focus:text-red group-focus:underline'>Déconnexion</span></button>
          <Link to={'/events/maps'} className="flex items-center justify-end hidden md:block">
            Voir la carte
          </Link>
          <Link to={'/create-event'} className="flex items-center justify-end hidden md:block">
            Créer une session
          </Link>
          <button 
            onClick={(event) => {
              event.stopPropagation();
              dispatch(toggleModale());
            }}
            className='h-8 w-8 flex items-center justify-center rounded-full hidden md:block'>
            <span className='rounded-full flex justify-center items-center'>
              <img src={user?.image_url} alt="profile_picture" className='block'/>
            </span>
          </button>
        </div>
      }
      {/**
       * Connection
       */}
      {!connected &&        
        <div className="flex flex-col items-center font-bold text-blue text-[14px] pb-[28px] pr-10 sm:flex-row sm:text-[24px] sm:gap-5 ">
          <Link to="/team"><button className='group block hover:text-red focus:outline-none'><span className='group-focus:text-red group-focus:underline'>About</span></button></Link>
          <Link to="/signup"><button className='group block hover:text-red focus:outline-none'><span className='group-focus:text-red group-focus:underline'>Inscription</span></button></Link>
          <Link to="/login"><button className='group block hover:text-red focus:outline-none'><span className='group-focus:text-red group-focus:underline'>Connexion</span></button></Link>
        </div>}
    </div>
  );
}

export default Header;