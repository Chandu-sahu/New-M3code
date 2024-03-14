 const input = require("readline-sync")
let a = input.questionInt("enter a number")
let b = input.questionInt("enter b number")
let c = input.questionInt("enter c number")
let d = input.questionInt("enter d number")
let e = input.questionInt("enter e number")
let s = 1;
let p = 1;
let q = 1;
let r = 1;

if(a==b)
{
    s=s+1;

}
else if(a==c)
{
    s=s+1;
}
else if (a==d)
{
    s=s+1;
}
else if(a==e)
{
    s=s+1;
}
else if(b==c)   
{
    p=p+1;
}
else if(b==d)
{
    p=p+1;
}
else if(b==e)
{
    p=p+1;
}
else if(c==d) 
{
    q=q+1;
}
else if(c==e)
{
    q=q+1;
}
else if(d==e)
{
    r=r+1;
}

console.log(s)
console.log(p)
console.log(q)
console.log(r)
 


// if(a==b && a==c && a==d && a==e)
// {
//     s=s+1;
// }
// else if(b==c && b==d && b==e)   
// {
//     p=p+1;
// }
// else if(c==d && c==e) 
// {
//     q=q+1;
// }

// else if(d==e)
// {
//     r=r+1;
// } 