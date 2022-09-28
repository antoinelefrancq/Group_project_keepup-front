// import './style.scss'

import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="header text-4xl">
      <Link to="/"><h1 className="text-blue pt-14 pb-5 pl-6 font-pangram font-black bg-whiteCustom">Keep<span className="text-red">'Up</span></h1></Link>
    </div>
  );
}

export default Header;