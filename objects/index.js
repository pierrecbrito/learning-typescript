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
//shirt3.name = 'Pants';
