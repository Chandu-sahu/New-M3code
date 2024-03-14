const input =require("readline-sync")
let n = input.questionInt("enter the n number")
let p;
let r; 
let e;
let w;
if(n%2!=0)
{
   r=n%2;
   if(r<=2)
   {
    p=n*2;
   }
}   
else
{
   w=Math.floor(n/2)
   p=w*2;
}
console.log(p)




