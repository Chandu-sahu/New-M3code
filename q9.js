const input = require("readline-sync")
let n = input.questionInt("enter  the legnth of array:")
let a=[];
str=""

for(let i=0; i<n; i++)
{
    a[i] = input.questionInt("enter  the element number")
}

for(let i=0; i<n; i++)
{
    str="";
    for(let j=0; j<a[i]; j++)
    {
        str+= ">";
    }
     console.log(str)
}
