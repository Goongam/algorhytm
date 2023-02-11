//진법 변환 2
let input;
try {
    input= require('fs').readFileSync('/dev/stdin').toString().trim();
} catch (error) {
input =
`100`.trim();
}

input = +input;

let pivo = new Array(1000).fill(0);
pivo[0] = 1;
pivo[1] = 1;
pivo[2] = 2;

for(let i = 3; i <= input ; i++){
    pivo[i] = (pivo[i-1] + pivo[i-2])% 10007;
}

console.log(pivo[input]);
