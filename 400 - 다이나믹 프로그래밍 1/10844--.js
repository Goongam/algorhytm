//쉬운 계단 수
let input;
try {
    input= require('fs').readFileSync('/dev/stdin').toString().trim();
} catch (error) {
input =
`1`.trim();
}

input = +input;

let arr = new Array(100);
arr[0] = [0];
arr[1] = [0,1,1,1,1,1,1,1,1,1];
arr[2] = [1,1,2,2,2,2,2,2,2,1];
arr[3] = [1,3,3,4,4,4,4,4,3,2];

for(let i = 4; i <= 100; i++){
    let inner = [];
    for(let j = 0; j <= 9; j++){
        let left = arr[i-1][j-1] ?? 0;
        let right = arr[i-1][j+1] ?? 0;
        
        inner[j] = (left + right)%1000000000;
    }
    arr[i] = inner;
}
console.log(arr[input].reduce((a,b)=>(a+b)%1000000000));

