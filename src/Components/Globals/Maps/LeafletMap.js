/* eslint-disable no-undef */
import React from 'react';
import { OpenStreetMapProvider, SearchControl } from 'leaflet-geosearch';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  CircleMarker,
} from 'react-leaflet';
// import MarkerClusterGroup from "react-leaflet-markercluster";

import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'), // "./astronaute.jpg"
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

function LeafletMap() {
  const position = [48.862725, 2.287592];
  const redOptions = { color: 'red' };
  return (
    <MapContainer
      className="h-[90vh]"
      center={position}
      zoom={10}
      maxZoom={18}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
     
      <CircleMarker
        center={[55.51, -0.12]}
        pathOptions={redOptions}
        radius={20}
      >
        <Popup>Popup in CircleMarker</Popup>
      </CircleMarker>

      <Marker position={position}>
        <Popup>
          <div className="bg-white rounded-lg w-full p-0.5 flex items-center">
            <div className="bg-red rounded-l-lg flex items-center pr-[6px] h-[110px]">
              <div className="flex flex-col align-center justify-center w-[66px] px-2">
                <div className="text-white border-b-2 w-full text-center text-[15px] font-bold pb-1">
                  <p>Mar</p><p>20</p>
                </div>
                <div className="flex flex-col justify-center items-center pt-2">
                  <img src="./img/marche.svg" alt="profile_picture" className="w-10 h-10"/>
                </div>
              </div>
              <div className="text-white text-center w-[66px]">
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
export default LeafletMap;
