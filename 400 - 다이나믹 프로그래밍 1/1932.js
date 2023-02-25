//정수 삼각형
let input;
try {
    input= require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
} catch (error) {
input =
`5
7
3 8
8 1 0
2 7 4 4
4 5 2 6 5`.trim().split('\n');
}
input.shift();
input = input.map(arr => arr.split(' ').map(n => +n));


for(let i = 1; i < input.length; i++){
    for(let j = 0; j < input[i].length; j++){
        input[i][j] = Math.max(input[i-1][j-1] ?? 0, input[i-1][j] ?? 0)+input[i][j];
    }
}

console.log(Math.max(...input.pop()));
