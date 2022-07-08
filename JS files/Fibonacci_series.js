var count =prompt("Enter conunt of Fibonacci series:");
var n1=0,n2=1,nextdigit;
console.log(count+" of Fibonacci series:")
for(i=1;i<=count;i++)
{
    console.log(n1);
    nextdigit=n1+n2;
    n1=n2;
    n2=nextdigit;
}
