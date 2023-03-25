let input;
try {
    input= require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
} catch (error) {
input =
`6 5
1 2
2 5
5 1
3 4
4 6`.trim().split('\n');
}

// let [nodeCount, m] = input.shift().split(" ").map((e)=>+e);
const nodeCount = +input.shift().split(' ')[0];
let graph = Array.from({length:nodeCount+1}, ()=>Array(0));

input.forEach((line)=>{
    let start = +line.split(' ')[0];
    let end = +line.split(' ')[1];

    graph[start].push(end);
    graph[end].push(start);
})

let visit = new Array(nodeCount+1);
let arr = [];

function dfs(node){
    visit[node] = true;

    for(let i = 0; i < graph[node].length; i++){
        const nextNode = graph[node][i];
        if(visit[nextNode]) continue;
        dfs(nextNode);
    }
}


let result = 0;
for(let i = 1; i <= nodeCount; i++){
    if(!visit[i]){
        dfs(i);
        result++;
    }
}

console.log(result);


