import * as THREE from "three";

export default function printIsland() {
    
    const island = new THREE.Group();

    const topGeometry = new THREE.CylinderGeometry(5,5,0.5,9)
    const topMAterial = new THREE.MeshStandardMaterial({
        color : 0x6ca06e
    })

    const top = new THREE.Mesh(topGeometry, topMAterial);
    top.scale.x = 2;

    island.add(top);


    const bottomGeometry = new THREE.ConeGeometry(5,6,9);
    const bottomMaterial = new THREE.MeshStandardMaterial({
        color : 0xDEB887
    })
    const bottom = new THREE.Mesh(bottomGeometry, bottomMaterial);
    bottom.scale.x = 2;
    bottom.rotation.z = THREE.MathUtils.degToRad(180);
    bottom.position.y = -3;
    island.add(bottom);

    for (const mesh of island.children) {
        mesh.castShadow = true;
        mesh.receiveShadow = true;
    }


    return island;
}