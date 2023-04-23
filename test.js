const fs = require("fs");
let input;
try {
  input = fs.readFileSync("/dev/stdin").toString().trim();
} catch {
input = `QWERQWER`
    .toString()
    .trim();
}

if(input.length === 0){
  process.exit();
}
const alpha = "abcdefghijklmnopqrstuvwxyz";
let count = new Array(26).fill(0);

input = input.toLowerCase();

input.split('').forEach((c)=>{
  let idx = alpha.indexOf(c);
  count[idx]++;
});

let result;
let max = Math.max(...count);
let maxIdx = count.indexOf(max);

let maxcount = 0;
count.forEach((num) => {
  if(num === max) maxcount++;
});

if(maxcount >= 2) result = '?';
else{
  result = alpha[maxIdx].toUpperCase();
}


console.log(result);


// console.log(alpha[]);
