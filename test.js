const fs = require("fs");
let input;
try {
  input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
} catch {
input = `2
3 ABC
5 /HTP`
    .toString()
    .trim()
    .split("\n");
}

input.shift();

input.forEach(line =>{
  const [length, str] = line.split(' ');
  let result = "";
  str.split('').forEach((s)=>{
      for(let i = 0; i < length ; i++){
          result += s;
      }
  });
  console.log(result);
  
});

