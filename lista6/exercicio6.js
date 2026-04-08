let input = require('readline-sync');

do {
  num1 = input.questionInt("Digite seu numero Num1:");
} while (num1 > 10);

console.log(num1);