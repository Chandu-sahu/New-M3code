const input = require("readline-sync")
let n = input.questionInt("enter n number")
let s=0;
let i=n;
while(i>0)
{
    r=i%10
    s=s+1
    
i=Math.floor(i/10)
}
console.log(s)

