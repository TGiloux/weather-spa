export { displayCityWeather, getCityByCoords };
import PrevisionMeteo from "./weather/PrevisionMeteo.js";

async function getCityByCoords() {
  const latInput = document.getElementById("lat-input");
  const lngInput = document.getElementById("lng-input");

  try {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/reverse?lat=${latInput.value}&lon=${lngInput.value}&format=json`
    );
    const data = await response.json();
    console.log(data);
    console.log(data.address.city);
    console.log(data.address.village);
  } catch (err) {
    console.error(err);
  }
}

async function displayCityWeather() {
  const cityInput = document.getElementById("city-input");
  const weather = new PrevisionMeteo(cityInput.value);
  try {
    const data = await weather.initFetch();
    weather.display(data);

    document.querySelectorAll(".weather-condition").forEach((day) => {
      day.addEventListener("click", displayHourly);
    });
    cityInput.value = "";
  } catch (err) {
    console.error(err);
    alert("City not found!");
  }
}

function displayHourly(event) {
  const clickedDay = event.currentTarget;
  console.log(`Displaying hourly weather for: ${clickedDay.id}`);
}
