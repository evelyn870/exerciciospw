let input = require('readline-sync');

do {
  num1 = input.questionInt("Digite um numero maior que 20:");
} while (num1 < 20);

for (let resp = num1 - 1; resp > 1; resp--) {
    console.log(resp);
}