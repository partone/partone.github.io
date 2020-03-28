/************************************************************************/
            /*FILE THAT HELPS SWITCH BETWEEN CAMERAS*/
/************************************************************************/

function cameras(){
    orbitControls.enabled = false;
    $( "#camera1" ).click(function() {
        orbitControls.enabled = true;
        activeCamera = cameraOrbit;
        activeHelper = cameraOrbitHelper;
        // console.log(activeCamera);
    });

    $( "#camera2" ).click(function() {
        orbitControls.enabled = false;
        activeCamera = cameraPerspective;
        activeHelper = cameraPerspectiveHelper;
        // console.log(activeCamera);
    });

    if ( activeCamera == cameraPerspective ) {
        cameraPerspective.updateProjectionMatrix();
        cameraPerspectiveHelper.update();
        cameraPerspectiveHelper.visible = true;
        cameraOrbitHelper.visible = false;
    } else {
        cameraOrbit.updateProjectionMatrix();
        cameraOrbitHelper.update();
        cameraOrbitHelper.visible = true;
        cameraPerspectiveHelper.visible = true;
    }
}