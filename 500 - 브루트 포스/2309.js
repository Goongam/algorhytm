//일곱 난쟁이
let input;
try {
    input= require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
} catch (error) {
input =
`20
7
23
19
10
15
25
8
13`.trim().split('\n');
}
input = input.map(n => +n);
let sum = input.reduce((a,b)=>a+b);

let result = [];

for(let i = 0 ; i < input.length ; i++){
    for(let j = i+1; j < input.length; j++){
        if(sum - input[i] - input[j] === 100) { 
            input.forEach((num, index)=>{
                if(index !== i && index !== j) result.push(num);
            
            });       
            console.log(result.sort((a,b)=>a-b).join('\n'));
            
            return;
        }
        
    }
}

