const fs = require("fs");
let input;
try {
  input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
} catch {
input = `5 4
1 2
3 4
1 4
2 2`
    .toString()
    .trim()
    .split("\n");
}

const [length, _] = input.shift().split(' ').map(Number);
let arr = [];
for(let i = 1; i <= length; i++){
  arr.push(i);
}

// console.log(arr);

// console.log(arr);

input.forEach((line)=>{
  let [start, end] = line.split(' ').map(Number);

  let sp = arr.slice(start-1, end);
  let reverse = sp.reverse();

  let idx = start-1;
  reverse.forEach(num =>{
    arr[idx] = num;
    idx++
  })

  
  
})

console.log(arr.join(' '));

