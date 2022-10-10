function Team() {
  return (
    <>
      <div className="absolute top-4 inset-x-5 signup lg:w-4/6 lg:left-1/2 lg:-translate-x-1/2">
        <div className="flex flex-col justify-center items-center gap-3 bg-white rounded-lg px-auto pt-7 pb-3">
          <h1 className="text-xl text-blue rounded-lg font-bold">La Team</h1>
          <div className="flex flex-col gap-3 justify-center items-center w-11/12 lg:flex-row lg:gap-10 lg:items-start lg:pt-10">
            <div className="flex flex-col gap-3 py-2 justify-center items-center w-11/12 bg-whiteCustom rounded-lg shadow-md shadow-greyPlaceholder border-1 border-greyPlaceholder">
              <p className="text-lg text-blueCustom font-bold">Développeurs Front</p>
              <div className="flex flex-col gap-5 justify-center items-center w-11/12">
                <div className="flex justify-around items-center w-11/12">
                  <div className="w-25 flex flex-col justify-center items-center gap-2">
                    <img src="/img/Franck.jpeg" alt="photo_Franck" className="w-20 h-20 rounded-lg object-cover bg-center" />
                    <div className="w-25 text-center"><p className="text-red">Franck</p><p className="text-blueCustom">Product Owner</p></div>
                  </div>
                  <div className="w-25 flex flex-col justify-center items-center gap-2">
                    <img src="/img/Antoine.jpeg" alt="photo_Antoine" className="w-20 h-20 rounded-lg object-cover bg-center" />
                    <div className="w-25 text-center"><p className="text-red">Antoine</p><p className="text-blueCustom">Scrum Master</p></div>
                  </div>
                </div>
                <div className="flex justify-around items-center w-11/12">
                  <div className="w-25 flex flex-col justify-center items-center gap-2">
                    <img src="/img/Romain.png" alt="photo_Romain" className="w-20 h-20 rounded-lg object-cover bg-center" />
                    <div className="w-25 text-center"><p className="text-red">Romain</p><p className="text-blueCustom">Lead Front</p></div>
                  </div>
                  <div className="w-25 flex flex-col justify-center items-center gap-2">
                    <img src="/img/Mizuki.png" alt="photo_Mizuki" className="w-20 h-20 rounded-lg object-cover bg-center" />
                    <div className="w-25 text-center"><p className="text-red">Mizuki</p><p className="text-blueCustom">Git Master</p></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3 py-2 justify-center items-center w-11/12 bg-whiteCustom rounded-lg shadow-md shadow-greyPlaceholder border-1 border-greyPlaceholder">
              <p className="text-lg text-blueCustom font-bold">Développeurs Back</p>
              <div className="flex justify-around items-center w-11/12">
                <div className="w-25 flex flex-col justify-center items-center gap-2">
                  <img src="/img/nathan.jpg" alt="photo_Nathan" className="w-20 h-20 rounded-lg object-cover bg-center"/>
                  <div className="w-25 text-center"><p className="text-red">Nathan</p><p className="text-blueCustom">Lead Back</p></div>
                </div>
                <div className="w-25 flex flex-col justify-center items-center gap-2">
                  <img src="/img/Jeffrey.jpeg" alt="photo_Jeffrey" className="w-20 h-20 rounded-lg object-cover bg-center"/>
                  <div className="w-25 text-center"><p className="text-red">Jeffrey</p><p className="text-blueCustom">UI/UX</p></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
  
export default Team;