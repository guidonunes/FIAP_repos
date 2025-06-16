const numbers = [1, 2, 3];
const moreNumbers = [4, 5, 6];

// Using the spread operator to combine arrays
const combinedNumbers = [...numbers, ...moreNumbers];

console.log(combinedNumbers); // Output: [1, 2, 3, 4, 5, 6]


console.log("---------------------------------------")

const basket = {
  "Javascript": 100,
  "Python": 200,
  "Java": 300
}


const basketCopy = {...basket};

console.log(basketCopy); // Output: { Javascript: 100, Python: 200, Java: 300 }
console.log(basket);
