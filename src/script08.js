// Exercício 8 - Celsius para Fahrenheit

function celsiusParaFahrenheit(c) {
    return (c * 1.8) + 32;
}

const c = Number(prompt("Digite os graus ºC:"))

console.log(`${c} ºC  são  ${celsiusParaFahrenheit(c)} ºF.`)
alert(`${c} ºC  são  ${celsiusParaFahrenheit(c)} ºF.`)

