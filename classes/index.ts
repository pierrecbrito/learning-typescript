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