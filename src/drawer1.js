import './styles.css'
import * as BABYLON from 'babylonjs'
import 'babylonjs-loaders'
export default class Playground {

    constructor(props) {
        const canvasId = props
        this.canvas = document.getElementById(canvasId)
        this.engine = new BABYLON.Engine(this.canvas, true,{ stencil: true })
        this.scene = null
        this.camera = null
        this.light = null
        this.chiller = null
        this.pump = null
        this.sphere=null
    }

    loadMesh=(callback)=>{
        BABYLON.SceneLoader.ImportMesh("", "./mesh-obj/", "Chiller1.obj", this.scene, mesh=>{
            this.chiller=BABYLON.Mesh.MergeMeshes(mesh)
            this.chiller.position.y=1           

        })//Object File Loader 
       
        BABYLON.SceneLoader.ImportMesh("", "./mesh-obj/", "Pump1.obj", this.scene, mesh=> {
            this.pump=BABYLON.Mesh.MergeMeshes(mesh)
            this.pump.position.y=1
            this.pump.position.x=-4
        })//Object File Loader 
callback()
    }


    createScene = (callback) => {

        this.scene = new BABYLON.Scene(this.engine);
        // create a basic BJS Scene object    
        // create a FreeCamera, and set its position to (x:0, y:5, z:-10)
        this.camera = new BABYLON.ArcRotateCamera('camera1', 12, 12, 12, new BABYLON.Vector3(0, 5, -10), this.scene, true);

        // target the camera to scene origin
        this.camera.setTarget(BABYLON.Vector3.Zero());

        // attach the camera to the canvas
        this.camera.attachControl(this.canvas, true);

        // create a basic light, aiming 0,1,0 - meaning, to the sky
        this.light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0, 1, 0), this.scene);

        const cone = BABYLON.MeshBuilder.CreateCylinder("cone", { diameterTop: 1, tessellation: 24, diameterBottom: 1 }, this.scene);
        cone.position.y = 1;
        cone.position.x = 4;
        const redMat = new BABYLON.StandardMaterial("redMat", this.scene);//Material for Color
        redMat.diffuseColor = new BABYLON.Color3(1, 0, 0);
        cone.material = redMat

        this.sphere = BABYLON.Mesh.CreateSphere('sphere1', 12, 2, this.scene);
        this.sphere.position.y = 1;
        this.sphere.position.x = 4;
        const grass1 = new BABYLON.StandardMaterial("grass1", this.scene);//Material for Texture
        grass1.emissiveTexture = new BABYLON.Texture("texture/texture1.jpg", this.scene);
        this.sphere.material = grass1;//Sphere Texture                      

        const outplane = BABYLON.MeshBuilder.CreatePlane("LabelBoard", { width: 6, height: 1 }, this.scene)
        outplane.billboardMode = BABYLON.AbstractMesh.BILLBOARDMODE_ALL//Rotate 360 deg
        outplane.position.y = 5
        outplane.position.x = 4

        const outplaneTexture = new BABYLON.DynamicTexture('dynamicTexture', { width: 600, height: 200 }, this.scene)
        outplane.material = new BABYLON.StandardMaterial("PlaneMaterial", this.scene)//Material for Texture
        outplane.material.diffuseTexture = outplaneTexture
        outplaneTexture.drawText("Babylon 3D", 23, null, 'bold 60px Arial', '#000000', '#ffffff');//Text Style


        const ground = BABYLON.Mesh.CreateGround('ground1', 16, 10, 2, this.scene);
        const myMaterial = new BABYLON.StandardMaterial("myMaterial", this.scene);//Material for texture
        myMaterial.diffuseTexture = new BABYLON.Texture("img-material/ground2.jpg", this.scene);
        ground.material = myMaterial;//Ground Texture

        var hl = new BABYLON.HighlightLayer("hl1", this.scene);
        hl.addMesh(this.sphere, BABYLON.Color3.White());        
      

        // const helper = this.scene.createDefaultEnvironment();
        // helper.setMainColor(BABYLON.Color3.Green());
        // return the created scene
        this.loadMesh(callback)
    }

  
    draw = (callback) => {
        console.log(callback);

        this.createScene(callback)

        // run the render loop
        this.engine.runRenderLoop(() => {
            this.scene.render();
        });

        // the canvas/window resize event handler
        window.addEventListener('resize', () => {
            this.engine.resize();
        });

    }


}
    //     window.addEventListener('DOMContentLoaded',  ()=> {
    //     // get the canvas DOM element
    //     const canvas = document.getElementById('renderCanvas');

    //     // load the 3D engine
    //     const engine = new BABYLON.Engine(canvas, true);

    //     // createScene function that creates and return the scene
    //     const createScene = () => {
    //         // create a basic BJS Scene object
    //         const scene = new BABYLON.Scene(engine);

    //         // create a FreeCamera, and set its position to (x:0, y:5, z:-10)
    //         const camera = new BABYLON.ArcRotateCamera('camera1', 12, 12, 12, new BABYLON.Vector3(0, 5, -10), scene, true);

    //         // target the camera to scene origin
    //         camera.setTarget(BABYLON.Vector3.Zero());

    //         // attach the camera to the canvas
    //         camera.attachControl(canvas, false);

    //         // create a basic light, aiming 0,1,0 - meaning, to the sky
    //         const light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0, 1, 0), scene);



    //         const cone = BABYLON.MeshBuilder.CreateCylinder("cone", { diameterTop: 1, tessellation: 24, diameterBottom: 1 }, scene);
    //         cone.position.y = 1;
    //         cone.position.x = 4;
    //         const redMat = new BABYLON.StandardMaterial("redMat", scene);//Material for Color
    //         redMat.diffuseColor = new BABYLON.Color3(1, 0, 0);
    //         cone.material = redMat

    //         const sphere = BABYLON.Mesh.CreateSphere('sphere1', 12, 2, scene);
    //         sphere.position.y = 1;
    //         sphere.position.x = 4;
    //         const grass1 = new BABYLON.StandardMaterial("grass1", scene);//Material for Texture
    //         grass1.emissiveTexture = new BABYLON.Texture("texture/texture1.jpg", scene);
    //         sphere.material = grass1;//Sphere Texture            




    //         const chiller = new BABYLON.SceneLoader.ImportMesh("", "./mesh-obj/", "Chiller1.obj", scene, {})//Object File Loader 

    //         const outplane = BABYLON.MeshBuilder.CreatePlane("LabelBoard", { width: 6, height: 1 }, scene)
    //         outplane.billboardMode = BABYLON.AbstractMesh.BILLBOARDMODE_ALL//Rotate 360 deg
    //         outplane.position.y = 5
    //         outplane.position.x = 4

    //         const outplaneTexture = new BABYLON.DynamicTexture('dynamicTexture', { width: 600, height: 200 }, scene)
    //         outplane.material = new BABYLON.StandardMaterial("PlaneMaterial", scene)//Material for Texture
    //         outplane.material.diffuseTexture = outplaneTexture
    //         outplaneTexture.drawText("Babylon 3D", 23, null, 'bold 60px Arial', '#000000', '#ffffff');//Text Style


    //         const ground = BABYLON.Mesh.CreateGround('ground1', 16, 10, 2, scene);
    //         const myMaterial = new BABYLON.StandardMaterial("myMaterial", scene);//Material for texture
    //         myMaterial.diffuseTexture = new BABYLON.Texture("img-material/ground2.jpg", scene);
    //         ground.material = myMaterial;//Ground Texture

    //         const helper = scene.createDefaultEnvironment();
    //         helper.setMainColor(BABYLON.Color3.Green());
    //         // return the created scene
    //         return scene;
    //     }

    //     // call the createScene function
    //     const scene = createScene();

    //     // run the render loop
    //     engine.runRenderLoop( ()=> {
    //         scene.render();
    //     });

    //     // the canvas/window resize event handler
    //     window.addEventListener('resize', function () {
    //         engine.resize();
    //     });
    // });



