import Event from './Event';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';
import { applyMiddleware } from '@reduxjs/toolkit';

function Events() {
  axios.get('https://keepup-oclock.herokuapp.com/api/v1/event/6345dc7121333f91d85e5f1d')
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log('_____');
      console.log(error);
      console.log('_____');
    });

  
  return (
    <>
      <Link to='/events/maps'> <button className="fixed right-0 inset-y-1/2">
        <img src="./img/Logo_Map.svg" alt="logo_map" className="py-5 px-2 rounded-l-lg shadow-md shadow-[#808080] bg-white"/>
      </button></Link>
      <div className="flex flex-col gap-3 p-2 overflow-y-auto">
        <Event />
      </div>
    </>
  );
}

export default Events;