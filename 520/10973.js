//N과 M (1)
let input;
try {
    input= require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
} catch (error) {
input =
`4
1 2 3 4`.trim().split('\n');
}

//해당 수를 지우고 해당 수보다 작은 수 중 비어있는 수 까지 반복,이후 내림차순으로 없는 수들을 써내려감

let length = +input.shift();
let nums = input.shift().split(' ').map(n => +n);

let visit = new Array(length+1).fill(true);

const first = new Array(length).fill(0).map((_, index) => index+1);

if(first.join(' ') === nums.join(' ')){
    console.log(-1);
    return;
}


function dfs(index){
    const currendNum = nums[index];

    visit[currendNum] = false;
    nums[index] = 0;

    for(let i = currendNum-1; i >= 1; i-- ){
        if(visit[i]) continue;

        nums[index] = i;
        visit[i] = true;
        return;
    }
    dfs(index-1);

    for(let i = length; i >= 1; i--){
        if(visit[i]) continue;

        nums[index] = i;
        visit[i] = true;
        break;
    }
}

dfs(length-1);

console.log(nums.join(' '));

