//이친수
let input;
try {
    input= require('fs').readFileSync('/dev/stdin').toString();
} catch (error) {
input =
`90`.trim();
}

input = +input;

let arr = new Array(input+1);
arr[0] = [0];
arr[1] = [1,1];
arr[2] = [1,0];
arr[3] = [2,1];
// arr[4] = [3,1];
// arr[5] = [5, 2];



for(let i = 3; i <= input ; i++){
    
    arr[i] = [ BigInt(arr[i-1][0])*2n - BigInt(arr[i-1][1]), BigInt(arr[i-1][0]) - BigInt(arr[i-1][1]) ];
}

if(input !== 0) console.log(arr[input][0].toString());

