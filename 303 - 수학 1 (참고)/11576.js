//Base Conversion
let input;
try {
    input= require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
} catch (error) {
input =
`17 8
1
0`.trim().split('\n');
}

let Adigit = +input[0].split(' ')[0];
let Bdigit = +input[0].split(' ')[1];

let Anumbers = input[2].split(' ');

//A -> 10진법
let Ato10 = 0;
Anumbers.reverse().forEach((num, index) => {
    let n = +num;
    Ato10 += n * (Adigit ** index);
});

// 10진법A -> B진법
let result = [];
do{
    result.push(Ato10 % Bdigit);
    Ato10 = Math.floor(Ato10 / Bdigit);
}while(Ato10);

console.log(result.reverse().join(' '));
