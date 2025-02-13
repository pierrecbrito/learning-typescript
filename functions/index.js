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
console.log(preGreeting(greeting, 'John'));
