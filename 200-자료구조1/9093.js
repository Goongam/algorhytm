//스택
let array;
try {
    array = require('fs').readFileSync('/dev/stdin').toString().split('\n');
} catch (error) {
    array = `2
I am happy today
We want to win the first prize`.split('\n');
}

const length = array.shift();

function reverse(word){
    rword = "";
    for(let i = word.length-1 ; i >= 0; i--){
        rword += word[i];
    }
    return rword;
}

let result = [];

for(let i = 0; i < length ; i++){
   const a=  array[i].split(' ').map(word => reverse(word));
    result.push(a.join(' '));
}

console.log(result.join('\n'));