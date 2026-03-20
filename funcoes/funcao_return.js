function calcularTotal (preco1, preco2){
    return preco1 + preco2;
}

let resultado = calcularTotal(30 , 50); // somar

//  imprimir concatenando e com template string

console.log("O resultado total eh:", + resultado);
console.log(`O resultado total da transaçao eh: ${resultado}`);
