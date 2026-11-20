// Exercício 5 - Maior de dois

function maiorDeDois(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

const numero1 = Number(prompt("Digite o primeiro número:"));
const numero2 = Number(prompt("Digite o primeiro número:"));

const maior = maiorDeDois(numero1, numero2);

if (numero1 === numero2) {
    console.log(`Os dois números são iguais ($${maior}).`);
    alert(`Os dois números são iguais (${maior}).`);
} else {
    console.log(`O maior número entre ${numero1} e ${numero2} é ${maior}.`)
    alert(`O maior número entre ${numero1} e ${numero2} é ${maior}.`)
}