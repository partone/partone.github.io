// var strDownloadMime = "image/octet-stream";
var num = 0;
function saveAsImage() {
    var imgData, imgNode;

    $("#scenes > div.box").each(function(){
        if($(this).hasClass("boxSelected")){
            num = $(this).attr("index");
        }
    });

    try {
        var strMime = "image/png";
        imgData = renderer.domElement.toDataURL(strMime);
        // console.log(imgData);
        saveFile(imgData, "test"+num+".png");
        // saveFile(imgData.replace(strMime, strDownloadMime), "test.png");

    } catch (e) {
        console.log(e);
        return;
    }
    var date = new Date();
    var route = "../images/test"+num+".png?"+date.getTime();
    setTimeout(function () {
        if ($(".boxSelected").find('img').length) {
            $(".boxSelected > img").attr("src",route);
        }else{
            $('.boxSelected').prepend('<img class="boxImg" src="../images/test'+num+'.png" />')
        }
        $(".boxImg").css({
            "width": "100%",
            "height": "auto",
            "margin-top": "15%"
        });  
    }, 15000);
}

var saveFile = function (strData, filename) {
    var link = document.createElement('a');
    if (typeof link.download === 'string') {
        document.body.appendChild(link); //Firefox requires the link to be in the body
        link.download = filename;
        link.href = strData;
        link.click();
        document.body.removeChild(link); //remove the link when done
    } else {
        location.replace(uri);
    }
}

