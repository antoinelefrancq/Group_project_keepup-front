/* eslint-disable react/jsx-no-comment-textnodes */
// /* eslint-disable no-undef */
// import React, { useEffect } from 'react';
// import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet';

// import 'leaflet/dist/leaflet.css';
// import 'leaflet-geosearch/dist/geosearch.css';

// import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';

// import icon from './constants';

// // Cordinates of MParis
// const center = [48.8588897, 2.320041];
// const position = [48.862725, 2.287592];
// import 'leaflet/dist/leaflet.css';
// import L from 'leaflet';

// delete L.Icon.Default.prototype._getIconUrl;

// L.Icon.Default.mergeOptions({
//   iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
//   iconUrl: require('leaflet/dist/images/marker-icon.png'), // "./astronaute.jpg"
//   shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
// });

// function LeafletgeoSearch() {
//   const map = useMap();
//   useEffect(() => {
//     const provider = new OpenStreetMapProvider();

//     const searchControl = new GeoSearchControl({
//       provider,
//     });

//     map.addControl(searchControl);

//     return () => map.removeControl(searchControl);
//   }, []);

//   return null;
// }



// class MapWrapper extends React.Component {
//   render() {
//     return (
//       <div id="mapid">
//         <MapContainer
//           center={center}
//           zoom={13}
//           scrollWheelZoom={true}
//           style={{ height: '100vh' }}
//         >
//           <TileLayer
//             url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//             attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//           />
//           <LeafletgeoSearch />
//           <Marker position={position}>
//             <Popup>
//               <div className="bg-white rounded-lg w-full p-0.5 flex items-center">
//                 <div className="bg-red rounded-l-lg flex items-center pr-[6px] h-[110px]">
//                   <div className="flex flex-col align-center justify-center w-[66px] px-2">
//                     <div className="text-white border-b-2 w-full text-center text-[15px] font-bold pb-1">
//                       <p>Mar</p><p>20</p>
//                     </div>
//                     <div className="flex flex-col justify-center items-center pt-2">
//                       <img src="./img/marche.svg" alt="profile_picture" className="w-10 h-10"/>
//                     </div>
//                   </div>
//                   <div className="text-white text-center w-[66px]">
//                     <img src="./img/photo2.svg" alt="image_profil" className="" />
//                   </div>
//                 </div>
//                 <div className="text-blue">
//                   <p className="px-1 text-[12px]">Keeper: Benoît</p>
//                   <p className="px-1 text-[12px]">Activité: course à pied<span className="bg-orange rounded-full text-white text-[11px] p-1">Intermédiaire</span></p>
//                   <p className="flex justify-start items-end gap-4 py-2 pr-3">
//                     <span className="bg-red rounded-r-full text-white text-[12px] p-1">Complet</span>
//                     <span className="bg-red rounded-full text-white text-[11px] px-2 py-0.5">16:00</span>
//                   </p>
//                 </div>
//               </div>
//             </Popup>
//           </Marker>
//         </MapContainer>
//       </div>
//     );
//   }
// }

// export default MapWrapper;

import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

import icon from './constants';
const pos = [48.862725, 2.287592];
export default function MapWrapper() {
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
    
    return position === null ? null : (
      <Marker position={position} icon={boy}>
        <Popup>
          Vous êtes la !
        </Popup>
      </Marker>
    );
  }
  return (
    <MapContainer
      center={[47.329136016336555, 2.064689802683546]}
      zoom={13}
      scrollWheelZoom
      style={{ height:'360px' }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocationMarker />
      <Marker position={pos} icon={icon}>
        <Popup>
          <div className="bg-white rounded-lg w-40 h-24 flex items-center">
            <div className="bg-red rounded-l-lg flex items-center pr-[6px] h-[110px]">
              <div className="flex flex-col align-center justify-center w-[33px] px-2">
                <div className="text-white border-b-2 text-center text-[10px] font-bold">
                  <p>Mar 20</p>
                </div>
                <div className="flex flex-col justify-center items-center pt-1">
                  <img src="./img/marche.svg" alt="profile_picture" className="w-5 h-5"/>
                </div>
              </div>
              <div className="text-white text-center w-[33px]">
                <img src="./img/photo2.svg" alt="image_profil" className="" />
              </div>
            </div>
            <div className="text-blue">
              <p className="px-1 text-[12px]">Keeper: Benoît</p>
              <p className="px-1 text-[12px]">Activité: course à pied<span className="bg-orange rounded-full text-white text-[11px] p-1">Intermédiaire</span></p>
              <p className="flex justify-start items-end gap-4 py-2 pr-3">
                <span className="bg-red rounded-r-full text-white text-[12px] p-1">Complet</span>
                <span className="bg-red rounded-full text-white text-[11px] px-2 py-0.5">16:00</span>
              </p>
            </div>
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  );
}