"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function myDecorator() {
    return function (target, propertyKey, descriptor) {
        console.log('myDecorator called on', target, propertyKey);
    };
}
class myClass {
    testing() {
        console.log('testing');
    }
}
__decorate([
    myDecorator()
], myClass.prototype, "testing", null);
const myObj = new myClass();
myObj.testing(); // testing
function a() {
    return function (target, propertyKey, descriptor) {
        console.log('a called');
    };
}
class MultipleDecorators {
    testing() {
        console.log('Ending');
    }
}
__decorate([
    a(),
    myDecorator()
], MultipleDecorators.prototype, "testing", null);
const multiple = new MultipleDecorators();
multiple.testing(); // Ending
//class decorator
function classDecorator() {
    return function (target) {
        console.log('classDecorator called');
    };
}
let ClassDecorator2 = class ClassDecorator2 {
    constructor() {
        console.log('ClassDecorator constructor');
    }
    testing() {
        console.log('Ending');
    }
};
ClassDecorator2 = __decorate([
    classDecorator()
], ClassDecorator2);
const classDec = new ClassDecorator2();
classDec.testing(); // Ending
//Method decorator
function enumerable(value) {
    return function (target, propertyKey, descriptor) {
        descriptor.enumerable = value;
    };
}
class Machine {
    constructor(name) {
        this.name = name;
    }
    showName() {
        return `The name is ${this.name}`;
    }
}
__decorate([
    enumerable(false)
], Machine.prototype, "showName", null);
const trator = new Machine('Trator');
console.log(trator); // The name is Trator
//acessor decorator
class Monster {
    constructor(age, name) {
        this.age = age;
        this.name = name;
    }
    get showname() {
        return this.name;
    }
    get showage() {
        return this.age;
    }
}
__decorate([
    enumerable(true)
], Monster.prototype, "showname", null);
const charmander = new Monster(10, 'Charmander');
console.log(charmander); // Charmander
//Property decorator
function formatNumber() {
    return function (target, propertyKey) {
        let value;
        const getter = function () {
            return value;
        };
        const setter = function (newVal) {
            value = newVal.padStart(4, '0');
        };
        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter
        });
    };
}
class ID {
    constructor(id) {
        this.id = id;
    }
}
__decorate([
    formatNumber()
], ID.prototype, "id", void 0);
const newItem = new ID("1");
console.log(newItem.id); // 0001
