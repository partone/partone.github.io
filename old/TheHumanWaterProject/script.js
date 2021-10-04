// All links new tab
$("a").attr("target", "_blank");

// Populate dropdown
const ideologiesSorted = ideologies.sort((a, b) => a[0].localeCompare(b[0]));
let proven = 0;
for (i = 0; i < ideologiesSorted.length; i++) {
    if (ideologiesSorted[i][1] != `> \n\n` + `\n\n`) {
        proven++;
        $('#beliefsList').append('<div class="belief" style="display:none">' + ideologiesSorted[i][0] + '</div>');
    }
}
console.log("Proven " + proven + " of " + ideologies.length + " beliefs");

function toSecond() {
    document.getElementById("beliefInput").focus();
    $("#firstView").fadeOut("fast", function () {
        $("#secondView").fadeIn("fast");
        $("#beliefInput").focus();
    });

}

function thirdToSecond() {
    document.getElementById("beliefInput").value = "";
    $("#backdrop").css("background", "rgba(0, 0, 0, 0.8)");
    $("body, html").removeClass("scrollFlow");
    $(".belief").hide();
    $("#thirdView").fadeOut("fast", function () {
        $("#secondView").fadeIn("fast");
        $("#beliefInput").focus();
    });
}

$(".belief").click(function (e) {
    $("#beliefTitle").text($(e.target).text());
    $("#backdrop").css("background", "#111");
    $("body, html").addClass("scrollFlow");
    $("#proofOfWater").html(markdown(ideologies.find(x => x[0] === $(e.target).text())[1]))
    $("#secondView").fadeOut("fast", function () { $("#thirdView").fadeIn("fast"); });
});

function filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("beliefInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown");
    a = document.getElementsByClassName("belief");
    displayed = 0;
    $("#beliefInput").removeClass("noBeliefFound");
    $(".belief").hide();
    $("#noResults").hide();
    if (filter === "") {
        return;
    }
    for (i = 0; i < a.length; i++) {
        txtValue = a[i].textContent || a[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            displayed++;
            a[i].style.display = "";
            if (displayed === 5) {
                displayed = 0;
                return;
            }
        } else {
            a[i].style.display = "none";
        }
    }
    if(!displayed) {
        $("#beliefInput").addClass("noBeliefFound");
        $("#noResults").show();
    }
}
