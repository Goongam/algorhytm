//골드바흐 파티션
let input;
try {
    input= require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
} catch (error) {
input =
`5
4
8
10
12
120`.split('\n');
}
input = input.map( i => +i);

input.shift();

const NUM = 1000000;
let arr = new Array(NUM);
for(let i = 0; i <= NUM ; i++){
    arr[i] = i;
}
arr[0] = undefined;
arr[1] = undefined;
for(let i = 2; i <= NUM ; i++){
    let n = i;
    if(!n) continue;
    while(n <= NUM){
        n += i;
        arr[n] = undefined;
    }
}

let result = [];
input.forEach((num)=>{
    let parti = 0;
    for(let i = 1 ; i <= num/2; i += 1){
        if(arr[i] && arr[num - i]) parti++;
    }
    
    result.push(parti);
    
});

console.log(result.join('\n'));
