export { displayCityWeather, getCityByCoords, getCityByName };
import { cleanCityName } from "../../utils/Utils.js";
import PrevisionMeteo from "./PrevisionMeteo.js";

async function getCityByCoords() {
  const latInput = document.getElementById("lat-input");
  const lngInput = document.getElementById("lng-input");

  try {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/reverse?lat=${latInput.value}&lon=${lngInput.value}&format=json`
    );
    const data = await response.json();
    // closest city name is either city, village or town
    const cityName =
      data.address.city || data.address.village || data.address.town;
    const cleanedCityName = cleanCityName(cityName);
    let success = await displayCityWeather(cleanedCityName);
    if (!success) {
      // Some cities have the same name, so we add the postcode
      const CodedCityName = `${cleanedCityName}-${data.address.postcode[0]}${data.address.postcode[1]}`;
      success = await displayCityWeather(CodedCityName);
      if (!success) {
        alert(`Failed to retrieve weather information for ${cleanedCityName}.`);
        return;
      }
    }
    latInput.value = "";
    lngInput.value = "";
  } catch (err) {
    console.error(err);
  }
}

async function getCityByName() {
  const cityInput = document.getElementById("city-input");
  displayCityWeather(cityInput.value);
  cityInput.value = "";
}

async function displayCityWeather(city) {
  const weather = new PrevisionMeteo(city);
  return weather
    .initFetch()
    .then((response) => {
      if (response.errors) {
        return false;
      }
      weather.display(response);
      return true;
    })
    .catch((err) => {
      console.error(err);
      return false;
    });
}

function displayHourly(event) {
  const clickedDay = event.currentTarget;
  console.log(`Displaying hourly weather for: ${clickedDay.id}`);
}
