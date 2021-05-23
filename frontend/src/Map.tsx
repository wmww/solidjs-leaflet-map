import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { onMount } from 'solid-js'

function buildMap(div: HTMLDivElement) {
  const map = L.map(div).setView([51.505, -0.09], 13);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  L.marker([51.5, -0.09]).addTo(map)
    .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    .openPopup();
}

function Map() {
  let mapDiv: any;
  onMount(() => buildMap(mapDiv));
  return (
    <div ref={mapDiv} id='main-map' />
  );
}

export default Map;
