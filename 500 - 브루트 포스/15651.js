//일곱 난쟁이
let input;
try {
    input= require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
} catch (error) {
input =
`7 7`.trim().split(' ');
}

const n = +input.shift();
const m = +input.shift();

let arr = [];

let result = [];

function dfs(count){

    if(count > m){
        result.push(arr.join(' '));
        return;
    }

    for(let i = 1 ; i <= n ; i++){
        arr.push(i);
        dfs(count+1);
        arr.pop();
    }
}

dfs(1);

console.log(result.join('\n'));