let input;
try {
    input= require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
} catch (error) {
input =
`3
8
0 0
7 0
100
0 0
30 50
10
1 1
1 1`.trim().split('\n');
}

const caseLength = +input.shift();
const dirH = [2, 1, -1, -2, -2, -1, 1, 2];
const dirW = [1, 2, 2, 1, -1, -2, -2, -1];


let map;

function bfs(starth, startw, endh, endw,length){
    let queue = [[starth, startw, 0]];
    map[starth][startw] = 1;

    if(starth === endh && startw === endw){
        console.log(0);
        return;
    }

    while(queue.length){
        const current = queue.shift();
        
        
        for(let i = 0; i<8; i++){
            const nextH = current[0] + dirH[i];
            const nextW = current[1] + dirW[i];
            const count = current[2];

            if(nextH < 0 || nextH >= length || nextW < 0 || nextW >= length) continue;
            if(map[nextH][nextW]) continue;
            if(nextH === endh && nextW === endw){
                console.log(count+1);
                return;
            }
            
            map[nextH][nextW] = 1;
     
            queue.push([nextH,nextW, count+1]);
        }
    }
}
    

while(input.length){
    
    const length = +input.shift();
    const [starth, startw] = input.shift().split(' ').map(Number);
    const [endh, endw] = input.shift().split(' ').map(Number);
    map = Array.from({length:length},()=>new Array(length).fill(0));

    bfs(starth,startw,endh,endw,length);
    
}

