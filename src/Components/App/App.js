import { Routes, Route, Navigate } from 'react-router-dom';

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
import Team from '../Team';
import MyEvents from '../Globals/MyEvents';
import MyEvent from '../Globals/MyEvents/MyEvent';

import ProtectedRoute, { useAuth } from './ProtectedRoute';
import GuestRoute from './GuestRoute';
import ButtonMenu from '../Globals/ButtonMenu';

const App = () => {
  const { loggedIn: connected } = useAuth();
  const { user } = useAppSelector((state) => state);

  // const isAuth = useAuth();
  console.log(connected);
  return (
    <>
      <Header />
      <main className="relative">
        {/* {user.modaleIsOpen && <UserModale />} */}
        <Routes>
          <Route path="/loader" element={<Loader />} />
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route element={<GuestRoute />}>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Route>
          <Route element={<ProtectedRoute />}>
            <Route path="/event/:id/chat" element={<Chat />} />
            <Route path="/profile/:userID" element={<Myprofil />} />
            <Route
              path="/profile"
              element={<Navigate to={`/profile/${connected?.user?._id}`} />}
            />
            <Route path="/profile/:userID/events" element={<MyEvents />} />
            <Route
              path="/profile/:userID/events/:eventID"
              element={<MyEvent />}
            />
            <Route path="/events" element={<Events />} />
            <Route
              path="/account/password/reset/:id/:token"
              element={<ResetPassword />}
            />
            <Route path="/create-event" element={<CreateEvent />} />
          </Route>
        </Routes>
        <Toaster />
      </main>
    </>
  );
};

export default App;
