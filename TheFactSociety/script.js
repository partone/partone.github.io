
$("#learnMore").click(function () {
    $("body, html").css("overflow", "overlay");
    $("#headerContainer").css("height", "auto");
    $("#headerContainer").css("overflow", "auto");
    $("header b").css("color", "black");
    $("#learnMore").fadeOut(100);
})


$(".project").hover(function () {
    $(this).find(".projectBackground").toggleClass("updown");
}, function() {
    $(this).find(".projectBackground").toggleClass("updown");
});
