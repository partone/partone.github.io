/************************************************************************/
                /*FILE THAT HELPS WITH THE USER INTERACTIONS*/
/************************************************************************/

/*******ADD BLUE CUBE**********/
function addBoy(){
    var el = document.getElementById("addBoy");
    el.addEventListener("click", AddB, false);
}

/*******ADD PINK CUBE**********/
function addGirl(){
 
    var el = document.getElementById("addGirl");
    el.addEventListener("click", AddG , false);
}


function AddG(){
    console.log("ADD GIRL");
    AddGirlName();
    //CubeGirl();
}
function AddB(){
    console.log("ADD BOY");
    AddBoyName();
    //CubeBoy();
}

