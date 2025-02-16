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
 
 
