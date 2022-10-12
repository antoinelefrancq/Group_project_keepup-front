import { useEffect, useState } from 'react';
import ButtonMenu from '../ButtonMenu';
import Event from '../Events/Event';
import EventDone from '../Events/EventDone';
import * as api from '../../../api/routes';
import axios from 'axios';

function MyEvents() {

  const [data, setdata] = useState([]);

  useEffect(() => {
    axios.get('https://keepup-oclock.herokuapp.com/api/v1/user/event/6345266a5213ced3e99d5328')
      .then((response) => {
        if (response.status === 200) {
          setdata(response.data);
        }
      })
      .catch((error) => {
        console.log('_____');
        console.log(error);
        console.log('_____');
      });
  }, []);
  console.log(data);
  return (
    <>
      <div className="flex flex-col gap-3 p-2 overflow-y-hidden">
        <h2 className="text-center text-xl text-white">Mes sessions</h2>
        {data.map((event) => {
          <div>{event.city}</div>; 
        })}
        
      </div>
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