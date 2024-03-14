const input = require("readline-sync")
let n = input.questionInt("enter  the legnth of array:")
let a=[];
let o=0;
let e=0;
for(let i=0; i<n; i++)
{
     a[i] = input.questionInt("enter  the element no:")

    if(a[i]%2!=0)
    {
        o=o+a[i];
    }
    else
    {
        e=e+a[i];
    }    
}
console.log(o)
console.log(e)