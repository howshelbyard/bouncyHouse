



var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');



var dotSize = 10;
var xCoordList = new Array(); 
var yCoordList = new Array(); 



function getMousePos(canvas, event) {
	var rect = canvas.getBoundingClientRect ()

	return{
		x: event.clientX - rect.left,
		y: event.clientY - rect.top
	};

	}


function addClick(x, y) {
	xCoordList.push(x);
	yCoordList.push(y);
}


function redraw() {
	context.clearRect(0,0, context.canvas.width, context.canvas.height);

	for (var i=0; i < xCoordList.length; i++){

		context.beginPath();
		context.ellipse(xCoordList[i], yCoordList[i], dotSize, dotSize, 0, 0, Math.PI*2);
		context.fillStyle = "blue";
		context.fill();
	context.closePath();

	}
}



canvas.addEventListener('mousedown', function(event) {

var mousePos = getMousePos(canvas,event);
var message = 'Mouse Down position' + mousePos.x + "," +mousePos.y;

addClick(mousePos.x, mousePos.y);
redraw();
console.log(message);


}, false)