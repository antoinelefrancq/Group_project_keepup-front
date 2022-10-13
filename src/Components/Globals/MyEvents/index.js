import * as api from '../../../api/routes';
import { useEffect, useState } from 'react';
import { useAuth } from '../../App/ProtectedRoute';
import ButtonMenu from '../ButtonMenu';
import Event from '../Events/Event';
import EventDone from '../Events/EventDone';

function MyEvents() {
  // je récupère l'id depuis mon localStorage
  const { isAuth } = useAuth().user;
  // const _id = '6331760ae98d6c76841f590e';
  const days = [
    'dimanche',
    'lundi',
    'mardi',
    'mercredi',
    'jeudi',
    'vendredi',
    'samedi',
  ];
  //j'initie mon state local
  const [events, setEvents] = useState([
    {
      address: '2 rue de horloge',
      admin: isAuth.user.id,
      city: 'Nimes',
      country: 'France',
      created_at: '2022-10-11T12:04:33.933Z',
      date: '2000-06-02T22:00:00.000Z',
      level: 'Débutant',
      location: { type: 'Point', coordinates: Array(2) },
      max: 30,
      messages: (4)[
        ('63455e23f6c227657bc8f604',
        '634585c3a2ab71fd88829d50',
        '63458654a2ab71fd88829d53',
        '63467ccc979c8d6ce7a98fae')
      ],
      name: 'De la randonné ca vous dit ?',
      participant: [isAuth.user.id],
      period: { start: 1665058293, end: 1665663093 },
      sport: {
        _id: '63315c7e03beff9752dd8e3f',
        category: 'sports endurance',
        sport: 'randonnée ',
        icon: 'https://firebasestorage.googleapis.com/v0/b/keepup…=media&token=86df2f0c-87d4-418e-88cd-46ec005f74e4',
        __v: 0,
      },
      zipcode: 30000,
      __v: 0,
      _id: '63455bd1f6c227657bc8f5bf',
    },
  ]);
  const [filterEvents, setFilterEvents] = useState({});
  // je récupère la date d'aujourd'hui
  const nowTimestamp = Math.floor(new Date().getTime() / 1000);

  useEffect(() => {
    api
      .getEventFromUserId(isAuth.user.id)
      .then((response) => {
        setEvents(response.data);
      })
      .catch((error) => {
        console.log('_____');
        console.log(error);
        console.log('_____');
      });
  }, []);

  useEffect(() => {
    const eventsToCome = events.filter(
      (event) => new Date(event.date) / 1000 > nowTimestamp
    );
    const passedEvents = events.filter(
      (event) => new Date(event.date) / 1000 < nowTimestamp
    );

    if (eventsToCome && passedEvents) {
      setFilterEvents({
        passed: eventsToCome,
        futur: passedEvents,
      });
    }
  }, [events]);

  return (
    <>
      {
        <div className="flex flex-col gap-3 p-2 overflow-y-hidden">
          <h2 className="text-center text-xl text-white">Mes sessions</h2>
          {filterEvents.passed?.map((event) => (
            <Event key={event._id} event={event} />
          ))}
        </div>
      }
      <div className="flex flex-col gap-3 p-2 overflow-y-auto">
        <h2 className="text-center text-xl text-white">Sessions terminées</h2>
        <EventDone />
        <EventDone />
      </div>
      <ButtonMenu />
    </>
  );
}

export default MyEvents;
