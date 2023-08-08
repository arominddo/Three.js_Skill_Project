import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"
import WebGL from "../../node_modules/three/examples/jsm/capabilities/WebGL.js";
import printTree from "./mesh/tree.js";
import printTangerine from "./mesh/tangerine.js";

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
    document.body.appendChild(renderer.domElement);


    const light = new THREE.DirectionalLight(0xffffff);
    light.position.set(2, 4, 3);
    scene.add(light);



    const tree = printTree();
    const tangerine = printTangerine();

    scene.add(tangerine);

    scene.add(tree);
    


    // axesHelper
    const axes = new THREE.AxesHelper(10);
    scene.add(axes);

    

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

