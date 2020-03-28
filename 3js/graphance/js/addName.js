/************************************************************************/
                  /*FILE THAT RECIEVES DANCER'S NAME */
/************************************************************************/

//Add boy dancer's name
 function AddBoyName() {
    var name = 0;
    var nameStatus = "";
    while(name == 0){
      var newN = prompt("New name", nameStatus);
      name = 1;
      if(newN == "") {
        name = 0;
        nameStatus = "Name can't be blank"
      }
    }
    if (newN == null){
      return;
    }
    else {
      CubeBoy(newN);
    }
  }

  //Add girl dancer's name
  function AddGirlName() {
    var name = 0;
    var nameStatus = "";
    
    while(name == 0){
      var newN = prompt("New name", nameStatus);
      name = 1;
      if(newN == "") {
        name = 0;
        nameStatus = "Name can't be blank"
      }
    }
    if (newN == null){
      return;
    }
    else {
      CubeGirl(newN);
    }
  
  }
