import ButtonMenu from '../Globals/ButtonMenu';
import Event from '../Globals/Events/Event';
import EventDone from '../Globals/Events/EventDone';

function MyEvents() {
  return (
    <div className="">
      <div className="flex flex-col gap-3 p-2 overflow-y-hidden">
        <h2 className="text-center text-xl text-white">Mes sessions</h2>
        <Event />
        <Event />
      </div>
      <div className="flex flex-col gap-3 p-2 overflow-y-auto">
        <h2 className="text-center text-xl text-white">Sessions terminées</h2>
        <EventDone />
        <EventDone />
      </div>
    </div>
  );
}

export default MyEvents;