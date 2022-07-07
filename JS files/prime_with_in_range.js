console.log("1 to 50 between prime numbers:");
for(i=2;i<=50;i++)
{
    if((i%2 !==0)&&(i%3 !==0)&&(i%5 !==0)&&(i%7 !==0))
    {
        console.log(i);
    }
    else if((i==2)||(i==3)||(i==5)||(i==7))
    {
        console.log(i);
    }
}