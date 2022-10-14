import * as api from '../../../api/routes';
import { useEffect, useState } from 'react';
import { useAuth } from '../../App/ProtectedRoute';
import ButtonMenu from '../ButtonMenu';
import Event from '../Events/Event';
import EventDone from '../Events/EventDone';

function MyEvents() {
  // je récupère l'id depuis mon localStorage
  const isAuth = useAuth().user;
  //j'initie mon state local
  const [events, setEvents] = useState([]);
  const [filterEvents, setFilterEvents] = useState({});
  // je récupère la date d'aujourd'hui
  const nowTimestamp = Math.floor(new Date().getTime() / 1000);

  useEffect(() => {
    api
      .getEventFromUserId(isAuth._id)
      .then((response) => {
        setEvents(response.data);
        console.log(response.data);
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
        futur: eventsToCome,
        passed: passedEvents,
      });
    }
  }, [events]);

  return (
    <>
      <div className="flex flex-col gap-3 p-2 overflow-y-hidden">
        <h2 className="text-center text-xl text-white">Mes sessions</h2>
        {filterEvents.futur?.map((event) => (
          <Event key={event._id} event={event} userId={isAuth._id} />
        ))}
      </div>
      <div className="flex flex-col gap-3 p-2 overflow-y-auto">
        <h2 className="text-center text-xl text-white">Sessions terminées</h2>
        {filterEvents.passed?.map((event) => (
          <EventDone key={event._id} event={event} />
        ))}
      </div>
      {/* <ButtonMenu /> */}
    </>
  );
}

export default MyEvents;
