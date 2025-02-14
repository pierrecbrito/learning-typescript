"use strict";
// Generics
function showDate(arg) {
    return `O dados é: ${arg}`;
}
console.log(showDate('12/12/2020'));
console.log(showDate(12));
//Constaints em generics
function showProductName(obj) {
    return obj.name;
}
const myObj = { name: 'John', age: 30 };
console.log(showProductName(myObj));
const myCar = { name: 'Car', wheel: 4, engine: 'V8' };
const myPen = { name: 'Pen', wheel: 'none', engine: true };
console.log(myCar);
console.log(myPen);
