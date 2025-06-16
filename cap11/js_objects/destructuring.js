const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const [a, b, c, ...remainingNumbers] = numbers;

console.log(a); // Output: 1
console.log(b);
console.log(remainingNumbers); // Output: [4, 5, 6, 7, 8, 9, 10]


console.log("---------------------------------------");

const book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  year: 1925,
  genre: "Fiction"
}


const { title, author, ...otherDetails } = book;

console.log(title); // Output: The Great Gatsby
console.log(author); // Output: F. Scott Fitzgerald
console.log(otherDetails); // Output: { year: 1925, genre: 'Fiction' }
