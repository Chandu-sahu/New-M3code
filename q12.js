const input = require("readline-sync")
let a = input.questionInt("enter the first number")
let b = input.questionInt("enter the second number")
let m=a;
let n=b;

while (a!==b)
{
if(a>b)
{
    a=a-b;
}
else
{
    b=b-a;
}
}
    
   let hcf =a;
   console.log("hcf:",hcf)
    let lcm = (m*n)/hcf
    console.log("lcm:",lcm)



