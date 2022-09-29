// import './style.scss'

import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="bg-whiteCustom header text-[36px] flex items-end justify-between">
      <Link to="/"><h1 className="text-blue pt-14 pb-5 pl-6 font-pangram font-black">Keep<span className="text-red">'Up</span></h1></Link>
      <p className="hidden vsm:flex vsm:flex-col vsm:text-blue vsm:text-[20px] sm:flex-row sm:text-[24px] pb-[20px] gap-5 pr-10"><span>Inscription</span><span>Connexion</span></p>
    </div>
  );
}

export default Header;