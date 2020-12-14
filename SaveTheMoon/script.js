var d = new Date();
var n = d.getFullYear();
$("footer").html("© " + n + " Fact Society&nbsp&nbsp●&nbsp&nbsp<i>Veritas Occulta</i>");

$("#countdown").html("August 27th " + (n + 5));

$("#headerMenuWhat").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#welcome").offset().top - 50
    }, 800);
});

$("#headerMenuAction").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#takeAction").offset().top
    }, 800);
});

$("#headerMenuSociety").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#factSociety").offset().top
    }, 800);
});

$("#moonProgressDescription1").html("June 25th " + (n - 6) + "<br><b>0%</b> tarp coverage<br><b>100%</b> visibility");
$("#moonProgressDescription2").html("March 18th " + (n - 3) + "<br><b>8%</b> tarp coverage<br><b>92%</b> visibility");
$("#moonProgressDescription3").html("December 3rd " + (n - 1) + "<br><b>23%</b> tarp coverage<br><b>77%</b> visibility");

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
