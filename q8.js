const input = require("readline-sync")
let n = input.questionInt("enter  the legnth of array1:")
let s = input.questionInt("enter  the legnth of array2:")
let a=[];
let ar=[];
let arr=[];
for(let i=0; i<n; i++)
{
    a[i] = input.questionInt("enter element no.of a:")
}
for(let j=0; j<s; j++)
{
    ar[j] = input.questionInt("enter element no. of b:")
}
let j=0
let i=0;
let k=0;
while(k<n+s)
{
    while (i<n) 
    {
        while(j<s)  
        {
            if(a[i]<ar[j])
            {
                console.log(a[i])
                i++;
                k++;
            }
            else
            {
                console.log(ar[j])
                j++;
                k++;
            }
        }        
    }    
}














/* 
for(let k=0; k<n+s;  k++)
{
    for(let i=0; i<n; i++)
    {
        for(let j=0; j<s; j++)
        {
            if(a[i]<ar[j])
            {
                console.log(a[i])
                i++;
            }
            else
            {
                console.log(ar[j])
                j++
            }
      
                
        }
        arr[k] = a[i];
    }
    arr[k] = ar[j];
} */





// console.log(a[i]);
        // // arr[k] = ar[j];
        // i++
        // k++;

        // console.log(ar[j]);
    // j++;
    // k++;
    // // arr[k] = a[i];
// for (let k=0; k<n+s; k++)
// {
//     console.log(arr[k])

// }