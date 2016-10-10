var canvasDiv = document.getElementById("drawingArea");
var canvas = canvasDiv.getContext('2d');
//canvas.fillStyle = "black";

//canvas.fillRect(0, 0, 1400, 1000);

//STAR CODE
//canvas.fillStyle = "yellow";
//canvas.fillRect(18, 25, 10, 10);
//canvas.beginPath();
//canvas.moveTo(18,25);
//canvas.lineTo(28,25);
//canvas.lineTo(23,15);
//canvas.fill();
//canvas.beginPath();
//canvas.moveTo(28,25);
//canvas.lineTo(28,35);
//canvas.lineTo(38,30);
//canvas.fill();
//canvas.beginPath();
//canvas.moveTo(28,35);
//canvas.lineTo(18,35);
//canvas.lineTo(23,45);
//canvas.fill();
//canvas.beginPath();
//canvas.moveTo(18,25);
//canvas.lineTo(18,35);
//canvas.lineTo(8,30);
//canvas.fill();
//STAR CODE

//MOON CODE
//canvas.beginPath();
    //ctx.arc(75,75,50,0,Math.PI*2,true); // Outer circle
    //ctx.moveTo(110,75);
    //canvas.arc(75,75,35,0,Math.PI,false);  // Mouth (clockwise)
    //ctx.moveTo(65,65);
    //ctx.arc(60,65,5,0,Math.PI*2,true);  // Left eye
    //ctx.moveTo(95,65);
    //ctx.arc(90,65,5,0,Math.PI*2,true);  // Right eye
    //canvas.stroke();
    //canvas.arc(75,75,35,0,Math.PI,false);
    //canvas.stroke();
    canvas.fillStyle = "orange";
    canvas.beginPath();
canvas.arc(700, 500, 100, 0, 2*Math.PI);
canvas.fill();
canvas.stroke();
//MOON CODE

//MOON SHADOW
//canvas.fillStyle = "black";
//canvas.beginPath();
//canvas.arc(1320, 75, 40, 0, 2*Math.PI);
//canvas.fill();
//canvas.stroke();
//MOON SHADOW

//ground
canvas.fillStyle = "#0077BE";
canvas.fillRect(0, 500, 1400, 600);
//tree
//canvas.fillStyle = "#D2691E";
//canvas.fillRect(100, 300, 50, 430);

//TWEE
canvas.fillStyle = "white";
canvas.beginPath();
canvas.moveTo(250,550);
canvas.lineTo(250,600);
canvas.lineTo(220,600);
canvas.fill();

canvas.fillStyle = "brown";
canvas.fillRect(233, 600, 5, 15);

canvas.fillStyle = "brown";
canvas.fillRect(210, 615, 50, 15);

canvas.fillStyle = "#f4bc42";
canvas.save();
canvas.scale(1,0.4);
canvas.beginPath();
canvas.arc(1200, 1600, 150, 0, Math.PI*2, false);
canvas.fill();
//canvas.stroke();
canvas.closePath();
canvas.restore();

canvas.fillStyle = "#0077BE";
canvas.fillRect(1050, 630, 300, 100);

canvas.fillStyle = "brown";
canvas.fillRect(1214, 520, 5, 80);

//TWEE LEAVE
canvas.fillStyle = "green";
canvas.fillRect(1207, 505, 20, 20);
canvas.beginPath();
canvas.moveTo(1207,505);
canvas.lineTo(1227,505);
canvas.lineTo(1217,485);
canvas.fill();
canvas.beginPath();
canvas.moveTo(1207,505);
canvas.lineTo(1207,525);
canvas.lineTo(1187,515);
canvas.fill();
canvas.beginPath();
canvas.moveTo(1227,505);
canvas.lineTo(1227,525);
canvas.lineTo(1247,515);
canvas.fill();
canvas.beginPath();
canvas.moveTo(1207,525);
canvas.lineTo(1227,525);
canvas.lineTo(1217,545);
canvas.fill();
canvas.beginPath();
canvas.moveTo(1207,525);
canvas.lineTo(1227,525);
canvas.lineTo(1217,545);
canvas.fill();

canvas.beginPath();
canvas.arc(1217, 515, 18, 0, 2*Math.PI);
canvas.fill();
//STAR CODE

canvas.fillStyle = "brown";
canvas.fillRect(1150, 595, 35, 20);


canvas.beginPath();
canvas.moveTo(1150,595);
canvas.lineTo(1155,585);
canvas.lineTo(1180,585);
canvas.lineTo(1185,595);
canvas.fill();


canvas.fillStyle = "black";
canvas.fillRect(1150, 595, 35, 1);

canvas.rect(1165, 593, 5, 4);
canvas.strokeStyle = "gold";
canvas.stroke();

canvas.fillStyle = "gold";
canvas.strokeStyle = "black";
canvas.beginPath();
canvas.arc(1200, 610, 3, 0, 2*Math.PI);
canvas.fill();
canvas.stroke();

canvas.fillStyle = "gold";
canvas.strokeStyle = "black";
canvas.beginPath();
canvas.arc(1180, 615, 3, 0, 2*Math.PI);
canvas.fill();
canvas.stroke();

canvas.fillStyle = "gold";
canvas.strokeStyle = "black";
canvas.beginPath();
canvas.arc(1190, 612, 3, 0, 2*Math.PI);
canvas.fill();
canvas.stroke();

canvas.fillStyle = "gold";
canvas.strokeStyle = "black";
canvas.beginPath();
canvas.arc(1190, 605, 3, 0, 2*Math.PI);
canvas.fill();
canvas.stroke();

canvas.fillStyle = "gold";
canvas.strokeStyle = "black";
canvas.beginPath();
canvas.arc(1140, 612, 3, 0, 2*Math.PI);
canvas.fill();
canvas.stroke();

canvas.fillStyle = "gold";
canvas.strokeStyle = "black";
canvas.beginPath();
canvas.arc(1200, 615, 3, 0, 2*Math.PI);
canvas.fill();
canvas.stroke();

canvas.fillStyle = "gold";
canvas.strokeStyle = "black";
canvas.beginPath();
canvas.arc(1160, 613, 3, 0, 2*Math.PI);
canvas.fill();
canvas.stroke();

canvas.fillStyle = "gold";
canvas.strokeStyle = "black";
canvas.beginPath();
canvas.arc(1175, 612, 3, 0, 2*Math.PI);
canvas.fill();
canvas.stroke();

canvas.fillStyle = "gold";
canvas.strokeStyle = "black";
canvas.beginPath();
canvas.arc(1150, 610, 3, 0, 2*Math.PI);
canvas.fill();
canvas.stroke();
