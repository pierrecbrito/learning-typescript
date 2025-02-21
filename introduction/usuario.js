//Crie 
function printUsuario(aluno) {
    console.log("ID: ".concat(aluno.id, " - Nome: ").concat(aluno.nome, " - E-mail: ").concat(aluno.email));
}
var joao = {
    id: 1,
    nome: "João",
    email: "joao@gmail.com"
};
printUsuario(joao);
