import * as THREE from "three";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls.js"
import WebGL from "../../node_modules/three/examples/jsm/capabilities/WebGL.js";

const $result = document.getElementById('result');

if (WebGL.isWebGLAvailable()) {

    // 1. Scene: 화면에서 보여주려는 객체를 담는 공간
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffe287);
    // scene.add(요소);


    // 2. Camera: Scene을 바라볼 시점을 결정
    // const camera = new THREE.PerspectiveCamera(50, $result.clientWidth / $result.clientHeight, 0.1, 10000);
    const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 10000);

    camera.position.set(3,3,3);
    camera.lookAt(0,0,0,)


    // 3. Renderer: Scene + Camera, 화면을 그려주는 열할
    const renderer = new THREE.WebGLRenderer({canvas: $result, antialias:true});
    renderer.setSize($result.clientWidth, $result.clientHeight);
    


    const light = new THREE.DirectionalLight(0xffffff);
    light.position.set(2,4,3);
    scene.add(light);

    
    const geometry = new THREE.DodecahedronGeometry(1);
    const material = new THREE.MeshStandardMaterial({
        color: 0xffaaaa,
    })

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);


    // 1. 위치
    mesh.position.set(0,2,1);


    // 2. 회전
    mesh.rotation.y = THREE.MathUtils.degToRad(30);




    // axesHelper
    const axesHelper = new THREE.AxesHelper(10);
    scene.add(axesHelper);



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
        camera.aspect = window.innerWidth/window.innerHeight
        camera.updateProjectionMatrix(); // 카메라 업데이트

        // 2. 렌더러의 크기
        renderer.setSize(window.innerWidth, window.innerHeight);



    })




} else {
    document.body.appendChild(WebGL.getWebGLErrorMessage)
}

