import PropTypes from 'prop-types';

function Event({ event }) {
  return (
    <div className="bg-[#FFFFFF] rounded-lg w-full p-0.5 flex items-center">
      <div className="bg-blue rounded-l-lg flex items-center pr-[6px] h-[110px]">
        <div className="flex flex-col align-center justify-center w-[66px] px-2">
          <div className="text-white border-b-2 w-full text-center text-[15px] font-bold pb-1">
            <p>Mar</p>
            <p>17</p>
          </div>
          <div className="flex flex-col justify-center items-center pt-2">
            <img
              src="/img/muscu.svg"
              alt="profile_picture"
              className="w-10 h-10"
            />
          </div>
        </div>
        <div className="text-white text-center w-[66px]">
          <img src="/img/photo2.svg" alt="image_profil" className="" />
        </div>
      </div>
      <div className="text-blue">
        <h3 className="px-1 text-[15px]">Tuesday - leg day !</h3>
        <p className="px-1 text-[12px]">Keeper: {event?.admin?.firstname}</p>
        <p className="px-1 text-[12px]">
          Activité: {event?.sport?.sport}
          <span className="bg-blue rounded-full text-white text-[11px] p-1">
            {event?.level}
          </span>
        </p>
        <p className="flex justify-start items-end gap-4 py-2 pr-3">
          <span className="bg-blue rounded-r-full text-white text-[12px] p-1">
            {event?.participant?.length + 1}/{event?.max} place disponible
          </span>
          <span className="bg-blue rounded-full text-white text-[11px] px-2 py-0.5">
            {new Date(event?.period?.start).getDate() +
              '/' +
              new Date(event?.period?.start).getMonth() +
              '/' +
              new Date(event?.period?.start).getFullYear()}
          </span>
        </p>
      </div>
    </div>
  );
}

export default Event;
Event.propTypes = {
  event: PropTypes.object,
};
