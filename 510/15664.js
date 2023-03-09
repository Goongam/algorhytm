//m n 5
let input;
try {
    input= require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
} catch (error) {
input =
`4 4
1 1 2 2`.trim().split('\n');
}
let line1 = input.shift();

const n = +line1.split(' ')[0];
const m = +line1.split(' ')[1];


let arr = [];
let visit = new Array(n).fill(false);

let nums = input.shift().split(' ').map(n => +n).sort((a,b) => a - b);
let result = [];

let cache = [];

function dfs(index, count){
    if(count > m){
        let print = arr.join(' ');
        result.push(print);
        return;
    }

    for(let i = index ; i < n ; i++){
        if(visit[i]) continue;
        visit[i] = true;

        arr.push(nums[i]);
        dfs(i, count+1);
        arr.pop();
        visit[i] = false;
    }
}

dfs(0, 1);

console.log([...new Set(result)].join('\n'));
