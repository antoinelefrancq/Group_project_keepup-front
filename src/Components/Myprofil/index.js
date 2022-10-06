/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react';
import * as api from '../../api/routes';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { importLocalData } from '../../redux/reducer/userReducer';
import { useAuth } from '../App/ProtectedRoute';

// Initial State
const INITIAL_STATE = {
  firstname: 'Romain',
  lastname: 'Le Padre',
  gender: 'Male Alpha',
  email: 'romain@lepadre.fr',
  password: 'Apero',
  dob: '01/01/1950',
  description: 'Je ne dors pas la nuit',
  sports: [],
  city: 'Boulogne-sur-Mer',
  zipcode: '62200',
};

//Function Component
const Profil = () => {
  //
  const isAuth = useAuth();

  console.log('_____________');
  console.log(isAuth);
  console.log('_____________');

  const dispatch = useDispatch();

  const [isModifying, setIsModifying] = useState(false);
  const [form, setForm] = useState(INITIAL_STATE);
  const [select, setSelect] = useState({
    id: '',
    sport: '',
    level: '',
  });
  const [data, setData] = useState([]);
  const { sportList } = useSelector((state) => state.form);
  const { userData } = useSelector((state) => state.user);

  function dateFactorisation(dob) {
    const { date } = dob.split('_');
    [date[0], date[2]] = [date[2], date[0]];
    return date.join('/');
  }

  /**
   * Fetch profil data
   * Sport, Level, Gender
   */
  useEffect(() => {
    api
      .fetchSportsLevel()
      .then((response) => {
        if (response.status === 200) {
          setData(response.data);
        }
      })
      .catch((error) => {
        console.log('_____');
        console.log(error);
        console.log('_____');
      });
  }, []);

  useEffect(() => {
    setForm({ ...form, password: '', userData });
  }, [userData]);

  const handleChange = (event) => {
    const { target } = event;
    setForm((prevState) => ({ ...prevState, [target.name]: target.value }));
  };

  const handleSetChangeSelectSport = (event) => {
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

  const buttonEdit = () => {
    setIsModifying(true);
  };

  const buttonValidator = () => {
    setIsModifying(false);
    dispatch(importLocalData({ form }));
  };

  // Components
  return (
    <>
      <div className="anchor pb-2"></div>
      <section className="signup flex flex-col items-center pt-[9px] pb-10 px-2 md:flex-row bg-[#F2EFEB] relative">
        <button className="absolute top-3 right-4">
          <img src="/img/bi_arrow-down-circle.svg" alt="flèche_du_bas" />
        </button>
        <div className="flex flex-col items-center">
          <h1 className="text-blueCustom text-xl pb-2">Mon profil</h1>
          <button onClick={() => buttonEdit()} type="button" name="button">
            <img
              className="w-20 h-20 rounded-full"
              src="./img/Nathan_2.png"
              alt="modifier mes coordonnées"
            />
          </button>
        </div>
        {!isModifying && (
          <div>
            <p className="text-center text-blueCustom pb-8">
              {userData.firstname} {userData.lastname}
            </p>
            <p className="infos rounded-sm w-60 text-blueCustom">
              {userData.email}
            </p>
            <p className="infos rounded-sm w-60 text-blueCustom">
              {userData.dob}
            </p>
            <p className="infos rounded-sm w-60 text-blueCustom">
              {userData.gender}
            </p>
            <p className="infos rounded-sm w-60 text-blueCustom h-32">
              {userData.description}
            </p>
            <p className="infos rounded-sm w-60 text-blueCustom">
              {userData.city}
            </p>
            <p className="infos rounded-sm w-60 text-blueCustom">
              {userData.zipcode}
            </p>
          </div>
        )}

        {/** le form s'affiche uniquement si l'on a cliqué sur l'image pour modifier les informations du profil.*/}
        {isModifying && (
          <form className="text-blueCustom w-auto text-right pt-2 flex flex-col items-center">
            <input
              onChange={handleChange}
              value={form.firstname}
              name="firstname"
              type="text"
              placeholder="Prenom"
              className="infos rounded-sm"
            />
            <input
              onChange={handleChange}
              value={form.lastname}
              name="lastname"
              type="text"
              placeholder="Nom"
              className="infos rounded-sm"
            />
            <input
              onChange={handleChange}
              value={form.email}
              name="email"
              type="text"
              placeholder="email"
              className="infos rounded-sm"
            />
            <input
              onChange={handleChange}
              name="password"
              type="password"
              placeholder="mot de passe"
              className="infos rounded-sm"
            />
            <input
              onChange={handleChange}
              value={form.dob}
              name="dob"
              placeholder="date"
              type="date"
              className="infos rounded-sm"
            />
            <input
              onChange={handleChange}
              value={form.gender}
              placeholder="genre"
              name="gender"
              className="infos rounded-sm"
            />
            <textarea
              onChange={handleChange}
              value={form.description}
              placeholder="description"
              name="description"
              className="infos rounded-sm"
            />
            <input
              onChange={handleChange}
              value={form.city}
              type="text"
              name="city"
              placeholder="ville"
              className="infos rounded-sm"
            />
            <input
              onChange={handleChange}
              value={form.zipcode}
              type="number"
              name="zipcode"
              className="infos rounded-sm"
              placeholder="code postal"
            />
          </form>
        )}
        <p className="text-center w-full pb-6 pt-6 text-blueCustom">
          Sport pratiqués :
        </p>
        <div className="p-2 border-t-2 border-[#E3E3E3] w-full"></div>
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
              <button type="button">
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
                <div className="text-white border-b-2 m-1 text-center text-[15px] font-bold pb-2">
                  <p>Amateur</p>
                </div>
                <div className="flex justify-center pt-2">
                  <img src="./img/Beginner.svg" alt="logo_beginner" />
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
