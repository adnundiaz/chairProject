
var ctx;

var WIDTH;
var HEIGHT;

var canvasMinX;
var canvasMaxX;

var canvasMinY;
var canvasMaxY;

var x = 0;
var y = 0;

$(document).ready(function(){
// Referencia al canvas
ctx = $('#miCanvas')[0].getContext("2d");

WIDTH = $("#miCanvas").width();
HEIGHT = $("#miCanvas").height();

canvasMinX = $("#miCanvas").offset().left;
canvasMaxX = canvasMinX + WIDTH;

canvasMinY = $("#miCanvas").offset().top;
canvasMaxY = canvasMinY + HEIGHT;

      
ctx.fillStyle = "rgb(0,0,0)";
for(x=00; x<400; x+=25){
            for(y=00; y<600; y+=25){
               ctx.strokeRect(x,y,25,25)
            }    
         }
         
});           
$("canvas").click(function(event){

    var x = Math.floor((event.pageX-$("#miCanvas").offset().left)/25);
    var y = Math.floor((event.pageY-$("#miCanvas").offset().top)/25);
    ctx.fillStyle = "rgb(255,255,255)";
    ctx.fillRect(x*25, y*25, 24, 24);


 });   
