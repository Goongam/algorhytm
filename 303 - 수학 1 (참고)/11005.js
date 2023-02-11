//진법 변환 2
let input;
try {
    input= require('fs').readFileSync('/dev/stdin').toString().trim();
} catch (error) {
input =
`37 36`.trim();
}

let result = [];
let arr = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let ten = +input.split(' ')[0];
let digit = +input.split(' ')[1];

do{
    result.push(arr[ten % digit]);
    ten = Math.floor(ten / digit);
}while(ten)




console.log(result.reverse().join(''));
