const products = ["Playstation 5", "Xbox Series X", "Nintendo Switch"];

const prices = [499, 489, 299];

console.log(products);
console.log(prices);


const nintendoSwitch = products.filter((product) => {
  return product.includes("Switch");
})


console.log(nintendoSwitch); // ["Nintendo Switch"]


const highPrice = prices.filter((price) => {
  return price > 400;
})

console.log(highPrice); // [499, 489]


const toLowerCaseProducts = products.map((product) => {
  return product.toLowerCase();
});

console.log(toLowerCaseProducts); // ["playstation 5", "xbox series x", "nintendo switch"]

const discountedPrices = prices.map((price) => {
  return price * 0.9; // 10% discount
});

console.log(discountedPrices); // [449.1, 440.1, 269.1]


const totalProductLetters = products.reduce((acc, product)=> {
  return acc + product.length;
}, 0);

console.log(totalProductLetters); // Total number of letters in all product names


const sumPrices = prices.reduce((acc, price) => {
  return acc + price;
}, 0);

console.log(sumPrices); // Total sum of all prices
