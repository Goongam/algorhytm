//N과 M (1)
let input;
try {
    input= require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
} catch (error) {
input =
`4
1 2 3 4`.trim().split('\n');
}


let length = +input.shift();
let nums = new Array(+length).fill(0).map((_,index) => index+1);

let find = input.shift().split(' ').map(n => +n);

let visit = new Array(+length).fill(false);
visit[0] = undefined;
let result = [];
let arr = [];

find.forEach(n => visit[n] = true);

function countUp(index){
    visit[find[index-1]] = false;
    // find[index-1] = 0;

    //TODO: 바로다음 수 말고 다음에 올 수있는 수 중 가장 작은 수로(밑 for문처럼), 즉 현재 나의 수보다 큰 수들중 가작 작은 수
    // if(visit[find[index-1]+1] === false) {
    //     visit[find[index-1]+1] = true;
    //     find[index-1] = find[index-1]+1;
    //     return;
    // }
    
    let current = find[index-1];
    for(let i = current+1; i <= length;i++){
        if(visit[i] === false){
            visit[i] = true;
            find[index-1] = i;
            return;
        }
    }


    countUp(index-1);

    for(let i = 1; i <= length; i++){
        if(visit[i]) continue;
        visit[i] = true;

        find[index-1] = i;
        break;
    }    

}
let reverse = new Array(+length).fill(0).map((n,index)=> index+1).reverse().join(' ');
// console.log(reverse);


if(find.join(' ') === reverse){
    console.log(-1);
    return;
}

countUp(length);

console.log(find.join(' '));
// console.log(visit);




// function dfs(count){
//     if(count > length){
//         result.push(arr.join(' '));
//         return;
//     }

//     for(let i = 0; i < length ; i++){
//         if(visit[i]) continue;
//         visit[i] = true;

//         arr.push(nums[i]);
//         dfs(count+1);
//         arr.pop();

//         visit[i] = false;
//     }
// }

// dfs(1);


// console.log(result);

// result.forEach((num,index)=>{
//     // console.log(num, find);
    
//     if(index === result.length -1) {
//         console.log(-1);
//         return;
//     }
//     else if(num === find){
//         // console.log(index, result.length);
        
//         console.log(result[index+1]);
//         return;
//     }
// })
