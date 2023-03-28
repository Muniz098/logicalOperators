alert("Olá usuário. Iremos, neste teste, fazer cálculos de dois números que você nos informar.")

let numberOne = Number(prompt("Por favor, digite o primeiro número: "))
let numberTwo = Number(prompt("Por favor, digite o segundo número: "))

const sum = (numberOne + numberTwo)
const sub = (numberOne - numberTwo)
const mult = (numberOne * numberTwo)
const div = (numberOne / numberTwo).toFixed(2)
const rest = (numberOne % numberTwo)

alert(`A soma é ${sum}`)
alert(`A subtração é ${sub}`)
alert(`A multiplicação é ${mult}`)
alert(`A divisão é ${div}`)
alert(`O resto é ${rest}`)

if (numberOne === numberTwo) {
  alert("Os números inseridos são iguais")
}
else {
  alert("Os números inseridos são diferentes")
} 

if (sum % 2 === 0) {
  alert (`A soma dos dois é par: ${sum}`)
}
else {
  alert (`A soma dos dois é ímpar: ${sum}`)
}
 
