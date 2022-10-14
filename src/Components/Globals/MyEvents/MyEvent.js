import { useEffect, useState } from 'react';
import Chat from '../Events/Chat/Chat';
import Event from '../Events/Event';
import * as api from '../../../api/routes';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../../App/ProtectedRoute';
import toast from 'react-hot-toast';
import KeepUpMap from '../Maps/KeepUpMap';

function MyEvent() {
  const { eventID } = useParams();
  const [event, setEvent] = useState(null);
  const [authorization, setAutorization] = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState(false);

  const isAuth = useAuth();
  const navigate = useNavigate();
  console.log(isAuth);
  useEffect(() => {
    api
      .getEventById(eventID)
      .then((response) => {
        console.log(response);
        setEvent(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    if (event) {
      console.log(event);
      const isInside = event?.participant?.find(
        (user) => user._id === isAuth.user._id
      );
      console.log(isInside);
      if (isInside || event?.admin?._id === isAuth.user._id) {
        setAutorization(true);
      } else {
        toast.error('Vous êtes pas inscrit a cet event');
      }
    }
  }, [event]);

  const handleUpdate = async () => {
    //
  };

  const handleDelete = async () => {
    console.log(deleteConfirm);
    if (deleteConfirm) {
      console.log('pass');
      await api
        .deleteEvent(eventID)
        .then((response) => {
          if (response.status === 200) {
            toast.success('Votre event a été supprimé');
            navigate('/');
          }
        })
        .catch((error) => console.log(error));

      setDeleteConfirm(false);
    } else {
      setDeleteConfirm(true);
    }
  };

  if (!authorization) {
    return (
      <div className="items-center flex flex-col">
        <p>Vous êtes pas inscrit a cet event</p>
        <button onClick={() => navigate('/')} className="bg-red">
          Retour a l'accueil
        </button>
      </div>
    );
  }

  return (
    authorization && (
      <div className="flex justify-center items-center w-full h-4/5 mt-3">
        <div className="flex flex-row h-full w-11/12 bg-white p-3 rounded-xl">
          <div className="flex flex-col w-full h-full items-center">
            <div className="w-full">
              <Event event={event} />
              <p className="text-[13px] text-white text-center py-1">
                Vous participez à cette session
              </p>

              <div className="flex gap-2 items-center">
                <p className="text-[13px] text-blue bg-white py-1 pl-[14px]">
                  {event?.participant?.length + 1} personnes participent à cette
                  session
                </p>
                <img
                  className="h-5 w-5 rounded-full"
                  src={event?.admin?.image_url}
                  alt={event?.admin?.firstname}
                />
                {event?.participant?.map((participant) => {
                  return (
                    <img
                      className="h-5 w-5 rounded-full"
                      key={participant?._id}
                      src={participant?.image_url}
                      alt={participant?.firstname}
                    />
                  );
                })}
              </div>
              <div>
                <p className="text-[15px] text-blue bg-white py-1 pl-[14px] leading-none">
                  Petit tournois 2v2 de street basket ce samedi 24 à Gratte-Ciel
                </p>
              </div>
              <div className="bg-white">
                <ul className="flex text-[13px] text-[#A5A5A5] bg-[#E9E9E9] my-1 py-1 pl-[14px] leading-none w-24 rounded-r-lg">
                  <li>
                    {new Date(event?.period?.start).getHours() +
                      ':' +
                      new Date(event?.period?.start).getMinutes()}
                  </li>
                  <span>&nbsp;-&nbsp;</span>
                  <li>
                    {new Date(event?.period?.end).getHours() +
                      ':' +
                      new Date(event?.period?.end).getMinutes()}
                  </li>
                </ul>
                <ul className="text-[13px] text-blue bg-white py-1 pl-[14px] leading-none">
                  <li>{event?.country}</li>
                  <li>{event?.city}</li>
                  <li>{event?.address}</li>
                </ul>
              </div>
            </div>
            <div className="h-full w-[95%] border-[5px] border-blue gradient-bg ">
              <KeepUpMap />
            </div>
            {event?.admin?._id === isAuth.user._id && (
              <div className="flex gap-10">
                {deleteConfirm ? (
                  <div className="flex gap-2">
                    <span>Vraiment ?</span>
                    <button onClick={handleDelete} className="text-red">
                      Oui
                    </button>
                    <button
                      onClick={() => setDeleteConfirm(false)}
                      className="text-blue"
                    >
                      Non
                    </button>
                  </div>
                ) : (
                  <span onClick={handleDelete} className="cursor-pointer">
                    annuler cette session
                  </span>
                )}
                <span onClick={handleUpdate} className="cursor-pointer">
                  modifier cette session
                </span>
              </div>
            )}
          </div>
          <div className="none:w-full md:w-5/12 h-full border-[5px] border-blue gradient-bg  none:hidden md:block">
            <Chat event_id={eventID} />
          </div>
        </div>
      </div>
    )
  );
}

export default MyEvent;
