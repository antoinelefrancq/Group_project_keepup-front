/* eslint-disable @typescript-eslint/no-explicit-any */
import {useState, useEffect} from 'react';

//import de la route pour post les données
import {postSignup} from '../../api/routes';

//import de fonctions inhérentes à redux et typées par typescript
import {fetchSport} from '../../redux/reducer/SportReducer';
import { useAppSelector, useAppDispatch } from '../../redux/Hooks';
import type { RootState, AppDispatch } from '../../redux/store';


//Typescript interface
interface sportNode{
  sport:string,
  level:string
}interface postState{
  firstname:string,
  lastname:string,
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
  gender:'non-binary',
  email: '',
  password:'',
  dob:'',
  description:'',
  sports:[],
  city:'',
  zipcode:'',
};


const myProfil:React.FC = () => {
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
          <button>
            <img
              className="w-20 h-20 rounded-full"
              src="./img/Nathan_2.png"
              alt="modifier mes coordonnées"
            />
          </button>
        </div>
        <form className="text-blueCustom w-full text-right pt-2 px-10 flex flex-col items-center">
          <p className="text-center">Nathan Bardi</p>
          <input
            name="email"
            placeholder="email"
            className="infos rounded-sm"
          />
          <input
            placeholder='mot de passe'
            name='mot de passe'
            className="infos rounded-sm"
          />
          <input
            placeholder='birthday'
            name='birthday'
            className="infos rounded-sm"
          />
          <input
            placeholder='sexe'
            name='sexe'
            className="infos rounded-sm"
          />
          <input
            placeholder='description'
            name='description'
            className="infos rounded-sm"
          />
          <input
            placeholder='city'
            name='city'
            className="infos rounded-sm"
          />
          <p className="text-center w-full pb-2">Sport pratiqués :</p>
        </form>
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
          <li className="flex justify-between items-center gap-3 pb-2 w-full">
            <div className="w-[250px] flex gap-2">
              <select
                name="Activity"
                className="w-1/2 h-9 p-2 text-greyPlaceholder rounded-sm"
              >
                <option value="Activity">Musculation</option>
              </select>
              <select
                name="level"
                className="w-1/2 h-9 p-2 text-greyPlaceholder rounded-sm"
              >
                <option value="level">Amateur</option>
              </select>
            </div>
            <div className="w-[60px] flex justify-start">
              <button type='button'>
                <img
                  src="./img/Bouton_check.svg"
                  alt="+"
                  className="w-7 h-7"
                />
              </button>
              <button type='button'>
                <img
                  src="./img/Croix_pleine_rouge.svg"
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
        <button className="bg-blueCustom text-white rounded-lg p-2"
        >
          Appliquer les modifications
        </button>
      </section>
    </>
  );
};

export default myProfil;