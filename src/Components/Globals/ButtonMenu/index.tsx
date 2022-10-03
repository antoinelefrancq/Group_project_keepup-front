function ButtonMenu() {
  return (
    <div className="w-64 fixed bottom-10 left-1/2 -translate-x-1/2 ">
      <div className="flex flex-row relative">
        <button onClick={() => console.log('bouton de gauche')} className="flex justify-between bg-gradient-to-b from-red to-blue hover:from-pink-500 shadow shadow-black hover:to-yellow-500 bg-white text-gray-800 font-bold pr-6 rounded-l">
          <img src='./img/Loupe.svg' alt="logo_loupe" className="flex py-4 translate-x-6"/>
          <div onClick={(event) => {
            event.stopPropagation();
            console.log('bouton du millieu');
          }} className="btn-block translate-x-14 p-1 rounded-full from-rose-400 via-fuchsia-500 to-indigo-500 bg-gradient-to-b">
            <span className="block text-black px-3 py-4 border-none font-semibold rounded-full bg-white btn-block">
              <img src='./img/Logo_menu.svg' alt="logo_menu"/>
            </span>
          </div>
        </button>
        <button  onClick={() => console.log('bouton de droite')} className=" bg-white shadow shadow-black hover:bg-gray-400 text-gray-800 font-bold pr-10 pl-12 rounded-r">
          <img src='./img/Plus.svg' alt="logo_plus" className="pb-1 translate-x-3"/>
        </button>
      </div>
    </div>
  );
}

export default ButtonMenu;