const input =require("readline-sync")
let a = input.questionInt("enter the a number")
let b = input.questionInt("enter the a number")
let c;

c=a;                                        
a=b;                                        
b=c;                               

console.log(a)
console.log(b)

