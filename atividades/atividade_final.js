const estoque = ["SSD 1TB", "RTX 5090", "Whater Cooler", "Memoria RAM 16G DDR5", "I7 RYZEN"];
estoque.push("Placa Mae");
let valorCompra = 600;
let clienteNome = "Angelo"; 
let clienteIdade = 18;
let possuiCupom = true;
let i;
let venda = processarVenda(valorCompra, possuiCupom);


function processarVenda(valorTotal, cupomAtivo, quantiadeItens){

    var valorFinal = valorTotal >= 500 || cupomAtivo == true ? valorTotal * 0.85 : valorTotal;
    return valorFinal; 
}

let idadeCerta = processarVenda(valorCompra, possuiCupom)

    if(clienteIdade >= 16){
        console.log(`Venda autorizada para ${clienteNome}.`); 
        i = 1;
    }
    else{
        console.log(`Venda bloqueada: Idade Insuficiente`)
        i = 0;
    }

for(i = true; i = 1 ;i++){
    console.log(`Cliente ${clienteNome} processou um pedido de R$${venda}. Itens restantes no estoque ${estoque.length}`);
    console.log(`Despachando item: ${estoque[0]}`)
    estoque.splice[0];
}