//골드바흐의 추측
let input;
try {
    input= require('fs').readFileSync('/dev/stdin').toString().split('\n');
} catch (error) {
input =
`4
1 3 5 7`.split('\n');
}
//TODO: 2~해당 숫자사이의 숫자를 하나씩 빼서 나온 결과가 소수이면 O, 아니면 X 를 반복해서 b-a가 가장 큰것 하나 출력
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