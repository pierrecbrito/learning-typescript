"use strict";
//1- void
function withoutReturn() {
    console.log('I am a void function');
}
withoutReturn();
//2- function as parameter
function greeting(name) {
    return `Hello ${name}`;
}
function preGreeting(f, username) {
    console.log("Preparing function...", f(username));
}
preGreeting(greeting, 'John');
//Generic function
function genericFunction(value) {
    return value;
}
console.log(genericFunction('Hello'));
console.log(genericFunction(100));
//Constraints
function biggestNumber(value1, value2) {
    let biggest;
    return value1 > value2 ? value1 : value2;
}
console.log(biggestNumber(100, 200));
console.log(biggestNumber('100', '200'));
//Typing parameters
function sum(a, b) {
    return a + b;
}
console.log(sum(10, 20));
//Optional parameters
function optionalParams(a, b, c) {
    return c ? a + b + c : a + b;
}
console.log(optionalParams(10, 20));
console.log(optionalParams(10, 20, 30));
//Default parameters
function defaultParams(a, b, c = 30) {
    return a + b + c;
}
console.log(defaultParams(10, 20));
//Unknown type
function unknownType(value) {
    console.log(value);
}
function firstValue(value) {
    if (Array.isArray(value)) {
        console.log(value[0]);
    }
}
unknownType('Hello');
console.log(firstValue([1, 2, 3]));
//Never type
function error(message) {
    throw new Error(message);
}
//error('Error message');
//Rest parameters
function summAll(...values) {
    return values.reduce((a, b) => a + b);
}
console.log(summAll(1, 2, 3, 4, 5));
//Destructoring parameters
function destructuringParams({ name, age }) {
    console.log(name, age);
}
destructuringParams({ name: 'John', age: 30 });
