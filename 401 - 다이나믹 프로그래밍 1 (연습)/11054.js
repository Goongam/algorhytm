//가장 큰 증가하는 부분 수열
let input;
try {
    input= require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
} catch (error) {
input =
`3
1 1 1`.trim().split('\n');
}

const length = +input.shift();
const nums = input.shift().split(' ').map(n=>+n);

let arrInc = [];
arrInc[0] = 1;

for(let i = 1; i < length; i++){
    let max = 0;
    for(let j = 0; j < arrInc.length; j++){
        if(nums[j] < nums[i] && max < arrInc[j]) max = arrInc[j];
    }
    arrInc[i] = max + 1;
}


for(let k = 0; k < arrInc.length ; k++){
    let copyNums = nums.slice(k, Infinity);
    let arrDec = [];
    arrDec[0] = copyNums[0];

    for(let i = 0; i < length; i++){
        let max = 0;
        for(let j = 0; j < arrDec.length; j++){
            if(copyNums[j] > copyNums[i] && copyNums[i] < copyNums[0]  && max < arrDec[j]) max = arrDec[j];
        }
        arrDec[i] = max + 1;
    }
    // console.log(arrInc[k], arrDec);
    
    arrInc[k] += Math.max(...arrDec) - 1;

}

console.log(Math.max(...arrInc));
