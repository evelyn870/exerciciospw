let input = require('readline-sync');

let num1;
do {
    num1 = input.questionInt("Digite numero menor que 5: ");
} while (num1 > 5);

for (let resp = num1 + 1; resp <= 20; resp++) {
    if (resp % 2 === 0) {
        console.log(resp);
    }
}
