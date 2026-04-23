/* 

crie um fluxo if/else para classificar o desempenho de um aluno

nota >=7 aprovado
nota entre 5 e 6.9 recuperacao
nota <5 reprovado

*/

let n1 = 7;
let n2 = 7;
let media = (n1 + n2)/2;

if (media >=7)
{
    console.log(`Aprovado\nMedia: ${media}`);
}
else if (media =>5 && media <= 6.9)
{
    console.log(`Em recuperacao\nMedia: ${media}`);
}
else
{
    console.log(`Reprovado\nMedia: ${media}`)
}
