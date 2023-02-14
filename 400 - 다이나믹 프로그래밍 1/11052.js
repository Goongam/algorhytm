//카드 구매하기
let input;
try {
    input= require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
} catch (error) {
input =
`4
1 1 1 1`.split('\n');
}

let length = input.shift();
let cards = input[0].split(' ').map(n => +n);


let arr = new Array(length);
arr[0] = 0;
arr[1] = cards[0];
arr[2] = Math.max(cards[0]+cards[0],cards[1]);

for(let i = 3; i <= length ; i++){

    let max = cards[i-1];   //카드 1장만 있는경우
    for(let j = 1; j < i ; j++){
        if(max < arr[i-j] + cards[j-1]) max = arr[i-j] + cards[j-1]; //이전 max값중 가장 큰값 + 1장을 더한 경우
    }
    arr[i] = max;
}

console.log(arr.pop());


