//가장 큰 증가하는 부분 수열
let input;
try {
    input= require('fs').readFileSync('/dev/stdin').toString().trim();
} catch (error) {
input =
`1`.trim();
}

const length = +input;

let arr = [];

arr[0] = 1;
arr[1] = 1;

for(let i = 2; i <= length; i++){
   
    let sum = 0;
    for(let j = i; j >= 4; j-=2){
        sum += (arr[i-j] ?? 0) * 2;
    }
    sum += (arr[i-2] ?? 0) * 3;
    arr[i] = sum;
}

if(length % 2 === 1) console.log(0);
else console.log(arr[length]);

