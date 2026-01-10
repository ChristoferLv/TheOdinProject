/**
 * @param {number} fahrenTemp 
 */
const convertToCelsius = function (fahrenTemp) {
  return Math.round((fahrenTemp - 32) * (5 / 9) * 10) / 10;
};

/**
 * @param {number} celsiusTemp 
 */
const convertToFahrenheit = function (celsiusTemp) {
  return Math.round((celsiusTemp * (9 / 5) + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
