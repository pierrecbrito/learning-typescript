// Generics
function showDate<T>(arg: T): string {
    return `O dados é: ${arg}`;
}

console.log(showDate('12/12/2020'));
console.log(showDate(12));

//Constaints em generics

function showProductName<T extends {name: string}>(obj: T): string {
    return obj.name;
}

const myObj = {name: 'John', age: 30};
console.log(showProductName(myObj));

//Generics com interfaces
interface MyObject<T, U> {
    name: string,
    wheel: T,
    engine: U
}

type Car = MyObject<number, string>;
type Pen = MyObject<string, boolean>;

const myCar: Car = {name: 'Car', wheel: 4, engine: 'V8'};
const myPen: Pen = {name: 'Pen', wheel: 'none', engine: true};

console.log(myCar);
console.log(myPen);

//Type parameters
function getSomeData<T, K extends keyof T>(obj: T, key: K) {
    return `A chave é: ${key.toString()} e o valor é: ${obj[key]}`;
}


console.log(getSomeData({name: 'John', age: 30}, "name"));