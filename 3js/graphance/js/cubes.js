/************************************************************************/
                    /*FILE THAT CREATES CUBES*/
/************************************************************************/

/*CREATE A BOY DANCER WITH ITS NAME*/
function CubeBoy(name)
{
  console.log("createboy");

    var geometry = new THREE.BoxGeometry( 5, 5, 5 );
    var material = new THREE.MeshBasicMaterial( {color: 0x4287f5} );
    var cube = new THREE.Mesh( geometry, material );
    cube.scenePosition = {};
    for(i = 0; i < scenes.length; i++) {
      cube.scenePosition[i] = {x: 0, y: 0, z: 0};   //Set the cube's position for this scene and all others
    }

    var spritey = makeTextSprite( name, 
		{ fontsize: 65, borderColor: {r:255, g:0, b:0, a:1.0}, backgroundColor: {r:255, g:100, b:100, a:0.8} } );
    spritey.position.set(0,0,-5);

		console.log(name);
    cube.add( spritey );
    
    root.add( cube );
    dancers.push( cube ); 
}

/*CREATE A GIRL DANCER WITH ITS NAME*/
function CubeGirl(name)
{
    var geometry = new THREE.BoxGeometry( 5, 5, 5 );
    var material = new THREE.MeshBasicMaterial( {color: 0xfc839a} );
    var cube = new THREE.Mesh( geometry, material );
    cube.scenePosition = {};
    for(i = 0; i < scenes.length; i++) {
      cube.scenePosition[i] = {x: 0, y: 0, z: 0};   //Set the cube's position for this scene and all others
    }
    dancers.push( cube );
    console.log("GIRL")
    console.log(name);

    var spritey = makeTextSprite( name, 
      { fontsize: 65, borderColor: {r:255, g:0, b:0, a:1.0}, backgroundColor: {r:255, g:100, b:100, a:0.8} } );
      spritey.position.set(0,0,-5);

    cube.add(spritey);
    root.add( cube );
    dancers.push( cube );
}


/*CREATE NAME LABELS */
function makeTextSprite( message, parameters )
{
  console.log("SPRITEY");
	if ( parameters === undefined ) parameters = {};
	
	var fontface = parameters.hasOwnProperty("fontface") ? 
		parameters["fontface"] : "Arial";
	
	var fontsize = parameters.hasOwnProperty("fontsize") ? 
		parameters["fontsize"] : 18;
	
	var borderThickness = parameters.hasOwnProperty("borderThickness") ? 
		parameters["borderThickness"] : 4;
	
	var borderColor = parameters.hasOwnProperty("borderColor") ?
		parameters["borderColor"] : { r:0, g:0, b:0, a:1.0 };
	
	var backgroundColor = parameters.hasOwnProperty("backgroundColor") ?
		parameters["backgroundColor"] : { r:255, g:255, b:255, a:1.0 };
	//var spriteAlignment = THREE.SpriteAlignment.topLeft;
		
	var canvas = document.createElement('canvas');
	var context = canvas.getContext('2d');
	context.font = "Bold " + fontsize + "px " + fontface;
    
	// get size data (height depends only on font size)
	var metrics = context.measureText( message );
	var textWidth = metrics.width;
	
	// background color
	context.fillStyle   = "rgba(" + backgroundColor.r + "," + backgroundColor.g + ","
								  + backgroundColor.b + "," + backgroundColor.a + ")";
	
	// text color
	context.fillStyle = "rgba(127, 127, 127, 1.0)";
	context.fillText( message, borderThickness, fontsize + borderThickness);
	
	// canvas contents will be used for a texture
	var texture = new THREE.Texture(canvas) 
	texture.needsUpdate = true;
	var spriteMaterial = new THREE.SpriteMaterial( 
		{ map: texture, useScreenCoordinates: true } );
	var sprite = new THREE.Sprite( spriteMaterial );
	sprite.scale.set(20,10,1.0);
	return sprite;	
}

/*CHANGE DANCER'S NAME */
function changeName(cube, name){
  cube.children.pop();
  var spritey = makeTextSprite( name, 
    { fontsize: 65, borderColor: {r:255, g:0, b:0, a:1.0}, backgroundColor: {r:255, g:100, b:100, a:0.8} } );
  spritey.position.set(0,0,-5);
  cube.add(spritey);
}
