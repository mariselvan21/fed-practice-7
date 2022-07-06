var num,i;
console.log("Factorial series:");
for(num=1;num<=5;num++)
{
    for(i=num-1;i>=1;i--)
    {
        num*=i;
    }
    console.log(num);
    
}
