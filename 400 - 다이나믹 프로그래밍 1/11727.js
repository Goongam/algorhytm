//2xn 타일링 2
let input;
try {
    input= require('fs').readFileSync('/dev/stdin').toString().trim();
} catch (error) {
input =
`100`.trim();
}

input = +input;

let arr = new Array(1000);
arr[0] = 1;
arr[1] = 1;

for(let i = 2; i <= input; i++){
    arr[i] = (arr[i-1] + arr[i-2]*2) % 10_007;
}

console.log(arr[input]);


