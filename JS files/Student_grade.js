var tam=70,eng=70,mat=70,sci=70,ss=70;
var total=tam+eng+mat+sci+ss;
var totalMaximumMarks=500;
var percentage=(total/totalMaximumMarks)*100;
if(percentage<=100&&percentage>=90)
{
    console.log("student grade is 'S'")
}
else if(percentage<=89&&percentage>=80)
{
    console.log("student grade is 'A'")
}
else if(percentage<=79&&percentage>=70)
{
    console.log("student grade is 'B'")
}
else if(percentage<=69&&percentage>=60)
{
    console.log("student grade is 'C'")
}
else if(percentage<=59&&percentage>=50)
{
    console.log("student grade is 'D'")
}
else 
{
    console.log("student grade is 'F'")
}

