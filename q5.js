const input =require("readline-sync")
let a = input.questionInt("enter the a number")
let b = input.questionInt("enter the a number")

let c=a%b;
let d=Math.floor(a/b)

console.log(c ,  d)