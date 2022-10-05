/* eslint-disable indent */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react';
import * as api from '../../api/routes';

import { useSelector } from 'react-redux';
import {addSport, deleteSport} from '../../redux/reducer/formSignup';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';

// Initial State
const INITIAL_STATE = {
  firstname: '',
  lastname: '',
  email: '',
  password: '',
  // phone: '',
  dob: '',
  gender: '',
  city: '',
  zipcode: '',
  sports: [],
  description: '',
};

//Function component
const Signup = () => { 

  const dispatch = useDispatch();

  const [form, setForm] = useState(INITIAL_STATE);
  const [select, setSelect] = useState({
    id: '',
    sport: '',
    level: ''
  });
  const [data, setData] = useState([]);
  const {sportList, sportToSend} = useSelector((state) => state.form);
  
  /**
   *  Date factorization 
   * @param {Date} date Form date (dob)
   * @returns 
   */
  function dateFactorisation (dob){
    const date = dob.split('-');
    [date[0], date[2]] = [date[2], date[0]];
    return date.join('/');
  }


/**
 * Fetch signup data
 * Sport, Level, Gender
 */
  useEffect(() => {
    api.fetchSportsLevel().then((response) => {
      if(response.status === 200) {
        console.log(response.data);
        setData(response.data);
      }
    }).catch((error) => {
      console.log('_______________');
      console.log(error);
      console.log('_______________');
    });
  }, []);


  const handleSubmit = async (event) => {
    event.preventDefault();
    const dob = await dateFactorisation(form.dob);
    console.log(sportList);
    await api.postSignup({...form, dob, sports: sportToSend, handicap: true, zipcode: 30000 }).then((response) => {
      console.log(response);
         toast.success('Votre compte a été crée');
    }).catch((error) => {
      console.log('_______________');
      console.log(error);
      // toast.error(error.response.data);
      console.log('_______________');
    });
  };

  const handleChange = (event) => {
    const {target} = event;
    setForm((prevState) => ({...prevState, [target.name]: target.value}));
  };

  const handleChangeSelectSport = (event) => {
    const {target} = event;
    const selectedIndex = target.options.selectedIndex;
    const id = target.options[selectedIndex].getAttribute('data-key');
    
    const newObj = {
      id,
      sport: target.value,
    };
    setSelect((prevState) => ({...prevState, ...newObj}));
  };
  
  const handleChangeSelectLevel = (event) => {
    const {target} = event;
    setSelect((prevState) => ({...prevState, level: target.value}));
  };
  
  return (
    <>
      <section className="signup flex flex-col md:flex-row">
        <div className="block mx-auto my-auto flex-1 justify-self-end">
          <h1 className="text-blueCustom signup-title ">
            C’est parti ! Commence d’abord par te créer un compte
          </h1>
          <form className="flex flex-col items-end" onSubmit={handleSubmit}>
            {/**
             * Coord
             */ }

            <input onChange={handleChange} name="firstname" type="text" placeholder="Prenom"  className='textInput'/>
            <input onChange={handleChange} name="lastname" type="text" placeholder="Nom"  className='textInput'/>
            <input onChange={handleChange} name="email" type="text" placeholder="E-mail"  className='textInput'/>
            <input onChange={handleChange} name="password" type="password" placeholder="Mot de passe" className='textInput' />
            {/* <input onChange={handleChange} name="phone" type="tel" placeholder="Numéro de mobile" className='textInput' /> */}
            <p className="signup-p signup-p-birth">Date de naissance</p>
            <input onChange={handleChange} name="dob" type="date" className='textInput date' />
            <fieldset className="flex flex-row justify-around w-full">

              {/**
               * Gender
               */ }
             
             {data.gender?.map((gender, key) => (
               <div key={key} className="flex flex-row items-center text-sm text-blueCustom">
                  <label htmlFor={gender} className="whitespace-nowrap mb-3 ml-1">
                  <input onChange={handleChange} type="radio" id={gender} value={gender} name="gender" />
                    {gender}
                  </label>
                </div>
              ))}
            </fieldset>
          
            {/**
             * Location
             */ }
               
            <input onChange={handleChange} type="text" name="city" placeholder="Ville"  className='textInput'/>
            <input onChange={handleChange} type="text" name="zipcode" placeholder="Code postal"  className='textInput'/>
            
            <p className="signup-p mb-4">Quels sont les sports que tu pratiques ?</p>

           {/**
           * Sport ??
           */ }

            {sportList.map((item, key) => {
            return (
            <ul key={key}>
                <li className="flex flex-row w-full justify-end mt-1">

                  {/**
                   * Sport name
                   */}

                  <div className="tag">
                    <p>{item.sport}</p>
                  </div>

                   {/**
                   * Level name
                   */}

                  <div className="tag mx-1 m">
                    <p>{item.level}</p>
                  </div>
                  <button
                    onClick={() => dispatch(deleteSport({id: item.id}))}
                    type="button"
                    className="flex border-[1.8px] justify-center items-center border-pinkCustom rounded-full w-9 h-9 leading-9 rotate-45"
                  >
                    <img src="./img/Vector_red.svg" alt="+" />
                  </button>
                </li>
            </ul>);
            })}   
           {/**
           * Sport ??
           */ }

            <div className="flex flex-row w-full justify-end my-2">
              <select
                className="textInput w-1/2"
                name="sports"
                onChange={handleChangeSelectSport}
              >
                {data.sports?.map((sport) => {
                  return (
                  <option key={sport._id} value={sport.sport} data-key={sport._id}>
                    {sport.sport}
                  </option>
                  );
                })}
              </select>
              <select
                name="level"
                onChange={handleChangeSelectLevel}
                className="textInput mx-2 w-1/3"
              >
                {data.level?.map((level) => (
                  <option key={level} value={level}>
                    {level}
                  </option>
                ))}
              </select>
              <button
              onClick={() => dispatch(addSport(select))}
                type="button"
                className="flex border-[1.8px] justify-center items-center border-blueCustom rounded-full w-9 h-9 leading-9"
              >
                <img src="./img/Vector.svg" alt="+" />
              </button>
            </div>
            <p className="signup-p">Peux-tu nous en dire plus ?</p>
            <textarea
              className="placeholder-greyPlaceholder textInput h-48 text-sm my-1"
              placeholder="Commentaires..."
              name='description'
              onChange={handleChange}
            />
            <button
              type="submit"
              className="tag tag-button focus:outline-blueCustom self-center my-8"
            >
              Tout est bon !
            </button>
          </form>
        </div>
        <div className="flex mx-auto flex-1">
          <img src="./img/Frame_8.svg" alt="homme_en_sport" />
        </div>
      </section>
    </>
  );
};

export default Signup;
