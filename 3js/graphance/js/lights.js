/************************************************************************/
            /*FILE THAT CONTAINS CANVAS' LIGHTS*/
/************************************************************************/

function lights()
{
    var spotLights = [];

    spotLight = new THREE.SpotLight (0x00fa00);
    spotLight.position.set(40, 70, -10);
    spotLight.target.position.set(-2, 0, -2);
    spotLights.push(spotLight);
    root.add(spotLight);

    spotLight = new THREE.SpotLight (0x5500ff);
    spotLight.position.set(0, 70, -40);
    spotLight.target.position.set(-2, 0, -2);
    spotLights.push(spotLight);
    root.add(spotLight);

    spotLight = new THREE.SpotLight (0xfaf600);
    spotLight.position.set(0, 70, 40);
    spotLight.target.position.set(-2, 0, -2);
    spotLights.push(spotLight);
    root.add(spotLight);

    for(var sp of spotLights)
    {
        sp.castShadow = true;

        // sp.shadow.orbitCamera.near = 1;
        // sp.shadow.orbitCamera.far = 200;
        // sp.shadow.orbitCamera.fov = 45;

        sp.shadow.mapSize.width = SHADOW_MAP_WIDTH;
        sp.shadow.mapSize.height = SHADOW_MAP_HEIGHT;
    }

    ambientLight = new THREE.AmbientLight ( 0x222222 );
    root.add(ambientLight);

}