//알파벳 개수
let input;
try {
    input= require('fs').readFileSync('/dev/stdin').toString();
} catch (error) {
input =
`dddzxczxqweqwsa아dasd`;
}

let obj = {
    'a':0,'b':0,'c':0,'d':0,'e':0,'f':0,'g':0,'h':0,'i':0,'j':0,'k':0,'l':0,'m':0,'n':0,'o':0,'p':0,'q':0,'r':0,'s':0,'t':0,'u':0,'v':0,'w':0,'x':0,'y':0,'z':0,
};


input.split('').forEach(char => {
    if(char !== ' ' && Object.keys(obj).includes(char)) obj[char]++;
})
console.log(Object.values(obj).join(' ').replace(/\n/g, ""));
