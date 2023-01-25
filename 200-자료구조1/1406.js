//에디터
let input;
try {
    input= require('fs').readFileSync('/dev/stdin').toString().split('\n');
} catch (error) {
input =
`abcd
3
P x
L
P y`
.split('\n');
}
let result = [];


let string = input.shift();
let length = +input.shift();

string = string.split('');

let lstack = [];
let rstack = [];

string.forEach(element => {
    lstack.push(element);
});


for(let i = 0; i < length; i++){
    switch(input[i].split(' ')[0]){
        
        case 'L':
            if(lstack.length === 0) continue;
            rstack.push(lstack.pop());
            break;
        case 'D':
            if(rstack.length === 0) continue;
            lstack.push(rstack.pop());
            break;
        case 'B':
            lstack.pop();
            break;
        case 'P':
            lstack.push(input[i].split(' ')[1]);
            break;
                                
    }
}




console.log(lstack.join('') + rstack.reverse().join(''));