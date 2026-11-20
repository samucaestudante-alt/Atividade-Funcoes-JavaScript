// Exercício 10 - Maioridade

function verificarIdade(idade) {
    if (idade > 18) {
        return "Você é maior de idade"
    }

    return "Você é menor de idade"
}

const idade = Number(prompt("Digite a idade:"));

console.log(verificarIdade(idade));
alert(verificarIdade(idade));