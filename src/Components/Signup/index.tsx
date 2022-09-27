import Header from '../Globals/Header';
import InputElement from '../Globals/Input';

const Signup:React.FC = () => {
  return (
    <>

      <section className="signup flex flex-col">
        <h1 className='text-blueCustom signup-title '>
                C’est partie ! Commence d’abord par te créer un compte 
        </h1>
        <form className='flex flex-col items-end'>
          <InputElement />
          <InputElement />
          <InputElement />
          <InputElement />
          <p className='signup-p signup-p-birth'>
            Date de naissance
          </p>
          <fieldset className='flex flex-row'>
            <InputElement />
            <InputElement />
            <InputElement />
          </fieldset>
          <fieldset className='flex flex-row'>
            <label>
              <InputElement />
            </label>
            <label>
              <InputElement />
            </label>
          </fieldset>
          <InputElement />
          <InputElement />
          <p className='signup-p'>As-tu un ou plusieurs handicap(s) ?</p>
          <fieldset className='flex flex-row'>
            <label>
              <InputElement />
            </label>
            <label>
              <InputElement />
            </label>
          </fieldset>
          <p className='signup-p'>
            Quels sont les sports que tu pratiques ?
          </p>
          <div className='flex flex-row w-full justify-end'>
            <div className='tag'><p>Musculation</p></div>
            <div className='tag mx-1 m'><p>Débutant</p></div>            
            <button type='submit' className='flex border-[1.8px] justify-center items-center border-pinkCustom rounded-full w-9 h-9 leading-9 rotate-45'>
              <img src="./img/Vector_red.svg" alt="+" />
            </button>
          </div>
          <form className='flex flex-row w-full justify-end'>
            <select className='textInput w-1/3'>
              <option value="first">first</option>
            </select>
            <select className='textInput mx-2 w-1/3'>
              <option value="first">first</option>
            </select>
            <button type='submit' className='flex border-[1.8px] justify-center items-center border-blueCustom rounded-full w-9 h-9 leading-9'>
              <img src="./img/Vector.svg" alt="+" />
            </button>
          </form>
          <p className='signup-p'>Peux-tu nous en dire plus ?</p>
          <textarea>j'ai un gros bide</textarea>
          <button type='submit'>Tout est bon !</button>
        </form>
      </section>
    </>
  );
};

export default Signup;