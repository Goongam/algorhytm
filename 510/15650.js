//N과 M (2)
let input;
try {
    input= require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
} catch (error) {
input =
`3 1`.trim().split(' ');
}

const n = +input.shift();
const m = +input.shift();

let arr = [];

function dfs(index, count){
   
    if(count === m){
        console.log(arr.join(' '));
        return;
    }

    for(let i = index ; i <= n ; i++){
        arr[count] = i;
        dfs(i+1, count+1);
    }
}

dfs(1,0);
