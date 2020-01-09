
$( document ).ready(function() {
  //Select image filter
  $(".galleryHeaderElement").click(function() {
    $(".galleryHeaderElement").removeClass("galleryHeaderElementSelected");
    $(this).addClass("galleryHeaderElementSelected");
  });

  $("#allFilter").click(function(e) {
    $("#galleryContainer").slideUp(400, function() {
      $(".galleryImage").show();
      $("#galleryContainer").slideDown();
      e.preventDefault();
    });
  });

  $("#interiorFilter").click(function(e) {
    $("#galleryContainer").slideUp(400, function() {
      $(".interior").show();
      $(".exterior").hide();
      $("#galleryContainer").slideDown();
      e.preventDefault();
    });
  });

  $("#exteriorFilter").click(function(e) {
    $("#galleryContainer").slideUp(400, function() {
      $(".exterior").show();
      $(".interior").hide();
      $("#galleryContainer").slideDown();
      e.preventDefault();
    });
  });
});
