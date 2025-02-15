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
