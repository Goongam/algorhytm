const fs = require("fs");
let input;
try {
  input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
} catch {
  input = `3
1
4
5
7
9
6
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30`
    .toString()
    .trim()
    .split("\n");
}
input = input.map(Number);
let result = [];
for(let i = 1; i <= 30; i++) if(!input.includes(i)) result.push(i);
console.log(result.join('\n'));


