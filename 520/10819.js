//차이를 최댈호
let input;
try {
    input= require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
} catch (error) {
input =
`6
20 1 15 8 4 10`.trim().split('\n');
}

let length = +input.shift();
let nums = input.shift().split(' ').map(n => +n);

let visit = new Array(length+1).fill(false);
let arr = [];

let max = 0;
function dfs(count){

    if(count > length){
        let num = 0;
        for(let i = 1; i < length; i++){
            num += Math.abs(arr[i-1] - arr[i]);
        }
        if(max < num) max = num;
            
        return;
    }

    for(let i = 0; i < length; i++){
 
        if(visit[i]) continue;
        visit[i] = true;

        arr.push(nums[i]);
        dfs(count+1);
        arr.pop();
        
        visit[i] = false;
    }
}

dfs(1);

console.log(max);