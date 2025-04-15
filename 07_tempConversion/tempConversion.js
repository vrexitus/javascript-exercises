const convertToCelsius = function(temperature) {
  let convertedTemperature = (temperature - 32) * (5/9);
  if (convertedTemperature.toFixed(1) % 10 == 0) {
    return convertedTemperature;
  } else
    return parseFloat(convertedTemperature.toFixed(1));
};

const convertToFahrenheit = function(temperature) {
  let convertedTemperature = (temperature * 1.8) + 32;
  if (convertedTemperature.toFixed(1) % 10 == 0) {
    return convertedTemperature;
  } else
    return parseFloat(convertedTemperature.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
