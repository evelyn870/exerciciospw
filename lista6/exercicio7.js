let input = require('readline-sync');

do {
  num1 = input.questionInt("Digite um numero maior que 10:");
} while (num1 < 10);

do {
    num2 = input.questionInt("Digite numero menor que 5:");
} while (num2 > 5);

console.log(num1);
console.log(num2);