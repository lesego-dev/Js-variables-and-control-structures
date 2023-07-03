// the program works only when the user inputs the metric in letter form eg; C instead of celcius, else it will return the alternative

let initMet = prompt("In which metric is the temperature you are converting, Celsius(C),Fahrenheit(F),Kelvin (K)?");// asking for initial metric
let secMet = prompt("To which metric is the temperature you are converting, Celsius, Fahrenheit, Kelvin?");// asking for second metric
let userInput = prompt("Enter a number!");// asking for temperature in number form

// Conversion formula
if (initMet === "C" && secMet === "F") {
let fahrenheit = userInput * 9 / 5 + 32;
alert(`The temperature is ${fahrenheit}°F`);

} else if (initMet === "C" && secMet === "K") {
let kelvin = userInput + 273.15;
alert(`The temperature is ${kelvin} K`);
} else if (initMet === "F" && secMet === "C") {
let celsius = (userInput - 32) * 5 / 9;
alert(`The temperature is ${celsius}°C`);
} else if (initMet === "F" && secMet === "K") {
let kelvin = (userInput - 32) * 5 / 9 + 273.15;
alert(`The temperature is ${kelvin} K`);
} else if (initMet === "K" && secMet === "C") {
let celsius = userInput - 273.15;
alert(`The temperature is ${celsius}°C`);
} else if (initMet === "K" && secMet === "F") {
let fahrenheit = (userInput - 273.15) * 9 / 5 + 32;
alert(`The temperature is ${fahrenheit}°F`);
} else {
alert("Invalid Input! Please check your metrics!"); // alternative 
}