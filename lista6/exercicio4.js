let input = require('readline-sync');

let num1 = input.questionInt("Digite o numero da sua tabuada:")
let multi = 1

while(multi<=10){
    console.log(`${num1} x ${multi} = ${num1 * multi}`);
    multi++
    
    
}
