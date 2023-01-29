//오큰수 - https://hooongs.tistory.com/329
let input;
try {
    input= require('fs').readFileSync('/dev/stdin').toString().split('\n');
} catch (error) {
input =
`7
1 1 2 3 4 2 1`.split('\n');
}

let length = +input.shift();
input = input[0].split(' ').map(v => +v);
let result = [];

for(let i = 0; i < length; i++){
    result[i] = -1;
}

let obj = {};
input.forEach((value) => {
    if(!obj[value]) obj[value] = 1;
    else obj[value] = obj[value]+1;
});


stack = [];
input.forEach((value, index) => {

    while(obj[value] > obj[input[stack[stack.length-1]]] && stack.length !== 0){
        result[stack.pop()] = value;
    }

    stack.push(index);
});



console.log(result.join(' '));