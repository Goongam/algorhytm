//숨바꼭질
let input;
try {
    input= require('fs').readFileSync('/dev/stdin').toString().split('\n');
} catch (error) {
input =
`1 0
0`.split('\n');
}

let line1 = input[0];
let line2 = input[1];

const N = line1.split(' ')[0];
const Subin = line1.split(' ')[1];

function gcd(a, b){
    while(a !== 0){
        let tmp = a;
        a = b % a;
        b = tmp;
    }
    return b;
}

let distances = [];
line2.split(' ').map(a => +a).forEach((A)=>{
    distances.push(Math.abs(A - Subin));
});

console.log(distances.reduce((a, b) => gcd(a,b)));


