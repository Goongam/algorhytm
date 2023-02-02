//최대공약수와 최소공배수 **유클리드 호제법으로 풀어보기
let input;
try {
    input= require('fs').readFileSync('/dev/stdin').toString().split(' ');
} catch (error) {
input =
`24 18`.split(' ');
}

let result = [];

const A = +input[0];
const B = +input[1];
const min = A < B ? A : B;

let 최대공약수 = 1;
for(let i = min ; i > 1 ; i--){
    if(A % i === 0 && B % i === 0) {
        최대공약수 = i;
        break;
    }
}



result.push(최대공약수);
result.push(A*B/최대공약수);

console.log(result.join('\n'));