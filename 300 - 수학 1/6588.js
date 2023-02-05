//골드바흐의 추측
let input;
try {
    input= require('fs').readFileSync('/dev/stdin').toString().split('\n');
} catch (error) {
input =
`8
20
42
0`.split('\n');
}
//TODO: 2~해당 숫자사이의 숫자를 하나씩 빼서 나온 결과가 소수이면 O, 아니면 X 를 반복해서 b-a가 가장 큰것 하나 출력
input = input.map(i => +i);
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




input.forEach( (num) => {
    if(num === 0) return;

    let wrong = true;
    for(let i = 3; i <= num / 2 ; i+=2){
        
        if(arr[num - i] && arr[i]) {
            result.push(`${num} = ${i} + ${num-i}`);
            wrong = false;
            break;
        }
    }

    if(wrong) result.push(`Goldbach's conjecture is wrong.`);
    
});

console.log(result.join('\n'));
