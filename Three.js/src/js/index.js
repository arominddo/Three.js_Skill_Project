import * as THREE from "three";
import WebGL from "../../node_modules/three/examples/jsm/capabilities/WebGL.js";

const $result = document.getElementById('result');

if (WebGL.isWebGLAvailable()) {

    // 1. Scene: 화면에서 보여주려는 객체를 담는 공간
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffe287);
    // scene.add(요소);


    // 2. Camera: Scene을 바라볼 시점을 결정
    const camera = new THREE.PerspectiveCamera(50, $result.clientWidth / $result.clientHeight, 0.1, 10000);
    camera.position.set(2,2,2);
    camera.lookAt(0,0,0,)


    // 3. Renderer: Scene + Camera, 화면을 그려주는 열할
    const renderer = new THREE.WebGLRenderer({canvas: $result, antialias:true});
    renderer.setSize($result.clientWidth, $result.clientHeight);
    


    const light = new THREE.DirectionalLight(0xffffff);
    light.position.set(2,4,3);
    scene.add(light);

    
    
    const material = new THREE.MeshStandardMaterial({
        color : 0x2E6FF2
    })
    
    
    // 육면체
    const geo1 = new THREE.BoxGeometry(1,1,1);
    const obj1 = new THREE.Mesh(geo1, material);
    // scene.add(obj1);


    // 원뿔
    const geo2 = new THREE.ConeGeometry(0.5,1, 10);
    const obj2 = new THREE.Mesh(geo2, material);
    // scene.add(obj2);


    // 구
    const geo4 = new THREE.SphereGeometry(0.3);
    const obj4 = new THREE.Mesh(geo4, material);
    // scene.add(obj4);


    scene.add(objList);



    function animate() {
        // box.rotation.y += 0.01;
        
        requestAnimationFrame(animate);
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

