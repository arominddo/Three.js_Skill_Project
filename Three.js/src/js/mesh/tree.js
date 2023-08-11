import * as THREE from "three";


export default function printTree() {

    // =============================
    // 야자수
    const tree = new THREE.Group();
    const trunk = new THREE.Group();

    const loader = new THREE.TextureLoader();
    const baseColor = loader.load("./Textures/tree-trunk.jpg");
    const height = loader.load("./Textures/tree-trunk.jpg");
    const rough = loader.load("./Textures/tree-trunk.jpg");



    const trunkMaterial = new THREE.MeshStandardMaterial({
        color: 0xa38049,
        map: baseColor,
        
        roughness : 0,
        roughnessMap : rough,
        displacementMap : height,
        displacementScale : 0,

    })

    const trunkGeometry = new THREE.CylinderGeometry(0.8, 1, 1.5);
    const trunk1 = new THREE.Mesh(trunkGeometry, trunkMaterial);
    trunk.add(trunk1);


    const trunk2 = new THREE.Mesh(trunkGeometry, trunkMaterial);
    trunk2.position.set(0.1, 1.3, 0);
    trunk2.scale.set(0.9, 0.9, 0.9);
    trunk2.rotation.z = THREE.MathUtils.degToRad(-5);
    trunk.add(trunk2);


    const trunk3 = new THREE.Mesh(trunkGeometry, trunkMaterial);
    trunk3.position.set(0.2, 2.5, 0);
    trunk3.scale.set(0.8, 0.8, 0.8);
    trunk3.rotation.z = THREE.MathUtils.degToRad(-5);
    trunk.add(trunk3);

    const trunk4 = new THREE.Mesh(trunkGeometry, trunkMaterial);
    trunk4.position.set(0.3, 3.5, 0);
    trunk4.scale.set(0.7, 0.7, 0.7);
    trunk4.rotation.z = THREE.MathUtils.degToRad(-8);
    trunk.add(trunk4);

    tree.add(trunk)

    const baseColor2 = loader.load("./Textures/green-leaf.jpg");
    
    const treeLeafMaterial = new THREE.MeshStandardMaterial({
        color: 0x84ad88,
        side: THREE.DoubleSide,
        map: baseColor2,
        transparent: true
    })

    const treeLeafGeometry = new THREE.SphereGeometry(2, 32, 16, Math.PI / 3, Math.PI / 3);

    const tree_leaf = new THREE.Group();

    const leaf1 = new THREE.Mesh(treeLeafGeometry, treeLeafMaterial);
    leaf1.rotation.x = Math.PI / -2;
    leaf1.position.set(0, 3.2, 2);
    tree_leaf.add(leaf1);

    const leaf2 = new THREE.Mesh(treeLeafGeometry, treeLeafMaterial);
    leaf2.rotation.x = Math.PI / -2;
    leaf2.rotation.z = Math.PI / 2;
    leaf2.position.set(2, 3.2, 0);
    tree_leaf.add(leaf2);

    const leaf3 = new THREE.Mesh(treeLeafGeometry, treeLeafMaterial);
    leaf3.rotation.x = Math.PI / -2;
    leaf3.rotation.z = Math.PI;
    leaf3.position.set(0, 3.2, -2);
    tree_leaf.add(leaf3);

    const leaf4 = new THREE.Mesh(treeLeafGeometry, treeLeafMaterial);
    leaf4.rotation.x = Math.PI / -2;
    leaf4.rotation.z = Math.PI / -2;
    leaf4.position.set(-2, 3.2, 0);
    tree_leaf.add(leaf4);

    tree.add(tree_leaf);

    tree_leaf.position.x = -0.4;
    tree_leaf.rotation.z = THREE.MathUtils.degToRad(-10);

    return tree;

}
