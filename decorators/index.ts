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
 
