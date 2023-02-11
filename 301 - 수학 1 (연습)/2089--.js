//-2
let input;
try {
    input= require('fs').readFileSync('/dev/stdin').toString().trim();
} catch (error) {
input =
`0`.trim();
}

let result = [];
input = +input;


while(input){

    let remain = input % -2;

    if(Math.abs(remain) === 1){
        input = Math.floor(input / -2) + 1;
        result.push(1);
    }else{
        input = Math.floor(input / -2);
        result.push(0);
    }

   
    
}

console.log(result.length ? result.reverse().join('') : 0);
