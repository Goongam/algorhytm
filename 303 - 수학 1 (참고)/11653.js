//소인수분해
let input;
try {
    input= require('fs').readFileSync('/dev/stdin').toString().trim();
} catch (error) {
input =
`9991`.trim();
}

let NUM = 10_000_000;
let arr = new Array(NUM);
for(let i = 0; i < NUM; i++){
    arr[i] = i;
}

for(let i = 2; i < NUM; i++){
    let n = i;
    if(!arr[n]) continue;

    while(n <= NUM){
        n += i;
        arr[n] = undefined;
    }
}
// arr[0] = '0';
arr[1] = undefined;


let decimals = arr.filter((num)=>num);
// console.log(decimals);

let result = [];
input = +input;
let index = 0;
while(input !== 1){
    
    if(input % decimals[index] === 0){
        input /= decimals[index];
        result.push(decimals[index]);
        
    }else{
        index++;
    }

}

if(result.length) console.log(result.join('\n'));
