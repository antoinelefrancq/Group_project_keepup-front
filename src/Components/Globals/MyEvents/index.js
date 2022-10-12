import * as api from '../../../api/routes';
import { useEffect, useState } from 'react';
import { useAuth } from '../../App/ProtectedRoute';
import ButtonMenu from '../ButtonMenu';
import Event from '../Events/Event';
import EventDone from '../Events/EventDone';

function MyEvents() {
  // je récupère l'id depuis mon localStorage
  // const {_id} = useAuth().user;
  const _id='6345266a5213ced3e99d5328';
  const days = ['dimanche','lundi','mardi','mercredi','jeudi', 'vendredi', 'samedi'];
  //j'initie mon state local
  const [events,setEvents]= useState([
    {
      address:'2 rue de l\'horloge',
      admin:{_id: '6345266a5213ced3e99d5328', firstname: 'Nathan'},
      city:'Nimes',
      country:'France',
      created_at:'2022-10-11T12:04:33.933Z',
      date:'2000-06-02T22:00:00.000Z',
      level:'Débutant',
      location:{type: 'Point', coordinates: Array(2)},
      max:30,
      messages:(4) ['63455e23f6c227657bc8f604', '634585c3a2ab71fd88829d50', '63458654a2ab71fd88829d53', '63467ccc979c8d6ce7a98fae'],
      name:'De la randonné ca vous dit ?',
      participant:['63453df3e4b5036572879730'],
      period:{start: 1665058293, end: 1665663093},
      sport:{_id: '63315c7e03beff9752dd8e3f', category: 'sports d\'endurance', sport: 'randonnée ', icon: 'https://firebasestorage.googleapis.com/v0/b/keepup…=media&token=86df2f0c-87d4-418e-88cd-46ec005f74e4', __v: 0},
      zipcode:30000,
      __v:0,
      _id:'63455bd1f6c227657bc8f5bf',
    }
  ]);

  // je récupère la date d'aujourd'hui
  const nowTimestamp = Math.floor(new Date().getTime() / 1000); 

  useEffect(()=>{
    api
      .getEventFromUserId(_id)
      .then((response)=>{
        setEvents(response.data);
        console.log(new Date(events[0].date));
      })
      .catch((error) => {
        console.log('_____');
        console.log(error);
        console.log('_____');
      });
  },[]);

  return (
    <>
      {<div className="flex flex-col gap-3 p-2 overflow-y-hidden">
        <h2 className="text-center text-xl text-white">Mes sessions</h2>
        <Event event={events[0]} />
        <Event event={events[1]} />
      </div>}
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