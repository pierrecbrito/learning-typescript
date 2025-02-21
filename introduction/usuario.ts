//Crie 

interface Usuario {
    id: number;
    nome: string;
    email: string;
  }

function printUsuario(aluno: Usuario) {
    console.log(`ID: ${aluno.id} - Nome: ${aluno.nome} - E-mail: ${aluno.email}`)
}

const joao: Usuario = {
    id: 1,
    nome: "João",
    email: "joao@gmail.com"
};

printUsuario(joao)
