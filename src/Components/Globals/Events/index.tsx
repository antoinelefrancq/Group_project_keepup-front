import ButtonMenu from '../ButtonMenu';
import Footer from '../Footer';
import Event from './Event';

function Events() {
  return (
    <>
      <img src="./img/Logo_Map.svg" alt="logo_map" className="fixed right-0 inset-y-1/2 py-5 px-2 rounded-l-lg shadow-md shadow-[#808080] bg-white"/>
      <div className="flex flex-col gap-3 p-2 overflow-y-auto">
        <Event />
        <Event />
        <Event />
        <ButtonMenu />
      </div>
    </>
  );
}

export default Events;