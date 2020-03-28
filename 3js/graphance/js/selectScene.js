$(document).ready(
    function() {
      //Add the HTML
        $( "#scenes" ).on("click", ".box", function() {
            //Do some CSS to indicate selection
            $( ".box" ).removeClass( "boxSelected" );
            $(this).addClass("boxSelected");

            //Get the scene that was selected
            currentSceneIndex = $(this).attr("index");
            selectedScene = scenes[currentSceneIndex];
            $("#scene_name").text(selectedScene.sceneName);
            $("#scene_duration").val(selectedScene.sceneDuration);
            console.log("Changed to scene " + currentSceneIndex);
            //Move the dancers to their positions
            moveObjectsToMatchScene();

            //Pause the music
            pausePlayer();
        });
    }
);


function moveObjectsToMatchScene() {
    //For each dancer, move their positions
    for (var i = 0; i < dancers.length; i++) {
      dancers[i].position.x = dancers[i].scenePosition[currentSceneIndex].x || 0;
      dancers[i].position.y = dancers[i].scenePosition[currentSceneIndex].y || 0;
      dancers[i].position.z = dancers[i].scenePosition[currentSceneIndex].z || 0;
    }
    console.log("Positions retrieved");
}
