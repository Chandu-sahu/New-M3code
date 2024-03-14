const input = require("readline-sync")
let n = input.questionInt("enter n number")

for(let i=1; i<n; i++)
{
    
    if(i%2==0)
    {
        console.log(i)
    }
}