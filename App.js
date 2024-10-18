import displayMap from "./component/Map.js";
import {
  getCityByCoords,
  getCityByName,
} from "./component/WeatherDisplayHandler.js";
window.addEventListener("load", () => {
  displayMap();
  buttonListeners();
});

function buttonListeners() {
  const cityButton = document.getElementById("fetch-by-name");
  cityButton.addEventListener("click", getCityByName);
  const cityInput = document.getElementById("city-input");
  cityInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      getCityByName();
    }
  });

  const coordButton = document.getElementById("fetch-by-coord");
  coordButton.addEventListener("click", getCityByCoords);
}
