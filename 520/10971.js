//N과 M (1)
let input;
try {
    input= require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
} catch (error) {
input =
`4
0 10 15 20
5 0 9 10
6 13 0 12
8 8 9 0`.trim().split('\n');
}


let length = +input.shift();
let nums = new Array(+length).fill(0).map((_,index) => index+1);

let citys = input.map(line => line.split(' ').map(n => +n));

// console.log(citys);
//세로, 가로, 0 ~ length-1까지

let visit = new Array(+length).fill(false);

let result = [];
let arr = [];

// 중복을 허용하지 않는 도시의 개수만큼 count가 있는 재귀 후 마지막 돌아오는 비용만 더해줌.
// ex) A->B, A->C, A->D  /   B->C, B->D   /   C->B, C->D ...

let min = Infinity;

function dfs(count){
    if(count >= length){
        
        
       let sum = 0;
        for(let i = 1; i < length; i++){
            let cost = citys[arr[i]][arr[i-1]];
            if(cost === 0) return;
            sum += cost;
        }
        
        let cost = citys[arr[0]][arr[length-1]];
        if(cost === 0) return;
        sum += cost;
        
        if(min > sum) min = sum;
        
        return;
    }
// console.log(count);

    for(let i = 0; i < length; i++){
        if(visit[i]) continue;
        visit[i] = true;
        
        arr.push(i);
        dfs(count+1);
        arr.pop();

        visit[i] = false;
    }

}

dfs(0);

console.log(min);


