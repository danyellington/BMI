var weight = prompt("Enter your weight in kg:");
var height = prompt("Enter your height in cm:");

var bmi = function(weight, height) {
  return (weight / (height * height / 100 / 100)).toPrecision(4);
};

alert("Your BMI is " + bmi(weight, height) + " kg/m^2");
