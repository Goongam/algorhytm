//N과 M (1)
let input;
try {
    input= require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
} catch (error) {
input =
`4
1 2 3 4`.trim().split('\n');
}


let length = +input.shift();
let nums = new Array(+length).fill(0).map((_,index) => index+1);

let find = input.shift().split(' ').map(n => +n);

let visit = new Array(+length).fill(false);
visit[0] = undefined;
let result = [];
let arr = [];

find.forEach(n => visit[n] = true);

// 중복을 허용하지 않는 도시의 개수만큼 count가 있는 재귀 후 마지막 돌아오는 비용만 더해줌.
// ex) A->B, A->C, A->D  /   B->C, B->D   /   C->B, C->D ...

