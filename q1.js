// swap number;

const input = require("readline-sync")
let a = input.questionInt("enter the number")
let b = input.questionInt("enter the number")
let c = 0;

c=a
a=b
b=c;

console.log(a)
console.log(b)