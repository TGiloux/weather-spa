import displayMap from "./component/Map.js";
import {
  displayCityWeather,
  getCityByCoords,
} from "./component/WeatherDisplayHandler.js";
window.addEventListener("load", () => {
  displayMap();
  buttonListeners();
});

function buttonListeners() {
  const cityButton = document.getElementById("fetch-by-name");
  const cityInput = document.getElementById("city-input");
  cityButton.addEventListener("click", displayCityWeather);
  cityInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      displayCityWeather();
    }
  });

  const coordButton = document.getElementById("fetch-by-coord");
  coordButton.addEventListener("click", getCityByCoords);
}
