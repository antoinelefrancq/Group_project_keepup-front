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
  const [filter, setFilter] = useState({
    radius: 50,
  });

  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    searchEvents();
  }, [user]);

  function searchEvents() {
    if (user) {
      const filterOptions = {
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
          radius: filter.radius,
          coordinates: [user.latitude, user.longitude],
        },
      };

      api
        .getNearestEvent(filterOptions)
        .then((response) => {
          setEvents(response.data);
        })
        .catch((error) => {
          console.log(error);
          toast.error('Aucun event au alentour trouvé');
        });
    }
  }

  const handleChangeFilter = (event) => {
    setFilter((s) => ({ ...s, radius: Number(event.target.value) }));
  };

  return (
    <>
      <Link to="/events/maps" state={filter}>
        <button className="fixed right-0 inset-y-1/2 z-10">
          <img
            src="./img/Logo_Map.svg"
            alt="logo_map"
            className="py-5 px-2 rounded-l-lg shadow-md shadow-[#808080] bg-white"
          />
        </button>
      </Link>
      <div className="flex flex-col gap-3 p-2 overflow-y-auto">
        <form
          className="w-full bg-white flex flex-col items-center justify-center"
          onSubmit={(event) => {
            event.preventDefault();
            searchEvents();
          }}
        >
          <div>
            <input
              onChange={handleChangeFilter}
              type="range"
              name="meter"
              id="meter"
              defaultValue={filter.radius}
              min={5}
              max={1500}
              step={5}
            />
            <span>{filter.radius}km</span>
          </div>
          <button type="submit">Rechercher</button>
        </form>
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
