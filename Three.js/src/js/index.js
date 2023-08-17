import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader.js";

import printIsland from "./mesh/island.js";
import printHanrabong from "./mesh/hanrabong.js";
import printTree from "./mesh/tree.js";
import printMountain from "./mesh/mountain.js";
import printStone from "./mesh/stone.js";

// 장면구조
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x7ccad5);

const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0,10,50);
camera.lookAt(0,0,0);

const renderer = new THREE.WebGL1Renderer();
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);
renderer.shadowMap.enabled = true;

// 도형
// const geometry = new THREE.BoxGeometry(1,1,1);
// const material = new THREE.MeshStandardMaterial({
//     color: 0xffe272
// })

// const mesh = new THREE.Mesh(geometry, material);
// scene.add(mesh);


const island = printIsland();
island.position.y = -1.5;
scene.add(island);

const hanrabong = printHanrabong();
hanrabong.position.set(-5, 0, -1);
scene.add(hanrabong);

const miniHanrabong = printHanrabong();
miniHanrabong.scale.set(0.7, 0.7, 0.7);
miniHanrabong.position.set(-6, 0, 1.5);
scene.add(miniHanrabong);

const tree = printTree();
tree.position.set(5,-0.5, -1);
tree.rotation.y = Math.PI / -3;
scene.add(tree);

const miniTree = printTree();
miniTree.position.set(6,-1, 2);
miniTree.scale.set(0.6,0.6,0.6);
scene.add(miniTree);

const mountain = printMountain();
mountain.scale.set(1.2, 1.6, 1);
mountain.position.set(0, 1, -2);
scene.add(mountain);

const harbang = printStone();
harbang.position.set(3,-0.5,1);
harbang.scale.set(0.9,0.9,0.9)
harbang.rotation.y = Math.PI / -8;
scene.add(harbang);

const modelLoader = new GLTFLoader();
modelLoader.load("./src/models/Lycat-3d.glb", (gltf) => {
    const model = gltf.scene;
    model.position.set(-3, -1.3, 1);
    model.rotation.y = Math.PI / 8;
    
    for (const mesh of model.children) {
        mesh.castShadow = true;
    }
    scene.add(model);
})



// 빛
const ambientLight = new THREE.AmbientLight(0xffffff, 2);
scene.add(ambientLight);

const directionLight = new THREE.DirectionalLight(0xffffff, 2);
directionLight.position.set(2,1,2);
scene.add(directionLight);
directionLight.castShadow = true;



// OrbitControls
const control = new OrbitControls(camera, renderer.domElement);
control.autoRotate = true;
control.autoRotateSpeed = -1;
control.minDistance = 5;
control.maxDistance = 100;


// 연출
function animate(){
    control.update();
    renderer.render(scene, camera);
    requestAnimationFrame(animate);

}

animate();

window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
})