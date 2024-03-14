const input =require("readline-sync")
let a = input.questionInt("enter the a number")
let b = input.questionInt("enter the b number")
let c = input.questionInt("enter the c number")
let m;
let m2;
if(a>b)
{
    m=a;
}
else{
    m=b;
}
if(m>c)
{
    m2=m;
}
else{
    m2=c
}
console.log(m2)