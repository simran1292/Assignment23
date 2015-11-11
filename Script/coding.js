var ac = 'cover.jpg';
var orignal = ['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg'];

function coverpic(i) 
{
    document.getElementById('getcover'+i).innerHTML = '<div onclick="displayOrignal('+i+');return false;"><img src="'+ac+'" width="200" height="200" \/><\/div>';
    
} 
var c, d,No, tableid, timerss; 
window.onload=run;

function NumberRandom(a, b)
{
    return (Math.round(Math.random())-0.3);
}
function run() 
{
    for (var i = 0; i <= 10 ;i++)
    {
        coverpic(i);
        clearInterval(tableid);
        No = 0;
        orignal.sort( NumberRandom );
} 
function displayOrignal(data) 
{
    if (No>1)
    {
        
        clearTimeout(timerss);
        validate();
    }
    document.getElementById('getcover'+data).innerHTML = orignal[data];
    if (No==0)
    {
        
        c = data;
    }
    else 
    {
       
        d = data;  
        timerss = setTimeout('validate()', 600);
    }
    No++;
} 
var catchimage = []; 
for (var i = 0; i < 5; i++) 
{
    catchimage[i] = new Image(); 
    catchimage[i].src = orignal[i]; 
    orignal[i] = '<img src="'+orignal[i]+'" width="200" height="200"\/>';
  orignal[i+5] = orignal[i];
} 
function validate() 
{
    No = 0; 
    if (orignal[c] != orignal[d]) 
    {
        coverpic(c);
        coverpic(d);
    } 
}
