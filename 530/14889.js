let input;
try {
    input= require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
} catch (error) {
input =
`8
0 5 4 5 4 5 4 5
4 0 5 1 2 3 4 5
9 8 0 1 2 3 1 2
9 9 9 0 9 9 9 9
1 1 1 1 0 1 1 1
8 7 6 5 4 0 3 2
9 1 9 1 9 1 0 9
6 5 4 3 2 1 9 0`.trim().split('\n');
}

let length = +input.shift();
let stats = input.map(line => line.split(' ').map(n => +n));
let visit = [];
let arr = [];

let copyArr = [];

let sum = 0;
let visit2 = [];
let printarr2 = [];
function calc(count){
    if(count > 2){
        
        sum += stats[printarr2[0]][printarr2[1]];
        // console.log(copyArr, printarr2, stats[printarr2[0]][printarr2[1]]);


        return;
    }

    for(let i = 0; i < copyArr.length; i++){
        if(visit2[copyArr[i]]) continue
        visit2[copyArr[i]] = true;

        printarr2.push(copyArr[i]);
        calc(count+1);
        printarr2.pop();

        visit2[copyArr[i]] = false;
    }
}

let min = Infinity;
function dfs(index, count){
    if(count > length/2){
        sum =  0;
        //team1 배열
        copyArr = arr;
        calc(1);
        let team1 = sum;


        sum = 0;


        copyArr = new Array(length).fill(0).map((_,i)=>i).filter(n => !arr.includes(n));
        calc(1);

        let team2 = sum;

        let diff = Math.abs(team1 - team2);
        if(min > diff) min = diff;

        
        return;
    }

    for(let i = index; i < length; i++){
        if(visit[i]) continue;
        visit[i] = true;

        arr.push(i);
        dfs(i, count+1);
        arr.pop();
        
        visit[i] = false;
    }
}

dfs(0, 1);

console.log(min);
