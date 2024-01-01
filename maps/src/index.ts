import { Company } from './Company';
import { User } from './User';

const user = new User();
const company = new Company();
console.log(user);
console.log(company);
const myMap = new google.maps.Map(
  document.getElementById('map') as HTMLElement,
  {
    zoom: 2,
    center: {
      lat: 0,
      lng: 0,
    },
  }
);
const markUser = new google.maps.Marker({
  position: {
    lat: user.location.lat,
    lng: user.location.lng,
  },
  map: myMap,
  title: user.name,
});

const svgMarker = {
  path: 'M-1.547 12l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM0 0q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z',
  fillColor: 'blue',
  fillOpacity: 0.6,
  strokeWeight: 0,
  rotation: 0,
  scale: 2,
  anchor: new google.maps.Point(0, 20),
};

const markCompany = new google.maps.Marker({
  position: {
    lat: company.location.lat,
    lng: company.location.lng,
  },
  map: myMap,
  icon: svgMarker,
  title: company.companyName,
});
