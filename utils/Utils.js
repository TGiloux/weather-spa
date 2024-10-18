export { cleanCityName };

// Remove accents and prefixes from city names
function cleanCityName(cityName) {
  return cityName
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/^le\s|^la\s/, "");
}
