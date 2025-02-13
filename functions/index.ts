//1- void
function withoutReturn(): void {
    console.log('I am a void function');
}

withoutReturn();

//2- function as parameter
function greeting(name: string): string {
    return `Hello ${name}`;
}

function preGreeting(f: (name:string) => string, username: string) {
    console.log("Preparing function...", f(username));
}

preGreeting(greeting, 'John');

//Generic function
function genericFunction<T>(value: T): T {
    return value;
}

console.log(genericFunction<string>('Hello'));
console.log(genericFunction<number>(100));


//Constraints
function biggestNumber<T extends number | string>(value1: T, value2: T): T {
    let biggest: T;

    return value1 > value2 ? value1 : value2;
}

console.log(biggestNumber(100, 200));
console.log(biggestNumber('100', '200'));

//Typing parameters
function sum(a: number, b: number): number {
    return a + b;
}

console.log(sum(10, 20));

//Optional parameters
function optionalParams(a: number, b: number, c?: number): number {
    return c ? a + b + c : a + b;
}

console.log(optionalParams(10, 20));
console.log(optionalParams(10, 20, 30));

//Default parameters
function defaultParams(a: number, b: number, c: number = 30): number {
    return a + b + c;
}

console.log(defaultParams(10, 20));

//Unknown type
function unknownType(value: unknown) {
    console.log(value);
}

unknownType('Hello');