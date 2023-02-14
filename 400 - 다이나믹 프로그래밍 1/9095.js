//1,2,3더하기
let input;
try {
    input= require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
} catch (error) {
input =
`3
`.split('\n');
}

let length = input.shift();
let arr = new Array(100).fill(0);
arr[0] = 0;
arr[1] = 1;
arr[2] = 2;
arr[3] = 4;


for(let i = 4; i <= 100; i++){
    arr[i] = arr[i-1] + arr[i-2] + arr[i-3];
}

let result = [];
input.forEach((num)=>{
    num = +num;
    result.push(arr[num]);
    
});

console.log(result.join('\n'));
