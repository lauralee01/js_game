var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.rect(20, 40, 80, 80);
ctx.fillStyle = "#FF0000";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.arc(240, 160, 50, 0, Math.PI*2, false);
ctx.fillStyle = "yellow";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.rect(100, 10, 200, 70);
ctx.strokeStyle = "rgba(200, 0, 255, 0.5)";
ctx.stroke();
ctx.closePath();