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

