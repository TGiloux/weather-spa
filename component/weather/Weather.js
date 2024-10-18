export default class Weather {
  constructor(city) {
    this.city = city;
    this.initFetch.bind(this);
  }
  async initFetch() {}

  parseDays(response) {}

  display(response) {
    const dataDiv = document.getElementById("data");
    const weatherDiv = document.createElement("div");
    weatherDiv.className = "weekly-weather";
    this.displayCity(this.parseCityInfo(response), weatherDiv);
    this.displayDays(this.parseDays(response), weatherDiv);
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
