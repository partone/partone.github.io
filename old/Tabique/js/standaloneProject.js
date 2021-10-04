var currentImageIndex = 0;
var maxImageIndex = 0;
var projectName;

//Image gallery stuff
$( document ).ready(function() {
  //Get the number of images
  $( ".galleryImage" ).each(function( index ) {
    if(Number($(this).attr('id')) > maxImageIndex) {
      maxImageIndex = $(this).attr('id');
    }
  });
  //Figure out the project name
  projectName = $("#projectName").text();

  //Initial gallery click
  $(".galleryImage").click(function() {
    currentImageIndex = $(this).attr('id');
    $("#imageViewer").show();
    $("#imageViewerBG").show();
    $("#imageViewerImageImg").attr("src", "../../images/projects/" + projectName + "/" + projectName + " (" + currentImageIndex + ").jpg");
  });

  //Left arrow
  $("#leftChange").click(function() {
    switchImgLeft();
  });

  //Right arrow
  $("#rightChange").click(function() {
    switchImgRight();
  });

  //Close viewer
  $("#closeViewer").click(function() {
    $("#imageViewer").hide();
    $("#imageViewerBG").hide();
  })

  //Detect arrow key presses
  $(document).keydown(function(e) {
    switch(e.which) {
        case 37: // left
        switchImgLeft();
        break;

        case 39: // right
        switchImgRight();
        break;

        default: return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
  });
});

function switchImgLeft() {
  currentImageIndex--;
  if(currentImageIndex < 1) {
    currentImageIndex = maxImageIndex;
  }
  if(currentImageIndex > maxImageIndex) {
    currentImageIndex = 1;
  }

  $("#imageViewerImageImg").attr("src", "../../images/projects/" + projectName + "/" + projectName + " (" + currentImageIndex + ").jpg");
}


function switchImgRight() {
  currentImageIndex++;
  if(currentImageIndex < 1) {
    currentImageIndex = maxImageIndex;
  }
  if(currentImageIndex > maxImageIndex) {
    currentImageIndex = 1;
  }

  $("#imageViewerImageImg").attr("src", "../../images/projects/" + projectName + "/" + projectName + " (" + currentImageIndex + ").jpg");
}
