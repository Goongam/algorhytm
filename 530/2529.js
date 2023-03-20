let input;
try {
    input= require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
} catch (error) {
input =
`9
> < < < > > > < <`.trim().split('\n');
}

let length = +input.shift()+1;
let 부등호들 = input.shift().split(' ');

let arr = [];
let visit = [];


let result = [];

function dfs(count){
    if(count > length){
        result.push(arr.join(''));
        return;
    }

    for(let i = 0 ; i <= 9 ; i++){
        if(visit[i]) continue;
        
        if(arr.length >= 1){
            let index = arr.length-1;
            let 부등호 = 부등호들[index];
            if(부등호 === '<' && i < arr[index]){     
                continue;
            }else if(부등호 === '>' && i > arr[index]){
                continue;
            }
   
        }

        visit[i] = true;

        arr.push(i);
        dfs(count+1);
        arr.pop();

        visit[i] = false;
    }

}


dfs(1);


console.log(result.pop());
console.log(result[0]);
