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

//keyof type operator
type Character = {name:string, age: number, hasDriveLicense: boolean};
type C = keyof Character

function showCharName(obj: Character, key: C) {
    return obj[key];
}

const char: Character = {name: 'John', age: 30, hasDriveLicense: true};
console.log(showCharName(char, 'name'));

//typeof Type operator
const userName: string = 'John';
const userName2: typeof userName = 'Doe';
console.log(userName2);

//Indexed Access Types
type Truck = {km: number, kg: number, description: string};
type TruckKm = Truck['km'];
type TruckKg = Truck['kg'];
type TruckDescription = Truck['description'];

const truck: Truck = {km: 1000, kg: 2000, description: 'Truck'};

function showKm(km: TruckKm) {
    console.log(km);
}

showKm(truck.km);


//Conditional types
interface A {}
interface B extends A {}

type myType = B extends A ? string : number;
const someVar: myType = 'Hello';
console.log(someVar);

//Template literal type
type TestA = "text";
type TestB = `${TestA} with template literal type`;
const testing: TestB = 'text with template literal type';
