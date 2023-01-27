//에디터
let input;
try {
    input= require('fs').readFileSync('/dev/stdin').toString().split('\n');
} catch (error) {
input =
`15
push 1
push 2
front
back
size
empty
pop
pop
pop
size
empty
pop
push 3
empty
front`
.split('\n');
}
let result = [];


let length = input.shift();


let queue = [];
for(let i = 0; i < length; i++){

    

    switch(input[i].split(' ')[0]){
        
        case 'push':
            queue.push(input[i].split(' ')[1]);
            break;
        case 'pop':
            if(queue.length !== 0) result.push(queue.shift());
            else result.push(-1);
            break;
        case 'size':
            result.push(queue.length);
            break;
        case 'empty':
            result.push(queue.length===0 ? 1 : 0);
            break;
        case 'front':
            
            if(queue.length === 0) result.push(-1);
            else result.push(queue[0]);
            break;
        case 'back':
            if(queue.length === 0) result.push(-1);
            else result.push(queue[queue.length-1]);
            break;
                                
    }
}




console.log(result.join('\n'));