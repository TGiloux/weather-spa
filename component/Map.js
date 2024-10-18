export default function displayMap() {
  const latInput = document.getElementById("lat-input");
  const lngInput = document.getElementById("lng-input");
  const map = L.map("map").setView([47.64, 2.33], 5);
  const tiles = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);

  function onMapClick(e) {
    map.eachLayer(function (layer) {
      if (layer instanceof L.Circle) {
        map.removeLayer(layer);
      }
    });
    L.circle(e.latlng, {
      radius: 5000,
      color: "red",
      weight: 1,
    }).addTo(map);
    latInput.value = e.latlng.lat;
    lngInput.value = e.latlng.lng;
  }

  map.on("click", onMapClick);
}
