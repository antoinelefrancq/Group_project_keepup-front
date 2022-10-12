import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const month = ['janv', 'fév', 'mars', 'avr', 'mai', 'juin', 'juil', 'août', 'sept', 'oct', 'nov', 'déc'];

function EventDone({ event }) {
  const {user} = useSelector((state)=>state.user);
  return (
    <div className="bg-greyPlaceholder rounded-lg w-full p-0.5 flex items-center">
      <div className="realtive bg-blue rounded-l-lg flex items-center pr-[6px] h-[110px]">
        <p className="absolute inset-x-1/3 px-3 py-2 text-full bg-white text-black text-center rounded-lg">Terminée</p>
        <div className="flex flex-col align-center justify-center w-[66px] px-2">
          <div className="text-greyPlaceholder border-b-2 w-full text-center text-[15px] font-bold pb-1">
            <p>{month[new Date(event.date).getMonth()]}</p>
            <p>{new Date(event.date).getDate()}</p>
          </div>
          <div className="flex flex-col justify-center items-center pt-2 opacity-40">
            <img
              src={event.sport.icon}
              alt="sport picture"
              className="w-10 h-10"
            />
          </div>
        </div>
        <div className="text-greyPlaceholder text-center w-[66px]">
          <img src={user.image_url} alt="image_profil" className="w-full" />
        </div>
      </div>
      <div className="text-blue">
        <h3 className="px-1 text-[15px]">{event.name}</h3>
        <p className="px-1 text-[12px]">Keeper: {event?.admin?.firstname}</p>
        <p className="px-1 text-[12px]">
          Activité: {event?.sport?.sport}
          <span className="bg-blue rounded-full text-greyPlaceholder text-[11px] p-1">
            {event?.level}
          </span>
        </p>
        <p className="flex justify-start items-end gap-4 py-2 pr-3">
          <span className="bg-blue rounded-r-full text-greyPlaceholder text-[12px] p-1">
            {event?.participant?.length + 1}/{event?.max} inscrit{event?.participant?.length>1?'s':''}
          </span>
          <span className="bg-blue rounded-full text-greyPlaceholder text-[11px] px-2 py-0.5">
            {String(event?.period?.start).slice(0,-2) + ':' + String(event?.period?.start).slice(-2)}
          </span>
        </p>
      </div>
    </div>
  );
}

EventDone.propTypes = {
  event: PropTypes.object,
};

export default EventDone;