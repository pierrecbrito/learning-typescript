"use strict";
function sum(a, b) {
    if ((typeof a === 'string' && typeof b === 'string') || typeof a !== typeof b) {
        console.log(parseFloat('' + a) + parseFloat('' + b));
    }
    else if (typeof a === 'number' && typeof b === 'number') {
        console.log(a + b);
    }
}
sum('10', '20');
sum(10, 20);
sum('10', 20);
function operations(arr, operation) {
    if (operation === 'sum') {
        console.log(arr.reduce((acc, cur) => acc + cur));
    }
    else if (operation === 'sub') {
        console.log(arr.reduce((acc, cur) => acc - cur));
    }
    else if (operation === 'mult') {
        console.log(arr.reduce((acc, cur) => acc * cur));
    }
    else if (operation === 'div') {
        console.log(arr.reduce((acc, cur) => acc / cur));
    }
}
operations([10, 20, 30], 'sum');
operations([10, 20, 30], 'sub');
//Instance of
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
let person1 = new Person('John', 30);
console.log(person1 instanceof Person, person1);
//"IN"
let obj = { name: 'John', age: 30 };
console.log('name' in obj, 'age' in obj, 'birthday' in obj);
