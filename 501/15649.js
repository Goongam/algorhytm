//수 이어 쓰기
let input;
try {
    input= require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
} catch (error) {
input =
`4 4`.trim().split(' ');
}

const n = +input.shift();
const m = +input.shift();

let visit = new Array(n).fill(false);

function dfs(index, count){

    if(count === m){//종료
        let print = [];
        visit.forEach((isVisit, index) => {if(isVisit) print.push(index)});
        console.log(print);
        
        return;
    }

    for(let i = index; i <= n ; i++){
        if(visit[i]) continue;
        visit[i] = true;

        dfs(i,count+1);
        visit[i] = false;
    }
}

dfs(1,1);