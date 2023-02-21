//제곱수의 합
let input;
try {
    input= require('fs').readFileSync('/dev/stdin').toString().trim();
} catch (error) {
input =
`13`.trim();
}


let num = +input;

let sqrtNums = [];
for(let i = 1; i*i <= num; i++){
    sqrtNums.push(i*i);
}
// console.log(sqrtNums);

let arr = [];

arr[0] = 0;
arr[1] = 1;

for(let i = 2; i <= num; i++){
    let tmparr = [];
    for(let j = 0; j < sqrtNums.length ; j++){
        if( 0 <= (i - sqrtNums[j]) ) tmparr.push(arr[i - sqrtNums[j]] + 1);
    }

    arr[i] = Math.min(...tmparr);
}

console.log(arr.pop());
