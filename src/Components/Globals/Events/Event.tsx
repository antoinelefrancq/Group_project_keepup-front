import PropTypes from 'prop-types';

function Event({ month, day, name, sport, level, color, remaining_number, total_number}) {

  return (
    <div className="bg-[#FFFFFF] rounded-lg w-full p-0.5 flex items-center">
      <div className={`bg-${color} rounded-l-lg flex items-center pr-[6px] h-[110px]`}>
        <div className="flex flex-col align-center justify-center w-[66px] px-2">
          <div className="text-white border-b-2 w-full text-center text-[15px] font-bold pb-1">
            <p>{month}</p><p>{day}</p>
          </div>
          <div className="flex flex-col justify-center items-center pt-2">
            <img src="/img/muscu.svg" alt="profile_picture" className="w-10 h-10"/>
          </div>
        </div>
        <div className="text-white text-center w-[66px]">
          <img src="/img/photo2.svg" alt="image_profil" className="" />
        </div>
      </div>
      <div className="text-blue">
        <h3 className="px-1 text-[15px]">Tuesday - leg day !</h3>
        <p className="px-1 text-[12px]">Keeper: {name}</p>
        <p className="px-1 text-[12px]">Activité: {sport} <span className={`bg-${color} rounded-full text-white text-[11px] p-1`}>{level}</span></p>
        <p className="flex justify-start items-end gap-4 py-2 pr-3">
          <span className={`bg-${color} rounded-r-full text-white text-[12px] p-1`}>{remaining_number}/{total_number} place{remaining_number>0 ? 's' : ''} disponible{remaining_number>0 ? 's' : ''}</span>
          <span className={`bg-${color} rounded-full text-white text-[11px] px-2 py-0.5`}>16:00</span>
        </p>
      </div>
    </div>
  );
}

Event.propTypes = {
  month: PropTypes.string.isRequired,
  day: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  sport: PropTypes.string.isRequired,
  level: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  remaining_number: PropTypes.string.isRequired,
  total_number: PropTypes.string.isRequired,
};

export default Event;