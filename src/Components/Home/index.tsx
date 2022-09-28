import { Link } from 'react-router-dom';
import Footer from '../Globals/Footer';
import Events from '../Globals/Events';

function Home() {
  return (
    <div className="bg-[length:1300px_650px] bg-no-repeat bg-top bg-home w-screen h-screen relative">
      <section className="bg-opacity-20 bg-black text-white pb-6 mb-15">
        <h3 className="text-3xl pt-7 pb-1 pl-6 font-pangram tracking-wide"><p>Besoin de</p><p>Motivation ?</p></h3>
        <div className="pl-6 text-xl font-pangram">
          <p>Trouve-toi le partenaire</p>
          <p>sportif idéal to <span className="text-blue">Keep</span><span className="text-red">'Up</span> !</p>
        </div> 
      </section> 
      <section className="flex flex-col text-center pt-40 pb-24">
        <Link to="/signup"><button type="button" className="rounded-full py-3 px-8 text-2xl bg-gradient-to-b from-red to-blue hover:from-pink-500 hover:to-yellow-500 text-white">Lance toi</button></Link>
        <Link to="/login" className="pt-3 text-white">déjà inscrit ?</Link>
      </section>
      <section className="flex flex-col items-center">
        <p className="pt-40 pl-6 pr-6 text-2xl font-pangram text-white absolute ">C'est super simple tu vas voir,</p>
        <svg width="19" height="30" viewBox="0 0 19 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="animate-bounce w-5 h-20 pt-8 absolute">
          <path fillRule="evenodd" clipRule="evenodd" d="M9.5 0.425293C9.77991 0.425293 10.0484 0.534049 10.2463 0.727637C10.4442 0.921225 10.5554 1.18379 10.5554 1.45756V25.8046L17.196 19.3075C17.3942 19.1137 17.663 19.0048 17.9433 19.0048C18.2235 19.0048 18.4923 19.1137 18.6905 19.3075C18.8887 19.5014 19 19.7643 19 20.0384C19 20.3125 18.8887 20.5754 18.6905 20.7692L10.2472 29.0274C10.1492 29.1235 10.0327 29.1998 9.9045 29.2518C9.77628 29.3039 9.63882 29.3307 9.5 29.3307C9.36118 29.3307 9.22372 29.3039 9.0955 29.2518C8.96728 29.1998 8.85081 29.1235 8.75277 29.0274L0.309512 20.7692C0.111335 20.5754 -6.60327e-09 20.3125 0 20.0384C6.60327e-09 19.7643 0.111335 19.5014 0.309512 19.3075C0.507689 19.1137 0.776476 19.0048 1.05674 19.0048C1.33701 19.0048 1.60579 19.1137 1.80397 19.3075L8.44459 25.8046V1.45756C8.44459 1.18379 8.55579 0.921225 8.75372 0.727637C8.95164 0.534049 9.22009 0.425293 9.5 0.425293Z" fill="white"/>
        </svg>
      </section>
      <svg width="379" height="363" viewBox="0 0 379 363" fill="none" xmlns="http://www.w3.org/2000/svg" className="max-w-screen min-w-screen">
        <path d="M202.133 49.211C89.065 -38.6012 20.266 12.6226 0 49.211V362.541H379V77.1512C367.156 104.426 315.202 137.023 202.133 49.211Z" fill="url(#paint0_linear_12_2532)"/>
        <defs>
          <linearGradient id="paint0_linear_12_2532" x1="189.5" y1="0.725342" x2="189.5" y2="362.541" gradientUnits="userSpaceOnUse">
            <stop stopColor="#0A6ABF" stopOpacity="0"/>
            <stop offset="0.0001" stopColor="#0A6ABF" stopOpacity="0.91"/>
            <stop offset="1" stopColor="#F22259"/>
          </linearGradient>
        </defs>
      </svg>
      <Events />     
      <svg width="379" height="684" viewBox="0 0 379 684" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect y="0.540771" width="379" height="722.634" fill="url(#paint0_linear_11_222)"/>
        <defs>
          <linearGradient id="paint0_linear_11_222" x1="189.5" y1="0.540771" x2="191.132" y2="1254.31" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F22259"/>
            <stop offset="1" stopColor="#0A6ABF"/>
          </linearGradient>
        </defs>
      </svg>
      <Footer />
    </div>
        
  );
}

export default Home;