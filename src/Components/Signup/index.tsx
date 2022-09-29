import { useState } from 'react';
import Header from '../Globals/Header';
import InputRadio from '../Globals/Input/Radio';
import InputText from '../Globals/Input/Text';

//Typescript interface
interface sportNode{
  sportName:string,
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
  const [birthDate, setDate] = useState<Date>(new Date());
  const [gender, setGender] = useState<'male'|'female'|'non-binary'>('non-binary');
  const [city, setCity] = useState<string>('');
  const [zip, setZip] = useState<number|null>(null);
  const [disability, setDisability] = useState<boolean>(false);
  const [sports, setSports] = useState<sportArray>([{sportName:'musculation', level:'débutant'},{sportName:'badminton', level:'expert'}]);
  const [moreInformations, setInformations] = useState<string>('');

  //fonction pour add un sport
  const addSport = (sportId:string, leveId:string) =>{
    console.log('hello');
  };
  //fonction pour delete un sport
  const deleteSport = (sportId:string) => {
    setSports(sports.filter((sport)=>sport.sportName!==sportId));
  };
  //Components
  return (
    <>

      <section className="signup flex flex-col md:flex-row">
        <div className='block mx-auto my-auto flex-1 justify-self-end'>
          <h1 className='text-blueCustom signup-title '>
                  C’est parti ! Commence d’abord par te créer un compte 
          </h1>
          <form className='flex flex-col items-end'>
            <InputText value={name} name='text' placeholder='Nom complet' changeField={setName} />
            <InputText value={email} name='email' placeholder='E-mail' changeField={setMail} />
            <InputText value={password} name='password' placeholder='Mot de passe' changeField={setPassword} />
            <InputText value={phoneNumber}  name='tel' placeholder='Numéro de mobile' changeField={setPhone} />
            <p className='signup-p signup-p-birth'>
              Date de naissance
            </p>
            <InputText value={birthDate} name='date' changeField={setDate} />
            <fieldset className='flex flex-row justify-around w-full'>
              <div className='flex flex-row items-center text-sm text-blueCustom'>
                <InputText value='male' name='radio' id='male' radioState={gender} changeField={setGender}/>
                <label className='whitespace-nowrap mb-3 ml-1' htmlFor='male'>
                Homme
                </label>
              </div>
              <div className=' flex flex-row items-center text-sm text-blueCustom'>
                <InputText value='female' name='radio' id='female' radioState={gender} changeField={setGender} />
                <label className='whitespace-nowrap mb-3 ml-1' htmlFor='female'>
                Femme
                </label>
              </div>
              <div className=' flex flex-row items-center text-sm text-blueCustom'>
                <InputText value='non-binary' name='radio' id='non-binary' radioState={gender} changeField={setGender} />
                <label className='whitespace-nowrap mb-3 ml-1' htmlFor='non-binary'>
                Non Binaire
                </label>
              </div>            
            </fieldset>
            <InputText value={city} name='text' placeholder='Ville' changeField={setCity}/>
            <InputText value={zip} name='number' placeholder='Code postal' changeField={setZip}/>
            <p className='signup-p'>
              Quels sont les sports que tu pratiques ?
            </p>
            <ul>
              {sports.map((sport)=>(
                <li key={sport?.sportName} className='flex flex-row w-full justify-end mt-1'>
                  <div className='tag'><p>{sport?.sportName}</p></div>
                  <div className='tag mx-1 m'><p>{sport?.level}</p></div>
                  <button type='button' id={sport.sportName} 
                    onClick={(event)=>(deleteSport(event.currentTarget.id))}
                    className='flex border-[1.8px] justify-center items-center border-pinkCustom rounded-full w-9 h-9 leading-9 rotate-45'>
                    <img src="./img/Vector_red.svg" alt="+" />
                  </button>
                </li>))}
            </ul>
            <form className='flex flex-row w-full justify-end my-2'>
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
            <textarea className='placeholder-greyPlaceholder textInput text-sm my-1' placeholder="Commentaires..." onChange={(event)=>{setInformations(event.target.value);}}>{moreInformations}</textarea>
            <button type='submit' className='tag tag-button self-center my-8 focus:outline-none'>Tout est bon !</button> 
          </form>
        </div>
        <div className='flex block mx-auto flex-1'>
          <img src='./img/Frame_8.svg' alt="homme_en_sport"/>
        </div>       
      </section>
    </>
  );
};

export default Signup;