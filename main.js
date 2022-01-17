var mouseEvent = "empty";
var lastPosX = 0;
var lastPosY = 0;
var canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

var color = "black";
var width = 1;

canvas.addEventListener("mousedown", myMousedown);
function myMousedown(e){
 color = document.getElementById("col").value;   
 width = document.getElementById("wid").value;   
 radius = document.getElementById("rad").value;
 mouseEvent = "mouseDown";
}

canvas.addEventListener("mouseup", myMouseup);
function myMouseup(e){
 mouseEvent = "mouseUp";
}

canvas.addEventListener("mouseleave", myMouseleave);
function myMouseleave(e){
 mouseEvent = "mouseLeave";
}

canvas.addEventListener("mousemove", myMousemove);
function myMousemove(e){
currentPosX = e.clientX - canvas.offsetLeft; 
currentPosY = e.clientY - canvas.offsetTop; 

if (mouseEvent == "mouseDown"){
console.log("Last position of x and y is");
console.log("x="+lastPosX+"y="+lastPosY);
ctx.beginPath(); 
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.arc(currentPosX, currentPosY, radius, 0, 2*Math.PI);  

console.log("Current position of x and y is");
console.log("x="+currentPosX+"y="+currentPosY);


ctx.stroke();
}
lastPosX = currentPosX;
lastPosY = currentPosY;
}

function clearArea(){
ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);    
}
