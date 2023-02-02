//접미사 배열
let input;
try {
    input= require('fs').readFileSync('/dev/stdin').toString().trim();
} catch (error) {
input =
`a b`.trim();
}

let suffixs = [];

for(let i = 0; i < input.length ; i++){

    suffixs.push(input.slice(i, input.length)); 

}

if(suffixs.length) console.log(suffixs.sort().join('\n'));
