const math = require('./math.js');
const num1 = 10;
const num2 = 30;

console.log("The sum of " + num1 + " and " + num2 + " is: " + math.add(num1, num2));

console.log(num2 + " minus " + num1 + " is: " + math.subtract(num2, num1));

console.log(num1 + " times " + num2 + " is: " + math.multiply(num1, num2));

console.log(num2 + " divde " + num1 + " is: " + math.divide(num2, num1));