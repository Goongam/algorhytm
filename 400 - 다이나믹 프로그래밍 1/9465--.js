//스티커
let input;
try {
    input= require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
} catch (error) {
input =
`1
6
10 40 70 80 90 150
50 20 80 160 20 10`.trim().split('\n');
}
//50 70 160 150 => 430
//hint: dp 배열이 두개


