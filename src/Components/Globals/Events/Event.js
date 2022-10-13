import PropTypes from 'prop-types';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
const days = [
  'dimanche',
  'lundi',
  'mardi',
  'mercredi',
  'jeudi',
  'vendredi',
  'samedi',
];
const month = [
  'janv',
  'fév',
  'mars',
  'avr',
  'mai',
  'juin',
  'juil',
  'août',
  'sept',
  'oct',
  'nov',
  'déc',
];
const colors = {
  Débutant: 'blue',
  Intermédaire: 'orange',
  Expert: 'red',
};
function Event({ event, userId }) {
  const { user } = useSelector((state) => state.user);
  // const [modaleIsOpen, setModaleIsOpen] = useState(false);
  // const handleclick = () =>{
  //   if(event.participant.find(userId)){
  //     Navigate(`/profile/${userId}/events/${event._id}`);
  //   }else{
  //     setModaleIsOpen(true);
  //   }
  // };
  // to={`/profile/${userId}/events/${event._id}`}

  return (
    <Link
      to={`/profile/${userId}/events/${event?._id}`}
      className="bg-[#FFFFFF] rounded-lg w-full p-0.5 flex items-center relative"
    >
      {/**!modaleIsOpen && <div className="absolute bg-whiteCustom shadow-inner shadow-greyPlaceholder rounded-lg p-3">
        <p>Souhaites-tu joindre la session ?</p>
        <button>Oui</button>
        <button>Non</button>
      </div>*/}
      <div className="bg-blue rounded-l-lg flex items-center pr-[6px] h-[110px]">
        <div className="flex flex-col align-center justify-center w-[66px] px-2">
          <div className="text-white border-b-2 w-full text-center text-[15px] font-bold pb-1">
            <p>{month[new Date(event?.date).getMonth()]}</p>
            <p>{new Date(event?.date).getDate()}</p>
          </div>
          <div className="flex flex-col justify-center items-center pt-2 bg-blue">
            <img
              src={event?.sport?.icon}
              alt="sport picture"
              className="w-10 h-10"
            />
          </div>
        </div>
        <div className="text-white text-center w-[66px]">
          <img src={user?.image_url} alt="image_profil" className="w-full" />
        </div>
      </div>
      <div className="text-blue">
        <h3 className="px-1 text-[15px]">{event?.name}</h3>
        <p className="px-1 text-[12px]">Keeper: {event?.admin?.firstname}</p>
        <p className="px-1 text-[12px]">
          Activité: {event?.sport?.sport}
          <span
            className={`bg-${
              colors[event?.level]
            } rounded-full text-white text-[11px] p-1`}
          >
            {event?.level}
          </span>
        </p>
        <p className="flex justify-start items-end gap-4 py-2 pr-3">
          <span className="bg-blue rounded-r-full text-white text-[12px] p-1">
            {event?.participant?.length + 1}/{event?.max} inscrit
            {event?.participant?.length > 1 ? 's' : ''}
          </span>
          <span className="bg-blue rounded-full text-white text-[11px] px-2 py-0.5">
            {String(event?.period?.start).slice(0, -2) +
              ':' +
              String(event?.period?.start).slice(-2)}
          </span>
        </p>
      </div>
    </Link>
  );
}

export default Event;
Event.propTypes = {
  event: PropTypes.object,
  userId: PropTypes.string,
  data: PropTypes.any,
};
