function Event() {
  return (
    <div className="bg-white rounded-lg w-full p-0.5 h-auto flex">
      <div className="bg-blue rounded-l-lg flex items-center">
        <div className="flex flex-col align-center justify-center w-[66px]">
          <div className="text-white border-b-2 w-full text-center text-[15px]">Date</div>
          <div className="text-white text-center text-[15px]">Sport Logo</div>
        </div>
        <div className="text-white text-center w-[73px]"><img src="#" alt="image_profil" /></div>
      </div>
      <div className="text-blue">
        <h3 className="px-1">Tuesday - leg day !</h3>
        <p className="px-1 text-[15px]">Keeper: Benoît</p>
        <p className="px-1 text-[13px]">Activité: musculation <span className="bg-blue rounded-full text-white text-[11px] p-1">Amateur</span></p>
        <p className="flex justify-start items-end gap-4 py-2 pr-3">
          <span className="bg-blue rounded-r-full text-white text-[13px] p-2">1/2 place disponible</span>
          <span className="bg-blue rounded-full text-white text-[11px] px-2 py-1">16:00</span>
        </p>
      </div>
    </div>
  );
}

export default Event;