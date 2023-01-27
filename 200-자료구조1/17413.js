//에디터
let input;
try {
    input= require('fs').readFileSync('/dev/stdin').toString();
} catch (error) {
input =
`<ab cd>ef gh<ij kl>`;
}
let result = [];

let tmp = [];

let isTag = false;

for(let i = 0; i < input.length; i++){

    if(input[i] === '<') isTag = true;
    

    if(input[i] === ' ' && tmp.length !== 0 && !isTag){
        result.push(tmp.join('')+' ');
        tmp = [];
    }else {
        if(isTag) tmp.push(input[i]);
        else tmp.unshift(input[i]);
    }

    if(input[i] === '>'){
        result.push(tmp.join(''));
        tmp = [];
        isTag = false;
    }


}

if(tmp.length !== 0 ) result.push(tmp.join(''));


console.log(result.join('').replace(/\n/g, ""));