/*
a) Crie uma função que recebe dois parametros: o valor em reais e a taxa de cambio do dia

entrada(parametro): valor, taxa
logica: valor * taxa
saldo esperado: ex: entrada 10 e taxa 5.50, retorne 55.00

b) imprima no output o valor final
*/
function conversor(valor,taxa)
{
   var valorCovers = valor * taxa;
   console.log(`Entrada ${valor} e taxa ${taxa}. Val final de conversao: ${valorCovers}`)
}
conversor(23, 12.57);