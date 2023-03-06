//m n 4
let input;
try {
    input= require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
} catch (error) {
input =
`8 8`.trim().split(' ');
}

const n = +input.shift();
const m = +input.shift();
let arr = [];

function dfs(index, count){
    if(count > m){
        console.log(arr.join(' '));
        return;
    }

    for(let i = index; i <= n; i++){
        arr.push(i);
        dfs(i, count+1);
        arr.pop();
    }
}

dfs(1,1);

