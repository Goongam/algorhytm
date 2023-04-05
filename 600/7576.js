let input;
try {
    input= require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
} catch (error) {
input =
`50 10
0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1`.trim().split('\n');
}

const [n, m] = input.shift().split(' ').map(Number);
let map = [];
input.forEach(line => {
    map.push(line.split(' ').map(Number));
});

let visit = [];
for(let i = 0 ; i < m;i++) visit.push(Array.from({length:n}, ()=>false));
// console.log(visit);


const dirW = [0,1,0,-1];
const dirH = [1,0,-1,0];


let queue = [];
let index = 0;

function bfs(){

    while(queue.length > index){

        const [cw, ch, day] = queue[index];


        for(let i = 0 ; i < 4;i++){
            const nextH = ch+dirH[i];
            const nextW = cw+dirW[i];
            
            if(nextW < 0 || nextW >= n || nextH < 0 || nextH >= m) continue; //맵 밖
            const next = map[nextH][nextW];
            if(next === -1) continue; //빈 공간
            
            if(next !== 0) continue; // 이미 익은 토마토인 경우

            map[nextH][nextW] = day+1;
            queue.push([nextW,nextH,day+1]);
        }
        index++;
    }
}


for(let i = 0; i< m; i++){
    for(let j = 0; j < n; j++){

        
        if(map[i][j] === 1){

            queue.push([j,i,1]);

        }
    }
}

bfs();


let max = 0;
map.map(line=>line.map(day => {
    if(day === 0) { // 안익은 토마토가 있는 경우
        console.log(-1); 
        process.exit(); //종료
    }
    if(max < day) max = day; //최대일수 출력
}))


console.log(max -1);



