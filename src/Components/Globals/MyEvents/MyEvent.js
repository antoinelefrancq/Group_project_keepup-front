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
  const [modify, setModify] = useState(false);

  const isAuth = useAuth();
  const navigate = useNavigate();
  console.log(isAuth);
  useEffect(() => {
    api
      .getEventById(eventID)
      .then((response) => {
        setEvent(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    if (event) {
      const isInside = event?.participant?.find(
        (user) => user._id === isAuth.user._id
      );
      if (isInside || event?.admin?._id === isAuth.user._id) {
        setAutorization(true);
      } else {
        toast.error('Vous êtes pas inscrit a cet event');
      }
    }
  }, [event]);

  const handleLeave = async (participant, admin) => {
    api
      .leaveEvent(event._id, participant)
      .then((response) => {
        console.log(response);
        if (response.status !== 200) {
          toast.error('Erreur: veuillez réessayer plus tard');
          return;
        }
        if (admin) {
          // eslint-disable-next-line quotes
          toast.success(`Le participant a été renvoyé`);
        } else {
          // eslint-disable-next-line quotes
          toast.success("Vous avez quitter l'event");
          return navigate(`/profile/${isAuth.user._id}/events`);
        }
      })
      .catch((err) => {
        toast.error('Erreur: veuillez réessayer plus tard');
      });
  };

  const handleDelete = async () => {
    console.log(deleteConfirm);
    if (deleteConfirm) {
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

  const handleModify = (ev) => {
    ev.preventDefault();
    api
      .updateEvent(event._id, { name: ev.target[0].value })
      .then(() => {
        event.name = ev.target[0].value;
        toast.success('L"event a été modifié');
        setModify(false);
      })
      .catch((err) => {
        toast.error('L"event n"a pas pu etre modifié');
      });
  };

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
                      onDoubleClick={() =>
                        event?.admin?._id === isAuth?.user?._id &&
                        handleLeave(participant?._id, true)
                      }
                      className="h-5 w-5 rounded-full"
                      key={participant?._id}
                      src={participant?.image_url}
                      alt={participant?.firstname}
                    />
                  );
                })}
              </div>
              <div>
                {!modify ? (
                  <p className="text-[15px] text-blue bg-white py-1 pl-[14px] leading-none">
                    {event?.name}
                  </p>
                ) : (
                  <form onSubmit={handleModify}>
                    <input type="text" placeholder={event?.name} />
                    <button>Modifier</button>
                  </form>
                )}
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
            <div className="h-full w-[95%] gradient-bg rounded-md mt-5">
              <KeepUpMap />
            </div>

            {event?.admin?._id === isAuth.user._id ? (
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
                  <>
                    <span onClick={handleDelete} className="cursor-pointer">
                      annuler cette session
                    </span>
                    <span
                      onClick={() => setModify(true)}
                      className="cursor-pointer"
                    >
                      {modify ? (
                        <span
                          onClick={(ev) => {
                            ev.stopPropagation();
                            setModify(false);
                          }}
                        >
                          Arreter de modifier
                        </span>
                      ) : (
                        <span>Modifier cette session</span>
                      )}
                    </span>
                  </>
                )}
                {/* <span onClick={handleUpdate} className="cursor-pointer">
                  modifier cette session
                </span> */}
              </div>
            ) : (
              <div>
                <button onClick={handleLeave}>Quitter la session</button>
              </div>
            )}
          </div>
          <div className="none:w-full md:w-5/12 h-full border-[5px] border-blue gradient-bg none:hidden md:block bg-gradient">
            <Chat event_id={eventID} />
          </div>
        </div>
      </div>
    )
  );
}

export default MyEvent;
