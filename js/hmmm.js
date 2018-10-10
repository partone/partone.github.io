
//Mouse position global values
var xpos;
var ypos;

//Canvas elements
var canvas = document.getElementById('canvas');
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
canvas.addEventListener("click", function(){
	

	//Get mouse position
	xpos = event.offsetX;
	ypos = event.offsetY;

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
	//if(frameCount % 40 == Math.floor(Math.random() * 40) || frameCount == 1){
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
		ctx.beginPath();
		ctx.arc(circles[i].x, circles[i].y, circles[i].rad, 0, 2 * Math.PI);
		ctx.stroke();

		//circles[i].rad = circles[i].rad*1.01;
		circles[i].rad = circles[i].rad + .8;
		circles[i].y = circles[i].y;
    }
    frameCount++;
}

frameCount = 1;
animate();