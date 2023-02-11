//진법 변환 2
let input;
try {
    input= require('fs').readFileSync('/dev/stdin').toString().trim();
} catch (error) {
input =
`1`.trim();
}

input = +input;
let count = new Array(input+1).fill(0);

for(let i = 2; i <= input ; i++){
    //-1 했을 때의 횟수
    let plus1 = count[i -1] + 1;

    // /2 했을 때의 횟수
    let division2 = Infinity;
    if(i % 2 === 0) division2 = count[i/2] + 1;

    // /3 했을 때의 횟수
    let division3 = Infinity;
    if(i % 3 === 0) division3 = count[i/3] + 1;
    
    count[i] = Math.min(plus1, division2, division3);
    
}
console.log(count[input]);

