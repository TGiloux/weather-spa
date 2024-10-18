export default class WeatherCondition {
  constructor(date, day, condition, icon, tmin, tmax) {
    this.date = date;
    this.day = day;
    this.summary = condition;
    this.icon = icon;
    this.minTemp = tmin;
    this.maxTemp = tmax;
  }

  display() {
    return `
    <div class="weather-condition" id="${this.date}"> 
      <p>${this.day}</p>
      <img src="${this.icon}" alt="weather-icon" />
      <div class="temp">
        <p class="temp-min">${this.minTemp}°C</p>
        <p class="temp-max">${this.maxTemp}°C</p>
      </div>
    </div>`;
  }
}
