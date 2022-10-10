import L from 'leaflet';

// export default L.icon({
//   iconSize: [25, 41],
//   iconAnchor: [10, 41],
//   popupAnchor: [2, -40],
//   iconUrl: 'https://unpkg.com/leaflet@1.6/dist/images/marker-icon.png',
//   shadowUrl: 'https://unpkg.com/leaflet@1.6/dist/images/marker-shadow.png'
// });
export default L.icon({
  iconUrl: '/img/RedFlag.png',
  shadowUrl: '',

  iconSize:     [50, 64], // size of the icon
  shadowSize:   [50, 64], // size of the shadow
  iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
  shadowAnchor: [4, 62],  // the same for the shadow
  popupAnchor:  [-3, -76] // point from which the po
});
