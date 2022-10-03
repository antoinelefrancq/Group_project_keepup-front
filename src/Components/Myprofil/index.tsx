import React from 'react';

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
        <form className="text-blueCustom w-full text-right pt-2 px-10 flex flex-col items-center">
          <p className="text-center">Nathan Bardi</p>
          <input
            // value="emaiaezeazl"
            name="email"
            placeholder="email"
            className="infos rounded-sm"
          />
          <input
            // value="mot de passe"
            placeholder='mot de passe'
            name='mot de passe'
            className="infos rounded-sm"
          />
          <input
            // value="birthday"
            placeholder='birthday'
            name='birthday'
            className="infos rounded-sm"
          />
          <input
            // value="sexe"
            placeholder='sexe'
            name='sexe'
            className="infos rounded-sm"
          />
          <input
            // value="description"
            placeholder='description'
            name='description'
            className="infos rounded-sm"
          />
          <input
            // value="city"
            placeholder='city'
            name='city'
            className="infos rounded-sm"/>
          <p className="text-center w-full pb-2">Sport pratiqués :</p>
        </form>
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
              >
                <img src="./img/Bouton_check.svg" alt="+" className="w-7 h-7"/>
              </button>
              <button
                type='button' 
                // id={} 
                // onClick={
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
        </div>
        <button className="bg-blueCustom text-white rounded-lg p-2">Appliquer les modifications</button>
      </section>
    </>
  );
};

export default myProfil;