// Populate dropdown
const ideologiesSorted = ideologies.sort((a, b) => a[0].localeCompare(b[0]));
for (i = 0; i < ideologiesSorted.length; i++) {
    if(ideologiesSorted[i][1] != `> \n\n` + `\n\n`) {
        $('#beliefsList').append('<div class="belief" style="display:none">' + ideologiesSorted[i][0] + '</div>');
    }
}

function toSecond() {
    document.getElementById("beliefInput").focus();
    $("#firstView").fadeOut("fast");
    $("#secondView").fadeIn("fast");
    $("#beliefInput").focus();
}

function thirdToSecond() {
    document.getElementById("beliefInput").value = "";
    $("#backdrop").css("background", "rgba(0, 0, 0, 0.8)");
    $("body, html").removeClass("scrollFlow");
    $(".belief").hide();
    $("#thirdView").fadeOut("fast");
    $("#secondView").fadeIn("fast");
    $("#beliefInput").focus();
}

$(".belief").click(function(e) {
    $("#beliefTitle").text($(e.target).text());
    $("#backdrop").css("background", "#111");
    $("body, html").addClass("scrollFlow");
    $("#proofOfWater").html(markdown(ideologies.find(x => x[0] === $(e.target).text())[1]))
    $("#secondView").fadeOut("fast");
    $("#thirdView").fadeIn("fast");
});

function filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("beliefInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown");
    a = document.getElementsByClassName("belief");
    displayed = 0;
    $(".belief").hide();
    if(filter === "") {
        return;
    }
    for (i = 0; i < a.length; i++) {
        txtValue = a[i].textContent || a[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            displayed++;
            a[i].style.display = "";
            if(displayed === 5) {
                displayed = 0;
                return;
            }
        } else {
            a[i].style.display = "none";
        }
    }
}
