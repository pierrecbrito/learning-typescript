"use strict";
//Classes
class User {
}
const matheus = new User();
//matheus.name = 'Matheus';   
//matheus.age = 30;
console.log(matheus);
//Constuctor
class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
        this.name = name;
        this.year = year;
    }
}
const myCar = new Car('Fusca', 1970);
console.log(myCar);
//Readonly fields
class Animal {
    constructor(name) {
        this.name = name;
    }
}
const dog = new Animal('Dog');
//dog.name = 'Cat';
console.log(dog);
//Inheritance
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.name = name;
        this.age = age;
    }
}
class Employee extends Person {
    constructor(name, age, salary) {
        super(name, age);
        this.salary = salary;
        this.salary = salary;
    }
}
const employee = new Employee('John', 30, 2000);
console.log(employee);
//Methods
class Person2 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.name = name;
        this.age = age;
    }
    showAge() {
        return this.age;
    }
}
const person2 = new Person2('John', 30);
//console.log(person2.age);
console.log(person2.showAge());
//This
class Person3 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.name = name;
        this.age = age;
    }
    showAge(age) {
        return this.age;
    }
}
const person3 = new Person3('John', 30);
console.log(person3.showAge(14));
//Getters and Setters
class Person4 {
    constructor(name, _age) {
        this.name = name;
        this._age = _age;
        this.name = name;
        this._age = _age;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        if (value > 0) {
            this._age = value;
        }
    }
}
const person4 = new Person4('John', 30);
console.log(person4.age);
