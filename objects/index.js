"use strict";
function showProductDetails(product) {
    console.log(`Product: ${product.name}, Price: ${product.price}, Avaliable: ${product.isAvaliable}`);
}
const shirt = { name: 'Shirt', price: 20, isAvaliable: true };
showProductDetails(shirt);
