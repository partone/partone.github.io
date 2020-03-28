$(document).ready(
    function() {
      //Add the HTML
        $( "#add_scene" ).click(function() {
            currentSceneIndex = scenes.length;

            $( ".box" ).removeClass( "boxSelected" );
            $( "<div class='box boxSelected'><div class='boxControls'><div class='sceneMoveUp'>⬆️</div><div class='sceneMoveDown'>⬇️</div><div class='sceneDelete'>❌</div></div></div>" ).attr("index", currentSceneIndex).insertBefore( "#add_scene" );

            //Variable handling
            var newScene = {
              sceneName: "Scene " + currentSceneIndex,
              sceneDuration: 3,
              sceneIndex: currentSceneIndex
            }

            $("#scene_name").text(newScene.sceneName);
            $("#scene_duration").val(newScene.sceneDuration);

            scenes.push(newScene);                       //And push it in with the rest
            console.log("Scene " + currentSceneIndex + " added");

            copyPositionsForNewScene();

            //Pause the music
            pausePlayer();
        });
    }
);

function copyPositionsForNewScene() {
  for(i = 0; i < dancers.length; i++) {
    dancers[i].scenePosition[currentSceneIndex] = {x: dancers[i].position.x, y: dancers[i].position.y, z: dancers[i].position.z};
  }
  console.log("Positions copied");
}
