let input;
try {
    input= require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
} catch (error) {
input =
`7
3 10
5 20
1 10
1 20
2 15
4 40
2 200`.trim().split('\n');
}

const length = input.shift();
let time = [];
let reward = []
input.forEach(line => {
    time.push(+line.split(' ')[0]);
    reward.push(+line.split(' ')[1]);
})
let arr = [];
let max = 0;
function dfs(index){
    if(index >= length){
        // console.log(arr);
        let result;
        if(index > length) result = arr.slice(0, arr.length-1);
        else result = arr;
         
        if(result.length === 0) return;
        let t = result.map(n => reward[n]).reduce((a,b)=>a+b);
        // console.log(t);
        
        max = Math.max(max, t);

        return;
    }


    for(let i = index; i < length; i++){


        arr.push(i);     
        dfs(i+time[i]);
        arr.pop();
    }
}

dfs(0);

console.log(max);
