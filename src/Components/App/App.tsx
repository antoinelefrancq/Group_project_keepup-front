import { Routes, Route } from 'react-router-dom';

import Home from '../Home';
import Login from '../Login';
import Signup from '../Signup';
import Header from '../Globals/Header';
import Myprofil from '../Myprofil';

const App = () => {
  return (
    <>
      <Header />
      <main className='p-[12px]'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/myprofil" element={<Myprofil />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
