//날짜 계산 
// 메모리 제한으로 못 품
let input;
try {
    input= require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
} catch (error) {
input =
`2 2 2`.trim().split(' ');
}
const nums = input.map(n=>Number(n));

let year = 1;
let otherYear = [1,1,1];
//15 28 19
while(otherYear[0] !== nums[0] || otherYear[1] !== nums[1] || otherYear[2] !== nums[2]){
    year++;
    otherYear[0] = otherYear[0]+1 >= 16 ? 1 : otherYear[0]+1; 
    otherYear[1] = otherYear[1]+1 >= 29 ? 1 : otherYear[1]+1; 
    otherYear[2] = otherYear[2]+1 >= 20 ? 1 : otherYear[2]+1; 

}

console.log(year);