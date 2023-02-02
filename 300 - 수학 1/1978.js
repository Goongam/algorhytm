//소수찾기
let input;
try {
    input= require('fs').readFileSync('/dev/stdin').toString().split('\n');
} catch (error) {
input =
`4
1 3 5 7`.split('\n');
}

const length = input.shift();
let result = [];
const NUMBER = 1000000;
let arr = new Array(NUMBER);
for(let i = 0; i < arr.length ; i++){
    arr[i] = i;
}



for(let i = 2; i < NUMBER; i++){
    let num = i;
    while(num < NUMBER){
        num += i;
        if(arr[num]) arr[num] = undefined;
    }
}
arr[0] = undefined;
arr[1] = undefined;

let count = 0;
input[0].split(' ').forEach( (num) => {
    if(arr[num]) count++;
});


console.log(count);