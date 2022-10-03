import { Routes, Route } from 'react-router-dom';

import Home from '../Home';
import Login from '../Login';
import Signup from '../Signup';
import Header from '../Globals/Header';
import Chat from '../Globals/Events/Chat/Chat';
import Myprofil from '../Myprofil';
import Events from '../Globals/Events';

const App = () => {
  return (
    <>
      <Header />
      <main className=''>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path='/event/:id/chat' element={<Chat />} />
          <Route path="/myprofil" element={<Myprofil />} />
          <Route path="/events" element={<Events />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
