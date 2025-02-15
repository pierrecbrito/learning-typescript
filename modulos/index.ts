import importGreet from './greet.js'

importGreet()

import { x } from './variable.js'
console.log(x) // 10

import { a, b, myFunction } from './multiple.js'   
console.log(a) // 10
console.log(b) // teste
myFunction() // Olá

import { a as a1} from './changename.js'
console.log(a1) // 10


import * as myNumbers from './numbers.js'
console.log(myNumbers) // 10

import {Human} from './human.js'
class Pierre implements Human {
    name: string
    age: number
    
    constructor() {
        this.name = "Pierre"
        this.age = 25
    }
}
const human = new Pierre()
console.log(human) // { name: 'Pierre', age: 25 }