

const myProfil:React.FC = () => {
  return (
    <>
      <div className="anchor"></div>
      <section className="signup flex flex-col items-center pt-[9px] pb-10 px-2 md:flex-row bg-[#F2EFEB] relative">
        <button className='absolute top-3 right-4'>
          <img src="./img/bi_arrow-down-circle.svg" alt="flèche_du_bas" />
        </button>
        <div className="flex flex-col items-center" >        
          <h1 className="text-blueCustom text-xl pb-2">Mon profil</h1> 
          <button>
            <img className="w-20 h-20 rounded-full" src="./img/Nathan_2.png" alt="modifier mes coordonnées" />
          </button>
        </div>
        <img src="" alt="" />
        <div className="text-blueCustom w-full text-right pt-2 px-10">
          <p className="text-center">Nathan Bardi</p>
          <p className="infos rounded-sm">Email</p>
          <p className="infos rounded-sm">MDP</p>
          <p className="infos rounded-sm">Birthday</p>
          <p className="infos rounded-sm">genre</p>
          <p className="infos rounded-sm">J'ai un gros ventre...</p>
          <p className="infos rounded-sm">Lyon</p>
          <p className="text-center w-full pb-2">Sport pratiqués :</p>
        </div>
        <div className="p-2 border-t-2 border-[#E3E3E3] w-full">
        </div>
        <ul className="flex flex-col justify-center items-center">
          <li className="flex justify-between items-center gap-3 pb-2 w-full">
            <div className="w-[250px] flex gap-2">
              <select name="Activity" className="w-1/2 h-9 p-2 text-greyPlaceholder rounded-sm">
                <option value="Activity">Activité</option>
              </select>
              <select name="level" className="w-1/2 h-9 p-2 text-greyPlaceholder rounded-sm">
                <option value="level">Niveau</option>
              </select>
            </div>
            <div className="w-[60px] flex justify-start">
              <button
                type='button' 
                // id={} 
                // onClick={
                className=""
              >
                <img src="./img/ep_circle-plus-filled.svg" alt="+" className="w-7 h-7"/>
              </button>
            </div>
          </li>
          <li className="flex justify-between items-center gap-3 pb-2 w-full">
            <div className="w-[250px] flex gap-2">
              <select name="Activity" className="w-1/2 h-9 p-2 text-greyPlaceholder rounded-sm">
                <option value="Activity">Musculation</option>
              </select>
              <select name="level" className="w-1/2 h-9 p-2 text-greyPlaceholder rounded-sm">
                <option value="level">Amateur</option>
              </select>
            </div>
            <div className="w-[60px] flex justify-start">
              <button
                type='button' 
                // id={} 
                // onClick={
                className=""
              >
                <img src="./img/ep_circle-plus-filled.svg" alt="+" className="w-7 h-7"/>
              </button>
              <button
                type='button' 
                // id={} 
                // onClick={
                className=""
              >
                <img src="./img/Croix_pleine_rouge.svg" alt="+"  className="w-7 h-7"/>
              </button>
            </div>
          </li>
        </ul>
        <div className="flex gap-3 p-6">
          <article>
            <div className="bg-blueCustom rounded-lg flex items-center">
              <div className="flex flex-col align-center justify-center w-[77px] h-[108px]">
                <div className="text-white border-b-2 m-1 text-center text-[15px] font-bold pb-2"><p>Amateur</p></div>
                <div className="flex justify-center pt-2">
                  <img src="./img/Beginner.svg" alt="logo_beginner" />
                </div>
              </div>
            </div>
          </article>
          <article>
            <div className="bg-blueCustom rounded-lg flex items-center">
              <div className="flex flex-col align-center justify-center w-[77px] h-[108px]">
                <div className="text-white border-b-2 m-1 text-center text-[15px] font-bold pb-2"><p>Débutant</p></div>
                <div className="flex justify-center pt-2">
                  <img src="./img/drapeau.svg" alt="logo_beginner" />
                </div>
              </div>
            </div>
          </article>
          <article>
            <div className="bg-blueCustom rounded-lg flex items-center">
              <div className="flex flex-col align-center justify-center w-[77px] h-[108px]">
                <div className="text-white border-b-2 m-1 text-center text-[15px] font-bold pb-2"><p>Confirmé</p></div>
                <div className="flex justify-center pt-2">
                  <img src="./img/Beginner.svg" alt="logo_beginner" />
                </div>
              </div>
            </div>
          </article>
        </div>
        <button className="bg-blueCustom text-white rounded-lg p-2">Appliquer les modifications</button>
      </section>
    </>
  );
};

export default myProfil;