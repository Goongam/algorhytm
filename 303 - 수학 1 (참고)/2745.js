//진법 변환
let input;
try {
    input= require('fs').readFileSync('/dev/stdin').toString().trim();
} catch (error) {
input =
`0 36`.trim();
}

let result = 0;
let arr = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let ten = input.split(' ')[0];
let digit = +input.split(' ')[1];

ten.split('').reverse().forEach((char, index) => {
    result += arr.indexOf(char) * (digit ** index);
});


console.log(result);
