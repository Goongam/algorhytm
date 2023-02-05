//팩토리얼
let input;
try {
    input= require('fs').readFileSync('/dev/stdin').toString().trim();
} catch (error) {
input =
`10`;
}

input = +input;
let result = 1;
for(let i = input ; i > 0; i--){
    result *= i;
}


console.log(result);




// console.log(result);