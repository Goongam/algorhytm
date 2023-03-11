//N과 M (1)
let input;
try {
    input= require('fs').readFileSync('/dev/stdin').toString().trim();
} catch (error) {
input =
`3`.trim();
}

input = +input;

let arr = [];
let visit = new Array(input).fill(false);

function dfs(count){
    if(count > input){
        console.log(arr.join(' '));
        
        return;
    }

    for(let i = 1; i <= input ; i++){
        if(visit[i]) continue;
        visit[i] = true;

        arr.push(i);
        dfs(count+1);
        arr.pop();

        visit[i] = false;
        
    }
}

dfs(1);

