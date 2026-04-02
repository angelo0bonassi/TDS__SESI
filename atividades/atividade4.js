/* 

a) utilize o operador ternario (? :) para calcular o preco final de carrinho de compras

b) se o valor for maior que 100, subtraia 10%. caso contrario, mantenha o valor original

c) explique (em comentario no codigo) por que voce escolheu o nome da variavel booleana que armazena a condicao de desconto

*/


const carrinhoDeCompra = 150;
let precoDesconto = carrinhoDeCompra <= 100 ? "Preco Original" : "Preco com desconto";

if (carrinhoDeCompra > 100)
{
    precoDesconto = carrinhoDeCompra - (carrinhoDeCompra * 0.10);
    console.log(`Preco com desconto: ${precoDesconto}`)
}
else
{
    console.log(`Preco original: ${carrinhoDeCompra}`);
}

/*



*/