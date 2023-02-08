//2진수 8진수
let input;
try {
    input= require('fs').readFileSync('/dev/stdin').toString().trim();
} catch (error) {
input =
`001`.trim();
}


let result = [];
let stack = [];
input.split('').reverse().forEach((num)=>{
    stack.push(num);

   
    if(stack.length % 3 === 0){// 출력
        let print = 0;
        if(stack[0] === '1') print += 1;
        if(stack[1] === '1') print += 2;
        if(stack[2] === '1') print += 4;
        result.push(print);
        stack = [];
        
    }

});
if(stack.length){
    let print = 0;
    if(stack[0] === '1') print += 1;
    if(stack[1] === '1') print += 2;
    if(stack[2] === '1') print += 4;
    result.push(print);
}

console.log(result.reverse().join(''));
