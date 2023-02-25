//가장 큰 증가하는 부분 수열
let input;
try {
    input= require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
} catch (error) {
input =
`6
10 30 10 20 20 10`.trim().split('\n');
}

const length = +input.shift();
const nums = input.shift().split(' ').map(n=>+n);

let arr = [];
arr[0] = 1;

for(let i = 1; i < length ; i++){
    let max = 0;
    for(let j = 0; j < arr.length ; j++){
        if(nums[i] < nums[j] && max < arr[j]){
            max = arr[j];
        }
    }

    arr[i] = max+1;

}

console.log(Math.max(...arr));
