 /************************************************************************/
                  /*FILE THAT MANAGES THE SCENES */
/************************************************************************/

 //Change scene name and duration
function changeSceneName() {
  var name = 0;
  var nameStatus = "";
  while(name == 0){
    var newName = prompt("New name", nameStatus);
    name = 1;
    if(newName == "") {
      name = 0;
      nameStatus = "New name can't be blank"
    }
  }
  scenes[currentSceneIndex].sceneName = newName;
  updateSceneNameUI(newName);
}

//Update the UI with the new scene name
function updateSceneNameUI(newName) {
  $("#scene_name").text(newName);
}

//A bunch of scene handling
$( document ).ready(function() {
  //Detect changes on input to duration
  $('#scene_duration').on('input', function() {
      console.log("Scene " + currentSceneIndex  + " duration updated to " + $('#scene_duration').val())
      scenes[currentSceneIndex].sceneDuration = $('#scene_duration').val();
  })

  //Delete a scene
  $(document).on("click", ".sceneDelete", function() {
      //Remove the HTML element
       $(this).parent().parent().remove();
       $("#scene_name").text("");
       $("#scene_duration").val(0);

       //Scenes don't get deleted to avoid messing up the scene indices, their duration gets changed to 0
       scenes[currentSceneIndex].sceneDuration = 0;
  });

  //Move scene up by giving the scene the properties of the scene before it
  $(document).on("click", ".sceneMoveUp", function() {
      currentSceneIndex = $(this).parent().parent().attr("index");
      if(currentSceneIndex == 0) {
        alert("No. That's not true. That's impossible!");
        return;
      }


      var prevSceneIndex = currentSceneIndex - 1;

      //Skip deleted scenes
      while(scenes[prevSceneIndex].sceneDuration === 0) {
        prevSceneIndex--;
        if(prevSceneIndex < 0) {
          alert("No. That's not true. That's impossible!");
          return;
        }
      }

      console.log("Switching " + currentSceneIndex + " and " + prevSceneIndex);


      //Switch scene dancer positions and duration and name
      tmpDuration = scenes[currentSceneIndex].sceneDuration;
      scenes[currentSceneIndex].sceneDuration = scenes[prevSceneIndex].sceneDuration;
      scenes[prevSceneIndex].sceneDuration = tmpDuration;

      tmpName = scenes[currentSceneIndex].sceneName;
      scenes[currentSceneIndex].sceneName = scenes[prevSceneIndex].sceneName;
      scenes[prevSceneIndex].sceneName = tmpName;

      //For each dancer, switch their positions for the switched scenes
      for (var i = 0; i < dancers.length; i++) {
        var tmpX = dancers[i].scenePosition[currentSceneIndex].x;
        var tmpY = dancers[i].scenePosition[currentSceneIndex].y;
        var tmpZ = dancers[i].scenePosition[currentSceneIndex].z;

        dancers[i].scenePosition[currentSceneIndex].x = dancers[i].scenePosition[prevSceneIndex].x;
        dancers[i].scenePosition[currentSceneIndex].y = dancers[i].scenePosition[prevSceneIndex].y;
        dancers[i].scenePosition[currentSceneIndex].z = dancers[i].scenePosition[prevSceneIndex].z;

        dancers[i].scenePosition[prevSceneIndex].x = tmpX;
        dancers[i].scenePosition[prevSceneIndex].y = tmpY;
        dancers[i].scenePosition[prevSceneIndex].z = tmpZ;
      }

      //Select the box above
      $( ".box" ).removeClass( "boxSelected" );
      $(this).parent().parent().prev().addClass("boxSelected");
  });

  //Move scene down
  $(document).on("click", ".sceneMoveDown", function() {
    currentSceneIndex = $(this).parent().parent().attr("index");
    if(currentSceneIndex == scenes.length - 1) {
      alert("No. That's not true. That's impossible!");
      return;
    }

    var nextSceneIndex = Number(currentSceneIndex) + 1;

    //Skip deleted scenes
    while(scenes[nextSceneIndex].sceneDuration === 0) {
      nextSceneIndex++;
      if(nextSceneIndex > scene.length - 1) {
        alert("No. That's not true. That's impossible!");
        return;
      }
    }

    console.log("Switching " + currentSceneIndex + " and " + nextSceneIndex);

    //Switch scene dancer positions and duration and name
    tmpDuration = scenes[currentSceneIndex].sceneDuration;
    scenes[currentSceneIndex].sceneDuration = scenes[nextSceneIndex].sceneDuration;
    scenes[nextSceneIndex].sceneDuration = tmpDuration;

    tmpName = scenes[currentSceneIndex].sceneName;
    scenes[currentSceneIndex].sceneName = scenes[nextSceneIndex].sceneName;
    scenes[nextSceneIndex].sceneName = tmpName;

    //For each dancer, switch their positions for the switched scenes
    for (var i = 0; i < dancers.length; i++) {
      var tmpX = dancers[i].scenePosition[currentSceneIndex].x;
      var tmpY = dancers[i].scenePosition[currentSceneIndex].y;
      var tmpZ = dancers[i].scenePosition[currentSceneIndex].z;

      dancers[i].scenePosition[currentSceneIndex].x = dancers[i].scenePosition[nextSceneIndex].x;
      dancers[i].scenePosition[currentSceneIndex].y = dancers[i].scenePosition[nextSceneIndex].y;
      dancers[i].scenePosition[currentSceneIndex].z = dancers[i].scenePosition[nextSceneIndex].z;

      dancers[i].scenePosition[nextSceneIndex].x = tmpX;
      dancers[i].scenePosition[nextSceneIndex].y = tmpY;
      dancers[i].scenePosition[nextSceneIndex].z = tmpZ;
    }

    //Select the box above
    $( ".box" ).removeClass( "boxSelected" );
    $(this).parent().parent().next().addClass("boxSelected");
  });
});

