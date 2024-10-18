import PrevisionMeteo from "./component/PrevisionMeteo.js";
import displayMap from "./Map.js";
window.addEventListener("load", () => {
  displayMap();
  buttonListeners();
  stickyMenu();
});

function buttonListeners() {
  const cityButton = document.getElementById("fetch-by-name");
  const cityInput = document.getElementById("city-input");
  cityButton.addEventListener("click", displayWeeklyWeather);
  cityInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      displayWeeklyWeather();
    }
  });
}

function stickyMenu() {
  document.addEventListener("scroll", () => {
    const stickyDiv = document.getElementById("menu");
    const offset = 2;
    // Check if the div is at the top (sticking) with offset so it doesn't flicker
    if (window.scrollY >= stickyDiv.offsetTop - offset) {
      stickyDiv.classList.add("sticky-active");
    } else {
      stickyDiv.classList.remove("sticky-active");
    }
  });
}

async function displayWeeklyWeather() {
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
