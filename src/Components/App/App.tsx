import { Routes, Route } from 'react-router-dom';

import Home from '../Home';
import Login from '../Login';
import Signup from '../Signup';
import Header from '../Globals/Header';
import Chat from '../Globals/Events/Chat/Chat';
import Myprofil from '../Myprofil';
import Events from '../Globals/Events';
import CreateEvent from '../CreateEvent';
import { useAppSelector } from '../../redux/Hooks';
import UserModale from '../Globals/UserModale';

const App = () => {
  const {user} = useAppSelector((state)=>state);
  return (
    <>
      <Header />
      <main  className=''>
        {user.modaleIsOpen && <UserModale />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path='/event/:id/chat' element={<Chat />} />
          <Route path="/myprofil" element={<Myprofil />} />
          <Route path="/events" element={<Events />} />
          <Route path="/create-event" element={<CreateEvent />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
