/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react';
import * as api from '../../api/routes';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { changePicture, getUserData, importLocalData } from '../../redux/reducer/userReducer';
import { addSport, deleteSport, updateLevel } from '../../redux/reducer/formSignup';
import { useAuth } from '../App/ProtectedRoute';
import Loader from '../App/Loader';


import axios from 'axios';
import { storage } from './firebase.config';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import toast from 'react-hot-toast';



// Initial State
const INITIAL_STATE = {
  firstname: '',
  lastname: '',
  gender: '',
  email: '',
  password: '',
  dob: '',
  description: '',
  sports: [],
  city: '',
  zipcode: '',
};

//Function Component
const Profil = () => {
  //
  const isAuth = useAuth();

  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isModifyingUser, setIsModifyingUser] = useState(false);
  const [isChangingAvatar, setIsChangingAvatar] = useState(false);
  const [isModifyingSports, setIsModifyingSports] = useState(false);
  const [form, setForm] = useState(INITIAL_STATE);
  const [select, setSelect] = useState({
    id: '',
    sport: '',
    level: '',
  });
  const [data, setData] = useState([]);
  const { sportList, sportToSend } = useSelector((state) => state.form);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [image,setImage] = useState();
  const { userData } = useSelector((state) => state.user);
  const {user} = useSelector((state)=> state.user);
  const {isLoading} = useSelector((state)=>state.user);
  const [url, setUrl] = useState();
  const [newImage,setNewImage] = useState();
  const [baseData, setBaseData] = useState(user);

  const [userAccount, setUserAccount] = useState(undefined);
  const [userProfile, setUserProfile] = useState({});
  const [deleteAccount, setDeleteAccount] = useState(false);
  const [error, setError] = useState(false);


  console.log(params);
  useEffect(() => {
    if(user._id === isAuth.user._id && params.userID === user._id && isAuth.user._id === params.userID){
      console.log('true');
      setUserAccount(true);
    }else{
      console.log('false');

      setUserAccount(false);
    }
  }, [user]);

  useEffect(() => {
    api.getUserById(params.userID).then((response) => {
      console.log('fetch');
      setUserProfile(response.data.user);

    }).catch((err) => {
      // eslint-disable-next-line quotes
      toast.error(`Aucun profil n'a été trouvé`);
      setError(true);
    });
  }, [params.userID]);


  useEffect(() => {
    setBaseData(user);

    const sports = [];
    const newObj = {
      ...user,
      sports
    };
    user?.sports?.forEach((item) => {
      dispatch(addSport({
        id: item.sport._id,
        level: item.level,
        sport: item.sport.sport
      }));
    });
  }, [user]);

  function dateFactorisation(dob) {
    const { date } = dob.split('_');
    [date[0], date[2]] = [date[2], date[0]];
    return date.join('/');
  }

  // const {sportList} = useSelector((state) => state.form);

  /**
   * Fetch profil data
   * Sport, Level, Gender
   */
  const { userID } = useParams();
  /**
   * Get user data by redux
   */
  useEffect(() => {
    dispatch(getUserData(userID));
  }, []);

  useEffect(() => {
    setForm(user);
  }, [user]);

  useEffect(() => {

    setBaseData((prevState) => ({...prevState, sports: sportList}));
  }, [sportList]);

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

  const handleChangeSelectLevelCard = (event) => {
    const { target } = event;
    const uniqueIdValue = target.parentElement.parentElement.parentElement.attributes['data-key'].value;
    const uniqueSportValue = target.parentElement.parentElement.parentElement.attributes['data-sport'].value;
    
    dispatch(deleteSport({id: uniqueIdValue}));
    dispatch(addSport({id: uniqueIdValue, level: target.value, sport: uniqueSportValue}));
  };

  const toggleModale = () => {
    setModalIsOpen(!modalIsOpen);
    setIsChangingAvatar(false);
  };

  const hideModale = () => {
    setModalIsOpen(false);
    setIsChangingAvatar(false);
  };

  const changeAvatar = () =>{
    setIsChangingAvatar(true);
    setModalIsOpen(false);
  };

  const buttonUserEdit = () => {
    setIsModifyingUser(true);
  };

  const buttonUserValidator = async () => {
    setIsModifyingUser(false);
    const newObj = { ...form, sports: sportToSend};
    await api.updateUser(userID, newObj).then((response) => {
      console.log(response);
    }).catch((err) => {
      console.log(err);
    });
    
    dispatch(importLocalData(newObj));
  };

  const handleChangeImage = (event) => {
    getImageUrl(event.target.files[0]);
  };

  const cancelChange = () =>{
    setNewImage(false);
    setIsChangingAvatar(false);
    setModalIsOpen(false);
  };
  /**
   *                                    Get image url from firebase
   */


  function getImageUrl(file) {
    // Create the file metadata
    /** @type {any} */
    // const metadata = {
    //   contentType: "image/jpeg",
    // };

    // Upload file and metadata to the object 'images/mountains.jpg'
    const storageRef = ref(storage, 'avatar/' + Date.now());
    const uploadTask = uploadBytesResumable(storageRef, file); // metadata

    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
        case 'paused':
          console.log('Upload is paused');
          break;
        case 'running':
          console.log('Upload is running');
          break;
        }
      },
      (error) => {
        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors
        switch (error.code) {
        case 'storage/unauthorized':
          // User doesn't have permission to access the object
          break;
        case 'storage/canceled':
          // User canceled the upload
          break;

          // ...

        case 'storage/unknown':
          // Unknown error occurred, inspect error.serverResponse
          break;
        }
      },
      () => {
        // Upload completed successfully, now we can get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log('File available at');
          setNewImage(downloadURL);
          setUrl({image_url:downloadURL});
        });
      }
    );
  }

  const updatePic = async () => {
    const response = await api.updateUser(useAuth().user._id,url);
    if (response.status===200) {
      dispatch(changePicture(url.image_url));
      toast.success('Nouvel avatar dans la base de donnée');
      cancelChange();
    } else {
      console.dir(response.error);
      toast.error(response.error.response.data.error);
    }
  };


  const handleDeleteAccount = () => {
    api.deleteUser(isAuth.user._id).then((response) => {
      

      toast.success('Votre compte a été supprimé');
      localStorage.clear();
      navigate('/');
    }).catch(() => {
      toast.error('La suppression a échoué veuillez réessayer plus tard');
    });
  };

  if(error){
    return <div className='w-full h-full flex justify-center items-center'>
      <span className=' text-7xl'>404</span>
    </div>;
  }

  // Components
  return (
    <>
      {//isLoading===true && <Loader />}
      //isLoading===false && 
        <div className="md:flex md:flex-col md:justify-center md:items-center">
          <section
            onClick={() => hideModale()}
            className="signup flex flex-col items-center pt-[9px] pb-10 px-[10%] bg-[#F2EFEB] relative mt-2 md:px-4 md:w-5/6"
          >
            <div className="relative flex flex-col items-center">
              <h1 className="text-blueCustom text-xl pb-2">Mon profil</h1>
              <div className='flex'>
                <button
                  onClick={(event) => {
                    event.stopPropagation();
                    if(userAccount){
                      toggleModale();
                    }
                  }}
                  type="button"
                  name="button"
                  className="relative md:my-4"
                >
                  {(!newImage && userAccount) && 
                  <span className="absolute flex items-center justify-center h-5 w-5 top-1 right-1 bg-blueCustom rounded-full z-10 shadow-inner shadow-white">
                    <img
                      className="absolute w-1/2 z-20"
                      src="/img/pencil.svg"
                      alt="pencil"
                    />
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blueCustom opacity-75 " />
                    <span className="relative inline-flex rounded-full h-5 w- bg-blueCustom" />
                  </span>}
                  <img
                    className="w-20 h-20 rounded-full transition-all hover:brightness-75 md:w-28 md:h-28"
                    src={userProfile?.image_url}
                    alt="modifier mes coordonnées"
                  />
                </button>
                {newImage && <div className='flex flex-row'>
                  <img src='/img/Arrow_right.svg' alt='arrow-right' className='mx-5' />
                  <div className='relative'>
                    <button
                      onClick={(event)=>{
                        event.stopPropagation();
                        updatePic();}} 
                      className="absolute flex items-center justify-center h-8 w-8 -top-2 -right-2 bg-blueCustom rounded-full z-10 text-[#fff] shadow-inner shadow-white">
                      <img
                        className="absolute w-1/2 z-20"
                        src="/img/validate.svg"
                        alt="validate"
                      />
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blueCustom opacity-75" />
                      <span className="relative inline-flex rounded-full h-8 bg-blueCustom" />
                    </button>
                    <button 
                      onClick={(event)=>{
                        event.stopPropagation();
                        cancelChange();}}
                      className="absolute flex items-center justify-center h-8 w-8 -top-2 -left-2 bg-pinkCustom rounded-full z-10 text-[#fff] shadow-inner shadow-white">
                      <img
                        className="absolute w-1/2 z-20"
                        src="/img/x-mark.svg"
                        alt="cancel"
                      />
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pinkCustom opacity-75" />
                      <span className="relative inline-flex rounded-full h-8 bg-pinkCustom" />
                    </button>
                    <img src={newImage} alt='new image' className='w-20 h-20 rounded-full'></img>
                  </div>
                </div>}
              </div>
              <div
                className={
                  modalIsOpen
                    ? 'absolute flex flex-col items-center bg-[#fff] -bottom-16 text-xs text-blueCustom rounded-lg border-blueCustom border-solid border-2 z-10'
                    : 'hidden'
                }
              >
                <button>
                  <p onClick={(event)=>{
                    event.stopPropagation();
                    changeAvatar();}} 
                  className="p-2 w-40 border-b-2 border-b-blueCustom border-b-solid hover:text-pinkCustom hover:tracking-wider transition-all">
                      Changer mon avatar
                  </p>
                </button>
                <button onClick={() => buttonUserEdit()}>
                  <p className="p-2 w-40  hover:text-pinkCustom hover:tracking-wider transition-all">
                      Éditer mon profil
                  </p>
                </button>
              </div>
              {isChangingAvatar && <div onClick={(event)=>{
                event.stopPropagation();
                changeAvatar();
              }} >
                <form>
                  <label 
                    htmlFor='avatar'
                    className='cursor-pointer p-2 bg-blue rounded-xl w-28 text-xs text-white shadow-inner shadow-white'
                  >Choisis ton avatar</label>
                  <input 
                    type='file'        
                    id="avatar" 
                    name="avatar"
                    accept="image/png, image/jpeg" 
                    className='opacity-0 -z-10 hidden'
                    onChange={handleChangeImage}
                  />
                </form>
              </div>}
            </div>
            <div className="md:flex md:flex-row md:w-full">
              <div className="flex flex-col w-full justify-center items-center md:flex-row md:justify-around md:w-1/2">
                {!isModifyingUser && (
                  <div className="w-full relative md:pt-12 md:w-5/6 md:pl-6">
                    <p className="text-center text-blueCustom pb-8 md:absolute md:top-0 md:-right-[108px] md:text-lg">
                      {userProfile?.firstname} {userProfile?.lastname}
                    </p>
                    <p className="infos rounded-sm text-blueCustom md:text-lg md:mb-4 md:py-1">
                      {userProfile?.email}
                    </p>
                    <p className="infos rounded-sm text-blueCustom md:text-lg md:mb-4 md:py-1">
                      {userProfile?.dob}
                    </p>
                    <p className="infos rounded-sm text-blueCustom md:text-lg md:mb-4 md:py-1">
                      {userProfile?.gender}
                    </p>
                    <p className="infos rounded-sm text-blueCustom h-32 md:text-lg md:mb-4 md:py-1">
                      {userProfile?.description}
                    </p>
                    <p className="infos rounded-sm text-blueCustom md:text-lg md:mb-4 md:py-1">
                      {userProfile?.city}
                    </p>
                    <p className="infos rounded-sm text-blueCustom md:text-lg md:mb-4 md:py-1">
                      {userProfile?.zipcode}
                    </p>
                  </div>
                )}
                {/** le form s'affiche uniquement si l'on a cliqué sur l'image pour modifier les informations du profil.*/}
                {isModifyingUser && (
                  <form className="text-blueCustom w-full text-right pt-2 flex flex-col items-center">
                    <input
                      onChange={handleChange}
                      value={form.firstname}
                      name="firstname"
                      type="text"
                      placeholder="Prenom"
                      className="infos rounded-sm w-60 md:w-4/5 md:text-lg"
                    />
                    <input
                      onChange={handleChange}
                      value={form.lastname}
                      name="lastname"
                      type="text"
                      placeholder="Nom"
                      className="infos rounded-sm w-60 md:w-4/5 md:text-lg"
                    />
                    <input
                      onChange={handleChange}
                      value={form.email}
                      name="email"
                      type="text"
                      placeholder="email"
                      className="infos rounded-sm w-60 md:w-4/5 md:text-lg"
                    />
                    <input
                      onChange={handleChange}
                      name="password"
                      type="password"
                      placeholder="mot de passe"
                      className="infos rounded-sm w-60 md:w-4/5 md:text-lg"
                    />
                    <input
                      onChange={handleChange}
                      value={form.dob}
                      name="dob"
                      placeholder="date"
                      type="date"
                      className="infos rounded-sm w-60 md:w-4/5 md:text-lg"
                    />
                    <input
                      onChange={handleChange}
                      value={form.gender}
                      placeholder="genre"
                      name="gender"
                      className="infos rounded-sm w-60 md:w-4/5 md:text-lg"
                    />
                    <textarea
                      onChange={handleChange}
                      value={form.description}
                      placeholder="description"
                      name="description"
                      className="infos rounded-sm w-60 md:w-4/5"
                    />
                    <input
                      onChange={handleChange}
                      value={form.city}
                      type="text"
                      name="city"
                      placeholder="ville" 
                      className="infos rounded-sm w-60 md:w-4/5 md:text-lg"
                    />
                    <input
                      onChange={handleChange}
                      value={form.zipcode}
                      type="number"
                      name="zipcode"
                      className="infos rounded-sm w-60 md:w-4/5 md:text-lg"
                      placeholder="code postal"
                    />
                  </form>
                )}
              </div>
              <div className="flex flex-col justify-center items-center pb-6 md:w-1/2 md:justify-start">
               
                {isModifyingUser && ( 
                  <div>
                    <button onClick={() => setDeleteAccount(true)} className='bg-red px-2 py-1 rounded-xl'>
                      {deleteAccount ? (
                        <>
                          <span className='text-blue'>Etes vous sûr ?</span>
                          <span className='px-2 text-white' onClick={handleDeleteAccount}>Supprimer</span>
                          <span className='text-blue' onClick={(ev) => {ev.stopPropagation(); setDeleteAccount(false);}}>Annuler</span>
                        </>
                      ) : <span>Supprimer mon compte</span>}
                    </button>
                
                  </div>)}
               
                <p className="text-center w-full pb-6 pt-6 text-blueCustom md:text-lg">
                Sport pratiqués :
                </p>
                <div className="flex flex-row p-2 border-t-2 border-[#E3E3E3] w-full"/>
                <div className="flex flex-row justify-center items-center pb-2 w-full my-2 md:w-full">
                  {isModifyingUser && (
                    <div className="flex gap-2 mr-4 md:w-full">
                      <select
                        onChange={handleChangeSelectSport}
                        className="w-2/3 text-blueCustom rounded-sm appearance-none cursor-zoom-in text-center text-[13px] pl-2 md:text-lg md:w-1/2"
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
                        className="w-2/3 text-blueCustom rounded-sm appearance-none cursor-zoom-in text-center text-[13px] pl-2 md:text-lg md:w-1/2"
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
                        className="justify-center items-center border-blueCustom rounded-full w-9 h-9"
                      >
                        <img src="/img/ep_circle-plus-filled.svg" alt="+" />
                      </button>
                    </div>
                  )}
                </div>
                <div className="flex flex-wrap justify-center">
                  {sportList.map((item, key) => {
                    return (
                      <ul key={key} data-key={item.id} data-sport={item.sport}>
                        <li className="flex flex-row mt-2 mx-2">
                          {/**
                         * Sport name
                         */}
                          <div className="tagCard md:h-36 flex flex-col">
                            {isModifyingUser ? 
                              <select
                                defaultValue={item.level} 
                                onChange={handleChangeSelectLevelCard}
                                className="bg-blueCustom w-5/6 appearance-none cursor-zoom-in border-b-2 mx-2 text-center font-bold py-2 my-2 text-[13px] grow-0"
                              >
                                {/**
                                 *                                      SELECT
                                 */}
                                {data.level?.map((level) => {
                                  return <option key={level} value={level} data-key={level}>
                                    {level}
                                  </option>;
                                })}
                              </select> :
                              <p className='py-2 border-b-2 w-full'>{item.level}</p>
                            }
                            <p className='text-center text-[12px] font-bold text-sm grow flex flex-col justify-center'>{item.sport}</p>
                          </div>
                          {isModifyingUser && (
                            <button
                              onClick={() => dispatch(deleteSport({ id: item.id }))}
                              type="button"
                              className="relative w-6 h-6"
                            >
                              <img 
                                className='absolute bottom-1 right-2'
                                src="/img/Croix_pleine_rouge.svg" 
                                alt="+"
                              />
                            </button>
                          )}
                        </li>
                      </ul>
                    );
                  })}
                </div>
              </div>
            </div>
            {isModifyingUser && (
              <button
                onClick={() => buttonUserValidator()}
                className="bg-blueCustom text-white rounded-lg p-2 md:mt-10 text-[15px]"
              >
              Appliquer les modifications
              </button>
            )}
          </section>
        </div>}
    </>
  );
};
export default Profil;

//'border-b-2 m-2 text-center text-[15px] font-bold py-2 text-sm'