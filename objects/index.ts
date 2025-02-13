//Interfaces
interface Product {
    name: string;
    price: number;
    isAvaliable: boolean;
}

function showProductDetails(product: Product) {
    console.log(`Product: ${product.name}, Price: ${product.price}, Avaliable: ${product.isAvaliable}`);
}

const shirt: Product = {name: 'Shirt', price: 20, isAvaliable: true};
showProductDetails(shirt);

//Optional properties
interface Product2 {
    name: string;
    price: number;
    isAvaliable?: boolean;
}

function showProductDetails2(product: Product2) {
    if (!product.isAvaliable) {
        console.log(`Product: ${product.name}, Price: ${product.price}`);
    } else {
        console.log(`Product: ${product.name}, Price: ${product.price}, Avaliable: false`);
    }
}

const shirt2: Product2 = {name: 'Shirt', price: 20};
showProductDetails2(shirt2);