var num=153;
var temp;
var lastDigit;
var reverseNumber = 0;
console.log("Reverse of given number:");

for(temp=num;temp>=1;temp=temp/10)
{
    lastDigit=temp%10;
    temp=temp-lastDigit;
    //temp=temp/10;
    //console.log(lastDigit)
    reverseNumber = (reverseNumber * 10 ) + lastDigit;
}

console.log(reverseNumber)