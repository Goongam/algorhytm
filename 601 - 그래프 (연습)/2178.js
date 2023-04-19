let input;
try {
    input= require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
} catch (error) {
input =
`2 13
ABCDEFGHIJKLM
NOPQRSTUVWXYZ`.trim().split('\n');
}

const [n ,m] = input.shift().split(' ');
const map = [];
input.forEach((line) => {
    map.push(line.split(''));
});

let start;

let dirh = []

function dfs(c, h, w, count){  
    if(h < 0 || h >= n || w < 0 || w >= m)return;
    
    if(h === start[0] && w === start[1] && count >= 4){ //처음

        console.log('Yes');
        process.exit();
    }

    if(map[h][w] !== c) return;


    
    map[h][w] = false;

    dfs(c,h+1,w, count+1);
    dfs(c,h,w+1, count+1);
    dfs(c,h-1,w, count+1);
    dfs(c,h,w-1, count+1);

    map[h][w] = c;

}

map.forEach((line, h) => line.forEach((n, w)=>{

    if(map[h][w]){

        start = [h,w];
        dfs(map[h][w],h,w,0);
    }
}))

console.log('No');

