const input =require("readline-sync")
let n = input.questionInt("enter the n number")

if(n%100!=0)
{
    if(n%4==0)
    {
        console.log("leap year")
    }
    else{
        console.log("not leap year")
    }
}
else if(n%400==0)
{
    console.log("leap year")
}
else{
    console.log("not leap year")
}