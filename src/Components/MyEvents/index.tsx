import ButtonMenu from '../Globals/ButtonMenu';
import Event from '../Globals/Events/Event';

function MyEvents() {
  return (
    <div className="flex flex-col gap-3 p-2 overflow-y-auto">
      <Event />
      <Event />
      <Event />
      <ButtonMenu />
    </div>
  );
}

export default MyEvents;