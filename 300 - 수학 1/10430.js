//나머지
let input;
try {
    input= require('fs').readFileSync('/dev/stdin').toString().split(' ');
} catch (error) {
input =
`5 8 4`.split(' ');
}
//첫째 줄에 (A+B)%C, 둘째 줄에 ((A%C) + (B%C))%C, 셋째 줄에 (A×B)%C, 넷째 줄에 ((A%C) × (B%C))%C

const A = +input[0];
const B = +input[1];
const C = +input[2];

let result = [];

result.push( (A+B)%C );
result.push( ((A%C) + (B%C))%C );
result.push( (A*B)%C );
result.push( ((A%C) * (B%C))%C );

console.log(result.join('\n'));