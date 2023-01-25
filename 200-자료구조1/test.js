let [N, input] = `5
2 4 -10 4 -9`.trim().split("\n");
input = input.split(" ").map(a=>+a);

let copiedArry = [...input];
input = [...new Set(input)];
input.sort((a, b) => {
  return a - b;
});

console.log(input);
// 객체를 생성 후 주어진 숫자를 키로, 인덱스를 값으로 저장한다.
let obj = {};
input.forEach((a, idx) => {
  obj[a] = idx;
});
let ANSWER = [];
for (let i = 0; i < copiedArry.length; i++) {
  ANSWER.push(obj[copiedArry[i]]);
}
console.log(ANSWER.join(" "));