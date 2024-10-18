export default class CityInfo {
  constructor(name, country, latitude, longitude, elevation, sunrise, sunset) {
    this.name = name;
    this.country = country;
    this.latitude = latitude;
    this.longitude = longitude;
    this.elevation = elevation;
    this.sunrise = sunrise;
    this.sunset = sunset;
  }

  display() {
    return `
    <div class="city-info">
      <div class="city-title">
        <h3>${this.name}, </h3>
        <p>${this.country}</p>
      </div>
      <p>Elevation: ${this.elevation}m</p>
      <div class="sun-container">
        <div class="sun"> 
        <img src="../ressources/sunrise.svg" alt="Sunrise">
          <p>${this.sunrise} </p>
        </div>
        <div class="sun"> 
        <img src="../ressources/sunset.svg" alt="Sunset">
          <p>${this.sunset} </p>
        </div>
      </div>
    </div>`;
  }
}
