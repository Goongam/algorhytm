//후위표기식2
let input;
try {
    input= require('fs').readFileSync('/dev/stdin').toString().split('\n');
} catch (error) {
input =
`1
AA-
1`.split('\n');
}
const ALPHA = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = input.shift();
let expression = input.shift();
let arr = [];
let stack = [];
input.forEach((num, index)=>{
    arr[index] = num;
});

expression.split('').forEach( char => {
    if(char === '+'){
        stack.push(stack.pop()+stack.pop());
    }else if(char === '-'){
        let first = stack.pop();
        let second = stack.pop();
        stack.push(second-first);
    }else if(char === '*'){
        stack.push(stack.pop()*stack.pop());
    }else if(char === '/'){
        let first = stack.pop();
        let second = stack.pop();
        stack.push(second/first);
    }else{
        stack.push(+arr[ALPHA.indexOf(char)]);
    }
} );

console.log(stack.pop().toFixed(2));
