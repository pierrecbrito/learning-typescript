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