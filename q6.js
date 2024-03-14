const input = require("readline-sync")
let n = input.questionInt("enter  the legnth of array:")
let a=[];

for(let i=0; i<n; i++)
{
    a[i] = input.questionInt("enter the element no:")
}
for(let i=0; i<n; i++)
{

    let p = 1;
    for(let j=i+1; j<n; j++)
    {
    
        if(a[i]==a[j])
        {
            p=p+1;
            let m=j;
        for(m=j; m<n; m++)
        {
            
            a[m]=a[m+1];
        }
        n=n-1;
        }
        else
        {
        p=p;
        }
        
    }
    if(p>1)
    {
        console.log((a[i]))
    }
    else{}
}
