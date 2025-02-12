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
