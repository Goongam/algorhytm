//오큰수 - https://hooongs.tistory.com/329
let input;
try {
    input= require('fs').readFileSync('/dev/stdin').toString().split('\n');
} catch (error) {
input =
`7
1 1 2 3 4 2 1`.split('\n');
}

let length = +input.shift();
input = input[0].split(' ').map(v => +v);
let result = [];





console.log(result.join(' '));