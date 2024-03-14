const input =require("readline-sync")
let a = input.questionInt("enter the a number")
let b = input.questionInt("enter the a number")

if(a>b)
{
    max=a;
    min=b;
}
else
{
    max=b;
    min=a;
}

   console.log(max)