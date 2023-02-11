//소인수분해
let input;
try {
    input= require('fs').readFileSync('/dev/stdin').toString().trim();
} catch (error) {
input =
`1`.trim();
}

let result = [];
input = +input;
let index = 2;

while(input !== 1){
    
    if(input % index === 0){
        input /= index;
        result.push(index);
        
    }else{
        index++;
    }

}

if(result.length) console.log(result.join('\n'));
