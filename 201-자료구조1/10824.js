//네 수
let input;
try {
    input= require('fs').readFileSync('/dev/stdin').toString().split(' ');
} catch (error) {
input =
`10 20 30 40`.split(' ');
}



let result = +(input[0]+input[1]) + +(input[2]+input[3])

console.log(result);