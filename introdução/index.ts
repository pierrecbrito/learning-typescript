let nome: string
nome = "Pierre"
let numero: number
numero = 10


function greeting(argumento: string) {
    console.log(`Olá, ${argumento}!`)
}

greeting(nome)
//greeting(outroNome) // Argument of type 'number' is not assignable to parameter of type 'string'.