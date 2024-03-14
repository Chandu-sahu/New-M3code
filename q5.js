// pattern -
// 1               *
// 121             **
// 12321           ***


const input = require("readline-sync")
let n = input.questionInt("enter the n number")
let k;
str = "";
let i;
for(let i=1; i<=n; i++)
{
    str="";
    for(let j=1; j<=i; j++)
    {
        str+=j;
    
    }
for(let k=i-1; k>0; k--)
 {
    str+=k;   
 }
   console.log(str)
}






// star pattern;

// const input = require("readline-sync")
// let n = input.questionInt("enter the n number")
// let s=0;
// str = "";
// let i;
// for(let i=1; i<=n; i++)
// {
//     str="";

//     for(let j=1; j<=i; j++)
//     {
//         str+="*";
//     }
//     console.log(str)
// }