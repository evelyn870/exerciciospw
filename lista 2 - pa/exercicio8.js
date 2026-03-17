let input = require('readline-sync');

let num1 = input.questionInt("Digite seu numero Num1:")
let num2 = input.questionInt('Digite seu numero Num2:')
let num3 = input.questionInt('Digite seu numero Num3:')

num1 = num1+10
num2 = num2-5
num3 = num3*2

console.log("O resultado do num1 é:", num1)
console.log("O resultado do num2 é:", num2)
console.log("O resultado do num3 é:", num3)