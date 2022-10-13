/* eslint-disable indent */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect, useRef } from 'react';
import * as api from '../../api/routes';

import { useSelector } from 'react-redux';
import { addSport, deleteSport } from '../../redux/reducer/formSignup';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import { errorHandler as error } from './errorHandler';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { useForm } from 'react-hook-form';
import { useAuth } from '../App/ProtectedRoute';
//Function component
const Signup = () => {
  const dispatch = useDispatch();
  const formRef = useRef();
  const [select, setSelect] = useState({
    id: '',
    sport: '',
    level: '',
  });
  const [data, setData] = useState([]);
  const { sportList, sportToSend } = useSelector((state) => state.form);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  /**
   *  Date factorization
   * @param {Date} date Form date (dob)
   * @returns
   */
  function dateFactorisation(dob) {
    const date = dob.split('-');
    [date[0], date[2]] = [date[2], date[0]];
    return date.join('/');
  }

  /**
   * Fetch signup data
   * Sport, Level, Gender
   */
  useEffect(() => {
    api
      .fetchSportsLevel()
      .then((response) => {
        if (response.status === 200) {
          console.log(response.data);
          setData(response.data);
        }
      })
      .catch((error) => {
        console.log('_______________');
        console.log(error);
        console.log('_______________');
      });
  }, []);

  async function getCoordinate({ city, zipcode }) {
    const addressComplete = city + '%20' + zipcode;

    const url = `https://nominatim.openstreetmap.org/search?q=${addressComplete}&format=json`;

    const response = await axios.get(url);

    if (response.lenght < 0 || response.status !== 200) {
      console.log('rien trouvé');
      return;
    }

    console.log('***********');
    console.log(response.data[0]);
    console.log('***********');

    if (response.status === 200) {
      return (location.coordinates = [
        Number(response.data[0].lat),
        Number(response.data[0].lon),
      ]);
    } else {
      return false;
    }
  }

  const onSubmit = async (data) => {
    const dob = await dateFactorisation(data.dob);

    const location = await getCoordinate({
      city: data.city,
      zipcode: data.zipcode,
    });
    console.log(location);
    if (!location) {
      return console.log('invalid address');
    }

    const response = await api.postSignup({
      ...data,
      dob,
      sports: sportToSend,
      handicap: true,
      zipcode: Number(data.zipcode),
      latitude: location[0],
      longitude: location[1],
    });

    if (response.status) {
      const id = useAuth().user._id;
      // navigate(`/profile/${id}`);
      toast.success('Votre compte a été crée');
    } else {
      console.dir(response.error);
      toast.error(response.error.response.data.error);
    }
  };

  const handleChangeSelectSport = (event) => {
    const { target } = event;
    const selectedIndex = target.options.selectedIndex;
    console.log(target.options.selectedIndex);
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

  useEffect(() => {
    Object.keys(formRef.current).forEach((_, index) => {
      const input = formRef.current[index];
      if (input?.localName === 'input' || input?.localName === 'textarea') {
        if (Object.keys(errors).includes(input.name)) {
          input.value = '';
        }
      }
    });
  }, [errors, handleSubmit]);

  return (
    <>
      <section className="absolute inset-x-2 top-3 signup flex flex-col md:flex-row">
        <div className="block mx-auto my-auto flex-1 justify-self-end">
          <h1 className="text-blueCustom signup-title ">
            C’est parti ! Commence d’abord par te créer un compte
          </h1>
          <form
            ref={formRef}
            className="flex flex-col items-end"
            onSubmit={handleSubmit(onSubmit)}
          >
            {/**
             * Coord
             */}
            <p></p>
            <input
              style={error.signup.firstname.style(errors)}
              {...register('firstname', {
                required: true,
                minLength: 3,
                maxLength: 30,
              })}
              placeholder={error.signup.firstname.input(errors)}
              type="text"
              className="textInput"
            />

            <input
              style={error.signup.lastname.style(errors)}
              {...register('lastname', {
                required: true,
                minLength: 3,
                maxLength: 30,
              })}
              placeholder={error.signup.lastname.input(errors)}
              type="text"
              className="textInput"
            />

            <input
              style={error.signup.email.style(errors)}
              {...register('email', {
                required: true,
                minLength: 3,
                maxLength: 100,
                pattern: {
                  value: /\S+@\S+\.\S+/,
                },
              })}
              type="text"
              placeholder={error.signup.email.input(errors)}
              className="textInput"
            />
            <input
              style={error.signup.password.style(errors)}
              {...register('password', {
                required: true,
                minLength: 8,
                maxLength: 100,
              })}
              name="password"
              type="password"
              placeholder={error.signup.password.input(errors)}
              className="textInput"
            />
            {/* <input onChange={handleChange} name="phone" type="tel" placeholder="Numéro de mobile" className='textInput' /> */}
            <input
              style={error.signup.dob.style(errors)}
              placeholder={error.signup.dob.input(errors)}
              type="date"
              className="textInput date"
              {...register('dob', {
                required: true,
              })}
            />
            <fieldset className="flex flex-row justify-around w-full">
              {/**
               * Gender
               */}

              {data.gender?.map((gender, key) => (
                <div
                  key={key}
                  className="flex flex-row items-center text-sm text-blueCustom"
                >
                  <label
                    htmlFor={gender}
                    className="whitespace-nowrap mb-3 ml-1"
                  >
                    <input
                      type="radio"
                      id={gender}
                      value={gender}
                      name="gender"
                      defaultChecked="Non précisé"
                    />
                    {gender}
                  </label>
                </div>
              ))}
            </fieldset>

            {/**
             * Location
             */}

            <input
              type="text"
              className="textInput"
              style={error.signup.city.style(errors)}
              placeholder={error.signup.city.input(errors)}
              {...register('city', {
                required: true,
                minLength: 2,
                maxLength: 250,
              })}
            />
            <input
              type="text"
              name="zipcode"
              className="textInput"
              style={error.signup.zipcode.style(errors)}
              placeholder={error.signup.zipcode.input(errors)}
              {...register('zipcode', {
                required: true,
                minLength: 5,
                maxLength: 5,
                pattern: {
                  value: /[0-9]{5}/g,
                },
              })}
            />

            <p className="signup-p mb-4">
              Quels sont les sports que tu pratiques ?
            </p>

            {/**
             * Sport ??
             */}

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
                      onClick={() => dispatch(deleteSport({ id: item.id }))}
                      type="button"
                      className="flex border-[1.8px] justify-center items-center border-pinkCustom rounded-full w-9 h-9 leading-9 rotate-45"
                    >
                      <img src="./img/Vector_red.svg" alt="+" />
                    </button>
                  </li>
                </ul>
              );
            })}
            {/**
             * Sport ??
             */}

            <div className="flex flex-row w-full justify-end my-2">
              <select
                className="textInput w-1/2"
                onChange={handleChangeSelectSport}
              >
                <option>🏈🏀⚽🏓🏐</option>
                {data.sports?.map((sport) => {
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
                className="textInput mx-2 w-1/3"
              >
                <option>🥇🥈🥉🏅🏆</option>
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
              name="description"
              style={error.signup.description.style(errors)}
              placeholder={error.signup.description.input(errors)}
              {...register('description', {
                maxLength: 250,
              })}
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
