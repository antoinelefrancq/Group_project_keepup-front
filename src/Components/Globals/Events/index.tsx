import Event from './Event';

function Events() {
  return (
    <div className="flex flex-col gap-5 absolute -top-28">
      <Event />
      <Event />
      <Event />
    </div>
  );
}

export default Events;