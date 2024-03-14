const input = require("readline-sync")
let n = input.questionInt("enter n number")
let s =0;
for(let i=1; i<=n; i++)
{
    str="";
    if(i%2!=0)
    {
         s=s+i;
         str+=s;
    }
    console.log(str)
}