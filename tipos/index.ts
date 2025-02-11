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
