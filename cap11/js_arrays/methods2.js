const products = ["Playstation 5", "Xbox Series X", "Nintendo Switch"];

console.log(products);

const newProducts = ["Steam Deck", "Oculus Quest 2", "Razer Edge"];


const allProducts = products.concat(newProducts);

console.log(allProducts);


allProducts.sort()

console.table(allProducts);

allProducts.reverse();

console.table(allProducts);

let productsString = allProducts.join(", ");

console.log(productsString);

let exists = allProducts.includes("Oculus Quest 2");

console.log(exists);

let allLetterE = allProducts.every((product) => {
  return product.includes("e");
});

console.log(allLetterE);

let total = 0

const maxSize10 = allProducts.some((product) => {
  return product.length <= 10
})

console.log(maxSize10);

const maxSize6 = allProducts.find((product) => {
  return product.length <= 6;
});
