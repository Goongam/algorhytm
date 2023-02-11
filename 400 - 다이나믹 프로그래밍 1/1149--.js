//RGB거리
let input;
try {
    input= require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
} catch (error) {
input =
`8
71 39 44
32 83 55
51 37 63
89 29 100
83 58 11
65 13 15
47 25 29
60 66 19`.trim().split('\n');
}

const N = input.shift();
input = input.map(line => line.split(' ').map(n => +n));

for(let i = 1; i < N ; i++){
    input[i][0] += Math.min(input[i-1][1], input[i-1][2]);
    input[i][1] += Math.min(input[i-1][0], input[i-1][2]);
    input[i][2] += Math.min(input[i-1][0], input[i-1][1]);
}

console.log(Math.min(...input[N-1]));

