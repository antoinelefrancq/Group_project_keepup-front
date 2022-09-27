import { useState } from 'react';
import Header from '../Globals/Header';
import InputRadio from '../Globals/Input/Radio';
import InputText from '../Globals/Input/Text';

//Typescript interface
interface sportNode{
  sport:string,
  level:string
}
type sportArray = sportNode[];

//Function component
const Signup:React.FC = () => {
//State local
  const [name, setName] = useState<string>('');
  const [email, setMail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [phoneNumber, setPhone] = useState<number|null>(null);
  const [birthDate, setDate] = useState<Date>(new Date(11/11/1111));
  const [gender, setGender] = useState<'male'|'female'|'non-binary'>('non-binary');
  const [city, setCity] = useState<string>('');
  const [zip, setZip] = useState<number|null>(null);
  const [disability, setDisability] = useState<boolean>(false);
  const [sports, setSports] = useState<sportArray>([{sport:'', level:''}]);
  const [moreInformations, setInformations] = useState<string>('');

  //Components
  return (
    <>
      <div>Signup</div>
      <section className="signup flex flex-col">
        <h1 className='text-blueCustom signup-title '>
                C’est partie ! Commence d’abord par te créer un compte 
        </h1>
        <form className='flex flex-col items-end'>
          <InputText value={name} name='text' placeholder='Nom complet' changeField={setName} />
          <InputText value={email} name='email' placeholder='E-mail' changeField={setMail} />
          <InputText value={password} name='password' placeholder='Mot de passe' changeField={setPassword} />
          <InputText value={phoneNumber}  name='tel' placeholder='Numéro de mobile' changeField={setPhone} />
          <p className='signup-p signup-p-birth'>
            Date de naissance
          </p>
          <fieldset className='flex flex-row'>
            <InputText value={0} name='number' placeholder='jour' changeField={setDate} />
            <InputText value={0} name='number' placeholder='mois' changeField={setDate} />
            <InputText value={0} name='number' placeholder='année' changeField={setDate} />
          </fieldset>
          <fieldset className='flex flex-row'>
            <InputRadio value={'t'} name='radio' id='male' />
            <label htmlFor='male'>
              Homme
            </label>
            <InputRadio value={'f'} name='radio' id='female' />
            <label htmlFor='female'>
              femme
            </label>
            <InputRadio value={'f'} name='radio' id='non-binary' />
            <label htmlFor='non-binary'>
              non binaire
            </label>
          </fieldset>
          <InputText value={city} name='text' placeholder='Ville' changeField={setCity}/>
          <InputText value={zip} name='number' placeholder='Code postal' changeField={setZip}/>
          <p className='signup-p'>As-tu un ou plusieurs handicap(s) ?</p>
          <fieldset className='flex flex-row'>
            <InputRadio value='t' name='radio' id='yes' />
            <label htmlFor='yes'>
              oui
            </label>
            <InputRadio value='f' name='radio' id='no'/>
            <label htmlFor='no'>
              non
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