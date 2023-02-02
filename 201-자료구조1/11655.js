//ROT13
let input;
try {
    input= require('fs').readFileSync('/dev/stdin').toString();
} catch (error) {
input =
` One is 1 `;
}
const down = 'abcdefghijklmnopqrstuvwxyz';
const up = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

let result = [];

input.split('').forEach(char => {
    if('A' <= char && char <= 'Z' ){
        result.push( up[(up.indexOf(char)+13) % 26]);
    }else if('a' <= char && char <= 'z'){
       result.push( down[(down.indexOf(char)+13) % 26]);
    }else if(char === ' '){
        result.push(' ');
    }else if('0' <= char && char <= '9'){
        result.push(char);
    }
});

if(result.length) console.log(result.join(''));

