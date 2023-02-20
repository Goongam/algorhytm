//카드 구매하기
let input;
try {
    input= require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
} catch (error) {
input =
`5
9 2 8 8 6`.split('\n');
}
//TODO: 다른풀이로 풀어보기 hint: 이전값들의 가장 큰 값
let length = input.shift();
let nums = input[0].split(' ').map(n => +n);

let arr = [];

arr[0] = [1, nums[0]];

for(let i = 1 ; i < nums.length ; i++){
    
    let filterArr = arr.filter((innerArr) => innerArr[1] < nums[i] )
    
    if(!filterArr.length) {
        arr.push([1, nums[i]]);
        continue;
    }

    let max = filterArr[0];
    filterArr.forEach( innerArr => {
        if(max[0] < innerArr[0]) max = innerArr;
    } );
    
    arr.push([max[0] + 1, nums[i]]);

}

let max = arr[0][0];
for(let i = 1; i < arr.length; i++){
    if(max < arr[i][0]) max = arr[i][0];
}

console.log(max);
