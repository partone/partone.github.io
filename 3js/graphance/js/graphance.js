/************************************************************************/
            /*FILE THAT CONTAINS THE PRINCIPAL FUNCTIONS*/
/************************************************************************/

function run() {
    requestAnimationFrame(function() { run(); });

        // Update the camera controller
        orbitControls.update();
        renderer.clear();
        activeHelper.visible = false;
        renderer.render( scene, activeCamera );
        activeHelper.visible = false;
        if(playScene) {
          playSceneTransitions();
        }
}


function createScene(canvas) {

    // Create the Three.js renderer and attach it to our canvas
    renderer = new THREE.WebGLRenderer( { canvas: canvas, antialias: true , preserveDrawingBuffer: true } );

    // Set the viewport size
    renderer.setSize(canvas.width, canvas.height);

    // Turn on shadows
    renderer.shadowMap.enabled = true;
    // Options are THREE.BasicShadowMap, THREE.PCFShadowMap, PCFSoftShadowMap
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    // Create a new Three.js scene
    scene = new THREE.Scene();

    //Scene handling variables
    var newScene = {
    sceneName: "Scene 0",
    sceneDuration: 3,
    sceneIndex: 0 }

    scenes.push(newScene);

    // Add  a camera so we can view the scene
    camera = new THREE.PerspectiveCamera( 45, canvas.width / canvas.height, 1, 4000 );
    //camera.position.set(-5, 50, 0);
    scene.add(camera);

    // Add  a camera so we can view the scene
    cameraPerspective = new THREE.PerspectiveCamera( 45, canvas.width / canvas.height, 1, 4000 );
    //cameraPerspective.position.set(-5, 40, 200);
    cameraPerspective.position.set(0, 200, 20);
     cameraPerspective.rotation.set(-1.5, 0, 0);

    cameraPerspectiveHelper = new THREE.CameraHelper( cameraPerspective );
    // cameraPerspectiveHelper.position.set(-5, 40, 200);
    scene.add( cameraPerspectiveHelper );

    cameraOrbit = new THREE.PerspectiveCamera( 45, canvas.width / canvas.height, 1, 4000 );
    cameraOrbit.position.set(-10, 100, 250);

    cameraOrbitHelper = new THREE.CameraHelper( cameraOrbit );
    scene.add( cameraOrbitHelper );

    orbitControls = new THREE.OrbitControls(cameraOrbit, renderer.domElement);
    orbitControls.target = new THREE.Vector3(0,20,0);

    activeCamera = cameraPerspective;
    activeHelper = cameraPerspectiveHelper;

    cameraRig = new THREE.Group();
    cameraRig.add( cameraPerspective );
    cameraRig.add( cameraOrbit );
    scene.add( cameraRig );

    // Create a group to hold all the objects
    root = new THREE.Object3D;

    //Load lights
    lights();

    // Create the objects
    //loadFBX();

    //User interactions
    //interactions();
    addBoy();
    addGirl();

    /**********ADD MUSIC************/
    function handleFiles(event) {
        var files = event.target.files;
        $("#rlly").attr("src", URL.createObjectURL(files[0]));
        document.getElementById("rllly").load();
    }

    document.getElementById("rll").addEventListener("change", handleFiles, false);


    //DRAG AND DROP
    dragAndDrop();

    

    // Create a group to hold the objects
    group = new THREE.Object3D;
    root.add(group);

    // Create a texture map
    var map = new THREE.TextureLoader().load("../images/wood.jpg");
    map.wrapS = map.wrapT = THREE.RepeatWrapping;
    map.repeat.set(8, 8);

    var color = 0xffffff;

    // Put in a ground plane to show off the lighting
    geometry = new THREE.PlaneGeometry(200, 200, 50, 50);
    ground = new THREE.Mesh(geometry, new THREE.MeshPhongMaterial({color:color, map:map, side:THREE.DoubleSide}));

    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -4.02;

    // Add the mesh to our group
    group.add( ground );
    ground.castShadow = false;
    ground.receiveShadow = true;

    // Now add the group to our scene
    scene.add( root );
}
