



var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');


 
var dotSize = 14;

var xCoordList = new Array(); 
var yCoordList = new Array(); 
var dotColorList = new Array();

//these are 2 new lists to cover velocity

var dxList = new Array();
var dyList = new Array();


//check the boundries

var rect = canvas.getBoundingClientRect();
var canvasWidth = rect.right - rect.left;
var CanvasHeight = rect.bottom - rect.top;
//making colored dots

var dotColorList = new Array();

var listOfColors = ["#fff72b", "#3afc20", "#EA4F4D", "#ea04b1", 
"#FF9B00", "#880986", "#6D29EC", "#0061FF", "#8ccfd1", "#71AD55"];

var totalColors = listOfColors.length;


//i took this line from https://www.w3schools.com/howto/howto_js_animate.asp

var id = setInterval(frame, 5);

function moveDots() {

	//move dots just changes x and y

	for( var whatDot = 0; whatDot < xCoordList.length; whatDot++) {

		xCoordList[whatDot] = xCoordList[whatDot] + dxList[whatDot];
		yCoordList[whatDot] = yCoordList[whatDot] + dyList[whatDot];

		//check boundry

		if(dxList[whatDot] < 0) {

			//left side

			if (xCoordList[whatDot] < 0) {

				xCoordList[whatDot] = 5;
				dxList[whatDot] *= -1;

			}


		} else {

			if(xCoordList[whatDot] > canvasWidth){

				xCoordList[whatDot] = canvasWidth - 7;
				dxList[whatDot] *= -1;
			}
		}

		}

		for( var whatDot = 0; whatDot < yCoordList.length; whatDot++) {
		 

		if (dyList[whatDot] < 0) {

			if(yCoordList[whatDot] < 0) {


				yCoordList[whatDot] = 5;
				dyList[whatDot] *= -1;
			}

		} else {

			if (yCoordList[whatDot] > CanvasHeight){

				yCoordList[whatDot] = CanvasHeight - 7;
				dyList[whatDot] *= -1;
			}
		}




		}

	}











//get mouse position

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


	// add create a random color

	var randomColor = Math.floor(Math.random() * totalColors);
 	dotColorList.push(randomColor);

 	//animation for addclick

 	var myDx = (Math.floor(Math.random() * 7)) - 3;
 	var myDy = (Math.floor(Math.random() * 7)) - 3;


 	if (myDx === 0) {
 	
 		myDx = 1;
 
 	}

 	
 	if (myDy === 0) {
 	
 		myDy = 1;
 
 	}

 	dxList.push(myDx);
 	dyList.push(myDy);




}

//redraws the window after each click

function redraw() {
	context.clearRect(0,0, context.canvas.width, context.canvas.height);

	for (var i=0; i < xCoordList.length; i++){

		context.beginPath();
		context.ellipse(xCoordList[i], yCoordList[i], dotSize, dotSize, 0, 0, Math.PI*2);
		//context.fillStyle = "blue";

		var whatColorNumber = dotColorList[i];
	 

		var myColor = listOfColors[whatColorNumber];

	 

	context.fillStyle = myColor;



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


}, false);



function frame() {

	moveDots();
	redraw();
}