import ButtonMenu from '../ButtonMenu';
import Footer from '../Footer';
import Event from './Event';

function Events() {
  return (
    <div className="flex flex-col gap-5 overflow-y-auto">

      <Event />
      <Event />
      <Event />

      <ButtonMenu />

    </div>
  );
}

export default Events;