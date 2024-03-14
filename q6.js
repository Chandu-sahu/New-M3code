// existing Number:

const input = require("readline-sync")
let n = input.questionInt("enter the length of array:")
let a=[];
let t = input.questionInt("enter the target number:")
let c=0;

for(let i=0; i<n; i++)
{
    a[i] = input.questionInt("enter the elment number:")

    if(a[i]==t)
    {
        c++;
        i=n;

        console.log("yes")
    }
    else{
        console.log("No")
    }
}