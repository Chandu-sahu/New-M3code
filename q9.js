const input = require("readline-sync")
let n = input.questionInt("enter the n number")
let hra;
let da;
let gs;
if(n<=10000)
{
    hra=20/100*n
    da=80/100*n;
}
else if(n<=20000)
{
    hra=25/100*n
    da=90/100*n;
}
else
{
    hra=30/100*n
    da=90/100*n;
}

gs=n+hra+da;
console.log(gs)