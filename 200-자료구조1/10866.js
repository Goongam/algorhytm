//에디터
let input;
try {
    input= require('fs').readFileSync('/dev/stdin').toString().split('\n');
} catch (error) {
input =
`22
front
back
pop_front
pop_back
push_front 1
front
pop_back
push_back 2
back
pop_front
push_front 10
push_front 333
front
back
pop_back
pop_back
push_back 20
push_back 1234
front
back
pop_back
pop_back`
.split('\n');
}
let result = [];


let length = +input.shift();


let queue = [];
for(let i = 0; i < length; i++){

    switch(input[i].split(' ')[0]){
        case 'push_front':
            queue = [input[i].split(' ')[1], ...queue];
            break;
        case 'push_back':
            queue.push(input[i].split(' ')[1])
            break;
        case 'pop_front':
            if(queue.length !== 0) result.push(queue.shift());
            else result.push(-1);
            break;
        case 'pop_back':
            if(queue.length !== 0) result.push(queue.pop());
            else result.push(-1);
            break;
        case 'size':
            result.push(queue.length);
            break;
        case 'empty':
            result.push(queue.length === 0 ? 1 : 0);
            break;
        case 'front':
            if(queue.length !== 0) result.push(queue[0]);
            else result.push(-1);
            break;
        case 'back':
            if(queue.length !== 0) result.push(queue[queue.length-1]);
            else result.push(-1);
            break;

    }

}




console.log(result.join('\n'));