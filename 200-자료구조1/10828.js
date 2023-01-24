//스택
let array;
try {
    array = require('fs').readFileSync('/dev/stdin').toString().split('\n');
} catch (error) {
    array = `7
pop
top
push 123
top
pop
top
pop`.split('\n');
}

const length = array.shift();
let newarr = [];
let result = [];

for(let i = 0; i < length; i++){
    // console.log(array[i]);
    switch (array[i].split(' ')[0]) {
        case 'push':
            newarr.push(array[i].split(' ')[1]);
            break;
        case 'pop':
            result.push(newarr.pop() ?? -1)
            break;
        case 'size':
            result.push(newarr.length);
            break;
        case 'empty':
            result.push(newarr.length ? 0 : 1);
            break;
        case 'top':
            result.push(newarr[newarr.length-1] ?? -1)
            break;
        default:

            break;
    }

}

console.log(result.join('\n'))