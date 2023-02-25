//연속합
let input;
try {
    input= require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
} catch (error) {
input =
`10
10 -4 3 1 5 6 -35 12 21 -1`.trim().split('\n');
}
//hint 배열 2개
const length = input.shift();
const nums = input[0].split(' ').map(n=>Number(n));


