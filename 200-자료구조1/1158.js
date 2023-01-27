//요세푸스
let input;
try {
    input= require('fs').readFileSync('/dev/stdin').toString().split(' ');
} catch (error) {
input =
`7 3`
.split(' ');
}
let result = [];


let n = +input.shift();
let k = +input.shift();


let arr = [];

for(let i = 1 ; i <= n ; i++){
    arr[i-1] = i;
}

let count = 1;

while(arr.length){

   let shift = arr.shift();

   if(count % k === 0){
    result.push(shift);
   }else{
    arr.push(shift);
   }
   count++;
}


console.log(`<${result.join(', ')}>`);