import axios from 'axios';
import { useState,useEffect } from 'react';
import * as api from '../../api/routes';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

//================== Fonction Composant
function CreateEvent() {

  //================== State local
  const [select, setSelect] = useState({
    id: '',
    sport: '',
    level: '',
    gender: '',
  });
  const {
    register,
    handleSubmit,
  } = useForm();

  const [sports, setSports] = useState([]);
  const [levels, setLevels] = useState([]);
  const [genders, setGenders] = useState([]);

  //================== Appel API
  useEffect(() => {
    api.fetchSportsLevel().then((response) => {
      if(response.status === 200) {
        const result = response.data;
        setSports(result.sports);
        setLevels(result.level);
        setGenders(result.gender);
      }
    }).catch((error) => {
      console.log('_______________');
      console.log(error);
      console.log('_______________');
    });
  }, []);
  

  //================== Functions de modifications 
  
  /**
   *  Date factorization
   * @param {Date} date Form date (dob)
   * @returns
   */
  // function dateFactorisation(dateChosen) {
  //   const date = new Date(dateChosen);
  //   const timestampSeconds = Math.floor(date.getTime() / 1000);
  //   return String(timestampSeconds);
  // }
  
  const handleChangeSelectSport = (event) => {
    const { target } = event;
    const selectedIndex = target.options.selectedIndex;
    const id = target.options[selectedIndex].getAttribute('data-key');
    const newObj = {
      id,
      sport: target.value,
    };
    setSelect((prevState) => ({ ...prevState, ...newObj }));
  };

  const handleChangeSelectLevel = (event) => {
    const { target } = event;
    setSelect((prevState) => ({ ...prevState, level: target.value }));
  };

  const handleChangeSelectGender = (event) => {
    const { target } = event;
    setSelect((prevState) => ({ ...prevState, gender: target.value }));
  };

  const onSubmit = async (data) => {
    // const dateChosen = dateFactorisation(data.date);
    const dateChosen = data.date;

    await api
      .postEvent({
        ...data,
        date: dateChosen,
        sport: select.id,
        level: select.level,
        gender: select.gender,
        max: Number(data.max),
        zipcode: Number(data.zipcode),
        admin: '6331760ae98d6c76841f590e',
        country:'France',
        location:{
          type:'Point',
          'coordinates' : [45.763217322939916, 4.835893475715351]
        }
      })
      .then((response) => {
        console.log(response);
        toast.success('Votre évenement a été créé');
      })
      .catch((error) => {
        console.dir(error);
        toast.error(error.response.data.error);
      });
  };
  
  //================== Components
  return (
    <>
      <div className="h-full flex flex-col justify-end items-center">
        <section className="session flex flex-col gap-5 justify-center items-center bg-[#F2EFEB] md:w-1/2">
          <div className="text-blueCustom">
            Créer une session
          </div>
          <form 
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col items-center gap-2 w-full text-right px-10">
            <input
              placeholder="Titre"
              {...register('name')}
              className="text-right px-1 w-full"
            />
            <textarea
              placeholder="Description"
              {...register('description')}
              className="text-right w-full px-1"
            />
            <select
              className="bg-[#ffffff] text-greyPlaceholder p-1 w-full"
              onChange={handleChangeSelectSport}
            >
              <option disabled={true}>🏈🏀⚽🏓🏐</option>
              {sports?.map((sport) => {
                return (
                  <option
                    key={sport._id}
                    value={sport.sport}
                    data-key={sport._id}
            
                  >
                    {sport.sport}
                  </option>
                );
              })}
            </select>
            <select
              onChange={handleChangeSelectLevel}
              className="bg-[#ffffff] text-greyPlaceholder p-1 w-full"
            >
              <option disabled={true}>🥇🥈🥉🏅🏆</option>
              {levels?.map((level) => (
                <option key={level} value={level}>
                  {level}
                </option>
              ))}
            </select>
            <select
              onChange={handleChangeSelectGender}
              className="bg-[#ffffff] text-greyPlaceholder p-1 w-full"
            >
              <option disabled={true}>👩👨👽👾</option>
              {genders?.map((gender) => (
                <option key={gender} value={gender} >
                  {gender}
                </option>
              ))}
            </select>
            <input
              placeholder="Date"
              {...register('date')}
              type="date"
              className="text-right px-1 text-greyPlaceholder  w-full"
            />
            <div className="flex gap-2 w-full">
              <input
                placeholder="Début de session"
                {...register('period.start')}
                className="text-right w-1/2 px-1"
              />
              <input
                placeholder="Fin de session"
                {...register('period.end')}
                className="text-right w-1/2 px-1"
              />
            </div>
            <input
              placeholder="Nombre de participants maximum"
              {...register('max')}
              type="text"
              className="text-right px-1 w-full"
            />
            <input
              placeholder="adresse"
              {...register('address')}
              type="text"
              className="text-right px-1 w-full"
            />
            <input
              placeholder="Ville"
              {...register('city')}
              type="text"
              className="text-right px-1 w-full"
            />
            <input
              placeholder="Code postal"
              {...register('zipcode')}
              type="text"
              className="text-right px-1 w-full"
            />
            <button type="submit" className="bg-blue text-white mt-16 mb-5 py-3 w-20 rounded-lg shadow-md shadow-[#808080] flex justify-center">
              <img src="./img/Arrow_right.svg" alt="Arrow_right" className="" />
            </button>
          </form>
        </section>
      </div>
    </>
  );
}
  
export default CreateEvent;