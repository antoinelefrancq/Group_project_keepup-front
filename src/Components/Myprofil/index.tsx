

const myProfil:React.FC = () => {
  return (
    <>
      <div className="anchor"></div>
      <section className="signup flex flex-col items-center pt-[9px] pb-10 md:flex-row bg-[#F2EFEB] relative">
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
          <p className="infos">Email</p>
          <p className="infos">MDP</p>
          <p className="infos">Numéro de tel</p>
          <p className="infos">Birthday</p>
          <p className="infos">genre</p>
          <p className="infos">J'ai un gros ventre...</p>
          <p className="infos">Lyon</p>
          <p className="text-center w-full pb-2">Sport pratiqués :</p>
        </div>
        <div className="p-6 border-t-2 border-[#E3E3E3] w-full">   
          <article>
            <p>Amateur</p>
            <img src="" alt="" />
          </article>
          <article>
            <p className="pt-2">Débutant</p>
            <img src="" alt="" />
          </article>
          <article>
            <p className="pt-2">Confirmé</p>
            <img src="" alt="" />
          </article>
        </div>
      </section>
    </>
  );
};

export default myProfil;