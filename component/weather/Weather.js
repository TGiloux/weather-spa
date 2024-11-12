export default class Weather {
  constructor(city) {
    this.city = city;
    this.initFetch.bind(this);
  }
  async initFetch() {}

  // parseCityInfo and parseDays are methods that parse the response from the API
  // they have to be implemented in the Weather subclass
  parseDays(response) {}
  parseCityInfo(response) {}

  display(response) {
    const dataDiv = document.getElementById("data");
    const weatherDiv = document.createElement("div");
    weatherDiv.className = "weekly-weather";
    this.displayCity(this.parseCityInfo(response), weatherDiv);
    this.displayDays(this.parseDays(response), weatherDiv);
    dataDiv.innerHTML = ""; //if we want only one city
    dataDiv.appendChild(weatherDiv);
  }
  displayCity(cityInfo, container) {
    container.innerHTML += cityInfo.display();
  }
  displayDays(days, container) {
    for (let day of days) {
      container.innerHTML += day.display();
    }
  }
}
