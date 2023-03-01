//일곱 난쟁이
let input;
try {
    input= require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
} catch (error) {
input =
`3
CCP
CCP
PPC`.trim().split('\n');
}

let length = input.shift();
input = input.map((arr)=>arr.split(''));
let arr = JSON.parse(JSON.stringify(input));

let n = 3; //가로
let m = 2; //세로

function getMaxSize(n,m){
    //하
    let sizeCol = 1;
    for(let i = m+1; i < length ; i++){ 
        if(arr[m][n] === arr[i][n]) sizeCol++;
        else break;
    }
    //상
    for(let i = m-1; 0 <= i ; i--){ 
        if(arr[m][n] === arr[i][n]) sizeCol++;
        else break;
    }

    //우
    let sizeRow = 1;
    for(let i = n+1; i < length ; i++){ 
        if(arr[m][n] === arr[m][i]) sizeRow++;
        else break;
    }
    //좌
    for(let i = n-1; 0 <= i ; i--){ 
        if(arr[m][n] === arr[m][i]) sizeRow++;
        else break;
    }

    return Math.max(sizeCol, sizeRow);
}

let max = 0;
for(let i = 0; i < length ; i++){
    for(let j = 0; j < length ; j++){
        //상
        if(0 < i){
            arr = JSON.parse(JSON.stringify(input));
            let tmp = arr[i][j];
            arr[i][j] = arr[i-1][j];
            arr[i-1][j] = tmp;

            let size = getMaxSize(j, i);
            if(max < size) max = size;
            
        }

        //하
        if(i < length-1){
            arr = JSON.parse(JSON.stringify(input));
            let tmp = arr[i][j];
            arr[i][j] = arr[i+1][j];
            arr[i+1][j] = tmp;

            let size = getMaxSize(j, i);
            if(max < size) max = size;
            
        }
        //좌
        if(0 < j){
            arr = JSON.parse(JSON.stringify(input));
            let tmp = arr[i][j];
            arr[i][j] = arr[i][j-1];
            arr[i][j-1] = tmp;

            let size = getMaxSize(j, i);
            if(max < size) max = size;
            
        }
        //우
        if(j < length-1){

            arr = JSON.parse(JSON.stringify(input));
            let tmp = arr[i][j];
            arr[i][j] = arr[i][j+1];
            arr[i][j+1] = tmp;

            let size = getMaxSize(j, i);
            if(max < size) max = size;
            
        }
    }
}

console.log(max);
