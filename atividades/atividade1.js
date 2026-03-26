const produto = "Notebook";
const preco = 4500;
let estoque = true;

function exibirProduto(){
    console.log(`${produto} - ${preco}`);
}

exibirProduto();


console.log(`O item: ${produto} custa R$${preco}\nDisponibildade: ${estoque}`);