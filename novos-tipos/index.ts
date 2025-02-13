// Generics
function showDate<T>(arg: T): string {
    return `O dados é: ${arg}`;
}

console.log(showDate('12/12/2020'));
console.log(showDate(12));