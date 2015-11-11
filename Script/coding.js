var ac = 'cover.jpg';
var orignal = ['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg'];
function coverpic(i) 
{
    document.getElementById('getcover'+i).innerHTML = '<div onclick="displayOrignal('+i+');return false;"><img src="'+ac+'" width="200" height="200" \/><\/div>';
    
} 
var c, d,No, tableid, timerss; 
window.onload=run;
