var num=1543;
var temp=num;
var sum=0;
while(temp>=1)
{
    lastDigit=temp%10;
    temp=temp-lastDigit;
    temp=temp/10;
    sum=sum+lastDigit;
}
console.log(num+" sum of digits is a:",sum)