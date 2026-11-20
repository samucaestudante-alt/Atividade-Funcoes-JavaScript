// Exercício 3 - Soma

function soma(a, b) {
    const resultado = a + b;
    console.log(`O soma de ${a} + ${b} é ${resultado}.`);
    alert(`A soma de ${a} + ${b} é ${resultado}.`);
}

const a = Number(prompt("Digite um número:"));
const b = Number(prompt("Digite um número:"));
soma(a, b);