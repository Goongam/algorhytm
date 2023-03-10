//m n 5
let input;
try {
    input= require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
} catch (error) {
input =
`4 2
9 7 9 1`.trim().split('\n');
}
let line1 = input.shift();

const n = +line1.split(' ')[0];
const m = +line1.split(' ')[1];


let arr = [];


let nums = input.shift().split(' ').map(n => +n).sort((a,b) => a - b);
let result = [];

function dfs(count){
    if(count > m ){
        result.push(arr.join(' '));
        return;
    }

    for(let i = 0; i < n; i++){
        arr.push(nums[i]);
        dfs(count+1);
        arr.pop();
    }
}

dfs(1);

console.log([...new Set(result)].join('\n'));
