//카드 구매하기
let input;
try {
    input= require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
} catch (error) {
input =
`2
100 1 200 3 300 4 400`.split('\n');
}
//그냥 배열 2개 만들걸 
let length = input.shift();
let nums = input[0].split(' ').map(n => +n);

let arr = [];

arr[0] = [1, [nums[0]]];


for(let i = 1; i < nums.length; i++){

    const filterArr = arr.filter((prevNum, index) => nums[index] < nums[i]); 

    if(!filterArr.length) arr[i] = [1, [nums[i]]];
    else {
        let max = filterArr[0];
        for(let j = 1; j < filterArr.length ; j++ ){
            if(max[0] < filterArr[j][0]) max = filterArr[j];
        }

        arr[i] = [max[0]+1, [...max[1], nums[i]]];
    }


}

let max = arr[0];

arr.forEach( a => {
    if(max[0] < a[0]) max = a; 
} )

console.log(max[0]);
console.log(max[1].join(' '));

// console.log(arr);

// console.log(Math.max(...arr));
