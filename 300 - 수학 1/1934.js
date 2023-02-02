//최대공약수와 최소공배수 **유클리드 호제법으로 풀어보기
let input= require('fs').readFileSync('/dev/stdin').toString().split('\n');

let result = [];

for(let i = 1; i < input.length-1 ; i++){
    
    let A = +input[i].split(' ')[0];
    let B = +input[i].split(' ')[1];

    let AB = A*B;

    let tmp;
    while(B !== 0){
        tmp = A % B;
        A = B;
        B = tmp;
    }
    // console.log(A);
    result.push(AB / A);
}

console.log(result.join('\n'));