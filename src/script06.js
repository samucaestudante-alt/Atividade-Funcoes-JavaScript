// Exercício 6 - Média de notas

function calcularMedia(n1, n2, n3) {
    return (n1 + n2 + n3) / 3;
}

const n1 = Number(prompt("Digite o primeiro número:"));
const n2 = Number(prompt("Digite o segundo número:"));
const n3 = Number(prompt("Digite o terceiro número:"));

const media = calcularMedia(n1, n2, n3);

console.log(`A média é ${media}.`);
alert(`A média é ${media}.`);