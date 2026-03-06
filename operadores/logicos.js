let temDinheiro = true;
let estaChovendo = false;
let carroEstaNaGarragem = false;

let resultadoAND = "#AND Você vai ao shopping? ";
resultadoAND += temDinheiro && estaChovendo;
console.log(resultadoAND);

let resultadoOR = "#OR Você vai ao shopping? ";
resultadoOR += temDinheiro || carroEstaNaGarragem;
console.log(resultadoOR);