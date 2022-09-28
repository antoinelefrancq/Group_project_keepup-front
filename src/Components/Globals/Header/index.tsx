// import './style.scss';

function Header() {
  return (
    <div className="header text-[36px] flex items-end justify-between">
      <h1 className="text-blue pt-14 pb-5 pl-6 font-pangram font-black">Keep<span className="text-red">'Up</span></h1>
      <p className="hidden sm:flex gap-5 text-[24px] text-blue pb-[20px] px-5"><span>Inscription</span><span>Connexion</span></p>
    </div>
  );
}

export default Header;