const input = require("readline-sync")
let n = input.questionInt("enter  the legnth of array:")
let a=[];

for(let i=0; i<n; i++)
{
    a[i] = input.questionInt("enter the element no:")
}

for(let i=0; i<n; i++)
{
  let c=1;
for(let j=i+1; j<n; j++)
{
    if(a[i]==a[j])
    {
       c=c+1;
       let m=j;

       for(m=j; m<n; m++)
       {
        a[m]=a[m+1];
       }
    n=n-1
    }
    else{
       c=c;
    } 
}
console.log((a[i]),c)
}







// for (let i=0; i<n; i++)
// {
//     a[i] = input.questionInt("enter the number of the element:")
  
//     for(let j=i+1; j<n; j++)
//     {
//         let c=1;
//         for(j=i+1; j<n; j++)
//         {
//             if(a[i]==a[j])
//             {
//                 c=c+1;
//                 let k=j;

//                 for(k=j; k<n; k++)
//                 {
//                     a[k] = a[k+1]
//                 }
//             }
//             else{
//                 c=c;
//             }
//             n=n-1;
//             }
//             console.log(c)
//         }
//     }
