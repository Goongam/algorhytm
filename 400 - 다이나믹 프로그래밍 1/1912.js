//연속합
let input;
try {
    input= require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
} catch (error) {
input =
`5
-1 -2 -3 -4 -5`.trim().split('\n');
}

const length = input.shift();
const nums = input[0].split(' ').map(n=>Number(n));

let arr = [];
arr[0] = nums[0];

for(let i = 1; i < nums.length ; i++){
    arr[i] = arr[i-1] + nums[i] < nums[i] ? nums[i] : arr[i-1] + nums[i];
}

console.log(Math.max(...arr));
