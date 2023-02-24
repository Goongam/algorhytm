//동물원
let input;
try {
    input= require('fs').readFileSync('/dev/stdin').toString().trim();
} catch (error) {
input =
`3`.trim();
}

input = +input;

let arr = [3,7];

for(let i = 2; i < input; i++){
    arr[i] = (arr[i-1]*2 % 9901 + arr[i-2]) % 9901;
}

console.log(arr[input-1]);

