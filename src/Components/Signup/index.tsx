/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react';
//import des composants input
import InputRadio from '../Globals/Input/Radio';
import InputText from '../Globals/Input/Text';
import InputNumber from '../Globals/Input/Number';
//import de la route pour post les données
import {postSignup} from '../../api/routes';
//import de fonctions inhérentes à redux et typées par typescript
import {fetchSport} from '../../redux/reducer/SportReducer';
import type { RootState, AppDispatch } from '../../redux/store';
import { useAppSelector, useAppDispatch } from '../../redux/Hooks';

//Typescript interface
interface sportNode{
  sport:string,
  level:string
}
interface postState{
  firstname:string,
  lastname:string,
  handicap:boolean,
  gender:string,
  email:string,
  password:string,
  dob:string,
  description:string,
  sports:sportNode[]|[],  
  city:string,
  zipcode:number|'',
}

// Initial State
const INITIAL_POST_STATE:postState = {
  firstname: '',
  lastname:'',
  handicap:false,  
  gender:'non-binary',
  email: '',
  password:'',
  dob:'',
  description:'',
  sports:[],
  city:'',
  zipcode:'',
};

//Function component
const Signup:React.FC = () => {
  //import de la fonction dispatch pour TS
  const dispatch= useAppDispatch();
  //State local
  const SportReducer = useAppSelector((state:RootState)=>state.SportReducer);
  const [sportSelect,setSelect] = useState<{sports:{_id:string,sport:string},level:string}>({sports:{_id:'',sport:''},level:''});
  const [formData, setFormData] = useState(INITIAL_POST_STATE);

  //UseEffect  
  useEffect(() => {
    // call api via le fichier api.routes.js
    dispatch(fetchSport());
  }, []);
  useEffect(()=>{
    setSelect(SportReducer.sportSelected);
  },[SportReducer]);

  //fonction pour add un sport
  const addSport = () =>{
    if(formData.sports.find((sport)=>sport.sport===sportSelect.sports._id)){
      console.log('ce sport est déjà ajouté à la liste');
    } else {
      setFormData({...formData,sports:[...formData.sports, {sport:sportSelect.sports._id, level:sportSelect.level}]});
    }
  };
  //fonction pour delete un sport
  const deleteSport = (sportId:string) => {
    setFormData({...formData, sports:formData.sports.filter((sport)=>sport.sport!==sportId)});
  };

  const submitData = ()=> {
    
    const date = formData.dob.split('-');
    const year = date[0];
    const month = date[1];
    const day = date[2];
    console.log(formData);
    postSignup({...formData, dob: `${day}/${month}/${year}`}).then((response) => console.log(response));
  };
 
  const handleChange = (event: any) => {
    const {target} = event;
    setSelect({...sportSelect, [target.name]:target.value });
  };

  const handleSetChange = (event:any) => {
    const {target} = event;
    const newObject = JSON.parse(event.target.value);
    setSelect({...sportSelect, sports:newObject});
  };

  const setNewData = (event:any) =>{
    setFormData({...formData,[event.target.name]:event.target.value});    
  };
  const setNumberData = (event:any) => {
    setFormData({...formData,[event.target.name]:Number(event.target.value)});
  };


  //Components
  return (
    <>
      <section className="signup flex flex-col md:flex-row">
        <div className='block mx-auto my-auto flex-1 justify-self-end'>
          <h1 className='text-blueCustom signup-title '>
                  C’est parti ! Commence d’abord par te créer un compte 
          </h1>
          <form className='flex flex-col items-end'
            onSubmit={(event)=>{
              event.preventDefault();
              submitData();
            }}>
            <InputText
              name='firstname' 
              value={formData.firstname} 
              type='text'
              placeholder='Prénom'
              changeField={setNewData}
            />
            <InputText
              name='lastname' 
              value={formData.lastname} 
              type='text'
              placeholder='Nom'
              changeField={setNewData}
            />
            <InputText
              name='email' 
              value={formData.email} 
              type='email'
              placeholder='E-mail'
              changeField={setNewData}
            />
            <InputText 
              name='password'
              value={formData.password} 
              type='password'
              placeholder='Mot de passe'
              changeField={setNewData}
            />
            <p className='signup-p signup-p-birth'>Date de naissance</p>
            <InputText
              name='dob'
              value={formData.dob} 
              type='date' 
              changeField={setNewData} 
            />
            <fieldset className='flex flex-row justify-around w-full'>
              {SportReducer.genderValue.map((genderData)=>(
                <div key={genderData} className='flex flex-row items-center text-sm text-blueCustom'>
                  <InputRadio
                    name='gender'
                    value={genderData}
                    id={genderData}
                    radioState={formData.gender}
                    changeField={setNewData}
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
              name='city'
              value={formData.city}
              type='text'
              placeholder='Ville'
              changeField={setNewData}
            />
            <InputNumber
              name='zipcode'
              value={formData.zipcode}
              placeholder='Code postal'
              changeField={setNumberData}
            />
            <p className='signup-p mb-4'>
              Quels sont les sports que tu pratiques ?
            </p>
            <ul>
              {formData.sports.map((sport)=>(
                <li
                  key={sport.sport}
                  className='flex flex-row w-full justify-end mt-1'
                >
                  <div className='tag'>
                    <p>{(SportReducer.sportlist.find((sportRed)=>sportRed._id===sport.sport))?.sport}</p>
                  </div>
                  <div className='tag mx-1 m'>
                    <p>{sport?.level}</p>
                  </div>
                  <button
                    type='button' 
                    id={sport.sport} 
                    onClick={(event)=>(deleteSport(event.currentTarget.id))}
                    className='flex border-[1.8px] justify-center items-center border-pinkCustom rounded-full w-9 h-9 leading-9 rotate-45'>
                    <img src="./img/Vector_red.svg" alt="+"/>
                  </button>
                </li>))}
            </ul>
            <div className='flex flex-row w-full justify-end my-2'>
              <select
                className='textInput w-1/2'
                name="sport"
                onChange={(event) => handleSetChange(event)}
              >
                {SportReducer.sportlist.map((sport)=>(
                  <option key={sport._id} value={JSON.stringify({_id:sport._id,sport:sport.sport})}>{sport.sport}</option>
                ))}
              </select>
              <select
                name='level'
                className='textInput mx-2 w-1/3'
                onChange={(event) => handleChange(event)}
              >
                {SportReducer.levelList.map((level)=>(
                  <option key={level} value={level}>{level}</option>
                ))}
              </select>
              <button
                onClick={()=>addSport()}
                type='button'
                className='flex border-[1.8px] justify-center items-center border-blueCustom rounded-full w-9 h-9 leading-9'>
                <img src="./img/Vector.svg" alt="+" />
              </button>
            </div>
            <p className='signup-p'>Peux-tu nous en dire plus ?</p>
            <textarea
              className='placeholder-greyPlaceholder textInput h-48 text-sm my-1' placeholder="Commentaires..."
              name='description'
              onChange={(event)=>{setNewData(event);}}
              value={formData.description} />
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