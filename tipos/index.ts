// Array
const numbers: number[] = [1, 2, 3, 4, 5];
console.log(numbers);

const numbers2: Array<number> = [1, 2, 3, 4, 5];
console.log(numbers2);

const words: string[] = ["Hello", "World"];
console.log(words);

// Whatever type satisfies the condition
const whatever: any[] = [1, "Hello", true];
console.log(whatever);

const doIt = (a: number, b: number):number =>  a + b ;
console.log(doIt(1, 2));

//In Anonymous functions
setTimeout(() => {
    const sallary: number = 1000;

    console.log(sallary);
}, 2000);

//Objects
function passCoordinates(coord: { lat: number, long: number }) {
    console.log(`x coordinates is ${coord.lat} and y coordinates is ${coord.long}`);
}

passCoordinates({ lat: 10, long: 20 });

//Optional properties (only the last ones)
function showNumber(a: number, b?: number ) {
    console.log('a', a);
    if(b)
        console.log('b', b);
}

showNumber(10);

//Union Types
function showValue(a: number | string) {
    console.log(a);
}

showValue(10);
showValue('Hello');

//Union Types (with conditionals)
function showValue2(a: number | string) {
    if(typeof a === 'number')
        console.log('Number', a);
    else
        console.log('String', a);
}

showValue2(10);

//Type Aliases
type NumberOrString = number | string;

function showValue3(a: NumberOrString) {
    if(typeof a === 'number')
        console.log('Number', a);
    else
        console.log('String', a);
}

showValue3(10);

//Interfaces
interface Coordinates {
    lat: number;
    long: number;
}

function passCoordinates2(coord: Coordinates) {
    console.log(`x coordinates is ${coord.lat} and y coordinates is ${coord.long}`);
}

passCoordinates2({ lat: 10, long: 20 });

//Literal Types
let test: "testando"
test = "testando"

console.log(test)

function showValue4(a: 'Hello' | 'World') {
    console.log(a);
}

showValue4('Hello');

//Non null
let test2: string | null = null;
test2 = "Hello";

//Big int
const big: bigint = 1000n;
console.log(big);