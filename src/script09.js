// Exercício 9 - Desconto

function calcularDesconto(preco, percentual) {
    const desconto = preco * (percentual / 100);
    return preco - desconto;
}

const preco = Number(prompt("Digite o preço:"));
const percentual = Number(prompt("Digite a porcentagem (percentual):"));

const final = calcularDesconto(preco, percentual);

console.log(`O valor final com ${percentual}% de desconto: R$ ${final}`);
alert(`O valor final com ${percentual}% de desconto: R$ ${final}`);