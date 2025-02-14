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
//Type parameters
function getSomeData(obj, key) {
    return `A chave é: ${key.toString()} e o valor é: ${obj[key]}`;
}
console.log(getSomeData({ name: 'John', age: 30 }, "name"));
function showCharName(obj, key) {
    return obj[key];
}
const char = { name: 'John', age: 30, hasDriveLicense: true };
console.log(showCharName(char, 'name'));
