// Exercício 4 - Par ou Impar

function ehPar(numero) {
    return numero % 2 === 0;
}

const entrada = prompt("Digite um número:");
const numeroDigitado = Number(entrada);

const resultado = ehPar(numeroDigitado);

if (resultado) {
    console.log(`O número ${numeroDigitado} é par.`);
    alert(`O número ${numeroDigitado} é par.`);
} else {
    console.log(`O número ${numeroDigitado} é impar.`);
    alert(`O número ${numeroDigitado} é impar.`);
}