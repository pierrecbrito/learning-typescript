var nome = "Pierre";
var outroNome = 1;
var x = true;
function greeting(nome) {
    console.log("Ol\u00E1, ".concat(nome, "!"));
}
greeting(nome);
//greeting(outroNome) // Argument of type 'number' is not assignable to parameter of type 'string'.
