
$("#headerMenuWhat").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#welcome").offset().top - 50
    }, 800);
});

$("#headerMenuMyth").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#colourMyth").offset().top - 40
    }, 800);
});


// Myth debunking
$("tr").click(function(){
  var hidden = 0;
  if($(this).find(".lieExplanation").is(":hidden"))
  {
    hidden = 1;
  }

  $(".lieExplanation").slideUp();
  $(".glyphicon-minus").toggleClass("glyphicon-minus").toggleClass("glyphicon-plus");

  if(hidden) {
    $(this).find(".lieExplanation").slideToggle();
    $(this).find(".glyphicon").toggleClass("glyphicon-plus");
    $(this).find(".glyphicon").toggleClass("glyphicon-minus");
  }
});
