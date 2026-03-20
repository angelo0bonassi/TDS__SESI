/*
Atalho comentario de varias linhas:
ALlt + SHIFT + A

Desafio: Criar uma funcao que receba preco e desconto em % e mostre o valor final com desconto
Criar outra funcao que receba preco e quantidade e mostre o valor total da compra.
*/

function criarCalculadorDesconto(preco, desconto){
  const valorFinal = preco - (preco * (desconto / 100));
  console.log(`O valor final com desconto foi de: ${valorFinal}`);
}

criarCalculadorDesconto(1000 ,5);

function calcularTotal(preco, quantidade){
    const valorTotal = preco * quantidade;
    console.log(`O valor total é de: ${valorTotal}`);
}

calcularTotal(100, 12);