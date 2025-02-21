let nome: string
nome = "Pierre"
let numero: number
numero = 10


function greeting(name: string) {
    console.log(`hello, ${name}!`)
}

greeting(nome)
//greeting(outroNome) // Argument of type 'number' is not assignable to parameter of type 'string'.