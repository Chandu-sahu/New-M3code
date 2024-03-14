const input =require("readline-sync")
let n = input.questionInt("enter the n number")

if(n==0)
{
    console.log("zero")
}
else if(n>0)
{
    console.log("positive")
}
else{
    console.log("negative")
}
