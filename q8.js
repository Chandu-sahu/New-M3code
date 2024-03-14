const input =require("readline-sync")
let a = input.questionInt("enter the a number")
let b = input.questionInt("enter the b number")
let c = input.questionInt("enter the c number")

if(a>b)
{
    m1=a
    m2=b;
}
else{
    m1=b
    m2=a;
}
if(m1>c)
{
    m3=c;   
}
else{
    m3=m1;
}
if(m3>m2)
{
console.log(m3)
}
else{
    console.log(m3)
}
