//var number=prompt("Enter any vale:");
var number=234;
var temp=number;
var flag=0;
var lastDigit;

while(temp>=1)
{
    flag=flag+1;
    lastDigit=temp%10;
    temp=temp-lastDigit;
    temp=temp/10;
}
temp=number;
sum=0;
while(temp>=1)
{
    lastDigit=temp%10;
    temp=temp-lastDigit;
    temp=temp/10;
    /**var multiplicationValue=1;
    for(i=1;i<=flag;i++)
    {
        var multiplicationValue=multiplicationValue*lastDigit;

    }**/
    sum=sum+(lastDigit**flag);

}
if(sum==number)
{
    console.log(number+" is a armstrong number.")
}
else{
    console.log(number+" is not a armstrong number.")
}