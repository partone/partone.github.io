$(document).ready(
    function() {
        $( "#camera1" ).click(function() {
            $( "#webglcanvas" ).css("background-color", "yellow");
        });

        $( "#camera2" ).click(function() {
            $( "#webglcanvas" ).css("background-color", "red");
        });
    }
);
