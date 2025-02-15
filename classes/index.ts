//Classes
class User {
    name!: string
    age!: number
}

const matheus = new User();
//matheus.name = 'Matheus';   
//matheus.age = 30;
console.log(matheus);

//Constuctor
class Car {
    constructor(public name: string, public year: number) {
        this.name = name;
        this.year = year;
    }
}

const myCar = new Car('Fusca', 1970);
console.log(myCar);

//Readonly fields
class Animal {
    readonly name: string
    constructor(name: string) {
        this.name = name;
    }
}

const dog = new Animal('Dog');
//dog.name = 'Cat';
console.log(dog);

//Inheritance
class Person {
    constructor(public name: string, public age: number) {
        this.name = name;
        this.age = age;
    }
}

class Employee extends Person {
    constructor(name: string, age: number, public salary: number) {
        super(name, age);
        this.salary = salary;
    }
}

const employee = new Employee('John', 30, 2000);
console.log(employee);


//Methods
class Person2 {
    constructor(public name: string, private age: number) {
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
    constructor(public name: string, private age: number) {
        this.name = name;
        this.age = age;
    }

    showAge(age:number) {
        return this.age;
    }
}

const person3 = new Person3('John', 30);
console.log(person3.showAge(14));


//Getters and Setters
class Person4 {
    constructor(public name: string, private _age: number) {
        this.name = name;
        this._age = _age;
    }

    get age() {
        return this._age;
    }

    set age(value: number) {
        if (value > 0) {
            this._age = value;
            console.log('Idade alterada para: ' + value);
        }
    }
}

const person4 = new Person4('John', 30);
person4.age = 14;
console.log(person4.age);


//Interface inheritance

interface Animal2 {
    name: string
}

interface Dog extends Animal2 {
    bark(): void
}

class Dog2 implements Dog {
    name!: string
    bark() {
        console.log('Au au');
    }
}

const myDog = new Dog2();
myDog.name = 'Dog';
myDog.bark();

//Override de métodos

class Base {
    someMethod() {  
        console.log('Base class method');
    }
}

class Derived extends Base {
    someMethod() {
        console.log('Derived class method');
    }
}

const derived = new Derived();
derived.someMethod();


//Visibility Modifiers (public, protected, private)
class Base2 {
    private someMethod() {
        console.log('Base class method');
    }
}

class Derived2 extends Base2 {
    /*someMethod() {
        console.log('Derived class method');
    }*/
}

const derived2 = new Derived2();

//derived2.someMethod();

//Static members
class StaticMembers {
    static prop = "Teste static"
}

console.log(StaticMembers.prop);

//Generic Class
class Item<T, U> {
    first
    second

    constructor(first: T, second:U) {
        this.first = first
        this.second = second
    }
}

const newItem = new Item("caixa", "surpresa")
console.log(newItem)

//Parameter properties
class ParameterProperties {
    constructor(public name: string, private qty: number, private price: number) {
        this.name = name;
        this.qty = qty;
        this.price = price;
    }

}

const newShirt = new ParameterProperties("nike shirt", 1, 78.90)
console.log(newShirt)

//Class Expressions
const myClass = class<T> {
    name

    constructor(name: T) {
        this.name = name;
    }
}

const pessoa = new myClass("Jones")
console.log(pessoa)

//abstract class

abstract class AbstractClass {
    abstract showName(): void;
}

class AbstractExample extends AbstractClass {
    name: string;

    constructor(name:string) {
        super();
        this.name = name;
    }

    showName() {
        console.log(name)
    }
}

const example = new AbstractExample("Pierre")
example.showName()


//Class relations
class People {
    name!: string;
}

class Bird {
    name!: string;
}

const birdPeople: People = new Bird();//Only the attributes inside are validated
console.log(birdPeople)