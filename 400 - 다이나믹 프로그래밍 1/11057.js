//오르막수
let input;
try {
    input= require('fs').readFileSync('/dev/stdin').toString();
} catch (error) {
input =
`3`.trim();
}

input = +input;

let arr = [[1,1,1,1,1,1,1,1,1,1]];

for(let i = 1; i < input;i++){
    let tmparr = [0,0,0,0,0,0,0,0,0,0];
    for(let j = 0; j < 10; j++){
        
        tmparr[j] = arr[i-1].slice(j, 10).reduce((a,b)=>(a+b)% 10007) % 10007;
    }

    arr[i] = tmparr;
}

console.log(arr.pop().reduce((a,b)=>(a+b)%10007) );

