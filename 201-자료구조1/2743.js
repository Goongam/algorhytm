//단어길이재기
let input;
try {
    input= require('fs').readFileSync('/dev/stdin').toString().trim();
} catch (error) {
input =
`pulljimaBA`;
}

if(input) console.log(input.length);