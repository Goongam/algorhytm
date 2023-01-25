//스택 수열
let array;
try {
    array = require('fs').readFileSync('/dev/stdin').toString().split('\n');
} catch (error) {
array = 
`5
1
2
5
3
4`
.split('\n');
}

const length = array.shift();
let result = [];

let numarr = [];
let stack = [];

for(let i = 1; i <= length; i++ ){
    numarr[i-1] = i;
}

let pointer = 0;
for(let i = 0; i < length; i++){
    while(numarr[pointer] <= array[i] ){
        result.push('+');
        stack.push(numarr[pointer]);
        pointer++;
    }
    if(stack.pop() !== +array[i] ) {
        result = ["NO"];
        break;
    };
    result.push('-');
    
}


console.log(result.join('\n'));