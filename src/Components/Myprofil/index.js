/* eslint-disable @typescript-eslint/no-explicit-any */
import {useState, useEffect} from 'react';
import * as api from '../../api/routes';

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';

// Initial State
const INITIAL_STATE = {
  firstname: '',
  lastname:'',
  gender:'',
  email: '',
  password:'',
  dob:'',
  description:'',
  sports:[],
  city:'',
  zipcode:'',
};

//Function Component
const Profil = () => {

  const dispatch= useDispatch();

  const [isModifying,setIsModifying]=useState(false);
  const [form, setForm] = useState(INITIAL_STATE);
  const [select, setSelect] = useState({
    id: '',
    sport: '',
    level:''
  });
  const [data, setData] = useState([]);
  const {sportList} = useSelector((state) => state.form);

  function dateFactorisation (dob){
    const {date} = dob.split('_');
    [date[0], date[2]] = [date[2], date[0]];
    return date.join('/');
  }

  /**
   * Fetch profil data
   * Sport, Level, Gender
   */
  useEffect(() => {
    api.fetchSportsLevel().then((response) => {
      if(response.status === 200) {
        console.log(response.data);
        setData(response.data);
      }
    }).catch((error) => {
      console.log('_____');
      console.log(error);
      console.log('_____');
    });
  }, []);



  const handleChange = (event) => {
    const {target} = event;
    setForm((prevState) => ({...prevState, [target.name]: target.value}));
  };

  const handleSetChangeSelectSport = (event) => {
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

  const buttonEdit = () => {
    setIsModifying(true);
    console.log(isModifying);
  };

  const buttonValidator = () => {
    setIsModifying(false);
    console.log(isModifying);
  };

  // Components
  return (
    <>
      <div className="anchor"></div>
      <section className="signup flex flex-col items-center pt-[9px] pb-10 px-2 md:flex-row bg-[#F2EFEB] relative">
        <button className='absolute top-3 right-4'>
          <img src="/img/bi_arrow-down-circle.svg" alt="flèche_du_bas" />
        </button>
        <div className="flex flex-col items-center" >        
          <h1 className="text-blueCustom text-xl pb-2">Mon profil</h1> 
          <button
            onClick={() => buttonEdit()}
            type='button'
            name='button'
          >
            <img
              className="w-20 h-20 rounded-full"
              src="./img/Nathan_2.png"
              alt="modifier mes coordonnées"
            />
          </button>
        </div>
        {!isModifying && <div>
          <p className="text-center">Nathan Bardi</p>
        </div>}
   
        {/** le form s'affiche uniquement si l'on a cliqué sur l'image pour modifier les informations du profil.*/}
        {isModifying && <form className="text-blueCustom w-full text-right pt-2 px-10 flex flex-col items-center">
          <input 
            onChange={handleChange}
            name="firstname"
            type="text"
            placeholder="Prenom" 
            className="infos rounded-sm"/>
          <input 
            onChange={handleChange} 
            name="lastname" 
            type="text"
            placeholder="Nom"
            className="infos rounded-sm"/>
          <input
            onChange={handleChange}
            name="email"
            type="text"
            placeholder="email"
            className="infos rounded-sm"
          />
          <input
            onChange={handleChange}
            name='mot de passe'
            type="password"
            placeholder='password'
            className="infos rounded-sm"
          />
          <input
            onChange={handleChange}
            placeholder='gender'
            name="gender"
            className="infos rounded-sm"
          />
          <textarea
            onChange={handleChange}
            placeholder='description'
            name='description'
            className="infos rounded-sm"
          />
          <input
            onChange={handleChange}
            type="text"
            name='city'
            placeholder='city'
            className="infos rounded-sm"
          />
        </form>}
        <p className="text-center w-full pb-2">Sport pratiqués :</p>
        <div className="p-2 border-t-2 border-[#E3E3E3] w-full">
        </div>
        <ul className="flex flex-col justify-center items-center">
          <li className="flex justify-between items-center gap-3 pb-2 w-full">
            <div className="w-[250px] flex gap-2">
              <select
                name="Activity"
                className="w-1/2 h-9 p-2 text-greyPlaceholder rounded-sm"
              >
                <option value="Activity">Activité</option>
              </select>
              <select
                name="level"
                className="w-1/2 h-9 p-2 text-greyPlaceholder rounded-sm"
              >
                <option value="level">Niveau</option>
              </select>
            </div>
            <div className="w-[60px] flex justify-start">
              <button type='button'>
                <img
                  src="./img/ep_circle-plus-filled.svg"
                  alt="+"
                  className="w-7 h-7"
                />
              </button>
            </div>
          </li>
        </ul>
        <div className="flex gap-3 p-6">
          <article>
            <div className="bg-blueCustom rounded-lg flex items-center">
              <div className="flex flex-col align-center justify-center w-[77px] h-[108px]">
                <div className="text-white border-b-2 m-1 text-center text-[15px] font-bold pb-2"
                >
                  <p>Amateur</p>
                </div>
                <div className="flex justify-center pt-2">
                  <img
                    src="./img/Beginner.svg"
                    alt="logo_beginner"
                  />
                </div>
              </div>
            </div>
          </article>
        </div>
        <button 
          onClick={() => buttonValidator()}
          className="bg-blueCustom text-white rounded-lg p-2"
        >
          Appliquer les modifications
        </button>
      </section>
    </>
  );
};

export default Profil;



