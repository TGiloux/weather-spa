import Weather from "./Weather.js";
import WeatherCondition from "./WeatherCondition.js";
import CityInfo from "./CityInfo.js";

//Using the API from prevision-meteo.ch
export default class PrevisionMeteo extends Weather {
  constructor(city) {
    super(city);
  }
  async initFetch() {
    try {
      const response = await fetch(
        `https://www.prevision-meteo.ch/services/json/${this.city}`
      );
      return response.json();
    } catch (err) {
      console.error(err);
    }
  }

  parseDays(response) {
    const days = [];
    for (let i = 0; i <= 4; i++) {
      const dayData = response[`fcst_day_${i}`];
      days.push(
        new WeatherCondition(
          dayData.date,
          dayData.day_long,
          dayData.condition,
          dayData.icon_big,
          dayData.tmin,
          dayData.tmax
        )
      );
    }
    return days;
  }
  parseCityInfo(response) {
    const cityData = response.city_info;
    return new CityInfo(
      cityData.name,
      cityData.country,
      cityData.latitude,
      cityData.longitude,
      cityData.elevation,
      cityData.sunrise,
      cityData.sunset
    );
  }
}
