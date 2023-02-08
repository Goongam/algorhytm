//GCD 합 
let input;
try {
    input= require('fs').readFileSync('/dev/stdin').toString().split('\n');
} catch (error) {
input =
`1
0`.split('\n');
}

function GCD(a, b){
    while(a !== 0){
        let tmp = a;
        a = b % a;
        b = tmp;
    }
    return b;
}

let result = [];

const length = input.shift();

input.forEach((line)=>{
    const sp = line.split(' ').map(a => +a);
    const len = sp.shift();

    if(len === 0 ) return;
    

    let sum = 0;
    for(let i = 0; i < len; i++){
        for(let j = i+1; j < len ; j++){
            sum += GCD(sp[i], sp[j]);
        }
    }

    result.push(sum);
    
    
});

if(result.length) console.log(result.join('\n'));

