function sum(...numbers) {
  let total = 0;
  for (let number of numbers) {
    total += number;
  }
  return total;
}


console.log(sum(1, 2, 3)); // Output: 6
console.log(sum(10, 20, 30, 40));// Output: 100
console.log(sum(5, 15, 25, 35, 45)); // Output: 125

console.log("---------------------------------------")

// Function to calculate the average of numbers using rest operator


function calcAverage(...arr) {
  let total = 0;
  for (let num of arr) {
    total += num;
  }
  return total / arr.length;
}

console.log(calcAverage(10, 20, 30)); // Output: 20
