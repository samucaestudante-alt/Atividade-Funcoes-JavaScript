// Exercício 2 - O dobro

function dobro(numero) {
    const resultado = numero * 2;
    console.log(`O dobro de ${numero} é ${resultado}.`);
    alert(`O dobro de ${numero} é ${resultado}.`);
}

const numero = Number(prompt("Digite um número:"));
dobro(numero);