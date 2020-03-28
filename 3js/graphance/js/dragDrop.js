/************************************************************************/
            /*FILE THAT ALLOWS TO DRAG AND DROP AN ELEMENT
                            IN THE CANVAS*/
/************************************************************************/

function dragAndDrop(){
    var controls = new THREE.DragControls( dancers, cameraPerspective, renderer.domElement );

    controls.addEventListener( 'dragstart', dragStartCallback );
    controls.addEventListener( 'drag', dragCallback);
    controls.addEventListener( 'dragend', dragendCallback );

    function dragStartCallback(event) {
      if($("#changeName").prop("checked") == true){
        var name = 0;
        var nameStatus = "";
        while(name == 0){
          var newN = prompt("New name", nameStatus);
          name = 1;
          if(newN == "") {
            name = 0;
            nameStatus = "Name can't be blank"
          }
        }
        if(newN == null){
          $("#changeName").click();
          return;
        }
        changeName(event.object, newN);
        $("#changeName").click();
        return;
      }else{
        startColor = event.object.material.color.getHex();
        event.object.material.color.setHex(0xf5163f);
        console.log("DRAG START");
      }
    }
    function dragCallback(event){
      if($("#changeName").prop("checked") == true){
        alert("Change your name first")
      }else{
        event.object.position.y = 0;
        console.log("DRAG");
      }
    }
    function dragendCallback(event) {
      if($("#changeName").prop("checked") == true){
        alert("Change your name first")
      }else{
        event.object.material.color.setHex(startColor);
        var pos = event.object.position;
        updateAllPositions()
        console.log("DRAG END");
      }
    }
}

//Inefficient but whatever.  Update where all the dancers are
function updateAllPositions() {
  for(i = 0; i < dancers.length; i++) {
    dancers[i].scenePosition[currentSceneIndex] = {x: dancers[i].position.x, y: dancers[i].position.y, z: dancers[i].position.z};
  }
  console.log("Positions updated");
}
