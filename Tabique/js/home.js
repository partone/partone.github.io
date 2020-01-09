//Fade in background images on load
$("#metalWallBG").bind("load", function () { $(this).fadeIn(1000)});
$("#metalWallBG2").bind("load", function () { $(this).fadeIn(1000)});

//Fade in logo
$( document ).ready(function() {
    $('#contentLandingLogo').fadeIn(1000);
    $("#metalWallBG").fadeIn(1000);
    $("#metalWallBG2").fadeIn(1000);

    //Logo click
    $("#headerLogo").click(function() {
      removeSelectedClasses();
      $("#inicioButton").addClass("headerBarElementSelected");
      $([document.documentElement, document.body]).animate({
          scrollTop: 0
      }, 1000);
    });

    //Set the menu buttons
    $("#inicioButton").click(function() {
      removeSelectedClasses();
      $("#inicioButton").addClass("headerBarElementSelected");
      $([document.documentElement, document.body]).animate({
          scrollTop: 0
      }, 1000);
    });

    $("#quienesSomosButton").click(function() {
      removeSelectedClasses();
      $("#quienesSomosButton").addClass("headerBarElementSelected");
      $([document.documentElement, document.body]).animate({
          scrollTop: $("#contentNosotros").offset().top
      }, 1000);
    });

    $("#proyectosButton").click(function() {
      removeSelectedClasses();
      $("#proyectosButton").addClass("headerBarElementSelected");
      $([document.documentElement, document.body]).animate({
          scrollTop: $("#contentProyectos").offset().top
      }, 1000);
    });

    //Select header options depending on scroll position
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll < $("#contentLanding").height() / 2) {
          removeSelectedClasses();
          $("#inicioButton").addClass("headerBarElementSelected");
        } else if(scroll > $("#contentNosotros").offset().top + ($("#contentProyectos").height() / 2)) {
          removeSelectedClasses();
          $("#proyectosButton").addClass("headerBarElementSelected");
        } else if(scroll > $("#contentLanding").offset().top + ($("#contentNosotros").height() / 2)) {
          removeSelectedClasses();
          $("#quienesSomosButton").addClass("headerBarElementSelected");
        }
    });

    //Remove the selected class from header options
    function removeSelectedClasses() {
      $(".headerBarElement").removeClass("headerBarElementSelected");
    }

    //Initial header check
    var scroll = $(window).scrollTop();
    if (scroll < $("#contentLanding").height() / 2) {
      removeSelectedClasses();
      $("#inicioButton").addClass("headerBarElementSelected");
    } else if(scroll > $("#contentNosotros").offset().top + ($("#contentProyectos").height() / 2)) {
      removeSelectedClasses();
      $("#proyectosButton").addClass("headerBarElementSelected");
    } else if(scroll > $("#contentLanding").offset().top + ($("#contentNosotros").height() / 2)) {
      removeSelectedClasses();
      $("#quienesSomosButton").addClass("headerBarElementSelected");
    }
});
