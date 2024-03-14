// average of givenarray;

const input = require("readline-sync")
let n = input.questionInt("enter the length of array:")
let s=0;
let a=[];

for(let i=0; i<n; i++)
{
    a[i] = input.questionInt("enter the elment number:")

    s=s+a[i];
   a=[Math.floor(s/n)]
    
}
console.log(a)


