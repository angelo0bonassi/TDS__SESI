
function saudacao( nome, horaAtual) {
    if(horaAtual <=11)
    {
        console.log (`Bom dia ${nome}`);
    }
    else if(horaAtual <=17)
    {
        console.log( `Boa tarde ${nome}`);
    }
    else if (horaAtual <=23)
    {
        console.log (`Boa noite ${nome}`);
    }  
    else
    {
        console.log("Opcao Invalida");
    }
}

saudacao("Angelo", 8)
