import axios from 'axios';
import { useState, useEffect } from 'react';
import * as api from '../../api/routes';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useAuth } from '../App/ProtectedRoute';

//================== Fonction Composant
function CreateEvent() {
  const { register, handleSubmit } = useForm();

  const [sports, setSports] = useState([]);
  const [sport, setSport] = useState([]);
  const [levels, setLevels] = useState([]);
  const [genders, setGenders] = useState([]);

  const isAuth = useAuth();

  //================== Appel API
  useEffect(() => {
    api
      .fetchSportsLevel()
      .then((response) => {
        if (response.status === 200) {
          const result = response.data;
          setSports(result.sports);
          setLevels(result.level);
          setGenders(result.gender);
        }
      })
      .catch((error) => {
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

  const handleChangeSport = (event) => {
    const { target } = event;
    const selectedIndex = target.options.selectedIndex;
    const id = target.options[selectedIndex].getAttribute('data-key');
    const newObj = {
      id,
      sport: target.value,
    };
    setSport((prevState) => ({ ...prevState, ...newObj }));
  };

  const onSubmit = async (data) => {
    // const from = new Date(`${data.date.from.date} ${data.date.from.hour}`);
    // const to = new Date(`${data.date.to.date} ${data.date.to.hour}`);

    const newObj = {
      ...data,
      sport: sport.id,
      admin: isAuth.user._id,
      max: Number(data.max),
      gender: 'Non précisé',
      date: new Date(data.date).getTime(),
      period: { start: data.period.start, end: data.period.end },
      location: { type: 'Point', coordinates: [] },
    };
    // const newObj = {
    //   ...data,
    //   sport: sport.id,
    //   admin: isAuth.user._id,
    //   location: {
    //     type: 'Point',
    //     coordinates: [],
    //   },
    // };
    const address =
      newObj.address + '%20' + newObj.city + '%20' + newObj.zipcode;
    const url = `https://nominatim.openstreetmap.org/search?q=${address}&format=json`;

    const response = await axios.get(url);

    if (response.lenght < 0 || response.status !== 200) {
      console.log('rien trouvé');
      return;
    }

    console.log('***********');
    console.log(response.data[0]);

    console.log('***********');

    if (response.status === 200) {
      newObj.location.coordinates = [
        Number(response.data[0].lat),
        Number(response.data[0].lon),
      ];
    }
    console.log(newObj);
    await api
      .postEvent(newObj)
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
          <div className="text-blueCustom">Créer une session</div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col items-center gap-2 w-full text-right px-10"
          >
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
              onChange={handleChangeSport}
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
              {...register('level')}
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
              {...register('gender')}
              className="bg-[#ffffff] text-greyPlaceholder p-1 w-full"
            >
              <option disabled={true}>👩👨👽👾</option>
              {genders?.map((gender) => (
                <option key={gender} value={gender}>
                  {gender}
                </option>
              ))}
            </select>
            <div className="flex gap-2 w-full">
              <input
                placeholder="Date"
                {...register('date')}
                type="date"
                className="text-right px-1 text-greyPlaceholder  w-full"
              />
            </div>
            <div className="flex gap-2 w-full">
              <input
                placeholder="Date"
                {...register('period.start')}
                type="time"
                className="text-right px-1 text-greyPlaceholder  w-1/2"
              />
              <input
                type="time"
                placeholder="Début de session"
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
            <button
              type="submit"
              className="bg-blue text-white mt-16 mb-5 py-3 w-20 rounded-lg shadow-md shadow-[#808080] flex justify-center"
            >
              <img src="./img/Arrow_right.svg" alt="Arrow_right" className="" />
            </button>
          </form>
        </section>
      </div>
    </>
  );
}

export default CreateEvent;
