import Header from '../Globals/Header';
import InputElement from '../Globals/Input';

const Signup:React.FC = () => {
  return (
    <>
      <div>Signup</div>
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
          <div className='flex flex-row'>
            <p>musculation</p>
            <p>débutant</p>
            <button>delete</button>
          </div>
          <form className='flex flex-row'>
            <select>
              <option value="first">first</option>
            </select>
            <select>
              <option value="first">first</option>
            </select>
            <button type='submit' className='border border-blueCustom rounded-full w-9 h-9'>
                +
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