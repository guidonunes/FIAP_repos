const products = ["Apple", "Banana", "Cherry", "Date"];

console.log(products); // ["Apple", "Banana", "Cherry", "Date"]

products.unshift("Mango");

console.log(products); // ["Mango", "Apple", "Banana", "Cherry", "Date"]

products.push("Elderberry");

console.log(products); // ["Mango", "Apple", "Banana", "Cherry", "Date", "Elderberry"]

products.shift();

console.log(products); // ["Apple", "Banana", "Cherry", "Date", "Elderberry"]

products.pop();

console.log(products); // ["Apple", "Banana", "Cherry", "Date"]

products.splice(1, 2, "Orange", "Grapes");

console.log(products); // ["Apple", "Orange", "Grapes", "Date"]

const slicedProducts = products.slice(1, 3);

console.log(slicedProducts); // ["Orange", "Grapes"]
