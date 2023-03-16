//차이를 최댈호
let input;
try {
    input= require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
} catch (error) {
input =
`7 1 2 3 4 5 6 7
8 1 2 3 5 8 13 21 34
0`.trim().split('\n');
}


let visit = [];
let arr = [];
let nums;
let length;
let result = [];

function dfs(index, count){
    if(count > 6) {
        result.push(arr.join(' '));        
        return;
    }
    // console.log(index, count);
    
    for(let i = index; i < length; i++){
        if(visit[i]) continue;
        visit[i] = true;

        arr.push(nums[i]);
        dfs(i, count+1);
        arr.pop();

        visit[i] = false;
    }
}


let result2 = [];
input.forEach((line) => {
    if(line === '0') return;

    nums = line.split(' ').map(n => +n);
    length = nums.shift();
    visit = new Array(length+1).fill(false);
    arr = [];
    result = [];

    
    dfs(0, 1);
    result2.push(result.join('\n'));
    
});

console.log(result2.join('\n\n'));
