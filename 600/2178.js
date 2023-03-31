let input;
try {
    input= require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
} catch (error) {
input =
`7 7
1011111
1110001
1000001
1000001
1000001
1000001
1111111`.trim().split('\n');
}

const [n, m] = input.shift().split(' ').map(Number);
let map = [];
let visit = [];
input.forEach((line) => {
    map.push(line.split('').map(Number));
    visit.push(Array.from({length:m}, ()=>false));
});


let min = Infinity;

// function dfs(h, w, count){

    
//     if(h < 0 || h >= n || w < 0 || w >= m || map[h][w] === 0){
//         return;
//     }
//     if(h === n-1 && w === m-1){        
//         if(min > count) min = count;
//         return;
//     }
//     map[h][w] = 0;

//     dfs(h-1,w, count+1);
//     dfs(h,w+1, count+1);
//     dfs(h+1,w, count+1);
//     dfs(h,w-1, count+1);

//     map[h][w] = 1;
// }

// dfs(0,0,1);


function bfs(startPos){
    let queue = [startPos];

    while(true){
        const [h,w,count] = queue.shift();
        // console.log(map);
        
        if(h < 0 
            || h >= n 
            || w < 0 
            || w >= m 
            || map[h][w] === 0){
                    continue;
            }
        if(h === n-1 && w === m-1){        
            if(min > count) min = count;
            return;
        }
        // visit[h][w]
        map[h][w] = 0;
            // queue.push([])
        queue.push([h-1,w, count+1]);
        queue.push([h,w+1, count+1]);
        queue.push([h+1,w, count+1]);
        queue.push([h,w-1, count+1]);
        // for(){

        // }

    }
}

bfs([0,0, 1]);

console.log(min);
