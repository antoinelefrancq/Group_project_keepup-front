import ButtonMenu from '../Globals/ButtonMenu';
import Event from '../Globals/Events/Event';

function MyEvent() {
  return (
    <div className="pt-6 flex flex-col">
      <Event />
      <p className="text-[13px] text-white text-center py-1">Vous participez à cette session</p>
      <p className="text-[13px] text-blue bg-white py-1 pl-[14px]">19 personnes participent à cette session</p>
      <p className="text-[15px] text-blue bg-white py-1 pl-[14px] leading-none">Petit tournois 2v2 de street basket ce samedi 24 à Gratte-Ciel</p>
      <div className="bg-white">
        <p className="text-[13px] text-[#A5A5A5] bg-[#E9E9E9] my-1 py-1 pl-[14px] leading-none w-24 rounded-r-lg">14:00-18:00</p>
        <p className="text-[13px] text-blue bg-white py-1 pl-[14px] leading-none">Métro Gratte-Ciel</p>
      </div>
      <ButtonMenu />
    </div>
  );
}
  
export default MyEvent;