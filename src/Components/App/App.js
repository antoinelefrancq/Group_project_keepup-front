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
import KeepUpMap from '../Globals/Maps/KeepUpMap';
import Test from './Test';
import MenuContainer from './MenuContainer';

const App = () => {
  const { user } = useAppSelector((state) => state);
  const isAuth = useAuth();
  // ButtonMenu
  return (
    <>
      <Header />
      <main className="relative">
        {user.modaleIsOpen && <UserModale />}
        <Routes>
          <Route
            path="/loader"
            element={
              <>
                <ButtonMenu />
                <Loader />
              </>
            }
          />
          <Route
            path="/"
            element={
              <>
                <Home />
                <ButtonMenu />
              </>
            }
          />
          <Route
            path="/test"
            element={
              <>
                <ButtonMenu />
                <Test />
              </>
            }
          />
          <Route
            path="/team"
            element={
              <>
                <ButtonMenu />
                <Team />
              </>
            }
          />
          <Route element={<GuestRoute />}>
            <Route
              path="/login"
              element={
                <>
                  <Login />
                  <ButtonMenu />
                </>
              }
            />
            <Route
              path="/signup"
              element={
                <>
                  <ButtonMenu />
                  <Signup />
                </>
              }
            />
          </Route>
          <Route element={<ProtectedRoute />}>
            <Route
              path="/event/:chatID/chat"
              element={
                <>
                  <Chat />
                </>
              }
            />
            <Route path="/event/:id" element={<MyEvent />} />
            <Route
              path="/profile/:userID"
              element={
                <>
                  <ButtonMenu />
                  <Myprofil />
                </>
              }
            />
            <Route
              path="/profile"
              element={
                <>
                  <Navigate to={`/profile/${isAuth?.user?._id}`} />
                  <ButtonMenu />
                </>
              }
            />
            <Route
              path="/profile/:userID/events"
              element={
                <>
                  <ButtonMenu />
                  <MyEvents />
                </>
              }
            />
            <Route
              path="/profile/:userID/events/:eventID"
              element={
                <>
                  <MyEvent />
                  <ButtonMenu isActiv={true} />
                </>
              }
            />
            <Route
              path="/events"
              element={
                <>
                  <ButtonMenu />
                  <Events />
                </>
              }
            />
            <Route
              path="/events/maps"
              element={
                <>
                  <KeepUpMap /> <ButtonMenu />
                </>
              }
            />
            <Route
              path="/account/password/reset/:id/:token"
              element={
                <>
                  <ButtonMenu />
                  <ResetPassword />
                </>
              }
            />
            <Route
              path="/create-event"
              element={
                <>
                  <ButtonMenu />
                  <CreateEvent />
                </>
              }
            />
          </Route>
        </Routes>
        <Toaster />
      </main>
    </>
  );
};

export default App;
