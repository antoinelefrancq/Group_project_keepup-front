import { Routes, Route } from 'react-router-dom';

import Home from '../Home';
import Login from '../Login';
import Signup from '../Signup';
import Header from '../Globals/Header';
import Events from '../Globals/Events';

const App = () => {
  return (
    <>
      <Header />
      <main className='p-[12px]'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/events" element={<Events />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
