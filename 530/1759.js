let input;
try {
    input= require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
} catch (error) {
input =
`4 6
a t c i s w`.trim().split('\n');
}

let length = +input.shift().split(' ')[0];
let chars = input.shift().split(' ').sort((a, b) => {
    return a > b ? 1 : -1;
});

let 모음 = ['a', 'e', 'i', 'o', 'u'];

let arr = [];
let visit = [];
let result = [];
function dfs(index, count){
    if(count > length){
        let 모음개수 = 0;
        let 자음개수 = 0;
        arr.forEach(n => {
            if(모음.includes(n)) 모음개수++;
            else 자음개수++;
        });

        if(1 <= 모음개수 && 2 <= 자음개수)result.push(arr.join(''));
        return;
    }

    for(let i = index; i < chars.length ; i++){
        if(visit[i]) continue;
        visit[i] = true;

        arr.push(chars[i]);
        dfs(i, count+1);
        arr.pop();

        visit[i] = false;
    }
}

dfs(0, 1);

if(result.length)console.log(result.join('\n'));