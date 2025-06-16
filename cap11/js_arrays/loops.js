const products = ["MacBook Pro", "Dell XPS 13", "Lenovo ThinkPad X1 Carbon", "HP Spectre x360", "Asus ZenBook 14", "Acer Swift 3", "Microsoft Surface Laptop 4", "Razer Blade Stealth 13", "LG Gram 14", "Apple MacBook Air M1", "Google Pixelbook Go"];

console.table(products); // Initial product list


//for loop
for (let i = 0; i < products. length; i++) {
  console.log(`${i + 1} - ${products[i]} `);
}

console.log("")
console.log('------------------for in loop---------------------------');

for (let product in products) {
  console.log(`${product} - ${products[product]} `);
}


console.log("")
console.log('-----------------for of---------------------------------');

for (let product of products) {
  console.log(`${product}`)
}

console.log("")
console.log('-----------------for each---------------------------------');

let highestCharProduct = 0;
let charCount = 0;

products.forEach((product) => {
  console.log(`${product} - ${product.length}`)
  if (product.length > charCount) {
    charCount = product.length;
    highestCharProduct = product;
  }
})

console.log("");
console.log("-----------------------------------------------")

console.log(`The product with the highest character count is: ${highestCharProduct} with ${charCount} characters.`);
