import { Routes, Route } from 'react-router-dom';

import Home from '../Home';
import Login from '../Login';
import ResetPassword from '../Login/resetPassword';
import Signup from '../Signup/index';
import Header from '../Globals/Header';
import Chat from '../Globals/Events/Chat/Chat';
import Myprofil from '../Myprofil';
import Events from '../Globals/Events';
import { Toaster } from 'react-hot-toast';
import CreateEvent from '../CreateEvent';
import { useAppSelector } from '../../redux/Hooks';
import UserModale from '../Globals/UserModale';
import Loader from './Loader';
import MyEvents from '../MyEvents';

const App = () => {
  const {user} = useAppSelector((state)=>state);
  return (
    <>
      <Header />
      <main  className='relative'>
        {user.modaleIsOpen && <UserModale />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/event/:id/chat" element={<Chat />} />
          <Route path="/profile" element={<Myprofil />} />
          <Route path="/profile/:userID/events" element={<MyEvents />} />
          <Route path="/events" element={<Events />} />
          <Route
            path="/account/password/reset/:id/:token"
            element={<ResetPassword />}
          />
          <Route path="/create-event" element={<CreateEvent />} />
          <Route path='/loader' element={<Loader />} />
        </Routes>
        <Toaster />
      </main>
    </>
  );
};

export default App;
