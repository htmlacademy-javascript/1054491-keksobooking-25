import {getDisableForm, getActiveForm} from './form.js';
import {createOffer} from './offer.js';
import {ads} from './data.js';

const START_MAP_SCALING = 12;
const address = document.querySelector('#address');

const MAIN_LOCATION = {
  lat: 35.675178,
  lng: 139.748876,
};

getDisableForm();

const mainPinIcon = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const adPinIcon = L.icon({
  iconUrl: './img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const getLocationToString = (obj, number) => {
  let {lat, lng} = obj;
  lat = Number(lat.toFixed(number));
  lng = Number(lng.toFixed(number));
  return `${lat}, ${lng}`;
};

const loadMainPin = (map) => {
  const mainPinMarker = L.marker(
    MAIN_LOCATION,
    {
      draggable: true,
      icon: mainPinIcon,
    },
  );
  mainPinMarker.addTo(map);
  address.value = getLocationToString(mainPinMarker.getLatLng(), 5);
  mainPinMarker.on('moveend', (evt) => {
    address.value = getLocationToString(evt.target.getLatLng(), 5);
  });
};

const loadSimilarPins = (map) => {
  const markerGroup = L.layerGroup().addTo(map);

  const createMarker = (ad) => {
    const marker = L.marker(
      {
        lat: ad.location.lat,
        lng: ad.location.lng,
      },
      {
        icon: adPinIcon,
      }
    );
    marker.addTo(markerGroup).bindPopup(createOffer(ad));
  };
  ads.forEach((ad) => {
    createMarker(ad);
  });
};

//Загрузка карты
const loadMap = () => {
  const map = L.map('map-canvas').on('load', () => {
    getActiveForm();
  }).setView(MAIN_LOCATION, START_MAP_SCALING);

  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(map);
  loadMainPin(map);
  loadSimilarPins(map);
};

loadMap();
