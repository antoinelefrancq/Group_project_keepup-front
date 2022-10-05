import { useAppDispatch, useAppSelector } from '../../../redux/Hooks';
import { openModale } from '../../../redux/reducer/userReducer';
import type { RootState, AppDispatch } from '../../../redux/store';


function ButtonMenu() {
  const {user} = useAppSelector((state:RootState)=>state);
  const dispatch = useAppDispatch();

  return (
    <div className="fixed bottom-10 left-1/2 -translate-x-1/2 ">
      <div className="flex flex-row relative h-[56px]">
        <button onClick={() => console.log('bouton de gauche')} className="flex items-center w-[108px] bg-gradient-to-b from-red to-blue hover:from-pink-500 shadow shadow-black hover:to-yellow-500 bg-white text-gray-800 font-bold pr-6 rounded-l">
          <img src='./img/Loupe.svg' alt="logo_loupe" className="flex py-4 translate-x-6"/>
          <button onClick={(event) => {
            event.stopPropagation();
            dispatch(openModale());
            console.log(event);            
            console.log('bouton du milieu');
          }} 
          id='middleButton'
          className="btn-block translate-x-14 p-1 rounded-full from-rose-400 via-fuchsia-500 to-indigo-500 bg-gradient-to-b">
            <span className="block text-black px-3 py-4 border-none font-semibold rounded-full bg-white btn-block">
              <img src='./img/Logo_menu.svg' alt="logo_menu"/>
            </span>
          </button>
        </button>
        <button  onClick={() => {
          console.log('bouton de droite');}} className=" bg-white shadow shadow-black hover:bg-gray-400 text-gray-800 font-bold pr-10 pl-12 rounded-r w-[108px]">
          <img src='./img/Plus.svg' alt="logo_plus" className="pb-1 translate-x-3"/>
        </button>
      </div>
    </div>
  );
}

export default ButtonMenu;