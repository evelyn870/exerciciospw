let input = require('readline-sync');

do {
  num1 = input.questionInt("Digite um numero entre cinco e dez:");
} while (num1 < 5 || num1 > 10);

console.log(num1);