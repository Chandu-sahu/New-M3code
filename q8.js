const input =require("readline-sync")
let a = input.questionInt("enter the a number")
let b = input.questionInt("enter the a number")

a=a+b;
b=a-b;
a=a-b;

console.log(a)
console.log(b)
