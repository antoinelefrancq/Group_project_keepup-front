import { Link } from 'react-router-dom';
import Footer from '../Globals/Footer';
import Events from '../Globals/Events';

function Home() {
  return (
    <div className="bg-[length:1300px_650px] sm:bg-cover bg-no-repeat bg-top bg-home w-screen h-screen -m-[12px] relative">
      <section className="bg-opacity-20 bg-black text-white pb-6 mb-15 sm:bg-transparent sm:pt-0">
        <h3 className="text-3xl pt-7 pb-1 pl-6 font-pangram tracking-wide"><p>Besoin de</p><p>Motivation ?</p></h3>
        <div className="pl-6 text-xl font-pangram">
          <p>Trouve-toi le partenaire</p>
          <p>sportif idéal to <span className="text-blue">Keep</span><span className="text-red">'Up</span> !</p>
        </div> 
      </section> 
      <section className="flex flex-col text-center pt-40 pb-24">
        <Link to="/signup"><button type="button" className="rounded-full py-3 px-8 text-2xl bg-gradient-to-b from-red to-blue hover:from-pink-500 hover:to-yellow-500 text-white">Lance toi</button></Link>
        <Link to="/login" className="pt-3 text-white hover:underline">déjà inscrit ?</Link>
      </section>
      <div className="flex align-center justify-center sm:hidden">
        <p className="pt-48 pl-6 pr-6 text-2xl font-pangram text-white absolute">C'est super simple tu vas voir,</p>
      </div>
      <div className="flex align-center justify-center sm:hidden">
        <svg width="19" height="30" viewBox="0 0 19 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="animate-bounce w-5 h-20 bottom-28 absolute">
          <path fillRule="evenodd" clipRule="evenodd" d="M9.5 0.425293C9.77991 0.425293 10.0484 0.534049 10.2463 0.727637C10.4442 0.921225 10.5554 1.18379 10.5554 1.45756V25.8046L17.196 19.3075C17.3942 19.1137 17.663 19.0048 17.9433 19.0048C18.2235 19.0048 18.4923 19.1137 18.6905 19.3075C18.8887 19.5014 19 19.7643 19 20.0384C19 20.3125 18.8887 20.5754 18.6905 20.7692L10.2472 29.0274C10.1492 29.1235 10.0327 29.1998 9.9045 29.2518C9.77628 29.3039 9.63882 29.3307 9.5 29.3307C9.36118 29.3307 9.22372 29.3039 9.0955 29.2518C8.96728 29.1998 8.85081 29.1235 8.75277 29.0274L0.309512 20.7692C0.111335 20.5754 -6.60327e-09 20.3125 0 20.0384C6.60327e-09 19.7643 0.111335 19.5014 0.309512 19.3075C0.507689 19.1137 0.776476 19.0048 1.05674 19.0048C1.33701 19.0048 1.60579 19.1137 1.80397 19.3075L8.44459 25.8046V1.45756C8.44459 1.18379 8.55579 0.921225 8.75372 0.727637C8.95164 0.534049 9.22009 0.425293 9.5 0.425293Z" fill="white"/>
        </svg>
      </div>
      <svg width="379" height="363" viewBox="0 0 379 363" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-screen sm:hidden">
        <path d="M202.133 49.211C89.065 -38.6012 20.266 12.6226 0 49.211V362.541H379V77.1512C367.156 104.426 315.202 137.023 202.133 49.211Z" fill="url(#paint0_linear_12_2532)"/>
        <defs>
          <linearGradient id="paint0_linear_12_2532" x1="189.5" y1="0.725342" x2="189.5" y2="362.541" gradientUnits="userSpaceOnUse">
            <stop stopColor="#0A6ABF" stopOpacity="0"/>
            <stop offset="0.0001" stopColor="#0A6ABF" stopOpacity="0.91"/>
            <stop offset="1" stopColor="#F22259"/>
          </linearGradient>
        </defs>
      </svg>
      <div className="relative flex flex-col items-center sm:hidden">
        <div className="flex flex-col gap-5 absolute -top-24">
          <div className="bg-white rounded-lg w-full p-0.5 h-auto flex">
            <div className="bg-blue rounded-l-lg flex items-center">
              <div className="flex flex-col align-center justify-center w-[66px]">
                <div className="text-white border-b-2 w-full text-center text-[15px] font-bold"><p>Mar</p><p>20</p></div>
                <div className="flex justify-center">
                  <svg width="30" height="50" viewBox="0 0 65 82" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M27.04 25.1901C27.04 28.6001 29.81 31.3701 33.22 31.3701C36.63 31.3701 39.4001 28.6001 39.4001 25.1901C39.4001 21.7801 36.63 19.0101 33.22 19.0101C29.81 19.0101 27.04 21.7801 27.04 25.1901Z" fill="white"/>
                    <path d="M49.1899 14.1901C47.8999 13.5601 46.3299 14.0901 45.6999 15.3901L36.4798 34.2001C35.7898 33.9201 35.0298 33.7701 34.2298 33.7701H32.1999C31.3099 33.7701 30.4798 33.9601 29.7198 34.3001L19.6199 15.3101C18.9399 14.0401 17.3699 13.5501 16.0899 14.2301C14.8199 14.9101 14.3299 16.4901 15.0099 17.7601L26.2099 38.8201C26.1499 39.1501 26.1199 39.4901 26.1199 39.8401V51.6301C26.1199 52.3501 26.2498 53.0401 26.4798 53.6901L18.2499 77.6801C17.7199 79.2101 18.5399 80.8801 20.0699 81.4101C20.3899 81.5201 20.7099 81.5701 21.0199 81.5701C22.2399 81.5701 23.3799 80.8001 23.7999 79.5901L31.3299 57.6501C31.6099 57.6901 31.8999 57.7201 32.1899 57.7201H34.2198C34.4698 57.7201 34.7099 57.7001 34.9499 57.6701L42.4698 79.5901C42.8898 80.8101 44.0299 81.5701 45.2499 81.5701C45.5699 81.5701 45.8899 81.5201 46.1999 81.4101C47.7299 80.8801 48.5499 79.2101 48.0199 77.6801L39.8598 53.8901C40.1398 53.1901 40.2999 52.4301 40.2999 51.6401V39.8501C40.2999 39.4001 40.2498 38.9701 40.1598 38.5501L50.3799 17.6901C51.0199 16.3901 50.4899 14.8301 49.1899 14.1901Z" fill="white"/>
                    <path d="M46.5218 7.09491L45.3398 10.506L53.9668 13.4951L55.1487 10.0841L46.5218 7.09491Z" fill="white"/>
                    <path d="M58.69 6.89082L54.7305 18.3135L60.437 20.2916L64.3965 8.86891L58.69 6.89082Z" fill="white"/>
                    <path d="M39.7481 0.30666L35.791 11.7305L41.4982 13.7074L45.4553 2.28356L39.7481 0.30666Z" fill="white"/>
                    <path d="M18.4336 7.11167L9.80762 10.1027L10.9903 13.5134L19.6163 10.5224L18.4336 7.11167Z" fill="white"/>
                    <path d="M6.26284 6.87468L0.555664 8.85156L4.51272 20.2754L10.2199 18.2985L6.26284 6.87468Z" fill="white"/>
                    <path d="M25.2414 0.335133L19.5342 2.31262L23.4924 13.7365L29.1996 11.759L25.2414 0.335133Z" fill="white"/>
                  </svg></div>
              </div>
              <div className="text-white text-center w-[73px]"><img src="#" alt="image_profil" /></div>
            </div>
            <div className="text-blue">
              <h3 className="px-1">Tuesday - leg day !</h3>
              <p className="px-1 text-[15px]">Keeper: Benoît</p>
              <p className="px-1 text-[13px]">Activité: musculation <span className="bg-blue rounded-full text-white text-[11px] p-1">Amateur</span></p>
              <p className="flex justify-start items-end gap-4 py-2 pr-3">
                <span className="bg-blue rounded-r-full text-white text-[13px] p-2">1/2 place disponible</span>
                <span className="bg-blue rounded-full text-white text-[11px] px-2 py-1">16:00</span>
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg w-full p-0.5 h-auto flex">
            <div className="bg-blue rounded-l-lg flex items-center">
              <div className="flex flex-col align-center justify-center w-[66px]">
                <div className="text-white border-b-2 w-full text-center text-[15px] font-bold"><p>Jeu</p><p>22</p></div>
                <div className="flex justify-center">
                  <svg width="30" height="50" viewBox="0 0 65 82" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M27.04 25.1901C27.04 28.6001 29.81 31.3701 33.22 31.3701C36.63 31.3701 39.4001 28.6001 39.4001 25.1901C39.4001 21.7801 36.63 19.0101 33.22 19.0101C29.81 19.0101 27.04 21.7801 27.04 25.1901Z" fill="white"/>
                    <path d="M49.1899 14.1901C47.8999 13.5601 46.3299 14.0901 45.6999 15.3901L36.4798 34.2001C35.7898 33.9201 35.0298 33.7701 34.2298 33.7701H32.1999C31.3099 33.7701 30.4798 33.9601 29.7198 34.3001L19.6199 15.3101C18.9399 14.0401 17.3699 13.5501 16.0899 14.2301C14.8199 14.9101 14.3299 16.4901 15.0099 17.7601L26.2099 38.8201C26.1499 39.1501 26.1199 39.4901 26.1199 39.8401V51.6301C26.1199 52.3501 26.2498 53.0401 26.4798 53.6901L18.2499 77.6801C17.7199 79.2101 18.5399 80.8801 20.0699 81.4101C20.3899 81.5201 20.7099 81.5701 21.0199 81.5701C22.2399 81.5701 23.3799 80.8001 23.7999 79.5901L31.3299 57.6501C31.6099 57.6901 31.8999 57.7201 32.1899 57.7201H34.2198C34.4698 57.7201 34.7099 57.7001 34.9499 57.6701L42.4698 79.5901C42.8898 80.8101 44.0299 81.5701 45.2499 81.5701C45.5699 81.5701 45.8899 81.5201 46.1999 81.4101C47.7299 80.8801 48.5499 79.2101 48.0199 77.6801L39.8598 53.8901C40.1398 53.1901 40.2999 52.4301 40.2999 51.6401V39.8501C40.2999 39.4001 40.2498 38.9701 40.1598 38.5501L50.3799 17.6901C51.0199 16.3901 50.4899 14.8301 49.1899 14.1901Z" fill="white"/>
                    <path d="M46.5218 7.09491L45.3398 10.506L53.9668 13.4951L55.1487 10.0841L46.5218 7.09491Z" fill="white"/>
                    <path d="M58.69 6.89082L54.7305 18.3135L60.437 20.2916L64.3965 8.86891L58.69 6.89082Z" fill="white"/>
                    <path d="M39.7481 0.30666L35.791 11.7305L41.4982 13.7074L45.4553 2.28356L39.7481 0.30666Z" fill="white"/>
                    <path d="M18.4336 7.11167L9.80762 10.1027L10.9903 13.5134L19.6163 10.5224L18.4336 7.11167Z" fill="white"/>
                    <path d="M6.26284 6.87468L0.555664 8.85156L4.51272 20.2754L10.2199 18.2985L6.26284 6.87468Z" fill="white"/>
                    <path d="M25.2414 0.335133L19.5342 2.31262L23.4924 13.7365L29.1996 11.759L25.2414 0.335133Z" fill="white"/>
                  </svg></div>
              </div>
              <div className="text-white text-center w-[73px]"><img src="#" alt="image_profil" /></div>
            </div>
            <div className="text-blue">
              <h3 className="px-1">Tuesday - leg day !</h3>
              <p className="px-1 text-[15px]">Keeper: Benoît</p>
              <p className="px-1 text-[13px]">Activité: musculation <span className="bg-blue rounded-full text-white text-[11px] p-1">Amateur</span></p>
              <p className="flex justify-start items-end gap-4 py-2 pr-3">
                <span className="bg-blue rounded-r-full text-white text-[13px] p-2">1/2 place disponible</span>
                <span className="bg-blue rounded-full text-white text-[11px] px-2 py-1">16:00</span>
              </p>
            </div>
          </div>
        </div>    
        <svg width="379" height="684" viewBox="0 0 379 684" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-screen">
          <rect y="0.540771" width="379" height="722.634" fill="url(#paint0_linear_11_222)"/>
          <defs>
            <linearGradient id="paint0_linear_11_222" x1="189.5" y1="0.540771" x2="191.132" y2="1254.31" gradientUnits="userSpaceOnUse">
              <stop stopColor="#F22259"/>
              <stop offset="1" stopColor="#0A6ABF"/>
            </linearGradient>
          </defs>
        </svg>
      </div>
      <Footer />
    </div>
        
  );
}

export default Home;