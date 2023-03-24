let input;
try {
    input= require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
} catch (error) {
input =
`5 4
0 1
1 2
2 3
3 0`.trim().split('\n');
}

let graph = Array.from({length:+input.shift().split(' ')[0]}, ()=>Array(0));
input.forEach((line) => {
    let start = +line.split(' ')[0];
    let end = +line.split(' ')[1];

    graph[start].push(end);
    graph[end].push(start);

});

let arr = [];

let visit = [];

let isTrue = 0;

// console.log(graph);

// console.log(graph);


function dfs(node, depth){  
    
    
    arr.push(node);
    if(depth === 5){
        // isTrue = 1;
        console.log(1);
        process.exit();

    }
    
    // console.log(arr);
    

    for(let i = 0; i < graph[node].length ; i++){
        if(visit[graph[node][i]]) continue;//visit[node]로 하면 의미없는 반복문을 돌기 때문에 시간초과
                                            //visit[node]를 사용하려면 반복문 밖에서 사용하면 된다

        visit[node] = true;
        dfs(graph[node][i], depth+1);
        visit[node] = false;
    }
    
    arr.pop(node);
}


for(let i = 0; i < graph.length; i++){
    // console.log(i);
    
    dfs(i, 1);
}

console.log(isTrue);
