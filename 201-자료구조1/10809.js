//알파벳 찾기
let input;
try {
    input= require('fs').readFileSync('/dev/stdin').toString();
} catch (error) {
input =
`baekjoon`;
}

const ALPHA = "abcdefghijklmnopqrstuvwxyz";
let arr = new Array(26).fill(-1);

input.split('').forEach((char)=>{
    arr[ALPHA.indexOf(char)] = input.indexOf(char);
});

console.log(arr.join(' '));