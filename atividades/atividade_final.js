const estoque = ["Placa de video", "Placa mae", "Fonte", "Water cooler", "Memoria RAM"];
estoque.push("SSD");
let clienteNome = "Angelo";
let clienteIdade = 16;
let possuiCupom = true;
let valorTotal = 1500;
let quantidadeItens = estoque.length;

function processarVenda(valorTotal, cupomAtivo)
{
    var verificar = valorTotal >= 500 || cupomAtivo === true ? valorTotal * 0.85 : valorTotal;
    return (verificar);
}

if (clienteIdade >= 16)
{
    console.log(`Venda autorizada para: ${clienteNome}\n`);
}

else 
{
    console.log(`Venda bloqueada: Idade insuficiente.`);
}
 
for (let i = 0; i < quantidadeItens; i++)
{
    console.log (`Despachando item: ${estoque[i]}... OK!`);
}
console.log ("Fim\n");
estoque.shift();

let quantidadeFinalItens = estoque.length;
console.log(`Relatorio da loja: Cliente ${clienteNome} processou um pedido de R$ ${processarVenda(valorTotal, possuiCupom)}.
Itens restantes no estoque: ${quantidadeFinalItens}. `);
