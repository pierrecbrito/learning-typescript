"use strict";
// Array
const numbers = [1, 2, 3, 4, 5];
console.log(numbers);
const numbers2 = [1, 2, 3, 4, 5];
console.log(numbers2);
const words = ["Hello", "World"];
console.log(words);
// Whatever type satisfies the condition
const whatever = [1, "Hello", true];
console.log(whatever);
const doIt = (a, b) => a + b;
console.log(doIt(1, 2));
//In Anonymous functions
setTimeout(() => {
    const sallary = 1000;
    console.log(sallary);
}, 2000);
//Objects
function passCoordinates(coord) {
    console.log(`x coordinates is ${coord.lat} and y coordinates is ${coord.long}`);
}
passCoordinates({ lat: 10, long: 20 });
//Optional properties (only the last ones)
function showNumber(a, b) {
    console.log('a', a);
    if (b)
        console.log('b', b);
}
showNumber(10);
//Union Types
function showValue(a) {
    console.log(a);
}
showValue(10);
showValue('Hello');
//Union Types (with conditionals)
function showValue2(a) {
    if (typeof a === 'number')
        console.log('Number', a);
    else
        console.log('String', a);
}
showValue2(10);
function showValue3(a) {
    if (typeof a === 'number')
        console.log('Number', a);
    else
        console.log('String', a);
}
showValue3(10);
function passCoordinates2(coord) {
    console.log(`x coordinates is ${coord.lat} and y coordinates is ${coord.long}`);
}
passCoordinates2({ lat: 10, long: 20 });
//Literal Types
let test;
test = "testando";
console.log(test);
function showValue4(a) {
    console.log(a);
}
showValue4('Hello');
//Non null
let test2 = null;
test2 = "Hello";
//Big int
const big = 1000n;
console.log(big);
