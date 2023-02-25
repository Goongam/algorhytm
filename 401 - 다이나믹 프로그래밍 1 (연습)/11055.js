//가장 큰 증가하는 부분 수열
let input;
try {
    input= require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
} catch (error) {
input =
`10
1 100 2 50 60 3 5 6 7 8`.trim().split('\n');
}

const length = +input.shift();
const nums = input.shift().split(' ').map(n=>+n);


let arr = [];
arr[0] = nums[0];

for(let i = 1; i < length; i++){
    let max = 0;
    for(let j = 0; j < arr.length; j++){
        if(nums[j] < nums[i] && max < arr[j]) max = arr[j];
    }
    arr[i] = max + nums[i];
}

console.log(Math.max(...arr));
