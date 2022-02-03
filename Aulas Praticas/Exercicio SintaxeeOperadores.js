//Crie uma função que recebe dois numeros como parametros//
//Confira se os números são iguais//
//Confira se a soma dos números é maior que 10 ou menos que 20//
/*Retorne a string dizendo "Os números num1 e num2 não são iguais. Sua soma é soma, que é.
maior/menor que 10 é maior/menor que 20."*/


/*
function comparaNumeros(num1, num2) {
    const saoIguais = num1 === num2;
    const soma = num1 = num2;

    if(saoIguais) {
        return "São Iguais";
    }

    return "Não são iguais";
}*/

// IF ternario = return saoIguais ? "São iguais : Não são iguais"//

function compararNumeros(num1, num2) {
    const primeiraFrase = criarPrimeiraFrase(num1, num2);
    const segundaFrase = criarSegundaFrase(num1, num2);

    return `${primeiraFrase} ${segundaFrase}`
}

function criarPrimeiraFrase(num1, num2) {
    let saoIguais = '';

    if(num1 !== num2) {
        saoIguais = 'não';
    }

    return `Os números ${num1} e ${num2} ${saoIguais} são iguais.`
}

function criarSegundaFrase(num1, num2) {
    const soma = num1 + num2;

    let resultado10= 'menor';
    let resultado20= 'menor';
    const compara10 = soma > 10;
    const compara20 = soma > 20;

    if(compara10){
        resultado10 = 'maior';
    }

    if(compara20){
        resultado20 = 'meior';
    }

    return `Sua soma é ${soma}, que é ${resultado10} que é ${resultado20} que é 20. `
}

console.log (compararNumeros(1, 2));