const input =require("readline-sync")
let a = input.questionInt("enter the a number")
let b = input.questionInt("enter the b number")
let c = input.questionInt("enter the c number")
let d = input.questionInt("enter the d number")
let m;
let m2;
let m3;
if(a>b)
{
    m=a;
}
else{
    m=b;
}
if(c>d)
{
    m2=c;
}
else{
    m2=d;
}
if(m>m2)
{
    m3=m
}
else{
    m3=m2
}
console.log(m3)