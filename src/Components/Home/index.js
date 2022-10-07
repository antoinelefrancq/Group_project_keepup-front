import { Link } from 'react-router-dom';
import Footer from '../Globals/Footer';
import Events from '../Globals/Events';
import EventsExample from '../Globals/EventsExample';

function Home() {
  return (
    <div className="bg-cover bg-no-repeat bg-top bg-home_mobile w-screen h-screen relative sm:bg-home_desk">
      <section className="bg-opacity-20 bg-black text-white pb-6 mb-15 md:bg-transparent md:pt-48 lg:pl-36">
        <h3 className="text-3xl pt-7 pb-1 pl-6 pr-24 font-pangram font-bold tracking-wide lg:text-5xl"><p>Besoin de Motivation ?</p></h3>
        <div className="pl-6 pr-20 text-xl font-pangram lg:text-4xl">
          <p>Trouve-toi le partenaire sportif idéal to <span className="text-blue">Keep</span><span className="text-red">'Up</span> !</p>
        </div> 
      </section> 
      <section className="flex flex-col text-center pt-56 pb-10 vsm:pt-60">
        <Link to="/signup"><button type="button" className="focus:outline-none rounded-full py-3 px-8 text-2xl bg-gradient-to-b from-red to-blue hover:from-pink-500 hover:to-yellow-500 text-white">Lance toi</button></Link>
        <Link to="/login" className="pt-[11px] text-white hover:underline">déjà inscrit ?</Link>
      </section>
      <div className="bg-vector bg-no-repeat flex flex-col items-center justify-center pt-16 pb-10 px-5 gap-20 vsm:hidden">
        <img src='./img/Arrow.svg' alt="flèche blanche" className="animate-bounce w-5 h-20"/>
        <p className="px-auto text-2xl text-center font-pangram text-white">Rejoins ou créer une activité pour connecter avec d'autres sportifs !</p>
      </div>
      <div className="flex flex-col items-center gap-10 py-10 h-screen bg-gradient-to-b from-red to-white vsm:hidden">
        <EventsExample />
      </div>
      {/* <img src='./img/Motif.svg' alt="motif_point" className="w-screen fill-red-300 vsm:hidden"/> */}
      <Footer />
    </div>
        
  );
}

export default Home;