// second max in 3 number;


const input = require("readline-sync")
let a = input.questionInt("enter the number")
let b = input.questionInt("enter the number")
let c = input.questionInt("enter the number")

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
    console.log(m2)
}