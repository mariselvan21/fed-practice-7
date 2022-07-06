var i,x,y,z,w,v,u;
console.log("Prime numbers",2,3,5);
for(i=2;i<=50;i++)
{
    x=i%1;
    if(x==0)
    {
        y=i%i;
        if(y==0)
        {
            z=i%2;
            if(z!==0)
            {
                w=i%3;
                if(w!==0)
                {
                    v=i%5;
                    if(v!==0)
                    (
                       
                        
                        console.log(i)
                        
                    )
                }
            
            }
        }
    }
}
