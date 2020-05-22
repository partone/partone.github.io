
//Mouse position global values
var xpos;
var ypos;

//Canvas elements
var canvas = document.getElementById('canvas');
var mainContainer = document.getElementById('mainContainer');
var ctx = canvas.getContext("2d");

//Circle array
var circles = [];

setUp();

//Set up canvas
function setUp(){
	//Set resolution for canvas for high dpi devices
	var dpr = window.devicePixelRatio || 1;
	// Get the size of the canvas in CSS pixels.
	var rect = canvas.getBoundingClientRect();
	// Give the canvas pixel dimensions of their CSS
	// size * the device pixel ratio.
	canvas.width = rect.width * dpr;
	canvas.height = rect.height * dpr;
	var ctx = canvas.getContext('2d');
	// Scale all drawing operations by the dpr
	ctx.scale(dpr, dpr);
	ctx.lineWidth=2;
	ctx.fillStyle = "black";
	//ctx.fillRect(0, 0, canvas.width, canvas.height);
}


//On click get mouse location
mainContainer.addEventListener("click", function(){
	//Get mouse position
	xpos = event.clientX;
	ypos = event.clientY;

	//Create a circle object
	var circle ={
		x: xpos,
		y: ypos,
		rad: 1,
	}

	circles.push(circle);

	//Draw circle at position
	/*ctx.beginPath();
	ctx.arc(xpos, ypos, 40, 0, 2 * Math.PI);
	ctx.stroke();*/
});


function animate(){
	if(frameCount % 30 == 0){
		var randColour = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
		ctx.strokeStyle = randColour;
	}

	//ctx.strokeStyle = '#f49e42';

	//B/W
	/*
	if(frameCount % 100 == 0){
		if(n){
			ctx.strokeStyle = '#000';
		} else {
			ctx.strokeStyle = '#999';
		}
	}*/

    if(frameCount){requestAnimationFrame(animate);}
	//ctx.clearRect(0, 0, canvas.width, canvas.height);
    for(var i = 0; i < circles.length; i++){
			//Kill the circle once it passes the window limit
			if(circles[i].rad < canvas.width) {
				//Grow the circle
				ctx.beginPath();
				ctx.arc(circles[i].x, circles[i].y, circles[i].rad, 0, 2 * Math.PI);
				ctx.stroke();

				//circles[i].rad = circles[i].rad*1.01;
				circles[i].rad = circles[i].rad + .8;
				circles[i].y = circles[i].y;
			} else {
				//Remove the cirlce from the circles array if it's big enough
				circles.splice(i, 1);
			}
    }
    frameCount++;
}

frameCount = 1;
animate();
