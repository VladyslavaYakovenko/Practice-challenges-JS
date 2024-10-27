// Write a program that takes a temperature input in celsius and converts it to Fahrenheit and Kelvin. Return the converted temperature values in an array.

// The formula to calculate the temperature in Fahrenheit from Celsius is: F = C*9/5 +32
// The formula to calculate the temperature in Kelvin from Celsius is: K = C + 273.15

const tempConversion = (celciusVal = 0) => {
  const fahrenheitVal = (celciusVal * 9) / 5 + 32;
  const kelvinVal = celciusVal + 273.15;

  return [fahrenheitVal, kelvinVal];
};

export default tempConversion;
