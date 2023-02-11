//8진수 2진수 
let input;
try {
    input= require('fs').readFileSync('/dev/stdin').toString().trim();
} catch (error) {
input =
`333334`.trim();
}

let result = [];

input.split('').reverse().forEach((n)=>{
    n = +n;
    let stack = [];
    
    for(let i = 2; i >= 0; i--){
        let minus = n - 2 ** i;
        if(minus >= 0){
            stack.push(1);
            n = minus;
        }
        else stack.push(0);
    }
    result.push(stack.join(''));
    

});

result = result.reverse().join('');
console.log(result.slice(result.indexOf('1'), result.length));
