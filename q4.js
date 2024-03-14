const input = require("readline-sync")
let m = input.questionInt("enter m number")
let n = input.questionInt("enter n number")
let p=0;
for(let i=m; i<=n; i++)
{
    p=i+p;   
}
console.log(p)