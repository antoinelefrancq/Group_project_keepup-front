import { Routes, Route } from 'react-router-dom';

import Home from '../Home';
import Login from '../Login';
import Signup from '../Signup';
import Header from '../Globals/Header';

const App = () => {
  return (
    <>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
