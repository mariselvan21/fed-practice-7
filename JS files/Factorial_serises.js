var i,j;
console.log("Factorial series:");
for(i=1;i<=10;i++)
{
    var multiply=1;
    for(j=i;j>=1;j--)
    {
        multiply*=j;
    }
    console.log(multiply);
}
