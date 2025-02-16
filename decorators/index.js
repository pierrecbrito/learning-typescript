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
var myClass = /** @class */ (function () {
    function myClass() {
    }
    myClass.prototype.testing = function () {
        console.log('testing');
    };
    __decorate([
        myDecorator()
    ], myClass.prototype, "testing", null);
    return myClass;
}());
var myObj = new myClass();
myObj.testing(); // testing
function a() {
    return function (target, propertyKey, descriptor) {
        console.log('a called');
    };
}
var MultipleDecorators = /** @class */ (function () {
    function MultipleDecorators() {
    }
    MultipleDecorators.prototype.testing = function () {
        console.log('Ending');
    };
    __decorate([
        a(),
        myDecorator()
    ], MultipleDecorators.prototype, "testing", null);
    return MultipleDecorators;
}());
var multiple = new MultipleDecorators();
multiple.testing(); // Ending
//class decorator
function classDecorator() {
    return function (target) {
        console.log('classDecorator called');
    };
}
var ClassDecorator2 = /** @class */ (function () {
    function ClassDecorator2() {
        console.log('ClassDecorator constructor');
    }
    ClassDecorator2.prototype.testing = function () {
        console.log('Ending');
    };
    ClassDecorator2 = __decorate([
        classDecorator()
    ], ClassDecorator2);
    return ClassDecorator2;
}());
var classDec = new ClassDecorator2();
classDec.testing(); // Ending
//Method decorator
function enumerable(value) {
    return function (target, propertyKey, descriptor) {
        descriptor.enumerable = value;
    };
}
var Machine = /** @class */ (function () {
    function Machine(name) {
        this.name = name;
    }
    Machine.prototype.showName = function () {
        return "The name is ".concat(this.name);
    };
    __decorate([
        enumerable(false)
    ], Machine.prototype, "showName", null);
    return Machine;
}());
var trator = new Machine('Trator');
console.log(trator); // The name is Trator
