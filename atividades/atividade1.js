const produto = "Notebook";
const preco = 4500;
let estoque = true;

function exibirProduto(){
    console.log(`${produto} - ${preco}`);
}

exibirProduto();

if( estoque != true){
    console.log("Nao Ha o produto no estoque");
}
else{
    console.log("Ha o produto no estoque");
}

console.log(`O produto: ${produto} custa R$${preco}`);