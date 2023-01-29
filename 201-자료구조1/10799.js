//쇠막대기
let input;
try {
    input= require('fs').readFileSync('/dev/stdin').toString();
} catch (error) {
input =
`(((()(()()))(())()))(()())`;
}

let result = 0;

input = input.split('');

let stack = 0;
let prev = "";


input.forEach((char) => {

    if(char === '('){
        stack++;

    }else if(char === ')'){
        stack--;
        if(prev === '(') result += stack;
        else result++;
    }

    prev = char;
});

console.log(result);