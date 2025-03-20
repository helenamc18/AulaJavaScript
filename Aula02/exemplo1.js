
function converterTemperatura() {
let fahrenheit = prompt("Digite a temperatura em Fahrenheit:");
if (fahrenheit !== null && !isNaN(fahrenheit)) {
let celsius = (fahrenheit - 32) * 5 / 9;
alert(`A temperatura em Celsius é: ${celsius.toFixed(2)}°C`);
} else {
alert("Por favor, insira um número válido.");
}
}