import React from 'react';
import * as THREE from 'three';
import { useUpdate } from 'react-three-fiber'

var camera, scene, renderer;
var geometry, material, mesh;



const App=()=>{
  const init=()=> {

    camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 10 );
    camera.position.z = 1;

    scene = new THREE.Scene();

    geometry = new THREE.BoxGeometry( 0.2, 0.2, 0.2 );
    material = new THREE.MeshNormalMaterial();

    mesh = new THREE.Mesh( geometry, material );
    scene.add( mesh );

    renderer = new THREE.WebGLRenderer( { antialias: true } );
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );
}


 


const animate=()=> {

    requestAnimationFrame( animate );

    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.01;

    renderer.render( scene, camera );

}
init();
animate();
return (<div>
   <canvas></canvas>
</div>
 
)
 
}

export default App;
