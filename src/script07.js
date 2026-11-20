// Ecercício 7 - Área do retângulo


function areaRetangulo(base, altura) {
    return base * altura;
}

const base = Number(prompt("Digite o valor da base:"));
const altura = Number(prompt("Digite o valor da altura:"));
console.log(`A área é ${areaRetangulo(base, altura)}.`);
alert(`A área é ${areaRetangulo(base, altura)}.`);
