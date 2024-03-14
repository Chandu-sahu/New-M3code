// print the sum of the digit of number:

const input = require("readline-sync")
let n = input.questionInt("enter the number")
let s=0;
let i=n;
while(i>0)
{
    r=i%10
    s=s+r;
    i=Math.floor(i/10)
}
console.log(s)