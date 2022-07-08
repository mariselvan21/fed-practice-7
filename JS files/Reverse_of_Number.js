var num=153;
var temp=num;
var lastDigit;
console.log("Reverse of given number:")
while(temp>=1)
{
    lastDigit=temp%10;
    temp=temp-lastDigit;
    temp=temp/10;
    console.log(lastDigit)
}