//수 이어 쓰기
let input;
try {
    input= require('fs').readFileSync('/dev/stdin').toString().trim();
} catch (error) {
input =
`1050`.trim();
}

let arr = [];
arr[0] = 0;

for(let i = 1; i < input.length; i++){
    arr[i] = i * (9 * 10**(i-1))
}

let result = arr.slice(0,input.length).reduce((a,b)=>a+b);

let remainNum = +input - (10 ** (input.length-1)) + 1;

result += remainNum * input.length;

console.log(result);
