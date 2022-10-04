/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react';
import InputRadio from '../Globals/Input/Radio';
import InputText from '../Globals/Input/Text';
import InputNumber from '../Globals/Input/Number';
import {fetchSignup} from '../../api/routes';
import * as constant from '../../constant';

//Typescript interface
interface sportNode{
  sportName:string,
  level:string
}

interface State{
  name:string,
  email:string,
  password:string,
  phoneNumber:string,
  birthDate:string,
  gender:string,
  city:string,
  zip:number|undefined,
  sports:sportNode[]|[],
  sportSelect:sportNode,
  moreInformations:string,
  genderValue:string[]|[],
  sportlist:[]|{_id:string, sport:string}[],
  levelList:[]|string[],
}

// Initial State
const INITIAL_STATE:State = {
  name: '',
  email: '',
  password:'',
  phoneNumber:'',
  birthDate:'',
  gender:'non-binary',
  city:'',
  zip:undefined,
  sports:[{sportName:'musculation', level:'débutant'},{sportName:'badminton', level:'expert'}],
  sportSelect:{sportName:'',level:''},
  moreInformations:'',
  genderValue:[],
  sportlist:[],
  levelList:[],
};

//Function component
const Signup:React.FC = () => {
//State local
  const [name, setName] = useState<string>('');
  const [email, setMail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [phoneNumber, setPhone] = useState<string>('');
  const [birthDate, setDate] = useState<string>('1990-01-01');
  const [gender, setGender] = useState<string>('non-binary');
  const [city, setCity] = useState<string>('');
  const [zip, setZip] = useState<number|undefined>(undefined);
  const [sports, setSports] = useState<sportNode[]>([]);
  const [sportSelect,setSelect]=useState<sportNode>({sportName:'',level:''});
  const [moreInformations, setInformations] = useState<string>('');

  const [formData, setFormData] = useState(INITIAL_STATE);
  console.log(formData);

  useEffect(() => {
    // call api via le fichier api.routes.js
    fetchSignup().then((response) => {
      setFormData({...formData,genderValue:response.data.gender, sportlist:response.data.sports, levelList:response.data.level});
      setSelect({sportName:response.data.sports[0].sport, level:response.data.level[0]});
      console.log(response);
    });
    
  }, []);

  //fonction pour add un sport
  const addSport = () =>{
    if(sports.find((sport)=>sport.sportName===sportSelect.sportName)){
      console.log('ce sport est déjà ajouté à la liste');
    } else {
      setSports([...sports, sportSelect]);
    }
  };

  //fonction pour delete un sport
  const deleteSport = (sportId:string) => {
    setSports(sports.filter((sport)=>sport.sportName!==sportId));
  };
  //Components

  const handleCLick = () => {
    // tu recupere les 2 valeurs de select 
    // tu ajoute a un state 
  };

  // const handleChange = (event) => {
  // const {target, value} = event
  //   setFormData((prevState) => {...prevState, [target.name]: target.value })
  // }

  


  const handleChange = (event: any) => {
    const {target, value} = event;
    setSelect({...sportSelect, [target.name]:target.value });
  };



  return (
    <>
      <section className="signup flex flex-col md:flex-row">
        <div className='block mx-auto my-auto flex-1 justify-self-end'>
          <h1 className='text-blueCustom signup-title '>
                  C’est parti ! Commence d’abord par te créer un compte 
          </h1>
          <form className='flex flex-col items-end'>
            <InputText 
              value={name} 
              name='text'
              placeholder='Nom complet'
              changeField={setName}
            />
            <InputText 
              value={email} 
              name='email'
              placeholder='E-mail'
              changeField={setMail}
            />
            <InputText 
              value={password} 
              name='password'
              placeholder='Mot de passe'
              changeField={setPassword}
            />
            <InputText 
              value={phoneNumber}
              name='tel'
              placeholder='Numéro de mobile'
              changeField={setPhone}
            />
            <p className='signup-p signup-p-birth'>Date de naissance</p>
            <InputText
              value={birthDate} 
              name='date' 
              changeField={setDate} 
            />
            <fieldset className='flex flex-row justify-around w-full'>
              {formData.genderValue.map((genderData)=>(
                <div
                  key={genderData}
                  className='flex flex-row items-center text-sm text-blueCustom'
                >
                  <InputRadio
                    value={genderData}
                    id={genderData}
                    radioState={gender}
                    changeField={setGender}
                  />
                  <label
                    className='whitespace-nowrap mb-3 ml-1'
                    htmlFor={genderData}
                  >
                    {genderData}
                  </label>
                </div>
              ))}            
            </fieldset>
            <InputText
              value={city}
              name='text'
              placeholder='Ville'
              changeField={setCity}
            />
            <InputNumber
              value={zip}
              placeholder='Code postal'
              changeField={setZip}
            />
            <p className='signup-p mb-4'>
              Quels sont les sports que tu pratiques ?
            </p>
            <ul>
              {sports.map((sport, index)=>(
                <li 
                  key={sport.sportName} 
                  className='flex flex-row w-full justify-end mt-1'
                >
                  <div className='tag'>
                    <p>{sport?.sportName}</p>
                  </div>
                  <div className='tag mx-1 m'>
                    <p>{sport?.level}</p>
                  </div>
                  <button
                    type='button' 
                    id={sport.sportName} 
                    onClick={(event)=>(deleteSport(event.currentTarget.id))}
                    className='flex border-[1.8px] justify-center items-center border-pinkCustom rounded-full w-9 h-9 leading-9 rotate-45'
                  >
                    <img src="./img/Vector_red.svg" alt="+"/>
                  </button>
                </li>))}
            </ul>
            <div className='flex flex-row w-full justify-end my-2'>
              <select
                className='textInput w-1/2'
                name="sportName"
                onChange={(event) => handleChange(event)}
              >
                {formData.sportlist.map((sport)=>(
                  <option 
                    key={sport._id} 
                    value={sport.sport}
                  >
                    {sport.sport}
                  </option>
                ))}
              </select>
              <select
                name='level'
                onChange={(event) => handleChange(event)}
                className='textInput mx-2 w-1/3'
              >
                {formData.levelList.map((level)=>(
                  <option
                    key={level}
                    value={level}
                  >
                    {level}
                  </option>
                ))}
              </select>
              <button
                onClick={()=>addSport()}
                type='button'
                className='flex border-[1.8px] justify-center items-center border-blueCustom rounded-full w-9 h-9 leading-9'
              >
                <img src="./img/Vector.svg" alt="+" />
              </button>
            </div>
            <p className='signup-p'>Peux-tu nous en dire plus ?</p>
            <textarea
              className='placeholder-greyPlaceholder textInput h-48 text-sm my-1' 
              placeholder="Commentaires..."
              onChange={(event)=>{setInformations(event.target.value);}}
              value={moreInformations}
            />
            <button
              type='submit'
              className='tag tag-button focus:outline-blueCustom self-center my-8'
            >
              Tout est bon !
            </button> 
          </form>
        </div>
        <div className='flex mx-auto flex-1'>
          <img src='./img/Frame_8.svg' alt="homme_en_sport"/>
        </div>       
      </section>
    </>
  );
};

export default Signup;