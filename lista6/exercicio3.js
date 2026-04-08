let input = require('readline-sync');

let num1 = input.questionInt("Digite seu numero Num1:")
let num2 = input.questionInt('Digite seu numero Num2:')

if (num1 > num2) {
    let resp1 = num1;
    num1 = num2;
    num2 = resp1;
}

for (let num = num1 + 1; num < num2; num++) {
    console.log(num);
}