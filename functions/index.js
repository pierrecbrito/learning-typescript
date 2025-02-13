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
