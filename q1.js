const input = require("readline-sync")
let n = input.questionInt("enter  the legnth of array:")
let a=[];
for(let i=0; i<n; i++)
{
     a[i] = input.questionInt("enter the element no.")
}

    console.log(a)

