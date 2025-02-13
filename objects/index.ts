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

//Readonly properties
interface Product3 {
    readonly name: string;
    price: number;
    isAvaliable: boolean;
}

const shirt3: Product3 = {name: 'Shirt', price: 20, isAvaliable: true};
//shirt3.name = 'Pants';

//Index Signature
interface Product4 {
    name: string;
    price: number;
    [key: string]: any;
}

const shirt4: Product4 = {name: 'Shirt', price: 20, isAvaliable: true};
console.log(shirt4);


//Extending interfaces
interface Product5 {
    name: string;
    price: number;
}

interface Product6 extends Product5 {
    isAvaliable: boolean;
}

const shirt5: Product6 = {name: 'Shirt', price: 50, isAvaliable: true};
console.log(shirt5);

//Intersections types
interface Product7 {
    name: string;
    price: number;
}

interface Product8 {
    isAvaliable: boolean;
}

type Shirt = Product7 & Product8;

const shirt6: Shirt = {name: 'Shirt', price: 70, isAvaliable: true};
console.log(shirt6);

//ReadOnlyArray
const products: ReadonlyArray<string> = ['Shirt', 'Pants', 'Hat'];
//products.push('Shoes');
console.log(products);

//Tuple
let product: [string, number, boolean];
product = ['Shirt', 20, true];
console.log(product);