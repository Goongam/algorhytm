//문자열 분석
let input;
try {
    input= require('fs').readFileSync('/dev/stdin').toString().split('\n');
} catch (error) {
input =
`
This is String
SPACE    1    SPACE
 S a M p L e I n P u T     
0L1A2S3T4L5I6N7E8`.split('\n');
}
//소문자 대문자 숫자 공백

let result = [];
input.forEach((string) => {

    if(string === '') return;

    let Up = 0;
    let down = 0;
    let num = 0;
    let space = 0;

    string.split('').forEach(char => {
        if(char === ' ') space++;
        else if(!isNaN(+char)) num++;
        else if(char.charCodeAt() >= 65&&char.charCodeAt() <= 90) Up++;
        else if(char.charCodeAt() >= 97&&char.charCodeAt() <= 122) down++;
    });
    result.push(`${down} ${Up} ${num} ${space}`);
});

console.log(result.join('\n'));