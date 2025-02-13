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