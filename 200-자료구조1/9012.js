//괄호
let array;
try {
    array = require('fs').readFileSync('/dev/stdin').toString().split('\n');
} catch (error) {
array = 
`6
(())())
(((()())()
(()())((()))
((()()(()))(((())))()
()()()()(()()())()
(()((())()(`
.split('\n');
}

const length = array.shift();
let result = [];

for(let i = 0 ; i < length ; i ++){
    let cnt = 0;
    for(let s of array[i]){
        cnt += s === '(' ? 1 : -1;
        if(cnt < 0) break;
    }
    result.push(cnt === 0 ? 'YES' : 'NO'); 
}


console.log(result.join('\n'));