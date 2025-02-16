function myDecorator() {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log('myDecorator called on', target, propertyKey);
    }
}

class myClass {
    @myDecorator()
    testing() {
        console.log('testing');
    }
}

const myObj = new myClass();
myObj.testing(); // testing
 
function a() {
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log('a called');
    }
}

class MultipleDecorators {
    @a()
    @myDecorator()
    testing() {
        console.log('Ending');
    }
}

const multiple = new MultipleDecorators();
multiple.testing(); // Ending

//class decorator
function classDecorator() {
    return function(target: any) {
        console.log('classDecorator called');
    }
}

@classDecorator()
class ClassDecorator2 {
    
    constructor() { 
        console.log('ClassDecorator constructor');
    }

    testing() {
        console.log('Ending');
    }
}

const classDec = new ClassDecorator2();
classDec.testing(); // Ending
 

//Method decorator
function enumerable(value: boolean) {
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        descriptor.enumerable = value;
    };
}

class Machine {
    name;

    constructor(name: string) {
        this.name = name;
    }

    @enumerable(false)
    showName() {
        return `The name is ${this.name}`;
    }
}

const trator = new Machine('Trator');
console.log(trator); // The name is Trator

//acessor decorator
class Monster {
    age?
    name?

    constructor(age: number, name: string) {
        this.age = age;
        this.name = name;
    }

    @enumerable(true)
    get showname() {
        return this.name;
    }

    get showage() {
        return this.age;
    }
}

const charmander = new Monster(10, 'Charmander');
console.log(charmander); // Charmander


 
