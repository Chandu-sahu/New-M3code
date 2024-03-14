// square and rectangle:

const input = require("readline-sync")
let ab = input.questionInt("enter the ab number")
let bc = input.questionInt("enter the bc number")
let cd = input.questionInt("enter the cd number")
let da = input.questionInt("enter the da number")

if(ab==bc && bc==cd)
{
    console.log("square")
}
else if(ab==cd && bc==da)
{
    console.log("rectangle")
}
else{
    console.log("irregular quadrilateral")
}