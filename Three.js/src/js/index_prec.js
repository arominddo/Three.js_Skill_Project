import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"
import WebGL from "../../node_modules/three/examples/jsm/capabilities/WebGL.js";
import printTree from "./mesh/tree.js";
import printHanrabong from "./mesh/hanrabong.js";
import printMountain from "./mesh/moutain.js";
import printStone from "./mesh/stone.js";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader.js";


if (WebGL.isWebGLAvailable()) {

    // 1. Scene: 화면에서 보여주려는 객체를 담는 공간
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffe287);
    // scene.add(요소);


    // 2. Camera: Scene을 바라볼 시점을 결정
    // const camera = new THREE.PerspectiveCamera(50, $result.clientWidth / $result.clientHeight, 0.1, 10000);
    const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 10000);

    camera.position.set(10, 10, 10);
    camera.lookAt(0, 0, 0,)


    // 3. Renderer: Scene + Camera, 화면을 그려주는 열할
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    document.body.appendChild(renderer.domElement);


    // 빛 종류 : DirectionalLight, PointLight, SpotLight
    const light = new THREE.DirectionalLight(0xffffff, 3);
    light.position.set(2, 6, 3);
    scene.add(light);

    light.castShadow = true;
    light.shadow.mapSize.width = 1024;
    light.shadow.mapSize.height = 1024;

    const dlHelper = new THREE.DirectionalLightHelper(light, 1, 0xff0000);
    scene.add(dlHelper);
  
    scene.add(new THREE.AmbientLight(0xffffff, 0.5));


    // 도형
    const tree = printTree();
    tree.position.x = 10;

    const hanrabong = printHanrabong();
    hanrabong.position.x = 5;
    hanrabong.position.y = 1;
    
    const mountain = printMountain();
    mountain.position.y = 0.6;
    
    const stone = printStone();
    stone.position.y = 0.1;
    stone.position.z = 5;

    scene.add(hanrabong);
    scene.add(tree);
    scene.add(mountain);
    scene.add(stone);
    
    hanrabong.castShadow = true;
    tree.castShadow = true;
    

    const geometry2 = new THREE.PlaneGeometry(100, 100);
    const material2 = new THREE.MeshStandardMaterial({
        color: 0x81a8f7,
        side: THREE.DoubleSide
    })
    const plane = new THREE.Mesh(geometry2, material2);
    plane.rotation.x = Math.PI / -2;
    plane.position.y = -1;
    scene.add(plane);

    plane.receiveShadow = true;


    


    // axesHelper
    const axes = new THREE.AxesHelper(10);
    scene.add(axes);


    
    const loader = new GLTFLoader();
    loader.load("./src/models/Lycat-3d.glb", (gltf) => {
        const model = gltf.scene;
        scene.add(model);
        model.position.set(5,-1,5)
    })







    // OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement);


    // 조작 설정
    // controls



    function animate() {
        // box.rotation.y += 0.01;

        requestAnimationFrame(animate);
        controls.update();
        renderer.render(scene, camera);

    }
    animate();

    window.addEventListener("resize", () => {

        // 1. 카메라의 종횡비
        camera.aspect = window.innerWidth / window.innerHeight
        camera.updateProjectionMatrix(); // 카메라 업데이트

        // 2. 렌더러의 크기
        renderer.setSize(window.innerWidth, window.innerHeight);



    })




} else {
    document.body.appendChild(WebGL.getWebGLErrorMessage)
}

