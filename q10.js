const input = require("readline-sync")
let n = input.questionInt("enter n number")
let s=1;
let i=1;
while(i<=n)
{
    if(n%i==0)
    {
        s=s*i
    }

i++;
}
if(s==n)
{
    console.log("prime no.")
}
else{
    console.log("not prime no.")
}
