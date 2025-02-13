"use strict";
function showProductDetails(product) {
    console.log(`Product: ${product.name}, Price: ${product.price}, Avaliable: ${product.isAvaliable}`);
}
const shirt = { name: 'Shirt', price: 20, isAvaliable: true };
showProductDetails(shirt);
function showProductDetails2(product) {
    if (!product.isAvaliable) {
        console.log(`Product: ${product.name}, Price: ${product.price}`);
    }
    else {
        console.log(`Product: ${product.name}, Price: ${product.price}, Avaliable: false`);
    }
}
const shirt2 = { name: 'Shirt', price: 20 };
showProductDetails2(shirt2);
const shirt3 = { name: 'Shirt', price: 20, isAvaliable: true };
const shirt4 = { name: 'Shirt', price: 20, isAvaliable: true };
console.log(shirt4);
const shirt5 = { name: 'Shirt', price: 50, isAvaliable: true };
console.log(shirt5);
const shirt6 = { name: 'Shirt', price: 70, isAvaliable: true };
console.log(shirt6);
//ReadOnlyArray
const products = ['Shirt', 'Pants', 'Hat'];
//products.push('Shoes');
console.log(products);
//Tuple
let product;
product = ['Shirt', 20, true];
console.log(product);
//9 - tuplas com readonly
let product2;
product2 = ['Shirt', 20, true];
//product2[1] = 30;
console.log(product2);
