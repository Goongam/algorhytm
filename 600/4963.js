let input;
try {
    input= require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
} catch (error) {
input =
`1 1
0
2 2
0 1
1 0
3 2
1 1 1
1 1 1
5 4
1 0 1 0 0
1 0 0 0 0
1 0 1 0 1
1 0 0 1 0
5 4
1 1 1 0 1
1 0 1 0 1
1 0 1 0 1
1 0 1 1 1
5 5
1 0 1 0 1
0 0 0 0 0
1 0 1 0 1
0 0 0 0 0
1 0 1 0 1
0 0`.trim().split('\n');
}


const dir = [[-1,0],[-1,1],[0,1],[1,1],[1,0],[1,-1],[0,-1],[-1,-1]];

let result = [];
function solve(map, w, h){
    function dfs(n, m){
        if(n < 0 || n >= h || m < 0 || m >= w){
            return;
        }
        if(map[n][m] === 0) return;
        
        map[n][m] = 0;
        // console.log();
        //8방향
        for(let i = 0 ; i < dir.length; i++){
            dfs(n+dir[i][0], m+dir[i][1]);
        }
    }
    
    let count = 0;
    
    for(let i = 0; i < h; i++){
        for(let j = 0; j < w; j++){  
            if(map[i][j] === 1){
                count++;
                dfs(i, j);
            }
        }
    }
    result.push(count);
}

while(true){
    let map = [];
    let [w, h] = input.shift().split(' ').map(Number);
    for(let i = 0;i < h;i++){
        map.push(input.shift().split(' ').map(Number));
    }
    if(w === 0 && h === 0) break;
    solve(map, w, h);
}

console.log(result.join('\n'));
