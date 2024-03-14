const input = require("readline-sync")
let n = input.questionInt("enter n number")
let s=0;
for(let i=1; i<=n; i++)
{
    s=s+1/i;
}
console.log(s)