function Event() {
  return (
    <div className="bg-white rounded-lg w-[340px] p-0.5 h-auto flex">
      <div className="bg-blue rounded-l-lg flex">
        <div className="flex flex-col align-center justify-center">
          <div className="text-white border-b-2 w-full text-center">Date</div>
          <div className="text-white text-center">Sport Logo</div>
        </div>
        <div className="text-white text-center">Photo profil</div>
      </div>
      <div className="text-blue grow">
        <h3>Tuesday - leg day !</h3>
        <p className="text-sm">Keeper: Benoît</p>
        <p className="text-[0.7rem]">Activité: musculation <span className="bg-blue rounded-md text-white text-[0.7rem]">Amateur</span></p>
        <p><span className="bg-blue rounded-md text-white text-[0.8rem]">1/2 place disponible</span><span className="bg-blue rounded-md text-white text-[0.7rem]">16:00</span></p>
      </div>
    </div>
  );
}

export default Event;