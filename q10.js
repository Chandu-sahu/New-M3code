const input = require("readline-sync")
let u = input.questionInt("enter the n number")
let a; let sc; let b
let p; let q; let r; let s;

if(u<=50)
{
    p=u*.5
    sc=p*20/100
    b = p+sc;
}
else if(u<=150)
{
    p=50*.5
    q=(u-50)*.75
    a=p+q
    sc=a*20/100
    b=a+sc;
}
else if(u<=250)
{
    p=50*.5
    q=100*.75
    r=(u-150)*1.2
    a=p+q+r
    sc=a*20/100
    b=a+sc;
}
else{
    p=50*.5
    q=100*.75
    r=100*1.2
    s=(u-250)*1.5
    a=p+q+r
    sc=a*20/100
    b=a+sc;
}
console.log(b)