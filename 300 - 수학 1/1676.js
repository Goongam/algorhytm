//팩토리얼 0의 개수
let input;
try {
    input= require('fs').readFileSync('/dev/stdin').toString().trim();
} catch (error) {
input =
`500`;
}
//5 25 125
input = +input;
let count = 0;
count += Math.floor(input / 5);
count += Math.floor(input / 25);
count += Math.floor(input / 125);



console.log(count);

