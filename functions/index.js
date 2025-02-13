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
