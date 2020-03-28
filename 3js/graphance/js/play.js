//Handle stuff when the player plays the music
function playTransitions() {
  playScene = true;
  var player = document.getElementById("rllly");
  var musicStartTime = rllly.currentTime;
}

//Set the player time
function setPlayerTime() {
  var newTime = prompt("Enter the start time (s)");
  var player = document.getElementById("rllly");
  pausePlayer();
  player.currentTime = newTime;
}

//Returns the player time
function getPlayerTime() {
  var player = document.getElementById("rllly");
  var musicStartTime = rllly.currentTime;
  return musicStartTime;
}

//When the user seeks on the player control, update the animations
function seekPlayer() {
  var player = document.getElementById("rllly");
  if(!player.paused && !player.ended && 0 < player.currentTime) {
    var musicStartTime = rllly.currentTime;
    startTransitions(musicStartTime);
  }
}

//Pause the player and animations
function pausePlayer() {
  var player = document.getElementById("rllly");
  playScene = false;
  player.pause();
  moveObjectsToMatchScene();
}

//Get how many seconds until the start of the next scene
function getTimePassedThisScene(musicTime) {
  var timePassed = musicTime;
  //Subtract the duration of all previous scenes
  for(i = 0; i < currentSceneIndex; i++) {
    timePassed -= scenes[i].sceneDuration;
  }
  return timePassed;
}

function getCurrentSceneIndexFromTime(sceneTime) {
  var timeSum = 0;
  //Loop through scenes
  for(i = 0; i < scenes.length; i++) {
    //If the scene ends after the current time, then this scene is the current scene
    if(Number(timeSum) + Number(scenes[i].sceneDuration) >= sceneTime) {
        return i;
    }
    timeSum += Number(scenes[i].sceneDuration)    //I hate JS
  }
  return scenes.length - 1;     //Final scene
}

function isFinalScene() {
  if(currentSceneIndex == scenes.length - 1) {
    return true;
  }
  //If all future scenes are of duration 0, ignore them
  for(i = currentSceneIndex + 1; i < scenes.length; i++) {
    if(scenes[i].sceneDuration != 0) {   //If one isn't duration = 0, we're not at the last scene yet
      return false;
    }
  }
  return true;
}

//Play the animations
function playSceneTransitions() {
  var currentX;
  var currentY;
  var startX;
  var startY;
  var goalX;
  var goalY;
  var moveToX;
  var moveToY;
  var currentMusicTime;
  var timePassedThisScene;
  var scenePercentagePassed;
  var nextSceneIndex;
  var thisSceneDuration;
  var finalScene = false;

  currentMusicTime = getPlayerTime();
  currentSceneIndex = getCurrentSceneIndexFromTime(currentMusicTime);
  timePassedThisScene = getTimePassedThisScene(currentMusicTime);
  thisSceneDuration = scenes[currentSceneIndex].sceneDuration;



  if(isFinalScene()) {
    finalScene = true;
  }

  followTransitionsWithSceneSelection();     //For selecting the right HTML component

  //Update all the dancer positions, no movement if it's the final scene
  if(!finalScene) {
    //Skip deleted scenes
    nextSceneIndex = currentSceneIndex + 1;
    while(scenes[nextSceneIndex].sceneDuration === 0) {
      nextSceneIndex++;
    }

    for(i = 0; i < dancers.length; i++) {
      //Get current dancer positions
      currentX = dancers[i].position.x;
      currentY = dancers[i].position.z;

      //Get the scene's start positions
      startX = dancers[i].scenePosition[currentSceneIndex].x;
      startY = dancers[i].scenePosition[currentSceneIndex].z;

      //Get the positions they need to get to for the next scene
      goalX = dancers[i].scenePosition[nextSceneIndex].x;
      goalY = dancers[i].scenePosition[nextSceneIndex].z;

      //Get the percentage of the scene that has passed
      scenePercentage = timePassedThisScene / thisSceneDuration;

      //Move proportionally to how much time has passed this scene
      moveToX = (scenePercentage * (goalX - startX)) + startX;
      moveToY = (scenePercentage * (goalY - startY)) + startY;
      console.log(currentSceneIndex + " " + moveToX + " " + moveToY + " " + scenePercentage + "% " + startX + " " + startY);
      dancers[i].position.x = moveToX;
      dancers[i].position.z = moveToY;
    }
  }
}

//Highlight the currently playing scene
function followTransitionsWithSceneSelection() {
  $(".box").removeClass("boxSelected");
  $(".box[index='" + currentSceneIndex + "']" ).addClass("boxSelected");
}
