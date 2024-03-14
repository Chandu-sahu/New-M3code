const input = require("readline-sync")
let n = input.questionInt("enter  the legnth of array:")
let a=[];
//let t=0;
for(let i=0; i<n; i++)
{
     a[i] = input.questionInt("enter  the element no:")
} 
for(let  i=n-1; i>=0; i--)
{
    
  console.log((a[i]));
}
//console.log(a)
   


//////////////////////


/* let m=  Math.floor(n/2);
console.log(m); */