const { parse } = require("path");

let number = 23.63

// console.log("The number is: " + number);

console.log(Math.ceil(number)); // Rounds up to the nearest integer

console.log(Math.floor(number)); // Rounds down to the nearest integer

console.log(Math.round(number)); // Rounds to the nearest integer


console.log(Math.min(23, 45, 12, 67, 34)); // Returns the smallest number from the arguments
console.log(Math.max(23, 45, 12, 67, 34)); // Returns the largest number from the arguments


console.log(parseInt(number));

console.log(Math.pow(2, 3)); // Raises 2 to the power of 3
// Converts a string to an integer

let randomNumber = parseInt(Math.random() * 10); // Generates a random number between 0 and 1


console.log(randomNumber); // Prints the random number
