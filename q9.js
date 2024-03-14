const input = require("readline-sync")
let n = input.questionInt("enter n number")
let s=0;
let i=1;
while(i<=n)
{
    if(n%i==0)
    {
        console.log(i)
    }

i++;
}