//테트로미노
let input;
try {
    input= require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
} catch (error) {
input =
`5 5
1 2 3 4 5
5 4 3 2 1
2 3 4 5 6
6 5 4 3 2
1 2 1 2 1`.trim().split('\n');
}
//TODO: DFS로 풀기
//n세로 m가로
const [n, m] = input.shift().split(' ').map(n => +n);
const arr = input.map(line => line.split(' ').map(n => +n));


function getBlue(i, k){
    let max = 0;
    //가로
    try {
        let blue = arr[i][k] + arr[i][k+1] + arr[i][k+2] + arr[i][k+3];
        if(max < blue) max = blue;
    } catch (error) {
        
    }
    //세로
    try {
        blue = arr[i][k] + arr[i+1][k] + arr[i+2][k] + arr[i+3][k];
        if(max < blue) max = blue;
    } catch (error) {
        
    }

    return max;
}

function getYellow(i, k){
    // let max = 0;
    try {
        let yellow = arr[i][k] + arr[i][k+1] + arr[i+1][k] + arr[i+1][k+1];
        return yellow;
    } catch (error) {
        return 0;
    }
}

function getOrange(i, k){
    let max = 0;
    try {
        orange = arr[i][k] + arr[i+1][k] + arr[i+2][k] + arr[i+2][k+1];
        if(max < orange) max = orange;
    } catch (error) {
        
    }

    try {
        orange = arr[i][k] + arr[i+1][k] + arr[i+2][k] + arr[i+2][k-1];
        if(max < orange) max = orange;
    } catch (error) {
        
    }

    try {
        orange = arr[i][k] + arr[i-1][k] + arr[i-2][k] + arr[i-2][k-1];
        if(max < orange) max = orange;
    } catch (error) {
        
    }

    try {
        orange = arr[i][k] + arr[i-1][k] + arr[i-2][k] + arr[i-2][k+1];
        if(max < orange) max = orange;
    } catch (error) {
        
    }

    try {
        orange = arr[i][k] + arr[i+1][k] + arr[i][k+1] + arr[i][k+2];
        if(max < orange) max = orange;
    } catch (error) {
        
    }

    try {
        orange = arr[i][k] + arr[i+1][k] + arr[i][k-1] + arr[i][k-2];
        if(max < orange) max = orange;
    } catch (error) {
        
    }

    try {
        orange = arr[i][k] + arr[i-1][k] + arr[i][k-1] + arr[i][k-2];
        if(max < orange) max = orange;
    } catch (error) {
        
    }

    try {
        orange = arr[i][k] + arr[i-1][k] + arr[i][k+1] + arr[i][k+2];
        if(max < orange) max = orange;
    } catch (error) {
        
    }
    return max;
}

function getGreen(i, k){
    let max = 0;
    try {
        let green = arr[i][k] + arr[i+1][k] + arr[i+1][k+1] + arr[i+2][k+1];
        if(max < green) max = green 
    } catch (error) {
        
    }
    try {
        let green = arr[i][k] + arr[i+1][k] + arr[i+1][k-1] + arr[i+2][k-1];
        if(max < green) max = green 
    } catch (error) {
        
    }

    try {
        let green = arr[i][k] + arr[i-1][k] + arr[i-1][k+1] + arr[i-2][k+1];
        if(max < green) max = green 
    } catch (error) {
        
    }

    try {
        let green = arr[i][k] + arr[i-1][k] + arr[i-1][k-1] + arr[i-2][k-1];
        if(max < green) max = green 
    } catch (error) {
        
    }

    try {
        let green = arr[i][k] + arr[i][k+1] + arr[i+1][k] + arr[i+1][k-1];
        if(max < green) max = green 
    } catch (error) {
        
    }

    try {
        let green = arr[i][k] + arr[i][k-1] + arr[i+1][k] + arr[i+1][k+1];
        if(max < green) max = green 
    } catch (error) {
        
    }

    return max;
}

function getPink(i, k){
    let max = 0;

    try {
        let pink = arr[i][k] + arr[i+1][k] + arr[i][k-1] + arr[i][k+1];
        if(max < pink) max = pink;
    } catch (error) {
        
    }

    try {
        let pink = arr[i][k] + arr[i-1][k] + arr[i][k-1] + arr[i][k+1];
        if(max < pink) max = pink;
    } catch (error) {
        
    }

    try {
        let pink = arr[i][k] + arr[i-1][k] + arr[i+1][k] + arr[i][k+1];
        if(max < pink) max = pink;
    } catch (error) {
        
    }

    try {
        let pink = arr[i][k] + arr[i-1][k] + arr[i+1][k] + arr[i][k-1];
        if(max < pink) max = pink;
    } catch (error) {
        
    }

    return max;
}

let max = 0;
for(let i = 0; i < n; i++){
    for(let k = 0; k < m ; k++){
        //파랑
        let blueMax = getBlue(i,k);
        if(max < blueMax) max = blueMax;

        //노랑
        let yellowMax = getYellow(i,k);
        if(max < yellowMax) max = yellowMax;

        //주황
        let orangeMax = getOrange(i,k);
        if(max < orangeMax) max = orangeMax;
        //초록
        let greenMax = getGreen(i, k);
        if(max < greenMax) max = greenMax;

        //핑크
        let pinkMax = getPink(i,k);
        if(max < pinkMax) max = pinkMax;
    }
}

console.log(max);