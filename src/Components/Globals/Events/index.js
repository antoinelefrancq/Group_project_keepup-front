import Event from './Event';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { applyMiddleware } from '@reduxjs/toolkit';
import * as api from '../../../api/routes';
import { useSelector } from 'react-redux';
import EventNearest from './EventNearest';
import toast from 'react-hot-toast';

function Events() {
  const [events, setEvents] = useState([]);

  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    if (user) {
      const filter = {
        sport: null,
        level: null,
        gender: 'Non précisé',
        date: {
          from: new Date(1665525600000).getTime(),
          to: new Date(1665525600000).getTime() + 365 * 24 * 60 * 60 * 1000 * 2,
        },
        period: { start: '8:00', end: '12:00' },
        location: {
          type: 'Point',
          radius: 50,
          coordinates: [user.latitude, user.longitude],
        },
      };

      api
        .getNearestEvent(filter)
        .then((response) => {
          console.log(response);
          console.log(response.data);
          setEvents(response.data);
        })
        .catch((error) => {
          console.log(error);
          toast.error('Aucun event au alentour trouvé');
        });
    }
  }, [user]);

  return (
    <>
      <Link to="/events/maps">
        <button className="fixed right-0 inset-y-1/2">
          <img
            src="./img/Logo_Map.svg"
            alt="logo_map"
            className="py-5 px-2 rounded-l-lg shadow-md shadow-[#808080] bg-white"
          />
        </button>
      </Link>
      <div className="flex flex-col gap-3 p-2 overflow-y-auto">
        {events.map((item, index) => {
          return (
            <EventNearest
              event={item}
              userID={user._id}
              user={user}
              key={index}
            />
          );
        })}
      </div>
    </>
  );
}

export default Events;
