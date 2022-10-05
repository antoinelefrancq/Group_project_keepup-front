function EventDone() {
  return (
    <div className="bg-greyPlaceholder rounded-lg w-full p-0.5 flex items-center">
      <div className="realtive bg-blue rounded-l-lg flex items-center pr-[6px] h-[110px]">
        <p className="absolute inset-x-1/3 px-3 py-2 text-full bg-white text-black text-center rounded-lg">Terminée</p>
        <div className="flex flex-col align-center justify-center w-[66px] px-2">
          <div className="text-greyPlaceholder border-b-2 w-full text-center text-[15px] font-bold pb-1">
            <p>Mar</p><p>20</p>
          </div>
          <div className="flex flex-col justify-center items-center pt-2 text-greyPlaceholder">
            <img src="./img/muscu.svg" alt="profile_picture" className="w-10 h-10"/>
          </div>
        </div>
        <div className="text-greyPlaceholder text-center w-[66px]">
          <img src="../img/photo2.svg" alt="image_profil" className="" />
        </div>
      </div>
      <div className="text-blue">
        <h3 className="px-1 text-[15px]">Tuesday - leg day !</h3>
        <p className="px-1 text-[12px]">Keeper: Benoît</p>
        <p className="px-1 text-[12px]">Activité: musculation <span className="bg-blue rounded-full text-greyPlaceholder text-[11px] p-1">Amateur</span></p>
        <p className="flex justify-start items-end gap-4 py-2 pr-3">
          <span className="bg-blue rounded-r-full text-greyPlaceholder text-[12px] p-1">1/2 place disponible</span>
          <span className="bg-blue rounded-full text-greyPlaceholder text-[11px] px-2 py-0.5">16:00</span>
        </p>
      </div>
    </div>
  );
}

export default EventDone;