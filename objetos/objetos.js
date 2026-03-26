const aluno = {
    nome: "Angelo",
    idade: 16,
    curso: "Desenvolvimento de Sistemas"
}
console.log(aluno);
console.log(aluno.nome);
console.log(aluno["idade"]);

aluno.matricula = "2025A";
aluno.idade = 18;

delete aluno.curso;

console.log(aluno);
