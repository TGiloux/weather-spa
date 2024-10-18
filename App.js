import PrevisionMeteo from "./component/PrevisionMeteo.js";

window.addEventListener("load", () => {
  const cityButton = document.getElementById("fetch-city-button");
  const cityInput = document.getElementById("city-input");
  cityButton.addEventListener("click", displayWeeklyWeather);
  cityInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      displayWeeklyWeather();
    }
  });

  document.addEventListener("scroll", () => {
    const stickyDiv = document.getElementById("menu");

    // Check if the div is at the top (sticking)
    if (window.scrollY >= stickyDiv.offsetTop - 2) {
      stickyDiv.classList.add("sticky-active");
    } else {
      stickyDiv.classList.remove("sticky-active");
    }
  });
});

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
