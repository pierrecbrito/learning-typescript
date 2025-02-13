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