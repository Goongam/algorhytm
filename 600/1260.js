let input;
try {
    input= require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
} catch (error) {
input =
`4 5 1
1 2
1 3
1 4
2 4
3 4`.trim().split('\n');
}

let firstLine = input.shift();
const AllnodeCount = +firstLine.split(' ')[0];
const startNode = +firstLine.split(' ')[2];

let graph = Array.from({length:AllnodeCount+1}, ()=>Array(0));


input.forEach((line)=>{
    let start = +line.split(' ')[0];
    let end = +line.split(' ')[1];

    graph[start].push(end);
    graph[end].push(start);
})

graph.forEach((node)=>{
    node.sort((a,b)=>a-b);
})


let arr = [];
let visit = [];

function dfs(node){
  
    visit[node] = true;
    arr.push(node);

    for(let i = 0 ; i < graph[node].length; i++){
        let nextNode = graph[node][i];
        if(visit[nextNode]) continue;
        dfs(nextNode);
    }



}

let arrbfs = [];
let visit2 = new Set();
function bfs(startNode){
    let queue = [startNode];

    while(queue.length > 0){
        const currentNode = queue.shift();
        if(visit2.has(currentNode)) continue;

        arrbfs.push(currentNode);
        visit2.add(currentNode);

        for(let i = 0; i < graph[currentNode].length; i++){
            queue.push(graph[currentNode][i]);
        }

    }
}

dfs(startNode);
console.log(arr.join(' '));
bfs(startNode);
console.log(arrbfs.join(' '));
