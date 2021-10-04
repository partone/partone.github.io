function closeMobileContact() {
  $("#contact").fadeOut(200);

  removeSelectedClasses();

  //Highlight header again
  var scroll = $(window).scrollTop();
  if (scroll < $("#contentLanding").height() / 2) {
    //removeSelectedClasses();
    $("#inicioButton").addClass("headerBarElementSelected");
  } else if(scroll > $("#contentNosotros").offset().top + ($("#contentProyectos").height() / 2)) {
    //removeSelectedClasses();
    $("#proyectosButton").addClass("headerBarElementSelected");
  } else if(scroll > $("#contentLanding").offset().top + ($("#contentNosotros").height() / 2)) {
    //removeSelectedClasses();
    $("#quienesSomosButton").addClass("headerBarElementSelected");
  }
}

function openMobileContact() {
  $("#contact").fadeIn(500);
}

function removeSelectedClasses() {
  $(".headerBarElement").removeClass("headerBarElementSelected");
}

$( document ).ready(function() {
  $("#contactoButton").click(function() {
        removeSelectedClasses();
        $("#contactoButton").addClass("headerBarElementSelected");
        $("#contact").fadeIn(600);
      });
});
