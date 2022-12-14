/* eslint-disable react/prop-types */

import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { OpenStreetMapProvider } from 'leaflet-geosearch';

import icon from './constants';
import './customStyle.css';
import * as api from '../../../api/routes';
import { useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { useAuth } from '../../App/ProtectedRoute';

const provider = new OpenStreetMapProvider();
// const results = await provider.search({  });
const pos = [48.862725, 2.287592];


const month = ['janv', 'fév', 'mars', 'avr', 'mai', 'juin', 'juil', 'août', 'sept', 'oct', 'nov', 'déc'];

const NewEvent = (props) => {

  const isAuth = useAuth();
  const navigate = useNavigate();
  const handleJoin = (id) => {
    api.joinEvent(id, isAuth.user._id).then(() => {
      toast.success('Vous avez rejoint l"event');
      // eslint-disable-next-line quotes
      navigate(`/profile/${isAuth.user._id}/events/${id}`);
    }).catch(() => {
      toast.error('Impossible de rejoindre l"event');
    });
  };

  return  (
    <Marker position={props.location.coordinates} icon={icon}>
      <Popup >
        <div className="rounded-lg w-50 h-full flex items-center">
          <div className="bg-blue rounded-l-lg flex items-center pr-[6px] h-[120px]">
            <div className="flex flex-col align-center justify-center w-[33px] px-2">
              <div className="text-white border-b-2 text-center text-[10px] font-bold">
                <p>{month[new Date(props?.date).getMonth()]}</p>
                <p>{new Date(props?.date).getDate()}</p>
              </div>
              <div className="flex flex-col justify-center items-center pt-1">
                <img src={props.sport.icon} alt="profile_picture" className="w-5 h-5" />
              </div>
            </div>
            <div className="text-white text-center w-[33px]">
              <img src={props.admin.image_url} alt="image_profil" className="" />
            </div>
          </div>
          <div className="text-blue">
            <p className="px-1 text-[12px]">Keeper: {props.admin.firstname}</p>
            <p className="px-1 text-[12px]">Activité: {props.sport.category} <span className="bg-blue rounded-full text-white text-[11px] p-1">{props.level}</span></p>
            <p className="flex justify-start items-end gap-4 py-2 pr-3">
              <span className="bg-blue rounded-r-full text-white text-[12px] p-1">
                {props?.participant?.length + 1}/{props?.max} inscrit
                {props?.participant?.length > 1 ? 's' : ''}
              </span>
              <span className="bg-blue rounded-full text-white text-[11px] px-2 py-0.5">{String(props?.period?.start).slice(0, -2) +
              ':' +
              String(props?.period?.start).slice(-2)}</span>
            </p>
          </div>
        </div>
        <button onClick={() => handleJoin(props._id)} className='w-full text-center'>Rejoindre</button>
      </Popup>
    </Marker>
  );
};
 

export default function MapWrapper() {

  const [events, setEvents] = useState([]);
  const {state} = useLocation();
  
  const { user } = useSelector((state) => state.user);
  
  useEffect(() => {
    console.log(state);
    searchEvents();
  }, [user]);

  function searchEvents() {
    if (user) {
      const filterOptions = {
        sport: null,
        level: null,
        gender: 'Non précisé',
        date: {
          from: new Date(1665525600000).getTime(),
          to: new Date(1665525600000).getTime() + 365 * 24 * 60 * 60 * 1000 * 2,
        },
        period: { start: '8:00', end: '12:00' },
        location: {
          type: 'Point',
          radius: state?.radius || 99999,
          coordinates: [user.latitude, user.longitude],
        },
      };

      api
        .getNearestEvent(filterOptions)
        .then((response) => {
          setEvents(response.data);
        })
        .catch((error) => {
          console.log(error);
          if(events.length){
            toast.error('Aucun event au alentour trouvé');
          }
        });
    }
  }




  function LocationMarker() {
    const [position, setPosition] = useState(null);
    const [bbox, setBbox] = useState([]);
    

    const map = useMap();
    const boy = L.icon({
      iconUrl: '/img/Boy.png',
      shadowUrl: '',
    
      iconSize:     [50, 64], // size of the icon
      shadowSize:   [50, 64], // size of the shadow
      iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
      shadowAnchor: [4, 62],  // the same for the shadow
      popupAnchor:  [-3, -76] // point from which the po
    });
  
    useEffect(() => {
      map.locate().on('locationfound', function (e) {
        setPosition(e.latlng);
        map.flyTo(e.latlng, map.getZoom());
        const radius = e.accuracy;
        const circle = L.circle(e.latlng, radius);
        circle.addTo(map);
        setBbox(e.bounds.toBBoxString().split(','));
      });
    }, [map]);
    
    return position && (
      <Marker position={position} icon={boy}>
        <Popup>
          Vous êtes la !
        </Popup>
      </Marker>
    );
  }


  // console.log(events);
  return (
    <><MapContainer
      center={[47.329136016336555, 2.064689802683546]}
      zoom={13}
      scrollWheelZoom
      style={{ height: '100%', zIndex:0 }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <LocationMarker />
      <Marker position={pos} icon={icon}>
        <Link to='/events'> <button className="z-[999] fixed left-0 inset-y-1/2">
          <img src="/img/Logo_menu.svg" alt="logo_menu" className="py-5 px-2 rounded-r-lg shadow-md shadow-[#808080] bg-white" />
        </button></Link>
        <Popup>
          <div className="rounded-lg w-50 h-full flex items-center">
            <div className="bg-blue rounded-l-lg flex items-center pr-[6px] h-[120px]">
              <div className="flex flex-col align-center justify-center w-[33px] px-2">
                <div className="text-white border-b-2 text-center text-[10px] font-bold">
                  <p>Mar 17</p>
                </div>
                <div className="flex flex-col justify-center items-center pt-1">
                  <img src="/img/muscu.svg" alt="profile_picture" className="w-5 h-5" />
                </div>
              </div>
              <div className="text-white text-center w-[33px]">
                <img src="/img/photo2.svg" alt="image_profil" className="" />
              </div>
            </div>
            <div className="text-blue">
              <p className="px-1 text-[12px]">Keeper: Alexis</p>
              <p className="px-1 text-[12px]">Activité: course à pied <span className="bg-blue rounded-full text-white text-[11px] p-1">expert</span></p>
              <p className="flex justify-start items-end gap-4 py-2 pr-3">
                <span className="bg-blue rounded-r-full text-white text-[12px] p-1">1/2 place disponible</span>
                <span className="bg-blue rounded-full text-white text-[11px] px-2 py-0.5">16:00</span>
              </p>
            </div>
          </div>
        </Popup>
      </Marker>


      {events.map((event, index) => {
        return (

          <NewEvent 
            key={index}
            {...event}
          />
        );
      })}

    </MapContainer>
    </>
  );
}