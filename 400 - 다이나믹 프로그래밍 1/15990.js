//1,2,3 더하기 5
let input;
try {
    input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
} catch (error) {
input =
`1
0`.split('\n');
}
const length = input.shift();
input = input.map(i => +i);
let max = Math.max(...input);
let arr = new Array(max);
arr[0] = {
    '1':0,
    '2':0,
    '3':0
}
arr[1] = {
    '1':1,
    '2':0,
    '3':0
}
arr[2] = {
    '1':0,
    '2':1,
    '3':0
}
arr[3] = {
    '1':1,
    '2':1,
    '3':1
}

for(let i = 4; i <= max; i++){
    arr[i] = {
        '1':(arr[i-1]['2']+arr[i-1]['3'])%1_000_000_009,
        '2':(arr[i-2]['1']+arr[i-2]['3'])%1_000_000_009,
        '3':(arr[i-3]['1']+arr[i-3]['2'])%1_000_000_009,
    }
    
    
}

let result = [];
input.forEach((num)=>{
    if(num !== 0) console.log((arr[num]['1']+arr[num]['2']+arr[num]['3'])%1_000_000_009);
});

// console.log(result.join('\n'));