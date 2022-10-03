function ButtonMenu() {
  return (
    <div className="fixed bottom-10 left-1/2 -translate-x-1/2">
      <div className="inline-flex relative">
        <button className="bg-gradient-to-b from-red to-blue hover:from-pink-500 shadow shadow-black hover:to-yellow-500 text-white hover:bg-gray-400 text-gray-800 font-bold py-4 pl-4 pr-4 rounded-l">
          <img src='./img/Loupe.svg' alt="logo_loupe" className=""/>
          <button className="bg-gradient-to-b from-red to-blue hover:from-pink-500 shadow shadow-black hover:to-yellow-500 text-white  ">
            <span className="block text-black px-6 py-6 font-semibold rounded-full bg-white">
              <img src='./img/Logo_menu.svg' alt="logo_menu"/>
            </span>
          </button>
        </button>
        <button className="bg-white shadow shadow-black hover:bg-gray-400 text-gray-800 font-bold py-4 pl-4 pr-4 rounded-r">
          <img src='./img/Plus.svg' alt="logo_plus" className=""/>
        </button>
      </div>
    </div>
  );
}

export default ButtonMenu;