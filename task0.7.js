function celsiusToFahrenheit(temperature) {
    temperature = temperature + 0;
    temperature = temperature * 9 / 5;
    temperature = temperature + 32;
    return temperature
} 

celsiusToFahrenheit(20)

function fahrenheitToCelsius(temperature) {
    temperature = temperature + 0;
    temperature = temperature - 32;
    temperature = temperature / 1.8
    return temperature
}

fahrenheitToCelsius(68)