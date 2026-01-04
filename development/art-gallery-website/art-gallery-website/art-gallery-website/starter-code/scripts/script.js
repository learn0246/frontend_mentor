var map = L.map("map").setView([41.480554551221644, -71.3109037309362], 16);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

var defaultIcon = L.icon({
  iconUrl: "assets/marker.png",

  iconSize: [33, 39.9], // size of the icon
  iconAnchor: [16.5, 39.9], // point of the icon which will correspond to marker's location
});

L.marker([41.480554551221644, -71.3109037309362], { icon: defaultIcon }).addTo(
  map
);
