let input;
try {
    input= require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
} catch (error) {
input =
`10
1111111111
1000000001
1011111101
1010000101
1010110101
1010110101
1010000101
1011111101
1000000001
1111111111`.trim().split('\n');
}

const size = input.shift();
let map = input.map(line => line.split('').map(Number));

let count = 0;
function dfs(n, m){

    if(n < 0 || m < 0 || n >= size || m >= size) return; //맵 밖

    if(map[n][m] === 0) return; //벽

    count++;
    map[n][m] = 0;
    dfs(n-1,m); //위
    dfs(n,m+1); //오른쪽
    dfs(n+1,m); //아래
    dfs(n,m-1); //왼쪽
}
let 단지수 = 0;
let result = [];
for(let i = 0; i < size; i++){
    for(let j = 0; j < size ; j++){
        if(map[i][j] === 1){
            count = 0;
            단지수++;
            dfs(i,j);
            result.push(count);
        }
    }
}

console.log([단지수, ...result.sort((a,b) => a-b)].join('\n'));