const productPrice = 120.00
const deliveryPrice = 15.00
let totalPrice = 0


if (productPrice <= 150.00) {
  totalPrice = productPrice + deliveryPrice;
} else {
  totalPrice = productPrice;
}


console.log(`The total price is: $${totalPrice.toFixed(2)}`);


let paymentMethod = 'debit card'; // Change this to 'credit card' or 'money transfer' to test different outputs

if (paymentMethod === 'credit card') {
  console.log('Up to 4 installments without interest');
} else if (paymentMethod === 'debit card') {
  console.log('You will receive a 10% discount');
} else {
  console.log('Money transfer is available');
}



let itemsInStock = 3;

let statusMessage = itemsInStock > 0 ? 'In stock' : 'Out of stock';


console.log(`Items in stock: ${itemsInStock}`);

console.log(`Status: ${statusMessage}`);
